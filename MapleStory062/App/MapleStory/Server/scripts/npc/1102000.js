/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1102000
   覆盖任务: 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20701, 20702, 20703
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
    if (cm.getQuestStatus(20003) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ? ?? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20004) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ? ?? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20005) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ? ?? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20006) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ? ?? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20007) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20701) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "? ?? ?? ?? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20702) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "? ?? ?? ?? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20703) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "? ?? ?? ?? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20002) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20001) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "???? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20003) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20002) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ? ?? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20004) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20003) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ? ?? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20005) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20004) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ? ?? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20006) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20005) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ? ?? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20007) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20006) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20008) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20007) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ?" + "#l"; n++; }
    if ((cm.getQuestStatus(20701) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 15) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20700) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "? ?? ?? ?? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20702) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 15) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20701) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "? ?? ?? ?? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20703) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 15) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20702) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "? ?? ?? ?? ??" + "#l"; n++; }
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
        if (cm.getQuestStatus(20003) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20003; } }
        if (cm.getQuestStatus(20004) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20004; } }
        if (cm.getQuestStatus(20005) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20005; } }
        if (cm.getQuestStatus(20006) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20006; } }
        if (cm.getQuestStatus(20007) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20007; } }
        if (cm.getQuestStatus(20701) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20701; } }
        if (cm.getQuestStatus(20702) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20702; } }
        if (cm.getQuestStatus(20703) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20703; } }
        if ((cm.getQuestStatus(20002) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20001) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20002; } }
        if ((cm.getQuestStatus(20003) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20002) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20003; } }
        if ((cm.getQuestStatus(20004) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20003) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20004; } }
        if ((cm.getQuestStatus(20005) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20004) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20005; } }
        if ((cm.getQuestStatus(20006) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20005) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20006; } }
        if ((cm.getQuestStatus(20007) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20006) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20007; } }
        if ((cm.getQuestStatus(20008) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20007) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20008; } }
        if ((cm.getQuestStatus(20701) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 15) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20700) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20701; } }
        if ((cm.getQuestStatus(20702) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 15) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20701) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20702; } }
        if ((cm.getQuestStatus(20703) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 15) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20702) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20703; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 20003) qt = "#o0100120# 5??? ?? ?? ????. ??? ?? ??? ???";
        if (qid == 20004) qt = "??? ??? ???? #o0100121# 10??? ??? ?? ? ????...";
        if (qid == 20005) qt = "#o0100122# 15??? ?? ????. ??, ??. ????? #p1101002#? ??? ?? ?? ????? ? ? ?? ??. ??... ????? ?? ? ???? #p1101002#? ??? ??? ??... ??? #p1101002# ?? ?? ??? ?? ????...";
        if (qid == 20006) qt = "#o0100123# 20??? ?? ????. ??... ?? ??? ? ?? ????? ? ? ????? ?? ??? ?? ?? ??? ?? ? ?? ??. ?? ??, ?? ???, ??? ??, ??? ??, ??? ??? ??... ??? ?? ? ????";
        if (qid == 20007) qt = "#o0100124#? ??? ???? ????! ?? ???! ???? ??? ?? ????? ?? ???... #p1101002#? ??????.";
        if (qid == 20701) qt = "??, #o9300271# 30??? ????. ???? ????? ??? ???? ? ??...";
        if (qid == 20702) qt = "??, #o9300272# 30??? ??? ??? ?? ??? ? ?? ???. ?? ????? ??? ?? ??. ??? ??? ??? ?? ?? ???.";
        if (qid == 20703) qt = "#o9300273#? ?? ??? ????. ????! ?? ???? ????? ???? ? ? ? ????";
        if (qid == 20002) qt = "#p1101002#? ??? ??? ??? 10?? ?? ????? ??? ? ? ??. #b???? #p1102000##k? ?? ??? ? ??? ???.";
        if (qid == 20003) qt = "??? ? ? ????? ?? ??? ????. ??? ??? ??? ????. ? ?? ?? ??? ?? ?? ?? ? #o0100120#?. #r#o0100120##k? #r5??#k ?? ???? ? ???";
        if (qid == 20004) qt = "? ?? ??? ? ??? ? ??? ?? #r#o0100121##k? ?? ??. ???? #r10??#k? ??? ???";
        if (qid == 20005) qt = "? ?? ??? ? ??? ? ??? ?? #r#o0100122##k?? ?? ??. ???? ? ?? ???... #r15??#k ??? ?? ???";
        if (qid == 20006) qt = "? ?? ???... ?? ? ? ?? ???? ?? ? ???? ? ???? ?? #r#o0100123##k? ??? ?. ???? ? #r20??#k ?? ???.";
        if (qid == 20007) qt = "?? ????? ????. ?? ?? ??? ???? ?? ????? ??? ????? ???? ?? ??? ??? ????? ??.";
        if (qid == 20008) qt = "#b???? #p1102000##k?? ????? ?? ?? ??? ??? ????.";
        if (qid == 20701) qt = "???! ?? ???. ??? #p1101002#? ? ????? ? ??? ?? ??? ?? ?? ??. ? ?? 13??? ???? ????? ?? ? ????.";
        if (qid == 20702) qt = "?, ?? ??? ? ??? ?? ??? #p1101002#? ????? ???, #p1101001#? ?? ?? ??? ?? ??? ?? ??? ?? ?? ??? ? ? ???. ?? ?? ?? ???? ??? ?? ???. ?, ??? ??????";
        if (qid == 20703) qt = "??? ??? ??? ??? #p1101001#? ??? ??? ??? ?? ?? ??? ???? ????? ??? ?? ?? ?? ??? ?! ?? ?? ??? ??? ? ??!";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 20003) cm.completeQuest(20003);
            if (qid == 20004) cm.completeQuest(20004);
            if (qid == 20005) cm.completeQuest(20005);
            if (qid == 20006) cm.completeQuest(20006);
            if (qid == 20007) cm.completeQuest(20007);
            if (qid == 20701) cm.completeQuest(20701);
            if (qid == 20702) cm.completeQuest(20702);
            if (qid == 20703) cm.completeQuest(20703);
        } else {
            if (qid == 20002) cm.startQuest(20002);
            if (qid == 20003) cm.startQuest(20003);
            if (qid == 20004) cm.startQuest(20004);
            if (qid == 20005) cm.startQuest(20005);
            if (qid == 20006) cm.startQuest(20006);
            if (qid == 20007) cm.startQuest(20007);
            if (qid == 20008) cm.startQuest(20008);
            if (qid == 20701) cm.startQuest(20701);
            if (qid == 20702) cm.startQuest(20702);
            if (qid == 20703) cm.startQuest(20703);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
