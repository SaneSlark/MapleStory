/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1101005
   覆盖任务: 20103, 20203, 20303, 20313, 20603, 20613
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
    if (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? ????? ?" + "#l"; n++; }
    if (cm.getQuestStatus(20203) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? ????? ??????" + "#l"; n++; }
    if (cm.getQuestStatus(20303) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????" + "#l"; n++; }
    if (cm.getQuestStatus(20603) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? ????? ??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20613) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? ????? ? ??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "?? ????? ?" + "#l"; n++; }
    if ((cm.getQuestStatus(20203) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1300)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "?? ????? ??????" + "#l"; n++; }
    if ((cm.getQuestStatus(20303) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1310)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4032179, 1))) { opts += "\r\n#L" + n + "#[接受] " + "????" + "#l"; n++; }
    if ((cm.getQuestStatus(20313) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1310)) && (cm.getQuestStatus(20303) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20603) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "?? ????? ??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20613) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "?? ????? ? ??? ??" + "#l"; n++; }
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
        if (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20103; } }
        if (cm.getQuestStatus(20203) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20203; } }
        if (cm.getQuestStatus(20303) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20303; } }
        if (cm.getQuestStatus(20603) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20603; } }
        if (cm.getQuestStatus(20613) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20613; } }
        if ((cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20103; } }
        if ((cm.getQuestStatus(20203) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1300)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20203; } }
        if ((cm.getQuestStatus(20303) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1310)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4032179, 1))) { qi++; if (selection == qi) { qact = 0; qid = 20303; } }
        if ((cm.getQuestStatus(20313) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1310)) && (cm.getQuestStatus(20303) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20313; } }
        if ((cm.getQuestStatus(20603) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20603; } }
        if ((cm.getQuestStatus(20613) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20613; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 20103) qt = "??? ??? ????. ??? ??, ?? ????? ?? ??? #b??? ???? #p1101005##k?? ?? ?? ??.";
        if (qid == 20203) qt = "#p1101002#? ?? ??? ??? ???? #b#p1101005##k??? ??????? ? ? ??? ??. ???? ?? #p1101005#? ?? ??.";
        if (qid == 20303) qt = "#o9001009# #p1104001#? ???? ??????... ???? ???... ?? ????.";
        if (qid == 20603) qt = "#t4032122#? ??????... ??... ???? ??? ???? ???... ????. ???? ? ??? ?? ??? ?????. ?? ??? ??? ???? ??...";
        if (qid == 20613) qt = "#t4032127#? ?? ????. ...?? ???... ??? ??? ??? ?? ??? ??? ????. ?? ??? ?????.";
        if (qid == 20103) qt = "??? ?? ???? ????... ? ??? #p1101005#. ????? ???? ???? #b?? ????? ??? ??? ????#k? ?? ????... ??? ?? ????? ????? ?? ??? ?????...";
        if (qid == 20203) qt = "??????... ??? ?? ??? ?? ?? ????... ???? ??? ???? ???? ?? ???? ???? ??? ?????... ???... ??????? ?????. ?? ??? ??????";
        if (qid == 20303) qt = "...#p1101002#?? ??? ??? ??? ??, ?? ??? ??? ???. ??? ?? ???? ???? ??? ?? ???? ?... ??? ?? ??? ? ??, ???? ???? ?? ??? ??? ? ???...";
        if (qid == 20313) qt = "??? ??? ?? #p1101005#? ? ?? ?? ????...";
        if (qid == 20603) qt = "...?? ????? ??? ??...? #p1101002#? ?? ?????... ??? ??? ???? ?? ???? ?? ??? ????. ??? ??? ?? ? ????? ?? ???? ??? ??? ?? ???... ?????.\n#b???? ??? ??? ???.\n????? ?? ? ??...\n#k";
        if (qid == 20613) qt = "?? ????. ??? ??... ??? #p1101002#? ??? ????. ??? ?? ??? ?????. ??? ????? ??? ??? ???? ? ??? ??... ??? ?? ?? ????. ???... ??? ??? ????. ??? ?????...";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 20103) cm.completeQuest(20103);
            if (qid == 20203) cm.completeQuest(20203);
            if (qid == 20303) cm.completeQuest(20303);
            if (qid == 20603) cm.completeQuest(20603);
            if (qid == 20613) cm.completeQuest(20613);
        } else {
            if (qid == 20103) cm.startQuest(20103);
            if (qid == 20203) cm.startQuest(20203);
            if (qid == 20303) cm.startQuest(20303);
            if (qid == 20313) cm.startQuest(20313);
            if (qid == 20603) cm.startQuest(20603);
            if (qid == 20613) cm.startQuest(20613);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
