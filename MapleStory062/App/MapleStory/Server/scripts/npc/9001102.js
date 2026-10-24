/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 9001102
   覆盖任务: 10036
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
    if (cm.getQuestStatus(10036) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u6708\u4eae\u662f\u4ec0\u4e48\u6837\u5b50\u7684" + "#l"; n++; }
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
        if (cm.getQuestStatus(10036) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10036; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 10036) qt = (qact == 1 ? "宝宝月苗看到了月亮的照片，似乎被月亮的美丽外表深深感动了。" : "地面上的月光爱好者向 #p9001102# 个从未见过满月的人发送了月球照片。然而，当我跳向月球时，照片被撕碎，散成了碎片。  到达#p9001102#的只是一个相框……根据野月宝宝的说法，这些照片可能在某人的手中，#b，怪物，或隐藏在花中。 #k。让我们收集散落的#b张照片片#k，展示月球的本来面目。");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 10036) cm.completeQuest(10036);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
