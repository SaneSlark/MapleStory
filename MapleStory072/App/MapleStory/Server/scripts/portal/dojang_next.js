function enter(pi) {
    if (!pi.haveMonster(9300216)) {
	pi.playerMessage("还有怪物没有消灭。");
    } else {
	pi.dojoAgent_NextMap(true, false);
    }
}