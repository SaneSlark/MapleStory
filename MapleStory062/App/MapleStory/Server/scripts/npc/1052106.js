/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1052106
   覆盖任务: 2083, 2084, 2085, 2087, 2090, 2091, 4488, 4489, 9391, 9392, 9842, 10088
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
    if (cm.getQuestStatus(2083) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "伊卡鲁斯的滑翔翼" + "#l"; n++; }
    if (cm.getQuestStatus(2084) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "伊卡鲁斯的热气球" + "#l"; n++; }
    if (cm.getQuestStatus(2087) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "传达飞天药水" + "#l"; n++; }
    if (cm.getQuestStatus(2090) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "好无聊1" + "#l"; n++; }
    if (cm.getQuestStatus(2091) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "好无聊2" + "#l"; n++; }
    if (cm.getQuestStatus(4488) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "外卖热牛奶" + "#l"; n++; }
    if (cm.getQuestStatus(9391) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u4f0a\u5361\u6d1b\u65af\u4e22\u5931\u7684\u9080\u8bf7\u51fd" + "#l"; n++; }
    if (cm.getQuestStatus(9842) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u4f0a\u5361\u6d1b\u65af\u7684\u8611\u83c7\u7403" + "#l"; n++; }
    if (cm.getQuestStatus(10088) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u4f0a\u5361\u6d1b\u65af\u7684\u6b22\u547c" + "#l"; n++; }
    if ((cm.getQuestStatus(2083) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 32) && (cm.getQuestStatus(2091) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "伊卡鲁斯的滑翔翼" + "#l"; n++; }
    if ((cm.getQuestStatus(2084) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 37) && (cm.getQuestStatus(2083) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "伊卡鲁斯的热气球" + "#l"; n++; }
    if ((cm.getQuestStatus(2085) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 42) && (cm.getQuestStatus(2089) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2084) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "寻找妖精维英…" + "#l"; n++; }
    if ((cm.getQuestStatus(2090) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10)) { opts += "\r\n#L" + n + "#[接受] " + "好无聊1" + "#l"; n++; }
    if ((cm.getQuestStatus(2091) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getQuestStatus(2090) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "好无聊2" + "#l"; n++; }
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
        if (cm.getQuestStatus(2083) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2083; } }
        if (cm.getQuestStatus(2084) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2084; } }
        if (cm.getQuestStatus(2087) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2087; } }
        if (cm.getQuestStatus(2090) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2090; } }
        if (cm.getQuestStatus(2091) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2091; } }
        if (cm.getQuestStatus(4488) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4488; } }
        if (cm.getQuestStatus(9391) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9391; } }
        if (cm.getQuestStatus(9842) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9842; } }
        if (cm.getQuestStatus(10088) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10088; } }
        if ((cm.getQuestStatus(2083) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 32) && (cm.getQuestStatus(2091) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2083; } }
        if ((cm.getQuestStatus(2084) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 37) && (cm.getQuestStatus(2083) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2084; } }
        if ((cm.getQuestStatus(2085) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 42) && (cm.getQuestStatus(2089) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2084) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2085; } }
        if ((cm.getQuestStatus(2090) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10)) { qi++; if (selection == qi) { qact = 0; qid = 2090; } }
        if ((cm.getQuestStatus(2091) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getQuestStatus(2090) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2091; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2083) qt = "我等你等得好辛苦哦。在你去弄材料的这段时间，我已经完成了漂亮完美的设计图。只要按照这个做出来，我们就一定能在天上飞翔的。材料都弄齐了吗？";
        if (qid == 2084) qt = "正在做结实的篮子呢。现在只要做出巨大的气球就可以啦。我拜托你的那些材料都弄来了吗？";
        if (qid == 2087) qt = "啊，回来了啊！见到维英了吗？药呢？带来了吗？";
        if (qid == 2090) qt = "在堕落都市周围看不到的怪物是？\r\n#b1. 木妖#k \r\r#b2. 蓝蘑菇#k \r\n#b3. 绿水灵#k \r\n#b4. 漂漂猪#k \r\n#b5. 野狼#k";
        if (qid == 2091) qt = "哇！真的都弄来了啊~真谢谢你哦，现在我不会觉得无聊了。我该怎么报答你呢…那请收下这个吧~";
        if (qid == 4488) qt = "#b#9220005##k在温馨小镇#b#9220005##k有话告诉我...";
        if (qid == 9391) qt = "\u6211\u4e22\u5931\u4e86\u4f5c\u4e3a\u513f\u7ae5\u8282\u793c\u7269\u6536\u5230\u7684#b#t04031301##k...\u6211\u60f3\u6211\u5fc5\u987b\u72ec\u81ea\u4fdd\u62a4\u8fd9\u4e2a\u5730\u65b9...\u4e0d\uff0c\u8fd9\u4e0d\u662f#b#t04031301##k\u5417\uff1f\u4f60\u4e0d\u80af\u7ed9\u6211\u5417\uff1f\u90a3\u6211\u4e5f\u53ef\u4ee5\u53bb\u52a8\u7269\u56ed\u4e86...";
        if (qid == 9842) qt = (qact == 1 ? "#b#p1052106##k 帮我做了美味的蘑菇肉丸。" : "啊！危险，小心一点！工地上随时都要注意安全，尤其在工地顶部，必须#b小心坠落#k。什么意思？去顶部看看就知道了……我有些话想告诉你，要听吗？");
        if (qid == 10088) qt = (qact == 1 ? "伊卡洛斯支持绿色运动。" : "您正在开展枫之谷绿色活动。");
        if (qid == 2083) qt = "如果能在那广阔的天空尽情飞翔那该有多好啊…在高高的天上飞翔会是什么心情呢？就算一次也好，真想再天上飞翔啊。\r\n真的能在天上飞吗？\r\n人类是无法飞翔的。";
        if (qid == 2084) qt = "咦，你是上次帮我弄来制作滑翔翼材料的…\r\n做出滑翔翼了吗？";
        if (qid == 2085) qt = "咦，你是上次帮我弄来制作热气球材料的…\r\n热气球做好了吗？";
        if (qid == 2090) qt = "啊…今天可真无聊啊…那个，你有空吗？和我一起玩吧~ 实在是很无聊啊~ 好吗？";
        if (qid == 2091) qt = "你解题真不赖啊~ 可是我还是觉得无聊…那就再接受我的一个请求吧~我想在这个屋顶上玩，帮我弄来#b树枝 40个#k和#b绿液球 40个#k吧~ 拜托了！";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2083) cm.completeQuest(2083);
            if (qid == 2084) cm.completeQuest(2084);
            if (qid == 2087) cm.completeQuest(2087);
            if (qid == 2090) cm.completeQuest(2090);
            if (qid == 2091) cm.completeQuest(2091);
            if (qid == 4488) cm.completeQuest(4488);
            if (qid == 9391) cm.completeQuest(9391);
            if (qid == 9842) cm.completeQuest(9842);
            if (qid == 10088) cm.completeQuest(10088);
        } else {
            if (qid == 2083) cm.startQuest(2083);
            if (qid == 2084) cm.startQuest(2084);
            if (qid == 2085) cm.startQuest(2085);
            if (qid == 2090) cm.startQuest(2090);
            if (qid == 2091) cm.startQuest(2091);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}




// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":4488,"name":"外卖热牛奶","startNpc":9220005,"endNpc":1052106},{"id":4489,"name":"感谢的祝福","startNpc":1052106,"endNpc":9220005},{"id":9391,"name":"伊卡洛斯丢失的邀请函","startNpc":9010000,"endNpc":1052106},{"id":9392,"name":"罗尼丢失的邀请函","startNpc":1052106,"endNpc":1061004}];
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
