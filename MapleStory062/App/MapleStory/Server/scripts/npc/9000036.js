/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 9000036
   覆盖任务: 10010, 10011, 10012, 10014, 10015, 10016, 10017, 10018, 10019, 10020
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
    if (cm.getQuestStatus(10010) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "特别命令：寻找头目M的指示书！" + "#l"; n++; }
    if (cm.getQuestStatus(10011) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "特别命令：寻找头目M的命令书！" + "#l"; n++; }
    if (cm.getQuestStatus(10012) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "特别命令：寻找头目M的指令书！" + "#l"; n++; }
    if (cm.getQuestStatus(10015) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "获得特殊工作人员徽章！" + "#l"; n++; }
    if (cm.getQuestStatus(10016) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "获得优秀工作人员徽章！" + "#l"; n++; }
    if (cm.getQuestStatus(10017) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "参加工作人员特别强化项目！" + "#l"; n++; }
    if (cm.getQuestStatus(10018) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "挑战快速问答50分！" + "#l"; n++; }
    if (cm.getQuestStatus(10019) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "西瓜田攻略！" + "#l"; n++; }
    if (cm.getQuestStatus(10020) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "帮助工作人员99 ％黑巧克力！" + "#l"; n++; }
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
        if (cm.getQuestStatus(10010) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10010; } }
        if (cm.getQuestStatus(10011) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10011; } }
        if (cm.getQuestStatus(10012) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10012; } }
        if (cm.getQuestStatus(10015) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10015; } }
        if (cm.getQuestStatus(10016) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10016; } }
        if (cm.getQuestStatus(10017) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10017; } }
        if (cm.getQuestStatus(10018) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10018; } }
        if (cm.getQuestStatus(10019) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10019; } }
        if (cm.getQuestStatus(10020) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10020; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 10010) qt = "枫之岛世界到处充满了奇怪的气息。头目M到底是谁，让大家紧张成这样？#b#p9000036##k应该会知道点什么。去见见她吧？";
        if (qid == 10011) qt = "枫之岛世界到处充满了奇怪的气息。头目M到底是谁，让大家紧张成这样？#b#p9000036##k应该会知道点什么。去见见她吧？";
        if (qid == 10012) qt = "枫之岛世界到处充满了奇怪的气息。头目M到底是谁，让大家紧张成这样？#b#p9000036##k应该会知道点什么。去见见她吧？";
        if (qid == 10015) qt = "辛苦了。今天的任务完成了。任务执行的资料我会向本部报告。祝你度过愉快的一天。";
        if (qid == 10016) qt = "辛苦了。今天的任务完成了。任务执行的资料我会向本部报告。祝你今天工作愉快。";
        if (qid == 10017) qt = "辛苦了。今天的任务完成了。任务执行的资料我会向本部报告。祝你今天工作愉快。";
        if (qid == 10018) qt = "辛苦了。今天的任务完成了。任务执行的资料我会向本部报告。祝你今天工作愉快。";
        if (qid == 10019) qt = "辛苦了。今天的任务完成了。任务执行的资料我会向本部报告。祝你今天工作愉快。";
        if (qid == 10020) qt = "辛苦了。今天的任务完成了。任务执行的资料我会向本部报告。祝你今天工作愉快。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 10010) cm.completeQuest(10010);
            if (qid == 10011) cm.completeQuest(10011);
            if (qid == 10012) cm.completeQuest(10012);
            if (qid == 10015) cm.completeQuest(10015);
            if (qid == 10016) cm.completeQuest(10016);
            if (qid == 10017) cm.completeQuest(10017);
            if (qid == 10018) cm.completeQuest(10018);
            if (qid == 10019) cm.completeQuest(10019);
            if (qid == 10020) cm.completeQuest(10020);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
