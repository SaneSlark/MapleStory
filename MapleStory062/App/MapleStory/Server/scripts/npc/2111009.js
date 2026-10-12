/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2111009
   覆盖任务: 3312, 3313, 3314, 3337, 3362
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
    if (cm.getQuestStatus(3312) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "罗赛伦的研究材料" + "#l"; n++; }
    if (cm.getQuestStatus(3313) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "破坏洛伊德" + "#l"; n++; }
    if (cm.getQuestStatus(3314) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "生命炼金，及失踪的炼金术士" + "#l"; n++; }
    if (cm.getQuestStatus(3337) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "生命炼金的必要性" + "#l"; n++; }
    if (cm.getQuestStatus(3362) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "遭到排斥的研究和阿卡德诺" + "#l"; n++; }
    if ((cm.getQuestStatus(3312) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35) && (cm.getQuestStatus(3304) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "罗赛伦的研究材料" + "#l"; n++; }
    if ((cm.getQuestStatus(3313) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 52) && (cm.getQuestStatus(3312) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "破坏洛伊德" + "#l"; n++; }
    if ((cm.getQuestStatus(3314) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 52) && (cm.getQuestStatus(3313) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "生命炼金，及失踪的炼金术士" + "#l"; n++; }
    if ((cm.getQuestStatus(3337) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 29)) { opts += "\r\n#L" + n + "#[接受] " + "生命炼金的必要性" + "#l"; n++; }
    if ((cm.getQuestStatus(3362) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getLevel() <= 85) && (cm.getQuestStatus(3361) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "遭到排斥的研究和阿卡德诺" + "#l"; n++; }
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
        if (cm.getQuestStatus(3312) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3312; } }
        if (cm.getQuestStatus(3313) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3313; } }
        if (cm.getQuestStatus(3314) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3314; } }
        if (cm.getQuestStatus(3337) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3337; } }
        if (cm.getQuestStatus(3362) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3362; } }
        if ((cm.getQuestStatus(3312) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35) && (cm.getQuestStatus(3304) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3312; } }
        if ((cm.getQuestStatus(3313) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 52) && (cm.getQuestStatus(3312) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3313; } }
        if ((cm.getQuestStatus(3314) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 52) && (cm.getQuestStatus(3313) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3314; } }
        if ((cm.getQuestStatus(3337) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 29)) { qi++; if (selection == qi) { qact = 0; qid = 3337; } }
        if ((cm.getQuestStatus(3362) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getLevel() <= 85) && (cm.getQuestStatus(3361) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3362; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3312) qt = "#t4031694#都搜集到了啊……呵呵呵……谢谢你。这些足够了。现在可以拿这个配药了……";
        if (qid == 3313) qt = "啊哈~100个#o5110301#都干掉了？真是了不起。了不起……没想到你竟然这么强壮。真是太好了！这是报答你辛苦的一点表示，收下吧。";
        if (qid == 3314) qt = "阿卡德诺的#p2111009#。他突然说这段时间我经常帮他的忙，因此想给我一点报酬……虽然有点怀疑，不过还是要往好的方面想。去见见#b#p2111009##k吧。";
        if (qid == 3337) qt = "干得不错。……现在可以做药了。不觉得很有意思吗？因为沙漠毒蝎的毒而失去的眼睛要靠沙漠毒蝎的毒来进行治疗。看起来很危险的东西有时候也能用作有用的东西。就像卡帕莱特的研究一样……";
        if (qid == 3362) qt = "这个就是……犹泰的研究书吗？到底……那个被排斥的炼金术士进行了什么样的研究……我们要来看看吗？";
        if (qid == 3312) qt = "以前没见过你啊……看你的披风应该是隶属于我们卡帕莱特的……是新加入的吗？找我有什么事情吗？虽然很麻烦……不过如果是和研究有关的事情，你就随便问吧……嗯？问我们是做什么研究的？";
        if (qid == 3313) qt = "我还在想#o3110302#很厉害，搜集它的叶子会很困难……奇怪。你……和村子里虚弱的研究者们好像有些不同。如果是一直从事研究的人，应该不会这么强……";
        if (qid == 3314) qt = "啊哈~你真的又来找我了，新人。你虽然是新人，但真的很努力。你帮了我不少忙。真是太感谢了……我因此给你准备了一份小礼物，你愿意收下吗？";
        if (qid == 3337) qt = "你在村外见到#o2110301#那些家伙虽然看上去很可笑，但是却不容易对付。如果不是有一定实力的人，对于初级旅行者或者只知道实验的炼金术士来说，是非常危险的东西……";
        if (qid == 3362) qt = "你……知道#b犹泰#k这个名字吗？看样子应该没听说过吧……也是。他消失已经很久了……他是由于奇怪的研究而同时遭到蒙特鸠和卡帕莱特两边排斥的炼金术士。竟然会受到卡帕莱特的排斥……呵呵……很好笑是不是？";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3312) cm.completeQuest(3312);
            if (qid == 3313) cm.completeQuest(3313);
            if (qid == 3314) cm.completeQuest(3314);
            if (qid == 3337) cm.completeQuest(3337);
            if (qid == 3362) cm.completeQuest(3362);
        } else {
            if (qid == 3312) cm.startQuest(3312);
            if (qid == 3313) cm.startQuest(3313);
            if (qid == 3314) cm.startQuest(3314);
            if (qid == 3337) cm.startQuest(3337);
            if (qid == 3362) cm.startQuest(3362);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
