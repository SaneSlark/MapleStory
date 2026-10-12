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
var instanceId = 1;

//Time Setting is in millisecond
var closeTime = 240000; //The time to close the gate
var beginTime = 300000; //The time to begin the ride
var rideTime = 600000; //The time that require move to destination
var invasionTime = 30000; //The time that spawn balrog
var invasionRand = 60000; //Random timer added to invasionTime
var menthod = 0; //(Use to spawn balrog) 0 = Using chance menthod, >1 = Directly apply random without using chance menthod

function init() {
	scheduleNew();
}

function scheduleNew() {
	instanceId++;
	instanceName = "Boats" + instanceId;
	eim = em.newInstance(instanceName);
	em.setProperty("RideID", instanceName);
	em.setProperty("docked", "true");
	em.setProperty("entry", "true");
	em.setProperty("haveBalrog1","false");
	em.setProperty("haveBalrog2","false");
	//Temp message until the boat is able to show and the sound work
	em.getChannelServer().getMapFactory().getMap(101000300).broadcastMessage(MaplePacketCreator.serverNotice(0, "魔法密林开往天空之城的船已到站.请抓紧时间上船"));
	em.getChannelServer().getMapFactory().getMap(101000300).broadcastMessage(MaplePacketCreator.playSound("Whistle"));
	em.getChannelServer().getMapFactory().getMap(200000111).broadcastMessage(MaplePacketCreator.serverNotice(0, "天空之城开往魔法密林的船已到站.请抓紧时间上船"));
	em.getChannelServer().getMapFactory().getMap(200000111).broadcastMessage(MaplePacketCreator.playSound("Whistle"));
	//Todo : Make the ship appear arrived
	em.schedule("stopentry", closeTime);
	em.schedule("takeoff", beginTime);
}

function stopentry() {
	em.setProperty("entry","false");
}

function takeoff() {
	Etakeoff = eim.getMapFactory().getMap(200090010);
	Otakeoff = eim.getMapFactory().getMap(200090000);
	em.setProperty("docked","false");
	if(eim.getPlayerCount() != 0) {
		var iter = eim.getPlayers().iterator();
		while (iter.hasNext()) {
			var player = iter.next();
			if(player.getMapId() == 101000301) {
				player.changeMap(Etakeoff, Etakeoff.getPortal(0));
			} else {
				player.changeMap(Otakeoff, Otakeoff.getPortal(0));
			}
		}
	}
	//Temp message until the boat is able to show and the sound work
	em.getChannelServer().getMapFactory().getMap(101000300).broadcastMessage(MaplePacketCreator.serverNotice(0, "魔法密林开往天空的船已出发."));
	em.getChannelServer().getMapFactory().getMap(101000300).broadcastMessage(MaplePacketCreator.playSound("Whistle"));
	em.getChannelServer().getMapFactory().getMap(200000111).broadcastMessage(MaplePacketCreator.serverNotice(0, "魔法密林开往魔法密林的船已出发."));
	em.getChannelServer().getMapFactory().getMap(200000111).broadcastMessage(MaplePacketCreator.playSound("Whistle"));
	//Todo : Make the ship appear take off
	OBoatsetup();
	EBoatsetup();
	em.schedule("invasion1", invasionTime + Math.floor(Math.random() * invasionRand));
	em.schedule("invasion2", invasionTime + Math.floor(Math.random() * invasionRand));
	em.schedule("arrived", rideTime);
}

function arrived() {
	Odocked = em.getChannelServer().getMapFactory().getMap(200000100);
	Edocked = em.getChannelServer().getMapFactory().getMap(101000300);
	if(eim.getPlayerCount() != 0) {
		var iter = eim.getPlayers().iterator();
		while (iter.hasNext()) {
			var player = iter.next();
			if(player.getMapId() == 200090010 || player.getMapId() == 200090011) {
				player.changeMap(Odocked, Odocked.getPortal(0));
			} else {
				player.changeMap(Edocked, Edocked.getPortal(0));
			}
			eim.unregisterPlayer(player);
		}
	}
	em.disposeInstance(instanceName);
	eim.dispose();
	scheduleNew();
}

function invasion1() {
	var map1 = eim.getMapFactory().getMap(200090010);
	var numspawn1;
	if(menthod == 0) {
		var chance = Math.floor(Math.random() * 10);
		if(chance <= 4)
			numspawn1 = 0;
		else if(chance == 5)
			numspawn1 = 1;
		else if(chance == 10)
			numspawn1 = 3;
		else
			numspawn1 = 2;
	} else {
		numspawn1 = Math.floor(Math.random() * 4);
	}
	if(numspawn1 > 0) {
		for(var i=0; i < numspawn1; i++) {
			map1.spawnMonsterOnGroudBelow(net.sf.odinms.server.life.MapleLifeFactory.getMonster(8150000), new java.awt.Point(485, 0));
		}
		//Todo : Make the balrog ship appear
		map1.broadcastMessage(MaplePacketCreator.musicChange("Bgm04/ArabPirate"));
		em.setProperty("haveBalrog1","true");
	}
}

function invasion2() {
	var map2 = eim.getMapFactory().getMap(200090000);
	var numspawn2;
	if(menthod == 0) {
		var chance = Math.floor(Math.random() * 10);
		if(chance <= 4)
			numspawn2 = 0;
		else if(chance == 5)
			numspawn2 = 1;
		else if(chance == 10)
			numspawn2 = 3;
		else
			numspawn2 = 2;
	} else {
		numspawn = Math.floor(Math.random() * 4);
	}
	if(numspawn2 > 0) {
		for(var i=0; i < numspawn2; i++) {
			map2.spawnMonsterOnGroudBelow(net.sf.odinms.server.life.MapleLifeFactory.getMonster(8150000), new java.awt.Point(-590, 0));
		}
		//Todo : Make the balrog ship appear
		map2.broadcastMessage(MaplePacketCreator.musicChange("Bgm04/ArabPirate"));
		em.setProperty("haveBalrog2","true");
	}
}

function OBoatsetup() {
	var boat1 = eim.getMapInstance(200090010).getPortal("in00");
	boat1.setScriptName("OBoat1");
	var boat2 = eim.getMapInstance(200090010).getPortal("under00");
	boat2.setScriptName("OBoat2");
	var boat3 = eim.getMapInstance(200090011).getPortal("out00");
	boat3.setScriptName("OBoat3");
	var boat4 = eim.getMapInstance(200090011).getPortal("out01");
	boat4.setScriptName("OBoat4");
}

function EBoatsetup() {
	var boat5 = eim.getMapInstance(200090000).getPortal("in00");
	boat5.setScriptName("EBoat1");
	var boat6 = eim.getMapInstance(200090000).getPortal("under00");
	boat6.setScriptName("EBoat2");
	var boat7 = eim.getMapInstance(200090001).getPortal("out00");
	boat7.setScriptName("EBoat3");
	var boat8 = eim.getMapInstance(200090001).getPortal("out01");
	boat8.setScriptName("EBoat4");
}

function playerEntry(eim, player) {
	var BFtakeoff;
	if(player.getMapId() == 101000300)
		BFtakeoff = em.getChannelServer().getMapFactory().getMap(101000301);
	else
		BFtakeoff = em.getChannelServer().getMapFactory().getMap(200000112);
	player.changeMap(BFtakeoff, BFtakeoff.getPortal(0));
}

function playerExit(eim, player) {
	var getOff;
	if(player.getMapId() == 101000301)
		getOff = em.getChannelServer().getMapFactory().getMap(101000300);
	else
		getOff = em.getChannelServer().getMapFactory().getMap(200000111);
	player.changeMap(getOff, getOff.getPortal(0));
	eim.unregisterPlayer(player);
}

function playerDisconnected(eim, player) {
	var playerMap = player.getMapId();
	eim.unregisterPlayer(player);
	player.getMap().removePlayer(player);
	if(playerMap == 200090010 || playerMap == 200090011)
		player.setMap(em.getChannelServer().getMapFactory().getMap(101000300));
	else
		player.setMap(em.getChannelServer().getMapFactory().getMap(200000100));
}
