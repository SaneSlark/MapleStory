var done = false;
function start() {
    if (cm.getMapId() != 103000000) { done = true; cm.dispose(); return; }
    cm.sendYesNo("欢迎参加废弃都市组队任务！\r\n需要4名21～30级队员，限时30分钟。请全员在本频道、同一地图集合，由队长开始挑战。\r\n通关后可使用本轮剩余时间进入奖励猎场。是否开始？");
}
function action(mode, type, selection) {
    if (done) return; done = true;
    if (mode != 1 || cm.getMapId() != 103000000) { cm.dispose(); return; }
    if (cm.getParty() == null || !cm.isLeader()) { cm.sendOk("请组成4人队伍，由队长与我交谈。"); cm.dispose(); return; }
    var members = cm.getParty().getMembers(), valid = members.size() == 4, it = members.iterator();
    while (it.hasNext()) {
        var member = it.next(), player = cm.getMap().getCharacterById(member.getId());
        if (player == null || !member.isOnline() || member.getChannel() != cm.getClient().getChannel() || player.getLevel() < 21 || player.getLevel() > 30 || player.getEventInstance() != null) valid = false;
    }
    if (!valid) { cm.sendOk("需要4名21～30级队员，全员在本频道、同一地图，且未参加其他活动。"); cm.dispose(); return; }
    var em = cm.getEventManager("KerningPQ");
    if (em == null || em.getProperty("state") != "0") { cm.sendOk("本频道已有队伍正在挑战，请稍后再来。"); cm.dispose(); return; }
    cm.dispose(); em.startInstance(cm.getParty(), cm.getMap());
}
