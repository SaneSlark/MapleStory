// CMS072 quest 1028: Check.img gates and QuestInfo.img free passage.
// Dialogue is a compatibility repair based on the client's quest description.
var prompted = false;
var finished = false;
function start(mode, type, selection) {
    if (finished) return;
    if (mode != 1) { finished = true; qm.dispose(); return; }
    var quest = Packages.server.quest.MapleQuest.getInstance(1028);
    if (qm.getNpc() != 22000 || qm.getMapId() != 60000 || !quest.canStart(qm.getPlayer(), qm.getNpc())) {
        finished = true;
        qm.dispose();
        return;
    }
    if (!prompted) {
        prompted = true;
        qm.sendYesNo("路卡斯已经和我打过招呼了，这次我会免费送你到明珠港。准备好离开彩虹岛了吗？到达后，请找坤转达路卡斯的请求。");
        return;
    }
    finished = true;
    qm.forceStartQuest();
    if (qm.getQuestStatus(1028) == 1) qm.warp(104000000, 0);
    qm.dispose();
}
