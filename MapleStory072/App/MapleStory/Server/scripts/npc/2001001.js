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

/*
======>OdinMS NX Npc<======
by [GM]Fatality of FusionMS
*/
function start() {
if(cm.getChar().getVip() >= 1) {
	cm.sendSimple ("HI，这里是VIP会员1号店，欢迎选购请选择您的类别.\r\n#L0#披风#l\r\n#L1#表情#l\r\n#L2#眼饰#l\r\n#L3#脸饰#l\r\n#L4#手套#l\r\n#L5#帽子#l\r\n#L6#帽子2#l\r\n#L7#套装#l\r\n#L8#上衣#l\r\n#L9#裤子#l\r\n#L10#戒指#l\r\n#L11#盾#l\r\n#L12#鞋子#l\r\n#L13#武器#l");
}else {
    cm.sendOk("夜 是这么美...")
    }
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		cm.openShop (1000);
	} else if (selection == 1) {
		cm.openShop (1001);
	} else if (selection == 2) {
		cm.openShop (1002);
	} else if (selection == 3) {
		cm.openShop (1003);
	} else if (selection == 4) {
		cm.openShop (1004);
	} else if (selection == 5) {
		cm.openShop (1005);
	} else if (selection == 6) {
		cm.openShop (1006);
	} else if (selection == 7) {
		cm.openShop (1007);
	} else if (selection == 8) {
		cm.openShop (1008);
	} else if (selection == 9) {
		cm.openShop (1009);
	} else if (selection == 10) {
		cm.openShop (1010);
	} else if (selection == 11) {
		cm.openShop (1011);
	} else if (selection == 12) {
		cm.openShop (1012);
	} else if (selection == 13) {
		cm.openShop (1013);
	} else {
		cm.dispose();
	}
}