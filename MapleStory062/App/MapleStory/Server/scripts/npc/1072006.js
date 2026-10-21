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
	Hidden Street : Ant Tunnel For Bowman (108000100)
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
		if (status == 0) {
			cm.completeQuest(100001);
			if (cm.getQuestStatus(100001) ==
				net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) {
				cm.startQuest(100002);
				cm.sendOk("你是一位真正的英雄! 请带上这个东西,这样雅典娜将会认可你所做的一切.");
			} else {
				cm.sendOk("你将需要为我收集 #b1 #t4031013##k,完成后带来给我,祝你好运.")
				cm.dispose();
			}
		} else if (status == 1) {
			cm.warp(106010000, 1);
			cm.dispose();
		}
	}
}	