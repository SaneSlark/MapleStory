function start() {
    qfresh = true;
    if (qQuestAction(1, 0, 0)) return;
	cm.sendOk ("岁月如梭,人生就是梦");
	cm.dispose();
}

function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
}

/* AUTO-QUEST-BEGIN */
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
    if (cm.getQuestStatus(10021) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "你是真正的特殊工作人员！" + "#l"; n++; }
    if (cm.getQuestStatus(10218) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ????? ??" + "#l"; n++; }
    if (cm.getQuestStatus(10210) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "佳佳的分析" + "#l"; n++; }
    if (cm.getQuestStatus(10211) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "佳佳的分析" + "#l"; n++; }
    if (cm.getQuestStatus(10212) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "佳佳的分析" + "#l"; n++; }
    if (cm.getQuestStatus(10213) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "佳佳的分析" + "#l"; n++; }
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
        if (cm.getQuestStatus(10021) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10021; } }
        if (cm.getQuestStatus(10218) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10218; } }
        if (cm.getQuestStatus(10210) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10210; } }
        if (cm.getQuestStatus(10211) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10211; } }
        if (cm.getQuestStatus(10212) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10212; } }
        if (cm.getQuestStatus(10213) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10213; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 10021) qt = "#b#p9000021##k说为2008年夏天一直陪伴着枫之岛世界的我准备了特殊的礼物……";
        if (qid == 10218) qt = "??? ? ??? ??? ????? ??? ??? ??? ??? ???? ?? ?????? ??? ????? ???? ? ??.";
        if (qid == 10210) qt = "搜集 #t4001237# 送给佳佳";
        if (qid == 10211) qt = "搜集  #t4001238# 送给佳佳";
        if (qid == 10212) qt = "搜集 #t4001239# 送给 佳佳";
        if (qid == 10213) qt = "搜集  #t4001240#送给 佳佳";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 10021) cm.completeQuest(10021);
            if (qid == 10218) cm.completeQuest(10218);
            if (qid == 10210) cm.completeQuest(10210);
            if (qid == 10211) cm.completeQuest(10211);
            if (qid == 10212) cm.completeQuest(10212);
            if (qid == 10213) cm.completeQuest(10213);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
