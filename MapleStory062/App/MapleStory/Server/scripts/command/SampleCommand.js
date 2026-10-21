/*
-- odinms JavaScript --
        NPC½Å±¾ 
-------------------------
   odinms MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/

importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.client.messages);
importPackage(net.sf.odinms.tools);

function getDefinition () {
	var ret = java.lang.reflect.Array.newInstance(CommandDefinition, 1);
	ret[0] = new CommandDefinition("scoreboard", "", "Ê¾ÀýÃüÁî", "1"); 
	return ret;
}

function execute (c, mc, splitted) {
	c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.showAriantScoreBoard());
}
