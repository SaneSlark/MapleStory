/*
-- MrCoffee JavaScript --
        NPC-portal
-------------------------
   MrCoffee MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/

importPackage(net.sf.odinms.server.maps);

function enter(pi) {
    if (pi.getPlayer().getMapId() != 910000000) {
        pi.getPlayer().saveLocation(SavedLocationType.FREE_MARKET);
	pi.warp(910000000, "st00");
	return true;
    }
    return false;
}
