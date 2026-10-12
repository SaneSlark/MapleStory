/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2091000
   覆盖任务: 3800, 3801, 3802, 3816, 3817, 3831, 3835, 3836, 3838, 9849, 10099
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
    if (cm.getQuestStatus(3800) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "诺功的教导1" + "#l"; n++; }
    if (cm.getQuestStatus(3801) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "诺功的教导2" + "#l"; n++; }
    if (cm.getQuestStatus(3802) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "诺功的教导3" + "#l"; n++; }
    if (cm.getQuestStatus(3817) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "制作蛇尾汤2" + "#l"; n++; }
    if (cm.getQuestStatus(3831) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "诺功的考试" + "#l"; n++; }
    if (cm.getQuestStatus(3835) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "韩太守的所见" + "#l"; n++; }
    if (cm.getQuestStatus(3838) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "击倒肯德熊" + "#l"; n++; }
    if (cm.getQuestStatus(9849) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "诺功的考验" + "#l"; n++; }
    if (cm.getQuestStatus(10099) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(3800) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50)) { opts += "\r\n#L" + n + "#[接受] " + "诺功的教导1" + "#l"; n++; }
    if ((cm.getQuestStatus(3801) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50) && (cm.getQuestStatus(3800) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "诺功的教导2" + "#l"; n++; }
    if ((cm.getQuestStatus(3802) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50) && (cm.getQuestStatus(3801) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "诺功的教导3" + "#l"; n++; }
    if ((cm.getQuestStatus(3816) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 45)) { opts += "\r\n#L" + n + "#[接受] " + "制作蛇尾汤1" + "#l"; n++; }
    if ((cm.getQuestStatus(3836) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 71) && (cm.getQuestStatus(3835) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "诺功的弟子" + "#l"; n++; }
    if ((cm.getQuestStatus(3838) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 71) && (cm.getQuestStatus(3837) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "击倒肯德熊" + "#l"; n++; }
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
        if (cm.getQuestStatus(3800) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3800; } }
        if (cm.getQuestStatus(3801) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3801; } }
        if (cm.getQuestStatus(3802) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3802; } }
        if (cm.getQuestStatus(3817) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3817; } }
        if (cm.getQuestStatus(3831) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3831; } }
        if (cm.getQuestStatus(3835) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3835; } }
        if (cm.getQuestStatus(3838) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3838; } }
        if (cm.getQuestStatus(9849) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9849; } }
        if (cm.getQuestStatus(10099) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10099; } }
        if ((cm.getQuestStatus(3800) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50)) { qi++; if (selection == qi) { qact = 0; qid = 3800; } }
        if ((cm.getQuestStatus(3801) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50) && (cm.getQuestStatus(3800) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3801; } }
        if ((cm.getQuestStatus(3802) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50) && (cm.getQuestStatus(3801) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3802; } }
        if ((cm.getQuestStatus(3816) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 45)) { qi++; if (selection == qi) { qact = 0; qid = 3816; } }
        if ((cm.getQuestStatus(3836) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 71) && (cm.getQuestStatus(3835) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3836; } }
        if ((cm.getQuestStatus(3838) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 71) && (cm.getQuestStatus(3837) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3838; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3800) qt = "嘿嘿。真的抓了#o5120503# 10只了嘛? 挺神奇的。";
        if (qid == 3801) qt = "嘿。真的抓好了#o5120503#20只? 不赖嘛。";
        if (qid == 3802) qt = "呼。真的抓了 #o5120503#40只? 真是有毅力的家伙啊。虽然很无聊，但是没有那种忍耐力的话没有成为仙人的资格。值得夸奖。";
        if (qid == 3817) qt = "拿来#t4031552#了吗？这个香味～ 熬好了的话，这是非常好的药啊。辛苦你了，你也喝一点吧。";
        if (qid == 3831) qt = "恩…… #o5120500#和熊猫都打败了是吧。比我想的要强哦？现在有点仙人的气势了……";
        if (qid == 3835) qt = "嗯？什么事？锻炼体力？嗯？村外看到的熊怎么啦？因为不止一两只，所以不太清楚。都是诺功的弟子……长得都差不多。长得有点怪？";
        if (qid == 3838) qt = "打倒肯德熊了吗？是吗……希望能减轻它的负罪感。";
        if (qid == 9849) qt = "快乐山谷的体力锻炼教官。好像是#b#p2091000##k的声音。点击头上的灯泡吧。";
        if (qid == 10099) qt = "??? ?????? ???? ?? ???? ??.";
        if (qid == 3800) qt = "仙人最重要的德就是耐心。没有耐心的人是绝对成为不了仙人的。所以你们都要坚持，努力吧! 呃，你是谁?  \r\n#b你是#p2091000#么?";
        if (qid == 3801) qt = "即使集中精力修炼也不是那么容易变强的。全身心地投入到修行中吧。 \r\n#b…那个，现在能让我成为仙人吗?";
        if (qid == 3802) qt = "大家都很努力修炼嘛。不错，应该要这样。这样才能成为仙人。\r\n#b… 现在可以成为仙人吗?";
        if (qid == 3816) qt = "来，一二三…… 没法数了。为什么训练过程中受伤的人这么多啊？也不是什么很难的修炼啊。有什么问题呢？恩…… 那边，你！能不能帮忙做些修炼场的事儿啊？";
        if (qid == 3836) qt = "#b肯德熊#k……它是诺功中弟子中最聪明诚实的孩子。比谁都正义，路见不平会拔刀相助……让它沦落到在村子外面流浪都要怪妖怪禅师。";
        if (qid == 3838) qt = "道功说什么？是吗？是肯德熊的负罪感封锁着它？可怜的孩子……师父该怎么帮你啊……呼唔……";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3800) cm.completeQuest(3800);
            if (qid == 3801) cm.completeQuest(3801);
            if (qid == 3802) cm.completeQuest(3802);
            if (qid == 3817) cm.completeQuest(3817);
            if (qid == 3831) cm.completeQuest(3831);
            if (qid == 3835) cm.completeQuest(3835);
            if (qid == 3838) cm.completeQuest(3838);
            if (qid == 9849) cm.completeQuest(9849);
            if (qid == 10099) cm.completeQuest(10099);
        } else {
            if (qid == 3800) cm.startQuest(3800);
            if (qid == 3801) cm.startQuest(3801);
            if (qid == 3802) cm.startQuest(3802);
            if (qid == 3816) cm.startQuest(3816);
            if (qid == 3836) cm.startQuest(3836);
            if (qid == 3838) cm.startQuest(3838);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
