var status = -1;
function action(mode, type, selection) {
    if (cm.getMapId() == 926110600) {
	    cm.removeAll(4001130);
	    cm.removeAll(4001131);
	    cm.removeAll(4001132);
	    cm.removeAll(4001133);
	    cm.removeAll(4001134);
	    cm.removeAll(4001135);
	var em = cm.getEventManager("Juliet");
    if (em != null) {
	var itemid = 4001159;
	var itemid1 = 2450000;
	if (!cm.canHold(itemid, 1)) {
	    cm.sendOk("请先在其他栏中空出1个位置。");
	    cm.dispose();
	    return;
	}
	cm.gainItem(itemid, 1);
	cm.gainItem(itemid1, 1);
	if (em.getProperty("stage").equals("2")) {
    		//cm.gainNX(5000);
    		cm.gainExpR(140000);
	} else {
		//cm.gainNX(3500);
		cm.gainExpR(105000);
	}
    }
    cm.getPlayer().endPartyQuest(1205);
    cm.warp(926110700,0);
    cm.dispose();
    return;
    }
    if (mode > 0) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	    cm.removeAll(4001130);
	    cm.removeAll(4001131);
	    cm.removeAll(4001132);
	    cm.removeAll(4001133);
	    cm.removeAll(4001134);
	    cm.removeAll(4001135);
		
		//cm.gainItem(4310014, 1);//BOSS币
	cm.sendSimple("#b#L0#离开这里#l\r\n#L1#兑换荷鲁斯之眼#l\r\n#L2#兑换智慧之石#l#k");
    } else {
	if (selection == 0) {
    	    cm.warp(926110600,0);
			//cm.gainItem(4002001, 1);//蓝蜗牛邮票
			//cm.gainItem(4031456, 1);//给枫叶珠1个
		//cm.gainItem(4310030, 1);//运动币
			cm.gainItem(4170017, 1);//运动币
			cm.gainItem(4000313, 2);//金叶
			cm.gainMeso(+200000);//金币
	} else if (selection == 1) {
	    if (cm.canHold(1122010,1) && cm.haveItem(4001160,25) && cm.haveItem(4001159,25)) {
		cm.gainItem(1122010,1);
		cm.gainItem(4001160,-25);
		cm.gainItem(4001159,-25);
	    } else {
		cm.sendOk("获得荷鲁斯之眼需要25个卡帕莱特珠子和25个蒙特鸠珠子，并在装备栏空出位置。");
	    }
	} else {
	    if (cm.canHold(2041212,1) && (cm.haveItem(4001160,10) || cm.haveItem(4001159,10))) {
		cm.gainItem(2041212,1);
		if (cm.haveItem(4001160,10)) {
			cm.gainItem(4001160,-10);
		} else {
			cm.gainItem(4001159,-10);
		}
	    } else {
		cm.sendOk("获得智慧之石需要任意一种珠子10个，并在消耗栏空出位置。");
	    }
	}
    	cm.dispose();
    }
}