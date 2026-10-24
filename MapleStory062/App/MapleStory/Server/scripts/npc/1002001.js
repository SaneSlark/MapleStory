/* 	Cody
 * 	By Moogra
*/

function recoveredOriginalStart() {
    qfresh = true;
    if (qQuestAction(1, 0, 0)) return;
    cm.sendOK("你好,你喜欢这个游戏么??");
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
    if (cm.getQuestStatus(9633) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u63d0\u5965\u65e7\u65e5\u56de\u5fc6II" + "#l"; n++; }
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
        if (cm.getQuestStatus(9633) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9633; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 9633) qt = (qact == 1 ? "这太神奇了~我不敢相信我已经收集了所有这些......我变得比以往任何时候都更强大。" : "已经有一段时间了。你的冒险经历如何？看到你成长了这么多，我感到非常自豪。我想测试一下你的实力到底有多强。你想尝试一下吗？");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 9633) cm.completeQuest(9633);
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
var recoveredDefs = [{"id":9450,"name":"西奥回忆旧事1","startNpc":1002001,"endNpc":1002001}];
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
