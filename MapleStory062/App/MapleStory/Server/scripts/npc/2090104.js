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

/* Noma
	Mu Lung Random/VIP Eye Change.
*/
var status = 0;
var beauty = 0;
var regprice = 3000000;
var vipprice = 5000000;
var mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014, 20009, 20010);
var fface = Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014, 21009, 21011);
var facenew = Array();

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
			cm.sendSimple("#e#r#h!##k 你好!我是诺马医生,我可以为你进行整形手术.如果你有#b武陵整形手术普通会员卡#k或者#b武陵整形手术高级会员卡#k,我可以为你进行整形手术.那么你想做什么呢?\r\n#L0#购买#r会员卡#k\r\n#L1##b进行整形手术#k(使用#b武陵整形手术普通会员卡#k)随机#l\r\n#L2##b进行整形手术#k(使用#b武陵整形手术高级会员卡#k)#l");						
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 0;
				cm.sendSimple("#e那么你要购买哪种会员卡呢?\r\n#L0##b武陵整形手术普通会员卡#k#r(" + regprice + " 金币)#k#l\r\n#L1##b武陵整形手术高级会员卡#k#r(" + vipprice + " 金币)#k#l");
			} else if (selection == 1) {
				beauty = 1;
				facenew = Array();
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mface.length; i++) {
						facenew.push(mface[i] + cm.getChar().getFace()
 % 1000 - (cm.getChar().getFace()
 % 100));
					}
				}
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fface.length; i++) {
						facenew.push(fface[i] + cm.getChar().getFace()
 % 1000 - (cm.getChar().getFace()
 % 100));
					}
				}
				cm.sendYesNo("#e如果你有#i5152027##b武陵整形手术普通会员卡#k,那么我将帮你随机改变一种脸型,你确定要改变脸型吗?");
			} else if (selection == 2) {
				beauty = 2;
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mface.length; i++) {
						facenew.push(mface[i] + cm.getChar().getFace()
 % 1000 - (cm.getChar().getFace()
 % 100));
					}
				}
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fface.length; i++) {
						facenew.push(fface[i] + cm.getChar().getFace()
 % 1000 - (cm.getChar().getFace()
 % 100));
					}
				}
				cm.sendStyle("#e我可以改变你的脸型,让它比现在看起来漂亮. 你为什么不试着改变它下? 如果你有#i5152028##b武陵整形手术高级会员卡#k,我将会帮你改变你的脸型,那么选择一个你想要的新脸型吧!", facenew);
			}
		}
		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(5152027) == true){
					cm.gainItem(5152027, -1);
					cm.setFace(facenew[Math.floor(Math.random() * facenew.length)]);
					cm.sendOk("#e好了,你的朋友们一定认不出来是你了!");
				} else {
					cm.sendOk("#e恩?你好象看起来并没有我们的会员卡,我恐怕不能给你理发,我很抱歉.请你先购买吧.");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5152028) == true){
					cm.gainItem(5152028, -1);
					cm.setFace(facenew[selection]);
					cm.sendOk("#e好了,你的朋友们一定认不出来是你了!");
				} else {
					cm.sendOk("#e恩?你好象看起来并没有我们的高级会员卡,我恐怕不能给你进行整形手术,我很抱歉.请你先购买吧.");
				}
			}
			if (beauty == 0){
				if (selection == 0 && cm.getMeso() >= regprice) {
					cm.gainMeso(-regprice);
					cm.gainItem(5152027, 1);
					cm.sendOk("#e好了,赶快改变你的外型吧!");
				} else if (selection == 1 && cm.getMeso() >= vipprice) {
					cm.gainMeso(-vipprice);
					cm.gainItem(5152028, 1);
					cm.sendOk("#e好了,赶快改变你的外型吧!");
				} else {
					cm.sendOk("#e你没有足够的金币购买会员卡!");
				}
			}
		}
	}
}
