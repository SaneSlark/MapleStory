/*
	NPC Name: 		Insiginificant Being
	Map(s): 		Dungeon : Another Entrance
	Description: 		Takes you to another Dimension
*/

function start() {
    if (cm.getQuestStatus(6108) == 1) {
	var ret = checkJob();
	if (ret == -1) {
	    cm.sendOk("请先组成队伍，再来和我对话。");
	} else if (ret == 0) {
	    cm.sendOk("请确认队伍人数为2人。");
	} else if (ret == 1) {
	    cm.sendOk("有队员的职业不符合进入异界的要求。");
	} else if (ret == 2) {
	    cm.sendOk("有队员的等级不符合进入异界的要求。");
	} else {
	    var em = cm.getEventManager("s4aWorld");
	    if (em == null) {
		cm.sendOk("暂时无法进入，请重试。" );
	    } else if (em.getProperty("started").equals("true")) {
		cm.sendOk("已有其他玩家正在异界挑战小蝙蝠魔。" );
	    } else {
		em.startInstance(cm.getParty(), cm.getMap());
	    }
	}
    }
    cm.dispose();
}

function action(mode, type, selection) {
}

function checkJob() {
    var party = cm.getParty();

    if (party == null) {
	return -1;
    }
    //    if (party.getMembers().size() != 2) {
    //	return 0;
    //    }
    var it = party.getMembers().iterator();

    while (it.hasNext()) {
	var cPlayer = it.next();

	if (cPlayer.getJobId() == 312 || cPlayer.getJobId() == 322 || cPlayer.getJobId() == 900) {
	    if (cPlayer.getLevel() < 120) {
		return 2;
	    }
	} else {
	    return 1;
	}
    }
    return 3;
}