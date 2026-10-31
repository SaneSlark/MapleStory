// CMS native map/mob; admission rules explicitly approved by the user.
var admissionLock=new java.util.concurrent.locks.ReentrantLock();
function init(){em.setProperty("state","0");}
function setup(level,partyid){
    if(!admissionLock.tryLock())throw "Shaolin admission busy";
    var instance=null,reserved=false;
    try{
        if(String(em.getProperty("state"))!="0" || em.getInstance("shaoling")!=null)throw "Shaolin occupied";
        var map=em.getMapFactory().getMap(702060000);
        if(map.getCharactersSize()!=0)throw "Shaolin map occupied";
        em.setProperty("state","1");reserved=true;instance=em.newInstance("shaoling");
        map=instance.setInstanceMap(702060000);map.resetFully();
        instance.startEventTimer(600000);return instance;
    }catch(error){if(reserved){if(instance!=null)instance.dispose();em.setProperty("state","0");}throw error;}
    finally{admissionLock.unlock();}
}
function playerEntry(eim,player){var map=eim.getMapInstance(0);player.changeMap(map,map.getPortal(0));}
function scheduledTimeout(eim){eim.disposeIfPlayerBelow(100,702100000);em.setProperty("state","0");}
function changedMap(eim,player,id){
    if(id==702060000)return;
    eim.unregisterPlayer(player);if(eim.disposeIfPlayerBelow(0,0))em.setProperty("state","0");
}
function playerExit(eim,player){
    eim.unregisterPlayer(player);var map=em.getMapFactory().getMap(702100000);
    player.changeMap(map,map.getPortal(0));
    if(eim.disposeIfPlayerBelow(0,0))em.setProperty("state","0");
}
function playerRevive(eim,player){playerExit(eim,player);return false;}
function playerDisconnected(eim,player){return 0;}
function leftParty(eim,player){playerExit(eim,player);}
function disbandParty(eim){scheduledTimeout(eim);}
function monsterValue(eim,id){if(id==9600025)eim.setProperty("bossDefeated","true");return 1;}
function playerDead(){}
function allMonstersDead(){}
function cancelSchedule(){}
