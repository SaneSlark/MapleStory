/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2012020
   覆盖任务: 3044, 3050, 9844
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
    if (cm.getQuestStatus(3050) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "阿尔冯丝的微笑" + "#l"; n++; }
    if (cm.getQuestStatus(9844) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ????" + "#l"; n++; }
    if ((cm.getQuestStatus(3044) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 40)) { opts += "\r\n#L" + n + "#[接受] " + "食人花蜜" + "#l"; n++; }
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
        if (cm.getQuestStatus(3050) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3050; } }
        if (cm.getQuestStatus(9844) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9844; } }
        if ((cm.getQuestStatus(3044) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 40)) { qi++; if (selection == qi) { qact = 0; qid = 3044; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3050) qt = "哇！终于来了啊。您不知道我等得多么辛苦，光是想着好吃的食人花果汁，什么事都做不了。";
        if (qid == 9844) qt = "#b#p9010010##k? ?? ?? ??? ????… ?? ?? ??? ?????.";
        if (qid == 3044) qt = "那个~ 如果有空的话可以帮我一个忙吗。我有样东西特别想吃到... 请一定接受我的请求~";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3050) cm.completeQuest(3050);
            if (qid == 9844) cm.completeQuest(9844);
        } else {
            if (qid == 3044) cm.startQuest(3044);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
