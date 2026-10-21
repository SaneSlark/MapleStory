/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2120006
   覆盖任务: 9932, 9933, 9934, 9939, 10063, 10064, 10065, 10077
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
    if (cm.getQuestStatus(9932) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "露迪米拉的耳环" + "#l"; n++; }
    if (cm.getQuestStatus(9933) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "好的音乐" + "#l"; n++; }
    if (cm.getQuestStatus(9934) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "香甜的食物" + "#l"; n++; }
    if (cm.getQuestStatus(10063) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ???1" + "#l"; n++; }
    if (cm.getQuestStatus(10064) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ???" + "#l"; n++; }
    if (cm.getQuestStatus(10077) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ???" + "#l"; n++; }
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
        if (cm.getQuestStatus(9932) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9932; } }
        if (cm.getQuestStatus(9933) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9933; } }
        if (cm.getQuestStatus(9934) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9934; } }
        if (cm.getQuestStatus(10063) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10063; } }
        if (cm.getQuestStatus(10064) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10064; } }
        if (cm.getQuestStatus(10077) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10077; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 9932) qt = "既然和#p2120005#说要去#b#m229000210##k那边，就去乔纳斯的房间看看吧。";
        if (qid == 9933) qt = "觉得舞会上最重要的东西是挑起气氛的#b好的音乐#k。和#b#p2120006##k说了之后，她冷冷地笑了笑。";
        if (qid == 9934) qt = "觉得在舞会上最重要的东西是可以为舞会添香的#b香甜的食物#k。和#b#p2120006##k说了之后，她好像同意地优雅地点了点头。";
        if (qid == 10063) qt = "???? ???? ??? ???? ?? ???? ???? ?? ??? ??? ???? ???? ??~";
        if (qid == 10064) qt = "?? ? ?…. ?? 20?. ??? ??? ???? ??.";
        if (qid == 10077) qt = "??? ???? ????? ??? ????";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 9932) cm.completeQuest(9932);
            if (qid == 9933) cm.completeQuest(9933);
            if (qid == 9934) cm.completeQuest(9934);
            if (qid == 10063) cm.completeQuest(10063);
            if (qid == 10064) cm.completeQuest(10064);
            if (qid == 10077) cm.completeQuest(10077);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
