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
importPackage(net.sf.odinms.server.life);
importPackage(net.sf.odinms.server.maps);

function getDefinition () {
	var ret = java.lang.reflect.Array.newInstance(CommandDefinition, 1);
	ret[0] = new CommandDefinition("horntail", "", "ÕÙ»½°µºÚÁúÍõ", "1"); 
	return ret;
}

function execute (c, mc, splitted) {
	var ht = MapleLifeFactory.getMonster(8810026);
	c.getPlayer().getMap().spawnMonsterOnGroundBelow(ht, c.getPlayer().getPosition());
	c.getPlayer().getMap().killMonster(ht, c.getPlayer(), false);
}
