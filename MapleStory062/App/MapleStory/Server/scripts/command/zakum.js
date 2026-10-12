/*
-- MrCoffee JavaScript --
        NPCΩ≈±æ 
-------------------------
   MrCoffee MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/

importPackage(net.sf.MrCoffee.client);
importPackage(net.sf.MrCoffee.client.messages);
importPackage(net.sf.MrCoffee.server.life);
importPackage(net.sf.MrCoffee.server.maps);

function getDefinition () {
	var ret = java.lang.reflect.Array.newInstance(CommandDefinition, 1);
	ret[0] = new CommandDefinition("zakum", "", "’ŸªΩ‘˙¿•", "1"); 
	return ret;
}

function execute (c, mc, splitted) {
	var z1 = MapleLifeFactory.getMonster(8800000);
	c.getPlayer().getMap().spawnFakeMonsterOnGroundBelow(z1, c.getPlayer().getPosition());
	for(i = 8800003; i <= 8800010; i++){
		var zh = MapleLifeFactory.getMonster(i);
		c.getPlayer().getMap().spawnMonsterOnGroundBelow(zh, c.getPlayer().getPosition());
	}
}
