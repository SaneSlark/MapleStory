/*
    Zakum Entrance
*/

function enter(pi) {
    if (pi.getQuestStatus(100200) != 2) {
	pi.playerMessage(5, "你还没有做好挑战首领的准备。");
	return false;

    } else if (!pi.haveItem(4001017)) {
	pi.playerMessage(5, "你没有火焰的眼，无法挑战首领。");
	return false;
    }
    
    pi.playPortalSE();
    pi.warp(pi.getPlayer().getMapId() + 100, "west00");
    return true;
}