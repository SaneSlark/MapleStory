// CMS072 Quest.wz/1200: level 10+, 3-6 players, 10 minutes, 10 cakes.
var flowerLock = new java.util.concurrent.locks.ReentrantLock();
function init() { em.setProperty("state", "0"); em.setProperty("leader", "true"); }
function setup(level, partyid) {
    if (em.getProperty("state") != "0") return null;
    em.setProperty("state", "1");
    var eim = em.newInstance("HenesysPQ" + partyid);
    eim.setProperty("phase", "flowers");
    var map = eim.setInstanceMap(910010000);
    map.resetFully(false);
    map.setSpawns(false);
    // Native monster levels and native six-second cake production are retained.
    eim.startEventTimer(600000);
    return eim;
}
function removeSeeds(player) {
    for (var id = 4001095; id <= 4001100; id++) {
        var count = player.getItemQuantity(id, false);
        if (count > 0) Packages.server.MapleInventoryManipulator.removeById(player.getClient(), Packages.constants.GameConstants.getInventoryType(id), id, count, false, false);
    }
}
function removeCakes(player) {
    var count = player.getItemQuantity(4001101, false);
    if (count > 0) Packages.server.MapleInventoryManipulator.removeById(player.getClient(), Packages.constants.GameConstants.getInventoryType(4001101), 4001101, count, false, false);
}
function playerEntry(eim, player) {
    removeSeeds(player); removeCakes(player);
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    player.tryPartyQuest(1200);
}
function plantSeed(eim, reactor) {
    flowerLock.lock();
    try {
        var id = reactor.getReactorId();
        if (eim.getProperty("phase") != "flowers" || reactor.getMap() != eim.getMapInstance(0) || id < 9108000 || id > 9108005 || reactor.getState() < 1) return;
        var key = "flower" + id;
        if (eim.getProperty(key) == "1") return;
        eim.setProperty(key, "1");
        var count = 0;
        for (var i = 9108000; i <= 9108005; i++) if (eim.getProperty("flower" + i) == "1") count++;
        var moon = eim.getMapInstance(0).getReactorByName("fullmoon");
        if (moon != null) moon.forceHitReactor(count);
        if (count == 6) summonRabbitLocked(eim);
    } finally { flowerLock.unlock(); }
}
function summonRabbit(eim) {
    flowerLock.lock();
    try { summonRabbitLocked(eim); } finally { flowerLock.unlock(); }
}
function summonRabbitLocked(eim) {
    if (eim.getProperty("phase") != "flowers") return;
    for (var i = 9108000; i <= 9108005; i++) if (eim.getProperty("flower" + i) != "1") return;
    eim.setProperty("phase", "protect");
    var map = eim.getMapInstance(0), mob = em.getMonster(9300061);
    eim.registerMonster(mob);
    var moon = map.getReactorByName("fullmoon");
    map.spawnMonsterOnGroundBelow(mob, moon.getPosition());
    map.setSpawns(true); map.respawn(true);
    eim.broadcastPlayerMsg(5, "请保护月妙，收集10个月妙的年糕后交给兴儿！");
}
function clearPQ(eim) {
    if (eim.getProperty("phase") != "protect") return;
    eim.setProperty("phase", "clear");
    var map = eim.getMapInstance(0); map.setSpawns(false); map.killAllMonsters(false);
    var bonus = eim.setInstanceMap(910010200); bonus.resetFully(false);
    var players = eim.getPlayers();
    for (var i = 0; i < players.size(); i++) {
        var player = players.get(i); removeSeeds(player); player.endPartyQuest(1200);
        var destination = em.getChannelServer().getMapFactory().getMap(910010100);
        player.changeMap(destination, destination.getPortal(0));
    }
    // Bonus access uses the original round's remaining time, with no invented reward/time extension.
}
function end(eim) {
    var phase = eim.getProperty("phase");
    if (phase == "ending") return;
    eim.setProperty("phase", "ending");
    var players = eim.getPlayers();
    for (var i = 0; i < players.size(); i++) { removeSeeds(players.get(i)); if (phase != "clear") removeCakes(players.get(i)); }
    var map = eim.getMapInstance(0); map.setSpawns(false); map.killAllMonsters(false);
    if (phase == "clear") eim.getMapInstance(1).killAllMonsters(false);
    eim.disposeIfPlayerBelow(100, phase == "clear" ? 910010400 : 910010300);
    init();
}
function changedMap(eim, player, mapid) {
    var phase = eim.getProperty("phase");
    if (phase == "ending") return;
    if (mapid == 910010000 && phase != "clear") return;
    if (phase == "clear" && (mapid == 910010100 || mapid == 910010200)) return;
    removeSeeds(player); if (phase != "clear") removeCakes(player);
    var leader = eim.isLeader(player); eim.unregisterPlayer(player);
    if (phase != "clear" && (leader || eim.getPlayerCount() < 3)) end(eim);
    else if (eim.getPlayerCount() == 0) end(eim);
}
function playerExit(eim, player) {
    var phase = eim.getProperty("phase"), destination = eim.getMapFactory().getMap(phase == "clear" ? 910010400 : 910010300);
    player.changeMap(destination, destination.getPortal(0));
}
function playerDisconnected(eim, player) {
    removeSeeds(player); if (eim.getProperty("phase") != "clear") removeCakes(player);
    var leader = eim.isLeader(player); eim.unregisterPlayer(player);
    if (eim.getProperty("phase") != "clear" && (leader || eim.getPlayerCount() < 3)) end(eim);
    else if (eim.getPlayerCount() == 0) end(eim);
    return 0;
}
function monsterValue(eim, mobid) {
    if (mobid == 9300061 && eim.getProperty("phase") == "protect") { eim.broadcastPlayerMsg(5, "月妙被击倒了，挑战失败。"); end(eim); }
    return 0;
}
function scheduledTimeout(eim) { end(eim); }
function playerDead(eim, player) { if (eim.getProperty("phase") != "clear") end(eim); }
function playerRevive(eim, player) { playerExit(eim, player); return false; }
function leftParty(eim, player) { if (eim.getProperty("phase") != "clear") end(eim); else playerExit(eim, player); }
function disbandParty(eim) { end(eim); }
function allMonstersDead(eim) {}
function monsterKilled(eim, player, points) {}
function cancelSchedule() {
    var instances = new java.util.ArrayList(em.getInstances());
    for (var i = 0; i < instances.size(); i++) end(instances.get(i));
}
