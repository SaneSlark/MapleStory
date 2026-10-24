/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2081011
   覆盖任务: 3714
   ============================================================ */
importPackage(net.sf.odinms.client);

var status = -1;

function recoveredOriginalStart() {
    status = -1;
    qfresh = true;
    action(1, 0, 0);
}

function recoveredOriginalAction(mode, type, selection) {
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
    if ((cm.getQuestStatus(3714) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3714) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3706) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4001094, 1))) { opts += "\r\n#L" + n + "#[接受] " + "\u542c\u8bf4\u6709\u4eba\u5f88\u60f3\u5403#t4032040#\uff0c\u4f1a\u662f\u8c01\u5462\uff1f  \u6211\u4eec\u53bb#b#p9010000##k\u95ee\u95ee\u5427\u3002" + "#l"; n++; }
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
        if ((cm.getQuestStatus(3714) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3714) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3706) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4001094, 1))) { qi++; if (selection == qi) { qact = 0; qid = 3714; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3714) qt = (qact == 1 ? "月妙终于吃到了想吃的美食。" : "#p9001105# 说他已经吃过月庙年糕70年了，现在已经厌倦了年糕。现在他想吃#t2022352#……吃了#t2022352#的#p9001105#说他第一次吃这么好吃的东西，让他继续给他带来。");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
        } else {
            if (qid == 3714) cm.startQuest(3714);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}




// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":3714,"name":"听说有人很想吃#t4032040#，会是谁呢？  我们去#b#p9010000##k问问吧。","startNpc":2081011,"endNpc":2081011}];
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
