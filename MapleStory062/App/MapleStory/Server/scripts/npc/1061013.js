/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1061013
   覆盖任务: 4519, 4540, 9322, 9323, 9862, 9864, 9865, 9869, 10054
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
    if (cm.getQuestStatus(4519) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "葛温的国庆礼物" + "#l"; n++; }
    if (cm.getQuestStatus(4540) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "葛温的国庆礼物" + "#l"; n++; }
    if (cm.getQuestStatus(9322) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "失踪的英雄" + "#l"; n++; }
    if (cm.getQuestStatus(9323) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "枫险之旅1000日庆祝旗" + "#l"; n++; }
    if (cm.getQuestStatus(9862) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? ?? ? ??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(9864) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? ?? ? ??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(9865) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(9869) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(10054) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???" + "#l"; n++; }
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
        if (cm.getQuestStatus(4519) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4519; } }
        if (cm.getQuestStatus(4540) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4540; } }
        if (cm.getQuestStatus(9322) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9322; } }
        if (cm.getQuestStatus(9323) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9323; } }
        if (cm.getQuestStatus(9862) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9862; } }
        if (cm.getQuestStatus(9864) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9864; } }
        if (cm.getQuestStatus(9865) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9865; } }
        if (cm.getQuestStatus(9869) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9869; } }
        if (cm.getQuestStatus(10054) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10054; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 4519) qt = "呃？你是谁？我不认识你呀。什么？我当然认识#p9270029#，他老是感冒，真希望他现在好多了。";
        if (qid == 4540) qt = "这是谁。。。我没见过你。。。　什么？我认识#p9270029#吗? 当然。。他最近好吗？我记得他总是感冒。。。　希望他有好一些。。。";
        if (qid == 9322) qt = "让我看看旅行袋内的日记内容。";
        if (qid == 9323) qt = "速度 +15 没问题吧 ?";
        if (qid == 9862) qt = "??... ?? ?? ??? ??? ??? ??, ???... ??? ??? ? ??? ???? ??? ??? ??? ? ??? ???! ?? ?????! ?? ?? ??? ???... ?? ? ??? ? ???";
        if (qid == 9864) qt = "??... ?? ?? ??? ??? ??? ??, ???... ??? ??? ? ??? ???? ??? ??? ??? ? ??? ???! ?? ?????! ?? ?? ??? ???... ?? ? ??? ? ???";
        if (qid == 9865) qt = "#t4000021#? #t4000003#? ?????. ???? ? ?? ????... ?? ?? ? ??? ??? ??? ???.";
        if (qid == 9869) qt = "...??... ????... ?? ?? ????... ?? #p1022007#? ??? ???? ??? #p1022007#? ???? ?? ???... ? ?? ? ??? ???? ????? #m102000000# ???? ? ???? ?? ??... ??. #p1022002#? ??? ?? ???.";
        if (qid == 10054) qt = "??...?? ???...#b\r\n??? ???????";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 4519) cm.completeQuest(4519);
            if (qid == 4540) cm.completeQuest(4540);
            if (qid == 9322) cm.completeQuest(9322);
            if (qid == 9323) cm.completeQuest(9323);
            if (qid == 9862) cm.completeQuest(9862);
            if (qid == 9864) cm.completeQuest(9864);
            if (qid == 9865) cm.completeQuest(9865);
            if (qid == 9869) cm.completeQuest(9869);
            if (qid == 10054) cm.completeQuest(10054);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
