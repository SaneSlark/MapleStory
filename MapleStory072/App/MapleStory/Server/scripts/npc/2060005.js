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

/* NLC ticket gate
	Warp NPC to Subway Ticketing Booth (103000100)
	located in NLC Subway Station (600010001)
*/

var status = 0;
var done=false,origin=-1;

function start() {
    done=false;origin=cm.getMapId();
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if(done)return;
    if(mode!=1||cm.getMapId()!=origin){done=true;cm.dispose();return;}
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("你想学习骑宠和新手砸卷技能么？");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("你想学习骑宠和新手砸卷技能么？");
		} else if (status == 1) {
			cm.sendNextPrev("到70级再来找我吧！.")
		} else if (status == 2) {
			if (cm.getMeso() < 5000000) {
				cm.sendOk("很抱歉，你没有足够的金币.")
				cm.dispose();
			} else {
				cm.sendYesNo("学习技能不是白学的喔,给我#b5000000#k，我就传授给你！");
			}
		} else if (status == 3) {
			done=true;
            if(cm.getLevel()<70||cm.getMeso()<5000000||cm.getInventory(1).getNumFreeSlot()<3||!cm.canHold(1902000,1)||!cm.canHold(1902001,1)||!cm.canHold(1912000,1)){cm.sendOk("请确认达到70级、金币充足，并留出三个装备空位。");cm.dispose();return;}
            cm.gainMeso(-5000000);
			cm.teachSkill(1004,1,0);
			cm.teachSkill(1003,1,0);
			cm.gainItem(1902000,1);
			cm.gainItem(1902001,1);
			cm.gainItem(1912000,1);
			cm.dispose();
		}
	}
}