/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2006
   覆盖任务: 1047, 2197, 9980
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
    if (cm.getQuestStatus(2197) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "怪物手册营业员特安可" + "#l"; n++; }
    if ((cm.getQuestStatus(2197) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() <= 10) && ((cm.getJob().getId() == 0))) { opts += "\r\n#L" + n + "#[接受] " + "怪物手册营业员特安可" + "#l"; n++; }
    if ((cm.getQuestStatus(1047) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(1047) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "怪物手册指定怪物效果" + "#l"; n++; }
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
        if (cm.getQuestStatus(2197) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2197; } }
        if ((cm.getQuestStatus(2197) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() <= 10) && ((cm.getJob().getId() == 0))) { qi++; if (selection == qi) { qact = 0; qid = 2197; } }
        if ((cm.getQuestStatus(1047) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(1047) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 1047; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2197) qt = "#m104000000#到达后马上去找啰嗦的营业员#b#p0002006##k吧。";
        if (qid == 2197) qt = "你好！！哈哈！！我是永远为大家服务的营业员 #b#p0002006##k哦。我是为了马上要转变为枫之岛英雄的你解释有关“怪物手册”而来的。抽空一定要来找我谈谈哦。";
        if (qid == 1047) qt = "怪物手册指定怪物效果";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2197) cm.completeQuest(2197);
        } else {
            if (qid == 2197) cm.startQuest(2197);
            if (qid == 1047) cm.startQuest(1047);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
