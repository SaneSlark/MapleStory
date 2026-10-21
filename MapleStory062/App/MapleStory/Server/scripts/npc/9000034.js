/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 9000034
   覆盖任务: 10001, 10002
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
    if (cm.getQuestStatus(10001) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "和特殊工作人员O的协同作战" + "#l"; n++; }
    if (cm.getQuestStatus(10002) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "特殊工作人员徽章的次数" + "#l"; n++; }
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
        if (cm.getQuestStatus(10001) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10001; } }
        if (cm.getQuestStatus(10002) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10002; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 10001) qt = "变身为秘密工作人员的佳佳说有个人要介绍给我，到底会是谁呢？";
        if (qid == 10002) qt = "特殊工作人员O让我进入村庄，把30分钟后出现的工作人员箱子里的#b#t4031988##k回收回来。\r\n#i4031988# #t4031988# #b#c4031988# / 1\n\n#k回收回来的特殊工作人员徽章每次达到10个时，可以获得#b工作人员O的尼龙手套#k，徽章的个数每次超过100个时，可以获得#b工作人员O的皮手套#k。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 10001) cm.completeQuest(10001);
            if (qid == 10002) cm.completeQuest(10002);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
