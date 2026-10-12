importPackage(Packages.tools);

var Orbis_btf;
var Train_to_Orbis;
var Orbis_docked;
var Ludibrium_btf;
var Train_to_Ludibrium;
var Ludibrium_docked;

var stopEntryTask;
var stopEntryOpen;
var takeoffTask;
var takeoffOpen;
var arrivedTask;
var arrivedOpen;
var takeoffTime = 10 * 60 * 1000;


function init() {
    Orbis_btf = em.getChannelServer().getMapFactory().getMap(200000122);
    Ludibrium_btf = em.getChannelServer().getMapFactory().getMap(220000111);
    Train_to_Orbis = em.getChannelServer().getMapFactory().getMap(200090110);
    Train_to_Ludibrium = em.getChannelServer().getMapFactory().getMap(200090100);
    Orbis_docked = em.getChannelServer().getMapFactory().getMap(200000100);
    Ludibrium_docked = em.getChannelServer().getMapFactory().getMap(220000100);
    Orbis_Station = em.getChannelServer().getMapFactory().getMap(200000121);
    Ludibrium_Station = em.getChannelServer().getMapFactory().getMap(220000110);
	stopEntryOpen = false;
	takeoffOpen = false;
	arrivedOpen = false;
    scheduleNew();
}

function scheduleNew() {
    Ludibrium_Station.setDocked(true);
    Orbis_Station.setDocked(true);
    Ludibrium_Station.broadcastMessage(MaplePacketCreator.boatPacket(true));
    Orbis_Station.broadcastMessage(MaplePacketCreator.boatPacket(true));
    em.setProperty("docked", "true");
    em.setProperty("entry", "true");
    em.setProperty("departureTime", "" + (java.lang.System.currentTimeMillis() + takeoffTime));
    Ludibrium_Station.broadcastMessage(MaplePacketCreator.getClock(takeoffTime / 1000));
    Orbis_Station.broadcastMessage(MaplePacketCreator.getClock(takeoffTime / 1000));
    Ludibrium_btf.broadcastMessage(MaplePacketCreator.getClock(takeoffTime / 1000));
    Orbis_btf.broadcastMessage(MaplePacketCreator.getClock(takeoffTime / 1000));
    stopEntryTask = em.schedule("stopEntry", 240000);
	stopEntryOpen = true;
    takeoffTask = em.schedule("takeoff", takeoffTime);//300000
	takeoffOpen = true;
}

function stopEntry() {
    em.setProperty("entry", "false");
}

function takeoff() {
    Ludibrium_Station.setDocked(false);
    Orbis_Station.setDocked(false);
    em.setProperty("departureTime", "0");
    Ludibrium_Station.broadcastMessage(MaplePacketCreator.stopClock());
    Orbis_Station.broadcastMessage(MaplePacketCreator.stopClock());
    Ludibrium_btf.broadcastMessage(MaplePacketCreator.stopClock());
    Orbis_btf.broadcastMessage(MaplePacketCreator.stopClock());
    Ludibrium_Station.broadcastMessage(MaplePacketCreator.boatPacket(false));
    Orbis_Station.broadcastMessage(MaplePacketCreator.boatPacket(false));
    em.setProperty("docked", "false");
    var temp1 = Orbis_btf.getCharacters().iterator();
    while (temp1.hasNext())
        temp1.next().changeMap(Train_to_Ludibrium, Train_to_Ludibrium.getPortal(0));
    var temp2 = Ludibrium_btf.getCharacters().iterator();
    while (temp2.hasNext())
        temp2.next().changeMap(Train_to_Orbis, Train_to_Orbis.getPortal(0));
    arrivedTask = em.schedule("arrived", 10 * 60 * 1000);//600000
	arrivedOpen = true;
}

function arrived() {
    var temp1 = Train_to_Orbis.getCharacters().iterator();
    while (temp1.hasNext())
        temp1.next().changeMap(Orbis_docked, Orbis_docked.getPortal(0));
    var temp2 = Train_to_Ludibrium.getCharacters().iterator();
    while (temp2.hasNext())
        temp2.next().changeMap(Ludibrium_docked, Ludibrium_docked.getPortal(0));
    scheduleNew();
}

function cancelSchedule() {
	if( stopEntryOpen ) {
		stopEntryTask.cancel(true);
	}
	if( takeoffOpen ) {
		takeoffTask.cancel(true);
	}
	if( arrivedOpen ) {
		arrivedTask.cancel(true);
	}
	
}