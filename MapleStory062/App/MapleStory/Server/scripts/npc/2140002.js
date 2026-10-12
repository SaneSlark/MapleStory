/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2140002
   覆盖任务: 3513, 3514
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
    if (cm.getQuestStatus(3513) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "冰冻的感情" + "#l"; n++; }
    if (cm.getQuestStatus(3514) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "出售情感的魔法术士" + "#l"; n++; }
    if ((cm.getQuestStatus(3514) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 120) && (cm.getQuestStatus(3513) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "出售情感的魔法术士" + "#l"; n++; }
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
        if (cm.getQuestStatus(3513) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3513; } }
        if (cm.getQuestStatus(3514) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3514; } }
        if ((cm.getQuestStatus(3514) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 120) && (cm.getQuestStatus(3513) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3514; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3513) qt = "哦？听说现在不接受普通访客，怎么会有人来呢？而且感情也被冻住了，看来已经和#o8220005#干过一架了……你找我有什么事吗？";
        if (qid == 3514) qt = "见到了#p2140002#。他知道我的感情被冰冻之后，说想要给感情解冻的话，需要购买他出售的#b药#k。价格很贵，但是他说效果很好。只是需要注意会有副作用。";
        if (qid == 3514) qt = "嗯。你是想融化冰冻的感情，对吧？我一看就知道。别担心！我这里有#b融化冰冻的感情的药#k。世界最强的#p2140002#大人是无所不能的。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3513) cm.completeQuest(3513);
            if (qid == 3514) cm.completeQuest(3514);
        } else {
            if (qid == 3514) cm.startQuest(3514);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
