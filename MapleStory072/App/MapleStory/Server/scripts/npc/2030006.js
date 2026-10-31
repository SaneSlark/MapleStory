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

/* Holy Stone
	Hidden Street: Holy Ground at the Snowfield (211040401)
	
	Custom quest: 100102
*/

importPackage(net.sf.odinms.client);

var status = 0;
var quizDone=false,quizPaid=false,quizOrigin=-1;

function start() {
    quizDone=false;quizPaid=false;quizOrigin=cm.getMapId();
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if(quizDone)return;
    if(mode!=1 || cm.getMapId()!=quizOrigin || cm.getLevel()<70 || [110,120,130,210,220,230,310,320,410,420,510,520].indexOf(cm.getJob())<0 || !cm.haveItem(4031057,1) || cm.haveItem(4031058,1)){quizDone=true;cm.dispose();return;}
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("你好, 下次再见.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.haveItem(4031058) || !cm.haveItem(4031057)) {
				cm.sendOk(" 我是一个石头,你看不到我.");
				cm.dispose();
			} else {
				cm.sendNext("我是一个石头,你看不到我.");
			}
		} else if (status == 1) {
			cm.sendNextPrev("给我一颗#b黑暗水晶#k,我就让你回答一个问题,答对了就能获得#b智慧项链#k.");
		} else if (status == 2) {
			if (!cm.haveItem(4005004)) {
				cm.sendOk("呵呵, 你没有 #b黑暗水晶#k哦.");
				cm.dispose();
			} else {
				if(!cm.canHold(4031058,1)){quizDone=true;cm.sendOk("请先为智慧项链留出其他栏空间。");cm.dispose();return;}
                quizPaid=true;cm.gainItem(4005004, -1);
				cm.sendSimple("噜噜噜, 考验要开始了: \r\n魂的梦想?\r\n#L0#进军国足#l\r\n#L1#征服世界#l\r\n#L2#经营奸商#l\r\n#L3#追寻美女#l");
			}
		} else if (status == 3) {
            quizDone=true;
            if(!quizPaid || !cm.haveItem(4031057,1) || !cm.canHold(4031058,1)){cm.dispose();return;}
			if (selection == 2) {
				cm.gainItem(4031058, 1);
				cm.sendOk("完全正确, 噜噜.");
			} else {
				cm.sendOk("恭喜你,答错了.");
			}
			cm.dispose();
		}
	}
}	