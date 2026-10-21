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

/* Grandpa Luo
	Mu Lung VIP Hair/Hair Color Change.
*/
var status = 0;
var beauty = 0;
var hairprice = 5000000;
var haircolorprice = 5000000;
var mhair = Array(30250, 30350, 30270, 30150, 30300, 30600, 30160);
var fhair = Array(31040, 31250, 31310, 31220, 31300, 31680, 31160, 31030, 31230);
var hairnew = Array();

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
			cm.sendSimple("#e#r#h!##k你好,我是武陵美发店的店长老爹!如果你有#b武陵美发店高级会员卡#k或#b武陵染发高级会员卡#k,你就放心的把发型交给我,我会让你满意的.那么你要做什么?请选择吧!.\r\n#L0#购买#r会员卡#k#l\r\n#L1#改变发型(使用#b武陵美发店高级会员卡#k)#l\r\n#L2#染色(使用#b武陵染发高级会员卡#k)#l");						
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 0;
				cm.sendSimple("#e那么你想购买哪种高级会员卡呢?\r\n#L0##b武陵美发店高级会员卡#k,需要#r" + hairprice + "#k金币#l\r\n#L1##b武陵染发高级会员卡#k,需要#r" + haircolorprice + "#k金币#l");
			} else if (selection == 1) {
				beauty = 1;
				hairnew = Array();
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mhair.length; i++) {
						hairnew.push(mhair[i] + parseInt(cm.getChar().getHair()
 % 10));
					}
				} 
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fhair.length; i++) {
						hairnew.push(fhair[i] + parseInt(cm.getChar().getHair()
 % 10));
					}
				}
				cm.sendStyle("#e我可以改变你的发型,让它比现在看起来漂亮. 你为什么不试着改变它下? 如果你有#i5150025##b武陵美发店高级会员卡#k,我将会帮你改变你的发型,那么选择一个你想要的新发型吧!", hairnew);
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("#e我可以改变你的发色,让它比现在看起来漂亮. 你为什么不试着改变它下? 如果你有#i5151020##b武陵染发高级会员卡#k,我将会帮你改变你的发色,那么选择一个你想要的新发色吧!", haircolor);
			}
		}
		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(5150025) == true){
					cm.gainItem(5150025, -1);
					cm.setHair(hairnew[selection]);
					cm.sendOk("#e好了,让朋友们赞叹你的新发型吧!");
				} else {
					cm.sendOk("#e恩?你好象看起来并没有我们的高级会员卡,我恐怕不能给你理发,我很抱歉.请你先购买吧.");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151020) == true){
					cm.gainItem(5151020, -1);
					cm.setHair(haircolor[selection]);
					cm.sendOk("#e好了,让朋友们赞叹你的新发色吧!");
				} else {
					cm.sendOk("#e恩?你好象看起来并没有我们的高级会员卡,我恐怕不能给你染发,我很抱歉.请你先购买吧.");
				}
			}
			if (beauty == 0){
				if (selection == 0 && cm.getMeso() >= hairprice) {
					cm.gainMeso(-hairprice);
					cm.gainItem(5150025, 1);
					cm.sendOk("#e好了,赶快改变你的发型吧!");
				} else if (selection == 1 && cm.getMeso() >= haircolorprice) {
					cm.gainMeso(-haircolorprice);
					cm.gainItem(5151020, 1);
					cm.sendOk("#e好了,赶快改变你的发色吧!");
				} else {
					cm.sendOk("#e你没有足够的金币购买高级会员卡!");
				}
			}
		}
	}
}
