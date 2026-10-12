/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 9000014
   覆盖任务: 9004, 10103
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
    if (cm.getQuestStatus(9004) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "解读秘密卷轴" + "#l"; n++; }
    if (cm.getQuestStatus(10103) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(9004) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(9004) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031019, 1))) { opts += "\r\n#L" + n + "#[接受] " + "解读秘密卷轴" + "#l"; n++; }
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
        if (cm.getQuestStatus(9004) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9004; } }
        if (cm.getQuestStatus(10103) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10103; } }
        if ((cm.getQuestStatus(9004) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(9004) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031019, 1))) { qi++; if (selection == qi) { qact = 0; qid = 9004; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 9004) qt = "你真的把#b#t4031072##k带来了！现在我可以轻松打开#b#t4031017##k了。怎么样？要我现在就帮你打开吗？";
        if (qid == 10103) qt = "??? ?????? ???? ?? ???? ??.";
        if (qid == 9004) qt = "哎？那不是#b#t4031019##k吗？哼。。。我知道点这个东西。这是玩具城成立前就存在的文件。里面封印着邪恶的力量。这原来是非常危险的东西。你不要随便打开。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 9004) cm.completeQuest(9004);
            if (qid == 10103) cm.completeQuest(10103);
        } else {
            if (qid == 9004) cm.startQuest(9004);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
