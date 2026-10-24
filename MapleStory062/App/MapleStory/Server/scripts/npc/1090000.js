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

/* Dances with Balrog
	Warrior Job Advancement
	Victoria Road : Warriors' Sanctuary (102000003)

	Custom Quest 100003, 100005
*/

importPackage(net.sf.odinms.client);

var status = 0;
var job;

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
			cm.sendOk("考虑好了再来找我吧.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) 
				{
				if (cm.getLevel() >= 10 && cm.getChar().getDex() >= 20)
					cm.sendNext("你想成为 #r海盗#k吗?");
					else{
					cm.sendOk("你还没有转#r海盗#k的条件.需要等级10敏捷20")
					cm.dispose();
						}
				}	 
			else if (cm.getLevel() >= 30 && cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE)) 
					{
						status = 10;
						cm.sendNext("你已经达到二转的条件了.");
					}
			else {
						cm.sendOk("你不具备海盗二转条件");
						cm.dispose();
				 }
				
		} else if (status == 1) {
			cm.sendNextPrev("这是个非常重要的决定,一旦你转职成功就不能够再有其他的选择了.");
		} else if (status == 2) {
			cm.sendYesNo("你确定要成为 #r海盗#k?");
		} else if (status == 3) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER))
				cm.changeJob(net.sf.odinms.client.MapleJob.PIRATE);
			cm.gainMeso(300000);
cm.gainItem(1002418, 1);
cm.gainItem(1302024, 1);
cm.gainItem(1102076, 1);
			cm.sendOk("转职成功.");
			cm.dispose();
		} else if (status == 11) {
			cm.sendNextPrev("转职有三个选择 #r拳手#k, #r枪手#k.")
		} else if (status == 12) {
			cm.sendSimple("你想成为?#b\r\n#L0#拳手#l\r\n#L1#枪手#l#k");
		} else if (status == 13) {
			var jobName;
			if (selection == 0) {
				jobName = "拳手";
				job = net.sf.odinms.client.MapleJob.BRAWLER;
			} else {
				jobName = "枪手";
				job = net.sf.odinms.client.MapleJob.GUNSLINGER;
			}
			cm.sendYesNo("你确定要成为 #r" + jobName + "#k?");
		} else if (status == 14) {
			cm.changeJob(job);
cm.gainItem(5211018, 1);
cm.gainItem(1122007, 1);

if(cm.getChar().getGender() == 1) {
cm.gainItem(1051017, 1);//女桑拿
}else {
cm.gainItem(1050018, 1);//男桑拿
}
			cm.sendOk("转职成功了.");
cm.dispose();
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
    if ((cm.getQuestStatus(3527) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 500 || cm.getJob().getId() == 510 || cm.getJob().getId() == 520 || cm.getJob().getId() == 511 || cm.getJob().getId() == 521 || cm.getJob().getId() == 512 || cm.getJob().getId() == 522)) && (cm.getQuestStatus(3507) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "追随遗忘的记忆" + "#l"; n++; }
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
        if ((cm.getQuestStatus(3527) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 500 || cm.getJob().getId() == 510 || cm.getJob().getId() == 520 || cm.getJob().getId() == 511 || cm.getJob().getId() == 521 || cm.getJob().getId() == 512 || cm.getJob().getId() == 522)) && (cm.getQuestStatus(3507) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 3527; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3527) qt = "按照旁观者的说法，要找回失去的记忆，必须回到开始的时候。冒险开始的时候……不就是离开枫之岛，踏上维多利亚岛的转职的时候吗？去见见#b#p1090000##k吧。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
        } else {
            if (qid == 3527) cm.startQuest(3527);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
