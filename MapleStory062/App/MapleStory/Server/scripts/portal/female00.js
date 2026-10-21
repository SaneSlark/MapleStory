function enter(pi) {
	/**
	 *female00.js
	 */
	var gender = pi.getPlayer().getGender();
	if (gender == 1) {
		pi.warp(670010200, 4);
		return true;
	} else {
		pi.getPlayer().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.serverNotice(5, "你不能从这里继续前进。"));
		return false;
	}
}
