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

/**
 Joel (Ellinia Ticket Usher) 103207
**/
var status = 0;
importPackage(net.sf.odinms.client);

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0) {
		cm.sendYesNo("你好，你想买去天空之城的船票吗?\r\n那么你需要支付 10,000 金币.\r\n 路上小心有很厉害的怪物出现喔.");
		status++;
	} else {
		if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) {
			cm.dispose();
		} else {
			if (status == 1) {
					cm.gainMeso(-10000);
					cm.gainItem(4031045,1);
					cm.sendNext ("这里是您去天空之城的船票，请拿好.");
					status++;
			} else if (status == 2) {
					cm.sendOk("#w祝您旅途愉快！");
					cm.dispose();
			}
		}
	}
}
