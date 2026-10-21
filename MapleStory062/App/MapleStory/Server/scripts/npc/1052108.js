/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1052108
   覆盖任务: 2214, 2215
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
    if (cm.getQuestStatus(2214) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "沼泽地带的棚屋" + "#l"; n++; }
    if (cm.getQuestStatus(2215) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "找回皱巴巴的纸片" + "#l"; n++; }
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
        if (cm.getQuestStatus(2214) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2214; } }
        if (cm.getQuestStatus(2215) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2215; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2214) qt = "按吉姆所说，首先要做的事情好像是搜集情报。吉姆说情报会放在沼泽地带的#b棚屋#k里，必须在#b下午5点到8点之间#k去拿回来……在限定的时间内去一趟#b#m107000300##k吧。";
        if (qid == 2215) qt = "#b(把手伸进积满灰尘的垃圾箱里，摸到了什么唏嗦作响的东西。您要把它拿出来吗？)#k";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2214) cm.completeQuest(2214);
            if (qid == 2215) cm.completeQuest(2215);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
