function enter(pi) {
	if(pi.getMapId()!=910500200)return false;
    var eim=pi.getPlayer().getEventInstance();
    if(eim==null){pi.warp(105090200,0);return true;}
    if(String(eim.getProperty("canWarp"))=="true") {
	pi.warp(910500200, "out01");
	return true;
	}

	pi.playerMessage("你必须先消灭所有怪物。");
	return true;
}