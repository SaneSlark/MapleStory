/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1092002
   覆盖任务: 2171, 2172, 2173, 2174, 10092
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
    if (cm.getQuestStatus(2172) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "巴特看见的是？" + "#l"; n++; }
    if (cm.getQuestStatus(2173) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "发现黑色影子的停滞" + "#l"; n++; }
    if (cm.getQuestStatus(10092) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(2171) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10)) { opts += "\r\n#L" + n + "#[接受] " + "请帮助贝音。" + "#l"; n++; }
    if ((cm.getQuestStatus(2173) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getQuestStatus(2172) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "发现黑色影子的停滞" + "#l"; n++; }
    if ((cm.getQuestStatus(2174) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getQuestStatus(2173) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "向木拉特报告。" + "#l"; n++; }
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
        if (cm.getQuestStatus(2172) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2172; } }
        if (cm.getQuestStatus(2173) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2173; } }
        if (cm.getQuestStatus(10092) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10092; } }
        if ((cm.getQuestStatus(2171) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10)) { qi++; if (selection == qi) { qact = 0; qid = 2171; } }
        if ((cm.getQuestStatus(2173) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getQuestStatus(2172) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2173; } }
        if ((cm.getQuestStatus(2174) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10) && (cm.getQuestStatus(2173) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2174; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2172) qt = "啊！！那是真的吗？巴特也说看见了什么异状？那事情就严重了。万一那些可疑的东西是黑魔法师的话，事情就大条了。我得仔细看看报告的内容。";
        if (qid == 2173) qt = "啊~已经来了啊。还真是动作快啊。找到黑魔法师的见证了吗？";
        if (qid == 10092) qt = "??? ?????? ???? ?? ???? ??.";
        if (qid == 2171) qt = "你也听见了？在海王港号上有奇怪的声响。用这个听诊器确认一下吧。我干这一行有10年多了，还是第一次听到这种声音。能不能帮忙打听一下是否发生了什么事？";
        if (qid == 2173) qt = "我已经仔细看过报告了。果然和我想的一样，黑魔法师的手下们在暗中刺探我们。看起来事情比想象的棘手。";
        if (qid == 2174) qt = "上次找到黑魔法师的见证后，报告完成的比想象得快啊。应该把这个报告给木拉特大人的，不过你能亲自代为报告吗？这会很有帮助的。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2172) cm.completeQuest(2172);
            if (qid == 2173) cm.completeQuest(2173);
            if (qid == 10092) cm.completeQuest(10092);
        } else {
            if (qid == 2171) cm.startQuest(2171);
            if (qid == 2173) cm.startQuest(2173);
            if (qid == 2174) cm.startQuest(2174);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
