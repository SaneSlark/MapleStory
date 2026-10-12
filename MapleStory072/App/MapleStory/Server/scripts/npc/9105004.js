var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
		return;
	}
	status--;
    }
    switch(cm.getPlayer().getMapId()) {
	case 889100100: //event map
    	if (status == 0) {
	        cm.sendSimple("你好，我是雪精灵。#b\r\n\r\n#L0#保护雪人——简单（等级10）#l\r\n#L1#保护雪人——普通（等级30）#l\r\n#L2#保护雪人——困难（等级70）#l");
    	} else if (status == 1) {
	        if (selection == 0) {
		    cm.warp(889100000,0); //exit map lobby
		    cm.dispose();
			} else if (selection == 1) {
			cm.warp(889100010,0); //exit map lobby
		    cm.dispose();
			} else if (selection == 2) {
			cm.warp(889100020,0); //exit map lobby
		    cm.dispose();
			}
		}
	    break;
	case 889100000:
	case 889100010:
	case 889100020:
    	    if (status == 0) {
	        cm.sendSimple("你好，我是雪精灵！#b\r\n\r\n#L0#参加保护雪人#l");
    	    } else if (status == 1) {
			var s = ((cm.getMapId() % 100) / 10) | 0;
   		    var em = cm.getEventManager("Christmas");
    		    if (em == null) {
			cm.sendOk("请稍后再试。");
			cm.dispose();
			return;
    		    }
		    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
			cm.sendOk("队长必须在这里。");
		    } else {
			var party = cm.getPlayer().getParty().getMembers();
			var mapId = cm.getPlayer().getMapId();
			var next = true;
			var size = 0;
			var it = party.iterator();
			while (it.hasNext()) {
				var cPlayer = it.next();
				var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
				if (ccPlayer == null || ccPlayer.getLevel() < (s == 0 ? 10 : (s == 1 ? 30 : 70))) {
					next = false;
					break;
				}
				size++;
			}	
			if (next && size >= 2) {
		    		if (em.getInstance("Christmas" + s) == null) {
					em.startInstance_Party("" + s, cm.getPlayer());
		    		} else {
					cm.sendOk("本频道已有其他队伍进入组队任务。");
		    		}
			} else {
				cm.sendOk("所有队员都必须来到这里。");
			}
		    }
	        cm.dispose();
            }
	    break;
	case 889100001:
	case 889100011:
	case 889100021:
		if (cm.getPlayer().getEventInstance() == null || !cm.isLeader()) {
			cm.sendOk("请让你们的队长来和我对话。");
		} else {
			if (!cm.getPlayer().getEventInstance().getProperty("stage").equals("1")) {
				cm.sendOk("请保护雪人，直到时间结束！");
			} else if (cm.getPlayer().getMap().countMonsterById(9400319) > 0 || cm.getPlayer().getMap().countMonsterById(9400320) > 0 || cm.getPlayer().getMap().countMonsterById(9400321) > 0) {
				cm.sendOk("请击败克罗斯！");
			} else {
				var s = ((cm.getMapId() % 100) / 10) | 0;
				cm.givePartyExp((s == 0 ? 2500 : (s == 1 ? 7500 : 20000)));
				cm.givePartyNX((s == 0 ? 250 : (s == 1 ? 500 : 750)));
				cm.warpParty(cm.getMapId() + 1);
			}
		}
		cm.dispose();
		break;
    }
}