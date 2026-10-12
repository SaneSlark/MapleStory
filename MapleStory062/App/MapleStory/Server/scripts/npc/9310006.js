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

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("你想去挑战 #b大王蜈蚣#k 吗？");
        } else if (status == 1) {
            if(cm.getLevel() >= 100 ){  
                if (cm.getParty() == null) { 
                    cm.sendOk("#e你好像还没有一个队伍,我是不能送你进去的."); 
                    cm.dispose(); 
                    } 
            if (!cm.isLeader()) { 
                cm.sendSimple("如果你想挑战一下蜈蚣, 那么你只能自己开队伍,一个人去单挑,所以不能和人家组队！"); 
                cm.dispose(); 
                    }else { 
            var party = cm.getParty().getMembers(); 
            var next = true; 
                if (party.size() > 6){  
                    next = false; 
                    } 
                if (next) { 
            var em = cm.getEventManager("PB");  
                if (em == null) { 
                    cm.sendOk("错误！"); 
                } else {  
                em.startInstance(cm.getParty(),cm.getChar().getMap()); 
                party = cm.getChar().getEventInstance().getPlayers(); 
                cm.removeFromParty(4001008, party); 
                cm.removeFromParty(4001007, party);  
                } 
            cm.serverNotice("[蜈蚣BOSS挑战]玩家:" + cm.c.getPlayer().getName() + " 进入了危险地山丘开始挑战蜈蚣!~~");
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