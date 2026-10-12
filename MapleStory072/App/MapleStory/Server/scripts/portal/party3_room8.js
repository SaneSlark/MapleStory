function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader()) {
		pi.warpParty(920011000);
		pi.playPortalSE();
	} else {
		pi.playerMessage(5,"请让队长进入此传送门。");
	}
}