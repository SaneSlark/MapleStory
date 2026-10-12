function enter(pi) {
    if (pi.isQuestActive(3309)) {
	pi.forceCompleteQuest(3309);
	pi.playerMessage("任务完成。");
    }
    pi.warp(261020700,0);
    pi.playPortalSE();
}