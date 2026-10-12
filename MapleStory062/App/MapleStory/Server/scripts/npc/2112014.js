/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2112014
   覆盖任务: 3363, 3364, 3365, 3366, 3367, 3368, 3382
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
    if (cm.getQuestStatus(3363) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "法兰肯研究1" + "#l"; n++; }
    if (cm.getQuestStatus(3365) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "犹泰的委托" + "#l"; n++; }
    if (cm.getQuestStatus(3366) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "制作试剂" + "#l"; n++; }
    if (cm.getQuestStatus(3367) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "整理研究文件" + "#l"; n++; }
    if (cm.getQuestStatus(3368) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "去除研究妨碍物" + "#l"; n++; }
    if (cm.getQuestStatus(3382) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "犹泰的报答" + "#l"; n++; }
    if ((cm.getQuestStatus(3364) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3363) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "法兰肯研究2" + "#l"; n++; }
    if ((cm.getQuestStatus(3365) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70)) { opts += "\r\n#L" + n + "#[接受] " + "犹泰的委托" + "#l"; n++; }
    if ((cm.getQuestStatus(3366) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3365) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "制作试剂" + "#l"; n++; }
    if ((cm.getQuestStatus(3367) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3365) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "整理研究文件" + "#l"; n++; }
    if ((cm.getQuestStatus(3368) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3365) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "去除研究妨碍物" + "#l"; n++; }
    if ((cm.getQuestStatus(3382) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3382) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 70) && (cm.getLevel() <= 85) && (cm.getQuestStatus(3365) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "犹泰的报答" + "#l"; n++; }
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
        if (cm.getQuestStatus(3363) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3363; } }
        if (cm.getQuestStatus(3365) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3365; } }
        if (cm.getQuestStatus(3366) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3366; } }
        if (cm.getQuestStatus(3367) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3367; } }
        if (cm.getQuestStatus(3368) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3368; } }
        if (cm.getQuestStatus(3382) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3382; } }
        if ((cm.getQuestStatus(3364) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3363) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3364; } }
        if ((cm.getQuestStatus(3365) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70)) { qi++; if (selection == qi) { qact = 0; qid = 3365; } }
        if ((cm.getQuestStatus(3366) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3365) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 3366; } }
        if ((cm.getQuestStatus(3367) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3365) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 3367; } }
        if ((cm.getQuestStatus(3368) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3365) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 3368; } }
        if ((cm.getQuestStatus(3382) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3382) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 70) && (cm.getLevel() <= 85) && (cm.getQuestStatus(3365) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3382; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3363) qt = "啊……你是……很高兴见到你。我一直在等你来找我的研究室。多亏你我才能打起精神，连谢谢都没能和你说一声，让我觉得很过意不去。真是太谢谢你了。有什么我可以帮忙的吗？只要是我犹泰做得到的，不管什么事情我都可以帮你。\r\n#b 有个叫琦尼的孩子想了解你的法兰肯洛伊德。";
        if (qid == 3365) qt = "这段时间谢谢你帮助我进行研究。这对我的研究帮助很大。真的，好像总是要你帮忙，真是对不起……";
        if (qid == 3366) qt = "试剂配好了啊……真了不起。应该是挺不容易的事，做得挺不错。有了这个我就不用为接下去的实验中要用到的试剂担心了。";
        if (qid == 3367) qt = "哦哦！书房里的研究文件全都找到了啊！真是谢谢你。书房里堆得乱七八糟的，一定挺不容易找的吧……辛苦了。";
        if (qid == 3368) qt = "啊……看来你把妨碍研究的家伙全都清除了啊。我就知道像你这么强壮的冒险家应该没有问题。真是谢谢你。";
        if (qid == 3382) qt = "不被认可的天才炼金术士#b#p2112014##k……他的话，会知道#t4001159#和#t4001160#的用途吗？去见见#p2112014#吧。";
        if (qid == 3364) qt = "抱歉让你久等了！来，这是#b法兰肯洛伊德的设计图#k！这应该会对琦尼研究法兰肯洛伊德有很多帮助。你能帮我把法兰肯洛伊德的设计图交给琦尼吗？";
        if (qid == 3365) qt = "你问我为什么现在还呆在这种地下研究室里？这个嘛……虽然我把偷的东西都还了回去，也获得了协会会长们的原谅，但是我没有站出来的勇气。之前一直发疯似的想要制造出新的东西，现在我想在这里静静地从事研究，顺便整理一下过去的研究。";
        if (qid == 3366) qt = "我想拜托你的事情是制作试剂。制作试剂需要精确的计算，但是那一部分我已经计算过了，你只要留意速度就行了。怎么样？你能帮我吗？";
        if (qid == 3367) qt = "我要拜托你的事情是整理研究文件。这段时间以来，研究用的文件都随便散放在各个地方，我完全没办法整理出来。你只要帮我把过去的文件都找出来就行了。怎么样？你能帮我吗？";
        if (qid == 3368) qt = "我要拜托你的事情是清除怪物。你问我实验室里为什么会有怪物？这个么……都是过去做实验的时候制造出来的怪物，操纵用的炼成阵坏了……我想请你帮我清除#r研究妨碍物#k，怎么样？可以吗？";
        if (qid == 3382) qt = "好久不见。对了，#m261000000#没出什么事吧？我一直呆在家里看书，完全不知道外面发生了什么……嗯……？干嘛突然问起我的研究啊？……！你手里拿着的难道是#t4001159#和#t4001160#吗……？";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3363) cm.completeQuest(3363);
            if (qid == 3365) cm.completeQuest(3365);
            if (qid == 3366) cm.completeQuest(3366);
            if (qid == 3367) cm.completeQuest(3367);
            if (qid == 3368) cm.completeQuest(3368);
            if (qid == 3382) cm.completeQuest(3382);
        } else {
            if (qid == 3364) cm.startQuest(3364);
            if (qid == 3365) cm.startQuest(3365);
            if (qid == 3366) cm.startQuest(3366);
            if (qid == 3367) cm.startQuest(3367);
            if (qid == 3368) cm.startQuest(3368);
            if (qid == 3382) cm.startQuest(3382);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
