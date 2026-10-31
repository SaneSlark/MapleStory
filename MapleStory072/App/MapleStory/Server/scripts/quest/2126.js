// CMS Check/Act authority. HeavenMS 2124/2126 used as a handoff reference.
var phase = 0, closed = false;
function end(mode, type, selection) {
    if (closed) return;
    if (mode != 1) { closed = true; qm.dispose(); return; }
    var q = Packages.server.quest.MapleQuest.getInstance(2126);
    if (!q.canComplete(qm.getPlayer(), qm.getNpc())) { closed = true; qm.dispose(); return; }
    if (phase == 0) {
        phase = 1;
        qm.sendYesNo("你带来了#t4031624#。要把补给品交给我吗？");
        return;
    }
    closed = true;
    qm.completeQuestInScript(2126);
    if (qm.getQuestStatus(2126) == 2) qm.gainItem(4031624, -1);
    qm.dispose();
}
