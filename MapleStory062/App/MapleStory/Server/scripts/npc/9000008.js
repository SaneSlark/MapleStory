/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 9000008
   覆盖任务: 2216, 20713
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
    if (cm.getQuestStatus(20713) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(2216) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2214) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031894, 1))) { opts += "\r\n#L" + n + "#[接受] " + "权达开的情报" + "#l"; n++; }
    if ((cm.getQuestStatus(20713) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20713) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20714) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20712) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.haveItem(4032138, 1))) { opts += "\r\n#L" + n + "#[接受] " + "????? ??" + "#l"; n++; }
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
        if (cm.getQuestStatus(20713) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20713; } }
        if ((cm.getQuestStatus(2216) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2214) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031894, 1))) { qi++; if (selection == qi) { qact = 0; qid = 2216; } }
        if ((cm.getQuestStatus(20713) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(20713) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20714) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(20712) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.haveItem(4032138, 1))) { qi++; if (selection == qi) { qact = 0; qid = 20713; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 20713) qt = "??? ?????? ?? ?? ???. ?... ???! #t4032138#? ?????!";
        if (qid == 2216) qt = "根据#t4031894#上的情报，#p9000008#好像也是吉姆所说的情报员之一。去见见#b#p9000008##k吧。";
        if (qid == 20713) qt = "#p1103002#? ?? ??? ??? ???? ??? ? ? ???! #p1103002#? ?? ??? ??? ??? ????! ?? ??? ????? ????!";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 20713) cm.completeQuest(20713);
        } else {
            if (qid == 2216) cm.startQuest(2216);
            if (qid == 20713) cm.startQuest(20713);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
