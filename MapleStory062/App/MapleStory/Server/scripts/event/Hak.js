importPackage(net.sf.odinms.tools);
var timeOnRide=60;
function init(){em.setProperty("isRiding","false");}
function finish(eim){
    if(eim==null||eim.getProperty("finished")=="true")return;
    eim.setProperty("finished","true");em.setProperty("isRiding","false");eim.dispose();
}
function playerEntry(eim,player){
    var flight=parseInt(eim.getProperty("flightMap")),destination=parseInt(eim.getProperty("destination"));
    if((flight!=200090300&&flight!=200090310)||(destination!=200000141&&destination!=250000100))throw new Error("Invalid crane route");
    em.setProperty("isRiding","true");eim.setProperty("finished","false");eim.setProperty("arriving","false");
    var map=eim.getMapFactory().getMap(flight);player.changeMap(map,map.getPortal(0));
    player.getClient().getSession().write(MaplePacketCreator.getClock(timeOnRide));eim.schedule("timeOut",timeOnRide*1000);
}
function timeOut(eim){
    if(eim==null||eim.getProperty("finished")=="true")return;
    eim.setProperty("arriving","true");
    var destination=parseInt(eim.getProperty("destination")),map=em.getChannelServer().getMapFactory().getMap(destination);
    var portal=map.getPortal(String(eim.getProperty("destinationPortal")));if(portal==null)portal=map.getPortal(0);
    if(portal==null)throw new Error("Crane destination has no arrival portal");
    var players=new java.util.ArrayList(eim.getPlayers());
    for(var i=0;i<players.size();i++){
        var player=players.get(i);
        if(player.getMapId()==parseInt(eim.getProperty("flightMap")))player.changeMap(map,portal);
    }
    eim.setProperty("arrivalChecks","0");finishArrival(eim);
}
function finishArrival(eim){
    if(eim==null||eim.getProperty("finished")=="true")return;
    var players=new java.util.ArrayList(eim.getPlayers()),flight=parseInt(eim.getProperty("flightMap"));
    for(var i=0;i<players.size();i++)if(players.get(i).getMapId()!=flight)eim.unregisterPlayer(players.get(i));
    if(eim.getPlayerCount()==0){finish(eim);return;}
    var tries=parseInt(eim.getProperty("arrivalChecks"))+1;eim.setProperty("arrivalChecks",String(tries));
    if(tries>=40){for(var i=0;i<players.size();i++)eim.unregisterPlayer(players.get(i));finish(eim);return;}
    eim.schedule("finishArrival",250);
}
function changedMap(eim,player,mapid){
    if(eim.getProperty("arriving")=="true"||eim.getProperty("finished")=="true")return;
    if(mapid!=parseInt(eim.getProperty("flightMap"))){eim.unregisterPlayer(player);if(eim.getPlayerCount()==0)finish(eim);}
}
function playerDisconnected(eim,player){eim.unregisterPlayer(player);if(eim.getPlayerCount()==0)finish(eim);}
function playerExit(eim,player){playerDisconnected(eim,player);}
function disbandParty(eim){timeOut(eim);}
function monsterValue(eim,mobid){return 0;}
