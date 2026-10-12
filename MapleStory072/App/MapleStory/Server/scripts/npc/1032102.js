/*
	Made by RMZero213 of RaGEZONE forums.
	Just keep this header here and don't claim that you made it.
*/

/*
	1032102.js
	Mar the Fairy
	Dragon Evolver
*/

importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);
importPackage(net.sf.odinms.scripting.npc);

var status = 0;

function start() {
    qfresh = true;
	status = -1;
	action(1, 0, 0);
}

function qOrigAction(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendOk("你有这个时间么??.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendYesNo("我是专业的宠物进化员。如果你有一个龙在15或更高的水平。我可以进化你的龙。如果你足够幸运的话，你甚至会得到一个黑色的一个！你想我这样做?");
		} else if (status == 1) {
			if (cm.haveItem(5000028, 1)) {
				cm.gainItem(5000028, -1);
				cm.gainItem(5000029, 1);
				cm.sendOk("我不知道你是怎么得到那颗蛋的，不过它显然已经孵化了!");
				cm.dispose();
			} else if (cm.getChar().getPet(0) == null) {
				cm.sendOk("请确认你的宠物已经召唤出来了。");
				cm.dispose();
			} else if (PetGiver.getSummonedPetItemId(cm.getC()) < 5000029 || PetGiver.getSummonedPetItemId(cm.getC()) > 5000033 || !cm.haveItem(5380000,1)) {
				cm.sendOk("你还不满足条件。你需要 #i5380000##t5380000#，同时还要装备 #d#i5000029##t5000029##k, #g#i5000030##t5000030##k, #r#i5000031##t5000031##k, #b#i5000032##t5000032##k, 或 #e#i5000033##t5000033##n 中的一只。满足条件后再来找我吧。");
				cm.dispose();
			} else if (cm.getChar().getPet(0).getLevel() < 15) {
				cm.sendOk("你的宠物必须达到 15 级以上才能进化。");
				cm.dispose();
			} else if (cm.haveItem(5000029,2) || cm.haveItem(5000030,2) || cm.haveItem(5000031,2) || cm.haveItem(5000032,2) || cm.haveItem(5000033,2)) {
				cm.sendSimple("你有一只没有召唤出来的龙，还有一只已经召唤出来的龙。我可以帮你移除其中一只。记住，被移除的龙的数据将会丢失。\r\n#r#L0#移除我点券栏的第一格。#l#k\r\n#b#L1#移除我背包里的第一只龙。#l#k\r\n#g#L2#不用了，谢谢。#l#k");
			} else {
				var id = PetGiver.getSummonedPetItemId(cm.getC());
				var name = cm.getChar().getPet(0).getName();
				var level = cm.getChar().getPet(0).getLevel();
				var closeness = cm.getChar().getPet(0).getCloseness();
				var fullness = cm.getChar().getPet(0).getFullness();
				if (id < 5000029 || id > 5000033) {
					cm.sendOk("出了点问题，再试一次吧。");
					cm.dispose();
				}
				var rand = 1 + Math.floor(Math.random() * 10);
				var after = 0;
				if (rand >= 1 && rand <= 3) {
					after = 5000030;
				} else if (rand >= 4 && rand <= 6) {
					after = 5000031;
				} else if (rand >= 7 && rand <= 9) {
					after = 5000032;
				} else if (rand == 10) {
					after = 5000033;
				} else {
					cm.sendOk("出了点问题，再试一次吧。");
					cm.dispose();
				}
				if (name.equals(MapleItemInformationProvider.getInstance().getName(id))) {
					name = MapleItemInformationProvider.getInstance().getName(after);
				}
				cm.getChar().unequipPet(cm.getChar().getPet(0), false);
				cm.gainItem(5380000, -1);
				cm.gainItem(id, -1);
				PetGiver.gainPet(cm.getC(), after, name, level, closeness, fullness);
				cm.sendOk("你的龙现在进化了!! 它原来是 #i" + id + "##t" + id + "#, 现在变成了 #i" + after + "##t" + after + "#!");
				cm.dispose();
			}
		} else if (status == 2) {
			if (selection == 0) {
				MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.CASH, 1, 1, true);
				cm.sendOk("你点券栏的第一格已经移除。");
			} else if (selection == 1) {
				if (cm.haveItem(5000029, 2)) {
					cm.gainItem(5000029, -1);
				} else if (cm.haveItem(5000030, 2)) {
					cm.gainItem(5000030, -1);
				} else if (cm.haveItem(5000031, 2)) {
					cm.gainItem(5000031, -1);
				} else if (cm.haveItem(5000032, 2)) {
					cm.gainItem(5000032, -1);
				} else if (cm.haveItem(5000033, 2)) {
					cm.gainItem(5000033, -1);
				}
				cm.sendOk("你背包里的第一只龙已经移除。");
			} else if (selection == 2) {
				cm.sendOk("好的，欢迎下次再来。");
			}
			cm.dispose();
		}
	}
}
function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
    qOrigAction(mode, type, selection);
}

/* AUTO-QUEST-BEGIN */
/* CMS072 client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[];
function qQuestAction(mode,type,selection) {
    if (!qactive) {
        if (!qfresh || mode!=1) return false;
        qfresh=false; qchoices=[];
        var menu="";
        for(var i=0;i<qdata.length;i++) {
            var d=qdata[i], state=cm.getQuestStatus(d[0]);
            var quest=Packages.server.quest.MapleQuest.getInstance(d[0]);
            if ((d[1]==0 && quest.canStart(cm.getPlayer(),cm.getNpc())) || (d[1]==1 && state==1)) {
                menu+="\r\n#L"+qchoices.length+"#"+(d[1]==0?"[接受] ":"[完成] ")+d[2]+"#l";
                qchoices.push(d);
            }
        }
        if(qchoices.length==0) return false;
        if(typeof qOrigAction=="function") menu+="\r\n#L"+qchoices.length+"#其他服务与对话#l";
        qactive=true; qstatus=0; cm.sendSimple(menu); return true;
    }
    if(mode!=1) { qactive=false; qfresh=false; cm.dispose(); return true; }
    if(qstatus==0) {
        if(selection==qchoices.length && typeof qOrigAction=="function") {qactive=false;return false;}
        if(selection<0 || selection>=qchoices.length) { cm.dispose(); return true; }
        qchosen=qchoices[selection]; qstatus=1;
        cm.sendYesNo(qchosen[3] || qchosen[2]); return true;
    }
    if(qstatus==1) {
        qstatus=2;
        var q=Packages.server.quest.MapleQuest.getInstance(qchosen[0]);
        if(qchosen[1]==0) {
            if(q.canStart(cm.getPlayer(),cm.getNpc())) { cm.startClientNpcQuest(qchosen[0]); return true; }
        } else {
            if(q.canComplete(cm.getPlayer(),null)) { cm.completeClientNpcQuest(qchosen[0]); return true; }
            else cm.sendOk("任务条件尚未完成，请查看任务栏中的物品和狩猎要求。");
        }
        cm.dispose(); return true;
    }
    cm.dispose(); return true;
}
/* AUTO-QUEST-END */
