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

/* Dark Lord
	Thief Job Advancement
	Victoria Road : Thieves' Hideout (103000003)

	Custom Quest 100009, 100011
*/

var status = 0;
var job;

importPackage(net.sf.odinms.client);

function start() {
    qfresh = true;
	status = -1;
	action(1, 0, 0);
}

function qOrigAction(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 2) {
			cm.sendOk("你应该知道，在这里已经没有别的选择!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				if (cm.getLevel() >= 10 && cm.getChar().getDex() >= 25)
					cm.sendNext("那么你已经决定成为一名#r飞侠#k?");
				else {
					cm.sendOk("你还需要加强修炼我才能给你指明怎样成为一名出色的 #r飞侠#k.")
					cm.dispose();
				}
			} else {
				if (cm.getLevel() >= 30 
					&& cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF)) {
					if (cm.getQuestStatus(100009).getId() >=
						net.sf.odinms.client.MapleQuestStatus.Status.STARTED.getId()) {
						cm.completeQuest(100011);
						if (cm.getQuestStatus(100011) ==
						 net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) {
							status = 20;
							cm.sendNext("不错,你做得很好. 我将允许你进入一下漫长的修炼阶段.");
						} else {
							cm.sendOk("去找 #r二转教官#k 吧.")
							cm.dispose();
						}
					} else {
						status = 10;
						cm.sendNext("你目前所做出的进步真的很让人吃惊.");
					}
				} else if (cm.getQuestStatus(100100).equals(MapleQuestStatus.Status.STARTED)) {
					cm.completeQuest(100101);
					if (cm.getQuestStatus(100101).equals(MapleQuestStatus.Status.COMPLETED)) {
						cm.sendOk("那么,请把这个转交给 #bArec#k.");
					} else {
						cm.sendOk("嘿, " + cm.getChar().getName() + "! 我需要一个#b黑珠#k. 去找到次元之门吧.");
						cm.startQuest(100101);
					}
					cm.dispose();
				} else {
					cm.sendOk("你的选择是明智的.");
					cm.dispose();
				}
			}
		} else if (status == 1) {
			cm.sendNextPrev("这是非常重要也是你最后作出的一个选择. 一旦你选择了该职业,你将永远不能改变.");
		} else if (status == 2) {
			cm.sendYesNo("你真的想成为一名 #r飞侠#k 吗?");
		} else if (status == 3) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER))
				cm.changeJob(net.sf.odinms.client.MapleJob.THIEF);
			cm.sendOk("转职成功!那么现在请你去为了更高的境界而奋斗吧.");
                        cm.gainItem(1332000,1);
                        cm.gainItem(1472000,1);
                        cm.gainItem(2070000,5000);
                        cm.gainItem(2070000,5000);
                        cm.gainItem(2070000,5000);
                        cm.dispose();

		} else if (status == 11) {
			cm.sendNextPrev("作为一名 #r刺客#k 或者 #r侠客#k,你应该做好挑战下一个阶段的准备.");
		} else if (status == 12) {
			cm.sendAcceptDecline("但我首先得考考你的能力. 你准备好了吗?");
		} else if (status == 13) {
			if (cm.haveItem(4031011)) {
				cm.sendOk("请到 http://odinms.de/forum/ 报告这个BUG.\r\nstatus = 13");
			} else {
				cm.startQuest(100009);
				cm.sendOk("请你把这封信带给 #b二转教官#k 他就在废气北面的一座城市里. 他将会给你转职的指引.");
			}
		} else if (status == 21) {
			cm.sendSimple("你想转为下面哪个职业呢?#b\r\n#L0#刺客#l\r\n#L1#侠客#l#k");
		} else if (status == 22) {
			var jobName;
			if (selection == 0) {
				jobName = "刺客";
				job = net.sf.odinms.client.MapleJob.ASSASSIN;
			} else {
				jobName = "侠客";
				job = net.sf.odinms.client.MapleJob.BANDIT;
			}
			cm.sendYesNo("你真的想成为一名 #r" + jobName + "#k?");
		} else if (status == 23) {
			cm.changeJob(job);
			cm.sendOk("转职成功!那么现在请你去为了更高的境界而奋斗吧.");
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
    if ((cm.getQuestStatus(3526) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 400 || cm.getJob().getId() == 410 || cm.getJob().getId() == 420 || cm.getJob().getId() == 411 || cm.getJob().getId() == 421 || cm.getJob().getId() == 412 || cm.getJob().getId() == 422)) && (cm.getQuestStatus(3507) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "追随遗忘的记忆" + "#l"; n++; }
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
        if ((cm.getQuestStatus(3526) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 400 || cm.getJob().getId() == 410 || cm.getJob().getId() == 420 || cm.getJob().getId() == 411 || cm.getJob().getId() == 421 || cm.getJob().getId() == 412 || cm.getJob().getId() == 422)) && (cm.getQuestStatus(3507) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 3526; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3526) qt = "按照旁观者的说法，要找回失去的记忆，必须回到开始的时候。冒险开始的时候……不就是离开枫之岛，踏上维多利亚岛的转职的时候吗？去见见#b#p1052001##k吧。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
        } else {
            if (qid == 3526) cm.startQuest(3526);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
