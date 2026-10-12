/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1101004
   覆盖任务: 20102, 20202, 20302, 20312, 20602, 20612
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
    if (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???? ?" + "#l"; n++; }
    if (cm.getQuestStatus(20202) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???? ??????" + "#l"; n++; }
    if (cm.getQuestStatus(20302) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????" + "#l"; n++; }
    if (cm.getQuestStatus(20602) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???? ??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20612) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???? ? ??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ???? ?" + "#l"; n++; }
    if ((cm.getQuestStatus(20202) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1200)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ???? ??????" + "#l"; n++; }
    if ((cm.getQuestStatus(20302) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1210)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "????" + "#l"; n++; }
    if ((cm.getQuestStatus(20312) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1210)) && (cm.getQuestStatus(20302) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20602) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ???? ??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20612) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ???? ? ??? ??" + "#l"; n++; }
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
        if (cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20102; } }
        if (cm.getQuestStatus(20202) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20202; } }
        if (cm.getQuestStatus(20302) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20302; } }
        if (cm.getQuestStatus(20602) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20602; } }
        if (cm.getQuestStatus(20612) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20612; } }
        if ((cm.getQuestStatus(20102) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20103) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20104) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20102; } }
        if ((cm.getQuestStatus(20202) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && ((cm.getJob().getId() == 1200)) && (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20202; } }
        if ((cm.getQuestStatus(20302) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1210)) && (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20302; } }
        if ((cm.getQuestStatus(20312) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && ((cm.getJob().getId() == 1210)) && (cm.getQuestStatus(20302) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20312; } }
        if ((cm.getQuestStatus(20602) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212)) && (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20602; } }
        if ((cm.getQuestStatus(20612) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 110) && ((cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212)) && (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20612; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 20102) qt = "??? ??? ????. ?? ???, ??? ???? ?? ??? #b?? ???? #p1101004##k?? ?? ?? ??.";
        if (qid == 20202) qt = "#p1101002#? ?? ??? ?? ???? #b#p1101004##k??? ??????? ? ? ??? ??. ???? ?? #p1101004#? ?? ??.";
        if (qid == 20302) qt = "?, #o9001009# #p1104001#? ???? ????! ????! ?, ?? ????! ??? ?? ??? ????!";
        if (qid == 20602) qt = "#t4032121#? ??????! ????! ??, ????... ??????... ???? ? ??? ?? ??? ??? ???! ?? ??? ??? ????!";
        if (qid == 20612) qt = "#t4032126#? ?? ????! ?, ????. ?? ? ?????. ???, ??? ? ??? ?? ??? ??? ?????. ?? ?????.";
        if (qid == 20102) qt = "?, ??? ?? ???? ????? ? ??? #p1101004#. ???? ???? #b??? ???? ??? ?? ????#k????. ?, ?? ?? ?? ????. ?? ??? ??? ???? ?? ????? ? ?? ?? ???...";
        if (qid == 20202) qt = "?, ??????? ???? ???? ??... ?? ?????. ???? ???? ???? ?? ?? ?? ? ???? ??? ????? ?? ?? ???. ?. ??????? ?????. ?? ??? ???? ????????";
        if (qid == 20302) qt = "??, ????! #p1101002#?? ??? ????? ?? ?? ???? ?????. ?? ???? ??? ?? ???? ???. ??? ??? ?? ???? ???, ???? ???? ?? ??? ? ???.";
        if (qid == 20312) qt = "??? ??? ?? #p1101004#? ? ?? ?? ????...";
        if (qid == 20602) qt = "? ?? ?? ????? ?? ?, ??? ??? ?, #p1101002#?? ?? ???? ??? ? ?? ??? ????...! ?, ??? ??? ?? ? ?????... ??? #h0#?? ???? ??? ????... ?? ???? ?? ? ???...\n#b???? ??? ??? ???.\n????? ?? ? ???...\n#k";
        if (qid == 20612) qt = "?? ????? ??! ? ??? ???! ? #p1101002#??! ???? ?? ??? ??? ????? ??? ? ???...! ...?. ???. ?? ??? ? ?? ??? ??? ??? ????. ?? ??? ??? ?????? ??.";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 20102) cm.completeQuest(20102);
            if (qid == 20202) cm.completeQuest(20202);
            if (qid == 20302) cm.completeQuest(20302);
            if (qid == 20602) cm.completeQuest(20602);
            if (qid == 20612) cm.completeQuest(20612);
        } else {
            if (qid == 20102) cm.startQuest(20102);
            if (qid == 20202) cm.startQuest(20202);
            if (qid == 20302) cm.startQuest(20302);
            if (qid == 20312) cm.startQuest(20312);
            if (qid == 20602) cm.startQuest(20602);
            if (qid == 20612) cm.startQuest(20612);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
