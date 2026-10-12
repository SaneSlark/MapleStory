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

/* Phil
	Warp NPC
	- Lith Harbour
*/

var status = 0;
var maps = Array(102000000, 101000000, 100000000, 103000000);
var mapsname = Array("勇士部落", "魔法密林", "射手村", "废弃都市");
var cost = Array(12000, 12000, 12000, 10000);
var costBeginner = Array(1200, 1200, 1200, 1000);
var selectedMap = -1;
var job;

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("嘿嘿，欢迎你再次光顾.");
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
			cm.sendNext("你好，我是常驻居民指派的传送NPC，你想去哪?");
		} else if (status == 1) {
			cm.sendNextPrev("我能带你到4大主要城市，勇士部落 魔法密林 射手村 废气都市.")
		} else if (status == 2) {
			var selStr = "选择你想去的村落.#b";
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				for (var i = 0; i < maps.length; i++) {
					selStr += "\r\n#L" + i + "#" + mapsname[i] + "(" + costBeginner[i] + " 金币)#l";
				}
			} else {
				for (var i = 0; i < maps.length; i++) {
					selStr += "\r\n#L" + i + "#" + mapsname[i] + "(" + cost[i] + " 金币)#l";
				}
			}
			cm.sendSimple(selStr);
		} else if (status == 3) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				if (cm.getMeso() < costBeginner[selection]) {
					cm.sendOk("你好像没有足够的金币吧.")
					cm.dispose();
				} else {
					cm.sendYesNo("你没有什么遗留在这里的了?你真的要去 " + mapsname[selection] + "吗?");
					selectedMap = selection;
				}
			}
			else {
				if (cm.getMeso() < cost[selection]) {
					cm.sendOk("你好像没有足够的金币吧.")
					cm.dispose();
				} else {
					cm.sendYesNo("你没有什么遗留在这里的了?你真的要去 " + mapsname[selection] + "吗?");
					selectedMap = selection;
				}
			}		
		} else if (status == 4) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.gainMeso(-costBeginner[selectedMap]);
			}
			else {
				cm.gainMeso(-cost[selectedMap]);
			}
			cm.warp(maps[selectedMap], 0);
			cm.dispose();
		}
	}
}	