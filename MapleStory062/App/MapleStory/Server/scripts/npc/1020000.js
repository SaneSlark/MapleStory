/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1020000
   覆盖任务: 2000, 2001, 2148, 9331, 9526, 10090
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
    if (cm.getQuestStatus(2000) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "黑牛酋长的家修理" + "#l"; n++; }
    if (cm.getQuestStatus(2001) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "黑牛酋长盖房子" + "#l"; n++; }
    if (cm.getQuestStatus(2148) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "传闻的真相-黑牛酋长" + "#l"; n++; }
    if (cm.getQuestStatus(9331) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ??????" + "#l"; n++; }
    if (cm.getQuestStatus(9526) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? (12? 15?)" + "#l"; n++; }
    if (cm.getQuestStatus(10090) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ?? ??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(2000) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "黑牛酋长的家修理" + "#l"; n++; }
    if ((cm.getQuestStatus(2001) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(2000) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "黑牛酋长盖房子" + "#l"; n++; }
    if ((cm.getQuestStatus(2148) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2144) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "传闻的真相-黑牛酋长" + "#l"; n++; }
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
        if (cm.getQuestStatus(2000) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2000; } }
        if (cm.getQuestStatus(2001) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2001; } }
        if (cm.getQuestStatus(2148) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2148; } }
        if (cm.getQuestStatus(9331) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9331; } }
        if (cm.getQuestStatus(9526) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9526; } }
        if (cm.getQuestStatus(10090) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10090; } }
        if ((cm.getQuestStatus(2000) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 2000; } }
        if ((cm.getQuestStatus(2001) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(2000) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2001; } }
        if ((cm.getQuestStatus(2148) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2144) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 2148; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2000) qt = "真了不起的！收集了这么多…看来你也不是一个等闲之辈呀！嗯...好吧。我按上次的约定给你盾牌。这是我非常喜爱的盾牌，只是现在不用了。你可要珍惜阿。";
        if (qid == 2001) qt = "这...就是我儿子丢失的那张地契呀！而且你给我收集了盖房子需要的材料！ 真是太感谢你呀。这样我可以和我的亲戚一起住在#m102000000#了…!对了，这是我的一点心意…";
        if (qid == 2148) qt = "去找在#m102000000#生活了很长时间的#b#p1020000##k问问吧。";
        if (qid == 9331) qt = "?~ ?? ????? #t2022058#??. ?? ?????? #t2022058#? ?? ?? ???? ????. ??? ??? #t2022058#? ??? ?? ????? ?? ???? ???? ?? ???. ?? ???? ???? ???? ?? ?? ???? ?? ? ?? ??? #t2010000#? #t2022055#? ??? ??, ? ??? #t2022054#? ??? ?? ?? ????? ??? ???\r\n ????(棗栗梨枾) \r\n ????(紅東白西) \r\n ????(左脯右醯) \r\n ????(魚東肉西)";
        if (qid == 9526) qt = "?? ?? ?? ??????? ????? ? ??? ??? ?????? ?? ????? ?? ? ??? ??? ?????? ????.";
        if (qid == 10090) qt = "??? ?? ??? ?????? ???? ?? ???? ??.";
        if (qid == 2000) qt = "你可不可以把#b#t4000003# #e30#n个#k和 #b#t4000018# #e50#n个#k拿来？这次我打算修理我的房子。如果愿意的话，我就送你一个好#b盾牌#k。这个盾牌对我是没用的。你打退木怪的时候可以获得我需要的东西。";
        if (qid == 2001) qt = "哦~是你呀。几天不见你好像出名了嘛。总之上次多亏你，我的房子才得以修缮一新。 但这可怎么办呢？住在#m100000000#的我的亲戚都要办到我这里来呀…真是的。还得盖新房子，不过什么材料都没有…";
        if (qid == 2148) qt = "什么事？\r\n#b听说过鬼树吗？";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2000) cm.completeQuest(2000);
            if (qid == 2001) cm.completeQuest(2001);
            if (qid == 2148) cm.completeQuest(2148);
            if (qid == 9331) cm.completeQuest(9331);
            if (qid == 9526) cm.completeQuest(9526);
            if (qid == 10090) cm.completeQuest(10090);
        } else {
            if (qid == 2000) cm.startQuest(2000);
            if (qid == 2001) cm.startQuest(2001);
            if (qid == 2148) cm.startQuest(2148);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
