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

/* Pison
	Warp NPC to Lith Harbor (104000000)
	located in Florina Beach (110000000)
*/

var status = 0;

function recoveredOriginalStart() {
    status = -1;
    action(1, 0, 0);
}

function recoveredOriginalAction(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("你想去挑战 #bPB最后一关#k 吗？");
        } else if (status == 1) {
            if(cm.getLevel() >= 150 ){  
                if (cm.getParty() == null) { 
                    cm.sendOk("#e你好像还没有一个队伍,我是不能送你进去的."); 
                    cm.dispose(); 
                    } 
            if (!cm.isLeader()) { 
                cm.sendSimple("如果你想挑战一下PB, 那么你只能自己开队伍,一个人去单挑,所以不能和人家组队！"); 
                cm.dispose(); 
                    }else { 
            var party = cm.getParty().getMembers(); 
            var next = true; 
                if (party.size() > 6){  
                    next = false; 
                    } 
                if (next) { 
            var em = cm.getEventManager("PB5");  
                if (em == null) { 
                    cm.sendOk("错误！"); 
                } else {  
                em.startInstance(cm.getParty(),cm.getChar().getMap()); 
                party = cm.getChar().getEventInstance().getPlayers(); 
                cm.removeFromParty(4001008, party); 
                cm.removeFromParty(4001007, party);  
                } 
            cm.serverNotice("[居民挑战使者]玩家:" + cm.c.getPlayer().getName() + " 带着绝招,进入了神的黄昏开始挑战PB!~~");
            cm.dispose(); 
                    } 
                } 
            }else{ 
                cm.sendOk("#e#r对不起,你的等级太低,去了也是送死."); 
                cm.dispose(); 
            }
        }
    }
}



// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":9494,"name":"基诺科 的最后一个请求","startNpc":9110002,"endNpc":9310011},{"id":9495,"name":"街头小贩老板 叶耀 的新菜单","startNpc":9310011,"endNpc":9310011},{"id":9496,"name":"曹摄影师的中国指南","startNpc":9310011,"endNpc":9310012}];
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
