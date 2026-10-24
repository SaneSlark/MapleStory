/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2120007
   覆盖任务: 9940, 9941, 9943, 10079
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
    if (cm.getQuestStatus(9940) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "隐藏的房间" + "#l"; n++; }
    if (cm.getQuestStatus(9943) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "忘却的名字" + "#l"; n++; }
    if (cm.getQuestStatus(10079) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u4e54\u4f0a\u7684\u9057\u61be" + "#l"; n++; }
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
        if (cm.getQuestStatus(9940) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9940; } }
        if (cm.getQuestStatus(9943) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9943; } }
        if (cm.getQuestStatus(10079) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10079; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 9940) qt = "……";
        if (qid == 9943) qt = "拿到#p2120005#的#t4031837#之后，#r#p2120000##k静静地看着娃娃……眼神看上去有点阴沉。他用娃娃来做什么呢？";
        if (qid == 10079) qt = (qact == 1 ? "变身为佩托并解除了乔伊的诅咒。" : "这是什么？你想解除诅咒吗？");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 9940) cm.completeQuest(9940);
            if (qid == 9943) cm.completeQuest(9943);
            if (qid == 10079) cm.completeQuest(10079);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
