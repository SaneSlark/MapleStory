/*
-- odinms JavaScript --
        NPC脚本 
-------------------------
   odinms MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/

importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.client.messages);
importPackage(net.sf.odinms.net.channel);
importPackage(net.sf.odinms.server);
importPackage(net.sf.odinms.tools);

function getDefinition () {
	var ret = java.lang.reflect.Array.newInstance(CommandDefinition, 1);
	ret[0] = new CommandDefinition("exprate", "rate", "设置经验倍率。", "1"); 
	return ret;
}

function execute (c, mc, splitted) {
	if (splitted.length != 2) {
		mc.dropMessage("用法: !exprate <倍率>");
	} else {
		var exp = splitted[1];
		var packet = MaplePacketCreator.serverNotice(6, "经验倍率已修改为 " + exp + " 倍");
		ChannelServer.getInstance(1).setExpRate(exp);
		ChannelServer.getInstance(2).setExpRate(exp);
		ChannelServer.getInstance(3).setExpRate(exp);
		ChannelServer.getInstance(4).setExpRate(exp);
		ChannelServer.getInstance(1).broadcastPacket(packet);
		ChannelServer.getInstance(2).broadcastPacket(packet);
		ChannelServer.getInstance(3).broadcastPacket(packet);
		ChannelServer.getInstance(4).broadcastPacket(packet);
	}
}
