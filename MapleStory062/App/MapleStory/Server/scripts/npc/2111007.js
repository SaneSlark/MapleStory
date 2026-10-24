/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2111007
   覆盖任务: 3300, 3301, 3302, 3303, 3304, 3316, 3317, 3377, 3381, 9416, 9879
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
    if (cm.getQuestStatus(3300) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "和后街小贩的交易" + "#l"; n++; }
    if (cm.getQuestStatus(3301) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "杰努麦斯协会会长的考试" + "#l"; n++; }
    if (cm.getQuestStatus(3303) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "阿卡德诺协会会长的考试" + "#l"; n++; }
    if (cm.getQuestStatus(3316) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "后街小贩的情报" + "#l"; n++; }
    if (cm.getQuestStatus(3377) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "后街小贩的菜单" + "#l"; n++; }
    if (cm.getQuestStatus(9416) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u7ecf\u7eaa\u4eba\u97e9\u4e0e\u795e\u79d8\u77ff\u77f3" + "#l"; n++; }
    if ((cm.getQuestStatus(3300) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30)) { opts += "\r\n#L" + n + "#[接受] " + "和后街小贩的交易" + "#l"; n++; }
    if ((cm.getQuestStatus(3301) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "杰努麦斯协会会长的考试" + "#l"; n++; }
    if ((cm.getQuestStatus(3302) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3301) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "杰努麦斯披风" + "#l"; n++; }
    if ((cm.getQuestStatus(3303) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "阿卡德诺协会会长的考试" + "#l"; n++; }
    if ((cm.getQuestStatus(3304) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3303) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "阿卡德诺披风" + "#l"; n++; }
    if ((cm.getQuestStatus(3317) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3316) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "德朗博士的朋友" + "#l"; n++; }
    if ((cm.getQuestStatus(3377) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3377) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3376) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.haveItem(4031785, 1))) { opts += "\r\n#L" + n + "#[接受] " + "后街小贩的菜单" + "#l"; n++; }
    if ((cm.getQuestStatus(9416) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(9416) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4001197, 1))) { opts += "\r\n#L" + n + "#[接受] " + "\u7ecf\u7eaa\u4eba\u97e9\u4e0e\u795e\u79d8\u77ff\u77f3" + "#l"; n++; }
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
        if (cm.getQuestStatus(3300) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3300; } }
        if (cm.getQuestStatus(3301) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3301; } }
        if (cm.getQuestStatus(3303) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3303; } }
        if (cm.getQuestStatus(3316) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3316; } }
        if (cm.getQuestStatus(3377) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3377; } }
        if (cm.getQuestStatus(9416) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9416; } }
        if ((cm.getQuestStatus(3300) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30)) { qi++; if (selection == qi) { qact = 0; qid = 3300; } }
        if ((cm.getQuestStatus(3301) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3301; } }
        if ((cm.getQuestStatus(3302) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3301) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3302; } }
        if ((cm.getQuestStatus(3303) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3300) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3303; } }
        if ((cm.getQuestStatus(3304) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3303) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3304; } }
        if ((cm.getQuestStatus(3317) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3316) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3317; } }
        if ((cm.getQuestStatus(3377) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3377) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3376) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.haveItem(4031785, 1))) { qi++; if (selection == qi) { qact = 0; qid = 3377; } }
        if ((cm.getQuestStatus(9416) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(9416) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4001197, 1))) { qi++; if (selection == qi) { qact = 0; qid = 9416; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3300) qt = "10000枫币都带来了吗？带来了的话，我就告诉你有关#b#m261000000##k的情报……";
        if (qid == 3301) qt = "魔法和科学的结合。#b纯粹的炼金术的世界——杰努麦斯#k。但是在#m261000000#对立的时期，杰努麦斯好像不接纳外部人员。不过我真的很想加入杰努麦斯……去找#b#p2111007##k看看吧。";
        if (qid == 3303) qt = "炼金术和机械工学的结合。#b全新的炼金术的世界——阿卡德诺#k。阿卡德诺好像不接纳外部人员。不过我真的很想加入阿卡德诺……去找#b#p2111007##k看看吧。";
        if (qid == 3316) qt = "……有什么需要的就和我说。物品？情报？还是人？什么东西我都能帮你搞到……嗯？失踪的炼金术士#p2111002#……吗？嗯……对了。他失踪之前不久经常来找我#p2111007#。但是，你为什么要关于#p2111002#的情报？要知道什么情报？";
        if (qid == 3377) qt = "枫币都准备好了吗？那我就把菜单给你。";
        if (qid == 9416) qt = (qact == 1 ? "你拿到所有物品了吗？我应该去哪里检查？啊，不是我不信任你。然而，在任何交易中，信任是关键......" : "等等，我在等，#h0#。我花了很多钱才得到关于你的信息，但幸运的是结果是正确的。没必要那么谨慎。我只是想给你一个优惠...");
        if (qid == 3300) qt = "嗯……是我没见过的陌生面孔。你一定不是这里的人……看起来不像是炼金术士。是冒险家吗……嗯。一看就知道。虽然实力还可以，不过应该是经常会碰到危险的那类人。不是吗？\r\n#b你是怎么知道的？";
        if (qid == 3301) qt = "纯粹的研究学问的学者的村庄？真好笑。不过也没有像马嘉提亚这样为了各自的目的而分成多个势力相互争斗的。真正追求学问的人早就已经消失了……不过，这对后街小贩来说倒是件好事。\r\n#b对立很严重吗？";
        if (qid == 3302) qt = "哦，你来的真好。我这个全心全意为顾客服务的#p2111007#，已经帮你搞到了你要的东西。来，只要有了这个，#p2111000#的考试就不是问题了。你快拿着。";
        if (qid == 3303) qt = "纯粹的研究学问的学者的村庄？真好笑。不过也没有像马嘉提亚这样为了各自的目的而分成多个势力相互争斗的。真正追求学问的人早就已经消失了……不过，这对后街小贩来说倒是件好事。\r\n#b对立很严重吗？";
        if (qid == 3304) qt = "呵呵……你来的正好。之前跟你说过，我从认识的炼金术士那里拿到了一份研究报告书。这是用宝石换来的报告书，所以一定要小心保管……虽然比起这个，卡帕莱特更重视会长的面试……";
        if (qid == 3317) qt = "#p2111002#好像是做了某种危险的实验。他在家的四周砌了围墙，不让任何人靠近。之前他家的周围到处都是陷阱，不过现在都被炼金术士们撤掉了。但是比这更重要的情报应该是这个。你想听听吗？";
        if (qid == 3377) qt = "……你想要什么？情报？东西？还是……比这更隐秘的东西？不管是什么，只要你说句话。没有我后街小贩搞不到的东西。只要你做好了付钱的准备，不管想买多少都行，嗯……？美味食物的#b菜单#k？";
        if (qid == 9416) qt = (qact == 1 ? "你拿到所有物品了吗？我应该去哪里检查？啊，不是我不信任你。然而，在任何交易中，信任是关键......" : "等等，我在等，#h0#。我花了很多钱才得到关于你的信息，但幸运的是结果是正确的。没必要那么谨慎。我只是想给你一个优惠...");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3300) cm.completeQuest(3300);
            if (qid == 3301) cm.completeQuest(3301);
            if (qid == 3303) cm.completeQuest(3303);
            if (qid == 3316) cm.completeQuest(3316);
            if (qid == 3377) cm.completeQuest(3377);
            if (qid == 9416) cm.completeQuest(9416);
        } else {
            if (qid == 3300) cm.startQuest(3300);
            if (qid == 3301) cm.startQuest(3301);
            if (qid == 3302) cm.startQuest(3302);
            if (qid == 3303) cm.startQuest(3303);
            if (qid == 3304) cm.startQuest(3304);
            if (qid == 3317) cm.startQuest(3317);
            if (qid == 3377) cm.startQuest(3377);
            if (qid == 9416) cm.startQuest(9416);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
