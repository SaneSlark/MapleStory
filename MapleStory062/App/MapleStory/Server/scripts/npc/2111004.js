/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2111004
   覆盖任务: 3322, 3323, 3325, 3326, 3328, 3335, 3339, 3340, 3349, 10098
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
    if (cm.getQuestStatus(3322) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "琵丽雅的银坠饰" + "#l"; n++; }
    if (cm.getQuestStatus(3325) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "藏有月光的瓶子" + "#l"; n++; }
    if (cm.getQuestStatus(3328) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "妖精的藏有阳光的瓶子" + "#l"; n++; }
    if (cm.getQuestStatus(3335) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "雪原玫瑰" + "#l"; n++; }
    if (cm.getQuestStatus(3349) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "为了琵丽雅" + "#l"; n++; }
    if (cm.getQuestStatus(10098) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(3322) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3321) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "琵丽雅的银坠饰" + "#l"; n++; }
    if ((cm.getQuestStatus(3323) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 45)) { opts += "\r\n#L" + n + "#[接受] " + "琵丽雅的担忧" + "#l"; n++; }
    if ((cm.getQuestStatus(3326) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 52) && (cm.getQuestStatus(3325) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "琦尼的秘密" + "#l"; n++; }
    if ((cm.getQuestStatus(3339) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 75) && (cm.getQuestStatus(3322) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "德朗博士的地下书库" + "#l"; n++; }
    if ((cm.getQuestStatus(3340) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 75) && (cm.getQuestStatus(3339) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "秘密书的钥匙" + "#l"; n++; }
    if ((cm.getQuestStatus(3349) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 75) && (cm.getQuestStatus(3346) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3347) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3348) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "为了琵丽雅" + "#l"; n++; }
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
        if (cm.getQuestStatus(3322) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3322; } }
        if (cm.getQuestStatus(3325) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3325; } }
        if (cm.getQuestStatus(3328) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3328; } }
        if (cm.getQuestStatus(3335) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3335; } }
        if (cm.getQuestStatus(3349) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3349; } }
        if (cm.getQuestStatus(10098) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10098; } }
        if ((cm.getQuestStatus(3322) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3321) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3322; } }
        if ((cm.getQuestStatus(3323) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 45)) { qi++; if (selection == qi) { qact = 0; qid = 3323; } }
        if ((cm.getQuestStatus(3326) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 52) && (cm.getQuestStatus(3325) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3326; } }
        if ((cm.getQuestStatus(3339) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 75) && (cm.getQuestStatus(3322) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3339; } }
        if ((cm.getQuestStatus(3340) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 75) && (cm.getQuestStatus(3339) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3340; } }
        if ((cm.getQuestStatus(3349) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 75) && (cm.getQuestStatus(3346) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3347) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3348) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3349; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3322) qt = "这是……这上面雕刻的图案是雪原玫瑰。#p2111002#第一次送给我的花……雕刻着雪原玫瑰的银坠饰……以前#p2111002#说要送给我的……您能在#p2111002#的家里发现这个……看样子您真的和他见过面。";
        if (qid == 3325) qt = "啊……您好。旅行者……见到#p2012018#了吗？啊，这就是给孩子配的药啊。还有信……很久没有和弟弟联系，觉得很对不起他。真是太好了……现在有了药，应该能松一口气了。";
        if (qid == 3328) qt = "旅行者……您从#p2012018#那里回来了吗？啊……这就是#p2012018#配的药啊。真是辛苦您了……您帮了我这么多的忙，真是太感谢您了。";
        if (qid == 3335) qt = "……您有什么事情吗？这个……花？是#t4031695#啊……这是很名贵的花，您为什么要送给我啊……嗯？您说是#p2111003#的礼物？";
        if (qid == 3349) qt = "这个笔记本……是#p2111002#失踪前使用过的……笔记本？啊啊……真是太感谢了！只要有这个，就能明白#p2111002#的真实想法了？";
        if (qid == 10098) qt = "???? ?????? ???? ?? ???? ??.";
        if (qid == 3322) qt = "您这是……有什么事情吗？您是来询问有关#p2111002#那个孩子的事情的吧？我不想再谈关于他的任何事情了！对他一点都不了解，就在那里说三道四的话……我不想听。\r\n#b我见到了#p2111002#。也和他说过话。";
        if (qid == 3323) qt = "啊啊……怎么办呢……这种时候要是他在就好了……怎么办才好呢……";
        if (qid == 3326) qt = "啊，您是……前些时间为#p2111005#去配药的旅行者啊。真是谢谢您。不过……\r\n#b#p2111005#怎么样了？";
        if (qid == 3339) qt = "就算是#p2111002#真犯下了什么罪刑，我也不在乎。因为我对他的爱，不会因为他是个罪犯就有所改变。绝对不会……能帮我调查一下\r\n#b #p2111002#吗？";
        if (qid == 3340) qt = "去地下书库看过了吗？我都好久没去了，那里肯定早就乱得不成样子了……您在那里难道没有发现什么吗？\r\n#b发现了一本奇怪的书。";
        if (qid == 3349) qt = "啊……终于来了。在#p2111002#的家里发现什么了吗？他到底想要的是什么……有没有发现什么线索啊？";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3322) cm.completeQuest(3322);
            if (qid == 3325) cm.completeQuest(3325);
            if (qid == 3328) cm.completeQuest(3328);
            if (qid == 3335) cm.completeQuest(3335);
            if (qid == 3349) cm.completeQuest(3349);
            if (qid == 10098) cm.completeQuest(10098);
        } else {
            if (qid == 3322) cm.startQuest(3322);
            if (qid == 3323) cm.startQuest(3323);
            if (qid == 3326) cm.startQuest(3326);
            if (qid == 3339) cm.startQuest(3339);
            if (qid == 3340) cm.startQuest(3340);
            if (qid == 3349) cm.startQuest(3349);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
