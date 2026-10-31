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

/* JM from tha Streetz
	Victoria Road: Kerning City (103000000)
	
	Refining NPC: 
	* 手套
	* 升级手套
	* Claw
	* Claw Upgrade
	* Processed Wood/Screws

	* Note: JM by default is used as a Megaphone shop. To move this shop to Frederick in the FM,
	* following MySQL command:
	* UPDATE `shops` SET `npcid`='9030000' WHERE (`shopid`='0')
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
    qfresh = true;
	status = -1;
	action(1, 0, 0);
}

function qOrigAction(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		cm.dispose();
	if (status == 0 && mode == 1) {
		var selStr = "#r请问你要需要我干什么..我是专业的手套制造商~~#r  #k.#b"
		var options = new Array("制作手套","升级手套","制作拳套","升级拳套","制作材料");
		for (var i = 0; i < options.length; i++){
			selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}
			
		cm.sendSimple(selStr);
	}
	else if (status == 1 && mode == 1) {
		selectedType = selection;
		if (selectedType == 0){ //glove refine
			var selStr = "那么,请问你要制作什么?#b";
			var gloves = new Array ("工地手套#k - 全职业等级. 10#b","褐短指手套#k - 携带等级. 15#b","蓝短指手套#k - 携带等级. 15#b","黑短指手套#k - 携带等级. 15#b","青铜飞侠手套#k - 携带等级. 20#b","青铜精神手套#k - 携带等级. 25#b","钢铁暴风手套#k - 携带等级. 30#b",
				"钢铁追击手套#k - 携带等级. 35#b","红侠客手套#k - 携带等级. 40#b","青月手套#k - 携带等级. 50#b","青铜柔丝手套#k - 携带等级. 60#b");
			for (var i = 0; i < gloves.length; i++){
				selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
			}
			equip = true;
			cm.sendSimple(selStr);
		}
		else if (selectedType == 1){ //glove upgrade
			var selStr = "想升级手套? 没问题，不过要注意，原装备的升级次数不会继承到新装备上... #b";
			var gloves = new Array ("锂矿飞侠手套#k - 携带等级. 20#b","黑飞侠手套#k - 携带等级. 20#b","锂矿精神手套#k - 携带等级. 25#b",
				"黑精神手套#k - 携带等级. 25#b","银暴风手套#k - 携带等级. 30#b","黄金暴风手套#k - 携带等级. 30#b","紫矿追击手套#k - 携带等级. 35#b","黄金追击手套#k - 携带等级. 35#b","黄金侠客手套#k - 携带等级. 40#b",
				"黑侠客手套#k - 携带等级. 40#b","赤月手套#k - 携带等级. 50#b","黄月手套#k - 携带等级. 50#b","钢铁柔丝手套#k - 携带等级. 60#b","黄金柔丝手套#k - 携带等级. 60#b");
			for (var i = 0; i < gloves.length; i++){
				selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
			}
			equip = true;
			cm.sendSimple(selStr);
		}
		else if (selectedType == 2){ //claw refine
			var selStr = "那么，你想让我制作哪种拳套?#b";
			var claws = new Array ("钢铁拳套#k - 携带等级.15#b","青铜指虎#k - 携带等级. 20#b","狼牙#k - 携带等级. 25#b","钢铁斗拳#k - 携带等级. 30#b","青铜守护拳套#k - 携带等级. 35#b","钢铁护腕#k - 携带等级. 40#b","钢铁手甲#k - 携带等级. 50#b");
			for (var i = 0; i < claws.length; i++){
				selStr += "\r\n#L" + i + "# " + claws[i] + "#l";
			}
			equip = true;
			cm.sendSimple(selStr);
		}
		else if (selectedType == 3){ //claw upgrade
			var selStr = "想升级拳套? 没问题，不过要注意，原装备的升级次数不会继承到新装备上...#b";
			var claws = new Array ("锂矿拳套#k - 携带等级. 15#b","黄金拳套#k - 携带等级. 15#b","钢铁指虎#k - 携带等级. 20#b","朱矿指虎#k - 携带等级. 20#b","锂矿斗拳#k - 携带等级. 30#b","朱矿斗拳#k - 携带等级. 30#b",
			"银守护拳套#k - 携带等级. 35#b","黑守护拳套#k - 携带等级. 35#b","赤红护腕#k - 携带等级. 40#b","朱矿护腕#k - 携带等级. 40#b","黑护腕#k - 携带等级. 40#b","赤红手甲#k - 携带等级. 50#b","蓝宝手甲#k - 携带等级. 50#b");
			for (var i = 0; i < claws.length; i++){
				selStr += "\r\n#L" + i + "# " + claws[i] + "#l";
			}
			equip = true;
			cm.sendSimple(selStr);
		}
		else if (selectedType == 4){ //material refine
			var selStr = "制作材料?好的,你只要有足够的原料我就可以帮你制作#b";
			var materials = new Array ("树枝做木块","木块做木板","螺丝钉 (15个)");
			for (var i = 0; i < materials.length; i++){
				selStr += "\r\n#L" + i + "# " + materials[i] + "#l";
			}
			equip = false;
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
			var costSet = new Array (0,0,0);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "你要制作 #r#t" + item + "##k? 那么，你的材料准备好了吗?";
		
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

		if (selectedType == 0){ //glove refine
			var itemSet = new Array(1082002,1082029,1082030,1082031,1082032,1082037,1082042,1082046,1082075,1082065,1082092);
			var matSet = new Array(4000021,new Array(4000021,4000018),new Array(4000021,4000015),new Array(4000021,4000020),new Array(4011000,4000021),new Array(4011000,4011001,4000021),new Array(4011001,4000021,4003000),new Array(4011001,4011000,4000021,4003000),new Array(4021000,4000014,4000021,4003000),new Array(4021005,4021008,4000030,4003000),new Array(4011007,4011000,4021007,4000030,4003000));
			var matQtySet = new Array(15,new Array(30,20),new Array(30,20),new Array(30,20),new Array(2,40),new Array(2,1,10),new Array(2,50,10),new Array(3,1,60,15),new Array(3,200,80,30),new Array(3,1,40,30),new Array(1,8,1,50,50));
			var costSet = new Array(1000,7000,7000,7000,10000,15000,25000,30000,40000,50000,70000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 1){ //glove upgrade
			var itemSet = new Array(1082033,1082034,1082038,1082039,1082043,1082044,1082047,1082045,1082076,1082074,1082067,1082066,1082093,1082094);
			var matSet = new Array(new Array(1082032,4011002),new Array(1082032,4021004),new Array(1082037,4011002),new Array(1082037,4021004),new Array(1082042,4011004),new Array(1082042,4011006),new Array(1082046,4011005),new Array(1082046,4011006),new Array(1082075,4011006),new Array(1082075,4021008),new Array(1082065,4021000),new Array(1082065,4011006,4021008),new Array(1082092,4011001,4000014),new Array(1082092,4011006,4000027));
			var matQtySet = new Array(new Array(1,1),new Array(1,1),new Array(1,2),new Array(1,2),new Array(1,2),new Array(1,1),new Array(1,3),new Array(1,2),new Array(1,4),new Array(1,2),new Array(1,5),new Array(1,2,1),new Array(1,7,200),new Array(1,7,150));
			var costSet = new Array (5000,7000,10000,12000,15000,20000,22000,25000,40000,50000,55000,60000,70000,80000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 2){ //claw refine
			var itemSet = new Array(1472001,1472004,1472007,1472008,1472011,1472014,1472018);
			var matSet = new Array(new Array(4011001,4000021,4003000),new Array(4011000,4011001,4000021,4003000),new Array(1472000,4011001,4000021,4003001),new Array(4011000,4011001,4000021,4003000),new Array(4011000,4011001,4000021,4003000),new Array(4011000,4011001,4000021,4003000),new Array(4011000,4011001,4000030,4003000));
			var matQtySet = new Array(new Array(1,20,5),new Array(2,1,30,10),new Array(1,3,20,30),new Array(3,2,50,20),new Array(4,2,80,25),new Array(3,2,100,30),new Array(4,2,40,35));
			var costSet = new Array(2000,3000,5000,15000,30000,40000,50000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 3){ //claw upgrade
			var itemSet = new Array (1472002,1472003,1472005,1472006,1472009,1472010,1472012,1472013,1472015,1472016,1472017,1472019,1472020);
			var matSet = new Array(new Array(1472001,4011002),new Array(1472001,4011006),new Array(1472004,4011001),new Array(1472004,4011003),new Array(1472008,4011002),new Array(1472008,4011003),new Array(1472011,4011004),new Array(1472011,4021008),new Array(1472014,4021000),new Array(1472014,4011003),new Array(1472014,4021008),new Array(1472018,4021000),new Array(1472018,4021005));
			var matQtySet = new Array (new Array(1,1),new Array(1,1),new Array(1,2),new Array(1,2),new Array(1,3),new Array(1,3),new Array(1,4),new Array(1,1),new Array(1,5),new Array(1,5),new Array(1,2),new Array(1,6),new Array(1,6));
			var costSet = new Array (1000,2000,3000,5000,10000,15000,20000,25000,30000,30000,35000,40000,40000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "你要我帮你制作 ";
		if (qty == 1)
			prompt += "#r #t" + item + "##k？";
		else
			prompt += qty + " #t" + item + "#?";
			
		prompt += " 好的，你只要准备好以下材料我就可以帮你做了!#b";
		
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
				cm.sendOk("你没有足够的材料，请准备好材料再来.");
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
				
				if (item == 4003000)//screws
					cm.gainItem(4003000, 15 * qty);
				else
					cm.gainItem(item, qty);
				cm.sendOk("OK.做好了，那去瞧瞧吧。");
			}
		cm.dispose();
	}
}
function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
    qOrigAction(mode, type, selection);
}

/* AUTO-QUEST-BEGIN */
/* CMS client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[2213, 0, "吉姆的阴谋论", "……嘘，小声点。可能会有人躲在旁边偷听……你是听说消息之后来帮我揭开阴谋论的吗？你看上去虽然像是冒险家，但是怎么看上去那么弱啊……这次的事情可不容易，你真的没问题吗？嗯？你问我是什么事情？"], [2213, 1, "吉姆的阴谋论", "打猎到足够多的#o3110100#和#o5130103#了吗？呵呵～你能搜集到鳄鱼皮，我就放心了。好吧，我就相信你一次。你过一会儿再来找我，我会和你详细说明这件事情。"], [2214, 0, "沼泽地带的棚屋", "首先应该从搜集情报入手，是吧？是谁在策划这个阴谋，还有#o6220000#到底是什么样的怪物……有关的情报，分散于废弃都市各地的情报员们已经在进行调查了。"], [2215, 0, "找回皱巴巴的纸片", "嗯……你找到和#o6220000#有关的阴谋的线索吧？什么？你把情报员名单弄丢了？要是被谁捡到了怎么办啊？！你难道不知道秘密是情报员的生命吗？！"], [2220, 0, "情报收集完成", "如果你从情报员们那里获得了所有的情报，就先进行一下阶段报告吧。要想找到这一巨大阴谋的线索，需要尽可能多地搜集情报……#p9000008#搜集到的情报是什么呢？\\n\\r#L0##b他说多尔长得和鳄鱼都一样。#l\\n\\n#L1#好像是说多尔和黑鳄鱼有点像……？\\n#l\\n#L2#那个人不是外国人吧？#l#k"], [2221, 0, "阴谋论的始末", "对了，拉克里斯是怎么说的？……果然罪犯就是她吧？这个笨女人！同样的错误到底要犯几次啊！绿水灵王还不够，这次又是#o6220000#？又在募集冒险家？绿水灵王都还没清除掉，又要募集？到底什么时候才能不这么疯啊！\\n\\r#L0##b镇、镇静……#k#l"], [2221, 1, "阴谋论的始末", "#o6220000#都已经消灭了吗？呼……谢谢你。这件事情你真是辛苦了。又要搜集情报，又得打猎鳄鱼……呼。真是很对不住。虽然不知道能不能称为报答，我可以帮你提高一些人气度。"]];
function qQuestAction(mode,type,selection) {
    if (!qactive) {
        if (!qfresh || mode!=1) return false;
        qfresh=false; qchoices=[];
        var menu="";
        for(var i=0;i<qdata.length;i++) {
            var d=qdata[i], state=cm.getQuestStatus(d[0]);
            var quest=Packages.server.quest.MapleQuest.getInstance(d[0]);
            if ((d[1]==0 && quest.canStart(cm.getPlayer(),cm.getNpc())) || (d[1]==1 && state==1)) {
                menu+="\r\n#L"+qchoices.length+"#"+(d[1]==0?"[接受] ":"[完成] ")+d[2]+"#l";
                qchoices.push(d);
            }
        }
        if(qchoices.length==0) return false;
        if(typeof qOrigAction=="function") menu+="\r\n#L"+qchoices.length+"#其他服务与对话#l";
        qactive=true; qstatus=0; cm.sendSimple(menu); return true;
    }
    if(mode!=1) { qactive=false; qfresh=false; cm.dispose(); return true; }
    if(qstatus==0) {
        if(selection==qchoices.length && typeof qOrigAction=="function") {qactive=false;return false;}
        if(selection<0 || selection>=qchoices.length) { cm.dispose(); return true; }
        qchosen=qchoices[selection]; qstatus=1;
        cm.sendYesNo(qchosen[3] || qchosen[2]); return true;
    }
    if(qstatus==1) {
        qstatus=2;
        var q=Packages.server.quest.MapleQuest.getInstance(qchosen[0]);
        if(qchosen[1]==0) {
            if(q.canStart(cm.getPlayer(),cm.getNpc())) { cm.startClientNpcQuest(qchosen[0]); return true; }
        } else {
            if(q.canComplete(cm.getPlayer(),null)) { cm.completeClientNpcQuest(qchosen[0]); return true; }
            else cm.sendOk("任务条件尚未完成，请查看任务栏中的物品和狩猎要求。");
        }
        cm.dispose(); return true;
    }
    cm.dispose(); return true;
}
/* AUTO-QUEST-END */
