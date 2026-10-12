/*
-- odinms JavaScript --
        NPC脚本 
-------------------------
   odinms MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/
importPackage(net.sf.odinms.client);

var status = 0;
var yes = 0;

function start() {
    qfresh = true;
	status = -1;
	action(1, 0, 0);
}

function qOrigAction(mode, type, selection) {
	if (cm.getChar().getMapId() == 0 ) {
		if (mode == -1) {
			cm.dispose();
		} else {
		if (status == -1 && mode == 0) {
			cm.sendNext("请想清楚了再来告诉我你的决定.");
                        cm.gainNX(500000);
			cm.dispose();
			return;
		} else if (status >= 0 && mode == 0) {
			yes = 1;
			cm.sendYesNo("你真的想不经过训练直接开始您的旅程吗？");
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (!cm.getJob().equals(MapleJob.BEGINNER)) {
				status = 3;
				cm.sendNext("找我有什么事吗？你不应该来这里！");
			} else {
				if (yes == 1) {
					status = 2;
					cm.sendNext("你好象没有进入训练营就直接想离开，好吧，祝你好运，我现在就送你离开训练营。");
				} else {
					cm.sendYesNo("欢迎您来到#b冒险岛#k,\r\n我会把你送到训练营，以帮助新手。\r\n你想进入这个训练营吗？听说还可以领到#r神秘礼品#k。");
				}
			}
		} else if (status == 1) {
				cm.sendNext("好的，我现在带你进入训练营!");
		} else if (status == 2) {
			var statup = new java.util.ArrayList();
			var p = cm.c.getPlayer();
			var totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();		
			p.setStr(4);
			p.setDex(4);
			p.setInt(4);
			p.setLuk(4);
			p.setRemainingAp (totAp - 16);
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
			p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
			cm.warp(1, 0);
			cm.dispose();
		} else if (status == 3) {
			var statup = new java.util.ArrayList();
			var p = cm.c.getPlayer();
			var totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();		
			p.setStr(4);
			p.setDex(4);
			p.setInt(4);
			p.setLuk(4);
			p.setRemainingAp (totAp - 16);
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
			p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
			cm.warp(40000, 0);
			cm.dispose();
		} else if (status == 4) {
			cm.warp(100000000, 0);
			cm.dispose();
			}
		}
	} else {
		if (mode == -1) {
			cm.dispose();
		} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("在这里，你可以很快的#r熟悉操作#k,相信不久的将来，你也会成为高手...");
		} else if (status == 1) {
			cm.sendPrev("只要刻苦训练，你将会表现的非常出色,\r\n10级以后就可以根据自己的喜好选择职业,\r\n你可以选择 #r战士、魔法师、弓箭手、飞侠、海盗#k\r\n\r\n让我们开始旅途吧！");
		} else if (status == 2) {
			cm.dispose();
			}
		}
	}
}

function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
    qOrigAction(mode, type, selection);
}

/* AUTO-QUEST-BEGIN */
var qstatus = -1;
var qact = -1;
var qid = -1;
var qactive = false;
var qfresh = false;
function qQuestAction(mode, type, selection) {
    if (!qactive) {
        if (!qfresh || mode != 1) return false;
        qfresh = false;
    var opts = '';
    var n = 0;
    if (cm.getQuestStatus(4575) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "新手的特别礼物" + "#l"; n++; }
    if (n == 0) return false;
    qact = -1;
    cm.sendSimple("有什么我能帮你的吗?\r\n" + opts);
    qactive = true;
    return true;
    }
    if (mode != 1) { cm.dispose(); return true; }
    qstatus++;
    if (qstatus == 0) {
        var qt = "";
        var qi = -1;
        qact = -1;
        qid = -1;
        if (cm.getQuestStatus(4575) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4575; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 4575) qt = "你即将开始在枫险世界里进行一连串的冒险旅程. 旅途中将会有特别的惊喜. 希望你能尽情的在枫险世界里闯出名堂, 等你等级10后我们再见了~~";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 4575) cm.completeQuest(4575);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
