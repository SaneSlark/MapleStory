/*
-- odinms JavaScript --
        NPC脚本
-------------------------
   西拉斯 - 阿里安特升降场 卖票员
   出售 4031045 开往天空之城的船票（一般），6000 金币
   检票登船：乘务员 阿世顺（2102000）→ Geenie 事件
*/

var status = -1;
var cost = 6000;
var ticket = 4031045;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
	} else {
		if(mode == 1) {
			status++;
		}
		if(mode == 0) {
			cm.sendNext("呵呵....你肯定是一个不简单的人吧..?");
			cm.dispose();
			return;
		}
		if(status == 0) {
			cm.sendYesNo("您好，我负责销售开往#b天空之城#k的船票。飞船票价 #b6000 金币#k，买下船票后请交给乘务员#b阿世顺#k检票登船。您要购买一张船票吗？");
		} else if(status == 1) {
			if(cm.getMeso() >= cost && cm.canHold(ticket)) {
				cm.gainMeso(-cost);
				cm.gainItem(ticket, 1);
				cm.sendOk("这是开往天空之城的船票，请拿好。检票口就在附近，把票交给乘务员阿世顺就能登船了。飞船起飞前 5 分钟停止检票，请留意时间。");
			} else {
				cm.sendOk("抱歉...您没有 #b6000 金币#k，或者物品栏没有足够的空间。没有船票是不允许登船的哦。");
			}
			cm.dispose();
		}
	}
}
