/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2120004
   覆盖任务: 9929, 9930, 9931, 9938, 9947, 10075, 10076
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
    if (cm.getQuestStatus(9929) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "玩偶匠人乔纳斯" + "#l"; n++; }
    if (cm.getQuestStatus(9930) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "完美的道具" + "#l"; n++; }
    if (cm.getQuestStatus(9931) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "苏菲莉亚的肖像画" + "#l"; n++; }
    if (cm.getQuestStatus(10075) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ???" + "#l"; n++; }
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
        if (cm.getQuestStatus(9929) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9929; } }
        if (cm.getQuestStatus(9930) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9930; } }
        if (cm.getQuestStatus(9931) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9931; } }
        if (cm.getQuestStatus(10075) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10075; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 9929) qt = "既然和#p2120005#说要去烟囱那边，就进入熄灭的#b壁炉#k，去#m229000300#另一头看看吧。";
        if (qid == 9930) qt = "要制造出完美的娃娃的话，好像必须要有#b#t4031834##k。这样向#b#p2120004##k回答之后，他陷入了沉思。";
        if (qid == 9931) qt = "要制作和女儿相像的完美的娃娃的话，当然就需要#p2120004#——他女儿的#r肖像画#k。这样回答之后，#b#p2120004##k一脸忧郁地陷入了沉思。";
        if (qid == 10075) qt = "? ?? ??? ? ? ????";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 9929) cm.completeQuest(9929);
            if (qid == 9930) cm.completeQuest(9930);
            if (qid == 9931) cm.completeQuest(9931);
            if (qid == 10075) cm.completeQuest(10075);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
