/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1101007
   覆盖任务: 20105, 20205, 20305, 20315, 20605, 20615
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
    if (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?????? ?" + "#l"; n++; }
    if (cm.getQuestStatus(20205) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?????? ??????" + "#l"; n++; }
    if (cm.getQuestStatus(20305) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????" + "#l"; n++; }
    if (cm.getQuestStatus(20605) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?????? ??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20615) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?????? ? ??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "?????? ?" + "#l"; n++; }
    if ((cm.getQuestStatus(20205) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1500)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "?????? ??????" + "#l"; n++; }
    if ((cm.getQuestStatus(20305) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1510)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "????" + "#l"; n++; }
    if ((cm.getQuestStatus(20315) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1510)) && (cm.getQuestStatus(20305) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20605) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "?????? ??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20615) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "?????? ? ??? ??" + "#l"; n++; }
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
        if (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20105; } }
        if (cm.getQuestStatus(20205) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20205; } }
        if (cm.getQuestStatus(20305) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20305; } }
        if (cm.getQuestStatus(20605) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20605; } }
        if (cm.getQuestStatus(20615) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20615; } }
        if ((cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20105; } }
        if ((cm.getQuestStatus(20205) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1500)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20205; } }
        if ((cm.getQuestStatus(20305) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1510)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20305; } }
        if ((cm.getQuestStatus(20315) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1510)) && (cm.getQuestStatus(20305) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20315; } }
        if ((cm.getQuestStatus(20605) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20605; } }
        if ((cm.getQuestStatus(20615) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20615; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 20105) qt = "??? ??? ????. ??? ??, ?????? ?? ??? #b??? ???? #p1101007##k?? ?? ?? ??.";
        if (qid == 20205) qt = "#p1101002#? ?? ??? ??? ???? #b#p1101007##k?? ??????? ?? ? ??? ??. ???? ?? #p1101007#? ????.";
        if (qid == 20305) qt = "???! ?? ???? #p1104001#? ?????! ???! ???! ??, ?? ?????";
        if (qid == 20605) qt = "??! ?????! #t4032124#?! ??? ??? ???? ???? ????! ??? ??! ??? ? ??? ?? ??? ??? ????! ?, ?? ?? ???!";
        if (qid == 20615) qt = "??! #t4032129#? ?? ???! ?? ??? ? ? ? ???! ??! ??? ??? ??? ?? ??? ??? ????! ?? ?? ?? ??! ????! ...??, ??? ?? ?? ???";
        if (qid == 20105) qt = "??? ?? ? ??? ????! ? ??! ???! ? ??? #p1101007#! #b?????? ??? ??? ????#k??! ??? ???! ?? ?????? ????? ??? ?? ?? ? ??!";
        if (qid == 20205) qt = "?? ??????? ?? ?? ?? ??? ??, ????? ?? ??? ? ?? ??? ????. ??... ???? ???? ?? ??? ???? ? ?? ????... ??, ??????? ????! ?? ?????";
        if (qid == 20305) qt = "#p1101002#?? ?? ?? ???? ?, ?? ????! ?? ???? ??? ??? ?? ??? ??? ?? ????? ???, ???? ?? ???? ??? ????... ??????! ?? ?? ? ?????!";
        if (qid == 20315) qt = "??? ??? ?? #p1101007#? ? ?? ?? ????...";
        if (qid == 20605) qt = "?? ?? ???? ???! ??? ???! ?, ?? ???! ??? ???!? ??, ?? ????? ? ?? ??? ???... ?, ?? ??? ??? ?? ?? ? ??? ??? ? ? ?????. ??? ???...\n#b???? ??? ??? ???.\n????? ?? ? ??...\n#k";
        if (qid == 20615) qt = "?? ??? ...???! ?? ? ??? ???! ??, ??? ??? ??? ?? ???! ?? ???? ??? ? ?? ??! ??! ...??. ??? ? ????? ?? ?? ???? ??. ??? ??? ??. ??? ??? ???? ???.";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 20105) cm.completeQuest(20105);
            if (qid == 20205) cm.completeQuest(20205);
            if (qid == 20305) cm.completeQuest(20305);
            if (qid == 20605) cm.completeQuest(20605);
            if (qid == 20615) cm.completeQuest(20615);
        } else {
            if (qid == 20105) cm.startQuest(20105);
            if (qid == 20205) cm.startQuest(20205);
            if (qid == 20305) cm.startQuest(20305);
            if (qid == 20315) cm.startQuest(20315);
            if (qid == 20605) cm.startQuest(20605);
            if (qid == 20615) cm.startQuest(20615);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
