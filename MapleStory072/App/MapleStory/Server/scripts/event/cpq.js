var roomLock = new java.util.concurrent.locks.ReentrantLock();
function init() {}
function setup(mapid) {
    roomLock.lock();
    try {
        var base = parseInt(mapid);
        if (base < 980000100 || base > 980000600 || base % 100 != 0 || em.getInstance("cpq" + base) != null) return null;
        var eim = em.newInstance("cpq" + base);
        eim.setProperty("base", "" + base); eim.setProperty("phase", "waiting");
        eim.setProperty("red", "-1"); eim.setProperty("blue", "-1");
        eim.setInstanceMap(980000000);
        eim.setInstanceMap(base); eim.setInstanceMap(base + 2);
        var field = eim.setInstanceMap(base + 1); clearField(field); field.resetFully(); field.setSpawns(false);
        eim.setInstanceMap(base + 3); eim.setInstanceMap(base + 4);
        var portal = eim.getMapInstance(2).getPortal("pt00");
        if (portal != null) portal.setScriptName("mc_revive");
        eim.startEventTimer(180000); // Existing matching window, a compatibility parameter.
        return eim;
    } finally { roomLock.unlock(); }
}
function clearField(map) {
    map.setSpawns(false); map.killAllMonsters(false);
    var reactors = map.getAllReactorsThreadsafe();
    for (var i = 0; i < reactors.size(); i++) if (reactors.get(i).getReactorId() == 9980000 || reactors.get(i).getReactorId() == 9980001) map.destroyReactor(reactors.get(i).getObjectId());
}
function playerEntry(eim, player) { player.resetCP(); var map = eim.getMapInstance(1); player.changeMap(map, map.getPortal(0)); }
function registerCarnivalParty(eim, party) {
    if (eim.getProperty("phase") != "waiting") return;
    var key = party.getTeam() == 0 ? "red" : "blue";
    eim.setProperty(key, "" + party.getLeader().getId());
    if (key == "blue") { eim.setProperty("phase", "countdown"); eim.stopEventTimer(); eim.schedule("start", 10000); }
}
function getParty(eim, key) {
    var p = em.getChannelServer().getPlayerStorage().getCharacterById(parseInt(eim.getProperty(key)));
    return p == null ? null : p.getCarnivalParty();
}
function start(eim) {
    if (eim.getProperty("phase") != "countdown") return;
    var red = getParty(eim,"red"), blue = getParty(eim,"blue");
    if (red == null || blue == null || !red.allInMap(eim.getMapInstance(1)) || !blue.allInMap(eim.getMapInstance(1))) { disposeAll(eim); return; }
    eim.setProperty("phase", "fight"); eim.startEventTimer(600000);
    var players = eim.getPlayers();
    for (var i=0;i<players.size();i++) players.get(i).tryPartyQuest(1301);
    var field=eim.getMapInstance(3); field.setSpawns(true); field.respawn(true);
    red.warp(field,"red00"); blue.warp(field,"blue00");
}
function monsterValue(eim, id) { return 0; }
function monsterKilled(eim, player, cp) {
    if (eim.getProperty("phase") != "fight" || player.getMap() != eim.getMapInstance(3) || cp <= 0 || player.getCarnivalParty() == null) return;
    player.getCarnivalParty().addCP(player,cp); updateCP(eim,player);
}
function updateCP(eim, player) {
    var party=player.getCarnivalParty(); if(party==null)return;
    player.CPUpdate(false,player.getAvailableCP(),player.getTotalCP(),0);
    var players=eim.getPlayers();for(var i=0;i<players.size();i++) players.get(i).CPUpdate(true,party.getAvailableCP(),party.getTotalCP(),party.getTeam());
}
function onMapLoad(eim, player) {
    if (eim.getProperty("phase") != "fight" || player.getMap() != eim.getMapInstance(3) || player.getCarnivalParty() == null) return;
    var enemy=getParty(eim,player.getCarnivalParty().getTeam()==0?"blue":"red");
    if(enemy!=null)player.startMonsterCarnival(enemy.getAvailableCP(),enemy.getTotalCP());
}
function countResult(player, result) {
    player.endPartyQuest(1301);
    var old=parseInt(player.getOneInfo(1301,result));if(isNaN(old))old=0;
    player.updateOneInfo(1301,result,""+(old+1));
    player.updateOneInfo(1301,"mcResult",result);
}
function scheduledTimeout(eim) {
    var phase=eim.getProperty("phase");
    if(phase=="waiting"){disposeAll(eim);return;}
    if(phase!="fight")return;
    var red=getParty(eim,"red"),blue=getParty(eim,"blue");
    if(red==null||blue==null){disposeAll(eim);return;}
    eim.setProperty("phase","result");eim.stopEventTimer();
    var draw=red.getTotalCP()==blue.getTotalCP();red.setWinner(red.getTotalCP()>blue.getTotalCP());blue.setWinner(blue.getTotalCP()>red.getTotalCP());
    clearField(eim.getMapInstance(3));
    if(!draw){red.displayMatchResult();blue.displayMatchResult();}else eim.broadcastPlayerMsg(5,"双方CP相同，本场平局。");
    var players=eim.getPlayers();for(var i=0;i<players.size();i++) countResult(players.get(i),draw?"draw":(players.get(i).getCarnivalParty().isWinner()?"vic":"lose"));
    eim.schedule("warpOut",10000);
}
function warpOut(eim) {
    if(eim.getProperty("phase")!="result")return;
    eim.setProperty("phase","closing");var players=eim.getPlayers();
    for(var i=0;i<players.size();i++){
        var player=players.get(i),party=player.getCarnivalParty();
        var destination=eim.getMapInstance(party!=null&&party.isWinner()?4:5);
        eim.unregisterPlayer(player);player.changeMap(destination,destination.getPortal(0));
    }
    eim.disposeIfPlayerBelow(0,0);
}
function cleanPlayer(player) {
    player.clearCarnivalRequests();var party=player.getCarnivalParty();if(party!=null)party.removeMember(player);player.resetCP();
}
function disposeAll(eim) {
    if(eim.getProperty("phase")=="closing")return;
    eim.setProperty("phase","closing");clearField(eim.getMapInstance(3));
    var players=eim.getPlayers(),exit=eim.getMapInstance(0);
    for(var i=0;i<players.size();i++){
        var player=players.get(i);cleanPlayer(player);eim.unregisterPlayer(player);player.changeMap(exit,exit.getPortal(0));
    }
    eim.disposeIfPlayerBelow(0,0);
}
function changedMap(eim,player,mapid){
    var phase=eim.getProperty("phase"),base=parseInt(eim.getProperty("base"));
    if(phase=="closing")return;
    if((phase=="waiting"||phase=="countdown")&&mapid==base)return;
    if((phase=="fight"||phase=="result")&&(mapid==base+1||mapid==base+2))return;
    disposeAll(eim);
}
function playerDisconnected(eim,player){
    cleanPlayer(player);eim.unregisterPlayer(player);player.setMap(eim.getMapInstance(0));disposeAll(eim);return 0;
}
function playerExit(eim,player){disposeAll(eim);}
function leftParty(eim,player){disposeAll(eim);}
function disbandParty(eim){disposeAll(eim);}
function playerDead(eim,player){}
function playerRevive(eim,player){
    if(eim.getProperty("phase")!="fight"||player.getCarnivalParty()==null)return false;
    var loss=Math.min(10,player.getAvailableCP(),player.getCarnivalParty().getAvailableCP());
    if(loss>0)player.getCarnivalParty().useCP(player,loss);updateCP(eim,player);
    player.addHP(50);var map=eim.getMapInstance(2);player.changeMap(map,map.getPortal(0));return true;
}
function clearPQ(eim){}
function allMonstersDead(eim){}
function cancelSchedule(){var instances=new java.util.ArrayList(em.getInstances());for(var i=0;i<instances.size();i++)disposeAll(instances.get(i));}
