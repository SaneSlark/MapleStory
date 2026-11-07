/*
 * 4th Job Fire Demon
 */

function init() {
}

function monsterValue(eim, mobId) {
    return 1;
}

var admissionLock=new java.util.concurrent.locks.ReentrantLock();
function setup(){admissionLock.lock();try{if(em.getInstance("FireDemon")!=null||em.getMapFactory().getMap(921100000).getCharactersSize()>0)throw "FireDemon occupied";return createRun();}finally{admissionLock.unlock();}}
function createRun() {
    var eim = em.newInstance("FireDemon");

    var map = eim.getMapFactory().getMap(921100000);
    map.resetReactors();
    eim.startEventTimer(300000);

    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(921100000);
    player.changeMap(map, map.getPortal(0));
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {
    player.getStat().setHp(50,player);playerExit(eim,player);return true;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 211042300);
}

function changedMap(eim, player, mapid) {
    if (mapid != 921100000) {
	eim.unregisterPlayer(player);

	if(eim.getPlayerCount()==0)eim.dispose();
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable:
    playerExit(eim, player);
}

function disbandParty(eim) {
    //boot whole party and end

    eim.disposeIfPlayerBelow(100, 211042300);
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    var map = eim.getMapFactory().getMap(211042300);
    player.changeMap(map, map.getPortal(0));
    if(eim.getPlayerCount()==0)eim.dispose();
}

function clearPQ(eim) {
    eim.disposeIfPlayerBelow(100, 211042300);
}

function allMonstersDead(eim) {
//has nothing to do with monster killing
}

function cancelSchedule() {
    var e=em.getInstance("FireDemon");if(e!=null)e.disposeIfPlayerBelow(100,211042300);
}