var status = -1;

function start() {
	cm.removeAll(4001256);
	cm.removeAll(4001257);
	cm.removeAll(4001258);
	cm.removeAll(4001259);
	cm.removeAll(4001260);
		if (cm.getPlayer().getLevel() < 90) {
			cm.sendOk("There is a level requirement of 90 to attempt Crimsonwood Keep.");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getClient().getChannel() != 9 && cm.getPlayer().getClient().getChannel() != 10 && cm.getPlayer().getClient().getChannel() != 11 && cm.getPlayer().getClient().getChannel() != 8) {
			cm.sendOk("Crimsonwood Keep may only be attempted on channel 8,9,10,11.");
			cm.dispose();
			return;
		}
    var em = cm.getEventManager("CWKPQ");

    if (em == null) {
	cm.sendOk("活动尚未开启，请联系管理员。");
	cm.dispose();
	return;
    }
    var prop = em.getProperty("state");

    if (prop == null || prop.equals("0")) {
	var squadAvailability = cm.getSquadAvailability("CWKPQ");
	if (squadAvailability == -1) {
	    status = 0;
	    cm.sendYesNo("你愿意担任远征队队长吗？");

	} else if (squadAvailability == 1) {
	    // -1 = Cancelled, 0 = not, 1 = true
	    var type = cm.isSquadLeader("CWKPQ");
	    if (type == -1) {
		cm.sendOk("远征队已结束，请重新报名。");
		cm.dispose();
	    } else if (type == 0) {
		var memberType = cm.isSquadMember("CWKPQ");
		if (memberType == 2) {
		    cm.sendOk("你已被禁止加入这支远征队。");
		    cm.dispose();
		} else if (memberType == 1) {
		    status = 5;
		    cm.sendSimple("What do you want to do? \r\n#b#L0#Check out members#l \r\n#b#L1#Join the squad#l \r\n#b#L2#Withdraw from squad#l \r\n#b#L3#Check out jobs#l");
		} else if (memberType == -1) {
		    cm.sendOk("远征队已结束，请重新报名。");
		    cm.dispose();
		} else {
		    status = 5;
		    cm.sendSimple("What do you want to do? \r\n#b#L0#Check out members#l \r\n#b#L1#Join the squad#l \r\n#b#L2#Withdraw from squad#l \r\n#b#L3#Check out jobs#l");
		}
	    } else { // Is leader
		status = 10;
		cm.sendSimple("What do you want to do? \r\n#b#L0#Check out members#l \r\n#b#L1#Remove member#l \r\n#b#L2#Edit restricted list#l \r\n#b#L3#Check out jobs#l \r\n#r#L4#Enter map#l");
	    // TODO viewing!
	    }
	} else {
			var eim = cm.getDisconnected("CWKPQ");
			if (eim == null) {
				var squd = cm.getSquad("CWKPQ");
				if (squd != null) {
					if (squd.getNextPlayer() != null) {
						cm.sendOk("The squad's battle against the boss has already begun. The player to reserve the next spot is " + squd.getNextPlayer());
						cm.safeDispose();
					} else {
						cm.sendYesNo("The squad's battle against the boss has already begun. Would you like to queue the next spot?");
						status = 3;
					}
				} else {
					cm.sendOk("远征队与首领的战斗已经开始。");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("你回来了。是否重新加入远征队继续战斗？");
				status = 1;
			}
	}
    } else {
			var eim = cm.getDisconnected("CWKPQ");
			if (eim == null) {
				var squd = cm.getSquad("CWKPQ");
				if (squd != null) {
					if (squd.getNextPlayer() != null) {
						cm.sendOk("The squad's battle against the boss has already begun. The player to reserve the next spot is " + squd.getNextPlayer());
						cm.safeDispose();
					} else {
						cm.sendYesNo("The squad's battle against the boss has already begun. Would you like to queue the next spot?");
						status = 3;
					}
				} else {
					cm.sendOk("远征队与首领的战斗已经开始。");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("你回来了。是否重新加入远征队继续战斗？");
				status = 1;
			}
    }
}

function action(mode, type, selection) {
    switch (status) {
	case 0:
	    	if (mode == 1) {
			if (!cm.haveItem(4032012, 1)) {
				cm.sendOk("You need 1 Crimson Heart to apply.");
			} else if (cm.registerSquad("CWKPQ", 5, "已成为远征队队长，请在规定时间内报名加入远征队。")) {
				cm.sendOk("你已成为远征队队长，接下来5分钟内可以招募队员。");
			} else {
				cm.sendOk("创建远征队时发生错误。");
			}
	    	}
	    cm.dispose();
	    break;
	case 1:
		if (!cm.reAdd("CWKPQ", "CWKPQ")) {
			cm.sendOk("发生错误，请重试。");
		}
		cm.safeDispose();
		break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("CWKPQ");
			if (squd != null && squd.getNextPlayer() == null) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("已为你保留位置。");
			}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0 || selection == 3) {
		if (!cm.getSquadList("CWKPQ", selection)) {
		    cm.sendOk("发生未知错误，远征队申请未能完成。");
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("CWKPQ", true);
		if (ba == 2) {
		    cm.sendOk("远征队已满，请稍后再试。");
		} else if (ba == 1) {
		    cm.sendOk("你已成功加入远征队。");
		} else {
		    cm.sendOk("你已经在这支远征队中。");
		}
	    } else {// withdraw
		var baa = cm.addMember("CWKPQ", false);
		if (baa == 1) {
		    cm.sendOk("你已退出远征队。");
		} else {
		    cm.sendOk("你不在这支远征队中。");
		}
	    }
	    cm.dispose();
	    break;
	case 10:
	    if (mode == 1) {
		if (selection == 0 || selection == 3) {
		    if (!cm.getSquadList("CWKPQ", selection)) {
			cm.sendOk("发生未知错误，远征队申请未能完成。");
		    }
		    cm.dispose();
		} else if (selection == 1) {
		    status = 11;
		    if (!cm.getSquadList("CWKPQ", 1)) {
			cm.sendOk("发生未知错误，远征队申请未能完成。");
			cm.dispose();
		    }
		} else if (selection == 2) {
		    status = 12;
		    if (!cm.getSquadList("CWKPQ", 2)) {
			cm.sendOk("发生未知错误，远征队申请未能完成。");
			cm.dispose();
		    }
		} else if (selection == 4) { // get insode
		    if (cm.getSquad("CWKPQ") != null) {
			if (cm.haveItem(4032012, 1)) {
			    cm.gainItem(4032012, -1);
			    var dd = cm.getEventManager("CWKPQ");
			    dd.startInstance(cm.getSquad("CWKPQ"), cm.getMap());
			} else {
		 	    cm.sendOk("Where is my Crimson Heart?");
			}
		    } else {
			cm.sendOk("发生未知错误，远征队申请未能完成。");
		    }
		    cm.dispose();
		}
	    } else {
		cm.dispose();
	    }
	    break;
	case 11:
	    cm.banMember("CWKPQ", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("CWKPQ", selection);
	    }
	    cm.dispose();
	    break;
	default:
	    cm.dispose();
	    break;
    }
}