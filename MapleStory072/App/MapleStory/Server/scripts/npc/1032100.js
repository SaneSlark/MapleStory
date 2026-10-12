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

/* Arwen
	Victoria Road: Ellinia (101000000)
	
	Refining NPC: 
	* Moon/Star Rocks
	* Special: Black Feather - Flaming Feather + Moon Rock + Black Crystal
	* Only available to Lv. 40+
*/

importPackage(net.sf.odinms.client);

var status = 0;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var qty = 1;
var equip = false;

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
		if (cm.getLevel() >= 40) {
			var selStr = "我只做极其#r稀有#k的物品#b"
			var options = new Array("提炼月石","提炼星石","创造黑羽毛");
			for (var i = 0; i < options.length; i++){
				selStr += "\r\n#L" + i + "# " + options[i] + "#l";
			}
				
			cm.sendSimple(selStr);
		}
		else
		{
			cm.sendOk("不，我不知道你在说些什么");
			cm.dispose();
		}
	}
	else if (status == 1 && mode == 1) {
		selectedItem = selection;
		var itemIDs = new Array(4011007,4021009,4031042);
		var matIDs = new Array(new Array(4011000,4011001,4011002,4011003,4011004,4011005,4011006), new Array(4021000,4021001,4021002,4021003,4021004,4021005,4021006,4021007,4021008),
			new Array(4001006,4011007,4021008));
		var matQtySet = new Array(new Array(1,1,1,1,1,1,1),new Array(1,1,1,1,1,1,1,1,1),new Array(1,1,1));
		var costSet = new Array(10000,15000,30000);
		
		item = itemIDs[selection];
		mats = matIDs[selection];
		matQty = matQtySet[selection];
		cost = costSet[selection];
		
		if (selection == 2) {
			equip = true;
			cm.sendNext("... #t" + item + "#? 我有一段时间未做那些当中的一个…给我一秒钟刷新我的记忆… ");
		}
		else {
			equip = false;
			cm.sendGetNumber("我很熟悉 #t" + item + "#, 那些您要我做多少",1,1,100);
		}
	}
	else if (status == 2 && mode == 1) {
		qty = selection;
		var prompt = "您要我做 "
		
		if (equip) {
			qty = 1;
		}
			
		if (qty == 1) {
			prompt += "#r #t" + item + "##k？"
		}
		else {
			prompt += qty + " #t" + item + "#s?";
		}
		 
		 prompt += " 只有那些毅力不倒的人有可能拥有，只要你能收集到地上#r所有的金属#k，我会帮制作，我相信你可以做到。#b";
		
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
	else if (status == 3 && mode == 1) {
		var complete = true;
		
		if (cm.getmeso() < cost * qty)
			{
				cm.sendOk("对不起,制作东东可不是是免费的.")
			}
			else
			{
				if (mats instanceof Array) {
					for(var i = 0; complete && i < mats.length; i++)
					{
						if (matQty[i] * qty == 1){
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
					if (count < matQty  * qty)
						complete = false;
				}
			}
			
			if (!complete) 
				cm.sendOk("我抱歉，但是我需要那些项目做您要的项目.");
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
				
				cm.gainItem(item, qty);
				cm.sendOk("明智地使用它.");
			}
		cm.dispose();
	}
}