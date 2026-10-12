/*
	NPC Name: 		The Forgotten Temple Manager
	Map(s): 		Deep in the Shrine - Forgotten Twilight
	Description: 		Pink Bean battle starter
*/
var status = -1;

function start() {
    if (cm.getPlayer().getLevel() < 120) {
        cm.sendOk("挑战品克缤需要等级120。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 1) {
        cm.sendOk("只能在频道1挑战品克缤。");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("PinkBeanBattle");

    if (em == null) {
        cm.sendOk("活动尚未开启，请联系管理员。");
        cm.dispose();
        return;
    }
    var eim_status = em.getProperty("state");
    var marr = cm.getQuestRecord(160104);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
    var time = parseInt(data);
    if (eim_status == null || eim_status.equals("0")) {

        var squadAvailability = cm.getSquadAvailability("PinkBean");
        if (squadAvailability == -1) {
            status = 0;
            if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                cm.sendOk("你在过去12小时内已挑战过品克缤，剩余时间：" + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
            }
            cm.sendYesNo("你愿意担任远征队队长吗？");

        } else if (squadAvailability == 1) {
            if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                cm.sendOk("你在过去12小时内已挑战过品克缤，剩余时间：" + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
            }
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader("PinkBean");
            if (type == -1) {
                cm.sendOk("远征队已结束，请重新报名。");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember("PinkBean");
                if (memberType == 2) {
                    cm.sendOk("你已被禁止加入这支远征队。");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("请选择：\r\n#b#L0#加入品克缤远征队#l\r\n#b#L1#退出品克缤远征队#l\r\n#b#L2#查看远征队成员#l");
                } else if (memberType == -1) {
                    cm.sendOk("远征队已结束，请重新报名。");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("请选择：\r\n#b#L0#加入品克缤远征队#l\r\n#b#L1#退出品克缤远征队#l\r\n#b#L2#查看远征队成员#l");
                }
            } else { // Is leader
                status = 10;
                cm.sendSimple("队长，请选择：\r\n#b#L0#查看远征队成员#l\r\n#b#L1#移除队员#l\r\n#b#L2#解除禁止加入限制#l\r\n#r#L3#选择远征队并进入#l");
            // TODO viewing!
            }
        } else {
            var eim = cm.getDisconnected("PinkBeanBattle");
            if (eim == null) {
                var squd = cm.getSquad("PinkBean");
                if (squd != null) {
                    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                        cm.sendOk("你在过去12小时内已挑战过品克缤，剩余时间：" + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
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
        var eim = cm.getDisconnected("PinkBeanBattle");
        if (eim == null) {
            var squd = cm.getSquad("PinkBean");
            if (squd != null) {
                if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                    cm.sendOk("你在过去12小时内已挑战过品克缤，剩余时间：" + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
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
}

function action(mode, type, selection) {
    switch (status) {
        case 0:
            if (mode == 1) {
                if (cm.registerSquad("PinkBean", 5, "已成为远征队队长，请在规定时间内报名加入远征队。")) {
                    cm.sendOk("你已成为远征队队长，接下来5分钟内可以招募队员。");
                } else {
                    cm.sendOk("创建远征队时发生错误。");
                }
            }
            cm.dispose();
            break;
        case 2:
            if (!cm.reAdd("PinkBeanBattle", "PinkBean")) {
                cm.sendOk("发生错误，请重试。");
            }
            cm.safeDispose();
            break;
        case 3:
            if (mode == 1) {
                var squd = cm.getSquad("PinkBean");
                if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                    squd.setNextPlayer(cm.getPlayer().getName());
                    cm.sendOk("已为你保留位置。");
                }
            }
            cm.dispose();
            break;
        case 5:
            if (selection == 0) { // join
                var ba = cm.addMember("PinkBean", true);
                if (ba == 2) {
                    cm.sendOk("远征队已满，请稍后再试。");
                } else if (ba == 1) {
                    cm.sendOk("你已成功加入远征队。");
                } else {
                    cm.sendOk("你已经在这支远征队中。");
                }
            } else if (selection == 1) {// withdraw
                var baa = cm.addMember("PinkBean", false);
                if (baa == 1) {
                    cm.sendOk("你已退出远征队。");
                } else {
                    cm.sendOk("你不在这支远征队中。");
                }
            } else if (selection == 2) {
                if (!cm.getSquadList("PinkBean", 0)) {
                    cm.sendOk("发生未知错误，远征队申请未能完成。");
                }
            }
            cm.dispose();
            break;
        case 10:
            if (mode == 1) {
                if (selection == 0) {
                    if (!cm.getSquadList("PinkBean", 0)) {
                        cm.sendOk("发生未知错误，远征队申请未能完成。");
                    }
                    cm.dispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("PinkBean", 1)) {
                        cm.sendOk("发生未知错误，远征队申请未能完成。");
                        cm.dispose();
                    }
                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("PinkBean", 2)) {
                        cm.sendOk("发生未知错误，远征队申请未能完成。");
                        cm.dispose();
                    }
                } else if (selection == 3) { // get insode
                    if (cm.getSquad("PinkBean") != null) {
                        var dd = cm.getEventManager("PinkBeanBattle");
                        dd.startInstance(cm.getSquad("PinkBean"), cm.getMap(), 160104);
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
            cm.banMember("PinkBean", selection);
            cm.dispose();
            break;
        case 12:
            if (selection != -1) {
                cm.acceptMember("PinkBean", selection);
            }
            cm.dispose();
            break;
    }
}