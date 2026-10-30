// CMS072 Check/Act contract; 062 generator used only as a handoff reference.
var phase = 0, closed = false;
function start(mode, type, selection) {
    if (closed) return;
    if (mode != 1) { closed = true; qm.dispose(); return; }
    var q = Packages.server.quest.MapleQuest.getInstance(3305);
    if (phase == 0) {
        if (!q.canStart(qm.getPlayer(), qm.getNpc())) { closed = true; qm.dispose(); return; }
        phase = 1;
        qm.sendYesNo("#t1102135#弄丢了。如果没有了他的话，其他人就无法知道自己是隶属于蒙特鸠了，怎么办呢？去找蒙特鸠的会长#b#p2111000##k看看有什么办法。");
        return;
    }
    closed = true;
    if (q.canStart(qm.getPlayer(), qm.getNpc())) qm.startQuestInScript(3305);
    qm.dispose();
}
