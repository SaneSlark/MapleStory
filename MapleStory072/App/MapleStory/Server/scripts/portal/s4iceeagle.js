function enter(pi) {
    if (pi.getQuestStatus(6242) == 1 || pi.getQuestStatus(6243) == 1) {
	if (!pi.haveItem(4001114)) {
	    if (pi.getPlayerCount(921100200) == 0) {
		pi.playPortalSE();
		pi.warp(921100210, 0);
		return true;
	    } else {
		pi.playerMessage("已有其他玩家正在进行任务，暂时无法进入。");
	    }
	} else {
	    pi.playerMessage("你没有冰凤凰的卵，无法进入。");
	}
    } else if (pi.getQuestStatus(6242) == 2 && pi.getQuestStatus(6243) == 0) {
	if (!pi.haveItem(4001114)) {
	    pi.playPortalSE();
	    pi.warp(921100210, 0);
	    return true;
	} else {
	    pi.playerMessage("你没有冰凤凰的卵，无法进入。" );
	}
    } else {
	pi.playerMessage("无法进入封印之地。");
    }
    return false;
}