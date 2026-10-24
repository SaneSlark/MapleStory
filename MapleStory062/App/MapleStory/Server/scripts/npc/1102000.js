/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1102000
   覆盖任务: 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20701, 20702, 20703
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
    if (cm.getQuestStatus(20003) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5947\u5e93\u7684\u7b2c\u4e00\u6b21\u8bad\u7ec3" + "#l"; n++; }
    if (cm.getQuestStatus(20004) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5947\u5e93\u7684\u7b2c\u4e8c\u6b21\u8bad\u7ec3" + "#l"; n++; }
    if (cm.getQuestStatus(20005) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5947\u5e93\u7684\u7b2c\u4e09\u6b21\u8bad\u7ec3" + "#l"; n++; }
    if (cm.getQuestStatus(20006) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5947\u5e93\u7684\u7b2c\u56db\u6b21\u8bad\u7ec3" + "#l"; n++; }
    if (cm.getQuestStatus(20007) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5947\u5e93\u7684\u6700\u540e\u4e00\u6b21\u8bad\u7ec3" + "#l"; n++; }
    if (cm.getQuestStatus(20701) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "首次本地适应培训" + "#l"; n++; }
    if (cm.getQuestStatus(20702) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "第二次本地适应培训" + "#l"; n++; }
    if (cm.getQuestStatus(20703) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "第三次本地适应培训" + "#l"; n++; }
    if ((cm.getQuestStatus(20002) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20001) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u57f9\u8bad\u5bfc\u5e08\u5947\u5e93" + "#l"; n++; }
    if ((cm.getQuestStatus(20003) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20002) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u5947\u5e93\u7684\u7b2c\u4e00\u6b21\u8bad\u7ec3" + "#l"; n++; }
    if ((cm.getQuestStatus(20004) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20003) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u5947\u5e93\u7684\u7b2c\u4e8c\u6b21\u8bad\u7ec3" + "#l"; n++; }
    if ((cm.getQuestStatus(20005) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20004) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u5947\u5e93\u7684\u7b2c\u4e09\u6b21\u8bad\u7ec3" + "#l"; n++; }
    if ((cm.getQuestStatus(20006) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20005) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u5947\u5e93\u7684\u7b2c\u56db\u6b21\u8bad\u7ec3" + "#l"; n++; }
    if ((cm.getQuestStatus(20007) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20006) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u5947\u5e93\u7684\u6700\u540e\u4e00\u6b21\u8bad\u7ec3" + "#l"; n++; }
    if ((cm.getQuestStatus(20008) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20007) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u9a91\u58eb\u4e4b\u8def" + "#l"; n++; }
    if ((cm.getQuestStatus(20701) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 15) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20700) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "首次本地适应培训" + "#l"; n++; }
    if ((cm.getQuestStatus(20702) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 15) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20701) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "第二次本地适应培训" + "#l"; n++; }
    if ((cm.getQuestStatus(20703) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 15) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20702) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "第三次本地适应培训" + "#l"; n++; }
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
        if (cm.getQuestStatus(20003) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20003; } }
        if (cm.getQuestStatus(20004) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20004; } }
        if (cm.getQuestStatus(20005) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20005; } }
        if (cm.getQuestStatus(20006) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20006; } }
        if (cm.getQuestStatus(20007) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20007; } }
        if (cm.getQuestStatus(20701) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20701; } }
        if (cm.getQuestStatus(20702) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20702; } }
        if (cm.getQuestStatus(20703) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20703; } }
        if ((cm.getQuestStatus(20002) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20001) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20002; } }
        if ((cm.getQuestStatus(20003) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20002) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20003; } }
        if ((cm.getQuestStatus(20004) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20003) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20004; } }
        if ((cm.getQuestStatus(20005) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20004) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20005; } }
        if ((cm.getQuestStatus(20006) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20005) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20006; } }
        if ((cm.getQuestStatus(20007) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20006) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20007; } }
        if ((cm.getQuestStatus(20008) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 1000)) && (cm.getQuestStatus(20007) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20008; } }
        if ((cm.getQuestStatus(20701) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 15) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20700) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20701; } }
        if ((cm.getQuestStatus(20702) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 15) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20701) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20702; } }
        if ((cm.getQuestStatus(20703) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getLevel() <= 15) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20702) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20703; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 20003) qt = (qact == 1 ? "#o0100120# 5 看起来他们都抓住了。如何？这并不难，对吧？" : "看起来你已经准备好了，对吧？那么我们就开始训练吧。让我们先从简单的事情开始。这个岛上的蒂蒂中最弱的是#o0100120#。抓住#r#o0100120##k或#r5或#k怎么样？");
        if (qid == 20004) qt = (qact == 1 ? "何？非常快？  #o0100121# 10 我以为需要一段时间......" : "第二次训练是抓#r#o0100121##k，这个岛上第二弱的。这次我们应该只寻找#r10和#k吗？");
        if (qid == 20005) qt = (qact == 1 ? "#o0100122# 15 看来您钓到了鱼。好吧，好吧。照这样下去，#p1101002#将能够如愿以偿地成为一名见习工程师。呃……如果我推迟成为见习工程师的话#p1101002#会说什么……反正听着#p1101002#我的胃就翻腾了……" : "第三次训练是抓#r#o0100122##k，这个岛上第三弱的。这次，我们应该增加数量吗...让我们抓住#r15或#k。");
        if (qid == 20006) qt = (qact == 1 ? "#o0100123# 20 看来您钓到了鱼。哎……只要再努力一点，我想我就能成为见习骑士了吧？最好提前考虑一下它将是一篇什么样的文章。光之剑士、火之法师、风之弓箭手、黑暗之盗、闪电之盗……你明白吧？" : "第四次训练是……不用我多说了了吧？如果你现在达到你的水平，你可以钓到#r#o0100123##k，这非常适合狩猎。这次，我们钓一条 #r20 #k 条鱼。");
        if (qid == 20007) qt = (qact == 1 ? "狩猎#o0100124#后我安全回来了！实在是太棒了！很难找到像你一样成长得这么快的贵族……#p1101002#会很高兴。" : "我们的基础培训已经结束。你真的长得很快吗？现在，让我们与稍微困难的蒂蒂进行战斗，作为对我们到目前为止训练的测试。");
        if (qid == 20701) qt = (qact == 1 ? "噢，你打败了 #o9300271# 30 只小鸟。快吗？照这样下去，训练应该会很顺利……" : "哈哈！果然，你来了。严格的#p1101002#不可能把刚成为实习工程师的你送出去。我确信他们告诉你训练时不要移动，直到达到 13 级。");
        if (qid == 20702) qt = (qact == 1 ? "哦，你摆脱了 #o9300272# 30 只动物了吗？准备工作进展顺利。所以让我们添加最后一件事。当您准备好开始训练时，请告诉我。" : "现在，您准备好接受下一次培训了吗？  正如#p1101002#所说，如果你和#p1101001#说话，他会给你祝福，这会让训练变得更加容易。如果您忘记接收，请接收祝福。现在，你想开始训练吗？");
        if (qid == 20703) qt = (qact == 1 ? "看起来 #o9300273# 都已被消除。干得好！现在就算去山里也能过得很好吧？" : "你准备好接受培训了吗？  你收到#p1101001#的祝福了吗？那么是不是可以立即开始训练呢？一旦完成，你的本地适应训练就结束了！你实际上可以去执行正式任务！");
        if (qid == 20002) qt = (qact == 1 ? "我会让你受苦，所以做好准备 #p1102000# 。首先，装备上从#p1102000#收到的药剂，开始训练。" : "在训练林门口遇到了训练教练#p1102000#。  根据#p1102000#，圣地根本没有怪物，他们与用#p1101001#的力量创造的名为“蒂蒂”的奇幻生物进行训练。同时，#p1102000#给你药剂......");
        if (qid == 20003) qt = (qact == 1 ? "#o0100120# 5 看起来他们都抓住了。如何？这并不难，对吧？" : "看起来你已经准备好了，对吧？那么我们就开始训练吧。让我们先从简单的事情开始。这个岛上的蒂蒂中最弱的是#o0100120#。抓住#r#o0100120##k或#r5或#k怎么样？");
        if (qid == 20004) qt = (qact == 1 ? "何？非常快？  #o0100121# 10 我以为需要一段时间......" : "第二次训练是抓#r#o0100121##k，这个岛上第二弱的。这次我们应该只寻找#r10和#k吗？");
        if (qid == 20005) qt = (qact == 1 ? "#o0100122# 15 看来您钓到了鱼。好吧，好吧。照这样下去，#p1101002#将能够如愿以偿地成为一名见习工程师。呃……如果我推迟成为见习工程师的话#p1101002#会说什么……反正听着#p1101002#我的胃就翻腾了……" : "第三次训练是抓#r#o0100122##k，这个岛上第三弱的。这次，我们应该增加数量吗...让我们抓住#r15或#k。");
        if (qid == 20006) qt = (qact == 1 ? "#o0100123# 20 看来您钓到了鱼。哎……只要再努力一点，我想我就能成为见习骑士了吧？最好提前考虑一下它将是一篇什么样的文章。光之剑士、火之法师、风之弓箭手、黑暗之盗、闪电之盗……你明白吧？" : "第四次训练是……不用我多说了了吧？如果你现在达到你的水平，你可以钓到#r#o0100123##k，这非常适合狩猎。这次，我们钓一条 #r20 #k 条鱼。");
        if (qid == 20007) qt = (qact == 1 ? "狩猎#o0100124#后我安全回来了！实在是太棒了！很难找到像你一样成长得这么快的贵族……#p1101002#会很高兴。" : "我们的基础培训已经结束。你真的长得很快吗？现在，让我们与稍微困难的蒂蒂进行战斗，作为对我们到目前为止训练的测试。");
        if (qid == 20008) qt = (qact == 1 ? "不害怕黑巫师的勇气。对皇后的忠诚。在任何情况下都保持信念的意愿。只要不忘记这三件事，就能作为天鹅骑士团的一员战斗到最后。" : "对皇后的忠诚。有勇气不惧怕黑巫师。在任何情况下都保持信念的意愿。只要不忘记这三件事，就能作为天鹅骑士团的一员战斗到最后。");
        if (qid == 20701) qt = (qact == 1 ? "噢，你打败了 #o9300271# 30 只小鸟。快吗？照这样下去，训练应该会很顺利……" : "哈哈！果然，你来了。严格的#p1101002#不可能把刚成为实习工程师的你送出去。我确信他们告诉你训练时不要移动，直到达到 13 级。");
        if (qid == 20702) qt = (qact == 1 ? "哦，你摆脱了 #o9300272# 30 只动物了吗？准备工作进展顺利。所以让我们添加最后一件事。当您准备好开始训练时，请告诉我。" : "现在，您准备好接受下一次培训了吗？  正如#p1101002#所说，如果你和#p1101001#说话，他会给你祝福，这会让训练变得更加容易。如果您忘记接收，请接收祝福。现在，你想开始训练吗？");
        if (qid == 20703) qt = (qact == 1 ? "看起来 #o9300273# 都已被消除。干得好！现在就算去山里也能过得很好吧？" : "你准备好接受培训了吗？  你收到#p1101001#的祝福了吗？那么是不是可以立即开始训练呢？一旦完成，你的本地适应训练就结束了！你实际上可以去执行正式任务！");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 20003) cm.completeQuest(20003);
            if (qid == 20004) cm.completeQuest(20004);
            if (qid == 20005) cm.completeQuest(20005);
            if (qid == 20006) cm.completeQuest(20006);
            if (qid == 20007) cm.completeQuest(20007);
            if (qid == 20701) cm.completeQuest(20701);
            if (qid == 20702) cm.completeQuest(20702);
            if (qid == 20703) cm.completeQuest(20703);
        } else {
            if (qid == 20002) cm.startQuest(20002);
            if (qid == 20003) cm.startQuest(20003);
            if (qid == 20004) cm.startQuest(20004);
            if (qid == 20005) cm.startQuest(20005);
            if (qid == 20006) cm.startQuest(20006);
            if (qid == 20007) cm.startQuest(20007);
            if (qid == 20008) cm.startQuest(20008);
            if (qid == 20701) cm.startQuest(20701);
            if (qid == 20702) cm.startQuest(20702);
            if (qid == 20703) cm.startQuest(20703);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
