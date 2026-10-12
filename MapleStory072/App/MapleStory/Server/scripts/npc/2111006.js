/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2111006
   覆盖任务: 3318, 3319, 3320, 3321, 3353, 3358, 3359, 3360
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
    if (cm.getQuestStatus(3318) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "幽灵琶尔文" + "#l"; n++; }
    if (cm.getQuestStatus(3319) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "琶尔文的实验室" + "#l"; n++; }
    if (cm.getQuestStatus(3321) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "失踪的炼金术士——德朗博士" + "#l"; n++; }
    if (cm.getQuestStatus(3358) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "琶尔文的出入证" + "#l"; n++; }
    if (cm.getQuestStatus(3359) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "寻找主密码" + "#l"; n++; }
    if (cm.getQuestStatus(3360) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "密码认证" + "#l"; n++; }
    if ((cm.getQuestStatus(3318) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 52)) { opts += "\r\n#L" + n + "#[接受] " + "幽灵琶尔文" + "#l"; n++; }
    if ((cm.getQuestStatus(3319) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3309) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3318) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3314) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "琶尔文的实验室" + "#l"; n++; }
    if ((cm.getQuestStatus(3320) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3317) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3311) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3319) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "琶尔文知道的事情" + "#l"; n++; }
    if ((cm.getQuestStatus(3353) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 75) && (cm.getQuestStatus(3346) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "德朗博士所希望的" + "#l"; n++; }
    if ((cm.getQuestStatus(3358) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3318) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "琶尔文的出入证" + "#l"; n++; }
    if ((cm.getQuestStatus(3359) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3358) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "寻找主密码" + "#l"; n++; }
    if ((cm.getQuestStatus(3360) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3359) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "密码认证" + "#l"; n++; }
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
        if (cm.getQuestStatus(3318) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3318; } }
        if (cm.getQuestStatus(3319) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3319; } }
        if (cm.getQuestStatus(3321) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3321; } }
        if (cm.getQuestStatus(3358) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3358; } }
        if (cm.getQuestStatus(3359) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3359; } }
        if (cm.getQuestStatus(3360) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3360; } }
        if ((cm.getQuestStatus(3318) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 52)) { qi++; if (selection == qi) { qact = 0; qid = 3318; } }
        if ((cm.getQuestStatus(3319) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3309) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3318) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3314) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3319; } }
        if ((cm.getQuestStatus(3320) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3317) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3311) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3319) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3320; } }
        if ((cm.getQuestStatus(3353) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 75) && (cm.getQuestStatus(3346) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3353; } }
        if ((cm.getQuestStatus(3358) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3318) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3358; } }
        if ((cm.getQuestStatus(3359) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3358) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3359; } }
        if ((cm.getQuestStatus(3360) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3359) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3360; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3318) qt = "你好……我叫#p2111006#……是这个研究室的研究员……嗯……不过你的表情怎么这样？怎么好像看到了什么可怕的东西一样……？";
        if (qid == 3319) qt = "哦哦！#o6110301#全部都干掉了！真是了不起！比之前的那个炼金术士更厉害！";
        if (qid == 3321) qt = "……嗯……你呆呆地在看什么呢。我觉得你说的那个人可能就是那个炼金术士，所以我才把你送过去……怎么样？是他吗？嗯……看来不是他。也是，他和你不同，好像一直很阴沉忧郁，也很难跟他说话。\r\n#b他是在什么地方啊？";
        if (qid == 3358) qt = "哦哦哦！没错，就是这个，就是这个！这就是我以前用过的出入证。什么？用这个出入证不能进出秘密通道？怎么可能……";
        if (qid == 3359) qt = "100个#t4000363#搜集到了啊。哦哦！真了不起！好，那我就来组合上面的认证号码……";
        if (qid == 3360) qt = "怎么样？能使用秘密通道了吗？果然是这样。看来我疯老头的脑袋还没有生锈嘛。当然好像本来就没有头哦……";
        if (qid == 3318) qt = "……那边是谁啊？好像有谁在那里吧……虽然不知道是谁，过来帮一下忙……";
        if (qid == 3319) qt = "这个研究室里平常没什么人来。所以你一进研究室我就注意到了。不过没想到能这样和你说话……我觉得我真是幸运。事实上我很害怕，快坚持不下去了。\r\n#b您害怕什么啊？";
        if (qid == 3320) qt = "#p2111006#看到的炼金术士是不是就是失踪的炼金术士#r#p2111002##k？去见见#b#p2111006##k吧。";
        if (qid == 3353) qt = "不小心进入了#m261020401#地区……唠唠叨叨的幽灵#b#p2111006##k过来和我说话。不太想听他唠叨……该怎么办呢？";
        if (qid == 3358) qt = "在#m261000000#没有我#p2111006#不知道的事情。#m261000000#的什么地方有什么东西我比任何人都清楚～进行禁止的实验的炼金术士们使用的秘密通道我也很清楚。呵呵呵……你想知道秘密通道的情况吗？";
        if (qid == 3359) qt = "呃……看来是时间太长了，出入证无法通过秘密通道入口的认证。怎么会这样……哼。不过我#p2111006#总会有办法让你可以使用秘密通道的！你就再相信我一次！";
        if (qid == 3360) qt = "#p2111006#告诉了我一串冗长复杂的主密码，说这是可以自由出入秘密通道的密码。哦哦……这么复杂很可能会忘记，最好把它记在什么地方。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3318) cm.completeQuest(3318);
            if (qid == 3319) cm.completeQuest(3319);
            if (qid == 3321) cm.completeQuest(3321);
            if (qid == 3358) cm.completeQuest(3358);
            if (qid == 3359) cm.completeQuest(3359);
            if (qid == 3360) cm.completeQuest(3360);
        } else {
            if (qid == 3318) cm.startQuest(3318);
            if (qid == 3319) cm.startQuest(3319);
            if (qid == 3320) cm.startQuest(3320);
            if (qid == 3353) cm.startQuest(3353);
            if (qid == 3358) cm.startQuest(3358);
            if (qid == 3359) cm.startQuest(3359);
            if (qid == 3360) cm.startQuest(3360);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
