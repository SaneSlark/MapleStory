/* CMS072 scheduled transport compatibility; route timings preserved from existing scripts. */
var service = {"name":"Flight","rideTime":420000,"routes":[{"dock":200000131,"wait":200000132,"ride":200090200,"cabin":-1,"destination":240000100},{"dock":240000110,"wait":240000111,"ride":200090210,"cabin":-1,"destination":200000100}]};
var cycle = null;
var transportTasks = [];
var transportCancelled = false;
function queueTransport(method,delay) {
    if(transportCancelled)return;
    var alive=[];
    for(var i=0;i<transportTasks.length;i++)if(transportTasks[i]!=null&&!transportTasks[i].isDone()&&!transportTasks[i].isCancelled())alive.push(transportTasks[i]);
    var task=em.schedule(method,delay);if(task!=null)alive.push(task);transportTasks=alive;
}
function init() { cancelSchedule();transportCancelled=false;transportTasks=[];scheduleNew(); }
function scheduleNew() {
    if(transportCancelled)return;
    cycle = em.newInstance(service.name);
    cycle.setProperty("phase", "boarding");
    em.setProperty("RideID", service.name);
    em.setProperty("entry", "true");
    em.setProperty("docked", "true");
    em.setProperty("haveBalrog", "false");
    queueTransport("stopEntry", 240000);
    queueTransport("takeoff", 300000);
}
function stopEntry() { em.setProperty("entry", "false"); }
function routeForMap(mapId) {
    for (var i=0;i<service.routes.length;i++) if (service.routes[i].dock==mapId) return i;
    return -1;
}
function playerEntry(eim, player) {
    var i=routeForMap(player.getMapId());
    if (i<0 || String(eim.getProperty("phase"))!="boarding" || String(em.getProperty("entry"))!="true") throw new Error("Transport boarding is closed");
    var route=service.routes[i];
    var wait=eim.getMapFactory().getMap(route.wait);
    if(wait==null || wait.getPortal(0)==null) throw new Error("Missing waiting map");
    eim.setProperty("route-"+player.getId(),String(i));
    player.changeMap(wait,wait.getPortal(0));
}
function takeoff() {
    if(transportCancelled)return;
    stopEntry();
    cycle.setProperty("phase","riding");
    em.setProperty("docked","false");
    var passengers=new Packages.java.util.ArrayList(cycle.getPlayers()).iterator();
    while(passengers.hasNext()) {
        var player=passengers.next();
        var route=service.routes[parseInt(cycle.getProperty("route-"+player.getId()))];
        if(route==null || player.getMapId()!=route.wait) {cycle.unregisterPlayer(player);continue;}
        var ride=cycle.getMapFactory().getMap(route.ride);
        player.changeMap(ride,ride.getPortal(0));
        player.getClient().getSession().write(MaplePacketCreator.getClock(service.rideTime/1000));
    }
    if(service.name=="Flight")for(var i=0;i<service.routes.length;i++)em.broadcastShip(service.routes[i].dock,3);
    queueTransport("arrived",service.rideTime);
}
function arrived() {
    if(transportCancelled)return;
    var passengers=new Packages.java.util.ArrayList(cycle.getPlayers()).iterator();
    while(passengers.hasNext()) {
        var player=passengers.next();
        var route=service.routes[parseInt(cycle.getProperty("route-"+player.getId()))];
        if(route==null || (player.getMapId()!=route.ride && player.getMapId()!=route.cabin)) {cycle.unregisterPlayer(player);continue;}
        var destination=cycle.getMapFactory().getMap(route.destination);
        if(destination==null || destination.getPortal(0)==null) {queueTransport("arrived",1000);return;}
        cycle.unregisterPlayer(player);
        player.changeMap(destination,destination.getPortal(0));
    }
    cycle.setProperty("phase","finished");
    cycle.dispose();
    if(service.name=="Flight")for(var i=0;i<service.routes.length;i++)em.broadcastShip(service.routes[i].dock,1);
    scheduleNew();
}
function changedMap(eim,player,mapId) {
    var route=service.routes[parseInt(eim.getProperty("route-"+player.getId()))];
    if(route==null || (mapId!=route.wait && mapId!=route.ride && mapId!=route.cabin)) eim.unregisterPlayer(player);
}
function playerExit(eim,player) {
    var route=service.routes[parseInt(eim.getProperty("route-"+player.getId()))];
    eim.unregisterPlayer(player);
    if(route!=null) {var dock=eim.getMapFactory().getMap(route.dock);player.changeMap(dock,dock.getPortal(0));}
}
function playerDisconnected(eim,player) {eim.unregisterPlayer(player);}
function playerDead(eim,player) {}
function playerRevive(eim,player) {return false;}
function cancelSchedule() {
    transportCancelled=true;em.setProperty("entry","false");
    for(var i=0;i<transportTasks.length;i++)if(transportTasks[i]!=null)transportTasks[i].cancel(false);
    transportTasks=[];
}
