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
/**
* @Author : iAkira/Kevintjuh93
**/
var status = 0; 
var selected = 0;

function start() {
	if (cm.getPlayer().getMapId() == 100000000) {
		cm.sendNext("那里！你看到了吗？刚才有飞碟经过！有人被拖进飞碟了……是嘎嘎！#r嘎嘎被飞碟绑架了！#k");
	} else if (cm.getPlayer().getMapId() == 922240200) {
		cm.sendSimple("你有什么事情吗？#b\r\n#L0#我要救嘎嘎#l\r\n#L1#我要去宇宙矿山#l");
	} else if (cm.getPlayer().getMapId() >= 922240000 && cm.getPlayer().getMapId() <= 922240019) {
		cm.sendYesNo("失败也不用担心，你有3次机会，仍要放弃吗？"); 
	} else if (cm.getPlayer().getMapId() >= 922240100 && cm.getPlayer().getMapId() <= 922240119) {
		var text = "你辛苦救出了嘎嘎，但看来又回到了原点。";				
		var rgaga = cm.getPlayer().getEvents().getGagaRescue();
		if (rgaga.getCompleted() == 10 || rgaga.getCompleted() == 20) {
			text += "请不要放弃，直到救出嘎嘎。为了感谢你的帮助，我送你一艘飞船。虽然有些旧，但还能使用，请查看#b技能窗口#k。";
			rgaga.giveSkill(cm.getPlayer());
		} else 
			text += "现在回去吧。";
					
		cm.sendNext(text); 
	}
}

function action(m,t,s) { 
	if (m > 0) {
		status++; 
		if (cm.getPlayer().getMapId() == 100000000) { // warper completed
			if (status == 1) {
				if (cm.getPlayer().getLevel() >= 12) 
					cm.sendYesNo("听说被外星人绑架会发生可怕的事情，嘎嘎也许正在遭遇危险。请救救他！#b他虽然有些迷糊#k，但心地善良。月亮上的爷爷也许知道怎么救他，我送你去月亮，请找爷爷帮忙。");
				else 
					cm.sendOk("需要达到12级才能救嘎嘎，请升级后再来。");
          
			} else if (status == 2)
				cm.sendNext("谢谢你，请救出嘎嘎，月亮上的爷爷会帮助你。");
			else if (status == 3) {
				cm.warp(922240200); 
				cm.dispose();
			}
		} else if (cm.getPlayer().getMapId() == 922240200) {
			if (status == 1) {
				if(s == 0) {
					selected = 1;
					cm.sendNext("欢迎！小月兔已经告诉我发生的事情。我正打算找人帮忙，嘎嘎是经常来打招呼的朋友，现在却被外星人绑架了。"); 
				} else {
					selected = 2;
					cm.sendYesNo("宇宙矿山有蕴含宇宙力量的#b氪晶石#k，通常呈绿色，受到飞船#b宇宙光束#k照射后会变成棕色。阻止外星人的阴谋需要#b10个棕色氪晶石和10个绿色氪晶石#k，即使只有#b1个氪晶石#k也有帮助，请尽量带来。矿山守卫受到氪晶石力量加持，十分强大，请不要尝试击败它们，专心尽快收集晶石。"); 
				} 
			} else if (status == 2) {
				if(selected == 1) {
					cm.sendYesNo("不能把嘎嘎留给外星人！我会借给你月兔的飞船。#b他虽然有些迟钝和不成熟#k，但人很好，你现在愿意去救他吗？");
				} else if(selected == 2) { 
					cm.sendOk("此功能尚未实现。"); 
					cm.dispose();
				}
			} else  if (status == 3) {
				var number = -1;
				for (var i = 0; i < 20; i++) {
					var mapFactory = cm.getClient().getChannelServer().getMapFactory();
					if (mapFactory.getMap(922240000 + i).getCharacters().isEmpty()) {
						number = i;
						break;
					}	    
				}
				if (number > -1) 
					cm.warp(922240000 + number);
				else 
					cm.sendOk("目前没有空闲地图，请稍后再试。");
				
				cm.dispose();
			}
		} else if ((cm.getPlayer().getMapId() >= 922240000 && cm.getPlayer().getMapId() <= 922240019) || (cm.getPlayer().getMapId() >= 922240100 && cm.getPlayer().getMapId() <= 922240119)) {
			cm.warp(922240200);
			cm.dispose();
		}
	} else if (m < 1) {
		if(m == 0) {
			if (cm.getPlayer().getMapId() == 922240200)  {
				cm.sendOk("准备好后再来吧。");
			}
		}
		cm.dispose();
	}
}