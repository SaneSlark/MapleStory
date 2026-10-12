importPackage(net.sf.odinms.client);

var status = 0;
var zones = 0;
var tickets = Array(4031036, 4031037, 4031038);
var names = Array("工地B1", "工地B2", "工地B3");
var maps = Array(103000900, 103000903, 103000906);
var selectedMap = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("那么, 下次见.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("嗨,我是检票口.");
			if (!((cm.getQuestStatus(2057) == MapleQuestStatus.Status.NOT_STARTED))) {
			zones = 3;
			}
			else if (!((cm.getQuestStatus(2056) == MapleQuestStatus.Status.NOT_STARTED))) {
			zones = 2;
			}
			else if (!((cm.getQuestStatus(2055) == MapleQuestStatus.Status.NOT_STARTED))) {
			zones = 1;
			}
			else {
			zones = 0;
			}
		} else if (status == 1) {
			if (zones == 0) {
			cm.dispose();
			} else {
			var selStr = "你要去哪?#b";
			for (var i = 0; i < zones; i++) {
				selStr += "\r\n#L" + i + "#" + names[i] + "#l";
			}
			cm.sendSimple(selStr);
			}
		} else if (status == 2) {
			if (!(cm.haveItem(tickets[selection]))) {
				cm.sendOk("你没有买票.");
				cm.dispose();
			} else {
			selectedMap = selection;
			cm.gainItem(tickets[selectedMap],-1);
			cm.warp(maps[selectedMap],0);
			cm.dispose();
			}
		} 
	}
}	