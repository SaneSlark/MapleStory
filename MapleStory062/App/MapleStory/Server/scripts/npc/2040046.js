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

/* Mr. Goldstein
	located in Lith Harbour (104000000)
	Buddy List Admin
*/

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
	var capacity;
	var newcapacity;
	var price;
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("如果有事想找我,随时都可以来.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("今天客人怎么这么少..喂！等一下！您想不想增加好友目录？我一眼就看出你有很多朋友.怎么样...只需要一点点金币我就给你增加好友列表的数量.怎么样？想好了么？");
		} else if (status == 1) {
			capacity = cm.getBuddyCapacity();
			if (capacity == 50) {
				cm.sendOk("你最打好友上限为50, 你不可以再继续增加了");
				cm.dispose();
			}
			else {
				price = 5000000;
				newcapacity = capacity + 5;
				cm.sendYesNo("增加 #b" + newcapacity + "#k 上限需要 #b" + price + " #枫币?");
			}
		} else if (status == 2) {
			if (cm.getMeso() < price) {
				cm.sendOk("很抱歉,您的金币不足!")
				cm.dispose();
			}
			else {
				cm.updateBuddyCapacity(newcapacity);
				cm.gainMeso(-price);
				cm.sendOk("祝你朋友多多,好事多多.");
				cm.dispose();
			}
		} 
	}
}