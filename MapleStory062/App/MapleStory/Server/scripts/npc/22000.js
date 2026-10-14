/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Shanks - Maple Road : Southperry (60000)
-- By ---------------------------------------------------------------------------------------------
	Xterminator
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Xterminator
---------------------------------------------------------------------------------------------------
**/

var status = 0;

function islandOriginalStart() {
    qfresh = true;
	status = -1;
	action(1, 0, 0);
}

function qOrigAction(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status >= 0 && mode == 0) {
		cm.sendOk("恩... 我想你还不打算离开这里?");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendYesNo("这是开往明珠港的船. 您只需 #e150 金币#n, 即可前往明珠港#k. 那边将有更大的挑战等着你,准备好了么?");
	} else if (status == 1) {
		if (cm.haveItem(4031801)) {
			cm.sendNext("好了, 您需要 #e150 金币#n... 我想你现在还没那么多钱,打蜗牛可以赚很多钱的,等你有 #e150 金币#n,再来找我也不迟.");
		} else {
			cm.sendNext("你确定要离开么?那么先给我 #e150 金币...");
		}
	} else if (status == 2) {
		if (cm.haveItem(4031801)) {
			cm.sendNextPrev("既然你有简的推荐信,我将免费送你到明珠港,我相信你会成为真正的冒险家,再会!!");
		} else {
			if (cm.getLevel() >= 7) {
				if (cm.getMeso() < 150) {
					cm.sendOk("我想你现在还没那么多钱,等你有 #e150 金币#n,再来找我也不迟.");
					cm.dispose();
				} else {
					cm.sendNext("再见,我会想你的.");
				}
			} else {
				cm.sendOk("我想象... 你现在还需要多锻炼锻炼. 等你到7级以后就可以前往明珠港.");
				cm.dispose();
			}
		}
	} else if (status == 3) {
		if (cm.haveItem(4031801)) {
			cm.gainItem(4031801, -1);
			cm.warp(104000000);
			cm.dispose();
		} else {
			cm.gainMeso(-150);
			cm.warp(104000000);
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
    if ((cm.getQuestStatus(1028) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() <= 10) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(1027) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1042003, 1))) { opts += "\r\n#L" + n + "#[接受] " + "迈向利斯海港！" + "#l"; n++; }
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
        if ((cm.getQuestStatus(1028) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() <= 10) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(1027) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1042003, 1))) { qi++; if (selection == qi) { qact = 0; qid = 1028; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 1028) qt = "听#p12000#的吩咐，想给#p1002101#传话的话，得去维多利亚岛。想去维多利亚岛的话只有给 #m60000#的#p22000#钱一种方法…… 幸好#p12000#已经提前和#p22000#打过招呼了。没什么可担心的，先去#b#p22000##k那儿吧。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
        } else {
            if (qid == 1028) islandHelper.start(cm.getC(),1028,cm.getNpc());
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */


/* MAPLE-ISLAND-QUESTS 2026-10-13 */
var islandDefinitions=[{"id": 1026, "name": "\u7ed9\u6851\u514b\u65af\u9001\u8425\u517b\u996e\u6599", "startNpc": 2103, "endNpc": 22000, "quiz": [], "startText": "\u662f\u4e0a\u6b21\u90a3\u4f4d\u627e\u5230\u8425\u517b\u996e\u6599\u6750\u6599\u7684\u5192\u9669\u5bb6\u554a\u3002\u5f88\u9ad8\u5174\u89c1\u5230\u4f60\u3002\u5e2e\u6211\u627e\u6750\u6599\u8d39\u4e86\u5f88\u591a\u5fc3\uff0c\u518d\u6c42\u60a8\u5e2e\u5fd9\u53ef\u80fd\u6709\u4e9b\u8fc7\u5206\uff0c\u4f46\u80fd\u9047\u5230\u8c61\u60a8\u8fd9\u4e48\u5584\u826f\u7684\u5192\u9669\u5bb6\u4e5f\u4e0d\u5bb9\u6613\uff0c\u5e0c\u671b\u60a8\u518d\u5e2e\u5fd9\u4e00\u4ef6\u4e8b\u3002\u53ef\u4ee5\u5417\uff1f\t", "endText": "\u6069\uff1f\u4ec0\u4e48\u4e8b\uff1f\u554a\u2026\u2026 \u8fd9\u4e0d\u662f#p2103#\u7279\u6548\u8425\u517b\u996e\u6599\u5417\uff1f\u662f\u53d7#p2103#\u7684\u59d4\u6258\u6765\u7684\u5427\uff1f\u771f\u662f\u611f\u8c22\uff01\u6709\u4e00\u4e2a\u5584\u826f\u7684\u604b\u4eba\u771f\u662f\u5e78\u798f\u54e6\u3002"}, {"id": 1028, "name": "\u8fc8\u5411\u660e\u73e0\u6e2f\uff01", "startNpc": 22000, "endNpc": 1002101, "quiz": [], "startText": "\u8fc8\u5411\u660e\u73e0\u6e2f\uff01\uff1a\u613f\u610f\u63a5\u53d7\u8fd9\u9879\u4efb\u52a1\u5417\uff1f", "endText": "\u5feb\u6765#m104000000#\u5427\u3002\u662f\u7b2c\u4e00\u6b21\u6765\u91d1\u94f6\u5c9b\u5427\uff1f\u4ec0\u4e48\uff1f\u53d7#p12000#\u7684\u59d4\u6258\u800c\u6765\u7684\uff1f"}];
var islandHasLegacy=true;

var islandHelper = Packages.net.sf.odinms.scripting.npc.MapleIslandQuests;
var islandStage = -1, islandSelected = null, islandChoices = [], islandEnding = false, islandQuiz = -1, islandLegacy = false;
function islandStatus(id) { return islandManager.getQuestStatus(id).getId(); }
function islandFinish() {
    if (!islandHelper.complete(islandManager.getC(), islandSelected.id, islandManager.getNpc())) {
        islandManager.sendOk("任务尚未完成，或奖励所需的背包空间不足。请确认任务物品、消灭数量以及背包空位。罗杰的任务还需要吃完苹果并恢复全部HP。");
    } else islandManager.sendOk("任务完成！奖励已发放，请在任务栏查看后续任务。");
    islandManager.dispose();
}
function islandAccept() {
    if (!islandHelper.start(islandManager.getC(),islandSelected.id,islandManager.getNpc())) {
        islandManager.sendOk("暂时不能接受任务，请确认前置任务、等级、职业和背包空间。");islandManager.dispose();return;
    }
    if (islandSelected.id == 1021) {
        if (!islandManager.haveItem(2010007)) islandManager.gainItem(2010007,1);
        var p=islandManager.getPlayer();
        if (p.getHp()>25) {p.setHp(25);p.updateSingleStat(Packages.net.sf.odinms.client.MapleStat.HP,25);}
        islandManager.sendOk("请打开背包，吃掉罗杰的苹果，并等HP完全恢复后再来找我。");
    } else islandManager.sendOk("任务已接受。请按任务栏的要求完成后，再找指定的NPC交付。");
    islandManager.dispose();
}
function islandDialogue(mode,type,selection) {
    if (mode != 1) {islandManager.dispose();return;}
    if (islandEnding && islandStatus(islandSelected.id) == 2) {islandManager.dispose();return;}
    if (islandQuiz>=0) {
        if (selection != islandSelected.quiz[islandQuiz].answer) {
            islandManager.sendOk("答案不正确，请再想一想。重新与我对话即可再次挑战。");islandManager.dispose();return;
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
