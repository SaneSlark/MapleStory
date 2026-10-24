/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1101000
   覆盖任务: 20000, 20408
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
    if ((cm.getQuestStatus(20408) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 120) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20407) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u5973\u7687\u7684\u9a91\u58eb\u6307\u6325\u5b98" + "#l"; n++; }
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
        if ((cm.getQuestStatus(20408) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 120) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20407) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20408; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 20408) qt = (qact == 1 ? "被任命为天鹅骑士团的新领袖。黑巫师苏醒之日，我在女皇面前发誓，我会率先打败黑巫师。" : "我收到了年轻皇后对您所做工作的感谢。她告诉我，为了表彰你在这件事上的努力、成就和贡献，她将任命你为新的骑士长……骑士长？");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
        } else {
            if (qid == 20408) cm.startQuest(20408);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
