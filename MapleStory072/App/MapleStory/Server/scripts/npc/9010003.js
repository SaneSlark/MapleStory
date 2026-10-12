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

/* Ria
	lolcastle NPC
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
		if (cm.getChar().getMapId() != 101000000) {
			cm.dispose();
			return;
		}
		if (mode == 0) {
			cm.sendOk("好的,下次再见.");
			cm.dispose();
			return;
		}
		status++;
		if (status == 0) {
			cm.sendNext("我是Ria. 你可以花#b"+cm.getChar().getLevel()*100000+"金币#k 我可以送你去 #r领地的决判#k.");
		} else if (status == 1) {
			cm.sendYesNo("你想要进入 #r领地的决判#k 吗?\r\n价格计算:#b等级 x 100000#k金币");
		} else if (status == 2) {
			var em = cm.getEventManager("lolcastle");
			if (em == null || !em.getProperty("entryPossible").equals("true")) {
				cm.sendOk("对不起,因为 #r领地的决判#k 已经关闭[价格预计:#b"+cm.getChar().getLevel()*100000+"#k金币].\r\n#r领地的决判#k活动只在整点开放,会提前5分钟发送公告\r\n活动详情请查看:#bhttp://www.coffeemxd.cn/bbs#k");
			} else if (cm.getMeso() < cm.getChar().getLevel()*100000) {
				cm.sendOk("你没有足够的金币.");
			} else if (cm.getChar().getLevel() < 21) {
				cm.sendOk("你至少要21级才能进入 #r领地的决判.#k");
			} else if (cm.getChar().getLevel() >= 21 && cm.getChar().getLevel() < 31) {
				cm.gainMeso(-cm.getChar().getLevel()*100000);
				em.getInstance("lolcastle1").registerPlayer(cm.getChar());
			} else if (cm.getChar().getLevel() >= 31 && cm.getChar().getLevel() < 51) {
				cm.gainMeso(-cm.getChar().getLevel()*100000);
				em.getInstance("lolcastle2").registerPlayer(cm.getChar());
			} else if (cm.getChar().getLevel() >= 51 && cm.getChar().getLevel() < 71) {
				cm.gainMeso(-cm.getChar().getLevel()*100000);
				em.getInstance("lolcastle3").registerPlayer(cm.getChar());
			} else if (cm.getChar().getLevel() >= 71 && cm.getChar().getLevel() < 91) {
				cm.gainMeso(-cm.getChar().getLevel()*100000);
				em.getInstance("lolcastle4").registerPlayer(cm.getChar());
			} else {
				cm.gainMeso(-cm.getChar().getLevel()*100000);
				em.getInstance("lolcastle5").registerPlayer(cm.getChar());
			}
			cm.dispose();
		}
	}
}
