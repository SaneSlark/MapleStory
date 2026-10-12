/*
-- odinms JavaScript --
        NPC脚本 
-------------------------
   odinms MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/

function enter(pi) {	
		if (pi.getPortal().getStatus()) {
			pi.warp(220080001, "st00");
			return true;
		} else {
			pi.sendMessage("里面已经开始了挑战大怪物的战斗,你无法进入.");
			return false;
		}	
}