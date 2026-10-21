/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1052103
   覆盖任务: 1118, 2029, 2030, 2031, 2032, 2033, 2034, 2103, 2218, 9171, 9172, 9173
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
    if (cm.getQuestStatus(1118) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "内拉的爱情证书" + "#l"; n++; }
    if (cm.getQuestStatus(2029) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "防具店老板的拜托" + "#l"; n++; }
    if (cm.getQuestStatus(2030) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "休咪的拜托" + "#l"; n++; }
    if (cm.getQuestStatus(2031) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "安德里亚的拜托" + "#l"; n++; }
    if (cm.getQuestStatus(2032) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "药店老板的拜托" + "#l"; n++; }
    if (cm.getQuestStatus(2033) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "克利思" + "#l"; n++; }
    if (cm.getQuestStatus(2034) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "曼斯塔的拜托" + "#l"; n++; }
    if (cm.getQuestStatus(9171) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(9172) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ? ??" + "#l"; n++; }
    if (cm.getQuestStatus(9173) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???" + "#l"; n++; }
    if ((cm.getQuestStatus(1118) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(1118) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031686, 1))) { opts += "\r\n#L" + n + "#[接受] " + "内拉的爱情证书" + "#l"; n++; }
    if ((cm.getQuestStatus(2029) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 15)) { opts += "\r\n#L" + n + "#[接受] " + "防具店老板的拜托" + "#l"; n++; }
    if ((cm.getQuestStatus(2030) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 15) && (cm.getQuestStatus(2029) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "休咪的拜托" + "#l"; n++; }
    if ((cm.getQuestStatus(2031) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 15) && (cm.getQuestStatus(2030) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "安德里亚的拜托" + "#l"; n++; }
    if ((cm.getQuestStatus(2032) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 25) && (cm.getQuestStatus(2031) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "药店老板的拜托" + "#l"; n++; }
    if ((cm.getQuestStatus(2033) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 25) && (cm.getQuestStatus(2032) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "克利思" + "#l"; n++; }
    if ((cm.getQuestStatus(2034) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 25) && (cm.getQuestStatus(2033) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "曼斯塔的拜托" + "#l"; n++; }
    if ((cm.getQuestStatus(2103) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10)) { opts += "\r\n#L" + n + "#[接受] " + "内拉的梦" + "#l"; n++; }
    if ((cm.getQuestStatus(2218) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2214) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031894, 1))) { opts += "\r\n#L" + n + "#[接受] " + "内拉的情报" + "#l"; n++; }
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
        if (cm.getQuestStatus(1118) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 1118; } }
        if (cm.getQuestStatus(2029) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2029; } }
        if (cm.getQuestStatus(2030) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2030; } }
        if (cm.getQuestStatus(2031) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2031; } }
        if (cm.getQuestStatus(2032) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2032; } }
        if (cm.getQuestStatus(2033) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2033; } }
        if (cm.getQuestStatus(2034) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2034; } }
        if (cm.getQuestStatus(9171) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9171; } }
        if (cm.getQuestStatus(9172) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9172; } }
        if (cm.getQuestStatus(9173) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9173; } }
        if ((cm.getQuestStatus(1118) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(1118) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031686, 1))) { qi++; if (selection == qi) { qact = 0; qid = 1118; } }
        if ((cm.getQuestStatus(2029) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 15)) { qi++; if (selection == qi) { qact = 0; qid = 2029; } }
        if ((cm.getQuestStatus(2030) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 15) && (cm.getQuestStatus(2029) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2030; } }
        if ((cm.getQuestStatus(2031) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 15) && (cm.getQuestStatus(2030) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2031; } }
        if ((cm.getQuestStatus(2032) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 25) && (cm.getQuestStatus(2031) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2032; } }
        if ((cm.getQuestStatus(2033) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 25) && (cm.getQuestStatus(2032) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2033; } }
        if ((cm.getQuestStatus(2034) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 25) && (cm.getQuestStatus(2033) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2034; } }
        if ((cm.getQuestStatus(2103) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10)) { qi++; if (selection == qi) { qact = 0; qid = 2103; } }
        if ((cm.getQuestStatus(2218) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2214) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031894, 1))) { qi++; if (selection == qi) { qact = 0; qid = 2218; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 1118) qt = "您把 40 #t4000015#s带回来了. 我终于感受到您的诚恳. 我把爱的见证献给您，证明您的爱.";
        if (qid == 2029) qt = "哦。。。你这么快点就回来了！我早就知道你会很轻松的。好！我应该给你礼物。这是以前#b#p1051001##k给我的#b#t2010004##k。听说这对冒险者特好，快拿去吧。";
        if (qid == 2030) qt = "哟。。。你这么就快回来了。上次也是解决得很好，真是了不起阿~~ 好！你问题解决得这么快，我应该给你礼物。这是#b#p1052102##k他自己做的#b#t2020002##k。听说这是对冒险者非常有用。";
        if (qid == 2031) qt = "哟。。。你这么快就回来了。上次也是解决得真好，真是了不起的~~ 好！你问题解决得这么快，我应该给你礼物。这是#b#p1052101##k他自己做的手套。这确实是对冒险者非常有用的东西。来，收下吧。";
        if (qid == 2032) qt = "果然是你。。。我早就知道你能解决这个问题~ 上次处理得不错，这次也这么好。真是不错！好。你已经完成了我的要求，我应该送你礼物。这是#b#p1051002##k给我的#b100个#t2000002##k。听说对冒险者很有用的东西。快拿去吧。";
        if (qid == 2033) qt = "果然是你。。。我早就知道你能解决这个问题~ 上次也处理得不错了，真是好样得！你已经解决了我的请求，我应该送你礼物。这是#b#p1052003##k给我的冶炼好的#b1个#t4011001##k和#b1个#t4011000##k。听说对冒险者很有用的东西。快拿去吧。";
        if (qid == 2034) qt = "果然是你。我早就知道你很快可以完成~ 上次也是做得不错~ 真是了不起阿！作为谢礼题，我应该送你礼物。#b#p1051000##k送了你一双鞋，希望对的你冒险之旅有帮助，赶快收下吧。";
        if (qid == 9171) qt = "?????. ?? ??? ?? ?? ????? ????? ?? ?? ? ???.. ???, ?? ????";
        if (qid == 9172) qt = "??! ???? 20 ??? ?? ? ???? ?? ????";
        if (qid == 9173) qt = "???? ???? ??? ?????";
        if (qid == 1118) qt = "嗨! 您想要爱的见证...? 我听说爱的力量是很强的. 好希望能用它让我的病情好转... 您觉得你拥有真爱吗? 怎么样？您应该可以通过我的测试吧。";
        if (qid == 2029) qt = "哟？好像是陌生人嘛！我都不认识你，你肯定不是本地人。我叫#b#p1052103##k，是这个村落的消息通，没有我不知到的事。";
        if (qid == 2030) qt = "哟！正好刚才我收到一个请求。这次是总是坐在地铁站前面的#b#p1052102##k需要帮助。她几天前从朋友那里收到了一只小狗，她想给小狗做温暖而舒服的房子。";
        if (qid == 2031) qt = "哟！正好，刚才我收到一个请求。这次是美发店的助手#b#p1052101##k需要帮助。其实#b#p1052101##k是老光棍，他每天自己做吃饭，但他说觉得又麻烦又无聊～";
        if (qid == 2032) qt = "你是上次解决#b#p1052101##k的问题的那家伙吧？说不定他现在可能用你给他收集的原料做好了海鲜汤在那里享受呢。这段时间你好像变得更强大了嘛。非常好。。。看来你可以解决更难的问题了。";
        if (qid == 2033) qt = "哟！你来得正好。正巧来了新的问题。武器店的#b#p1052003##k最近总是睡不舒服很难受，据说有人偷走了他常用的枕头。偷旧枕头有什么好的。。。真想知道到底谁偷的。";
        if (qid == 2034) qt = "哟！你来得正好，正巧有新的请求。你认识武器店的老板#b#p1051000##k吗？我们村落的人都知道他是在这里最厉害的美食家。而且他只喜欢贵的东西！";
        if (qid == 2103) qt = "好奇怪哦.. \r\n #b世上本来就有很多奇怪的事情啦。\r\n 什么事情？#k";
        if (qid == 2218) qt = "根据#t4031894#上的情报，#p1052103#好像也是吉姆所说的情报员之一。去见见#b#p1052103##k吧。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 1118) cm.completeQuest(1118);
            if (qid == 2029) cm.completeQuest(2029);
            if (qid == 2030) cm.completeQuest(2030);
            if (qid == 2031) cm.completeQuest(2031);
            if (qid == 2032) cm.completeQuest(2032);
            if (qid == 2033) cm.completeQuest(2033);
            if (qid == 2034) cm.completeQuest(2034);
            if (qid == 9171) cm.completeQuest(9171);
            if (qid == 9172) cm.completeQuest(9172);
            if (qid == 9173) cm.completeQuest(9173);
        } else {
            if (qid == 1118) cm.startQuest(1118);
            if (qid == 2029) cm.startQuest(2029);
            if (qid == 2030) cm.startQuest(2030);
            if (qid == 2031) cm.startQuest(2031);
            if (qid == 2032) cm.startQuest(2032);
            if (qid == 2033) cm.startQuest(2033);
            if (qid == 2034) cm.startQuest(2034);
            if (qid == 2103) cm.startQuest(2103);
            if (qid == 2218) cm.startQuest(2218);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
