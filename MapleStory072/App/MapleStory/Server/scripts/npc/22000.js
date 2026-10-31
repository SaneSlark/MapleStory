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
/* CMS client Quest.wz Check/QuestInfo/Say; server validates requirements and applies Act rewards. */
var qstatus=-1, qactive=false, qfresh=false, qchosen=null, qchoices=[];
var qdata=[[1026, 1, "给桑克斯送营养饮料", "恩？什么事？啊…… 这不是#p2103#特效营养饮料吗？是受#p2103#的委托来的吧？真是感谢！有一个善良的恋人真是幸福哦。"], [1028, 0, "迈向明珠港！", ""]];
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
