/*
-- odinms JavaScript --
        NPC½Å±¾ 
-------------------------
   odinms MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/

importPackage(net.sf.odinms.world);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server.maps);

var exitMap;
var instanceId;

function init() {
    instanceId = 1;
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup(eim) {
    instanceId = em.getChannelServer().getInstanceId();
    exitMap = em.getChannelServer().getMapFactory().getMap(910010400);
    var instanceName = "PigTown" + instanceId;
    var eim = em.newInstance(instanceName);
    em.getChannelServer().addInstanceId();
    em.schedule("timeOut", 5 * 60000);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(910010200);
    player.changeMap(map, map.getPortal(0));
    player.getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.getClock(300));
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {
}

function playerDisconnected(eim, player) {
    playerExit(eim, player);
}

function leftParty(eim, player) {
    playerExit(eim, player);
}

function disbandParty(eim) {
    var party = eim.getPlayers();
    for (var i = 0; i < party.size(); i++) {
        playerExit(eim, party.get(i));
    }
    eim.dispose();
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.changeMap(exitMap, exitMap.getPortal(0));
}

function removePlayer(eim, player) {
    eim.unregisterPlayer(player);
    player.getMap().removePlayer(player);
    player.setMap(exitMap);
}

function clearPQ(eim) {
    var party = eim.getPlayers();
    for (var i = 0; i < party.size(); i++) {
        playerExit(eim, party.get(i));
    }
    eim.dispose();
}

function allMonstersDead(eim) {
}

function cancelSchedule() {
}

function timeOut() {
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
        if (eim.getPlayerCount() > 0) {
            var pIter = eim.getPlayers().iterator();
            while (pIter.hasNext()) {
                playerExit(eim, pIter.next());
            }
        }
        eim.dispose();
    }
}
