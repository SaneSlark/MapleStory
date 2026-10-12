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

/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Chief Tatamo - Leafre(240000000)
-- By ---------------------------------------------------------------------------------------------
	Information
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Information
---------------------------------------------------------------------------------------------------
**/

var temp;
var cost;

function start() {
    qfresh = true;
	status = -1;
	action(1, 0, 0);
}

function qOrigAction(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
		return;
	}
	if(mode == 0 && (status == 0 || status == 1 || status == 2)) {
		cm.dispose();
		return;
	} else if(mode == 0) {
		cm.sendOk("请仔细考虑。做好决定之后，再来告诉我吧。");
		cm.dispose();
		return;
	}
	if(mode == 1) {
		status++;
	}
	if(status == 0) {
		cm.sendSimple("...有何吩咐?\r\n#L0##b购买魔法种子#k#l\r\n#L1##b别点#k#l");
	} else if(status == 1) {
		if(selection == 0) {
			cm.sendSimple("你看起来像是从外地来的吧,需要帮忙么#L0##b我有一些 #t4031346#.#k#l");
		} else {
			cm.sendNext("点了也白点...");
			cm.dispose();
		}
	} else if(status == 2) {
		cm.sendGetNumber("#b#t4031346##k 是很贵重物品,我不能就这样给你,当然我可以便宜点卖给你#b#t4031346##k 每个要 #b30,000 金币#k . 你准备买多少个?",0,0,99);
	} else if(status == 3) {
		if(selection == 0) {
			cm.sendOk("没有免费的午餐.");
			cm.dispose();
		} else {
			temp = selection;
			cost = temp * 30000;
			cm.sendYesNo("购买 #b"+temp+" 个#t4031346##k 需要 #b"+cost+" 金币#k. 你确定要购买吗?");
		}
	} else if(status == 4) {
		if(cm.getMeso() < cost || !cm.canHold(4031346)) {
			cm.sendOk("请检查包裹窗是否已满.");
		} else {
			cm.sendOk("欢迎下次光临~");
			cm.gainItem(4031346, temp);
			cm.gainMeso(-cost);
		}
		cm.dispose();
	}
}

function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
    qOrigAction(mode, type, selection);
}

/* AUTO-QUEST-BEGIN */
var qstatus = -1;
var qact = -1;
var qid = -1;
var qactive = false;
var qfresh = false;
function qQuestAction(mode, type, selection) {
    if (!qactive) {
        if (!qfresh || mode != 1) return false;
        qfresh = false;
    var opts = '';
    var n = 0;
    if (cm.getQuestStatus(10102) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? ???? ??" + "#l"; n++; }
    if (n == 0) return false;
    qact = -1;
    cm.sendSimple("有什么我能帮你的吗?\r\n" + opts);
    qactive = true;
    return true;
    }
    if (mode != 1) { cm.dispose(); return true; }
    qstatus++;
    if (qstatus == 0) {
        var qt = "";
        var qi = -1;
        qact = -1;
        qid = -1;
        if (cm.getQuestStatus(10102) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10102; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 10102) qt = "?? ???? ?????? ???? ?? ???? ??.";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 10102) cm.completeQuest(10102);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
