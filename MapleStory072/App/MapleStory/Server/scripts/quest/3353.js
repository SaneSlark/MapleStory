// CMS072 Check/Act contract; 062 generator used only as a handoff reference.
var phase = 0, closed = false;
function start(mode, type, selection) {
    if (closed) return;
    if (mode != 1) { closed = true; qm.dispose(); return; }
    var q = Packages.server.quest.MapleQuest.getInstance(3353);
    if (phase == 0) {
        if (!q.canStart(qm.getPlayer(), qm.getNpc())) { closed = true; qm.dispose(); return; }
        phase = 1;
        qm.sendYesNo("不小心进入了#m261020401#地区……唠唠叨叨的幽灵#b#p2111006##k过来和我说话。不太想听他唠叨……该怎么办呢？");
        return;
    }
    closed = true;
    if (q.canStart(qm.getPlayer(), qm.getNpc())) qm.startQuestInScript(3353);
    qm.dispose();
}
