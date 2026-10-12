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
    鱼儿汉化  QQ群:6458080
*/

/* Ms. Tan 
	Henesys Skin Change.
*/
var status = 0;
var price = 5000000;
var skin = Array(0, 1, 2, 3, 4);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("#e欢迎来新加坡护肤中心,#r#h!##k!谁都喜欢有一个健康的肤色!如果你有#i5153000##b新加坡护肤会员卡#k的话,我可以帮你改变你的肤色!\r\n#L1#购买#b新加坡护肤会员卡#k(#r" + price + "金币#k)#l\r\n\#L2##b改变肤色#k(使用#b新加坡护肤会员卡#k)#l");
			} else if (status == 1) {
			if (selection == 1) {
				if(cm.getMeso() >= price) {
					cm.gainMeso(-price);
					cm.gainItem(5153000, 1);
					cm.sendOk("#e好了,赶快改变你的肤色吧!");
				} else {
					cm.sendOk("#e你没有足够的金币购买会员卡!");
				}
				cm.dispose();
			} else if (selection == 2) {
				cm.sendStyle("#e我们有先进的仪器帮你改变你的肤色!当然,如果你有#i5153000##b新加坡护肤会员卡#k的话,那么选择一个你喜欢的肤色吧!", skin);
			}
		}
		else if (status == 2){
			cm.dispose();
			if (cm.haveItem(5153000) == true){
				cm.gainItem(5153000, -1);
				cm.setSkin(skin[selection]);
				cm.sendOk("#e完成了,让朋友们赞叹你的新肤色吧!");
			} else {
				cm.sendOk("#e恩?你好象看起来并没有我们的会员卡,我恐怕不能给你护肤,我很抱歉.请你先购买吧.");
			}
		}
	}
}
