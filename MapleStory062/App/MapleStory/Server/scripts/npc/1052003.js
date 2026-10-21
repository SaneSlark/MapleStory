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

/* Mr. Thunder
	Victoria Road: Perion (102000000)
	
	Refining NPC: 
	* 矿石
	* 宝石
	* 盾牌
	* 头盔
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
		var selStr = "#k我可以帮你#r锻造宝石#k还有#r物品#k，听说这些宝石还可以#r兑换#k许多东西。只要你能收集到从怪物身上爆出的母矿。我很乐意帮你锻造。.#b"
		var options = new Array("提炼矿石","提炼宝石","升级头盔","升级盾");
		for (var i = 0; i < options.length; i++){
			selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}
			
		cm.sendSimple(selStr);
	}
	else if (status == 1 && mode == 1) {
		selectedType = selection;
		if (selectedType == 0){ //mineral refine
			var selStr = "那么, 你愿意拿什么种类的矿石来提炼?#b";
			var minerals = new Array ("青铜","钢铁","锂矿","朱矿","银矿","紫矿","金矿");
			for (var i = 0; i < minerals.length; i++){
				selStr += "\r\n#L" + i + "# " + minerals[i] + "#l";
			}
			cm.sendSimple(selStr);
			equip = false;
		}
		else if (selectedType == 1){ //jewel refine
			var selStr = "那么, 你愿意拿什么种类的宝石矿来提炼?#b";
			var jewels = new Array ("石榴石","紫水晶","深蓝宝石","绿宝石","蛋白石","蓝宝石","黄晶","钻石","黑水晶");
			for (var i = 0; i < jewels.length; i++){
				selStr += "\r\n#L" + i + "# " + jewels[i] + "#l";
			}
			cm.sendSimple(selStr);
			equip = false;
		}
		else if (selectedType == 2){ //helmet refine
			var selStr = "啊, 你希望加强一个头盔? 那么告诉我, 哪一个?#b";
			var helmets = new Array ("金属头箍#k - 全职业等级. 15#b","黄色金属帽#k - 全职业等级. 15#b","金属头盔#k - 携带等级. 10#b","锂矿头盔 #k - 携带等级. 10#b","钢铁帽#k - 携带等级. 12#b","锂矿帽#k - 携带等级. 12#b","铁制头具#k - 携带等级. 15#b",
				"锂矿头盔#k - 携带等级. 15#b","钢制海王头盔#k - 携带等级. 20#b","锂矿海王头盔#k - 携带等级. 20#b","钢铁橄榄球帽#k - 携带等级. 20#b","锂矿橄榄球帽#k - 携带等级. 20#b","锂矿尖头盔#k - 携带等级. 22#b","黄金尖头盔#k - 携带等级. 22#b",
				"紫矿骑士头盔#k - 携带等级. 25#b","黄金骑士头盔#k - 携带等级. 25#b","红色战斗头盔#k - 携带等级. 35#b","蓝色战斗头盔#k - 携带等级. 35#b","锂矿诺曼头盔#k - 携带等级. 40#b","黄金诺曼头盔#k - 携带等级. 40#b","锂矿十字军帽#k - 携带等级. 50#b",
				"银制十字军帽#k - 携带等级. 50#b","旧诺曼头盔#k - 携带等级. 55#b","旧锂矿诺曼头盔#k - 携带等级. 55#b");
			for (var i = 0; i < helmets.length; i++){
				selStr += "\r\n#L" + i + "# " + helmets[i] + "#l";
			}
			cm.sendSimple(selStr);
			equip = true;
		}
		else if (selectedType == 3){ //shield refine
			var selStr = "啊, 你希望加强一个盾牌? 那么告诉我你要加工哪一个?#b";
			var shields = new Array ("朱矿方盾#k - 携带等级. 40#b","锂矿方盾#k - 携带等级. 40#b","古老银盾#k - 携带等级. 60#b","古老朱矿盾#k - 携带等级. 60#b");
			for (var i = 0; i < shields.length; i++){
				selStr += "\r\n#L" + i + "# " + shields[i] + "#l";
			}
			cm.sendSimple(selStr);
			equip = true;
		}
		if (equip)
			status++;
	}
	else if (status == 2 && mode == 1) {
		selectedItem = selection;
		if (selectedType == 0){ //mineral refine
			var itemSet = new Array(4011000,4011001,4011002,4011003,4011004,4011005,4011006);
			var matSet = new Array(4010000,4010001,4010002,4010003,4010004,4010005,4010006);
			var matQtySet = new Array(10,10,10,10,10,10,10);
			var costSet = new Array(300,300,300,500,500,500,800);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 1){ //jewel refine
			var itemSet = new Array(4021000,4021001,4021002,4021003,4021004,4021005,4021006,4021007,4021008);
			var matSet = new Array(4020000,4020001,4020002,4020003,4020004,4020005,4020006,4020007,4020008);
			var matQtySet = new Array(10,10,10,10,10,10,10,10,10);
			var costSet = new Array (500,500,500,500,500,500,500,1000,3000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "你想做多少个 #r#t" + item + "##k? 你准备好材料了嘛?";
		
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

		if (selectedType == 2){ //helmet refine
			var itemSet = new Array(1002042,1002041,1002002,1002044,1002003,1002040,1002007,1002052,1002011,1002058,1002009,1002056,1002087,1002088,1002049,1002050,1002047,1002048,1002099,1002098,1002085,1002028,1002022,1002101);
			var matSet = new Array(new Array(1002001,4011002),new Array(1002001,4021006),new Array(1002043,4011001),new Array(1002043,4011002),new Array(1002039,4011001),new Array(1002039,4011002),new Array(1002051,4011001),new Array(1002051,4011002),new Array(1002059,4011001),new Array(1002059,4011002),
				new Array(1002055,4011001),new Array(1002055,4011002),new Array(1002027,4011002),new Array(1002027,4011006),new Array(1002005,4011006),new Array(1002005,4011005),new Array(1002004,4021000),new Array(1002004,4021005),new Array(1002021,4011002),new Array(1002021,4011006),new Array(1002086,4011002),
				new Array(1002086,4011004),new Array(1002100,4011007,4011001),new Array(1002100,4011007,4011002));
			var matQtySet = new Array(new Array(1,1),new Array(1,1),new Array(1,1),new Array(1,1),new Array(1,1),new Array(1,1),new Array(1,2),new Array(1,2),new Array(1,3),new Array(1,3),new Array(1,3),new Array(1,3),new Array(1,4),new Array(1,4),new Array(1,5),new Array(1,5),new Array(1,3),new Array(1,3),
				new Array(1,5),new Array(1,6),new Array(1,5),new Array(1,4),new Array(1,1,7),new Array(1,1,7));
			var costSet = new Array(500,300,500,800,500,800,1000,1500,1500,2000,1500,2000,2000,4000,4000,5000,8000,10000,12000,15000,20000,25000,30000,30000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 3){ //shield refine
			var itemSet = new Array (1092014,1092013,1092010,1092011);
			var matSet = new Array(new Array (1092012,4011003),new Array (1092012,4011002),new Array (1092009,4011007,4011004),new Array (1092009,4011007,4011003));
			var matQtySet = new Array (new Array (1,10),new Array (1,10),new Array (1,1,15),new Array (1,1,15));
			var costSet = new Array (100000,100000,120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "你要我做";
		if (qty == 1)
			prompt += "#r #t" + item + "##k？";
		else
			prompt += qty + " #t" + item + "#?";
			
		prompt += " 那你必须给我足够的材料!#b";
		
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
				cm.sendOk("恐怕你付不起我的手工费。")
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
				cm.sendOk("你没有足够的材料哦，凑齐材料在来吧，我等着你.");
			else {
				if (mats instanceof Array) {
					for (var i = 0; i < mats.length; i++){
						cm.gainItem(mats[i], -matQty[i] * qty);
					}
				}
				else
					cm.gainItem(mats, -matQty * qty);
					
				cm.gainMeso(-cost * qty);
				cm.gainItem(item,qty);
				cm.sendOk("一个完美的制作，那去看看吧.");
			}
		cm.dispose();
	}
}