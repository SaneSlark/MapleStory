/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2120008
   覆盖任务: 9944, 9945, 10068, 10069, 10070, 10071, 10072, 10073
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
    if (cm.getQuestStatus(9944) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "丢弃的娃娃" + "#l"; n++; }
    if (cm.getQuestStatus(9945) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "寻找娃娃" + "#l"; n++; }
    if (cm.getQuestStatus(10068) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???" + "#l"; n++; }
    if (cm.getQuestStatus(10069) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? T? ?????" + "#l"; n++; }
    if (cm.getQuestStatus(10071) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(10072) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ???" + "#l"; n++; }
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
        if (cm.getQuestStatus(9944) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9944; } }
        if (cm.getQuestStatus(9945) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9945; } }
        if (cm.getQuestStatus(10068) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10068; } }
        if (cm.getQuestStatus(10069) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10069; } }
        if (cm.getQuestStatus(10071) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10071; } }
        if (cm.getQuestStatus(10072) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10072; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 9944) qt = "你好？见到你很高兴。我叫#p2120008#。嗯？你问我T是不是我名字？不是不是～怎么可能。但是名字我早就忘记了。现在只记得第一个字母了。所以没有办法，介绍的时候就只能说是T了。";
        if (qid == 9945) qt = "哇！#t2022256#耶！真是谢谢你！我很久都没见到#t2022256#了！……哦，对了！我也有东西要给你。来，这是#p2120005#的#t4031837#。我在烟囱的缝隙中找到了一个。#p2120004#做了很多这样的东西，非常容易找。";
        if (qid == 10068) qt = "????? ?? ??? ?????? ?? ??!! ? ?? ??? ?? ??? ???? ?? ???. ???? ??? ?? ??? ??? ?? ???!!";
        if (qid == 10069) qt = "? ???? ??? ?? ??? ?? T?? ??? ??!!";
        if (qid == 10071) qt = "????. ?? ?? ????. ???? ?? ? ????? ?? ?? ?? ??? ??, ? ?????. ? ???? ??? ? ??? ??? ????. ??? ??? 100? ???? ??? ??? ????……";
        if (qid == 10072) qt = "20?? ????. ??? ?????. ?? ??? ????.";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 9944) cm.completeQuest(9944);
            if (qid == 9945) cm.completeQuest(9945);
            if (qid == 10068) cm.completeQuest(10068);
            if (qid == 10069) cm.completeQuest(10069);
            if (qid == 10071) cm.completeQuest(10071);
            if (qid == 10072) cm.completeQuest(10072);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
