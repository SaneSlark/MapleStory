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

/* Vicious
	Victoria Road: Henesys Market (100000100)
	
	Refining NPC: 
	* Bows - 10-40
	* Crossbows - 12-50
	* Archer Gloves - 10-60 + upgrades
	* Processed Wood/Screws
	* Arrows/Bronze Arrows/Steel Arrows
*/

importPackage(net.sf.odinms.client);

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var qty;
var equip;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		cm.dispose();
	if (status == 0 && mode == 1) {
		var selStr = "#k我是比休斯,一位退休的弓箭手.然而,我曾经是雅典娜皮尔斯的学生,虽然我不再拿弓.但我可以为您做最好的弓..#b"
		var options = new Array("制造一把弓","制造一把弩","做一副手套","升级手套","制造材料","制造箭");
		for (var i = 0; i < options.length; i++){
			selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}
			
		cm.sendSimple(selStr);
	}
	else if (status == 1 && mode == 1) {
		selectedType = selection;
		if (selectedType == 0){ //bow refine
			var selStr = "我是一名弓箭手,但是弓和弩有着太多的不同,请问，您要不要做?#b";
			var minerals = new Array ("长弓#k - 携带等级. 10#b","钢铁弓#k - 携带等级. 15#b","打猎弓#k - 携带等级. 20#b","战斗弓#k - 携带等级. 25#b","雷电#k - 携带等级. 30#b","火焰之弓#k - 携带等级. 35#b",
				"暴风弓#k - 携带等级. 40#b");
			equip = true;
			for (var i = 0; i < minerals.length; i++){
				selStr += "\r\n#L" + i + "# " + minerals[i] + "#l";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 1){ //xbow refine
			var selStr = "我是弓箭手.弩也是我的专业.请问您要不要我为您做?#b";
			var jewels = new Array ("弩弓#k - 携带等级. 12#b","战争弩弓#k - 携带等级. 18#b","猎弩弓#k - 携带等级. 22#b","山羊弩#k - 携带等级. 28#b","鹰弩#k - 携带等级. 32#b","双弦弩#k - 携带等级. 38#b",
				"白银弩#k - 携带等级. 42#b","炎弩#k - 携带等级. 50#b");
			equip = true;
			for (var i = 0; i < jewels.length; i++){
				selStr += "\r\n#L" + i + "# " + jewels[i] + "#l";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 2){ //glove refine
			var selStr = "你要做一副手套?好的，那么请问你要做哪个?#b";
			var items = new Array ("青狩猎手套#k - 携带等级. 15#b","蓝狩猎手套#k - 携带等级. 20#b","蓝命中手套#k - 携带等级. 25#b","褐击中手套#k - 携带等级. 30#b","青铜名弓手套#k - 携带等级. 35#b",
				"蓝勇气手套#k - 携带等级. 40#b","蓝意志手套#k - 携带等级. 50#b","黄神功手套#k - 携带等级. 60#b");
			equip = true;
			for (var i = 0; i < items.length; i++){
				selStr += "\r\n#L" + i + "# " + items[i] + "#l";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 3){ //glove upgrade
			var selStr = "升级手套也不是太困难!就让我来帮你吧!#b";
			var crystals = new Array ("绿狩猎手套#k - 携带等级. 20#b","红狩猎手套#k - 携带等级. 20#b","红命中手套#k - 携带等级. 25#b","黑命中手套#k - 携带等级. 25#b","绿击中手套#k - 携带等级. 30#b",
				"黑击中手套#k - 携带等级. 30#b","锂矿名弓手套#k - 携带等级. 35#b","黄金名弓手套#k - 携带等级. 35#b","黄金勇气手套#k - 携带等级. 40#b","黑勇气手套#k - 携带等级. 40#b","红意志手套#k - 携带等级. 50#b",
				"黑意志手套#k - 携带等级. 50#b","赤神功手套#k - 携带等级. 60#b","黑神功手套#k - 携带等级. 60#b");
			for (var i = 0; i < crystals.length; i++){
				selStr += "\r\n#L" + i + "# " + crystals[i] + "#l";
			}
			equip = true;
			cm.sendSimple(selStr);
		}
		else if (selectedType == 4){ //material refine
			var selStr = "你是说材料?只要你有原料我就可以帮你做...#b";
			var materials = new Array ("树枝做木块","木块做木板","做螺丝钉(15个)");
			for (var i = 0; i < materials.length; i++){
				selStr += "\r\n#L" + i + "# " + materials[i] + "#l";
			}
			equip = false;
			cm.sendSimple(selStr);
		}
		else if (selectedType == 5){ //arrow refine
			var selStr = "箭?好的，没问题.#b";
			var arrows = new Array ("弓箭","弩箭","青铜弓箭","青铜弩箭","钢铁弓箭","钢铁弩箭");
			for (var i = 0; i < arrows.length; i++){
				selStr += "\r\n#L" + i + "# " + arrows[i] + "#l";
			}
			equip = true;
			cm.sendSimple(selStr);
		}
		if (equip)
			status++;
	}
	else if (status == 2 && mode == 1) {
		selectedItem = selection;
		if (selectedType == 4){ //material refine
			var itemSet = new Array (4003001,4003001,4003000);
			var matSet = new Array(4000003,4000018,new Array (4011000,4011001));
			var matQtySet = new Array (10,5,new Array (1,1));
			var costSet = new Array (0,0,0)
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "请问,你要我做一些 #r#t" + item + "##k?  那么要做多少个?";
		
		cm.sendGetNumber(prompt,1,1,100)
	}
	else if (status == 3 && mode == 1) {
		if (equip)
		{
			selectedItem = selection;
			qty = 1;
		}
		else
			qty = selection;

		if (selectedType == 0){ //bow refine
			var itemSet = new Array(1452002,1452003,1452001,1452000,1452005,1452006,1452007);
			var matSet = new Array(new Array(4003001,4000000),new Array(4011001,4003000),new Array(4003001,4000016),new Array(4011001,4021006,4003000),
				new Array(4011001,4011006,4021003,4021006,4003000),new Array(4011004,4021000,4021004,4003000),new Array(4021008,4011001,4011006,4003000,4000014));
			var matQtySet = new Array(new Array(5,30),new Array(1,3),new Array(30,50),new Array(2,2,8),new Array(5,5,3,3,30),new Array(7,6,3,35),new Array(1,10,3,40,50));
			var costSet = new Array(800,2000,3000,5000,30000,40000,80000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 1){ //xbow refine
			var itemSet = new Array(1462001,1462002,1462003,1462000,1462004,1462005,1462006,1462007);
			var matSet = new Array(new Array(4003001,4003000),new Array(4011001,4003001,4003000),new Array(4011001,4003001,4003000),new Array(4011001,4021006,4021002,4003000),
				new Array(4011001,4011005,4021006,4003001,4003000),new Array(4021008,4011001,4011006,4021006,4003000),new Array(4021008,4011004,4003001,4003000),new Array(4021008,4011006,4021006,4003001,4003000));
			var matQtySet = new Array(new Array(7,2),new Array(1,20,5),new Array(1,50,8),new Array(2,1,1,10),new Array(5,5,3,50,15),new Array(1,8,4,2,30),new Array(2,6,30,30),new Array(2,5,3,40,40));
			var costSet = new Array (1000,2000,3000,10000,30000,50000,80000,200000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 2){ //glove refine
			var itemSet =  new Array(1082012,1082013,1082016,1082048,1082068,1082071,1082084,1082089);
			var matSet = new Array(new Array(4000021,4000009),new Array(4000021,4000009,4011001),new Array(4000021,4000009,4011006),new Array(4000021,4011006,4021001),new Array(4011000,4011001,4000021,4003000),
				new Array(4011001,4021000,4021002,4000021,4003000),new Array(4011004,4011006,4021002,4000030,4003000),new Array(4011006,4011007,4021006,4000030,4003000));
			var matQtySet = new Array(new Array(15,20),new Array(20,20,2),new Array(40,50,2),new Array(50,2,1),new Array(1,3,60,15),new Array(3,1,3,80,25),new Array(3,1,2,40,35),new Array(2,1,8,50,50));
			var costSet = new Array(5000,10000,15000,20000,30000,40000,50000,70000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 3){ //glove upgrade
			var itemSet = new Array (1082015,1082014,1082017,1082018,1082049,1082050,1082069,1082070,1082072,1082073,1082085,1082083,1082090,1082091);
			var matSet = new Array(new Array(1082013,4021003),new Array(1082013,4021000),new Array(1082016,4021000),new Array(1082016,4021008),new Array(1082048,4021003),new Array(1082048,4021008),
				new Array(1082068,4011002),new Array(1082068,4011006),new Array(1082071,4011006),new Array(1082071,4021008),new Array(1082084,4011000,4021000),new Array(1082084,4011006,4021008),
				new Array(1082089,4021000,4021007),new Array(1082089,4021007,4021008));
			var matQtySet = new Array (new Array(1,2),new Array(1,1),new Array(1,3),new Array(1,1),new Array(1,3),new Array(1,1),new Array(1,4),new Array(1,2),new Array(1,4),new Array(1,2),
				new Array(1,1,5),new Array(1,2,2),new Array(1,5,1),new Array(1,2,2));
			var costSet = new Array (7000,7000,10000,12000,15000,20000,22000,25000,30000,40000,55000,60000,70000,80000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 5){ //arrow refine
			var itemSet = new Array(2060000,2061000,2060001,2061001,2060002,2061002);
			var matSet = new Array(new Array (4003001,4003004),new Array (4003001,4003004),new Array (4011000,4003001,4003004),new Array (4011000,4003001,4003004),
				new Array (4011001,4003001,4003005),new Array (4011001,4003001,4003005));
			var matQtySet = new Array (new Array (1,1),new Array (1,1),new Array (1,3,10),new Array (1,3,10),new Array (1,5,15),new Array (1,5,15));
			var costSet = new Array (0,0,0,0,0,0)
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "你要我制作 ";
		if (qty == 1)
			prompt += "#r #t" + item + "##k?";
		else
			prompt += qty + " #t" + item + "#?";
			
		prompt += " 只要你有足够的材料我就可以做!#b";
		
		if (mats instanceof Array){
			for(var i = 0; i < mats.length; i++){
				prompt += "\r\n#i"+mats[i]+"# " + matQty[i] * qty + " #t" + mats[i] + "#";
			}
		}
		else {
			prompt += "\r\n#i"+mats+"# " + matQty * qty + " #t" + mats + "#";
		}
		
		if (cost > 0)
			prompt += "\r\n#i4031138# " + cost * qty + " 金币";
		
		cm.sendYesNo(prompt);
	}
	else if (status == 4 && mode == 1) {
		var complete = true;		
		if (cm.getMeso() < cost * qty)
			{
				cm.sendOk("对不起, 你没有足够的材料我不能帮你制作.")
			}
			else
			{
				if (mats instanceof Array) {
					for(var i = 0; complete && i < mats.length; i++)
					{
						if (matQty[i] * qty == 1)	{
							if (!cm.haveItem(mats[i]))
							{
								complete = false;
							}
						}
						else {
							var count = 0;
							var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(mats[i]).iterator();
							while (iter.hasNext()) {
								count += iter.next().getQuantity();
							}
							if (count < matQty[i] * qty)
								complete = false;
						}					
					}
				}
				else {
					var count = 0;
					var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(mats).iterator();
					while (iter.hasNext()) {
						count += iter.next().getQuantity();
					}
					if (count < matQty * qty)
						complete = false;
				}
			}
			
			if (!complete) 
				cm.sendOk("对不起，因为你没有足够的材料，所以我不能帮你制作.");
			else {
				if (mats instanceof Array) {
					for (var i = 0; i < mats.length; i++){
						cm.gainItem(mats[i], -matQty[i] * qty);
					}
				}
				else
					cm.gainItem(mats, -matQty * qty);
					
				if (cost > 0)
					cm.gainMeso(-cost * qty);
				
				if (item >= 2060000 && item <= 2060002) //bow arrows
					cm.gainItem(item, 1000 - (item - 2060000) * 100);
				else if (item >= 2061000 && item <= 2061002) //xbow arrows
					cm.gainItem(item, 1000 - (item - 2061000) * 100);
				else if (item == 4003000)//Screws
					cm.gainItem(4003000, 15 * qty);
				else
					cm.gainItem(item, qty);
				cm.sendOk("一个完美的制作, 你拿去看看吧.");
			}
		cm.dispose();
	}
}