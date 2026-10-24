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


/*
 

*/
var status = 0;
var price = 20000;
var map = Array(209000000);

function recoveredOriginalStart() {
	status = -1;
	action(1, 0, 0);
}

function recoveredOriginalAction(mode, type, selection) {
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
		        if (status == 0){                                                                             cm.sendNext("游戏中最多只能放#r21亿#k,超过就会变#b负数#k.我可以帮你把装不下的金币兑换成等价的金箱子。#r10亿#k换一个#b金箱子#k。\r\n当然你也可以用金箱子换成金币!不过要收一点手续费。");
			}
			if (status == 1) {
			cm.sendSimple("#L1#我要#r10亿#k兑换#b金箱子#k  #v4001102#\r\n#L2#我要#b金箱子#k兑换#r9.5亿金币#k #i4031138#");
			}                                                                                    else if (status == 2) {
			if (selection == 1) {
                        if (cm.getMeso() >= 1000000000){
                               cm.gainMeso(-1000000000); 
                               cm.gainItem(4001102, 1);
                               cm.sendOk("您的金箱子兑换成功！请好好保存！");
} else {
cm.sendOk("你的钱还不够换哦.请你凑到21亿在来换取#K");         }                    
cm.dispose();

			} else if (status == 3) {
                 } else if(cm.haveItem(4001102) && (cm.getMeso() <= 950000000)){
                                        cm.gainItem(4001102, -1);
                                        cm.gainMeso(950000000); 
					cm.dispose();
}else{
cm.sendOk("#rNO.1_#k 请确认你包裹里有没有金箱子！\r\n#rNO.2_#k麻烦把你的背包清理下！");
cm.dispose();
                              
			}
}
}
}

// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":4996,"name":"异世界的传统","startNpc":9201091,"endNpc":9201091},{"id":4998,"name":"祝你异世界圣诞快乐","startNpc":9201091,"endNpc":9201091}];
var recoveredMenu = null;
function start() {
    var reader = new java.util.Scanner(new java.io.File("scripts/npc/legacy.js"), "GBK");
    try {
        var factory = eval(String(reader.useDelimiter("(?!)").next()));
        recoveredMenu = factory(cm, recoveredDefs, recoveredOriginalStart, recoveredOriginalAction, "暂时没有可以接取或交付的任务。");
    } finally { reader.close(); }
    recoveredMenu.start();
}
function action(mode, type, selection) {
    if (recoveredMenu) recoveredMenu.action(mode, type, selection);
    else cm.dispose();
}
