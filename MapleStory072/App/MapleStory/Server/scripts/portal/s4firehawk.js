function enter(pi) {
    if (pi.getQuestStatus(6240) == 1 || pi.getQuestStatus(6241) == 1) {
	if (!pi.haveItem(4001113)) {
	    if (pi.getPlayerCount(921100200) == 0) {
		pi.playPortalSE();
		pi.warp(921100200, 0);
		return true;
	    } else {
		pi.playerMessage("已有其他玩家正在进行任务，暂时无法进入。");
	    }
	} else {
	    pi.playerMessage("你已经持有火凤凰的卵，无法再次进入。");
	}
    } else if (pi.getQuestStatus(6240) == 2 && pi.getQuestStatus(6241) == 0) {
	if (!pi.haveItem(4001113)) {
	    pi.playPortalSE();
	    pi.warp(921100200, 0);
	    return true;
	} else {
	    pi.playerMessage("你已经持有火凤凰的卵，无法再次进入。" );
	}
    } else {
	pi.playerMessage("无法进入封印之地。");
    }
    return false;
}