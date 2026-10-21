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

/* Natalie
	Henesys VIP Hair/Hair Color Change.
*/
var status = 0;
var beauty = 0;
var hairprice = 80000000;
var haircolorprice = 100000000;
var mhair = Array(30000, 30020, 30030, 30040, 30050, 30060, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30400, 30410, 30420, 30430, 30440, 30450, 30460, 30470, 30480, 30490, 30510, 30520, 30530, 30540, 30550, 30560, 30570, 30580, 30590, 30600, 30610, 30620, 30630, 30640, 30650, 30660, 30700, 30710, 30720);
var fhair = Array(31000, 31010, 31020, 31030, 31040, 31050, 31060, 31070, 31080, 31090, 31100, 31110, 31120, 31130, 31140, 31150, 31160, 31170, 31180, 31190, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 31300, 31310, 31320, 31330, 31340, 31350, 31410, 31420, 31430, 31440, 31450, 31460, 31470, 31480, 31490, 31510, 31520, 31530, 31540, 31550, 31560, 31570, 31580, 31590, 31600, 31610, 31620, 31630, 31640, 31650, 31670, 31680, 31690, 31700, 31710, 31720, 31730, 31740);
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
			cm.sendSimple("#r你好，如果你有射手VIP美发卡，我可以为你塑造一个新的形象.\r\n#L0##fUI/UIWindow.img/QuestIcon/6/0##d我没有VIP卡，我想买一张!#l\r\n#L1##fUI/UIWindow.img/QuestIcon/7/0#我想要换一种发型#l\r\n#L2##fUI/UIWindow.img/QuestIcon/7/0#我需要给发型换颜色");						
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 0;
				cm.sendSimple("#b请选择你需要的卡?\r\n#L0##fUI/UIWindow.img/QuestIcon/7/0##r高级发型卡(8000万金币)#l\r\n#L1##fUI/UIWindow.img/QuestIcon/7/0##r高级美发卡(1亿金币)");
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
				cm.sendStyle("#r你好,欢迎来到射手美发中心！\r\n#b只要你有射手VIP美发卡，我就可以帮你换新的发型，快来挑选一个你喜欢的发型吧！", hairnew);
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("#r你好,欢迎来到射手美发中心！\r\n#b只要你有射手VIP染发卡，我就可以帮你染发，快来挑选一个你喜欢的色彩吧！", haircolor);
			}
		}
		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(5150001) == true){
					cm.gainItem(5150001, -1);
					cm.setHair(hairnew[selection]);
					cm.sendOk("哇~!HO，你看起来真好看,我也很喜欢这个造型!");
				} else {
					cm.sendOk("#r没有卡我是不会帮你做什么的!");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151001) == true){
					cm.gainItem(5151001, -1);
					cm.setHair(haircolor[selection]);
					cm.sendOk("哇~!HO，你看起来真好看,我也很喜欢这个造型!");
				} else {
					cm.sendOk("#r没有卡我是不会帮你做什么的!");
				}
			}
			if (beauty == 0){
				if (selection == 0 && cm.getMeso() >= hairprice) {
					cm.gainMeso(-hairprice);
					cm.gainItem(5150001, 1);
					cm.sendOk("#r购买成功!");
				} else if (selection == 1 && cm.getMeso() >= haircolorprice) {
					cm.gainMeso(-haircolorprice);
					cm.gainItem(5151001, 1);
					cm.sendOk("#r购买成功!");
				} else {
					cm.sendOk("你没有足够的金币,回家去拿钱!");
				}
			}
		}
	}
}