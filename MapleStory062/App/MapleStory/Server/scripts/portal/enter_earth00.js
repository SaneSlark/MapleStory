function enter(pi) {
    if (!pi.haveItem(4031890)) {
        pi.getPlayer().dropMessage(6, "\u4f60\u9700\u8981\u4f20\u9001\u5361\u624d\u80fd\u4f7f\u7528\u8fd9\u4e2a\u4f20\u9001\u95e8\u3002");
        return false;
    }
    
    recoveryPortalSound(pi); pi.warp(221000300,"earth00");
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
