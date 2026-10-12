/*
-- odinms JavaScript --
        NPC脚本 
-------------------------
   odinms MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/

var exitMap;
var minPlayers = 1;
 
importPackage(net.sf.odinms.world);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server.maps);
importPackage(java.lang);

function init() {
        em.setProperty("shuffleReactors","false");
}

function setup(eim) {
	exitMap = em.getChannelServer().getMapFactory().getMap(220080000);
	if (exitMap == null) 
		debug(eim,"出口地图未正确连接。");
	eim.setProperty("canEnter","true");
	// not currently used; could display total duration taken to kill?
        eim.setProperty("entryTimestamp",System.currentTimeMillis());
}

function playerEntry(eim,player) {
	var map = eim.getMapInstance(220080001); // Origin of Clocktower
	player.changeMap(map,map.getPortal(0));
	if (exitMap == null)
		debug(eim,"出口地图未正确连接。");
}

function playerRevive(eim,player) {
	player.setHp(500);
	player.setStance(0);
	eim.unregisterPlayer(player);
	player.changeMap(exitMap, exitMap.getPortal(0));
	var party = eim.getPlayers();
	if (party.size() < minPlayers) {
		end(eim,"剩余玩家人数不足，战斗结束。");
	}
	return false;
}

function playerDead(eim,player) {
}

function playerDisconnected(eim,player) {
	var party = eim.getPlayers();
	if (player.getName().equals(eim.getProperty("leader"))) {
		// tell members
		var iter = party.iterator();
		while (iter.hasNext()) {
			var pl = iter.next();
			pl.getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,"副本的队长已掉线。"));
		}
	}
	// and, if the party is too small
	if (party.size() < minPlayers) {
		end(eim,"剩余玩家人数不足，战斗结束。");
	}
}

function monsterValue(eim,mobId) { // potentially display time of death? does not seem to work
	if (mobId == 8500002) { // Papulatus
		var party = eim.getPlayers();
		var iter = party.iterator();
		while (iter.hasNext()) {
			var pl = iter.next();
			pl.getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,"恭喜击败帕普拉图斯！"));
		}
	}
	return -1;
}

function leftParty(eim,player) { // do nothing in Papulatus
}
function disbandParty(eim) { // do nothing in Papulatus
}

function playerExit(eim,player) {
	eim.unregisterPlayer(player);
	player.changeMap(exitMap,exitMap.getPortal(0));
        var party = eim.getPlayers();
        if (party.size() < minPlayers) { //not enough after someone left
                end(eim,"剩余玩家人数不足以继续，其余玩家将被传送出去。");
        }
}

function end(eim,msg) {
        var iter = eim.getPlayers().iterator();
        while (iter.hasNext()) {
                var player = iter.next();
                player.getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,msg));
		eim.unregisterPlayer(player);
		if (player != null)
                	player.changeMap(exitMap, exitMap.getPortal(0));
	}
	eim.dispose();
}

// for offline folk
function removePlayer(eim,player) {
	eim.unregisterPlayer(player);
	player.getMap().removePlayer(player);
	player.setMap(exitMap);
}

function clearPQ(eim) { // kinda a hack, this is used as the exit routine
	end(eim,"随着战斗的声音渐渐远去，你莫名地感到意犹未尽。");
}

function finish(eim) {
        var iter = eim.getPlayers().iterator();
        while (iter.hasNext()) {
		var player = iter.next();
		eim.unregisterPlayer(player);
                player.changeMap(exitMap, exitMap.getPortal(0));
	}
	eim.dispose();
}

function allMonstersDead(eim) { // nothing normally done with altar here
}

function cancelSchedule() { // no
}

function timeOut() { // possibly useful
}

function debug(eim,msg) {
        var iter = eim.getPlayers().iterator();
        while (iter.hasNext()) {
 		var player = iter.next();
 		player.getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.serverNotice(6,msg));
	}
}