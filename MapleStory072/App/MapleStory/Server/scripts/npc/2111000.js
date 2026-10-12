/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2111000
   覆盖任务: 3302, 3305, 3310, 3311, 3347, 6030
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
    if (cm.getQuestStatus(3302) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "杰努麦斯披风" + "#l"; n++; }
    if (cm.getQuestStatus(3305) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "重新获取杰努麦斯披风" + "#l"; n++; }
    if (cm.getQuestStatus(3310) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "卡森的考试" + "#l"; n++; }
    if (cm.getQuestStatus(3311) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "线索" + "#l"; n++; }
    if (cm.getQuestStatus(3347) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "为了杰努麦斯" + "#l"; n++; }
    if (cm.getQuestStatus(6030) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "卡森的炼金术课程" + "#l"; n++; }
    if ((cm.getQuestStatus(3305) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3305) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3349) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3302) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3347) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3348) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1102135, 1))) { opts += "\r\n#L" + n + "#[接受] " + "重新获取杰努麦斯披风" + "#l"; n++; }
    if ((cm.getQuestStatus(3310) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3309) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "卡森的考试" + "#l"; n++; }
    if ((cm.getQuestStatus(3311) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3310) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "线索" + "#l"; n++; }
    if ((cm.getQuestStatus(3347) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 75) && (cm.getQuestStatus(3349) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3346) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3348) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "为了杰努麦斯" + "#l"; n++; }
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
        if (cm.getQuestStatus(3302) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3302; } }
        if (cm.getQuestStatus(3305) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3305; } }
        if (cm.getQuestStatus(3310) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3310; } }
        if (cm.getQuestStatus(3311) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3311; } }
        if (cm.getQuestStatus(3347) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3347; } }
        if (cm.getQuestStatus(6030) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 6030; } }
        if ((cm.getQuestStatus(3305) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3305) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3349) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3302) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3347) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3348) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1102135, 1))) { qi++; if (selection == qi) { qact = 0; qid = 3305; } }
        if ((cm.getQuestStatus(3310) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3309) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3310; } }
        if ((cm.getQuestStatus(3311) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3310) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3311; } }
        if ((cm.getQuestStatus(3347) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 75) && (cm.getQuestStatus(3349) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3346) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3348) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3347; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3302) qt = "刚才的炼成我都看到了。我看你在考试之柱前面进行炼成，应该是想加入蒙特鸠吧。不过能让柱子起反应还不够。炼成的过程虽然很不错，但是还不知道结果如何，不是吗？";
        if (qid == 3305) qt = "所有的材料都搜集齐了。来，拿着蒙特鸠披风。";
        if (qid == 3310) qt = "成功地控制了#o6110300#啊……";
        if (qid == 3311) qt = "怎么样？去过失踪的炼金术士的家了吗？找到什么和那个时间有关的线索了吗？\r\n#b什么都没找到。 \n#b(也许写着些什么，不过……) \n#b写着机械装甲的制造公式。 \n#b也许不是什么线索……看到了有关坠饰的话……";
        if (qid == 3347) qt = "来，快把#t4161033#给我……我要忘掉这一切，所有关于 #p2111002#的、关于#m261000000#的一切的一切……";
        if (qid == 6030) qt = "去找炼金术士莫力恩学习新技术，他让我去杰努麦斯协会会长卡森那里学习炼金术基础课程。啊……好像会很无聊吧……";
        if (qid == 3305) qt = "#t1102135#弄丢了。如果没有了他的话，其他人就无法知道自己是隶属于杰努麦斯了，怎么办呢？去找杰努麦斯的会长#b#p2111000##k看看有什么办法。";
        if (qid == 3310) qt = "哼……你……就是不久前加入的炼金术士吧……嗯，我听说你做得很不错。首先要谢谢你……不过，我听说除了研究之外，你对一些奇怪的部分很关心，这让我有点担心。\r\n#b您在说什么啊？";
        if (qid == 3311) qt = "你要做的事情是搜索失踪的炼金术士的家。引起事件的研究就是在那个地方进行的。虽然已经搜索过几次，但是还有很多未能发现的东西。特别是#b德朗博士的秘密记事本#k还没被发现……";
        if (qid == 3347) qt = "你……原来是打听#p2111002#的那个人啊。你来这里干嘛呢？……那本书？这个……#b#t4161033##k？！……原来如此。你最终还是发现了#p2111002#的试验……还有因那个试验而陷入危机的#m261000000#的所有秘密。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3302) cm.completeQuest(3302);
            if (qid == 3305) cm.completeQuest(3305);
            if (qid == 3310) cm.completeQuest(3310);
            if (qid == 3311) cm.completeQuest(3311);
            if (qid == 3347) cm.completeQuest(3347);
            if (qid == 6030) cm.completeQuest(6030);
        } else {
            if (qid == 3305) cm.startQuest(3305);
            if (qid == 3310) cm.startQuest(3310);
            if (qid == 3311) cm.startQuest(3311);
            if (qid == 3347) cm.startQuest(3347);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
