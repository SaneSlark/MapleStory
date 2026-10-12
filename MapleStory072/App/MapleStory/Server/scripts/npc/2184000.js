var status = -5;
var select;

function start() {
    if (cm.getPlayer().getMapId() == 262030300) {
        cm.sendYesNo("你想离开这里吗？");
        status = 1;
        return;
    }
    var type = cm.isSquadLeader("Hilla");
    if (type == -1) {
        cm.sendOk("远征队已结束，请重新报名。");
        cm.dispose();
    } else if (type == 0) {
        var memberType = cm.isSquadMember("Hilla");
        if (memberType == 2) {
            cm.sendOk("你已被禁止加入这支远征队。");
            cm.dispose();
        } else if (memberType == 1) {
            status = 5;
            cm.sendSimple("What would you like to do? \r\n#b#L0#Join the squad#l \r\n#b#L1#Leave the squad#l \r\n#b#L2#See the list of members on the squad#l");
        } else if (memberType == -1) {
            cm.sendOk("远征队已结束，请重新报名。");
            cm.dispose();
        } else {
            status = 5;
            cm.sendSimple("What would you like to do? \r\n#b#L0#Join the squad#l \r\n#b#L1#Leave the squad#l \r\n#b#L2#See the list of members on the squad#l");
        }
    } else {
        if (cm.getSquad("Hilla") != null) {
            cm.sendSimple("#e<Hilla Expedition>#n\r\nAre you ready to defeat Hilla and liberate Azwan? Make sure everyone in your expedition is here!\r\n#L0#Request to join the Hilla Expedition#l");
            status = -4;
        } else {
            cm.dispose();
        }
    }
}

function action(mode, type, selection) {
    switch (status) {
        case -4:
            if (mode != 1) {
                cm.dispose();
                return;
            }
            cm.sendSimple("#e<Hilla Expedition>#n\r\nChoose a mode.\r\n\r\n#L0#Normal Mode (Level 120 and above)#l\r\n#L1#Hard Mode (Level 170 and above)#l");
            status = -3;
            break;
        case -3:
            if (mode != 1) {
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getLevel() < 120) {
                cm.sendOk("There is a level requirement of 120 to attempt Hilla.");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getClient().getChannel() != 1 && cm.getPlayer().getClient().getChannel() != 2) {
                cm.sendOk("Hilla may only be attempted on channel 1 and 2.");
                cm.dispose();
                return;
            }
            //cm.registerExpedition("Hilla", 20, cm.getPlayer().getName() + " joined the expedition. Entering Hilla's Tower.")
            if (cm.registerSquad("Hilla", 5, " joined the expedition. Entering Hilla's Tower.")) {
                cm.sendOk("Please make all of your party members join the squad.");
                cm.dispose();
                return;
            } else {
                cm.sendOk("创建远征队时发生错误。");
                cm.dispose();
                return;
            }
            if (cm.getSquad("Hilla") != null) {
                var dd = cm.getEventManager("HillaBattle");
                dd.startInstance(cm.getSquad("Hilla"), cm.getMap(), 160110);
            } else {
                cm.sendOk("发生未知错误，远征队申请未能完成。");
            }
            cm.dispose();
            break;
        case -2:
            if (mode == 1) {
                cm.warp(262010000, 0);
            }
            cm.dispose();
            break;
        case -1:
            var em = cm.getEventManager("HillaBattle");

            if (em == null) {
                cm.sendOk("Hilla is currently not available.");
                cm.dispose();
                return;
            }
            var eim_status = em.getProperty("state");
            var marr = cm.getQuestRecord(160110);
            var data = marr.getCustomData();
            if (data == null) {
                marr.setCustomData("0");
                data = "0";
            }
            var time = parseInt(data);
            if (eim_status == null || eim_status.equals("0")) {
                var squadAvailability = cm.getSquadAvailability("Hilla");
                if (squadAvailability == -1) {
                    status = 0;
                    if (time + (1 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                        cm.sendOk("You have already went to Hilla in the past 1 hour(s). Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (24 * 3600000)));
                        cm.dispose();
                        return;
                    }
                    cm.sendYesNo("你愿意担任远征队队长吗？");

                } else if (squadAvailability == 1) {
                    if (time + (1 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                        cm.sendOk("You have already went to Hilla in the past 1 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (24 * 3600000)));
                        cm.dispose();
                        return;
                    }
                    // -1 = Cancelled, 0 = not, 1 = true
                    var type = cm.isSquadLeader("Hilla");
                    if (type == -1) {
                        cm.sendOk("远征队已结束，请重新报名。");
                        cm.dispose();
                    } else if (type == 0) {
                        var memberType = cm.isSquadMember("Hilla");
                        if (memberType == 2) {
                            cm.sendOk("你已被禁止加入这支远征队。");
                            cm.dispose();
                        } else if (memberType == 1) {
                            status = 5;
                            cm.sendSimple("What would you like to do? \r\n#b#L0#Join the squad#l \r\n#b#L1#Leave the squad#l \r\n#b#L2#See the list of members on the squad#l");
                        } else if (memberType == -1) {
                            cm.sendOk("远征队已结束，请重新报名。");
                            cm.dispose();
                        } else {
                            status = 5;
                            cm.sendSimple("What would you like to do? \r\n#b#L0#Join the squad#l \r\n#b#L1#Leave the squad#l \r\n#b#L2#See the list of members on the squad#l");
                        }
                    } else { // Is leader
                        status = 10;
                        cm.sendSimple("队长，请选择：\r\n#b#L0#查看远征队成员#l\r\n#b#L1#移除队员#l\r\n#b#L2#解除禁止加入限制#l\r\n#r#L3#选择远征队并进入#l");
                    // TODO viewing!
                    }
                } else {
                    var eim = cm.getDisconnected("HillaBattle");
                    if (eim == null) {
                        var squd = cm.getSquad("Hilla");
                        if (squd != null) {
                            if (time + (1 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                                cm.sendOk("You have already went to Hilla in the past 1 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (24 * 3600000)));
                                cm.dispose();
                                return;
                            }
                            cm.sendYesNo("远征队与首领的战斗已经开始。\r\n" + squd.getNextPlayer());
                            status = 3;
                        } else {
                            cm.sendOk("远征队与首领的战斗已经开始。");
                            cm.safeDispose();
                        }
                    } else {
                        cm.sendYesNo("你回来了。是否重新加入远征队继续战斗？");
                        status = 2;
                    }
                }
            } else {
                var eim = cm.getDisconnected("HillaBattle");
                if (eim == null) {
                    var squd = cm.getSquad("Hilla");
                    if (squd != null) {
                        if (time + (1 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                            cm.sendOk("You have already went to Hilla in the past 1 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (24 * 3600000)));
                            cm.dispose();
                            return;
                        }
                        cm.sendYesNo("远征队与首领的战斗已经开始。\r\n" + squd.getNextPlayer());
                        status = 3;
                    } else {
                        cm.sendOk("远征队与首领的战斗已经开始。");
                        cm.safeDispose();
                    }
                } else {
                    cm.sendYesNo("你回来了。是否重新加入远征队继续战斗？");
                    status = 2;
                }
            }
            break;
        case 0:
            if (mode == 1) {
                if (cm.registerSquad("Hilla", 5, "已成为远征队队长，请在规定时间内报名加入远征队。")) {
                    cm.sendOk("你已成为远征队队长，接下来5分钟内可以招募队员。");
                } else {
                    cm.sendOk("创建远征队时发生错误。");
                }
            }
            cm.dispose();
            break;
        case 1:
            if (mode == 1) {
                cm.warp(262010000, 0);
            }
            cm.dispose();
            break;
        case 2:
            if (!cm.reAdd("HillaBattle", "Hilla")) {
                cm.sendOk("发生错误，请重试。");
            }
            cm.safeDispose();
            break;
        case 3:
            if (mode == 1) {
                var squd = cm.getSquad("Hilla");
                if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                    squd.setNextPlayer(cm.getPlayer().getName());
                    cm.sendOk("已为你保留位置。");
                }
            }
            cm.dispose();
            break;
        case 5:
            if (selection == 0) { // join
                var ba = cm.addMember("Hilla", true);
                if (ba == 2) {
                    cm.sendOk("远征队已满，请稍后再试。");
                } else if (ba == 1) {
                    cm.sendOk("你已成功加入远征队。");
                } else {
                    cm.sendOk("你已经在这支远征队中。");
                }
            } else if (selection == 1) {// withdraw
                var baa = cm.addMember("Hilla", false);
                if (baa == 1) {
                    cm.sendOk("你已退出远征队。");
                } else {
                    cm.sendOk("你不在这支远征队中。");
                }
            } else if (selection == 2) {
                if (!cm.getSquadList("Hilla", 0)) {
                    cm.sendOk("发生未知错误，远征队申请未能完成。");
                }
            }
            cm.dispose();
            break;
        case 10:
            if (mode == 1) {
                if (selection == 0) {
                    if (!cm.getSquadList("Hilla", 0)) {
                        cm.sendOk("发生未知错误，远征队申请未能完成。");
                    }
                    cm.dispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("Hilla", 1)) {
                        cm.sendOk("发生未知错误，远征队申请未能完成。");
                        cm.dispose();
                    }
                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("Hilla", 2)) {
                        cm.sendOk("发生未知错误，远征队申请未能完成。");
                        cm.dispose();
                    }
                } else if (selection == 3) { // get insode
                    if (cm.getSquad("Hilla") != null) {
                        var dd = cm.getEventManager("HillaBattle");
                        dd.startInstance(cm.getSquad("Hilla"), cm.getMap(), 160110);
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
            cm.banMember("Hilla", selection);
            cm.dispose();
            break;
        case 12:
            if (selection != -1) {
                cm.acceptMember("Hilla", selection);
            }
            cm.dispose();
            break;
    }
}