/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1022006
   覆盖任务: 2065, 2066, 2070, 2116, 2117, 2118, 2144, 2145, 2146, 2147, 9524, 9525, 9528, 9840, 9986, 9987
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
    if (cm.getQuestStatus(2065) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "要找化石。。。" + "#l"; n++; }
    if (cm.getQuestStatus(2070) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "化石研究成果" + "#l"; n++; }
    if (cm.getQuestStatus(2116) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "种植树木" + "#l"; n++; }
    if (cm.getQuestStatus(2118) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "消灭遗迹挖掘地的怪物" + "#l"; n++; }
    if (cm.getQuestStatus(2144) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "传闻的真相" + "#l"; n++; }
    if (cm.getQuestStatus(2145) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "调查木妖" + "#l"; n++; }
    if (cm.getQuestStatus(2146) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "怪木木妖" + "#l"; n++; }
    if (cm.getQuestStatus(2147) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "怪木木妖的种子" + "#l"; n++; }
    if (cm.getQuestStatus(9524) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? (12? 13?)" + "#l"; n++; }
    if (cm.getQuestStatus(9525) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? (12? 14?)" + "#l"; n++; }
    if (cm.getQuestStatus(9840) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(9986) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "琦仙灵的最新消息" + "#l"; n++; }
    if ((cm.getQuestStatus(2065) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20)) { opts += "\r\n#L" + n + "#[接受] " + "要找化石。。。" + "#l"; n++; }
    if ((cm.getQuestStatus(2066) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20) && (cm.getQuestStatus(2065) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "运送化石箱子" + "#l"; n++; }
    if ((cm.getQuestStatus(2116) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20)) { opts += "\r\n#L" + n + "#[接受] " + "种植树木" + "#l"; n++; }
    if ((cm.getQuestStatus(2117) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 25)) { opts += "\r\n#L" + n + "#[接受] " + "挖掘队员杉峰的请托" + "#l"; n++; }
    if ((cm.getQuestStatus(2118) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2117) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "消灭遗迹挖掘地的怪物" + "#l"; n++; }
    if ((cm.getQuestStatus(2144) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35)) { opts += "\r\n#L" + n + "#[接受] " + "传闻的真相" + "#l"; n++; }
    if ((cm.getQuestStatus(2145) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2144) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "调查木妖" + "#l"; n++; }
    if ((cm.getQuestStatus(2146) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2145) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "怪木木妖" + "#l"; n++; }
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
        if (cm.getQuestStatus(2065) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2065; } }
        if (cm.getQuestStatus(2070) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2070; } }
        if (cm.getQuestStatus(2116) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2116; } }
        if (cm.getQuestStatus(2118) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2118; } }
        if (cm.getQuestStatus(2144) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2144; } }
        if (cm.getQuestStatus(2145) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2145; } }
        if (cm.getQuestStatus(2146) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2146; } }
        if (cm.getQuestStatus(2147) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2147; } }
        if (cm.getQuestStatus(9524) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9524; } }
        if (cm.getQuestStatus(9525) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9525; } }
        if (cm.getQuestStatus(9840) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9840; } }
        if (cm.getQuestStatus(9986) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9986; } }
        if ((cm.getQuestStatus(2065) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20)) { qi++; if (selection == qi) { qact = 0; qid = 2065; } }
        if ((cm.getQuestStatus(2066) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20) && (cm.getQuestStatus(2065) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2066; } }
        if ((cm.getQuestStatus(2116) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20)) { qi++; if (selection == qi) { qact = 0; qid = 2116; } }
        if ((cm.getQuestStatus(2117) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 25)) { qi++; if (selection == qi) { qact = 0; qid = 2117; } }
        if ((cm.getQuestStatus(2118) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2117) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2118; } }
        if ((cm.getQuestStatus(2144) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35)) { qi++; if (selection == qi) { qact = 0; qid = 2144; } }
        if ((cm.getQuestStatus(2145) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2144) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2145; } }
        if ((cm.getQuestStatus(2146) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2145) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2146; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2065) qt = "勇士部落附近的东部岩山的考古学家#p1022006#在找什么。。。";
        if (qid == 2070) qt = "欢迎欢迎。你是上次帮我找回化石的那小伙子吧。我从巴缇博士那里听说你帮助她进行了研究。巴缇博士说你是送报告书来的。东西呢？";
        if (qid == 2116) qt = "#t4000195#全部收集好了吗？";
        if (qid == 2118) qt = "#o2230110#和#o2230111#的数量明显减少了许多。";
        if (qid == 2144) qt = "了解到什么情况了吗？快说说。\r\n#b没查到什么。\n有几个看似有用的故事。";
        if (qid == 2145) qt = "谢谢！看来不乐观啊。得再仔细观察观察。";
        if (qid == 2146) qt = "回来了。我拜托的事怎么样了？看看，不说也能感觉得到。大地的气息都不一样了。真的太辛苦你了。你做了一件光荣的事。";
        if (qid == 2147) qt = "99 ％黑巧克力99 ％黑巧克力";
        if (qid == 9524) qt = "????? ???? ??? ???? ????. ?? ?? ??? ??? ???? ?? ??? ???? ?? ?? ?? ??? ?????";
        if (qid == 9525) qt = "?? ?? ?? ???? ????? ?? ?? ?? ??? ????.";
        if (qid == 9840) qt = "#b#p9010010##k? ?? ?? ??? ????… ?? ?? ??? ?????.";
        if (qid == 9986) qt = "你在找我吗? 你想要些什么? \r\n#b我想要雪丝绸的资料.";
        if (qid == 2065) qt = "你好，年轻人。很高兴在这里见到你。我是考古学家#b#p1022006##k。在这里研究古生物的化石。";
        if (qid == 2066) qt = "哦… 就是这个！谢谢。有了你的帮忙。我才能找回这些物品。但是。。。还有一个事情想拜托你，怎么样？你愿意帮我把？";
        if (qid == 2116) qt = "勇士部落变得越来越荒凉了。满是岩石的地形是主要的原因之一，更因为最近在这附近不断进行遗迹的挖掘工作，所以荒废的速度越来越快。不过就算只靠我一个人的力量，也要把勇士部落恢复成以往的样子，你能助我一臂之力吗？";
        if (qid == 2117) qt = "我的朋友#p9040002#目前正在勇士部落附近的遗迹挖掘地从事挖掘工作，他想请你帮忙。最近有一些从没见过的怪物出现在挖掘地附近，影响他进行遗迹挖掘的工作，所以必须有人能够清除掉它们。你能帮他这个忙吗？";
        if (qid == 2118) qt = "什么… 难道… 真的有那种东西吗？";
        if (qid == 2144) qt = "你听到传闻了吗？\r\n#b什么传闻？";
        if (qid == 2145) qt = "你告诉我的情报帮了大忙啊。看来传闻中的树肯定是#b#o3220000##k。而且最近 #m102000000#岩石山木妖出现缺水现象。木妖的树枝变得越来越干枯了。";
        if (qid == 2146) qt = "快来。通过仔细观察你拿过来的 #t4031773#，我确信我的假设是事实。而且会带来比我们想象中还要严重的后果。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2065) cm.completeQuest(2065);
            if (qid == 2070) cm.completeQuest(2070);
            if (qid == 2116) cm.completeQuest(2116);
            if (qid == 2118) cm.completeQuest(2118);
            if (qid == 2144) cm.completeQuest(2144);
            if (qid == 2145) cm.completeQuest(2145);
            if (qid == 2146) cm.completeQuest(2146);
            if (qid == 2147) cm.completeQuest(2147);
            if (qid == 9524) cm.completeQuest(9524);
            if (qid == 9525) cm.completeQuest(9525);
            if (qid == 9840) cm.completeQuest(9840);
            if (qid == 9986) cm.completeQuest(9986);
        } else {
            if (qid == 2065) cm.startQuest(2065);
            if (qid == 2066) cm.startQuest(2066);
            if (qid == 2116) cm.startQuest(2116);
            if (qid == 2117) cm.startQuest(2117);
            if (qid == 2118) cm.startQuest(2118);
            if (qid == 2144) cm.startQuest(2144);
            if (qid == 2145) cm.startQuest(2145);
            if (qid == 2146) cm.startQuest(2146);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
