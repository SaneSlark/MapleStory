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

function islandOriginalStart() {
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
			var p = cm.getPlayer();
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
			var p = cm.getPlayer();
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

function islandOriginalAction(mode, type, selection) {
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


/* MAPLE-ISLAND-QUESTS 2026-10-13 */
var islandDefinitions=[{"id": 1000, "name": "\u501f\u6765\u838e\u4e3d\u7684\u955c\u5b50", "startNpc": 2101, "endNpc": 2100, "quiz": [], "startText": "\u662f\u4f4d\u65b0\u7684\u65c5\u884c\u8005\u5427\uff1f\u8fd8\u5f88\u964c\u751f\u5427\uff1f\u6211\u4f1a\u544a\u8bc9\u4f60\u4e00\u4e9b\uff0c\u597d\u597d\u542c\u7740\uff0c\u8ddf\u6211\u4e00\u8d77\u505a\u3002\u9996\u5148\uff0c\u5982\u679c\u60f3\u8ddf\u6211\u4eec\u8bf4\u8bdd\u7684\u8bdd\u8bf7\u7528\u9f20\u6807#b\u53cc\u51fb#k\u6211\u4eec\u3002\u6309\u4e0b#b\u5de6\u3001\u53f3\u65b9\u5411\u952e#k\u53ef\u4ee5\u79fb\u52a8\uff0c\u6309\u4e0b#bAlt\u952e#k\u5c31\u53ef\u4ee5\u8df3\u8dc3\u3002", "endText": "\u501f\u6765\u838e\u4e3d\u7684\u955c\u5b50\uff1a\u8bf7\u5148\u5b8c\u6210\u4efb\u52a1\u8981\u6c42\uff0c\u518d\u6765\u4ea4\u4ed8\u3002"}, {"id": 1001, "name": "\u7ed9\u5e0c\u5a1c\u5f04\u6765\u955c\u5b50", "startNpc": 2100, "endNpc": 2101, "quiz": [], "startText": "\u8fd9\u4ec0\u4e48\u65f6\u5019\u624d\u80fd\u6652\u5b8c\u554a\u2026\u5509\u5440\u2026\u554a\uff1f\u4f60\u662f\u8bf4\u6211\u7684\u955c\u5b50\uff1f \u662f\u4e0d\u662f#p2101#\u6258\u4f60\u6765\u7684...\uff1f", "endText": "\u554a\uff01#p2100#\u4f60\u5e26\u59d0\u59d0\u7684\u955c\u5b50\u6765\u4e86\uff01\u975e\u5e38\u611f\u8c22\u3002\u770b\u770b\u2026\u76ae\u80a4\u6709\u6ca1\u6709\u88ab\u6652\u9ed1\u5427\u2026\uff1f \u54e6\u5475~"}, {"id": 1031, "name": "\u5e0c\u5a1c\u548c\u745f\u62c9", "startNpc": 2101, "endNpc": 2100, "quiz": [], "startText": "\u4f60\u597d\u5440\uff01\u4f60\u4e00\u5b9a\u662f\u65b0\u6765\u7684\u5427\uff01\u90a3\u4e48\u4f60\u7684\u540d\u5b57\u662f\u2026\u2026#h0#\uff1f\u5f88\u9ad8\u5174\u8ba4\u8bc6\u4f60\uff01\u6211\u60f3\u4f60\u5bf9\u6765\u5230\u5192\u9669\u5c9b\u7684\u4e16\u754c\u8fd8\u6709\u70b9\u4e0d\u4e60\u60ef\u5427\u3002\u4e0d\u8fc7\u4f60\u4ec0\u4e48\u90fd\u4e0d\u7528\u62c5\u5fc3\uff01\u8fd9\u4e2a\u4e16\u754c\u4f1a\u5f20\u5f00\u53cc\u81c2\u6b22\u8fce\u4f60\u7684\u3002", "endText": "\u2026\u2026\u54e6\uff0c\u4f60\u597d\u5440\uff01\u4f60\u4e00\u5b9a\u662f\u65b0\u6765\u7684\u65c5\u884c\u8005\u5427\uff01\u521a\u548c\u5e0c\u5a1c\u804a\u8fc7\u5417\uff1f\u89c1\u5230\u4f60\u771f\u9ad8\u5174\uff01"}];
var islandHasLegacy=true;

var islandHelper = Packages.net.sf.odinms.scripting.npc.MapleIslandQuests;
var islandStage = -1, islandSelected = null, islandChoices = [], islandEnding = false, islandQuiz = -1, islandLegacy = false;
function islandStatus(id) { return islandManager.getQuestStatus(id).getId(); }
function islandFinish() {
    if (!islandHelper.complete(islandManager.getC(), islandSelected.id, islandManager.getNpc())) {
        islandManager.sendOk("请确认任务要求已完成，并留出奖励所需的背包空位。");
    }
    islandManager.dispose();
}
function islandAccept() {
    if (!islandHelper.start(islandManager.getC(),islandSelected.id,islandManager.getNpc())) {
        islandManager.sendOk("暂时无法接取，请确认任务条件和背包空位。");islandManager.dispose();return;
    }
    if (islandSelected.id == 1021) {
        if (!islandManager.haveItem(2010007)) islandManager.gainItem(2010007,1);
        var p=islandManager.getPlayer();
        if (p.getHp()>25) {p.setHp(25);p.updateSingleStat(Packages.net.sf.odinms.client.MapleStat.HP,25);}
        islandManager.sendOk("请打开背包，吃掉罗杰的苹果，并等生命值完全恢复后再来找我。");
    }
    islandManager.dispose();
}
function islandDialogue(mode,type,selection) {
    if (mode != 1) {islandManager.dispose();return;}
    if (islandEnding && islandStatus(islandSelected.id) == 2) {islandManager.dispose();return;}
    if (islandQuiz>=0) {
        if (selection != islandSelected.quiz[islandQuiz].answer) {
            islandManager.sendOk("再想一想，准备好后再来回答吧。");islandManager.dispose();return;
        }
        islandQuiz++;
        if(islandQuiz<islandSelected.quiz.length) islandManager.sendSimple(islandSelected.quiz[islandQuiz].text);
        else islandFinish();
        return;
    }
    islandStage++;
    if(islandStage==0) {
        if(islandEnding && islandSelected.quiz.length>0) {islandQuiz=0;islandManager.sendSimple(islandSelected.quiz[0].text);}
        else islandManager.sendYesNo(islandEnding?islandSelected.endText:islandSelected.startText);
    } else if(islandEnding) islandFinish(); else islandAccept();
}

var islandManager=null;
function islandExtraQuest(id) { return (","+"1000,1001,1003,1004,1005,1006,1007,1016,1017,1018,1019,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1035"+",").indexOf(","+id+",") >= 0; }
function start() {
    islandManager=cm;
    var opts="请选择要办理的任务：",npc=cm.getNpc();islandChoices=[];
    for(var i=0;i<islandDefinitions.length;i++) {
        var d=islandDefinitions[i],state=islandStatus(d.id);
        if(d.startNpc==npc && state==0 && !islandExtraQuest(d.id) && islandHelper.canStart(cm.getC(),d.id,npc)) {
            opts+="\r\n#L"+islandChoices.length+"#[接受] "+d.name+"#l";islandChoices.push({quest:d,end:false});
        } else if(d.endNpc==npc && state==1) {
            opts+="\r\n#L"+islandChoices.length+"#[交付/查看] "+d.name+"#l";islandChoices.push({quest:d,end:true});
        }
    }
    if(islandChoices.length==0 && islandHasLegacy) {islandLegacy=true;islandOriginalStart();return;}
    if(islandHasLegacy) opts+="\r\n#L99999#其他服务或对话#l";
    if(islandChoices.length==0 && !islandHasLegacy) {cm.sendOk("目前没有可以办理的任务。请确认任务前置条件，或继续在彩虹岛探索。");cm.dispose();return;}
    cm.sendSimple(opts);
}
function action(mode,type,selection) {
    if(islandLegacy) {islandOriginalAction(mode,type,selection);return;}
    if(mode!=1){cm.dispose();return;}
    if(islandSelected==null) {
        if(selection==99999 && islandHasLegacy) {islandLegacy=true;islandOriginalStart();return;}
        if(selection<0 || selection>=islandChoices.length){cm.dispose();return;}
        islandSelected=islandChoices[selection].quest;islandEnding=islandChoices[selection].end;
    }
    islandDialogue(mode,type,selection);
}
