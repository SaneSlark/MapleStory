//Robo Pet Hatcher
//By : Vietno from Ragezone+ OdinTeh Forums
importPackage(net.sf.odinms.client);
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
			cm.sendOk("嘻嘻嘻。:)");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext("你好，来自冒险岛的 #h #。只要你给我 \r\n#v5000047# 1个机器宝贝蛋，我就送你一只机器宝贝。");
			}
		else if (status == 1) {
			if (cm.haveItem(5000047, 1) && cm.haveItem(5000047, 1) && cm.haveItem(5000047, 1)) {
			cm.sendYesNo("太好了，你果然带来了！这是给你的 \r\n#v5000048# #b机器宝贝#k。");
			}
			else if (!cm.haveItem(5000047, 1)) {
			cm.sendOk("#h #，嘿！你缺少一个机器宝贝蛋。\r\n#v5000047#   ");
			cm.dispose();
			}


			
		}
		else if (status == 2) {
			cm.gainItem(5000047, -1);
			cm.gainItem(5000048, 1);
			
}
}
}