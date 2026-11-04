var minPlayers = 6;
var stg2_combo0 = Array("3", "2", "1");
var stg2_combo1 = Array("0", "0", "1"); //unique combos only
var stg2_combo2 = Array("0", "1", "1");
var stg6_combo = Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16");
var cx = Array(200, -300, -300, -300, 200, 200, 200, -300, -300, 200, 200, -300, -300, 200); //even = 200 odd = -300
var cy = Array(-2321, -2114, -2910, -2510, -1526, -2716, -717, -1310, -3357, -1912, -1122, -1736, -915, -3116);


var activityMaps = [920010000,920010100,920010200,920010300,920010400,920010500,920010600,920010601,920010602,920010603,920010604,920010700,920010800,920010900,920010910,920010911,920010912,920010920,920010921,920010922,920010930,920010931,920010932,920011000,920011100];
var progressLock = new java.util.concurrent.locks.ReentrantLock();
function init(){em.setProperty("state","0");em.setProperty("leader","true");em.setProperty("pre","0");}
function setup(level, partyid){
    if(em.getProperty("state")!="0")return null;
    em.getProperties().clear();em.setProperty("state","1");em.setProperty("leader","true");
    var eim=em.newInstance("OrbisPQ"+partyid);eim.setProperty("phase","entrance");
    for(var key in {stage:0,pre:0,finished:0,stage2:0,stage3:0,stage4:0,stage6:0,stage7:0,done:0})em.setProperty(key,"0");
    var combos=[[3,0,0],[2,0,1],[1,1,1]],chosen=combos[Math.floor(Math.random()*3)].slice();
    for(var i=chosen.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),v=chosen[i];chosen[i]=chosen[j];chosen[j]=v;}
    for(var i=0;i<3;i++)em.setProperty("stage4_"+i,""+chosen[i]);
    for(var row=1;row<=16;row++){
        var right=1+Math.floor(Math.random()*4),name=(row<10?"0":"")+row;
        for(var col=1;col<=4;col++)em.setProperty("stage6_"+name+col,col==right?"1":"0");
    }
    em.setProperty("loungeRow1",""+(1+Math.floor(Math.random()*3)));
    em.setProperty("loungeRow2",""+(1+Math.floor(Math.random()*3)));
    var first=Math.floor(Math.random()*5),second;
    do{second=Math.floor(Math.random()*5);}while(first==second);
    for(var lever=0;lever<5;lever++)em.setProperty("stage62_"+lever,lever==first||lever==second?"1":"0");
    for(var i=0;i<activityMaps.length;i++){var map=eim.setInstanceMap(activityMaps[i]);map.resetFully();map.setSpawns(false);}
    // Client reactor 2006000 states 0-19 are animation frames; only state 20 accepts 20 clouds.
    var light=eim.getMapInstance(0).getReactorByName("eak");
    if(light!=null && light.getReactorId()==2006000)light.forceHitReactor(20);
    eim.startEventTimer(3600000);return eim;
}
function clearMaterials(player){
    for(var item=4001044;item<=4001063;item++)removeItem(player,item);
    removeItem(player,4001074);
}
function removeItem(player,item){var count=player.getItemQuantity(item,false);if(count>0)Packages.server.MapleInventoryManipulator.removeById(player.getClient(),Packages.constants.GameConstants.getInventoryType(item),item,count,false,false);}
function playerEntry(eim,player){clearMaterials(player);var map=eim.getMapInstance(0);player.changeMap(map,map.getPortal(0));player.tryPartyQuest(1203);}
function cloudReady(eim,reactor){
    progressLock.lock();try{
        if(eim.getProperty("phase")!="entrance"||reactor.getMap()!=eim.getMapInstance(0)||reactor.getState()<21||em.getProperty("pre")=="1")return false;
        em.setProperty("pre","1");return true;
    }finally{progressLock.unlock();}
}
function enterTower(eim){
    if(eim.getProperty("phase")!="entrance"||em.getProperty("pre")!="1")return false;
    eim.setProperty("phase","rooms");warpPlayers(eim,1);return true;
}
function warpPlayers(eim,index){var map=eim.getMapInstance(index),players=eim.getPlayers();for(var i=0;i<players.size();i++)players.get(i).changeMap(map,map.getPortal(0));}
function installPiece(eim,reactor){
    progressLock.lock();try{
        var id=reactor.getReactorId();if(eim.getProperty("phase")!="rooms"||reactor.getMap()!=eim.getMapInstance(1)||id<2008000||id>2008005||reactor.getState()<1||eim.getProperty("piece"+id)=="1")return;
        eim.setProperty("piece"+id,"1");var count=0;for(var n=2008000;n<=2008005;n++)if(eim.getProperty("piece"+n)=="1")count++;
        em.setProperty("stage",""+count);eim.getMapInstance(1).getReactorByName("minerva").forceHitReactor(count);
    }finally{progressLock.unlock();}
}
function musicReady(eim,reactor){
    if(eim.getProperty("phase")!="rooms"||reactor.getMap()!=eim.getMapInstance(4)||reactor.getState()<1)return;
    em.setProperty("stage3","1");var stone=eim.getMapInstance(4).getReactorByName("stone3");if(stone!=null&&stone.getState()==0)stone.forceHitReactor(1);
}
function checkSealed(eim){
    var map=eim.getMapInstance(5),areas=map.getAreas(),counts=[0,0,0],players=eim.getPlayers();
    if(eim.getProperty("phase")!="rooms"||areas.size()!=3)return false;
    for(var i=0;i<players.size();i++){var p=players.get(i);if(p.getMap()!=map)continue;for(var j=0;j<3;j++)if(areas.get(j).contains(p.getPosition())){counts[j]++;break;}}
    for(var j=0;j<3;j++)if(counts[j]!=parseInt(em.getProperty("stage4_"+j)))return false;
    em.setProperty("stage4","1");map.getReactorByName("stone4").forceHitReactor(1);return true;
}
function checkLevers(eim){
    var map=eim.getMapInstance(11);if(eim.getProperty("phase")!="rooms")return false;
    for(var i=0;i<5;i++){var r=map.getReactorByName(""+(i+1));if(r==null||(r.getState()==1)!=(em.getProperty("stage62_"+i)=="1"))return false;}
    em.setProperty("stage6","1");map.getReactorByName("stone6").forceHitReactor(1);return true;
}
function enterGarden(eim){if(eim.getProperty("phase")!="rooms"||em.getProperty("stage")!="6")return false;eim.setProperty("phase","garden");warpPlayers(eim,12);return true;}
function monsterValue(eim,id){
    if(id==9300040&&eim.getProperty("phase")=="rooms"){
        var n=parseInt(em.getProperty("stage2"));if(n<14){em.setProperty("stage2",""+(n+1));var mob=em.getMonster(9300040);eim.registerMonster(mob);eim.getMapInstance(3).spawnMonsterOnGroundBelow(mob,new java.awt.Point(cx[n],cy[n]));}
    }
    if(id==9300049&&eim.getProperty("phase")=="garden"&&em.getProperty("stage7")=="0"){
        em.setProperty("stage7","1");var boss=em.getMonster(9300039);eim.registerMonster(boss);eim.getMapInstance(12).spawnMonsterOnGroundBelow(boss,new java.awt.Point(-830,563));
    }
    if(id==9300039&&eim.getProperty("phase")=="garden")eim.setProperty("bossDefeated","1");
    return 0;
}
function saveGoddess(eim,reactor){
    if(eim.getProperty("phase")!="garden"||eim.getProperty("bossDefeated")!="1"||reactor.getMap()!=eim.getMapInstance(1)||reactor.getState()<7)return false;
    eim.setProperty("phase","saved");return true;
}
function clearPQ(eim){
    if(eim.getProperty("phase")!="saved")return;
    eim.setProperty("phase","bonus");em.setProperty("done","1");
    var players=eim.getPlayers();for(var i=0;i<players.size();i++){clearMaterials(players.get(i));players.get(i).endPartyQuest(1203);}
    eim.restartEventTimer(60000);warpPlayers(eim,24);
}
function end(eim){
    var phase=eim.getProperty("phase");if(phase=="ending")return;eim.setProperty("phase","ending");
    var players=eim.getPlayers();for(var i=0;i<players.size();i++)clearMaterials(players.get(i));
    for(var i=0;i<activityMaps.length;i++){var map=eim.getMapInstance(i);if(map!=null){map.setSpawns(false);map.killAllMonsters(false);}}
    eim.disposeIfPlayerBelow(100,phase=="bonus"?920011300:920011200);init();
}
function changedMap(eim,player,mapid){
    var phase=eim.getProperty("phase");if(phase=="ending")return;
    for(var i=0;i<activityMaps.length;i++)if(mapid==activityMaps[i])return;
    clearMaterials(player);var leader=eim.isLeader(player);eim.unregisterPlayer(player);
    if(phase!="bonus"&&(leader||eim.getPlayerCount()<6))end(eim);else if(eim.getPlayerCount()==0)end(eim);
}
function playerDisconnected(eim,player){clearMaterials(player);eim.unregisterPlayer(player);if(eim.getProperty("phase")!="bonus"||eim.getPlayerCount()==0)end(eim);return 0;}
function playerExit(eim,player){var map=eim.getMapFactory().getMap(eim.getProperty("phase")=="bonus"?920011300:920011200);player.changeMap(map,map.getPortal(0));}
function scheduledTimeout(eim){end(eim);}
function playerDead(eim,player){if(eim.getProperty("phase")!="bonus")end(eim);}
function playerRevive(eim,player){playerExit(eim,player);return false;}
function leftParty(eim,player){end(eim);}
function disbandParty(eim){end(eim);}
function allMonstersDead(eim){}
function cancelSchedule(){var instances=new java.util.ArrayList(em.getInstances());for(var i=0;i<instances.size();i++)end(instances.get(i));}
