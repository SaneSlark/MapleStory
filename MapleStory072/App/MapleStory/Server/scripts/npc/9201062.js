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

/* J.J.
	NLC VIP Eye Color Change.
*/
var status = 0;
var price = 5000000;
var colors = Array();

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
			cm.sendSimple("#e#r#h!##k 你好!我是J.J.医生,我可以为你改变你的眼色.如果你有#b新叶城换眼手术高级会员卡#k,我可以为你进行换眼整形手术.那么你想做什么呢?\r\n#L1#购买#b新叶城换眼手术高级会员卡#k(需要" + price + "金币)\r\n#L2##b进行换眼手术#k(使用#b新叶城换眼手术高级会员卡#k)#l");						
		} else if (status == 1) {
			if (selection == 1) {
				if(cm.getMeso() >= price) {
					cm.gainMeso(-price);
					cm.gainItem(5152036, 1);
					cm.sendOk("#e好了,赶快改变你的眼色吧!");
				} else {
					cm.sendOk("#e你没有足够的金币购买高级会员卡!");
				}
				cm.dispose();
			} else if (selection == 2) {
				if (cm.getChar().getGender() == 0) {
					var current = cm.getChar().getFace()
 % 100 + 20000;
				}
				if (cm.getChar().getGender() == 1) {
					var current = cm.getChar().getFace()
 % 100 + 21000;
				}
				colors = Array();
				colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
				cm.sendStyle("#e我可以改变你的眼色,让它比现在看起来漂亮. 你为什么不试着改变它下? 如果你有#i5152036##b新叶城换眼手术高级会员卡#k,我将会帮你改变你的眼色,那么选择一个你想要的新眼色吧!", colors);
			}
		}
		else if (status == 2){
			cm.dispose();
			if (cm.haveItem(5152036) == true){
				cm.gainItem(5152036, -1);
				cm.setFace(colors[selection]);
				cm.sendOk("#e好了,你的朋友们一定败在你这电眼之下!");
			} else {
				cm.sendOk("#e恩?你好象看起来并没有我们的高级会员卡,我恐怕不能给你进行整形手术,我很抱歉.请你先购买吧.");			
			}
		}
	}
}
