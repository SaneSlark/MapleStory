/*
 *  NPC   : Gold Compass
 *  Free Market event NPC
 */

var status = -1;

function start() {
    if (cm.getMapId() == 910000000) {
	cm.sendNext("若没有我，伟大的卡珊德拉，这个世界该怎么办呢？我每天都在为这里操心。你想知道发生了什么？");
    } else {
	cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendOk("你对宝物不感兴趣吗？");
	cm.dispose();
	return;
    }

    if (status == 0) {
	cm.sendNext("冒险岛富豪金利奇的宝库被一群猪破坏了，宝物都被它们吃掉了，他希望立刻解决这件事。#b#h0#!#k虽然还不确定你是否可靠，但没有其他人肯帮忙了，你愿意试试吗？也许能带回一件宝物。请先在消耗栏空出至少一个位置。");
    } else if (status == 1) {
	cm.sendNext("我这里有空罗盘，也可以付费购买#b罗盘用N、罗盘用E、罗盘用W和罗盘用S#k。集齐后，双击#b空罗盘#k即可制作#b黄金罗盘#k，带你前往金利奇的宝库。");
    } else if (status == 2) {
	cm.sendSimple("需要什么物品？\r\n#b#L0#空罗盘（300万金币）#l\r\n#b#L1#罗盘用N（100,000金币）#l\r\n#b#L2#罗盘用E（100,000金币）#l\r\n#b#L3#罗盘用W（100,000金币）#l\r\n#b#L4#罗盘用S（100,000金币）#l");
    } else if (status == 3) {
	if (selection == 0) {
	    if (cm.canHold(2430007) && cm.getMeso() >= 3000000) {
		cm.gainItem(2430007, 1)
		cm.gainMeso(-3000000);
	    } else {
		cm.sendOk("你没有骗我吧？");
	    }
	} else if (selection == 1) {
	    if (cm.canHold(3994102) && cm.getMeso() >= 100000) {
		cm.gainItem(3994102, 20)
		cm.gainMeso(-100000);
	    } else {
		cm.sendOk("你没有骗我吧？");
	    }
	} else if (selection == 2) {
	    if (cm.canHold(3994103) && cm.getMeso() >= 100000) {
		cm.gainItem(3994103, 20)
		cm.gainMeso(-100000);
	    } else {
		cm.sendOk("你没有骗我吧？");
	    }
	} else if (selection == 3) {
	    if (cm.canHold(3994104) && cm.getMeso() >= 100000) {
		cm.gainItem(3994104, 20)
		cm.gainMeso(-100000);
	    } else {
		cm.sendOk("你没有骗我吧？");
	    }
	} else if (selection == 4) {
	    if (cm.canHold(3994105) && cm.getMeso() >= 100000) {
		cm.gainItem(3994105, 20)
		cm.gainMeso(-100000);
	    } else {
		cm.sendOk("你没有骗我吧？");
	    }
	}
	cm.dispose();
    }
}
