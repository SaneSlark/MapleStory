//Gachaphon

importPackage(net.sf.odinms.client);



var status = 0;
var chance1 = Math.floor(Math.random()*120+1);
var chance2 = Math.floor(Math.random()*30);
var chance3 = (Math.floor(Math.random()*5)+1);
var chance4 = Math.floor(Math.random()*2+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var itemamount = Math.floor(Math.random()*50+1);


function start() {
	status = -1;
	action(1, 0, 0);
}


function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("下次见!祝你好运!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext("你好啊，是不是觉得我很漂亮噢？恩...你有什么事情吗？\r\nGM交代过，如果你能给我传送中的魔幻紫水晶，我就可以随机给你一定数量的金币喔\r\n魔幻紫水晶的样子是 #v4031574#  据说绿蘑菇、鲨鱼和尖鼻鲨鱼有掉哟！");
			}
		else if (status == 1) {
			if (cm.haveItem(4031574)) {
			cm.sendYesNo("你竟然有传说中的魔幻紫水晶,想试下你的手气吗?");
			}
			else if (!cm.haveItem(4031574)) {
			cm.sendOk("你没有#r魔幻紫水晶#k #v4031574#.");
			cm.dispose();
			}
		}
		else if (status == 2) {
			cm.gainItem(4031574, -1);
			if ((itemchance >= 1) && (itemchance <= 20)) {
			cm.gainMeso(50000);
			}
			else if ((itemchance >= 21) && (itemchance <= 40)) {
			cm.gainMeso(100000);
			}
			else if ((itemchance >= 41) && (itemchance <= 50)) {
			cm.gainMeso(300000);
			}
			else if ((itemchance >= 51) && (itemchance <= 60)) {
			cm.gainMeso(500000);
			}
			else if ((itemchance >= 61) && (itemchance <= 70)) {
			cm.gainMeso(600000);
			}
			else if (itemchance == 71) {
			cm.gainMeso(700000);
			}
			else if (itemchance == 72) {
			cm.gainMeso(800000);
			}
			else if (itemchance == 73) {
			cm.gainMeso(900000);
			}
			else if (itemchance == 74) {
			cm.gainMeso(1000000);
			}
			else if (itemchance == 75) {
			cm.gainMeso(1100000);
			}
			else if (itemchance == 76) {
			cm.gainMeso(1200000);
			}
			else if (itemchance == 77) {
			cm.gainMeso(1300000);
			}
			else if (itemchance == 78) {
			cm.gainMeso(1400000);
			}
			else if (itemchance == 79) {
			cm.gainMeso(1500000);
			}	
			else if (itemchance == 80) {
			cm.gainMeso(1600000);
			}	
			else if (itemchance == 81) {
			cm.gainMeso(2000000);
			}
		

			cm.dispose();
		}
	}
}
