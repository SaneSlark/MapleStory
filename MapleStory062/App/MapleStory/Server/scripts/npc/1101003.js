/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1101003
   覆盖任务: 20101, 20201, 20301, 20311, 20601, 20611
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
    if (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? ???? ?" + "#l"; n++; }
    if (cm.getQuestStatus(20201) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? ???? ??????" + "#l"; n++; }
    if (cm.getQuestStatus(20301) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????" + "#l"; n++; }
    if (cm.getQuestStatus(20601) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? ???? ??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20611) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? ???? ? ??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "?? ???? ?" + "#l"; n++; }
    if ((cm.getQuestStatus(20201) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1100)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "?? ???? ??????" + "#l"; n++; }
    if ((cm.getQuestStatus(20301) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1110)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "????" + "#l"; n++; }
    if ((cm.getQuestStatus(20311) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1110)) && (cm.getQuestStatus(20301) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20601) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "?? ???? ??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20611) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "?? ???? ? ??? ??" + "#l"; n++; }
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
        if (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20101; } }
        if (cm.getQuestStatus(20201) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20201; } }
        if (cm.getQuestStatus(20301) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20301; } }
        if (cm.getQuestStatus(20601) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20601; } }
        if (cm.getQuestStatus(20611) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20611; } }
        if ((cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20101; } }
        if ((cm.getQuestStatus(20201) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1100)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20201; } }
        if ((cm.getQuestStatus(20301) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1110)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20301; } }
        if ((cm.getQuestStatus(20311) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1110)) && (cm.getQuestStatus(20301) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20311; } }
        if ((cm.getQuestStatus(20601) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20601; } }
        if ((cm.getQuestStatus(20611) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20611; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 20101) qt = "??? ??? ????. ?? ??, ?? ???? ?? ??? #b?? ???? #p1101003##k?? ?? ?? ??.";
        if (qid == 20201) qt = "#p1101002#? ? ??? ?? ???? #b#p1101003##k??? ??????? ? ? ??? ??. ???? ?? #p1101003#? ???.";
        if (qid == 20301) qt = "#o9001009# #p1104001#? ???? ????. ????.";
        if (qid == 20601) qt = "#t4032120#? ????. ??. ???? ? ??? ?? ??? ??? ????. ??... ??? ?????. ??? ??? ???.";
        if (qid == 20611) qt = "#t4032125#? ????. ??. ??? ? ??? ?? ??? ??? ????. ?? ??? ????.";
        if (qid == 20101) qt = "??? ?? ??? ???? ? ??? #p1101003#. ???? ???? #b?? ???? ??? ?? ????#k??. ??? ?? ???? ?? ????? ?? ?? ?? ???.";
        if (qid == 20201) qt = "??????? ????? ???? ??? ???? ???? ??? ?? ????, ??? ? ?? ????? ?? ????. ??. ??????? ????. ?? ??? ??????";
        if (qid == 20301) qt = "??? ?? ???? ???? ??? ?? ???? ??? ??? ???? ? ? ??. ??? ???? ??? ???. ??? ????? ???? ???? ????. #r???? ??? #o9001009# ???#k. ?? ??? ??? ????.";
        if (qid == 20311) qt = "??? ??? ?? #p1101003#? ? ?? ?? ????...";
        if (qid == 20601) qt = "...?? ???? ??? ??? ...#p1101002#? ???? ?? ? ????. ??? ??? ?? ?? ????? ??? ???? ?? ? ??. ???? ?? ????.\n#b???? ??? ??? ???.\n????? ?? ? ???...\n#k";
        if (qid == 20611) qt = "...?? ???? ??? ??? ...???? #p1101002#??... ??. ? ??? ? ?? ??. ??? ??? ??. ?, ??? ??? ????? ??.";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 20101) cm.completeQuest(20101);
            if (qid == 20201) cm.completeQuest(20201);
            if (qid == 20301) cm.completeQuest(20301);
            if (qid == 20601) cm.completeQuest(20601);
            if (qid == 20611) cm.completeQuest(20611);
        } else {
            if (qid == 20101) cm.startQuest(20101);
            if (qid == 20201) cm.startQuest(20201);
            if (qid == 20301) cm.startQuest(20301);
            if (qid == 20311) cm.startQuest(20311);
            if (qid == 20601) cm.startQuest(20601);
            if (qid == 20611) cm.startQuest(20611);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
