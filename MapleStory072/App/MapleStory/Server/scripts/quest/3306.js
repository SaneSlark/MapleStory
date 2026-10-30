// CMS072 Check/Act contract; 062 generator used only as a handoff reference.
var phase = 0, closed = false;
function start(mode, type, selection) {
    if (closed) return;
    if (mode != 1) { closed = true; qm.dispose(); return; }
    var q = Packages.server.quest.MapleQuest.getInstance(3306);
    if (phase == 0) {
        if (!q.canStart(qm.getPlayer(), qm.getNpc())) { closed = true; qm.dispose(); return; }
        phase = 1;
        qm.sendYesNo("啊……！表示隶属于卡帕莱特的#t1102136#不见了。这可怎么办呢？去找卡帕莱特的会长#p2111001#看看有什么办法。");
        return;
    }
    closed = true;
    if (q.canStart(qm.getPlayer(), qm.getNpc())) qm.startQuestInScript(3306);
    qm.dispose();
}
