/*
-- odinms JavaScript --
        NPC脚本 
-------------------------
   odinms MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/

var status = 0;

function start() {
    qfresh = true;
	action(1, 0, 0);
}

function qOrigAction(mode, type, selection) {
	if (status == 0) {
		cm.sendYesNo("#r#e欢迎来到新手训练营最后阶段, 为了以后继续冒险；\r\n你必须战胜这些花蘑菇  拿到以下物品： \r\n#b#v4000001##kx5");
		status++;
	} else {
		if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) {
			cm.dispose();
		} else {
			if (status == 1) {
				if(cm.haveItem(4000001)) {
					cm.gainItem(4000001, -5);
					cm.warp(104000000, 0);
                                        cm.showEffect("quest/party/clear");
                                        cm.playSound("Party1/Clear");
                                        cm.gainExp(500000);
                                        cm.dispose();
				} else {
					cm.sendOk("#r#e你尚未得到蘑菇盖，杀死它们拿到5个盖子你就可以离开。如果你认为这很难，那么我左边的助手将会帮助你。使用一些技能！#k");
					cm.dispose();
				}
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
    if (cm.getQuestStatus(9927) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "和假面绅士的对话" + "#l"; n++; }
    if (cm.getQuestStatus(9936) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "新的计划" + "#l"; n++; }
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
        if (cm.getQuestStatus(9927) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9927; } }
        if (cm.getQuestStatus(9936) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9936; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 9927) qt = "听说清明踏青舞会的主宰者用奇怪的#r白色面具遮着脸#k。感兴趣的话，就去和他对话吧。";
        if (qid == 9936) qt = "本来想帮助#p2120005#的，结果反而让她的心情变的更坏了。呼……是一开始接受她的请求本身就错了吗？去其他地方的话，会不会能得到好消息呢？去和#b假面绅士#k对话吧。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 9927) cm.completeQuest(9927);
            if (qid == 9936) cm.completeQuest(9936);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
