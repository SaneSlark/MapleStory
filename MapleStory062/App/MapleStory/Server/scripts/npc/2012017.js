/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2012017
   覆盖任务: 3065, 3066, 3068, 3101, 4201, 4202, 4203, 6031, 6210, 6222, 6223, 6312, 6313, 8726, 8727, 8728, 9412
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
    if (cm.getQuestStatus(3065) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "秀兹的兴趣" + "#l"; n++; }
    if (cm.getQuestStatus(3066) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "秀兹的奇怪发明" + "#l"; n++; }
    if (cm.getQuestStatus(3068) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "秀兹的研究材料" + "#l"; n++; }
    if (cm.getQuestStatus(3101) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "秀兹的新发明" + "#l"; n++; }
    if (cm.getQuestStatus(6210) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "乌云" + "#l"; n++; }
    if (cm.getQuestStatus(6222) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "逆属性 召唤物 理论" + "#l"; n++; }
    if (cm.getQuestStatus(6312) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "逆属性召唤物理论" + "#l"; n++; }
    if (cm.getQuestStatus(8726) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "莉萨的复仇" + "#l"; n++; }
    if (cm.getQuestStatus(8727) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "莉萨的计划" + "#l"; n++; }
    if (cm.getQuestStatus(4201) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "莉萨的报复" + "#l"; n++; }
    if (cm.getQuestStatus(4202) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "秀兹的假设计图研究材料" + "#l"; n++; }
    if (cm.getQuestStatus(6031) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "秀兹的科学课程" + "#l"; n++; }
    if (cm.getQuestStatus(9412) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "休斯需要橡皮擦" + "#l"; n++; }
    if ((cm.getQuestStatus(3065) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35)) { opts += "\r\n#L" + n + "#[接受] " + "秀兹的兴趣" + "#l"; n++; }
    if ((cm.getQuestStatus(3066) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35) && (cm.getQuestStatus(3065) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "秀兹的奇怪发明" + "#l"; n++; }
    if ((cm.getQuestStatus(3068) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3068) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 35) && (cm.getQuestStatus(3066) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1102061, 1))) { opts += "\r\n#L" + n + "#[接受] " + "秀兹的研究材料" + "#l"; n++; }
    if ((cm.getQuestStatus(6210) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(6210) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && ((cm.getJob().getId() == 422)) && (cm.haveItem(4161021, 1)) && (cm.haveItem(2280001, 1))) { opts += "\r\n#L" + n + "#[接受] " + "乌云" + "#l"; n++; }
    if ((cm.getQuestStatus(6222) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 212)) && (cm.getQuestStatus(6221) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "逆属性 召唤物 理论" + "#l"; n++; }
    if ((cm.getQuestStatus(6223) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 212)) && (cm.getQuestStatus(6222) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "召唤物的骨架" + "#l"; n++; }
    if ((cm.getQuestStatus(6312) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 222)) && (cm.getQuestStatus(6311) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "逆属性召唤物理论" + "#l"; n++; }
    if ((cm.getQuestStatus(6313) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 222)) && (cm.getQuestStatus(6312) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "召唤物的骨架" + "#l"; n++; }
    if ((cm.getQuestStatus(8727) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(8726) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031391, 1))) { opts += "\r\n#L" + n + "#[接受] " + "莉萨的计划" + "#l"; n++; }
    if ((cm.getQuestStatus(8728) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(8727) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "秀兹大错特错" + "#l"; n++; }
    if ((cm.getQuestStatus(9412) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(9412) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 10) && (cm.haveItem(4001038, 1)) && (cm.haveItem(4001039, 1)) && (cm.haveItem(4001040, 1)) && (cm.haveItem(4001041, 1)) && (cm.haveItem(4001042, 1)) && (cm.haveItem(4001043, 1))) { opts += "\r\n#L" + n + "#[接受] " + "休斯需要橡皮擦" + "#l"; n++; }
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
        if (cm.getQuestStatus(3065) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3065; } }
        if (cm.getQuestStatus(3066) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3066; } }
        if (cm.getQuestStatus(3068) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3068; } }
        if (cm.getQuestStatus(3101) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3101; } }
        if (cm.getQuestStatus(6210) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 6210; } }
        if (cm.getQuestStatus(6222) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 6222; } }
        if (cm.getQuestStatus(6312) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 6312; } }
        if (cm.getQuestStatus(8726) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 8726; } }
        if (cm.getQuestStatus(8727) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 8727; } }
        if (cm.getQuestStatus(4201) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4201; } }
        if (cm.getQuestStatus(4202) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4202; } }
        if (cm.getQuestStatus(6031) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 6031; } }
        if (cm.getQuestStatus(9412) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9412; } }
        if ((cm.getQuestStatus(3065) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35)) { qi++; if (selection == qi) { qact = 0; qid = 3065; } }
        if ((cm.getQuestStatus(3066) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35) && (cm.getQuestStatus(3065) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3066; } }
        if ((cm.getQuestStatus(3068) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3068) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 35) && (cm.getQuestStatus(3066) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1102061, 1))) { qi++; if (selection == qi) { qact = 0; qid = 3068; } }
        if ((cm.getQuestStatus(6210) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(6210) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && ((cm.getJob().getId() == 422)) && (cm.haveItem(4161021, 1)) && (cm.haveItem(2280001, 1))) { qi++; if (selection == qi) { qact = 0; qid = 6210; } }
        if ((cm.getQuestStatus(6222) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 212)) && (cm.getQuestStatus(6221) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 6222; } }
        if ((cm.getQuestStatus(6223) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 212)) && (cm.getQuestStatus(6222) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 6223; } }
        if ((cm.getQuestStatus(6312) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 222)) && (cm.getQuestStatus(6311) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 6312; } }
        if ((cm.getQuestStatus(6313) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 222)) && (cm.getQuestStatus(6312) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 6313; } }
        if ((cm.getQuestStatus(8727) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(8726) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031391, 1))) { qi++; if (selection == qi) { qact = 0; qid = 8727; } }
        if ((cm.getQuestStatus(8728) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(8727) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 8728; } }
        if ((cm.getQuestStatus(9412) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(9412) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 10) && (cm.haveItem(4001038, 1)) && (cm.haveItem(4001039, 1)) && (cm.haveItem(4001040, 1)) && (cm.haveItem(4001041, 1)) && (cm.haveItem(4001042, 1)) && (cm.haveItem(4001043, 1))) { qi++; if (selection == qi) { qact = 0; qid = 9412; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3065) qt = "木偶都弄到了吗？让我看看…状态良好，数量也正确… 呃呃…看来你很努力哦，那这次的事情我就睁一只眼闭一只眼了。";
        if (qid == 3066) qt = "让我看看…材料好像都弄来了哦。看你这么热心找材料，确实很想要我做的东西吧？呼呼呼… 还挺识货的，算你有眼光。等一下…";
        if (qid == 3068) qt = "你来得正好! 之前剩下的一些研究材料都用光了，我正在烦恼呢。";
        if (qid == 3101) qt = "你!你把 #t4000158#和 #t4000159#带来做什么! 现在就卖掉! 还能值几个钱。。。 什么？是受了 #p2060006##委托而来?";
        if (qid == 6210) qt = "好~ 所有材料都齐了？真有一套。 来，用这个应该可以马上就能做好制造乌云的机器的。只要组装好就可以了，来，接着。";
        if (qid == 6222) qt = "哦! 材料都收集全了! 好，那我们就开始做#b#t4031451##k吧! 不过要花点时间，过会再来找我说话好了。";
        if (qid == 6312) qt = "哦! 材料都收集全了! 好，那我们就开始做#b#t4031497##k吧! 不过要花点时间，过会再来找我说画好了。";
        if (qid == 8726) qt = "我有说错话吗? 我只透露有关莉萨的传言罢了, 但她似乎非常不满！对她来说，这是对她的毁谤！ I不管怎样，她是不会发起那化妆品的．． 同时间，她决定要向那人张开复仇行动．于是他做了个假设计图出来要我教给秀兹．";
        if (qid == 8727) qt = "得到假设计图后, 秀兹卡变得欲死欲仙, 也当然．．她并不知道那是假的～ 到了这个地步，我还蛮怜惜秀兹的！ 我就帮忙秀兹收集在计划图的30 火石球的石片, 30 石球的石片, 15 蝴蝶精灵的触角s, 和 30 冰石球的石片.\n\n#i4000085# #t4000085# #b#c4000085# / 30#k\n#i4000063# #t4000063# #b#c4000063# / 30#k\n\n#i4000068# #t4000068# #b#c4000068# / 15#k\n#i4000084# #t4000084# #b#c4000084# / 30#k";
        if (qid == 4201) qt = "呼~最近总是这样无精打采无法集中精力。。。发明没有进展，谁要是能给我一张传说中的设计图就好了。。。";
        if (qid == 4202) qt = "好的！都收集齐全了，我开始发挥我的能力了。。。";
        if (qid == 6031) qt = "去找炼金术士莫力恩学习新技术，他让我去古怪的科学家秀兹那里学习科学基础课程。啊……我有点担心。";
        if (qid == 9412) qt = "太感谢了。我会好好利用这些橡皮的。谢谢！";
        if (qid == 3065) qt = "啊！不要碰我的宝箱！你是谁？怎么进来的。这里所有的东西都是我的，不许碰！…这些都是我的宝物，你知道我为了收集这些费了多少力气吗？\n啊啊，你脚下的是！！那是不久前好不容易才得到的小海豹木偶！！你要怎么赔我！！";
        if (qid == 3066) qt = "傻乎乎的站在那里干什么？哦，应该是来找我的吧。呼呼呼… 难道我这完美的发明已经传开了？干嘛一直站在那里？你不是来参观我的发明的吗？一直站在那能看到什么？#b\n哦不…我只是… 并不是一定要看那个东西…#I";
        if (qid == 3068) qt = "呃，原来是你啊？好久不见，我做给你的东西用的怎么样了？不错吧。每次用它的时候都会对我这个天才发明的作品感到佩服吧？哈哈哈哈";
        if (qid == 6210) qt = "什么? 不要妨碍我研究，赶紧去一边! 快?给我什么书？说什么东西呢？你这个人，你以为我是连那么重要的研究资料都到处丢掉的傻瓜? 乌云制造方法? 谁做那么无聊的研究! …制造乌云的方法?让我看一下书。";
        if (qid == 6222) qt = "来这个研究室有什么事情吗？逆属性魔法? 哦，我这个天才科学家#b#p2012017##k虽然懂得科学知识和魔法，但第一次听说过逆反的属性魔法! 简单来说，这种理论就是天方夜谭!";
        if (qid == 6223) qt = "好好调整各种矿物的比率后混合在一起，让它们好好吸收各种属性后... 再开启这里的开关按钮! 好! 成功了，这就是#b#t4031451##k!";
        if (qid == 6312) qt = "来这个研究室有什么事情吗？逆属性魔法?哦，我这个天才科学家#b#p2012017##k虽然懂得科学知识和魔法，但第一次听说过逆反的属性魔法! 简单来说，这种理论就是天方夜谭!";
        if (qid == 6313) qt = "好好调整各种矿物的比率后混合在一起，让它们好好吸收各种属性后... 再开启这里的开关按钮后! 好! 成功了，这就是#b#t4031451##k!";
        if (qid == 8727) qt = "哇！你怎么弄到它的？千真万确！这是所有的科学家梦寐以求的蓝图啊！相信我，绝对没错，我一眼就能看出来！怎样？你愿意和我合伙搞这项研究吗？想想看，成功后一定名流千古啊！";
        if (qid == 8728) qt = "（爆炸声。面前的一切化为乌有。）为什么？怎么会这样？不！不可能！我的实验室！我努力的结晶！我确实按部就班地进行这一切的步骤啊！一定是哪里出了问题！";
        if (qid == 9412) qt = "你是怎么找到这里的？如你所见，我正忙着做研究……不过我遇到了一个问题，研究陷入了瓶颈。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3065) cm.completeQuest(3065);
            if (qid == 3066) cm.completeQuest(3066);
            if (qid == 3068) cm.completeQuest(3068);
            if (qid == 3101) cm.completeQuest(3101);
            if (qid == 6210) cm.completeQuest(6210);
            if (qid == 6222) cm.completeQuest(6222);
            if (qid == 6312) cm.completeQuest(6312);
            if (qid == 8726) cm.completeQuest(8726);
            if (qid == 8727) cm.completeQuest(8727);
            if (qid == 4201) cm.completeQuest(4201);
            if (qid == 4202) cm.completeQuest(4202);
            if (qid == 6031) cm.completeQuest(6031);
            if (qid == 9412) cm.completeQuest(9412);
        } else {
            if (qid == 3065) cm.startQuest(3065);
            if (qid == 3066) cm.startQuest(3066);
            if (qid == 3068) cm.startQuest(3068);
            if (qid == 6210) cm.startQuest(6210);
            if (qid == 6222) cm.startQuest(6222);
            if (qid == 6223) cm.startQuest(6223);
            if (qid == 6312) cm.startQuest(6312);
            if (qid == 6313) cm.startQuest(6313);
            if (qid == 8727) cm.startQuest(8727);
            if (qid == 8728) cm.startQuest(8728);
            if (qid == 9412) cm.startQuest(9412);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
