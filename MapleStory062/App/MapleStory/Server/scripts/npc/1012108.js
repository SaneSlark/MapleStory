/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1012108
   覆盖任务: 2073, 2099, 2100, 2101, 2102, 9745
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
    if (cm.getQuestStatus(2099) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "卡米拉遗失的信" + "#l"; n++; }
    if (cm.getQuestStatus(2101) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "由天空之路前往高丽高丽童话村" + "#l"; n++; }
    if (cm.getQuestStatus(2102) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "由海路前往高丽高丽童话村" + "#l"; n++; }
    if (cm.getQuestStatus(9745) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ?? ?? ???" + "#l"; n++; }
    if ((cm.getQuestStatus(2073) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 23)) { opts += "\r\n#L" + n + "#[接受] " + "卡米拉的玻璃珠" + "#l"; n++; }
    if ((cm.getQuestStatus(2099) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35)) { opts += "\r\n#L" + n + "#[接受] " + "卡米拉遗失的信" + "#l"; n++; }
    if ((cm.getQuestStatus(2100) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35) && (cm.getQuestStatus(2099) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "前往高丽高丽童话村的两个方法" + "#l"; n++; }
    if ((cm.getQuestStatus(2101) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35) && (cm.getQuestStatus(2100) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.getQuestStatus(2102) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "由天空之路前往高丽高丽童话村" + "#l"; n++; }
    if ((cm.getQuestStatus(2102) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35) && (cm.getQuestStatus(2100) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.getQuestStatus(2101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "由海路前往高丽高丽童话村" + "#l"; n++; }
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
        if (cm.getQuestStatus(2099) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2099; } }
        if (cm.getQuestStatus(2101) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2101; } }
        if (cm.getQuestStatus(2102) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2102; } }
        if (cm.getQuestStatus(9745) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9745; } }
        if ((cm.getQuestStatus(2073) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 23)) { qi++; if (selection == qi) { qact = 0; qid = 2073; } }
        if ((cm.getQuestStatus(2099) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35)) { qi++; if (selection == qi) { qact = 0; qid = 2099; } }
        if ((cm.getQuestStatus(2100) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35) && (cm.getQuestStatus(2099) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2100; } }
        if ((cm.getQuestStatus(2101) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35) && (cm.getQuestStatus(2100) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.getQuestStatus(2102) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2101; } }
        if ((cm.getQuestStatus(2102) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35) && (cm.getQuestStatus(2100) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.getQuestStatus(2101) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2102; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2099) qt = "把信找回来了啊！！哇，真是非常感激您！我还以为再也拿不回来了呢。";
        if (qid == 2101) qt = "给您飞船的票..现在可以免费乘坐.请您旅途愉快。";
        if (qid == 2102) qt = "这是魔法师卷轴和海豚出租车使用券，飞船是免费，所以没有准备票。";
        if (qid == 9745) qt = "#b#m100000200##k? ?? #b#p1012102##k? ??? ??? ???… ?? ?? ?????";
        if (qid == 2073) qt = "我有一个朋友叫#b#p1012107##k。我们从小一起成长的。几天后是#p1012107#的生日。所以我送他礼物，礼物是#b#t4031156##k。";
        if (qid == 2099) qt = "该怎么办呢？我把重要的信给弄丢了，是树林里爱捣蛋的#r风独眼兽#k拿走了我的信。那封信是住在远方村庄的笔友寄给我的…该怎么办呢？请帮我把信找回来吧，呜呜…";
        if (qid == 2100) qt = "天啊…是个坏消息，朋友说以后可能无法再写信给我了。到底发生了什么事情呢？难道出了什么事吗？信里没有说理由…好担心啊。那个…对了，您喜欢到远方旅行吗？我想知道朋友到底发生了什么事情，您可以去一趟我朋友的村庄吗？";
        if (qid == 2101) qt = "您做好旅行的准备了吗？";
        if (qid == 2102) qt = "做好旅行的准备了吗？";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2099) cm.completeQuest(2099);
            if (qid == 2101) cm.completeQuest(2101);
            if (qid == 2102) cm.completeQuest(2102);
            if (qid == 9745) cm.completeQuest(9745);
        } else {
            if (qid == 2073) cm.startQuest(2073);
            if (qid == 2099) cm.startQuest(2099);
            if (qid == 2100) cm.startQuest(2100);
            if (qid == 2101) cm.startQuest(2101);
            if (qid == 2102) cm.startQuest(2102);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
