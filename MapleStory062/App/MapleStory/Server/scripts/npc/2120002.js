/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2120002
   覆盖任务: 10067, 10068, 10070, 10071, 10078
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
    if (cm.getQuestStatus(10067) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ??2" + "#l"; n++; }
    if (cm.getQuestStatus(10070) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??- ??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(10078) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???" + "#l"; n++; }
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
        if (cm.getQuestStatus(10067) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10067; } }
        if (cm.getQuestStatus(10070) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10070; } }
        if (cm.getQuestStatus(10078) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10078; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 10067) qt = "??? ???? ?????? ?..?? ??? ????. ?..?? ?? ??? ??? ???.";
        if (qid == 10070) qt = "?? ??? ?????? ?..?? ?? ???.?? ?? ???!! ?? ???. ???…???..?????. ???? ????? ??? ??? ???. ?? ???? ?? ?? ?? ?? ?? ???.?\r\n#b?? ?? ??? ???";
        if (qid == 10078) qt = "??? ???? ??? ??? ????.";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 10067) cm.completeQuest(10067);
            if (qid == 10070) cm.completeQuest(10070);
            if (qid == 10078) cm.completeQuest(10078);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
