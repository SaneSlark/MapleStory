/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1101006
   覆盖任务: 20104, 20204, 20304, 20314, 20604, 20614
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
    if (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?????? ?" + "#l"; n++; }
    if (cm.getQuestStatus(20204) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?????? ??????" + "#l"; n++; }
    if (cm.getQuestStatus(20304) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????" + "#l"; n++; }
    if (cm.getQuestStatus(20604) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?????? ??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20614) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?????? ? ??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "?????? ?" + "#l"; n++; }
    if ((cm.getQuestStatus(20204) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1400)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "?????? ??????" + "#l"; n++; }
    if ((cm.getQuestStatus(20304) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1410)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "????" + "#l"; n++; }
    if ((cm.getQuestStatus(20314) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1410)) && (cm.getQuestStatus(20304) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20604) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "?????? ??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20614) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "?????? ? ??? ??" + "#l"; n++; }
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
        if (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20104; } }
        if (cm.getQuestStatus(20204) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20204; } }
        if (cm.getQuestStatus(20304) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20304; } }
        if (cm.getQuestStatus(20604) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20604; } }
        if (cm.getQuestStatus(20614) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20614; } }
        if ((cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20104; } }
        if ((cm.getQuestStatus(20204) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1400)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20204; } }
        if ((cm.getQuestStatus(20304) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1410)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20304; } }
        if ((cm.getQuestStatus(20314) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1410)) && (cm.getQuestStatus(20304) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20314; } }
        if ((cm.getQuestStatus(20604) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20604; } }
        if ((cm.getQuestStatus(20614) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20614; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 20104) qt = "??? ??? ????. ??? ??, ?????? ?? ??? #b??? ???? #p1101006##k?? ?? ?? ??.";
        if (qid == 20204) qt = "#p1101002#? ?? ??? ??? ???? #b#p1101006##k?? ??????? ?? ? ??? ??. ???? ?? #p1101006#? ?? ??.";
        if (qid == 20304) qt = "#o9001009# #p1104001#? ??? ??? ??, ????? ? ????? ? ? ???.";
        if (qid == 20604) qt = "#t4032123#? ????. ??... ??? ???? ???. ??. ??? ? ??? ?? ??? ??? ? ????. ?? ??? ??? ??.";
        if (qid == 20614) qt = "#t4032128#? ????. ?? ? ????. ??. ?? ??? ??? ?? ??? ??? ????. ??? ????.";
        if (qid == 20104) qt = "...??? ?? ? ??? ??, ??? ????. #b?????? ??? ??? ????#k? ?? ??? ???. ? ??? #p1101006#. ?? ?????? ????? ?? ? ?? ?? ?? ???.";
        if (qid == 20204) qt = "??????? ?? ? ??? ? ??? ??? ??... ?? ???? ???? ?? ???? ? ???? ?? ?? ??. ??. ??????? ????. ?? ?????";
        if (qid == 20304) qt = "...??? #p1101002#?? ??? ??? ??, ??? ??? ??... ?? ?? ?? ????. ?? ???? ???? ??? ??? ?? ???. ??? ?? ???? ??? ???? ???? ?? ???? ??? ??.";
        if (qid == 20314) qt = "??? ??? ?? #p1101006#? ? ?? ?? ????...";
        if (qid == 20604) qt = "??? ...?? ??? ??? ? ??? ???... ???? #p1101002#??. ??? ??? ??????. ?? ??? ? ?? ???? ?? ???? ?? ??? ???. ??? ?? ? ????? ?? ???? ?? ???.\n#b???? ??? ??? ???.\n????? ?? ? ??...\n#k";
        if (qid == 20614) qt = "??? ??? ??? ? #p1101002#??? ??? ? ?? ?? ??? ? ???? ?? ???... ??. ??? ?? ? ????? ?? ?? ?? ??. ??? ??? ??. ?, ??? ??? ??????.";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 20104) cm.completeQuest(20104);
            if (qid == 20204) cm.completeQuest(20204);
            if (qid == 20304) cm.completeQuest(20304);
            if (qid == 20604) cm.completeQuest(20604);
            if (qid == 20614) cm.completeQuest(20614);
        } else {
            if (qid == 20104) cm.startQuest(20104);
            if (qid == 20204) cm.startQuest(20204);
            if (qid == 20304) cm.startQuest(20304);
            if (qid == 20314) cm.startQuest(20314);
            if (qid == 20604) cm.startQuest(20604);
            if (qid == 20614) cm.startQuest(20614);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
