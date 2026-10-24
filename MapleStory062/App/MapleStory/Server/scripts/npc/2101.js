/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
					   Matthias Butz <matze@odinms.de>
					   Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

importPackage(net.sf.odinms.scripting.npc);

/* Regular Cab
	Warp NPC
	- Henesys edition (100000000)
*/

var status = 0;
var maps = Array(104000000, 102000000, 101000000, 103000000);
var mapsname = Array("明珠港口", "勇士部落", "魔法森林", "废气城市");
var cost = Array(800, 1200, 1200, 1000);
var costBeginner = Array(80, 100, 100, 100);
var selectedMap = -1;
var job;

importPackage(net.sf.odinms.client);

function islandOriginalStart() {
	status = -1;
	action(1, 0, 0);
}

function islandOriginalAction(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("想好了再出去吧.");
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		}
		else {
			status--;
		}
		if (status == 0) {
			cm.sendNext("对#b冒险岛#k的操作有所了解了吧？告诉你一个秘密,只要在聊天窗输入#r#e@wnnpc#n#k,就可以使用几乎所有的功能..");
		} else if (status == 1) {
			cm.sendNextPrev("我还会送你一只#r宠物#k,它可以帮你捡取怪物掉落的物品,还可以帮你加加血,双击背包现金栏里的宠物就能召唤它,这点请务必牢记！！！")
		} else if (status == 2) {
			cm.sendYesNo("最后，送你的一点小礼物： \r\n #b#v1302067##k    #b#v1002518##k    #b#v1050127##k    #b#v1072275##k  #b#v1122007##k\r\n#b#v5000006##k    #b#v5170000##k    #b#v2120000##k    #b#v5220000##k    #b#v5072000##k    #b#v2022240##k    #b#v2022015##k\r\n#b#e 10000经验 \r\n#e 100000冒险币#n");
		} else if (status == 3) {
			                cm.warp(40000,0);
			                cm.resetStats();
					cm.gainItem(1302067, 1);
					cm.gainItem(1002518, 1);
					cm.gainItem(1050127, 1);
					cm.gainItem(1072275, 1);
					cm.gainItem(1122007, 1);
                                        PetGiver.gainPet(cm.getC(), 5000006, "雪犬", 1, 0, 100);
					cm.gainItem(5170000, 1);
					cm.gainItem(2120000, 400);
                                        cm.gainItem(5220000, 10);
					cm.gainItem(5072000, 1);
					cm.gainItem(2022240, 10);
					cm.gainItem(2022015, 100);
                                        cm.gainItem(4120000, 10);
                                        cm.gainItem(1812000, 1);
                                        cm.gainItem(1812001, 1);
                                        cm.gainItem(1812002, 1);
                                        cm.gainItem(1812003, 1);
                                        cm.gainItem(1812004, 1);
                                        cm.gainItem(1812005, 1);
                                        cm.gainItem(1812006, 1);
                                        cm.gainItem(1002186, 1);
                                        cm.gainItem(1042138, 1);
                                        cm.gainItem(1062015, 1);
                                        cm.gainItem(1072234, 1);
                                        cm.gainItem(1082102, 1);
                                        cm.gainItem(1102039, 1);
                                        cm.gainExp(10000);
                                        cm.gainMeso(100000);
                                        cm.serverNotice("『新人公告』：哇.新星  "+ cm.getChar().getName() +" 降临到我们这个大家庭,大家以后多多关照他/她吧！");
			cm.dispose();
		}
	}
}	

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
