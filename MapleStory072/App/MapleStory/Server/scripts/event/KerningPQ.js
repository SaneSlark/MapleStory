// CMS072 Quest.wz/1201: four players, level 21-30, thirty minutes.
// Puzzle choices use native Map.wz area rectangles. No imported NX/prize table.
var progressLock = new java.util.concurrent.locks.ReentrantLock();
function init() { em.setProperty("state", "0"); em.setProperty("leader", "true"); }
function setup(level, partyid) {
    progressLock.lock();
    try {
        if (em.getProperty("state") != "0") return null;
        em.setProperty("state", "1");
        var eim = em.newInstance("KerningPQ" + partyid);
        eim.setProperty("phase", "stages");
        for (var i = 0; i < 6; i++) {
            var map = eim.setInstanceMap(103000800 + i);
            map.resetFully(); map.setSpawns(i == 0 || i == 5);
            if (i < 4) map.getPortal("next00").setScriptName("kpq_next");
            if (i >= 1 && i <= 3) {
                var choices = [], count = map.getAreas().size();
                for (var n = 0; n < count; n++) choices.push(n);
                for (var n = count - 1; n > 0; n--) {
                    var j = Math.floor(Math.random() * (n + 1)), tmp = choices[n]; choices[n] = choices[j]; choices[j] = tmp;
                }
                choices = choices.slice(0, 3).sort();
                eim.setProperty("combo" + i, choices.join(","));
            }
        }
        eim.startEventTimer(1800000); return eim;
    } finally { progressLock.unlock(); }
}
function clearMaterials(player) {
    for (var id = 4001007; id <= 4001008; id++) {
        var count = player.getItemQuantity(id, false);
        if (count > 0) Packages.server.MapleInventoryManipulator.removeById(player.getClient(), Packages.constants.GameConstants.getInventoryType(id), id, count, false, false);
    }
}
function playerEntry(eim, player) {
    clearMaterials(player); var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0)); player.tryPartyQuest(1201);
}
function valid(eim, player) {
    var index = player.getMapId() - 103000800;
    return eim.getProperty("phase") == "stages" && player.getEventInstance() == eim && index >= 0 && index <= 4 && player.getMap() == eim.getMapInstance(index);
}
function talk(eim, cm) {
    progressLock.lock();
    try {
        var player = cm.getPlayer();
        if (!valid(eim, player)) { cm.sendOk("本轮挑战已结束，请通过出口返回。"); return; }
        var stage = player.getMapId() - 103000800;
        if (stage > 0 && eim.getProperty("clear" + (stage - 1)) != "1") return;
        if (eim.getProperty("clear" + stage) == "1") { cm.sendOk("本关已经通过，请从右侧传送口前往下一关。"); return; }
        if (stage == 0 && !eim.isLeader(player)) {
            var key = "question" + player.getId(), question = eim.getProperty(key);
            var questions = ["战士第一次转职的最低等级", "魔法师第一次转职的最低等级", "第二次转职的最低等级"];
            var answers = [10, 8, 30];
            if (eim.getProperty("pass" + player.getId()) == "1") { cm.sendOk("你已经领过通行证，请交给队长。"); return; }
            if (question == null) { question = Math.floor(Math.random() * answers.length); eim.setProperty(key, "" + question); }
            var amount = answers[parseInt(question)];
            if (player.getItemQuantity(4001007, false) != amount) { cm.sendOk("请打倒这里的鳄鱼，带来与下列答案数量相同的#b#t4001007##k：\r\n" + questions[parseInt(question)] + "。\r\n数量必须恰好相等。"); return; }
            if (!cm.canHold(4001008, 1)) { cm.sendOk("请先在其他栏留出空间。"); return; }
            eim.setProperty("pass" + player.getId(), "1");
            cm.gainItem(4001007, -amount); cm.gainItem(4001008, 1);
            cm.sendOk("回答正确！请把通行证交给队长。"); return;
        }
        if (!eim.isLeader(player)) { cm.sendOk("请由队长与我交谈。组合关卡需要另外三名队员分别站在不同的位置。"); return; }
        if (stage == 0) {
            var players = eim.getPlayers(), ready = players.size() == 4;
            for (var i = 0; i < players.size(); i++) if (!eim.isLeader(players.get(i)) && eim.getProperty("pass" + players.get(i).getId()) != "1") ready = false;
            if (!ready || !cm.haveItem(4001008, 3)) { cm.sendOk("请让三名队员分别回答问题，收集鳄鱼掉落的票券，换取通行证。队长收齐三张通行证后再与我交谈。"); return; }
            cm.gainItem(4001008, -3);
        } else if (stage <= 3) {
            var map = player.getMap(), players = eim.getPlayers(), occupied = [], onAreas = 0;
            for (var area = 0; area < map.getAreas().size(); area++) {
                var count = 0;
                for (var i = 0; i < players.size(); i++) {
                    var member = players.get(i);
                    if (!eim.isLeader(member) && member.getMap() == map && map.getArea(area).contains(member.getTruePosition())) count++;
                }
                if (count > 1) { cm.sendOk("每个位置只能站一名队员。"); return; }
                if (count == 1) { occupied.push(area); onAreas++; }
            }
            if (onAreas != 3) { cm.sendOk("请让三名队员各站一个不同的位置，再由队长与我交谈。地上的物品不能代替队员。"); return; }
            if (occupied.sort().join(",") != eim.getProperty("combo" + stage)) {
                cm.showEffect(true, "quest/party/wrong_kor"); cm.playSound(true, "Party1/Failed");
                cm.sendOk("组合不正确，请尝试其他位置。"); return;
            }
        } else {
            if (player.getMap().getAllMonstersThreadsafe().size() != 0 || !cm.haveItem(4001008, 10)) { cm.sendOk("请打倒本关全部怪物和绿水灵王，并把十张通行证集中交给队长。"); return; }
            cm.gainItem(4001008, -10);
        }
        eim.setProperty("clear" + stage, "1");
        cm.showEffect(true, "quest/party/clear"); cm.playSound(true, "Party1/Clear");
        if (stage == 4) clearPQ(eim);
        else cm.sendOk("本关通过！请从右侧传送口前往下一关。");
    } finally { progressLock.unlock(); }
}
function next(eim, player) {
    progressLock.lock();
    try {
        if (!valid(eim, player)) return false;
        var stage = player.getMapId() - 103000800;
        if (stage >= 4 || eim.getProperty("clear" + stage) != "1") return false;
        var map = eim.getMapInstance(stage + 1); player.changeMap(map, map.getPortal("st00")); return true;
    } finally { progressLock.unlock(); }
}
function clearPQ(eim) {
    if (eim.getProperty("phase") != "stages" || eim.getProperty("clear4") != "1") return;
    eim.setProperty("phase", "bonus");
    var players = eim.getPlayers(), map = eim.getMapInstance(5);
    for (var i = 0; i < players.size(); i++) {
        var p = players.get(i); clearMaterials(p); p.endPartyQuest(1201); p.changeMap(map, map.getPortal("st00"));
    }
    eim.broadcastPlayerMsg(5, "挑战成功！可以使用本轮剩余时间进入奖励猎场，通过出口NPC返回废弃都市。");
}
function end(eim) {
    if (eim.getProperty("phase") == "ending") return;
    eim.setProperty("phase", "ending");
    var players = eim.getPlayers();
    for (var i = 0; i < players.size(); i++) clearMaterials(players.get(i));
    eim.disposeIfPlayerBelow(100, 103000890); init();
}
function changedMap(eim, player, mapid) {
    var phase = eim.getProperty("phase"); if (phase == "ending") return;
    if ((phase == "stages" && mapid >= 103000800 && mapid <= 103000804) || (phase == "bonus" && mapid == 103000805)) return;
    clearMaterials(player); var leader = eim.isLeader(player); eim.unregisterPlayer(player);
    if ((phase != "bonus" && (leader || eim.getPlayerCount() < 4)) || eim.getPlayerCount() == 0) end(eim);
}
function playerExit(eim, player) { var map = em.getChannelServer().getMapFactory().getMap(103000890); player.changeMap(map, map.getPortal(0)); }
function playerDisconnected(eim, player) {
    clearMaterials(player); var leader = eim.isLeader(player); eim.unregisterPlayer(player);
    if ((eim.getProperty("phase") != "bonus" && (leader || eim.getPlayerCount() < 4)) || eim.getPlayerCount() == 0) end(eim);
    return 0;
}
function scheduledTimeout(eim) { end(eim); }
function playerDead(eim, player) {}
function playerRevive(eim, player) { playerExit(eim, player); return false; }
function leftParty(eim, player) { if (eim.getProperty("phase") != "bonus") end(eim); else playerExit(eim, player); }
function disbandParty(eim) { end(eim); }
function monsterValue(eim, mobid) { return 0; }
function monsterKilled(eim, player, points) {}
function allMonstersDead(eim) {}
function cancelSchedule() { var instances = new java.util.ArrayList(em.getInstances()); for (var i = 0; i < instances.size(); i++) end(instances.get(i)); }
