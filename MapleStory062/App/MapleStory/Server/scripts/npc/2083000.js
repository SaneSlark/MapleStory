/* Pison
	Warp NPC to Lith Harbor (104000000)
	located in Florina Beach (110000000)
*/

importPackage(net.sf.odinms.server.maps);

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("那好吧,等你有胆量的时候再来找我吧！");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("你想去 #b暗黑龙王洞穴入口 #k 吗？");
		} else if (status == 1) {
			cm.sendNextPrev("那我送你进去 #b暗黑龙王洞穴入口 #k吧.")
		} else if (status == 2) {
                       if (cm.haveItem(4001083)) {
				cm.sendOk("对不起，扎昆的象征")
				cm.dispose();
			} else {
				cm.sendYesNo("你确定去 #b暗黑龙王洞穴入口 #k? 好吧，我送你进去！");
			}
		} else if (status == 3) {
			//var map = cm.getChar().getSavedLocation(SavedLocationType.FLORINA);
			//if (map == -1) {
				map = 240050400;
			//}
			cm.warp(map, 0);
			cm.dispose();
		}
	}
}