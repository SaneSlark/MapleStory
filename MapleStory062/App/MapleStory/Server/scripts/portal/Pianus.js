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
	if (pi.getPlayerCount(230040420) <= 12) {
		pi.warp(230040420, "out00");		
		return true;	
	} else {
		pi.sendMessage("洞穴内的人数已经到达最高限制,请稍后再试.");
		return false;
	}	
}