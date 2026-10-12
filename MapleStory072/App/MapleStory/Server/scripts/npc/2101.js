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
var finished = false;
var maps = Array(104000000, 102000000, 101000000, 103000000);
var mapsname = Array("明珠港口", "勇士部落", "魔法森林", "废气城市");
var cost = Array(800, 1200, 1200, 1000);
var costBeginner = Array(80, 100, 100, 100);
var selectedMap = -1;
var job;

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
    finished = false;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (finished) return;
	if (mode == -1 || (mode == 0 && status <= 0)) {
		finished = true;
        cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("想好了再出去吧.");
			finished = true;
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
			cm.sendNext("欢迎来到#b冒险岛#k！准备好开始你的冒险了吗？");
		} else if (status == 1) {
			cm.sendNextPrev("礼包中还包含一只#r宠物#k，双击宠物图标即可召唤它。")
		} else if (status == 2) {
			cm.sendYesNo("最后，送你的一点小礼物： \r\n #b#v1302067##k    #b#v1002186##k    #b#v1050127##k    #b#v1072275##k  #b#v1122007##k\r\n#b#v5000006##k    #b#v5170000##k    #b#v2120000##k    #b#v5220000##k    #b#v5072000##k    #b#v2022240##k    #b#v2022015##k\r\n#b#e 10经验 \r\n#e 100000冒险币#n");
		} else if (status == 3) {
                        finished = true;
                        if (cm.getPlayer().getMapId() != 2) { cm.dispose(); return; }
                        if (cm.getInventory(1).getNumFreeSlot() < 12 || cm.getInventory(2).getNumFreeSlot() < 5 || cm.getInventory(4).getNumFreeSlot() < 1 || cm.getInventory(5).getNumFreeSlot() < 4) { cm.sendOk("请先腾出背包空间: 装备 12, 消耗 5, 其它 1, 现金 4."); cm.dispose(); return; }
			                cm.warp(40000,0);
			                cm.resetStats(4, 4, 4, 4);
					cm.gainItem(1302067, 1);
					cm.gainItem(1002186, 1);
					cm.gainItem(1050127, 1);
					cm.gainItem(1072275, 1);
					cm.gainItem(1122007, 1);
                                        cm.gainPet(5000006, "雪犬", 1, 0, 100, 0, 0);
					cm.gainItem(5170000, 1);
					cm.gainItem(2120000, 400);
                                        cm.gainItem(5220000, 10);
					cm.gainItem(5072000, 1);
					cm.gainItem(2022240, 10);
					cm.gainItem(2022015, 100);
                                        cm.gainItem(4120000, 10);
                                        // 1812000 has no equipment resource in this client.
                                        // 1812002 has no equipment resource in this client.
                                        // 1812004 has no equipment resource in this client.
                                        // 1812005 has no equipment resource in this client.
                                        // 1812006 has no equipment resource in this client.
                                        
                                        cm.gainItem(1042138, 1);
                                        cm.gainItem(1062015, 1);
                                        cm.gainItem(1072234, 1);
                                        cm.gainItem(1082102, 1);
                                        cm.gainItem(1102039, 1);
                                        cm.gainExp(10);
                                        cm.gainMeso(100000);
                                        cm.worldMessage("『新人公告』：哇.新星  "+ cm.getChar().getName() +" 降临到我们这个大家庭,大家以后多多关照他/她吧！");
			finished = true;
        cm.dispose();
		}
	}
}	