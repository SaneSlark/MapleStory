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

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
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
			cm.sendYesNo("最后，送你的一点小礼物： \r\n #b#v1302067##k    #b#v1002518##k    #b#v1050127##k    #b#v1072275##k  #b#v1122007##k\r\n#b#v5000006##k    #b#v5170000##k    #b#v2120000##k    #b#v5220000##k    #b#v5072000##k    #b#v2022240##k    #b#v2022015##k\r\n#b#e 50000经验 \r\n#e 500000冒险币#n");
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
                                        cm.gainExp(50000);
                                        cm.gainMeso(100000);
                                        cm.serverNotice("『新人公告』：哇.新星  "+ cm.getChar().getName() +" 降临到我们这个大家庭,大家以后多多关照他/她吧！");
			cm.dispose();
		}
	}
}	