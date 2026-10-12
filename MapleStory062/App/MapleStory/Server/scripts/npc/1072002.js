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

/* Bowman Job Instructor
	Hunter Job Advancement
	Warning Street : The Road to the Dungeon (106010000)
*/

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0 && cm.getQuestStatus(100001) ==
			net.sf.odinms.client.MapleQuestStatus.Status.STARTED) {
			status = 3;
		}
		if (status == 0) {
			if (cm.getQuestStatus(100001) == 
				net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) {
				cm.sendOk("你是一位真正的英雄!");
				cm.dispose();
			} else if (cm.getQuestStatus(100000).getId() >=
				net.sf.odinms.client.MapleQuestStatus.Status.STARTED.getId()) {
				cm.completeQuest(100000);
				if (cm.getQuestStatus(100000) ==
					net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) {
					cm.sendNext("咦，这不是 #b雅典娜#k写的信吗，是她托你带来给我的吧?");
				}
			} else {
				cm.sendOk("一旦你准备好了,我就可以告诉你进入下一个境界的方法");
				cm.dispose();
			}
		} else if (status == 1) {
			cm.sendNextPrev("那么你现在就想提高你的技能水平? 非常好...")
		} else if (status == 2) {
			cm.sendAcceptDecline("如果你准备好了，我现在可以给你一个机会.");
		} else if (status == 3) {
			cm.startQuest(100001);
			cm.sendOk("你现在去帮我收集 #b1 #t4031013##k. 祝你好运.")
		} else if (status == 4) {
			cm.warp(108000100);
			cm.dispose();
		}
	}
}	