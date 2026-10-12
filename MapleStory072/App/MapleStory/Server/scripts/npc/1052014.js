var sel;
var status = -1;

function start() {
    cm.sendSimple("这里可以购买捕捉怪物的用品。\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#b#L3#普通捕捉球（300,000金币）#l\r\n#L4#高级捕捉球（600,000金币）#l\r\n#L5#超级捕捉球（1,200,000金币）#l\r\n\r\n#L6#治疗果实（5,000,000金币）#l\r\n#L7#治愈果实（10,000,000金币）#l\r\n\r\n\r\n\r\n#L11#黑巧克力（20,000,000金币）#l\r\n#L12#白巧克力（20,000,000金币）#l\r\n\r\n\r\n#k");
}

function action(mode, type, selection) {
if(mode!=1){cm.dispose();return;}
if(status==-1 && [8,9,10,20,21].indexOf(selection)>=0){cm.sendOk("该商品不在本客户端中，无法购买，未扣金币。");cm.dispose();return;}
    if (mode == 1) {
	status++;
	if (status == 0) {
	sel = selection;
	switch(sel) {
	    case 3: //points
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 300000) {
		    cm.sendOk("你至少需要300 000金币。");
		    cm.dispose();
	        } else {
		    cm.sendGetNumber("你需要多少个？（普通捕捉球单价300 000金币）（当前金币：" + intPoints + "）（当前捕捉球数量：" + cm.getPlayer().itemQuantity(3992017) + ")", 1, 1, intPoints / 300000);
	        }
		break;
	    case 4: //points
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 600000) {
		    cm.sendOk("你至少需要600 000金币。");
		    cm.dispose();
	        } else {
		    cm.sendGetNumber("你需要多少个？（高级捕捉球单价600 000金币）（当前金币：" + intPoints + "）（当前捕捉球数量：" + cm.getPlayer().itemQuantity(3992018) + ")", 1, 1, intPoints / 600000);
	        }
		break;
	    case 5: //points
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 1200000) {
		    cm.sendOk("你至少需要1 200 000金币。");
		    cm.dispose();
	        } else {
		    cm.sendGetNumber("你需要多少个？（超级捕捉球单价1 200 000金币）（当前金币：" + intPoints + "）（当前捕捉球数量：" + cm.getPlayer().itemQuantity(3992019) + ")", 1, 1, intPoints / 1200000);
	        }
		break;
	    case 6:
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 5000000) {
		    cm.sendOk("你至少需要5 000 000金币。");
	        } else if (!cm.canHold(4140102,1)) {
		    cm.sendOk("请先在背包中空出位置。");
		} else {
		    cm.gainMeso(-5000000);
		    cm.gainItem(4140102, 1);
		}
		cm.dispose();
		break;
	    case 7:
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 10000000) {
		    cm.sendOk("你至少需要10 000 000金币。");
	        } else if (!cm.canHold(4140101,1)) {
		    cm.sendOk("请先在背包中空出位置。");
		} else {
		    cm.gainMeso(-10000000);
		    cm.gainItem(4140101, 1);
		}
		cm.dispose();
		break;
	    case 8:
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 15000000) {
		    cm.sendOk("你至少需要15 000 000金币。");
	        } else if (!cm.canHold(4032444,1)) {
		    cm.sendOk("请先在背包中空出位置。");
		} else {
		    cm.gainMeso(-15000000);
		    cm.gainItem(4032444, 1);
		}
		cm.dispose();
		break;
	    case 9:
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 15000000) {
		    cm.sendOk("你至少需要15 000 000金币。");
	        } else if (!cm.canHold(4032445,1)) {
		    cm.sendOk("请先在背包中空出位置。");
		} else {
		    cm.gainMeso(-15000000);
		    cm.gainItem(4032445, 1);
		}
		cm.dispose();
		break;
	    case 10:
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 15000000) {
		    cm.sendOk("你至少需要15 000 000金币。");
	        } else if (!cm.canHold(4032446,1)) {
		    cm.sendOk("请先在背包中空出位置。");
		} else {
		    cm.gainMeso(-15000000);
		    cm.gainItem(4032446, 1);
		}
		cm.dispose();
		break;
	    case 11:
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 20000000) {
		    cm.sendOk("你至少需要20 000 000金币。");
	        } else if (!cm.canHold(4031110,1)) {
		    cm.sendOk("请先在背包中空出位置。");
		} else {
		    cm.gainMeso(-20000000);
		    cm.gainItem(4031110, 1);
		}
		cm.dispose();
		break;
	    case 12:
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 20000000) {
		    cm.sendOk("你至少需要20 000 000金币。");
	        } else if (!cm.canHold(4031109,1)) {
		    cm.sendOk("请先在背包中空出位置。");
		} else {
		    cm.gainMeso(-20000000);
		    cm.gainItem(4031109, 1);
		}
		cm.dispose();
		break;
	    case 20:
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 75000000) {
		    cm.sendOk("你至少需要75 000 000金币。");
	        } else if (!cm.canHold(3994185,1)) {
		    cm.sendOk("请先在背包中空出位置。");
		} else {
		    cm.gainMeso(-75000000);
		    cm.gainItem(3994185, 1);
		}
		cm.dispose();
		break;
	    case 21:
		var intPoints = cm.getPlayer().getMeso();
	        if (intPoints < 25000000) {
		    cm.sendOk("你至少需要25 000 000金币。");
	        } else if (!cm.canHold(3800088,1)) {
		    cm.sendOk("请先在背包中空出位置。");
		} else {
		    cm.gainMeso(-25000000);
		    cm.gainItem(3800088, 1);
		}
		cm.dispose();
		break;
	}
	} else {
	    if (sel == 3) {
		var intPoints = cm.getPlayer().getMeso();
		if (selection >= 1 && selection <= (intPoints / 300000)) {
			if (selection > (intPoints / 300000)) {
				cm.sendOk("最多只能获得" + (intPoints / 300000) + ". 1 Ball = 300000 meso.");
			} else if (!cm.canHold(3992017, selection)) {
				cm.sendOk("请先在装饰栏中空出位置。");
			} else {
				cm.gainItem(3992017, selection);
				cm.gainMeso(-300000 * selection);
			}
		}
	    } else if (sel == 4) {
		var intPoints = cm.getPlayer().getMeso();
		if (selection >= 1 && selection <= (intPoints / 600000)) {
			if (selection > (intPoints / 600000)) {
				cm.sendOk("最多只能获得" + (intPoints / 600000) + ". 1 Ball = 600000 meso.");
			} else if (!cm.canHold(3992018, selection)) {
				cm.sendOk("请先在装饰栏中空出位置。");
			} else {
				cm.gainItem(3992018, selection);
				cm.gainMeso(-600000 * selection);
			}
		}
	    } else if (sel == 5) {
		var intPoints = cm.getPlayer().getMeso();
		if (selection >= 1 && selection <= (intPoints / 1200000)) {
			if (selection > (intPoints / 1200000)) {
				cm.sendOk("最多只能获得" + (intPoints / 1200000) + ". 1 Ball = 1200000 meso.");
			} else if (!cm.canHold(3992019, selection)) {
				cm.sendOk("请先在装饰栏中空出位置。");
			} else {
				cm.gainItem(3992019, selection);
				cm.gainMeso(-1200000 * selection);
			}
		}
	    }
	    cm.dispose();
	}
    } else {
	cm.dispose();
    }
}