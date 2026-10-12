/*
-- odinms JavaScript --
        NPC-portal
-------------------------
   odinms MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/

importPackage(net.sf.odinms.server.maps);
importPackage(net.sf.odinms.net.channel);

/*
Return from Free Market Script
*/

function enter(pi) {
	var returnMap = pi.getPlayer().getSavedLocation(SavedLocationType.FREE_MARKET);
        
	if (returnMap < 0) {
		returnMap = 102000000; // to fix people who entered the fm trough an unconventional way
	}
	var target = pi.getPlayer().getClient().getChannelServer().getMapFactory().getMap(returnMap);
	var targetPortal;
        
	if (returnMap == 230000000) { // aquaroad has a different fm portal - maybe we should store the used portal too?
		targetPortal = target.getPortal("market01");
	} else {
		targetPortal = target.getPortal("market00");
	}
	if (targetPortal == null) {
		targetPortal = target.getPortal(0);
	}
        
        if (pi.getPlayer().getMapId() != target) {
            pi.getPlayer().clearSavedLocation(SavedLocationType.FREE_MARKET);
            pi.getPlayer().changeMap(target, targetPortal);
            return true;
        }
        return false;
}
