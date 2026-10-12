/*
	By: Kevin
	Map: Hidden Chamber - The Nautilus - Stable (912000100)
	Quest: Find Fresh Milk (2180)
*/

function enter(pi){
	if (recoveryQuestStarted(pi, 2180) && (pi.haveItem(4031847) || pi.haveItem(4031848) || pi.haveItem(4031849) || pi.haveItem(4031850))){
		if (pi.haveItem(4031850)){
			recoveryPortalSound(pi); pi.warp(120000103, 0);
			return true;
		}
		else{
			pi.getPlayer().dropMessage(5, "\u4f60\u7684\u725b\u5976\u74f6\u8fd8\u6ca1\u6709\u88c5\u6ee1\u3002");
			return false;
		}
	}
	else{
		recoveryPortalSound(pi); pi.warp(120000103, 0);
		return true;
	}
}

// Adapted for the bundled OdinMS runtime; retain the original quest/item gates.
function recoveryQuestStarted(pi, id) {
    return pi.getQuestStatus(id).equals(Packages.net.sf.odinms.client.MapleQuestStatus.Status.STARTED);
}
function recoveryQuestCompleted(pi, id) {
    return pi.getQuestStatus(id).equals(Packages.net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED);
}
function recoveryPortalSound(pi) {
    pi.getPlayer().getClient().getSession().write(Packages.net.sf.odinms.tools.MaplePacketCreator.playSound("Game/Portal"));
}
