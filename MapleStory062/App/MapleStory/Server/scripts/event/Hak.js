/*
-- odinms JavaScript --
        事件脚本
-------------------------
   odinms MapleStory
----- Version Info ------
     Version - 1.0.0
-------------------------
*/
importPackage(net.sf.odinms.tools);

// 仙鹤航班：武陵(250000100) <-> 天空之城(200000100)
var rideTo = new Array(250000100, 200000100);
var birdRide = new Array(200090300, 200090310);
var timeOnRide = 60; // Seconds

function init() {
	em.setProperty("isRiding", "false");
}

function playerEntry(eim, player) {
	var myRide = parseInt(em.getProperty("myRide"));
	var onRide = eim.getMapFactory().getMap(birdRide[myRide]);
	em.setProperty("isRiding", "true");
	em.schedule("timeOut", timeOnRide * 1000);
	player.changeMap(onRide, onRide.getPortal(0));
	player.getClient().getSession().write(MaplePacketCreator.getClock(timeOnRide));
}

function timeOut() {
	var myRide = parseInt(em.getProperty("myRide"));
	var docked = em.getChannelServer().getMapFactory().getMap(rideTo[myRide]);
	var iter = em.getInstance("Hak").getPlayers().iterator();
	while (iter.hasNext()) {
		var player = iter.next();
		player.changeMap(docked, docked.getPortal(0));
		em.getInstance("Hak").unregisterPlayer(player);
	}
	em.setProperty("isRiding", "false");
	em.disposeInstance("Hak");
}

function playerDisconnected(eim, player) {
	eim.unregisterPlayer(player);
	if (eim.getPlayerCount() == 0) {
		em.setProperty("isRiding", "false");
		em.disposeInstance("Hak");
	}
}
