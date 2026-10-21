/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2030001
   覆盖任务: 3001, 3002, 3040, 9845
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
    if (cm.getQuestStatus(3001) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "巴伯下士" + "#l"; n++; }
    if (cm.getQuestStatus(3040) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "巴伯下士的拜托" + "#l"; n++; }
    if ((cm.getQuestStatus(3002) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 40) && (cm.getQuestStatus(3040) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "伊吉上等兵" + "#l"; n++; }
    if ((cm.getQuestStatus(3040) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 40) && (cm.getQuestStatus(3001) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "巴伯下士的拜托" + "#l"; n++; }
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
        if (cm.getQuestStatus(3001) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3001; } }
        if (cm.getQuestStatus(3040) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3040; } }
        if ((cm.getQuestStatus(3002) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 40) && (cm.getQuestStatus(3040) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3002; } }
        if ((cm.getQuestStatus(3040) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 40) && (cm.getQuestStatus(3001) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3040; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3001) qt = "在冰峰雪域见到了#b珀斯上尉#k。他拜托我去找他的手下们。他们是#b查里中士，巴伯下士，伊吉上等兵#k。但必须按照高阶级见他们。已经找到了查理中士，那我要去找巴伯下士";
        if (qid == 3040) qt = "在离冰峰雪域村落很远的寒冰平原中见到了#b巴伯下士#k。他现正在执行任务，他需要给“珀斯上尉”报告：在周边调查中找到了古代文件碎片。那么找去#b查里中士、伊吉上等兵#k吧…";
        if (qid == 3002) qt = "那你下次要见面的人是#p2030002#嘛。。。他也肯定找到了什么东西。那你快点去吧。再见！";
        if (qid == 3040) qt = "什么？真的是#b#p2020003##k让你来找我的？ 我一个人也找不到，就担心了。但果然#b#p2020003##k是没事了。他原来很强的人嘛！哈哈";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3001) cm.completeQuest(3001);
            if (qid == 3040) cm.completeQuest(3040);
        } else {
            if (qid == 3002) cm.startQuest(3002);
            if (qid == 3040) cm.startQuest(3040);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
