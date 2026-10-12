/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2050002
   覆盖任务: 3419, 3453, 3455, 3456, 8080, 8081, 9413
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
    if (cm.getQuestStatus(3419) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "与葛雷士兵的交易" + "#l"; n++; }
    if (cm.getQuestStatus(8080) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "懒惰的外星人格雷" + "#l"; n++; }
    if (cm.getQuestStatus(8081) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "傲慢的外星人格雷" + "#l"; n++; }
    if (cm.getQuestStatus(3453) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "Arti99 ％黑巧克力icial Combatant J99 ％黑巧克力no" + "#l"; n++; }
    if (cm.getQuestStatus(3455) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "葛雷士兵" + "#l"; n++; }
    if (cm.getQuestStatus(3456) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "葛雷士兵" + "#l"; n++; }
    if (cm.getQuestStatus(9413) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "向外星人葛雷复仇" + "#l"; n++; }
    if ((cm.getQuestStatus(3419) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 44)) { opts += "\r\n#L" + n + "#[接受] " + "与葛雷士兵的交易" + "#l"; n++; }
    if ((cm.getQuestStatus(8081) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50) && (cm.getQuestStatus(8080) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "傲慢的外星人格雷" + "#l"; n++; }
    if ((cm.getQuestStatus(3455) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3455) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3457) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031927, 1))) { opts += "\r\n#L" + n + "#[接受] " + "葛雷士兵" + "#l"; n++; }
    if ((cm.getQuestStatus(3456) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3457) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031928, 1))) { opts += "\r\n#L" + n + "#[接受] " + "葛雷士兵" + "#l"; n++; }
    if ((cm.getQuestStatus(9413) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(9413) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3420) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4001038, 1)) && (cm.haveItem(4001039, 1)) && (cm.haveItem(4001040, 1)) && (cm.haveItem(4001041, 1)) && (cm.haveItem(4001042, 1)) && (cm.haveItem(4001043, 1))) { opts += "\r\n#L" + n + "#[接受] " + "向外星人葛雷复仇" + "#l"; n++; }
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
        if (cm.getQuestStatus(3419) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3419; } }
        if (cm.getQuestStatus(8080) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 8080; } }
        if (cm.getQuestStatus(8081) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 8081; } }
        if (cm.getQuestStatus(3453) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3453; } }
        if (cm.getQuestStatus(3455) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3455; } }
        if (cm.getQuestStatus(3456) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3456; } }
        if (cm.getQuestStatus(9413) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9413; } }
        if ((cm.getQuestStatus(3419) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 44)) { qi++; if (selection == qi) { qact = 0; qid = 3419; } }
        if ((cm.getQuestStatus(8081) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50) && (cm.getQuestStatus(8080) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 8081; } }
        if ((cm.getQuestStatus(3455) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3455) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3457) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031927, 1))) { qi++; if (selection == qi) { qact = 0; qid = 3455; } }
        if ((cm.getQuestStatus(3456) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3457) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031928, 1))) { qi++; if (selection == qi) { qact = 0; qid = 3456; } }
        if ((cm.getQuestStatus(9413) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(9413) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3420) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4001038, 1)) && (cm.haveItem(4001039, 1)) && (cm.haveItem(4001040, 1)) && (cm.haveItem(4001041, 1)) && (cm.haveItem(4001042, 1)) && (cm.haveItem(4001043, 1))) { qi++; if (selection == qi) { qact = 0; qid = 9413; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3419) qt = "哦。。。你真的收集完了3个#t4031116#啊？好。。。你这么辛苦的帮助我们，我就给你谢礼。这是随时会召唤我们的召唤包。但你要小心，因为我的朋友们很危险！";
        if (qid == 8080) qt = "喂喂，你吼什么吼？干什么？怎么？既然钱已经汇了，你现在就想要机器？好好好，冷静点！";
        if (qid == 8081) qt = "呜哇，身为人类你还挺不赖的。好，那我们现在就是朋友了~";
        if (qid == 3453) qt = "人类，有什么事? 虽然我们葛雷人乐意跟人类对话, 但现在不是时候… 什么? 您想了解震诺? 为什么突然对震诺的兴趣? 喔? 震诺带给我们麻烦?";
        if (qid == 3455) qt = "我能从您的表情断定您已做了决定. 签了终身为奴隶的合约无法控制喜悦吗? …哇? 没兴致开玩笑啊?";
        if (qid == 3456) qt = "啊… 超声波解码器! 你竟偷听了我的思想? 太可恶了! 人类! 清除您从我脑里头走的思想! 啊, 竟遭到人类的侮辱!";
        if (qid == 9413) qt = "谢谢你。真不敢相信你愿意把这么重要的东西给我。我必须好好报答你。这样吧，我把#b#t01302049##k送给你。这是我们外星人制造的武器。";
        if (qid == 3419) qt = "你好！外星人会说地球的语言，你很吃惊吧？哈哈。。。我们外星人是为你们帮助而来的。所以你不用太紧张。看起来你已经去过地球本部吧？那你可不可以帮我一下？";
        if (qid == 8081) qt = "我随时可以把机器发给你……不过……你得先帮我弄一样东西来。怎么样？";
        if (qid == 3455) qt = "您… 您回来了啊. 虽然很高兴再见到您，我没空和您交谈. 对不起? \r\n #b(打开超声波解码器.)#k";
        if (qid == 3456) qt = "您… 您回来了啊. 虽然很高兴再见到您，我没空和您交谈. 对不起? \r\n #b(打开超声波解码器.)#k";
        if (qid == 9413) qt = "嘿，最近怎么样？我们外星人对你慷慨的帮助感激不尽。多亏了你出色的报告，我们收集到了许多关于人类的情报。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3419) cm.completeQuest(3419);
            if (qid == 8080) cm.completeQuest(8080);
            if (qid == 8081) cm.completeQuest(8081);
            if (qid == 3453) cm.completeQuest(3453);
            if (qid == 3455) cm.completeQuest(3455);
            if (qid == 3456) cm.completeQuest(3456);
            if (qid == 9413) cm.completeQuest(9413);
        } else {
            if (qid == 3419) cm.startQuest(3419);
            if (qid == 8081) cm.startQuest(8081);
            if (qid == 3455) cm.startQuest(3455);
            if (qid == 3456) cm.startQuest(3456);
            if (qid == 9413) cm.startQuest(9413);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
