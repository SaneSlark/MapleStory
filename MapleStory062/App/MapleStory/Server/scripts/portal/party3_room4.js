function enter(pi) {
    if (pi.getPlayer().getEventInstance() == null) {
        pi.playerMessage(5, "\u8bf7\u5148\u901a\u8fc7\u6d3b\u52a8\u5165\u53e3\u8fdb\u5165\u5929\u7a7a\u4e4b\u57ce\u7ec4\u961f\u4efb\u52a1\u3002");
        return false;
    }

        recoveryPortalSound(pi); pi.warp(920010500, 3);
        return true;
}
// Adapted for the bundled OdinMS runtime; retain the original quest/item gates.
function recoveryQuestStarted(pi, id) {
    return pi.getQuestStatus(id).equals(Packages.net.sf.odinms.client.MapleQuestStatus.Status.STARTED);
}
function recoveryQuestCompleted(pi, id) {
    return pi.getQuestStatus(id).equals(Packages.net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED);
}
function recoveryPortalSound(pi) {
    pi.getPlayer().getClient().getSession().write(Packages.net.sf.odinms.tools.MaplePacketCreator.playSound("Game/Portal"));
}
