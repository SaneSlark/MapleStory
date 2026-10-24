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
    if (cm.getQuestStatus(20501) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u4e5d\u5fc3\u7684\u4ecb\u7ecd\u4fe1" + "#l"; n++; }
    if (cm.getQuestStatus(20502) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u8482\u8482\u5b89\u5a1c\u7684\u86cb" + "#l"; n++; }
    if (cm.getQuestStatus(20505) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u9a91\u58eb\u7684\u9a91\u672f" + "#l"; n++; }
    if (cm.getQuestStatus(20506) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u6211\u5931\u53bb\u4e86\u8482\u8482\u5b89\u5a1c\uff01" + "#l"; n++; }
    if (cm.getQuestStatus(20508) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u8482\u8482\u5b89\u5a1c\u7684\u8131\u843d" + "#l"; n++; }
    if (cm.getQuestStatus(20509) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u7167\u987e\u73bb\u7483\u6e29\u5ba4" + "#l"; n++; }
    if (cm.getQuestStatus(20510) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u8482\u8482\u5965\u7684\u8bde\u751f" + "#l"; n++; }
    if (cm.getQuestStatus(20512) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u6211\u60f3\u8131\u79bb\u8482\u8482\u5b89\u5a1c\uff01" + "#l"; n++; }
    if (cm.getQuestStatus(20521) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u9a91\u58eb\u9a91\u672f" + "#l"; n++; }
    if (cm.getQuestStatus(20522) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u629a\u517b\u8482\u8482\u5b89\u5a1c" + "#l"; n++; }
    if (cm.getQuestStatus(20523) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u8482\u8482\u5b89\u5a1c\u9a91\u9a6c" + "#l"; n++; }
    if (cm.getQuestStatus(20526) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u91cd\u65b0\u751f\u957f\u8482\u8482\u5b89\u5a1c" + "#l"; n++; }
    if (cm.getQuestStatus(20528) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u6210\u957f\u7684\u8482\u8482\u5965" + "#l"; n++; }
    if (cm.getQuestStatus(20532) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u9a91\u884c\u7684\u5371\u9669" + "#l"; n++; }
    if (cm.getQuestStatus(20534) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u4fe1\u6761\u7684\u590d\u6d3b" + "#l"; n++; }
    if (cm.getQuestStatus(20531) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u57fa\u91cc\u675c\u7684\u53ec\u5524" + "#l"; n++; }
    if ((cm.getQuestStatus(20522) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20521) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u629a\u517b\u8482\u8482\u5b89\u5a1c" + "#l"; n++; }
    if ((cm.getQuestStatus(20523) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20522) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u8482\u8482\u5b89\u5a1c\u9a91\u9a6c" + "#l"; n++; }
    if ((cm.getQuestStatus(20525) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20525) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 50) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20523) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1912005, 1))) { opts += "\r\n#L" + n + "#[接受] " + "\u5236\u4f5c\u9a6c\u978d" + "#l"; n++; }
    if ((cm.getQuestStatus(20526) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20526) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 50) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20523) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1902005, 1)) && (cm.haveItem(1902006, 1)) && (cm.haveItem(1902007, 1))) { opts += "\r\n#L" + n + "#[接受] " + "\u91cd\u65b0\u751f\u957f\u8482\u8482\u5b89\u5a1c" + "#l"; n++; }
    if ((cm.getQuestStatus(20528) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20528) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 100) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20527) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1902006, 1)) && (cm.haveItem(1902005, 1)) && (cm.haveItem(1902007, 1))) { opts += "\r\n#L" + n + "#[接受] " + "\u6210\u957f\u7684\u8482\u8482\u5965" + "#l"; n++; }
    if ((cm.getQuestStatus(20532) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1112 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20531) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u9a91\u884c\u7684\u5371\u9669" + "#l"; n++; }
    if ((cm.getQuestStatus(20533) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 120) && ((cm.getJob().getId() == 1112 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20532) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1902006, 1))) { opts += "\r\n#L" + n + "#[接受] " + "\u4fe1\u6761\u7684\u8bde\u751f" + "#l"; n++; }
    if ((cm.getQuestStatus(20534) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20534) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 120) && ((cm.getJob().getId() == 1112 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20533) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1902007, 1)) && (cm.haveItem(1902006, 1))) { opts += "\r\n#L" + n + "#[接受] " + "\u4fe1\u6761\u7684\u590d\u6d3b" + "#l"; n++; }
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
        if (qid == 20501) qt = "\u563f\uff0c\u4f60\u662f\u6765\u5b66\u9a91\u672f\u7684\u9a91\u58eb\u5417\uff1f";
        if (qid == 20502) qt = (qact == 1 ? "#t4220137# 醒了。" : "#p1102002#说骑士骑过#t1902005#并给了#t4220137#。#b他们说如果你分享你的经验，你可以唤醒鸡蛋。 #k……只有这样觉醒#t1902005#的人才会真正追随他们的主人。然后，我们增加#t4220137#。");
        if (qid == 20505) qt = (qact == 1 ? "现在，我给你骑乘怪物技能#t1902005#和#t1902005#。" : "哦，我发现了#t1912005#，即使看起来不像，#p2060005#也是一个很咸的人……你看起来比你看起来更有能力？当你在那里的时候，#t1902005# 训练已经完全结束了。如果保持这样，您应该可以毫无问题地骑行。");
        if (qid == 20506) qt = (qact == 1 ? "#t1902005#再次被唤醒。  #p1102002#劝我不要再弄丢了。" : "好像是以前学过骑马的骑士……不知为什么感觉很空虚。您对您的号码 #t1902005# 做了什么？什么？  你丢了#t1902005#？");
        if (qid == 20508) qt = (qact == 1 ? "看来您已准备好脱离。然后交出#t1902005#。" : "你在吗？你的水平确实提高了很多。看看吧……那么，当然#t1902005#肯定也获得了不少经验……没错。 #t1902005#，和你一起冒险了很长时间，积累了很多经验，变得更强了。");
        if (qid == 20509) qt = (qact == 1 ? "#p1102001# 提取了 #t1902005#，这是从 #t4220138# 中剥离出来的。但他们说现在骑起来会很困难......" : "#t1902005# 被放入 #t4220138# 中。它将保留在其中，直到蜕皮完全完成。同时，你需要照顾#t1902005#。特别是在换毛期间，你应该只给它们喂好的食物。");
        if (qid == 20510) qt = (qact == 1 ? "哦，我找到了#t4032117#。虽然贵，但是值得。那我是不是应该马上喂#t1902005#呢？" : "嗯……#t1902005# 的逃亡很顺利，但或许是因为在 #t4220138# 里面待了太久，所以有点弱。这使得无法立即骑行。我需要一些东西来滋养自己...");
        if (qid == 20512) qt = (qact == 1 ? "你不仅得到了所有的食物，还得到了版税……太棒了。很多人因为准备太难而放弃了..." : "曾经失去的#t1902005#想要改回#t1902006#并不容易，和你在一起所得到的我都失去了，所以我必须用其他的东西来弥补我所缺少的。不过，您会放弃 #t1902005# 吗？");
        if (qid == 20521) qt = "\u55ef\uff1f\u770b\u6765\u8fd9\u662f\u4e00\u7bc7\u65b0\u6587\u7ae0\u3002\u4f60\u6765\u8fd9\u91cc\u662f\u4e3a\u4e86\u5b66\u4e60\u5982\u4f55\u9a91\u8f66\u5417\uff1f";
        if (qid == 20522) qt = (qact == 1 ? "筹集完#t1902005#后，我把它给了#p1102002#。" : "#p1102002#说骑士的骑术是通过#t1902005#这种TT来完成的，应该自己养#t1902005#，然后交出一个小鸡蛋……#t1902005#据说#b可以通过分享来养#k 经验。");
        if (qid == 20523) qt = (qact == 1 ? "我向#p2060005#要了营养补充品，那我们赶紧喂给#t1902005#吧？快点！ ...哇，效果很快。果然，#p2060005#的药很贵……好了，现在你的#t1902005#已经准备好骑行了。现在取#t1902005#。" : "#t1902005# 都长大了，但是还是很难骑。 #t1902005#骑车的人通常需要比#t1902005#有更强的骨骼，但骨骼要几十年才能变得那么硬……哦，当然，不需要等几十年。");
        if (qid == 20526) qt = (qact == 1 ? "#t1902005#又被吵醒了。小心不要再次丢失。" : "#t1902005#是幻想生物，离开主人超过一定时间，就会自然消失。想再次拥有#t1902005#，#b就必须重新从蛋里唤醒它#k。虽然#p1102002#会代为购买营养剂，但费用仍要重新支付……没办法，努力积累经验，再次唤醒#t1902005#吧。&#xD;&#xA;&#xD;&#xA;#b10,000,000金币#k");
        if (qid == 20528) qt = (qact == 1 ? "哦，我得到了所有婴儿食品。现在，让我们摆脱 #t1902005#。首先，喂他们步骤 1 婴儿食品...然后喂他们步骤 2 婴儿食品...然后喂他们步骤 3 婴儿食品..." : "#t1902005#，长期积累的经验，可以爆发出更强大的存在。但要做到这一点，你需要更强大的食物……不如喂#k，#b#m240000000#龙吃的特殊婴儿食品，让它们像龙一样强大？");
        if (qid == 20532) qt = (qact == 1 ? "把坐骑带来了吗？呼……那么请给我5000万金币，我把坐骑放进特殊温室试试。" : "骑行不仅仅是一次骑行，它是您的伴侣、朋友和宠物。这就是我受你影响的程度……当你变得更强时，我们一起变得更强，这就是骑行。但共同变得更强是有限度的。");
        if (qid == 20534) qt = (qact == 1 ? "哦，你带了10亿金币了吗？好的。然后，按照#p1101001#的建议，我们把#t1902006#放在我们制作的超级温室里，孵化成#t1902007#……" : "是否要将 #t1902006# 增加回 #b#t1902007##k？光是把丢失的行程提高到#t1902006#我就应该感激不已，但这不是太贪心了吗？像你这样失去宝贵骑行的人不值得#t1902007#。");
        if (qid == 20531) qt = "\u597d\u4e45\u4e0d\u89c1\uff0c#h0#\u3002\u542c\u8bf4\u4f60\u6210\u4e3a\u4e86\u9a91\u58eb\u957f\u3002\u8fd9\u5f88\u597d\u2026\u2026\u4f46\u5b83\u4f1a\u7ed9\u4f60\u7684\u9a91\u884c\u5e26\u6765\u95ee\u9898\u3002";
        if (qid == 20522) qt = (qact == 1 ? "筹集完#t1902005#后，我把它给了#p1102002#。" : "#p1102002#说骑士的骑术是通过#t1902005#这种TT来完成的，应该自己养#t1902005#，然后交出一个小鸡蛋……#t1902005#据说#b可以通过分享来养#k 经验。");
        if (qid == 20523) qt = (qact == 1 ? "我向#p2060005#要了营养补充品，那我们赶紧喂给#t1902005#吧？快点！ ...哇，效果很快。果然，#p2060005#的药很贵……好了，现在你的#t1902005#已经准备好骑行了。现在取#t1902005#。" : "#t1902005# 都长大了，但是还是很难骑。 #t1902005#骑车的人通常需要比#t1902005#有更强的骨骼，但骨骼要几十年才能变得那么硬……哦，当然，不需要等几十年。");
        if (qid == 20525) qt = "\u53d1\u751f\u4e86\u4ec0\u4e48\u4e8b\uff1f\u5514...\uff1f  \u4f60\u8f93\u4e86#t1912005#\uff1f\u8fd9\u3002\u8fd9\u662f\u4e00\u4ef6\u5927\u4e8b\u3002  \u6ca1\u6709#t1912005#\u5c31\u4e0d\u80fd\u9a91\u884c\u5417\uff1f ...\u55ef\uff1f\u4f60\u80fd\u7ed9\u6211\u4e00\u4ef6\u65b0\u7684\u5417\uff1f\u55ef...\u5f88\u96be\u652f\u4ed8\u6bd4\u8ba1\u5212\u66f4\u591a\u7684#t1912005#\uff0c\u56e0\u4e3a\u9884\u7b97\u5f88\u7d27\u5f20...\u8fd8\u6709\u5f88\u591a\u5176\u4ed6\u6587\u7ae0...\u5982\u4f60\u6240\u77e5\uff0c\u6ca1\u6709\u529e\u6cd5\u7ed9#p1101002#\u66f4\u591a\u7684\u9884\u7b97...";
        if (qid == 20526) qt = (qact == 1 ? "#t1902005#又被吵醒了。小心不要再次丢失。" : "#t1902005#是幻想生物，离开主人超过一定时间，就会自然消失。想再次拥有#t1902005#，#b就必须重新从蛋里唤醒它#k。虽然#p1102002#会代为购买营养剂，但费用仍要重新支付……没办法，努力积累经验，再次唤醒#t1902005#吧。&#xD;&#xA;&#xD;&#xA;#b10,000,000金币#k");
        if (qid == 20528) qt = (qact == 1 ? "哦，我得到了所有婴儿食品。现在，让我们摆脱 #t1902005#。首先，喂他们步骤 1 婴儿食品...然后喂他们步骤 2 婴儿食品...然后喂他们步骤 3 婴儿食品..." : "#t1902005#，长期积累的经验，可以爆发出更强大的存在。但要做到这一点，你需要更强大的食物……不如喂#k，#b#m240000000#龙吃的特殊婴儿食品，让它们像龙一样强大？");
        if (qid == 20532) qt = (qact == 1 ? "把坐骑带来了吗？呼……那么请给我5000万金币，我把坐骑放进特殊温室试试。" : "骑行不仅仅是一次骑行，它是您的伴侣、朋友和宠物。这就是我受你影响的程度……当你变得更强时，我们一起变得更强，这就是骑行。但共同变得更强是有限度的。");
        if (qid == 20533) qt = "\u8ba9\u6211\u4eec\u628a\u4f60\u7684\u9a91\u884c\u653e\u5728\u4e00\u4e2a\u7279\u6b8a\u7684\u6e29\u5ba4\u91cc......";
        if (qid == 20534) qt = (qact == 1 ? "哦，你带了10亿金币了吗？好的。然后，按照#p1101001#的建议，我们把#t1902006#放在我们制作的超级温室里，孵化成#t1902007#……" : "是否要将 #t1902006# 增加回 #b#t1902007##k？光是把丢失的行程提高到#t1902006#我就应该感激不已，但这不是太贪心了吗？像你这样失去宝贵骑行的人不值得#t1902007#。");
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
