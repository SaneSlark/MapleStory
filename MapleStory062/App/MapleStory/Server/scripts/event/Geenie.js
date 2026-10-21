/*
-- odinms JavaScript --
        NPC脚本 
-------------------------
   odinms MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/

importPackage(net.sf.odinms.tools);

var eim;

//Time Setting is in millisecond
var closeTime = 240000; //The time to close the gate
var beginTime = 300000; //The time to begin the ride
var rideTime = 600000; //The time that require move to destination

function init() {
	scheduleNew();
}

function scheduleNew() {
	eim = em.newInstance("Geenie");
	em.setProperty("docked", "true");
	em.setProperty("entry", "true");
	//Temp message until the boat is able to show and the sound work
	em.getChannelServer().getMapFactory().getMap(260000100).broadcastMessage(MaplePacketCreator.serverNotice(0, "阿里安特开往天空之城的船已经到达.请抓紧时间上船."));
	em.getChannelServer().getMapFactory().getMap(260000100).broadcastMessage(MaplePacketCreator.playSound("Whistle"));
	em.getChannelServer().getMapFactory().getMap(200000151).broadcastMessage(MaplePacketCreator.serverNotice(0, "天空之城开往阿里安特的船已经到达.请抓紧时间上船."));
	em.getChannelServer().getMapFactory().getMap(200000151).broadcastMessage(MaplePacketCreator.playSound("Whistle"));
	//Todo : Make the ship appear arrived
	em.schedule("stopEntry", closeTime);
	em.schedule("takeoff", beginTime);
}

function stopEntry() {
	em.setProperty("entry","false");
}

function takeoff() {
	var Omap = eim.getMapFactory().getMap(200090400);
	var Amap = eim.getMapFactory().getMap(200090410);
	em.setProperty("docked","false");
	if(eim.getPlayerCount() != 0) {
		var iter = eim.getPlayers().iterator();
		while (iter.hasNext()) {
			var player = iter.next();
			if(player.getMapId() == 200000152) {
				player.changeMap(Omap, Omap.getPortal(0));
			} else {
				player.changeMap(Amap, Amap.getPortal(0));
			}
		}
	}
	//Temp message until the boat is able to show and the sound work
	em.getChannelServer().getMapFactory().getMap(260000100).broadcastMessage(MaplePacketCreator.serverNotice(0, "阿里安特开往天空之城的船已经出发"));
	em.getChannelServer().getMapFactory().getMap(260000100).broadcastMessage(MaplePacketCreator.playSound("Whistle"));
	em.getChannelServer().getMapFactory().getMap(200000151).broadcastMessage(MaplePacketCreator.serverNotice(0, "天空之城开往阿里安特的船已经出发"));
	em.getChannelServer().getMapFactory().getMap(200000151).broadcastMessage(MaplePacketCreator.playSound("Whistle"));
	//Todo : Make the ship appear take off
	em.schedule("arrived", rideTime);
}

function arrived() {
	var Odocked = em.getChannelServer().getMapFactory().getMap(200000100);
	var Ldocked = em.getChannelServer().getMapFactory().getMap(260000100);
	if(eim.getPlayerCount() != 0) {
		var iter = eim.getPlayers().iterator();
		while (iter.hasNext()) {
			var player = iter.next();
			if(player.getMapId() == 200090400) {
				player.changeMap(Ldocked, Ldocked.getPortal(0));
			} else {
				player.changeMap(Odocked, Odocked.getPortal(0));
			}
			eim.unregisterPlayer(player);
		}
	}
	em.disposeInstance("Geenie");
	eim.dispose();
	scheduleNew();
}

function playerEntry(eim, player) {
	var BFtakeoff;
	if(player.getMapId() == 200000151)
		BFtakeoff = em.getChannelServer().getMapFactory().getMap(200000152);
	else
		BFtakeoff = em.getChannelServer().getMapFactory().getMap(260000110);
	player.changeMap(BFtakeoff, BFtakeoff.getPortal(0));
}

function playerExit(eim, player) {
	var getOff;
	if(player.getMapId() == 200000152)
		getOff = em.getChannelServer().getMapFactory().getMap(200000151);
	else
		getOff = em.getChannelServer().getMapFactory().getMap(260000100);
	player.changeMap(getOff, getOff.getPortal(0));
}

function playerDisconnected(eim, player) {
	var playerMap = player.getMapId();
	eim.unregisterPlayer(player);
	player.getMap().removePlayer(player);
	if(playerMap == 200000152)
		player.setMap(em.getChannelServer().getMapFactory().getMap(200000100));
	else
		player.setMap(em.getChannelServer().getMapFactory().getMap(260000100));
}