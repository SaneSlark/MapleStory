var done = false;
function start() {
    var map = cm.getMapId();
    if (map == 100000200) cm.sendSimple("欢迎参加迎月花保护月妙组队任务！\r\n10级以上，3～6人组队，限时10分钟。\r\n#L0#开始组队挑战#l\r\n#L1#用20个月妙的年糕兑换年糕帽#l");
    else if (map == 910010100) cm.sendSimple("谢谢你们保护月妙！\r\n#L2#进入奖励猎场（使用本轮剩余时间）#l\r\n#L3#返回射手村#l");
    else { done = true; cm.dispose(); cm.warp(100000200, 0); }
}
function action(mode, type, selection) {
    if (done) return;
    if (mode != 1) { done = true; cm.dispose(); return; }
    done = true;
    var mapid = cm.getMapId();
    if (mapid == 910010100) {
        var eim = cm.getEventInstance();
        cm.dispose();
        if (selection == 2 && eim != null && eim.getProperty("phase") == "clear") cm.getPlayer().changeMap(eim.getMapInstance(1), eim.getMapInstance(1).getPortal(0));
        else if (selection == 3) cm.warp(100000200, 0);
        return;
    }
    if (mapid != 100000200) { cm.dispose(); return; }
    if (selection == 1) {
        if (!cm.haveItem(4001101, 20)) cm.sendOk("请带来20个月妙的年糕。");
        else if (!cm.canHold(1002798, 1)) cm.sendOk("请先在装备栏留出一个空位。");
        else { cm.gainItem(4001101, -20); cm.gainItem(1002798, 1); }
        cm.dispose(); return;
    }
    if (selection != 0) { cm.dispose(); return; }
    if (cm.getParty() == null || !cm.isLeader()) { cm.sendOk("请组成3～6人的队伍，由队长与我交谈。"); cm.dispose(); return; }
    var members = cm.getParty().getMembers(), valid = members.size() >= 3 && members.size() <= 6;
    var it = members.iterator();
    while (it.hasNext()) {
        var member = it.next(), player = cm.getMap().getCharacterById(member.getId());
        if (player == null || !member.isOnline() || member.getChannel() != cm.getClient().getChannel() || player.getLevel() < 10 || player.getEventInstance() != null) valid = false;
    }
    if (!valid) { cm.sendOk("队伍须有3～6名10级以上成员，并且全员在本频道、同一地图，未参加其他活动。"); cm.dispose(); return; }
    var em = cm.getEventManager("HenesysPQ");
    if (em == null || em.getProperty("state") != "0") { cm.sendOk("本频道的月妙挑战正在进行，请稍后再来。"); cm.dispose(); return; }
    cm.dispose(); em.startInstance(cm.getParty(), cm.getMap());
}
