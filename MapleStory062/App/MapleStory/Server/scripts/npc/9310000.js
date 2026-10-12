/*
	驾驶员 洪 (9310000) - 勇士部落 -> 东方神州（上海城市广场）
	路费：1000 金币
*/

var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendYesNo("您好，我是#b驾驶员 洪#k。我的飞机飞往#b东方神州 上海城市广场#k，路费 #e1000 金币#n。要搭飞机吗？");
		} else if (status == 1) {
			if (cm.getMeso() < 1000) {
				cm.sendOk("您的金币不足 #e1000#n，等攒够路费再来找我吧。");
				cm.dispose();
			} else {
				cm.gainMeso(-1000);
				cm.warp(701000100, "sp");
				cm.dispose();
			}
		}
	}
}
