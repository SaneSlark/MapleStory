/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2042005
   覆盖任务: 29505, 29506
   ============================================================ */
importPackage(net.sf.odinms.client);

var status = -1;

function start() {
    status = -1;
    qfresh = true;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
    cm.sendOk("……");
    cm.dispose();
}

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
    if (cm.getQuestStatus(29506) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "头衔挑战 - 嘉年华常胜战斗者" + "#l"; n++; }
    if (cm.getQuestStatus(29505) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "头衔挑战 - 嘉年华胜利战斗者嘉年华战斗者" + "#l"; n++; }
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
        if (cm.getQuestStatus(29506) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 29506; } }
        if (cm.getQuestStatus(29505) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 29505; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 29506) qt = "如果你认为你是怪物嘉年华第二季里拥有最高的获胜率，请找休彼德蔓并获得#嘉年华常胜战斗者#k勋章!";
        if (qid == 29505) qt = "如果你认为你是怪物嘉年华第二季里拥有最多胜利次数，请找休彼德蔓并获得#嘉年华胜利战斗者#k勋章!";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 29506) cm.completeQuest(29506);
            if (qid == 29505) cm.completeQuest(29505);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
