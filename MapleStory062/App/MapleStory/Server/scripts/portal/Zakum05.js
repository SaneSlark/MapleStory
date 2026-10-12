/*
-- odinms JavaScript --
        NPC脚本 
-------------------------
   odinms MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/

importPackage(net.sf.odinms.server.maps);
importPackage(net.sf.odinms.net.channel);
importPackage(net.sf.odinms.tools);

function enter(pi) {
	var nextMap = 211042400;
	if (pi.getPlayer().getClient().getChannel() != 4) {
		pi.sendMessage("扎昆不能在此频道被召唤,挑战大怪物扎昆,只能在 4 频道.");
		return false;
	}
	else if (!pi.getPortal().getStatus()) {
		pi.sendMessage("里面已经开始了对抗大怪物的战斗,你无法进入.");
		return false;
	}
	else if (!pi.haveItem(4001017)) {		
		pi.sendMessage("你没有火眼,你可能无法进入挑战扎昆.");
		return false;
	}
	else {
		pi.warp(nextMap,"west00");
		return true;
	}
}