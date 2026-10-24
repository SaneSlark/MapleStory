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
    if (cm.getQuestStatus(10021) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "你是真正的特殊工作人员！" + "#l"; n++; }
    if (cm.getQuestStatus(10218) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u52a0\u52a0\u7684\u5723\u8bde\u56de\u5fc6" + "#l"; n++; }
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
        if (qid == 10218) qt = (qact == 1 ? "我找到了 加加 想要的礼物。 加加一边回忆起儿时快乐的圣诞节，一边心情放松，给了鲁道夫一条特殊的绷带，她说这是她自己制作的，只能贴在鲁道夫的红鼻子上。看到加加嘟哝着“我又想要一份礼物……”我感觉下次我和她说话时她会再要一份礼物。  我10分钟后回来..." : "让我们为 加加 带来一些能够勾起圣诞节回忆的东西吧！他说，如果加加能收集她年轻时收到的礼物并送给她，他就会报答她。那是什么？嗯……这次我没办法了。如果我想不起来了，我只能回去问加加了……");
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


// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":10218,"name":"加加的圣诞回忆","startNpc":9000021,"endNpc":9000021}];
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
