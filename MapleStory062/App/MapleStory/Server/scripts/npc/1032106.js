/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1032106
   覆盖任务: 2085, 2086, 2087, 2089, 2154, 2155, 3042, 9220, 9350, 10086
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
    if (cm.getQuestStatus(2085) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "寻找妖精维英…" + "#l"; n++; }
    if (cm.getQuestStatus(2086) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "飞天药水的材料" + "#l"; n++; }
    if (cm.getQuestStatus(2089) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "帮忙写作业" + "#l"; n++; }
    if (cm.getQuestStatus(2154) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "故事的主人公" + "#l"; n++; }
    if (cm.getQuestStatus(2155) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "猎蜗牛" + "#l"; n++; }
    if (cm.getQuestStatus(9220) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? ?! ?? ??!" + "#l"; n++; }
    if (cm.getQuestStatus(9350) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???" + "#l"; n++; }
    if (cm.getQuestStatus(10086) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? ?? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(2086) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 42) && (cm.getQuestStatus(2085) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "飞天药水的材料" + "#l"; n++; }
    if ((cm.getQuestStatus(2087) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 42) && (cm.getQuestStatus(2086) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "传达飞天药水" + "#l"; n++; }
    if ((cm.getQuestStatus(2089) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10)) { opts += "\r\n#L" + n + "#[接受] " + "帮忙写作业" + "#l"; n++; }
    if ((cm.getQuestStatus(2155) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20) && (cm.getQuestStatus(2154) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "猎蜗牛" + "#l"; n++; }
    if ((cm.getQuestStatus(3042) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 40)) { opts += "\r\n#L" + n + "#[接受] " + "转交神秘的材料" + "#l"; n++; }
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
        if (cm.getQuestStatus(2085) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2085; } }
        if (cm.getQuestStatus(2086) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2086; } }
        if (cm.getQuestStatus(2089) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2089; } }
        if (cm.getQuestStatus(2154) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2154; } }
        if (cm.getQuestStatus(2155) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2155; } }
        if (cm.getQuestStatus(9220) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9220; } }
        if (cm.getQuestStatus(9350) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9350; } }
        if (cm.getQuestStatus(10086) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10086; } }
        if ((cm.getQuestStatus(2086) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 42) && (cm.getQuestStatus(2085) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2086; } }
        if ((cm.getQuestStatus(2087) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 42) && (cm.getQuestStatus(2086) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2087; } }
        if ((cm.getQuestStatus(2089) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10)) { qi++; if (selection == qi) { qact = 0; qid = 2089; } }
        if ((cm.getQuestStatus(2155) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20) && (cm.getQuestStatus(2154) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2155; } }
        if ((cm.getQuestStatus(3042) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 40)) { qi++; if (selection == qi) { qact = 0; qid = 3042; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2085) qt = "魔法密林的#b妖精维英#k希望将好不容易制作完成的药水转交给伊卡鲁斯。只要有这个药，伊卡鲁斯就可以飞上天空了吗？好！那得赶快交给伊卡鲁斯…";
        if (qid == 2086) qt = "呃，什么啊，真的都弄来了吗？可是这算什么吗？魔女草叶子都枯掉了，这样还想让我作药吗？\r\n干吗没事找事啊？\r\n我看还可以啊？";
        if (qid == 2089) qt = "都弄来了啊！我得赶紧做完药水再完成别的作业了。喂，人类！多亏了你我才可以完成这些作业，这是我以前做过的药水，对我来说没什么用，就给你吧…";
        if (qid == 2154) qt = "嗯？你……是人类？到这儿干嘛？什么？阿洛伊？";
        if (qid == 2155) qt = "蜗牛壳全部拿来了吗?让我看看。一，二，三……好！一个都没落下全部拿来了。你问用在什么地方？因为伊卡路斯说练三只蜗牛技术的时候能用得着，所以我答应帮他弄到。做得不错！";
        if (qid == 9220) qt = "??? ?? ??? ?? ?? ??? ??? ?? ????";
        if (qid == 9350) qt = "?? ?????? ??? ??? ?? ??? ??? ??? ? ? ??? ?? ?? ?? ??? ???? ? ? ? ??? ?????! ?? ?? ??? ??? ????";
        if (qid == 10086) qt = "?? ?? ?????? ???? ?? ???? ??.";
        if (qid == 2086) qt = "为什么人类会在这种地方？我不想和人类说话，赶紧离开这里吧。\r\n我也不想和你说话！\r\n关于“飞翔之药”…";
        if (qid == 2087) qt = "把这个这样搅一下…把那个和这个混在一起…喏~完成了，拿着。";
        if (qid == 2089) qt = "唔唔…喂，你！你有空吗？没有就算了…想要拜托你一件事情…噢，不，与其说是拜托，我想让你替我做一件事情，有兴趣吗？";
        if (qid == 2155) qt = "哼~原来你真正感兴趣的是红蜗牛王而不是阿洛伊，不能直接告诉你～要想得到有关 红蜗牛王的信息就得帮我做件事儿。";
        if (qid == 3042) qt = "喂，那边的！是的，人类... 就是说你！看起来还比较强，想不想变得更强？有兴趣的话就听听我的话。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2085) cm.completeQuest(2085);
            if (qid == 2086) cm.completeQuest(2086);
            if (qid == 2089) cm.completeQuest(2089);
            if (qid == 2154) cm.completeQuest(2154);
            if (qid == 2155) cm.completeQuest(2155);
            if (qid == 9220) cm.completeQuest(9220);
            if (qid == 9350) cm.completeQuest(9350);
            if (qid == 10086) cm.completeQuest(10086);
        } else {
            if (qid == 2086) cm.startQuest(2086);
            if (qid == 2087) cm.startQuest(2087);
            if (qid == 2089) cm.startQuest(2089);
            if (qid == 2155) cm.startQuest(2155);
            if (qid == 3042) cm.startQuest(3042);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
