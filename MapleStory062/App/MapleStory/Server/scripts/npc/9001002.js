function start() {
    qfresh = true;
    if (qQuestAction(1, 0, 0)) return;
	cm.sendOk ("岁月如梭,人生就是梦");
	cm.dispose();
}

function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
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
    if (cm.getQuestStatus(9432) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? (12? 6?)" + "#l"; n++; }
    if (cm.getQuestStatus(9433) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? (12? 7?)" + "#l"; n++; }
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
        if (cm.getQuestStatus(9432) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9432; } }
        if (cm.getQuestStatus(9433) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9433; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 9432) qt = "#b#p9010000##k? ????? ????? ??. ? ?? ?? ?? ?? ??? ??? ????";
        if (qid == 9433) qt = "#b#p9010000##k? ????? ????? ??. ? ?? ?? ?? ?? ??? ??? ????";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 9432) cm.completeQuest(9432);
            if (qid == 9433) cm.completeQuest(9433);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
