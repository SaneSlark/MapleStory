/*
 * gendergo.js - Amoria 组队任务性别分流门（存根）
 * 原地图数据引用此脚本，但脚本在本包中缺失；事件启动时会将这些门动态改挂到
 * male00/female00，因此此存根只会在事件外踩门时触发。保证不报错并提示不可用。
 */
function enter(pi) {
	pi.getPlayer().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.serverNotice(5, "此传送点尚未开放。"));
	return false;
}
