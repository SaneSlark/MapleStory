function enter(pi) {
	if(pi.getPlayer().getEventInstance().getProperty("canWarp")) {
	pi.warp(910500200, "out01");
	return true;
	}

	pi.playerMessage("你必须先消灭所有怪物。");
	return true;
}