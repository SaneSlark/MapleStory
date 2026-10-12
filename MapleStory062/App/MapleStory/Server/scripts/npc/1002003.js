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
var capacity;
var newcapacity;
var price = 5000000;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("您好，你的好友数量是不是达到最大限制的数目了？如果你想增加你好友数量的上限，那么请来找我吧.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("你好，我能够提高你好友目录数量的上限喔！");
		} else if (status == 1) {
			capacity = cm.getPlayer().getBuddylist().getCapacity();
			if (capacity == 50) {
				cm.sendOk("你已经将好友数量扩大到最大的数量50人了, 你现在已经不能再次增加好友的目录容量了。");
				cm.dispose();
			}
			else {
				newcapacity = capacity + 5;
				cm.sendYesNo("你现在就想增加你好友目录的数量达到#b" + newcapacity + "#k人吗？那么您需要支付 #b" + price + " #k金币.");
			}
		} else if (status == 2) {
			if (cm.getMeso() < price) {
				cm.sendOk("很抱歉，你身上没有足够的金币来支付本次增加好友目录所需要的费用!")
				cm.dispose();
			}
			else {
				cm.updateBuddyCapacity(newcapacity);
				cm.gainMeso(-price);
				cm.sendOk("恭喜！你好友目录的数量增加了.");
				cm.dispose();
			}
		} 
	}
}