/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1094001
   覆盖任务: 2186
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
    if (cm.getQuestStatus(2186) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "找眼镜" + "#l"; n++; }
    if ((cm.getQuestStatus(2186) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 15)) { opts += "\r\n#L" + n + "#[接受] " + "找眼镜" + "#l"; n++; }
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
        if (cm.getQuestStatus(2186) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2186; } }
        if ((cm.getQuestStatus(2186) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 15)) { qi++; if (selection == qi) { qact = 0; qid = 2186; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2186) qt = "听说在海王港的码头上有谁正烦着呢。他丢失了自己的身体一样重要的东西……";
        if (qid == 2186) qt = "我的眼镜……我的眼镜…… \r\n#b有什么能帮你的吗？地上有什么掉了的东西吗？#k";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2186) cm.completeQuest(2186);
        } else {
            if (qid == 2186) cm.startQuest(2186);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
