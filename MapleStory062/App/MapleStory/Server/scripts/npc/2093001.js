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

/* Athena Pierce
	Bowman Job Advancement
	Victoria Road : Bowman Instructional School (100000201)

	Custom Quest 100000, 100002
*/

importPackage(net.sf.odinms.client);

var status = 0;
var job;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 2) {
			cm.sendOk("請你想好了以後再來找我");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				if (cm.getLevel() >= 10 && cm.getChar().getDex() >= 20)
					cm.sendNext("你已經符合條件進行 #r海盗(Pirate)#k轉職");
				else {
					cm.sendOk("你還沒有足夠的能力進行#r海盗(Pirate)#k轉職")
					cm.dispose();
				}
			}  else {
				if (cm.getLevel() >= 9999
					&& cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE)) {
					if (cm.getQuestStatus(100000).getId() >=
						net.sf.odinms.client.MapleQuestStatus.Status.STARTED.getId()) {
						cm.completeQuest(100002);
						if (cm.getQuestStatus(100002) ==
						 net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) {
							status = 20;
							cm.sendNext("....");
						} else {
							cm.sendOk("去找#r转职教官#k吧.")
							cm.dispose();
						}
					} else {
						status = 10;
						cm.sendNext("....");
					}
				} else if (cm.getQuestStatus(100100).equals(MapleQuestStatus.Status.STARTED)) {
					cm.completeQuest(100101);
					if (cm.getQuestStatus(100101).equals(MapleQuestStatus.Status.COMPLETED)) {
						cm.sendOk("...");
					} else {
						cm.sendOk("嘿，" + cm.getChar().getName() + "！我需要#b黑色护符#k。去找次元之门吧。");
						cm.startQuest(100101);
					}
					cm.dispose();
				}else {
					cm.sendOk("我是#r海盜(Pirate)#k1轉轉職官,2轉以上請到杜宜-Duey處轉職");
					cm.dispose();
				}
			}
		} else if (status == 1) {
			cm.sendNextPrev("#r[注意]:#k#b海盜不能按能力值(S鍵)否則掉線,海盜拳手1.2轉沒技能用,火槍手1轉沒技能用,並且一旦你選擇了該職業,你將永遠不能改變(除非轉生)請慎重選擇#k.");
		} else if (status == 2) {
			cm.sendYesNo("你眞的想成爲一名#r海盗(Pirate)#k嗎?");
		} else if (status == 3) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER))
				cm.changeJob(net.sf.odinms.client.MapleJob.PIRATE);
			cm.sendOk("轉職成功,你已經成為一名#r海盜(Pirate)#k了");
			cm.dispose();
		} else if (status == 11) {
			cm.sendNextPrev("....")
		} else if (status == 12) {
			cm.sendAcceptDecline("....");
		} else if (status == 13) {
			if (cm.haveItem(4031010)) {
				cm.sendOk("请到 http://odinms.de/forum/ 反馈这个BUG。\r\nstatus = 13");
			} else {
				cm.startQuest(100000);
				cm.sendOk("....");
			}
		} else if (status == 21) {
			cm.sendSimple("....");
		} else if (status == 22) {
			var jobName;
			if (selection == 0) {
				jobName = "..";
				job = net.sf.odinms.client.MapleJob.INFIGHTER;
			} else {
				jobName = "...";
				job = net.sf.odinms.client.MapleJob.GUNSLINGER;
			}
			cm.sendYesNo("....");
		} else if (status == 23) {
			cm.changeJob(job);
			cm.sendOk("....");
		}
	}
}	
