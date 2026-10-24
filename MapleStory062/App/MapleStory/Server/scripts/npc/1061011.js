/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1061011
   覆盖任务: 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 6105, 6106, 6133, 6134, 9371, 9372, 10093, 10109, 20726
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
    if (cm.getQuestStatus(2105) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "危险的迷宫! <1-绿菇菇>" + "#l"; n++; }
    if (cm.getQuestStatus(2106) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "危险的迷宫! <2-刺刺菇>" + "#l"; n++; }
    if (cm.getQuestStatus(2107) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "危险的迷宫! <3-僵尸菇菇>" + "#l"; n++; }
    if (cm.getQuestStatus(2108) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "被污染的迷宫! <1-火独眼兽>" + "#l"; n++; }
    if (cm.getQuestStatus(2109) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "被污染的迷宫! <2-风独眼兽>" + "#l"; n++; }
    if (cm.getQuestStatus(2110) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "被污染的迷宫! <3-幼飞魔精灵>" + "#l"; n++; }
    if (cm.getQuestStatus(2111) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "危险的迷宫!! <1-绿菇菇>" + "#l"; n++; }
    if (cm.getQuestStatus(2112) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "危险的迷宫!! <2-刺刺菇>" + "#l"; n++; }
    if (cm.getQuestStatus(2113) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "危险的迷宫!! <3-僵尸菇菇>" + "#l"; n++; }
    if (cm.getQuestStatus(2114) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "被污染的迷宫!! <1-火独眼兽>" + "#l"; n++; }
    if (cm.getQuestStatus(2115) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "被污染的迷宫!! <2-风独眼兽>" + "#l"; n++; }
    if (cm.getQuestStatus(6105) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "记忆者" + "#l"; n++; }
    if (cm.getQuestStatus(6133) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "卡伦的册子" + "#l"; n++; }
    if (cm.getQuestStatus(6134) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "转世重生" + "#l"; n++; }
    if (cm.getQuestStatus(9371) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "封印邪恶的力量" + "#l"; n++; }
    if (cm.getQuestStatus(9372) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5bfb\u627e\u8bb0\u5f97\u7684\u4eba..." + "#l"; n++; }
    if (cm.getQuestStatus(10093) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u4e3a\u90a3\u4e9b\u8bb0\u5f97\u7684\u4eba\u559d\u5f69" + "#l"; n++; }
    if (cm.getQuestStatus(10109) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u9ed1\u5ba2\u6570\u636e\u5206\u6790" + "#l"; n++; }
    if (cm.getQuestStatus(20726) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u90a3\u4e9b\u8bb0\u5f97\u7684\u4eba\u7684\u4fe1\u606f" + "#l"; n++; }
    if ((cm.getQuestStatus(6106) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 312 || cm.getJob().getId() == 322)) && (cm.getQuestStatus(6105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "无意义存在者" + "#l"; n++; }
    if ((cm.getQuestStatus(6134) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 232)) && (cm.getQuestStatus(6133) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "转世重生" + "#l"; n++; }
    if ((cm.getQuestStatus(20726) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 28) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20725) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "\u90a3\u4e9b\u8bb0\u5f97\u7684\u4eba\u7684\u4fe1\u606f" + "#l"; n++; }
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
        if (cm.getQuestStatus(2105) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2105; } }
        if (cm.getQuestStatus(2106) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2106; } }
        if (cm.getQuestStatus(2107) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2107; } }
        if (cm.getQuestStatus(2108) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2108; } }
        if (cm.getQuestStatus(2109) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2109; } }
        if (cm.getQuestStatus(2110) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2110; } }
        if (cm.getQuestStatus(2111) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2111; } }
        if (cm.getQuestStatus(2112) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2112; } }
        if (cm.getQuestStatus(2113) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2113; } }
        if (cm.getQuestStatus(2114) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2114; } }
        if (cm.getQuestStatus(2115) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2115; } }
        if (cm.getQuestStatus(6105) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 6105; } }
        if (cm.getQuestStatus(6133) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 6133; } }
        if (cm.getQuestStatus(6134) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 6134; } }
        if (cm.getQuestStatus(9371) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9371; } }
        if (cm.getQuestStatus(9372) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9372; } }
        if (cm.getQuestStatus(10093) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10093; } }
        if (cm.getQuestStatus(10109) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10109; } }
        if (cm.getQuestStatus(20726) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20726; } }
        if ((cm.getQuestStatus(6106) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 312 || cm.getJob().getId() == 322)) && (cm.getQuestStatus(6105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 6106; } }
        if ((cm.getQuestStatus(6134) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 232)) && (cm.getQuestStatus(6133) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 6134; } }
        if ((cm.getQuestStatus(20726) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 28) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20725) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 20726; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2105) qt = "嘘！安静！我必须集中精神，因为修练空中漂浮术一不小心就会前功尽弃的。你也来和我一起进行空中漂浮的修练怎么样？虽然你看起来有些重了点…  不过，到底有什么事呢？让你那么急着找我，啊！你！消灭了#b#o1110100#99只#k啊，在你身后有99只#o1110100#徘徊着呢，真是了不起！";
        if (qid == 2106) qt = "啊！集中精神！呼~ 修练空中漂浮术一不小心就会前功尽弃。拜托下次一定要轻声跟我说话啊。";
        if (qid == 2107) qt = "啊！集中精神！呼~ 修练空中漂浮术一不小心就会前功尽弃。拜托下次一定要轻声跟我说话啊。";
        if (qid == 2108) qt = "集中精神！呼~ 修练空中漂浮术一不小心就会前功尽弃。我到底修行了多久时间啊?… 反正… 为了不要影响到我的修行，下次请记得轻声地跟我说话。";
        if (qid == 2109) qt = "集中精神！呼~ 修练空中漂浮术一不小心就会前功尽弃。我到底修行了多久时间啊?… 反正… 为了不要影响到我的修行，下次请记得轻声地跟我说话。";
        if (qid == 2110) qt = "集中精神！呼~ 修练空中漂浮术一不小心就会前功尽弃。我到底修行了多久时间啊?… 反正… 为了不要影响到我的修行，下次请记得轻声地跟我说话。";
        if (qid == 2111) qt = "嘘！安静！我必须集中精神，因为修练空中漂浮术一不小心就会前功尽弃的。你也来和我一起进行空中漂浮的修练怎么样？虽然你看起来有些重了点…  不过，到底有什么事呢？让你那么急着找我，啊！你！消灭了#b#o1110100#999只#k啊，真了不起！";
        if (qid == 2112) qt = "集中精神！呼~ 修练空中漂浮术一不小心就会前功尽弃。我到底修行了多久时间啊?… 反正… 为了不要影响到我的修行，下次请记得轻声地跟我说话。";
        if (qid == 2113) qt = "啊！集中精神！呼~ 修练空中漂浮术一不小心可是会前功尽弃呢。拜托下次请记得轻声地跟我说话。";
        if (qid == 2114) qt = "集中精神！呼~ 修练空中漂浮术一不小心就会前功尽弃。我到底修行了多久时间啊?… 反正… 为了不要影响到我的修行，下次请记得轻声地跟我说话。";
        if (qid == 2115) qt = "集中精神！呼~ 修练空中漂浮术一不小心就会前功尽弃。我到底修行了多久时间啊?… 反正… 为了不要影响到我的修行，下次请记得轻声地跟我说话。";
        if (qid == 6105) qt = "竟然来打扰我这样的大忙人？这本书…? 弓手的终极技能?";
        if (qid == 6133) qt = "..有什么急事…";
        if (qid == 6134) qt = "果然都通过了…";
        if (qid == 9371) qt = (qact == 1 ? "你在吗？你来得正是时候。现在材料已经拿到了，终于可以封印#b#t4031282##k了。" : "不，是的！ 我们怎么搞到 #t4031282#?这是永远不应该被孤立的东西。我需要快速封印#t4031282#... \r\n#L0# #b 即使你不封印，我也来这里是因为我听说你可以封印#t4031282#。");
        if (qid == 9372) qt = "\u55ef...\u6211\u80fd\u611f\u89c9\u5230\u90aa\u6076\u7684\u80fd\u91cf\u975e\u5e38\u63a5\u8fd1...\u4f60\u662f\u5426\u643a\u5e26\u7740\u4e0d\u597d\u7684\u4e1c\u897f\uff1f\u5982\u679c\u5b83\u662f\u4e0d\u7965\u4e14\u5371\u9669\u7684\u7269\u54c1\uff0c\u6700\u597d\u8d76\u7d27\u6254\u6389\u3002";
        if (qid == 10093) qt = (qact == 1 ? "那些记得的人支持绿色运动。" : "这是一护湖的绿色运动...我会帮助你。");
        if (qid == 10109) qt = "#b \uff08\u770b\u4e00\u4e0b\u9ed1\u5ba2\u4fe1\u606f\u3002\uff09 #k \\r\\n\\r\\n \u55ef...& #x D;& #x A;\u683c\u96f7\u957f\u8001\u7684\u9ed1\u5ba2\u5c1d\u8bd5\u4ee5\u5931\u8d25\u544a\u7ec8\u3002\u4f46\u4ece\u8fd9\u4e9b\u75d5\u8ff9\u6765\u770b\uff0c\u8fd9\u4e2a\u6751\u5e84\u4f3c\u4e4e\u4e0d\u592a\u5bb9\u6613\u88ab\u9ed1\u5ba2\u5165\u4fb5\u3002& #x D;& #x A;";
        if (qid == 20726) qt = (qact == 1 ? "#o2230101# 已被淘汰。好的。然后我会告诉你那个男孩的名字。" : "发生什么事了?  #o9300285#？  #o9300285# 拉妮。我从来没有听说过这样的名字。不过，前段时间，我在#m105040300#周围遇到了一个背着娃娃的男孩…… \r\n#b#L0# 背着娃娃的男孩？ #l\r\n#k");
        if (qid == 6106) qt = "寻找了解这本书的人… 那么去找一下#b#p1061012##k。";
        if (qid == 6134) qt = "知道你到底要什么… 想拥有#b超越死亡的力量#k是吧… 但这是违背自然的力量。除非拥有强大的精神力，任何人无法得到这种力量。";
        if (qid == 20726) qt = (qact == 1 ? "#o2230101# 已被淘汰。好的。然后我会告诉你那个男孩的名字。" : "发生什么事了?  #o9300285#？  #o9300285# 拉妮。我从来没有听说过这样的名字。不过，前段时间，我在#m105040300#周围遇到了一个背着娃娃的男孩…… \r\n#b#L0# 背着娃娃的男孩？ #l\r\n#k");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2105) cm.completeQuest(2105);
            if (qid == 2106) cm.completeQuest(2106);
            if (qid == 2107) cm.completeQuest(2107);
            if (qid == 2108) cm.completeQuest(2108);
            if (qid == 2109) cm.completeQuest(2109);
            if (qid == 2110) cm.completeQuest(2110);
            if (qid == 2111) cm.completeQuest(2111);
            if (qid == 2112) cm.completeQuest(2112);
            if (qid == 2113) cm.completeQuest(2113);
            if (qid == 2114) cm.completeQuest(2114);
            if (qid == 2115) cm.completeQuest(2115);
            if (qid == 6105) cm.completeQuest(6105);
            if (qid == 6133) cm.completeQuest(6133);
            if (qid == 6134) cm.completeQuest(6134);
            if (qid == 9371) cm.completeQuest(9371);
            if (qid == 9372) cm.completeQuest(9372);
            if (qid == 10093) cm.completeQuest(10093);
            if (qid == 10109) cm.completeQuest(10109);
            if (qid == 20726) cm.completeQuest(20726);
        } else {
            if (qid == 6106) cm.startQuest(6106);
            if (qid == 6134) cm.startQuest(6134);
            if (qid == 20726) cm.startQuest(20726);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
