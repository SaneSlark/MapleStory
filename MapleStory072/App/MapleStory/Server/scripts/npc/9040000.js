/* 
 * Shuang, Victoria Road: Excavation Site<Camp> (101030104)
 * Start of Guild Quest
 */

var status;
var GQItems = Array(1032033, 4001024, 4001025, 4001026, 4001027, 4001028, 4001031, 4001032, 4001033, 4001034, 4001035, 4001037);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	if (cm.getPlayer().hasEquipped(1032033)) {
		cm.sendOk("请卸下你的保护石。");
		cm.dispose();
	} else {
		cm.sendSimple("这里是通往圣瑞尼亚遗址的出发地点，你想做什么？#b\r\n#L0#开始家族公会对抗战#l\r\n#L1#加入家族公会对抗战#l");
	}
	
    } else if (status == 1) {
	if (selection == 0) { //Start
	    if (cm.getPlayerStat("GID") == 0 || cm.getPlayerStat("GRANK") >= 3) { //no guild or not guild master/jr. master
		cm.sendNext("只有族长或副族长才能开启副本。");
		cm.dispose();
	    } else {
		var em = cm.getEventManager("GuildQuest");
		if (em == null) {
		    cm.sendOk("此项挑战暂未开放。");
		} else {
		    var prop = em.getProperty("started");

		    if ((prop.equals("false") || prop == null) && em.getInstance("GuildQuest") == null) {
    			for (var i = 0; i < GQItems.length; i++) {
				cm.removeAll(GQItems[i]);
    			}
			em.startInstance(cm.getPlayer(), cm.getPlayer().getName());
			em.setProperty("state", "0");
			cm.guildMessage("你的家族已登记参加对抗战，请前往遗址发掘营地，在频道" + cm.getClient().getChannel() + ".");
		    } else {
			cm.sendOk("已有其他家族正在挑战。")
		    }
		}
		cm.dispose();
	    }
	} else if (selection == 1) { //entering existing GQ
	    if (cm.getPlayerStat("GID") == 0) { //no guild or not guild master/jr. master
		cm.sendNext("你必须先加入一个家族。");
		cm.dispose();
	    } else {
		var em = cm.getEventManager("GuildQuest");
		if (em == null) {
		    cm.sendOk("此项挑战暂未开放。");
		} else {
		    var eim = em.getInstance("GuildQuest");

		    if (eim == null) {
			cm.sendOk("你的家族尚未登记参加副本。");
		    } else {
			if (em.getProperty("guildid") != null && !em.getProperty("guildid").equalsIgnoreCase("" + cm.getPlayerStat("GID"))) {
			if (cm.getPlayer().isGM()) {
			    cm.sendOk("这个副本不属于你的家族。副本家族："  + em.getProperty("guildid") + "，你的家族：" + cm.getPlayerStat("GID"));
			} else {
			    cm.sendOk("这个副本不属于你的家族。");
			}
			} else if (em.getProperty("started").equals("false")) {
    			for (var i = 0; i < GQItems.length; i++) {
				cm.removeAll(GQItems[i]);
    			}
			    eim.registerPlayer(cm.getPlayer());
			} else {
			    cm.sendOk("家族已经继续前进，请稍后再试。");
			}
		    }
		}
		cm.dispose();
	    }
	}
    }
}