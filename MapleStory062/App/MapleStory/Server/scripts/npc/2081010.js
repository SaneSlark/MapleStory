/*
Moose
...
Warps to exit map etc.
*/

var status;
var exitMap = 221000300;
var exitPortal = "mid00";

function start() {
	status = -1
	action(1,0,0);
}

function action(mode, type, selection){
	if (mode == -1) {
		cm.dispose();
	}
	if (mode == 0 && status == 0) {
		cm.dispose();
		return;
	}
	else {
		if (mode == 1) {
			status++;
		}
		else
			status--;
		var mapId = cm.getChar().getMapId();
		if (mapId == exitMap) { // won't happen in boss PQ, here for historic reasons
			if (status == 0) {
				cm.sendNext("下次见。");
			}
			else {
				cm.warp(103000000,"mid00"); // Kerning
				cm.dispose();
			}
		}
		else {
			var outText = "真的想要离开么. " +  cm.getChar().getName()  +  "?一旦你离开这里,你将失去这个机会,确定要离开么?";		 
			if (status == 0) {
				cm.sendYesNo(outText);
			}
			else if (mode == 1) {
				// Remove them from the PQ!
				var eim = cm.getChar().getEventInstance();
				if (eim == null)
					// warp player
					//cm.warp(exitMap,exitPortal);
					cm.warp(221000300,0);
				else if (cm.isLeader())
					eim.disbandParty();

				else
					eim.leftParty(cm.getChar());
				cm.dispose();
			}
			else {
				cm.dispose();
			}
		}
	}
}
