/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1101002
   覆盖任务: 1054, 3529, 20001, 20100, 20200, 20300, 20306, 20307, 20308, 20309, 20310, 20400, 20406, 20500, 20501, 20507, 20520, 20521, 20527, 20531, 20600, 20610, 20700, 20704, 20708, 20709, 20714, 20715, 20719, 20720, 20721, 20724, 20725, 20730
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
    if (cm.getQuestStatus(20306) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???" + "#l"; n++; }
    if (cm.getQuestStatus(20307) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???" + "#l"; n++; }
    if (cm.getQuestStatus(20308) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???" + "#l"; n++; }
    if (cm.getQuestStatus(20309) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???" + "#l"; n++; }
    if (cm.getQuestStatus(20310) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???" + "#l"; n++; }
    if (cm.getQuestStatus(20507) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20527) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20708) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ???? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20714) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ???? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20719) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ???? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20720) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???? ?? ?" + "#l"; n++; }
    if (cm.getQuestStatus(20724) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20725) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ????" + "#l"; n++; }
    if (cm.getQuestStatus(20730) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ???!" + "#l"; n++; }
    if (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ?" + "#l"; n++; }
    if (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20400) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??? ???" + "#l"; n++; }
    if (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ?? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??? ?? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(3529) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(3507) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "寻找遗失的记忆" + "#l"; n++; }
    if ((cm.getQuestStatus(20001) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20000) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "?? ????" + "#l"; n++; }
    if ((cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20000) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20001) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20306) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20306) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && ((cm.getJob().getId() == 1110)) && (cm.getQuestStatus(20301) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.haveItem(4032179, 1))) { opts += "\r\n#L" + n + "#[接受] " + "??? ???" + "#l"; n++; }
    if ((cm.getQuestStatus(20307) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20307) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && ((cm.getJob().getId() == 1210)) && (cm.getQuestStatus(20302) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.haveItem(4032179, 1))) { opts += "\r\n#L" + n + "#[接受] " + "??? ???" + "#l"; n++; }
    if ((cm.getQuestStatus(20308) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20308) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && ((cm.getJob().getId() == 1310)) && (cm.getQuestStatus(20303) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.haveItem(4032179, 1))) { opts += "\r\n#L" + n + "#[接受] " + "??? ???" + "#l"; n++; }
    if ((cm.getQuestStatus(20309) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20309) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && ((cm.getJob().getId() == 1410)) && (cm.getQuestStatus(20304) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.haveItem(4032179, 1))) { opts += "\r\n#L" + n + "#[接受] " + "??? ???" + "#l"; n++; }
    if ((cm.getQuestStatus(20310) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20310) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && ((cm.getJob().getId() == 1510)) && (cm.getQuestStatus(20305) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.haveItem(4032179, 1))) { opts += "\r\n#L" + n + "#[接受] " + "??? ???" + "#l"; n++; }
    if ((cm.getQuestStatus(20406) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 120) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20405) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20521) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50) && (cm.getQuestStatus(20520) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "???? ???" + "#l"; n++; }
    if ((cm.getQuestStatus(20527) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20523) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1902005, 1)) && (cm.haveItem(1902006, 1))) { opts += "\r\n#L" + n + "#[接受] " + "??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(20709) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 16) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20708) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "???? ????" + "#l"; n++; }
    if ((cm.getQuestStatus(20715) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 18) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20714) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "???? ????" + "#l"; n++; }
    if ((cm.getQuestStatus(20720) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 25) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20719) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ???? ?? ?" + "#l"; n++; }
    if ((cm.getQuestStatus(20721) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 25) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20720) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "??? ????" + "#l"; n++; }
    if ((cm.getQuestStatus(20725) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 28) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20724) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "????? ????" + "#l"; n++; }
    if ((cm.getQuestStatus(20730) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 28) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20725) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "???? ???!" + "#l"; n++; }
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
        if (cm.getQuestStatus(20306) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20306; } }
        if (cm.getQuestStatus(20307) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20307; } }
        if (cm.getQuestStatus(20308) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20308; } }
        if (cm.getQuestStatus(20309) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20309; } }
        if (cm.getQuestStatus(20310) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20310; } }
        if (cm.getQuestStatus(20507) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20507; } }
        if (cm.getQuestStatus(20527) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20527; } }
        if (cm.getQuestStatus(20708) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20708; } }
        if (cm.getQuestStatus(20714) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20714; } }
        if (cm.getQuestStatus(20719) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20719; } }
        if (cm.getQuestStatus(20720) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20720; } }
        if (cm.getQuestStatus(20724) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20724; } }
        if (cm.getQuestStatus(20725) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20725; } }
        if (cm.getQuestStatus(20730) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20730; } }
        if (cm.getQuestStatus(20200) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20200; } }
        if (cm.getQuestStatus(20300) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20300; } }
        if (cm.getQuestStatus(20400) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20400; } }
        if (cm.getQuestStatus(20600) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20600; } }
        if (cm.getQuestStatus(20610) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20610; } }
        if ((cm.getQuestStatus(3529) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(3507) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 3529; } }
        if ((cm.getQuestStatus(20001) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20000) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20001; } }
        if ((cm.getQuestStatus(20100) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20000) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20001) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20100; } }
        if ((cm.getQuestStatus(20306) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20306) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && ((cm.getJob().getId() == 1110)) && (cm.getQuestStatus(20301) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.haveItem(4032179, 1))) { qi++; if (selection == qi) { qact = 0; qid = 20306; } }
        if ((cm.getQuestStatus(20307) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20307) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && ((cm.getJob().getId() == 1210)) && (cm.getQuestStatus(20302) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.haveItem(4032179, 1))) { qi++; if (selection == qi) { qact = 0; qid = 20307; } }
        if ((cm.getQuestStatus(20308) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20308) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && ((cm.getJob().getId() == 1310)) && (cm.getQuestStatus(20303) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.haveItem(4032179, 1))) { qi++; if (selection == qi) { qact = 0; qid = 20308; } }
        if ((cm.getQuestStatus(20309) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20309) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && ((cm.getJob().getId() == 1410)) && (cm.getQuestStatus(20304) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.haveItem(4032179, 1))) { qi++; if (selection == qi) { qact = 0; qid = 20309; } }
        if ((cm.getQuestStatus(20310) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20310) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && ((cm.getJob().getId() == 1510)) && (cm.getQuestStatus(20305) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.haveItem(4032179, 1))) { qi++; if (selection == qi) { qact = 0; qid = 20310; } }
        if ((cm.getQuestStatus(20406) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 120) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20405) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20406; } }
        if ((cm.getQuestStatus(20521) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50) && (cm.getQuestStatus(20520) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20521; } }
        if ((cm.getQuestStatus(20527) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20523) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1902005, 1)) && (cm.haveItem(1902006, 1))) { qi++; if (selection == qi) { qact = 0; qid = 20527; } }
        if ((cm.getQuestStatus(20709) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 16) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20708) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20709; } }
        if ((cm.getQuestStatus(20715) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 18) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20714) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20715; } }
        if ((cm.getQuestStatus(20720) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 25) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20719) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20720; } }
        if ((cm.getQuestStatus(20721) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 25) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20720) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20721; } }
        if ((cm.getQuestStatus(20725) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 28) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20724) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20725; } }
        if ((cm.getQuestStatus(20730) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 28) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20725) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20730; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 20306) qt = "#t4005004#? ??????. ?? ?? #t4032179#? ??? ??????.";
        if (qid == 20307) qt = "#t4005004#? ??????. ?? ?? #t4032179#? ??? ??????.";
        if (qid == 20308) qt = "#t4005004#? ??????. ?? ?? #t4032179#? ??? ??????.";
        if (qid == 20309) qt = "#t4005004#? ??????. ?? ?? #t4032179#? ??? ??????.";
        if (qid == 20310) qt = "#t4005004#? ??????. ?? ?? #t4032179#? ??? ??????.";
        if (qid == 20507) qt = "#p1102002#? ??? ?? ??? ?????? ...?? ??? ???? #t1902005#? ??? ?? ??? ? ??? ??? #b?? ???#k? ????.";
        if (qid == 20527) qt = "#b#p1101002##k? ?? ??? ? ?? ?? ? ???...";
        if (qid == 20708) qt = "#m100000000# ????? ??? ???? ?????. #p1103001#? ????? ? ??? ??? ??... ?, ?????";
        if (qid == 20714) qt = "#m103000000# ????? ??? ???? ?????. #p1103002#? ? ???? ?? ??... ?, ?? ????.";
        if (qid == 20719) qt = "#m101000000# ????? ??? ???? ? ???. ?? #t4032144#? ????";
        if (qid == 20720) qt = "?? ??? #m102000000#? ??? ?????... #m102000000#?? ???? ?? ?? #b???#k? ? ????. ?? ??? ??? ?? ??? #m102000000# ????? ???? ????. ?? ????? ?????.";
        if (qid == 20724) qt = "#m102000000# ?? ????? ??? ?????. ?, ?? ???? ????";
        if (qid == 20725) qt = "#o9300285#? ?? ??? ?? ??? ?????. ?? ??? ??? ??? ????.";
        if (qid == 20730) qt = "#o9300285#? ??????. ?????! ?? ????? ??? ?? ?? ?????. ?... ??? ??? ?? ??????. ?? ? ?? ???? ??????";
        if (qid == 20200) qt = "??????? ?? ???? ???? ????. ? ?????? ??? ??? ??? ?? ? ?? ??? ??? ??? ????? ??? ? ???. ??...";
        if (qid == 20300) qt = "?? ???? ??? ??? ??, ???? ???? ???? ?? ?????? ?? ??? ??? ? ????. ?? ? ? ?? ???? ??? ??? ??? ?? ????.";
        if (qid == 20400) qt = "?... ???? ??? ???, ??? ???? ??? ? ??? ? ?? ?????. ??? ?? ??? ??? ?? ???. ?? ???????.";
        if (qid == 20600) qt = "??? ?????? ??? ??? ??????. ?? ???? ?? #b??? ??#k? ?? ? ???...";
        if (qid == 20610) qt = "#b????#k?? ? ?? ??? ?? ??????. ??? ??? ?? ?? ?? ?? ???. ?, ?????? ???? ????... ???? ???? ??? ??? ?? ???.";
        if (qid == 3529) qt = "根据旁观者所说，想要寻找遗失的记忆，我要回到冒险旅程的起点。我的险旅程的起点。。。。我猜想应该是当我离开枫之岛时，然后到维多利亚岛进行转职。我应该得去找#b#p1101002##吧。";
        if (qid == 20001) qt = "?? #p1101000#? ?? #b#p1101002##k? ?? ??? ??? ?? ? ?? ?? ????.";
        if (qid == 20100) qt = "#b#p1101002##k?? ?? ??????? ??? ??.";
        if (qid == 20306) qt = "...#t4032179# ????? ?????? ??? ??? ?? ????. ?? ???? ?? ??? ?? ?? ???? ???, ???? ??? ????? ? ?? ?? ???? ??? ?? ????. ?, ??? ???? ??? ?????.";
        if (qid == 20307) qt = "...#t4032179# ????? ?????? ??? ??? ?? ????. ?? ???? ?? ??? ?? ?? ???? ???, ???? ??? ????? ? ?? ?? ???? ??? ?? ????. ?, ??? ???? ??? ?????.";
        if (qid == 20308) qt = "...#t4032179# ????? ?????? ??? ??? ?? ????. ?? ???? ?? ??? ?? ?? ???? ???, ???? ??? ????? ? ?? ?? ???? ??? ?? ????. ?, ??? ???? ??? ?????.";
        if (qid == 20309) qt = "...#t4032179# ????? ?????? ??? ??? ?? ????. ?? ???? ?? ??? ?? ?? ???? ???, ???? ??? ????? ? ?? ?? ???? ??? ?? ????. ?, ??? ???? ??? ?????.";
        if (qid == 20310) qt = "...#t4032179# ????? ?????? ??? ??? ?? ????. ?? ???? ?? ??? ?? ?? ???? ???, ???? ??? ????? ? ?? ?? ???? ??? ?? ????. ?, ??? ???? ??? ?????.";
        if (qid == 20406) qt = "#p1103000#? ??? ??? ???? ??? ? ??. #p1103000#? ?? ??? ??? ???. #b???#k? ?? #b#p1101002##k?? ? ??? ???.";
        if (qid == 20521) qt = "????. ?? ?? ???? ?????? ???? ??? ??? ????? ?? ???? ????. ???? ??? ???? ?? ??? ??? ????? ???? ????.";
        if (qid == 20527) qt = "#b#p1101002##k? ?? ??? ? ?? ?? ? ???...";
        if (qid == 20709) qt = "?? ??? ?? ?????? ??? ?? ??? ??? ?????. ???? ????? #b#m103000000##k? ? ????. ???? ?? ???? ?? ??? ??? ?? #b??? #p1103002##k? ????? ???.";
        if (qid == 20715) qt = "?? ??? ? ??????? ??? ?????. ???? ????? #b#m101000000##k? ?????. ???? ?? ???? ?? ??? ??? ?? #b??? #p1103003##k? ???? ??? ?? ????? ???.";
        if (qid == 20720) qt = "?? ?? ?? ????????? ????? #m103000000#?? ?? ???? ?? ???? ?????. ?? ?? ???, ?? ???? ??? ?? ???????. ??? ??? ??????.";
        if (qid == 20721) qt = "????. ?? ??? ???? ??? ???? ?? ?? ???? ???? ? ?? ?? ???? ???? ?? ??? ?????.";
        if (qid == 20725) qt = "??? ?????, ???? ??? ??? ???? ???????. ??? #b#m105040300##k???. ? ??? ????? ???? #m105040300# ??? ??? ?? ? ??? ??????. ??? ?? ?? ?? ???? ??? ????.";
        if (qid == 20730) qt = "?... ????. ??? ??? ??? #m105040300#? ???? ? ??? ?? ??? ??? #o9300285#? ??? ? ????. #m105040300#? ?? ??? ???? ???? ????? ????? ???? ??? ??.";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 20306) cm.completeQuest(20306);
            if (qid == 20307) cm.completeQuest(20307);
            if (qid == 20308) cm.completeQuest(20308);
            if (qid == 20309) cm.completeQuest(20309);
            if (qid == 20310) cm.completeQuest(20310);
            if (qid == 20507) cm.completeQuest(20507);
            if (qid == 20527) cm.completeQuest(20527);
            if (qid == 20708) cm.completeQuest(20708);
            if (qid == 20714) cm.completeQuest(20714);
            if (qid == 20719) cm.completeQuest(20719);
            if (qid == 20720) cm.completeQuest(20720);
            if (qid == 20724) cm.completeQuest(20724);
            if (qid == 20725) cm.completeQuest(20725);
            if (qid == 20730) cm.completeQuest(20730);
            if (qid == 20200) cm.completeQuest(20200);
            if (qid == 20300) cm.completeQuest(20300);
            if (qid == 20400) cm.completeQuest(20400);
            if (qid == 20600) cm.completeQuest(20600);
            if (qid == 20610) cm.completeQuest(20610);
        } else {
            if (qid == 3529) cm.startQuest(3529);
            if (qid == 20001) cm.startQuest(20001);
            if (qid == 20100) cm.startQuest(20100);
            if (qid == 20306) cm.startQuest(20306);
            if (qid == 20307) cm.startQuest(20307);
            if (qid == 20308) cm.startQuest(20308);
            if (qid == 20309) cm.startQuest(20309);
            if (qid == 20310) cm.startQuest(20310);
            if (qid == 20406) cm.startQuest(20406);
            if (qid == 20521) cm.startQuest(20521);
            if (qid == 20527) cm.startQuest(20527);
            if (qid == 20709) cm.startQuest(20709);
            if (qid == 20715) cm.startQuest(20715);
            if (qid == 20720) cm.startQuest(20720);
            if (qid == 20721) cm.startQuest(20721);
            if (qid == 20725) cm.startQuest(20725);
            if (qid == 20730) cm.startQuest(20730);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
