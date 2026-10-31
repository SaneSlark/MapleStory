// CMS Say 2127: five free trips, not five quest rewards.
var phase = 0, closed = false;
function trips() {
    var text = qm.getQuestRecord(2127).getCustomData();
    if (text == null || String(text) == "") return 0;
    if (!/^[0-5]$/.test(String(text))) return 5;
    return parseInt(String(text), 10);
}
function end(mode, type, selection) {
    if (closed) return;
    if (mode != 1) { closed = true; qm.dispose(); return; }
    var q = Packages.server.quest.MapleQuest.getInstance(2127), used = trips();
    if (!q.canComplete(qm.getPlayer(), qm.getNpc()) || used >= 5) { closed = true; qm.dispose(); return; }
    if (phase == 0) {
        phase = 1;
        qm.sendYesNo("我答应免费送你去阿里安特五次。现在还剩#b" + (5 - used) + "次#k，要出发吗？");
        return;
    }
    closed = true;
    used++;
    if (used == 5) {
        qm.completeQuestInScript(2127);
        if (qm.getQuestStatus(2127) != 2) { qm.dispose(); return; }
    }
    qm.getQuestRecord(2127).setCustomData(String(used));
    qm.dispose();
    qm.warp(260000000, 0);
}
