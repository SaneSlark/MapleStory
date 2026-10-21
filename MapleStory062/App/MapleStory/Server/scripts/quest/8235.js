// Quest title/dialogue sourced from the current client Quest.wz.
// Eligibility and rewards are enforced by the bundled native quest engine.
var status = -1;
function start(mode, type, selection) {
    if (mode != 1) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendAcceptDecline("#e\u8111\u888b\u5148\u884c\u4e00\u6b65#n\r\n\r\n\u662f\u5426\u73b0\u5728\u63a5\u53d6\u8fd9\u4e2a\u4efb\u52a1\uff1f"); return; }
    if (status == 1) {
        Packages.net.sf.odinms.server.quest.MapleQuest.getInstance(8235).start(qm.getPlayer(), qm.getNpc());
        if (!qm.getQuestStatus(8235).equals(Packages.net.sf.odinms.client.MapleQuestStatus.Status.STARTED))
            qm.sendOk("\u76ee\u524d\u8fd8\u4e0d\u80fd\u63a5\u53d6\u8fd9\u4e2a\u4efb\u52a1\u3002\u8bf7\u68c0\u67e5\u7b49\u7ea7\u3001\u524d\u7f6e\u4efb\u52a1\u3001\u6240\u9700\u7269\u54c1\u548c\u4efb\u52a1\u95f4\u9694\u3002");
        qm.dispose();
    }
}
function end(mode, type, selection) {
    qm.dispose();
}
