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
    if (cm.getQuestStatus(9371) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? ?? ??" + "#l"; n++; }
    if (cm.getQuestStatus(9372) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ?? ?? ???。." + "#l"; n++; }
    if (cm.getQuestStatus(10093) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ?? ?? ??" + "#l"; n++; }
    if (cm.getQuestStatus(10109) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ??" + "#l"; n++; }
    if (cm.getQuestStatus(20726) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ?? ?? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(6106) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 312 || cm.getJob().getId() == 322)) && (cm.getQuestStatus(6105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "无意义存在者" + "#l"; n++; }
    if ((cm.getQuestStatus(6134) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 232)) && (cm.getQuestStatus(6133) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "转世重生" + "#l"; n++; }
    if ((cm.getQuestStatus(20726) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 28) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20725) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "???? ?? ?? ??" + "#l"; n++; }
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
        if (qid == 9371) qt = "??? ??? ????. ??? ??? ????? ??? #b#t4031282##k? ?? ? ? ???.";
        if (qid == 9372) qt = "?... ??? ??? ?? ????? ?????... ?? ?? ? ?? ??? ??? ?? ? ???? ???? ??? ????? ?? ?? ??? ?? ??.";
        if (qid == 10093) qt = "???? ?? ?? ?????? ???? ?? ???? ??.";
        if (qid == 10109) qt = "#b(?? ?? ??? ????.)#k \r\n\r\n?..&#xD;&#xA;?? ???? ?? ??? ??? ???. ??? ? ???? ?? ??? ?? ?? ? ?? ???.&#xD;&#xA;";
        if (qid == 20726) qt = "#o2230101#? ????. ??. ?? ??? ??? ?????.";
        if (qid == 6106) qt = "寻找了解这本书的人… 那么去找一下#b#p1061012##k。";
        if (qid == 6134) qt = "知道你到底要什么… 想拥有#b超越死亡的力量#k是吧… 但这是违背自然的力量。除非拥有强大的精神力，任何人无法得到这种力量。";
        if (qid == 20726) qt = "?... ?? ???? #o9300285#? #o9300285#??. ?? ??? ?? ? ?? ??. ?? ?? ??? #m105040300# ???? ??? ?? ??? ??? ?? ?? ?? ??... \n#b??? ?? ??? ?????\n#k";
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
