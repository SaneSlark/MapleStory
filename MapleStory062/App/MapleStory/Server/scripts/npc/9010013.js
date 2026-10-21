/*
 * 9010013.js - 废气都市组队训练场引导 NPC
 * 原文件为旧式 then/end 伪代码，不是 JavaScript，永远无法加载；
 * 按原意图重写为 JavaScript（进入需 10 个 4001022）。
 */
var status = 0;

function start() {
    qfresh = true;
	status = -1;
	action(1, 0, 0);
}

function qOrigAction(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
		return;
	}
	if (mode == 0 && status == 0) {
		cm.sendOk("嘿嘿！想去的时候再来找我吧，我一直都在等你！");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendYesNo("欢迎来到 #b废气都市#k组队训练场！现在是测试阶段！有什么事情和GM联系。");
	} else if (status == 1) {
		cm.sendNext("你需要去挑战么？");
	} else if (status == 2) {
		if (cm.haveItem(4001022, 10)) {
			cm.gainItem(4001022, -10);
			cm.warp(103000803);
			cm.dispose();
		} else {
			cm.sendOk("进入训练场需要 10 个 #v4001022#，凑齐后再来找我吧。");
			cm.dispose();
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
    if (cm.getQuestStatus(9732) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "欺骗骗子！？" + "#l"; n++; }
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
        if (cm.getQuestStatus(9732) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9732; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 9732) qt = "你不是人类吗？怎么会跑到这里来？你到底是来做什么？\r\n#b你就是那个想要攻击人类村庄的家伙吧？我不会饶过你的！\r\n因为我想要助你一臂之力！\r\n其实…我…喜欢你！我是来跟你告白的！";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 9732) cm.completeQuest(9732);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
