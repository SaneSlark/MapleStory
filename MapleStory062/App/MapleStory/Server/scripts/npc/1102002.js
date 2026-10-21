/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1102002
   覆盖任务: 20501, 20502, 20503, 20505, 20506, 20508, 20509, 20510, 20512, 20521, 20522, 20523, 20525, 20526, 20528, 20531, 20532, 20533, 20534
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
    if (cm.getQuestStatus(20501) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ???" + "#l"; n++; }
    if (cm.getQuestStatus(20502) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ?" + "#l"; n++; }
    if (cm.getQuestStatus(20505) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???" + "#l"; n++; }
    if (cm.getQuestStatus(20506) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ??????!" + "#l"; n++; }
    if (cm.getQuestStatus(20508) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20509) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ???" + "#l"; n++; }
    if (cm.getQuestStatus(20510) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20512) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ????? ???!" + "#l"; n++; }
    if (cm.getQuestStatus(20521) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ???" + "#l"; n++; }
    if (cm.getQuestStatus(20522) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ???" + "#l"; n++; }
    if (cm.getQuestStatus(20523) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ???" + "#l"; n++; }
    if (cm.getQuestStatus(20526) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ?? ???" + "#l"; n++; }
    if (cm.getQuestStatus(20528) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???" + "#l"; n++; }
    if (cm.getQuestStatus(20532) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20534) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20531) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20522) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20521) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "???? ???" + "#l"; n++; }
    if ((cm.getQuestStatus(20523) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20522) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "???? ???" + "#l"; n++; }
    if ((cm.getQuestStatus(20525) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20525) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 50) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20523) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1912005, 1))) { opts += "\r\n#L" + n + "#[接受] " + "?? ???" + "#l"; n++; }
    if ((cm.getQuestStatus(20526) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20526) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 50) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20523) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1902005, 1)) && (cm.haveItem(1902006, 1)) && (cm.haveItem(1902007, 1))) { opts += "\r\n#L" + n + "#[接受] " + "???? ?? ???" + "#l"; n++; }
    if ((cm.getQuestStatus(20528) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20528) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20527) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1902006, 1)) && (cm.haveItem(1902005, 1)) && (cm.haveItem(1902007, 1))) { opts += "\r\n#L" + n + "#[接受] " + "??? ???" + "#l"; n++; }
    if ((cm.getQuestStatus(20532) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1112 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20531) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "???? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20533) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 120) && ((cm.getJob().getId() == 1112 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20532) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1902006, 1))) { opts += "\r\n#L" + n + "#[接受] " + "??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20534) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20534) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 120) && ((cm.getJob().getId() == 1112 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20533) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1902007, 1)) && (cm.haveItem(1902006, 1))) { opts += "\r\n#L" + n + "#[接受] " + "??? ??" + "#l"; n++; }
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
        if (cm.getQuestStatus(20501) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20501; } }
        if (cm.getQuestStatus(20502) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20502; } }
        if (cm.getQuestStatus(20505) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20505; } }
        if (cm.getQuestStatus(20506) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20506; } }
        if (cm.getQuestStatus(20508) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20508; } }
        if (cm.getQuestStatus(20509) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20509; } }
        if (cm.getQuestStatus(20510) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20510; } }
        if (cm.getQuestStatus(20512) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20512; } }
        if (cm.getQuestStatus(20521) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20521; } }
        if (cm.getQuestStatus(20522) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20522; } }
        if (cm.getQuestStatus(20523) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20523; } }
        if (cm.getQuestStatus(20526) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20526; } }
        if (cm.getQuestStatus(20528) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20528; } }
        if (cm.getQuestStatus(20532) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20532; } }
        if (cm.getQuestStatus(20534) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20534; } }
        if (cm.getQuestStatus(20531) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20531; } }
        if ((cm.getQuestStatus(20522) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20521) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20522; } }
        if ((cm.getQuestStatus(20523) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20522) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20523; } }
        if ((cm.getQuestStatus(20525) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20525) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 50) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20523) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1912005, 1))) { qi++; if (selection == qi) { qact = 0; qid = 20525; } }
        if ((cm.getQuestStatus(20526) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20526) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 50) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20523) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1902005, 1)) && (cm.haveItem(1902006, 1)) && (cm.haveItem(1902007, 1))) { qi++; if (selection == qi) { qact = 0; qid = 20526; } }
        if ((cm.getQuestStatus(20528) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20528) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20527) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1902006, 1)) && (cm.haveItem(1902005, 1)) && (cm.haveItem(1902007, 1))) { qi++; if (selection == qi) { qact = 0; qid = 20528; } }
        if ((cm.getQuestStatus(20532) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1112 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20531) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20532; } }
        if ((cm.getQuestStatus(20533) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 120) && ((cm.getJob().getId() == 1112 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20532) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1902006, 1))) { qi++; if (selection == qi) { qact = 0; qid = 20533; } }
        if ((cm.getQuestStatus(20534) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20534) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 120) && ((cm.getJob().getId() == 1112 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20533) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1902007, 1)) && (cm.haveItem(1902006, 1))) { qi++; if (selection == qi) { qact = 0; qid = 20534; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 20501) qt = "??, ???? ??? ? ???????";
        if (qid == 20502) qt = "#b????? #p1102002##k??? ????? ??? ???? ?? ? ????...";
        if (qid == 20505) qt = "?, ???? #t1902005#? #t1902005#? ? ? ?? ??? ??? ??? ????.";
        if (qid == 20506) qt = "#t1902005#? ????? ???. ??? ??? #b????? #p1102002##k? ??? ??.";
        if (qid == 20508) qt = "??? ??? ? ????. ?? #t1902005#? ?? ??.";
        if (qid == 20509) qt = "#p1102001#?? ??? #t1902005#? ?? ???? ??.";
        if (qid == 20510) qt = "?, #t4032117#? ?? ???. ??? ???? ??? ?? ?? ????. ?? ?? #t1902005#?? ?? ???...";
        if (qid == 20512) qt = "?? ??? ???? ????? ?? ??... ????. ??? ???? ???? ???? ???? ???...";
        if (qid == 20521) qt = "?? ??? ?? ??? ??? ????. ???? ??? ? ???";
        if (qid == 20522) qt = "#b???#k?? ?? #b????? #p1102002##k?? ???? ???? ????.";
        if (qid == 20523) qt = "#p2060005#?? ???? ?? ??. ??, ?? #t1902005#?? ?? ??? ???! ...??, ??? ???. ?? #p2060005#? ?? ?? ?? ?? ???...  ?, ?? ??? #t1902005#? ???? ???? ????. ?? #t1902005#? ?? ???.";
        if (qid == 20526) qt = "#t1902005#? ????? ???. ??? ??? #b????? #p1102002##k? ??? ??.";
        if (qid == 20528) qt = "?, ?? ???? ?? ??. ?? ?, #t1902005#? ???? ??? ??. ?? 1?? ???? ???... 2?? ???? ???... 3?? ???? ???...";
        if (qid == 20532) qt = "???? ?? ???? ??... ?? 5000? ??? ??. ???? ????? ?? ??? ??.";
        if (qid == 20534) qt = "?, 1? ??? ?? ? ??? ??. ?? #p1101001#?? ??? ?? ?? ?? ?????? #t1902006#? ?? #t1902007#? ???? ??? ??...";
        if (qid == 20531) qt = "?????, #h0#. ??? ????? ???? ??? ????. ?? ?? ????... ? ??? ??? ???? ??? ?? ????.";
        if (qid == 20522) qt = "#b???#k?? ?? #b????? #p1102002##k?? ???? ???? ????.";
        if (qid == 20523) qt = "#t1902005#? ? ??? ??? ?? ??? ????. ???? ?? #t1902005#?? ?? #t1902005#?? ?? ? ??? ???, ????? ?? ?????? ???? ?? ????... ?, ?? ???? ??? ??? ???.";
        if (qid == 20525) qt = "?? ???? ?...? #t1912005#? ??????? ??. ?? ????. #t1912005#? ??? ???? ? ? ?? ???? ...?? ?? ?? ? ? ???? ??... ??? ???? ?? ?? #t1912005#? ? ???? ? ?????... ?? ???? ??... ???? #p1101002# ??? ??? ? ? ?? ??...";
        if (qid == 20526) qt = "#t1902005#? ????? ???. ??? ??? #b????? #p1102002##k? ??? ??.";
        if (qid == 20528) qt = "???? ??? ??? #t1902005#? ? ??? ??? ??? ? ???. ??? ???? ?? ??? ??? ????... ??? ?? ???? ??? ?? ?? #b#m240000000#? ??? ?? ?? ???#k? ???? ? ????";
        if (qid == 20532) qt = "???? ??? ? ?? ???, ??? ???? ??, ???????. ??? ??? ??? ?? ??... ??? ???? ?? ???? ?, ??? ?? ??????. ??? ?? ???? ??? ??? ??.";
        if (qid == 20533) qt = "??? ???? ????? ?? ??? ??...";
        if (qid == 20534) qt = "#t1902006#? ?? #b#t1902007##k? ??? ???? ???? ???? #t1902006#?? ?? ????? ?????, ?? ??? ? ? ???? ??? ???? ????? ?? ?? ????? #t1902007#? ?? ??? ??.";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 20501) cm.completeQuest(20501);
            if (qid == 20502) cm.completeQuest(20502);
            if (qid == 20505) cm.completeQuest(20505);
            if (qid == 20506) cm.completeQuest(20506);
            if (qid == 20508) cm.completeQuest(20508);
            if (qid == 20509) cm.completeQuest(20509);
            if (qid == 20510) cm.completeQuest(20510);
            if (qid == 20512) cm.completeQuest(20512);
            if (qid == 20521) cm.completeQuest(20521);
            if (qid == 20522) cm.completeQuest(20522);
            if (qid == 20523) cm.completeQuest(20523);
            if (qid == 20526) cm.completeQuest(20526);
            if (qid == 20528) cm.completeQuest(20528);
            if (qid == 20532) cm.completeQuest(20532);
            if (qid == 20534) cm.completeQuest(20534);
            if (qid == 20531) cm.completeQuest(20531);
        } else {
            if (qid == 20522) cm.startQuest(20522);
            if (qid == 20523) cm.startQuest(20523);
            if (qid == 20525) cm.startQuest(20525);
            if (qid == 20526) cm.startQuest(20526);
            if (qid == 20528) cm.startQuest(20528);
            if (qid == 20532) cm.startQuest(20532);
            if (qid == 20533) cm.startQuest(20533);
            if (qid == 20534) cm.startQuest(20534);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
