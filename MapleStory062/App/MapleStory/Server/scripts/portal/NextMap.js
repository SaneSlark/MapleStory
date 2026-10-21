function enter(pi) {
	recoveryPortalSound(pi);
	pi.warp(pi.getMapId() + 100, 0);
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
