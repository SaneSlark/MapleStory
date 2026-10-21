/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2120005
   覆盖任务: 9928, 9935, 9937, 10062, 10063, 10065, 10066, 10076, 10077
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
    if (cm.getQuestStatus(9928) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "奇怪的少女" + "#l"; n++; }
    if (cm.getQuestStatus(9935) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "苏菲莉亚的眼泪" + "#l"; n++; }
    if (cm.getQuestStatus(9937) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "想去其他的地方。" + "#l"; n++; }
    if (cm.getQuestStatus(10062) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ??1" + "#l"; n++; }
    if (cm.getQuestStatus(10065) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ???" + "#l"; n++; }
    if (cm.getQuestStatus(10066) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(10076) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ???" + "#l"; n++; }
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
        if (cm.getQuestStatus(9928) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9928; } }
        if (cm.getQuestStatus(9935) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9935; } }
        if (cm.getQuestStatus(9937) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9937; } }
        if (cm.getQuestStatus(10062) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10062; } }
        if (cm.getQuestStatus(10065) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10065; } }
        if (cm.getQuestStatus(10066) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10066; } }
        if (cm.getQuestStatus(10076) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10076; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 9928) qt = "按#p2120000#所说，来到了住宅的#b左侧房间#k，和那里的人们进行对话。";
        if (qid == 9935) qt = "听从#p2120005#的请求，在住宅里四处寻找她认识的人。但是记得#p2120005#的人都不愿意去看望#p2120005#……怎么办呢……去见见#b#p2120005##k吧。";
        if (qid == 9937) qt = "如果觉得好像回答#b苏菲莉亚#k的时候回答错了的话，就去和她说想要#b重新选择#k吧。";
        if (qid == 10062) qt = "?? ????\r\n#b?? ???? ??? ??? ?? ???";
        if (qid == 10065) qt = "?, ???? ?????. ?? ? ??? ? ??? ??? ??? ???. ?? ???? ? ????...\r\n#b ??? ?? ???? ????";
        if (qid == 10066) qt = "?????? #b??? ?? 20?#k? ?? ?????...?? ???? ??.";
        if (qid == 10076) qt = "??? ???? ????? ??? ????.";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 9928) cm.completeQuest(9928);
            if (qid == 9935) cm.completeQuest(9935);
            if (qid == 9937) cm.completeQuest(9937);
            if (qid == 10062) cm.completeQuest(10062);
            if (qid == 10065) cm.completeQuest(10065);
            if (qid == 10066) cm.completeQuest(10066);
            if (qid == 10076) cm.completeQuest(10076);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
