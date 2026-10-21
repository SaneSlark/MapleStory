/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1022002
   覆盖任务: 2004, 2005, 2006, 2047, 2122, 2123, 2125, 2127, 2149, 3070, 3071, 6110, 9320, 9321, 9325, 9746, 9867, 10053, 10089
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
    if (cm.getQuestStatus(2004) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "闪耀石头的材料" + "#l"; n++; }
    if (cm.getQuestStatus(2005) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "变异蘑菇的血1" + "#l"; n++; }
    if (cm.getQuestStatus(2047) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "英雄的战剑" + "#l"; n++; }
    if (cm.getQuestStatus(2122) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "曼吉与秘密集团" + "#l"; n++; }
    if (cm.getQuestStatus(2127) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "前往沙漠……" + "#l"; n++; }
    if (cm.getQuestStatus(2149) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "传闻的真相-麦吉" + "#l"; n++; }
    if (cm.getQuestStatus(3070) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "邪摩斯的请托" + "#l"; n++; }
    if (cm.getQuestStatus(6110) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "麦吉的考验" + "#l"; n++; }
    if (cm.getQuestStatus(9320) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??? ???" + "#l"; n++; }
    if (cm.getQuestStatus(9321) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "旅行袋" + "#l"; n++; }
    if (cm.getQuestStatus(9325) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "葛温遗失的日记" + "#l"; n++; }
    if (cm.getQuestStatus(9746) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ?? ?? ???!" + "#l"; n++; }
    if (cm.getQuestStatus(10053) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???" + "#l"; n++; }
    if (cm.getQuestStatus(10089) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(2005) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 15) && (cm.getQuestStatus(2004) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "变异蘑菇的血1" + "#l"; n++; }
    if ((cm.getQuestStatus(2006) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 15) && (cm.getQuestStatus(2005) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "变异蘑菇的血2" + "#l"; n++; }
    if ((cm.getQuestStatus(2047) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 45) && ((cm.getJob().getId() == 100 || cm.getJob().getId() == 110 || cm.getJob().getId() == 120 || cm.getJob().getId() == 130 || cm.getJob().getId() == 111 || cm.getJob().getId() == 121 || cm.getJob().getId() == 131 || cm.getJob().getId() == 112 || cm.getJob().getId() == 122 || cm.getJob().getId() == 132 || cm.getJob().getId() == 200 || cm.getJob().getId() == 210 || cm.getJob().getId() == 220 || cm.getJob().getId() == 230 || cm.getJob().getId() == 211 || cm.getJob().getId() == 221 || cm.getJob().getId() == 231 || cm.getJob().getId() == 212 || cm.getJob().getId() == 222 || cm.getJob().getId() == 232 || cm.getJob().getId() == 300 || cm.getJob().getId() == 310 || cm.getJob().getId() == 320 || cm.getJob().getId() == 311 || cm.getJob().getId() == 321 || cm.getJob().getId() == 312 || cm.getJob().getId() == 322 || cm.getJob().getId() == 400 || cm.getJob().getId() == 410 || cm.getJob().getId() == 420 || cm.getJob().getId() == 411 || cm.getJob().getId() == 421 || cm.getJob().getId() == 412 || cm.getJob().getId() == 422 || cm.getJob().getId() == 500 || cm.getJob().getId() == 510 || cm.getJob().getId() == 520 || cm.getJob().getId() == 511 || cm.getJob().getId() == 521 || cm.getJob().getId() == 512 || cm.getJob().getId() == 522)) && (cm.getQuestStatus(2008) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "英雄的战剑" + "#l"; n++; }
    if ((cm.getQuestStatus(2122) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 18) && (cm.getLevel() <= 29)) { opts += "\r\n#L" + n + "#[接受] " + "曼吉与秘密集团" + "#l"; n++; }
    if ((cm.getQuestStatus(2123) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 18) && (cm.getLevel() <= 29) && (cm.getQuestStatus(2127) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "特别委托" + "#l"; n++; }
    if ((cm.getQuestStatus(2125) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(2123) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "特别委托！" + "#l"; n++; }
    if ((cm.getQuestStatus(2127) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 18) && (cm.getLevel() <= 29) && (cm.getQuestStatus(2122) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "前往沙漠……" + "#l"; n++; }
    if ((cm.getQuestStatus(2149) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2144) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "传闻的真相-麦吉" + "#l"; n++; }
    if ((cm.getQuestStatus(3071) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3070) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "黑暗契约的秘密" + "#l"; n++; }
    if ((cm.getQuestStatus(6110) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(6110) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && ((cm.getJob().getId() == 112 || cm.getJob().getId() == 122 || cm.getJob().getId() == 132)) && (cm.haveItem(4001112, 1)) && (cm.haveItem(2280012, 1))) { opts += "\r\n#L" + n + "#[接受] " + "麦吉的考验" + "#l"; n++; }
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
        if (cm.getQuestStatus(2004) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2004; } }
        if (cm.getQuestStatus(2005) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2005; } }
        if (cm.getQuestStatus(2047) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2047; } }
        if (cm.getQuestStatus(2122) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2122; } }
        if (cm.getQuestStatus(2127) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2127; } }
        if (cm.getQuestStatus(2149) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2149; } }
        if (cm.getQuestStatus(3070) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3070; } }
        if (cm.getQuestStatus(6110) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 6110; } }
        if (cm.getQuestStatus(9320) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9320; } }
        if (cm.getQuestStatus(9321) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9321; } }
        if (cm.getQuestStatus(9325) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9325; } }
        if (cm.getQuestStatus(9746) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9746; } }
        if (cm.getQuestStatus(10053) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10053; } }
        if (cm.getQuestStatus(10089) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10089; } }
        if ((cm.getQuestStatus(2005) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 15) && (cm.getQuestStatus(2004) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2005; } }
        if ((cm.getQuestStatus(2006) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 15) && (cm.getQuestStatus(2005) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2006; } }
        if ((cm.getQuestStatus(2047) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 45) && ((cm.getJob().getId() == 100 || cm.getJob().getId() == 110 || cm.getJob().getId() == 120 || cm.getJob().getId() == 130 || cm.getJob().getId() == 111 || cm.getJob().getId() == 121 || cm.getJob().getId() == 131 || cm.getJob().getId() == 112 || cm.getJob().getId() == 122 || cm.getJob().getId() == 132 || cm.getJob().getId() == 200 || cm.getJob().getId() == 210 || cm.getJob().getId() == 220 || cm.getJob().getId() == 230 || cm.getJob().getId() == 211 || cm.getJob().getId() == 221 || cm.getJob().getId() == 231 || cm.getJob().getId() == 212 || cm.getJob().getId() == 222 || cm.getJob().getId() == 232 || cm.getJob().getId() == 300 || cm.getJob().getId() == 310 || cm.getJob().getId() == 320 || cm.getJob().getId() == 311 || cm.getJob().getId() == 321 || cm.getJob().getId() == 312 || cm.getJob().getId() == 322 || cm.getJob().getId() == 400 || cm.getJob().getId() == 410 || cm.getJob().getId() == 420 || cm.getJob().getId() == 411 || cm.getJob().getId() == 421 || cm.getJob().getId() == 412 || cm.getJob().getId() == 422 || cm.getJob().getId() == 500 || cm.getJob().getId() == 510 || cm.getJob().getId() == 520 || cm.getJob().getId() == 511 || cm.getJob().getId() == 521 || cm.getJob().getId() == 512 || cm.getJob().getId() == 522)) && (cm.getQuestStatus(2008) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2047; } }
        if ((cm.getQuestStatus(2122) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 18) && (cm.getLevel() <= 29)) { qi++; if (selection == qi) { qact = 0; qid = 2122; } }
        if ((cm.getQuestStatus(2123) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 18) && (cm.getLevel() <= 29) && (cm.getQuestStatus(2127) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2123; } }
        if ((cm.getQuestStatus(2125) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(2123) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2125; } }
        if ((cm.getQuestStatus(2127) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 18) && (cm.getLevel() <= 29) && (cm.getQuestStatus(2122) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2127; } }
        if ((cm.getQuestStatus(2149) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2144) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 2149; } }
        if ((cm.getQuestStatus(3071) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3070) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3071; } }
        if ((cm.getQuestStatus(6110) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(6110) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && ((cm.getJob().getId() == 112 || cm.getJob().getId() == 122 || cm.getJob().getId() == 132)) && (cm.haveItem(4001112, 1)) && (cm.haveItem(2280012, 1))) { qi++; if (selection == qi) { qact = 0; qid = 6110; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2004) qt = "在杂货店里见到了索非亚。她是想成为炼金术士的小姐。她告诉我为制作发光的石头需要#b50个软软的液体，50个叶子，20个三眼章鱼的足，一瓶变异蘑菇的血#k。别的东西不难得到…但是变异蘑菇的血是什么呢？幸亏索非亚告诉我在勇士部落某个地方住着一个叫麦吉的男人肯定知道。叫麦吉。. 他在哪里？";
        if (qid == 2005) qt = "呵...你看上去蛮挺文弱的，没想到有两下子嘛... 好。按照约定我给你#t4031005#...我是不会食言的。";
        if (qid == 2047) qt = "是...就是这把剑救了我的命！怎么样？你还给我吧！你还给我，我就给你很珍贵的物品。";
        if (qid == 2122) qt = "你回来了。看来你的实力足以帮助他们！";
        if (qid == 2127) qt = "我已经准备好前往#p1022002#要带我去的地方了。我现在就去找#p1022002#。";
        if (qid == 2149) qt = "去找在#m102000000#修炼了很长时间的#b#p1022002##k问问吧。";
        if (qid == 3070) qt = "去寻找位于冰峰雪域某处的邪摩斯。";
        if (qid == 6110) qt = "你已经消灭了#r#o9300087# 200只#k。 是否感觉到自己的强大了？那样的话应该可以掌握突进技能了。";
        if (qid == 9320) qt = "请别打扰我沉思. \r\n #b你还记得1000天前路过这里的旅客吗?#k";
        if (qid == 9321) qt = "你是来找那家伙的书包的吧?";
        if (qid == 9325) qt = "….但是… 我会再把它交给你. 请你别再把它丢弃了. 我也恳请你查出他的的下落再让我知道!!";
        if (qid == 9746) qt = "#b#p9000007##k? ??? ??? ??? ??. #b#m103010000##k?? ??.";
        if (qid == 10053) qt = "?? ???? ?? ?? ? ???.....?#b\r\n??? ?????? ?? ????.";
        if (qid == 10089) qt = "??? ?????? ???? ?? ???? ??.";
        if (qid == 2005) qt = "想得到#b#t4031005##k？哈...像你这样小伙子恐怕不太可能。如果不是真正的强者，是不可能把#t4031005#弄到手的... 如果你真的想得到，就证明给我看你是个强者。";
        if (qid == 2006) qt = "但是你要把#b#t4031005##k用在哪儿呢？？这可是做贵重的物品所需要的材料...你要给#p1022100#做什么样的东西呢？不过... 这跟我无关。";
        if (qid == 2047) qt = "谁又打扰我?... 啊！你老是给我添麻烦。哈哈...没关系。像你这么强壮的人我也想跟你多聊聊。那次我给你的#t4031005#用在合适的事情上了吗？不过,那已经是过去的事了。";
        if (qid == 2122) qt = "这可不太妙……不知为什么，我总是想起那些人……好奇怪……\r\n #b怎么了？";
        if (qid == 2123) qt = "我一直在等你。有个陌生人路过，托我把这张纸条交给你。可惜我不小心把纸条烧掉了，不过上面写的内容我还记得。你有兴趣听听我还记得的部分吗？";
        if (qid == 2125) qt = "我一直在等你。有个陌生人路过，托我把这张纸条交给你。可惜我不小心把纸条烧掉了，不过上面写的内容我还记得。你有兴趣听听我还记得的部分吗？";
        if (qid == 2127) qt = "准备好出发了吗？因为这是你第一次，所以看起来有点紧张。别担心，我相信你一定没问题的。";
        if (qid == 2149) qt = "…什么事儿?\r\n#b听说过鬼树吗？";
        if (qid == 3071) qt = "关于#b#t4031218##k？？你…是怎么知道的？像你这样的人怎么会知道这个啊…? \n到底是谁告诉你的？？\r\n冰峰雪域附近有个人想要得到#b#t4031218##k，是他告诉我的。\r\n 在旅行途中偶然得知的，就像有备无患这句话的意思一样，如果对那样东西有所了解的话，在击退敌人的时候也许有用吧。";
        if (qid == 6110) qt = "…你! 当年只是个平凡无奇的初级冒险家... 现在也成了不错的战士了。我认可你的能力了。那么，找我有什么事情? 已经有这么高的能力，其实也没什么事情需要我来帮你的吧。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2004) cm.completeQuest(2004);
            if (qid == 2005) cm.completeQuest(2005);
            if (qid == 2047) cm.completeQuest(2047);
            if (qid == 2122) cm.completeQuest(2122);
            if (qid == 2127) cm.completeQuest(2127);
            if (qid == 2149) cm.completeQuest(2149);
            if (qid == 3070) cm.completeQuest(3070);
            if (qid == 6110) cm.completeQuest(6110);
            if (qid == 9320) cm.completeQuest(9320);
            if (qid == 9321) cm.completeQuest(9321);
            if (qid == 9325) cm.completeQuest(9325);
            if (qid == 9746) cm.completeQuest(9746);
            if (qid == 10053) cm.completeQuest(10053);
            if (qid == 10089) cm.completeQuest(10089);
        } else {
            if (qid == 2005) cm.startQuest(2005);
            if (qid == 2006) cm.startQuest(2006);
            if (qid == 2047) cm.startQuest(2047);
            if (qid == 2122) cm.startQuest(2122);
            if (qid == 2123) cm.startQuest(2123);
            if (qid == 2125) cm.startQuest(2125);
            if (qid == 2127) cm.startQuest(2127);
            if (qid == 2149) cm.startQuest(2149);
            if (qid == 3071) cm.startQuest(3071);
            if (qid == 6110) cm.startQuest(6110);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
