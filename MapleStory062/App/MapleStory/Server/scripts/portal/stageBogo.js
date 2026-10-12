/*
 * stageBogo.js - Amoria 组队任务上行门（存根）
 * 原地图数据引用此脚本，但脚本在本包中缺失，事件也未为这批门接线。
 * 保证不报错并提示不可用。
 */
function enter(pi) {
	pi.getPlayer().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.serverNotice(5, "这里暂时上不去。"));
	return false;
}
