/* 
	Tigun
	Palace Guard
*/

function start() {
    qfresh = true;
    if (qQuestAction(1, 0, 0)) return;
	cm.sendNext("这是没有太大的＃ bpalace ＃ k ，但会尽到我们能获得一个更美好的宫殿建！任何人的允许说话国王和王后，但是不要指望他们会对你友善。嗯...也许国王阿卜杜拉八，如果你追上他，他不懒，不付费，注意情绪.");
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
    if (cm.getQuestStatus(10096) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
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
        if (cm.getQuestStatus(10096) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10096; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 10096) qt = "??? ?????? ???? ?? ???? ??.";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 10096) cm.completeQuest(10096);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
