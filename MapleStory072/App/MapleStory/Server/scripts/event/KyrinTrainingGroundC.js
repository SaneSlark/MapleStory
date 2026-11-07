/**
	Kyrin's Training Ground, 4th job Quest [Captain]
**/

function init() {
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
    em.setProperty("started", "true");

    var eim = em.newInstance("KyrinTrainingGroundC");

    var map = eim.setInstanceMap(912010100);
    map.resetFully();
    map.respawn(true);
    eim.startEventTimer(240000);

    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(912010100);
    player.changeMap(map, map.getPortal(0));
    player.dropMessage(6, "Äã±ØÐëµÖµ²¿­ÁÕµÄ¹¥»÷£¬¼á³Ö³¬¹ý2·ÖÖÓ£¡");
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 120000101);

    em.setProperty("started", "false");
}

function changedMap(eim, player, mapid) {
    if (mapid != 912010100) {
	eim.unregisterPlayer(player);

	if (eim.disposeIfPlayerBelow(0, 0)) {
	    em.setProperty("started", "false");
	}
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
    eim.disposeIfPlayerBelow(100, 120000101);

    em.setProperty("started", "false");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    var map = eim.getMapFactory().getMap(120000101);
    player.changeMap(map, map.getPortal(0));
}

function clearPQ(eim) {
    eim.disposeIfPlayerBelow(100, 120000101);

    em.setProperty("started", "false");
}

function allMonstersDead(eim) {
//has nothing to do with monster killing
}

function cancelSchedule() {
}
// Exclusive native skill-boss room; retain entry quest conditions and event duration.
var roomLock=new java.util.concurrent.locks.ReentrantLock(),skillSetup=setup,skillInit=init;
init=function(){skillInit();em.setProperty("started","false");};
setup=function(){roomLock.lock();try{if(em.getInstance("KyrinTrainingGroundC")!=null||em.getMapFactory().getMap(912010100).getCharactersSize()>0)throw "Skill boss room occupied";var e=skillSetup();em.setProperty("started","true");return e;}catch(error){if(em.getInstance("KyrinTrainingGroundC")==null)em.setProperty("started","false");throw error;}finally{roomLock.unlock();}};
function changedMap(e,p,id){if(id==912010100)return;e.unregisterPlayer(p);if(e.getPlayerCount()==0){e.dispose();em.setProperty("started","false");}}
function playerExit(e,p){e.unregisterPlayer(p);var m=em.getMapFactory().getMap(120000101);p.changeMap(m,m.getPortal(0));if(e.getPlayerCount()==0){e.dispose();em.setProperty("started","false");}}
function playerRevive(e,p){return false;}
function playerDisconnected(e,p){if(e.getPlayerCount()<=1)em.setProperty("started","false");return 0;}
function scheduledTimeout(e){e.disposeIfPlayerBelow(100,120000101);em.setProperty("started","false");}
function cancelSchedule(){var a=new java.util.ArrayList(em.getInstances());for(var i=0;i<a.size();i++)a.get(i).disposeIfPlayerBelow(100,120000101);em.setProperty("started","false");}
