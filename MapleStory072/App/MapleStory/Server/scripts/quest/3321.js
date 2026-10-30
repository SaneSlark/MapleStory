// CMS072 Check/Act contract; 062 generator used only as a handoff reference.
var phase = 0, closed = false;
function start(mode, type, selection) {
    if (closed) return;
    if (mode != 1) { closed = true; qm.dispose(); return; }
    var q = Packages.server.quest.MapleQuest.getInstance(3321);
    if (phase == 0) {
        if (!q.canStart(qm.getPlayer(), qm.getNpc())) { closed = true; qm.dispose(); return; }
        phase = 1;
        qm.sendYesNo("失踪的炼金术士——德朗博士");
        return;
    }
    closed = true;
    if (q.canStart(qm.getPlayer(), qm.getNpc())) qm.startQuestInScript(3321);
    qm.dispose();
}
