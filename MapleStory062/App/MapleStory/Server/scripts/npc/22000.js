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
	Shanks - Maple Road : Southperry (60000)
-- By ---------------------------------------------------------------------------------------------
	Xterminator
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Xterminator
---------------------------------------------------------------------------------------------------
**/

var status = 0;

function start() {
    qfresh = true;
	status = -1;
	action(1, 0, 0);
}

function qOrigAction(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status >= 0 && mode == 0) {
		cm.sendOk("恩... 我想你还不打算离开这里?");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendYesNo("这是开往明珠港的船. 您只需 #e150 金币#n, 即可前往明珠港#k. 那边将有更大的挑战等着你,准备好了么?");
	} else if (status == 1) {
		if (cm.haveItem(4031801)) {
			cm.sendNext("好了, 您需要 #e150 金币#n... 我想你现在还没那么多钱,打蜗牛可以赚很多钱的,等你有 #e150 金币#n,再来找我也不迟.");
		} else {
			cm.sendNext("你确定要离开么?那么先给我 #e150 金币...");
		}
	} else if (status == 2) {
		if (cm.haveItem(4031801)) {
			cm.sendNextPrev("既然你有简的推荐信,我将免费送你到明珠港,我相信你会成为真正的冒险家,再会!!");
		} else {
			if (cm.getLevel() >= 7) {
				if (cm.getMeso() < 150) {
					cm.sendOk("我想你现在还没那么多钱,等你有 #e150 金币#n,再来找我也不迟.");
					cm.dispose();
				} else {
					cm.sendNext("再见,我会想你的.");
				}
			} else {
				cm.sendOk("我想象... 你现在还需要多锻炼锻炼. 等你到7级以后就可以前往明珠港.");
				cm.dispose();
			}
		}
	} else if (status == 3) {
		if (cm.haveItem(4031801)) {
			cm.gainItem(4031801, -1);
			cm.warp(104000000);
			cm.dispose();
		} else {
			cm.gainMeso(-150);
			cm.warp(104000000);
			cm.dispose();
			}
		}
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
    if ((cm.getQuestStatus(1028) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() <= 10) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(1027) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1042003, 1))) { opts += "\r\n#L" + n + "#[接受] " + "迈向利斯海港！" + "#l"; n++; }
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
        if ((cm.getQuestStatus(1028) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() <= 10) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(1027) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1042003, 1))) { qi++; if (selection == qi) { qact = 0; qid = 1028; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 1028) qt = "听#p12000#的吩咐，想给#p1002101#传话的话，得去维多利亚岛。想去维多利亚岛的话只有给 #m60000#的#p22000#钱一种方法…… 幸好#p12000#已经提前和#p22000#打过招呼了。没什么可担心的，先去#b#p22000##k那儿吧。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
        } else {
            if (qid == 1028) cm.startQuest(1028);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
