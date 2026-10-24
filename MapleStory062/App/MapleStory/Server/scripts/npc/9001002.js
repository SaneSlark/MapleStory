function recoveredOriginalStart() {
    qfresh = true;
    if (qQuestAction(1, 0, 0)) return;
	cm.sendOk ("岁月如梭,人生就是梦");
	cm.dispose();
}

function recoveredOriginalAction(mode, type, selection) {
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
    if (cm.getQuestStatus(9432) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5317\u6781\u718a\u6ce2\u5947\u7684\u8bf7\u6c42" + "#l"; n++; }
    if (cm.getQuestStatus(9433) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5317\u6781\u718a\u6ce2\u5947\u7684\u6073\u5207\u62dc\u6258 (12\u67087\u65e5)" + "#l"; n++; }
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
        if (cm.getQuestStatus(9432) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9432; } }
        if (cm.getQuestStatus(9433) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9433; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 9432) qt = (qact == 1 ? "#b北极熊波奇#k说，下次还要再带可口可乐的材料来。" : "嘿。您来得正是时候！即使没有，我也在等待有人经过。你认识我弟弟普奇吗？");
        if (qid == 9433) qt = (qact == 1 ? "帮助波奇制作了清凉的可乐，还收到了礼物。波奇说，随时欢迎再带材料来。" : "啊！太热了。这么热的天，我需要喝一杯加冰的可口可乐……对吧？");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 9432) cm.completeQuest(9432);
            if (qid == 9433) cm.completeQuest(9433);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */




// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":9431,"name":"北极熊门廊上的可口可乐","startNpc":9001002,"endNpc":9001002},{"id":9432,"name":"北极熊波奇的请求","startNpc":9001002,"endNpc":9001002},{"id":9433,"name":"北极熊波奇的恳切拜托 (12月7日)","startNpc":9001002,"endNpc":9001002}];
var recoveredMenu = null;
function start() {
    var reader = new java.util.Scanner(new java.io.File("scripts/npc/legacy.js"), "GBK");
    try {
        var factory = eval(String(reader.useDelimiter("(?!)").next()));
        recoveredMenu = factory(cm, recoveredDefs, recoveredOriginalStart, recoveredOriginalAction, "暂时没有可以接取或交付的任务。");
    } finally { reader.close(); }
    recoveredMenu.start();
}
function action(mode, type, selection) {
    if (recoveredMenu) recoveredMenu.action(mode, type, selection);
    else cm.dispose();
}
