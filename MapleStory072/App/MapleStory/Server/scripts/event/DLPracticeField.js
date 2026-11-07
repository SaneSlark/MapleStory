/**
	Dark Lord's Practice Field, 4th job Quest
**/

function init() {
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
    var eim = em.newInstance("DLPracticeField");

    var map = eim.setInstanceMap(910300000);
    map.resetFully();
    eim.startEventTimer(1200000);

    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(910300000);
    player.changeMap(map, map.getPortal(0));
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 211042300);
}

function changedMap(eim, player, mapid) {
    if (mapid != 910300000) {
	eim.unregisterPlayer(player);

	eim.disposeIfPlayerBelow(0, 0);
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
    eim.disposeIfPlayerBelow(100, 103000003);
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    var map = eim.getMapFactory().getMap(103000003);
    player.changeMap(map, map.getPortal(0));
}

function clearPQ(eim) {
    eim.disposeIfPlayerBelow(100, 103000003);
}

function allMonstersDead(eim) {
//has nothing to do with monster killing
}

function cancelSchedule() {
}
// Exclusive native skill-boss room; retain entry quest conditions and event duration.
var roomLock=new java.util.concurrent.locks.ReentrantLock(),skillSetup=setup,skillInit=init;
init=function(){skillInit();em.setProperty("started","false");};
setup=function(){roomLock.lock();try{if(em.getInstance("DLPracticeField")!=null||em.getMapFactory().getMap(910300000).getCharactersSize()>0)throw "Skill boss room occupied";var e=skillSetup();em.setProperty("started","true");return e;}catch(error){if(em.getInstance("DLPracticeField")==null)em.setProperty("started","false");throw error;}finally{roomLock.unlock();}};
function changedMap(e,p,id){if(id==910300000)return;e.unregisterPlayer(p);if(e.getPlayerCount()==0){e.dispose();em.setProperty("started","false");}}
function playerExit(e,p){e.unregisterPlayer(p);var m=em.getMapFactory().getMap(103000003);p.changeMap(m,m.getPortal(0));if(e.getPlayerCount()==0){e.dispose();em.setProperty("started","false");}}
function playerRevive(e,p){return false;}
function playerDisconnected(e,p){if(e.getPlayerCount()<=1)em.setProperty("started","false");return 0;}
function scheduledTimeout(e){e.disposeIfPlayerBelow(100,103000000);em.setProperty("started","false");}
function cancelSchedule(){var a=new java.util.ArrayList(em.getInstances());for(var i=0;i<a.size();i++)a.get(i).disposeIfPlayerBelow(100,103000003);em.setProperty("started","false");}
