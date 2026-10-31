/* CMS per-passenger crane flight; user-defined fare 1500, duration 60s. */
function init() {}

function playerEntry(eim, player) {
    var rideId = parseInt(eim.getProperty("ride"));
    var originId = parseInt(eim.getProperty("origin"));
    var seconds = parseInt(eim.getProperty("seconds"));
    if ((rideId != 200090300 && rideId != 200090310) || seconds != 60) throw new Error("Invalid crane flight");
    var ride = eim.createInstanceMap(rideId);
    if (ride == null || ride.getPortal(0) == null) throw new Error("Missing crane ride map");
    // Keep disconnect/save recovery route-local without changing shared maps.
    ride.setReturnMapId(originId);
    ride.setForcedReturnMap(originId);
    player.changeMap(ride, ride.getPortal(0));
    player.getClient().getSession().write(MaplePacketCreator.getClock(seconds));
    eim.schedule("timeOut", seconds * 1000);
    eim.setProperty("entered", "true");
}

function timeOut(eim) {
    var destination = eim.getChannelServer().getMapFactory().getMap(parseInt(eim.getProperty("destination")));
    if (destination == null || destination.getPortal(0) == null) {
        eim.schedule("timeOut", 1000);
        return;
    }
    var players = new Packages.java.util.ArrayList(eim.getPlayers());
    var iterator = players.iterator();
    while (iterator.hasNext()) {
        var player = iterator.next();
        eim.unregisterPlayer(player);
        player.changeMap(destination, destination.getPortal(0));
    }
    eim.dispose();
}

function changedMap(eim, player, mapId) {
    if (mapId != parseInt(eim.getProperty("ride"))) {
        eim.unregisterPlayer(player);
        if (eim.getPlayerCount() == 0) eim.dispose();
    }
}

function playerDisconnected(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.getPlayerCount() == 0) eim.dispose();
}

function playerDead(eim, player) {}
function playerRevive(eim, player) { return false; }
