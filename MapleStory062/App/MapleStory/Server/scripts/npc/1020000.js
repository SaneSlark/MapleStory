/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1020000
   覆盖任务: 2000, 2001, 2148, 9331, 9526, 10090
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
    if (cm.getQuestStatus(2000) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "黑牛酋长的家修理" + "#l"; n++; }
    if (cm.getQuestStatus(2001) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "黑牛酋长盖房子" + "#l"; n++; }
    if (cm.getQuestStatus(2148) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "传闻的真相-黑牛酋长" + "#l"; n++; }
    if (cm.getQuestStatus(9331) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u548c\u52c7\u58eb\u90e8\u843d\u4e00\u8d77\u9001\u997a\u5b50" + "#l"; n++; }
    if (cm.getQuestStatus(9526) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u4e07\u5723\u8282\u7cd6\u679c\u6d3e\u9001\uff01" + "#l"; n++; }
    if (cm.getQuestStatus(10090) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u4e3a\u4e0e\u732a\u5171\u821e\u52a0\u6cb9" + "#l"; n++; }
    if ((cm.getQuestStatus(2000) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "黑牛酋长的家修理" + "#l"; n++; }
    if ((cm.getQuestStatus(2001) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(2000) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "黑牛酋长盖房子" + "#l"; n++; }
    if ((cm.getQuestStatus(2148) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2144) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "传闻的真相-黑牛酋长" + "#l"; n++; }
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
        if (cm.getQuestStatus(2000) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2000; } }
        if (cm.getQuestStatus(2001) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2001; } }
        if (cm.getQuestStatus(2148) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2148; } }
        if (cm.getQuestStatus(9331) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9331; } }
        if (cm.getQuestStatus(9526) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9526; } }
        if (cm.getQuestStatus(10090) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10090; } }
        if ((cm.getQuestStatus(2000) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 2000; } }
        if ((cm.getQuestStatus(2001) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(2000) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2001; } }
        if ((cm.getQuestStatus(2148) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2144) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 2148; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2000) qt = "真了不起的！收集了这么多…看来你也不是一个等闲之辈呀！嗯...好吧。我按上次的约定给你盾牌。这是我非常喜爱的盾牌，只是现在不用了。你可要珍惜阿。";
        if (qid == 2001) qt = "这...就是我儿子丢失的那张地契呀！而且你给我收集了盖房子需要的材料！ 真是太感谢你呀。这样我可以和我的亲戚一起住在#m102000000#了…!对了，这是我的一点心意…";
        if (qid == 2148) qt = "去找在#m102000000#生活了很长时间的#b#p1020000##k问问吧。";
        if (qid == 9331) qt = "\u54e6\uff0c\u8fd9\u662f\u4e00\u7bc7\u6e29\u6696\u7684#t2022058#\u65e5\u5fd7\u3002\u4e00\u5b9a\u5f88\u597d\u5403\u5427\uff1f  #t2022058#\u662f\u6211\u6700\u559c\u6b22\u7684\u98df\u7269\u3002\u975e\u5e38\u611f\u8c22\u4f60\u7ed9\u6211\u5e26\u6765\u8fd9\u4e48\u597d\u5403\u7684#t2022058#\uff0c\u8fd8\u8fdc\u9053\u800c\u6765\u7ed9\u6211\u62dc\u5e74\u3002\u8fd9\u51e0\u5929\u4f60\u5728\u51c6\u5907\u796d\u7940\u684c\u5417\uff1f\u90a3\u4e48\uff0c\u4f60\u77e5\u9053\u6446\u796d\u684c\u65f6\uff0c\u4e1c\u8fb9\u653e\u7ea2\u679c#t2010000#\u6216#t2022055#\uff0c\u897f\u8fb9\u653e\u767d\u679c#t2022054#\u53eb\u4ec0\u4e48\u5417\uff1f \\r\\n#L0# \u674e\u4e54\u4e54\uff08\u67a3\u6817\u68a8\u67be\uff09 #l\\r\\n#L1# \u6d2a\u6d1e\u767d\u897f\uff08\u7ea2\u4e1c\u767d\u897f\uff09 #l\\r\\n#L2# \u5de6\u4fdd\u4f51\u60e0\uff08\u5de6\u4fdd\u4f51\u60e0\uff09 #l\\r\\n#L3# \u9c7c\u3001\u4e1c\u3001\u8089\u897f";
        if (qid == 9526) qt = "\u4f60\u4e3a\u4ec0\u4e48\u6765\u89c1\u6211\uff1f\u4f60\u7ed9\u5b69\u5b50\u4eec\u5e26\u4e86\u7cd6\u679c\u5417\uff1f\u6211\u5f88\u62c5\u5fc3\uff0c\u56e0\u4e3a\u6211\u6ca1\u6709\u4efb\u4f55\u7cd6\u679c\u53ef\u4ee5\u5206\u53d1\u7ed9\u5b69\u5b50\u4eec\uff0c\u4f46\u7ed3\u679c\u5f88\u597d\u3002";
        if (qid == 10090) qt = (qact == 1 ? "与猪共舞支持绿色运动。" : "绿色运动正在进行中。如果您想得到我的支持，请再次与我联系！");
        if (qid == 2000) qt = "你可不可以把#b#t4000003# #e30#n个#k和 #b#t4000018# #e50#n个#k拿来？这次我打算修理我的房子。如果愿意的话，我就送你一个好#b盾牌#k。这个盾牌对我是没用的。你打退木怪的时候可以获得我需要的东西。";
        if (qid == 2001) qt = "哦~是你呀。几天不见你好像出名了嘛。总之上次多亏你，我的房子才得以修缮一新。 但这可怎么办呢？住在#m100000000#的我的亲戚都要办到我这里来呀…真是的。还得盖新房子，不过什么材料都没有…";
        if (qid == 2148) qt = "什么事？\r\n#b听说过鬼树吗？";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2000) cm.completeQuest(2000);
            if (qid == 2001) cm.completeQuest(2001);
            if (qid == 2148) cm.completeQuest(2148);
            if (qid == 9331) cm.completeQuest(9331);
            if (qid == 9526) cm.completeQuest(9526);
            if (qid == 10090) cm.completeQuest(10090);
        } else {
            if (qid == 2000) cm.startQuest(2000);
            if (qid == 2001) cm.startQuest(2001);
            if (qid == 2148) cm.startQuest(2148);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}




// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":9526,"name":"万圣节糖果派送！","startNpc":1012003,"endNpc":1020000}];
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
