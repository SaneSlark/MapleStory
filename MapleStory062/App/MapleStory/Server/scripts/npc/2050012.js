/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2050012
   覆盖任务: 3226, 3227, 3228, 9847
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
    if (cm.getQuestStatus(3226) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "失去记忆的女孩子" + "#l"; n++; }
    if (cm.getQuestStatus(3227) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "穿黑衣服的人" + "#l"; n++; }
    if (cm.getQuestStatus(9847) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "守卫地球防御本部" + "#l"; n++; }
    if ((cm.getQuestStatus(3227) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 25) && (cm.getQuestStatus(3226) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "穿黑衣服的人" + "#l"; n++; }
    if ((cm.getQuestStatus(3228) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 25) && (cm.getQuestStatus(3227) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "找回的记忆" + "#l"; n++; }
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
        if (cm.getQuestStatus(3226) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3226; } }
        if (cm.getQuestStatus(3227) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3227; } }
        if (cm.getQuestStatus(9847) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9847; } }
        if ((cm.getQuestStatus(3227) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 25) && (cm.getQuestStatus(3226) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3227; } }
        if ((cm.getQuestStatus(3228) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 25) && (cm.getQuestStatus(3227) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3228; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3226) qt = "听说玩具城的克林有什么问题。。。";
        if (qid == 3227) qt = "在罗斯威尔草原#b#o4230119##k被消灭，聚集来了5个#b#t4031090##k。好，用我的技术，把这些碎片合成为完整的一个给你。还有外空人的人数减少，给你一些枫币吧！";
        if (qid == 9847) qt = "#b#p9310060##k说有急事相告……　点击头上的灯泡吧。";
        if (qid == 3227) qt = "在这里尽可能不要和我说话，这样会对你的安全有所帮助。因为不知道何时这个地球防御总部会有危险。呵...? 你是说受#b#p2041015##k之托来找我的吗？哦呵…是那样子的吗?…";
        if (qid == 3228) qt = "好了。现在把记忆拿到叫#b#p2041015##k的人那吧，也许可以找回失去的记忆。找回的瞬间可能有一些冲击，但这是不能避免的。那我还有事，先告辞了。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3226) cm.completeQuest(3226);
            if (qid == 3227) cm.completeQuest(3227);
            if (qid == 9847) cm.completeQuest(9847);
        } else {
            if (qid == 3227) cm.startQuest(3227);
            if (qid == 3228) cm.startQuest(3228);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
