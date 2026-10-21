/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2081011
   覆盖任务: 3714
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
    if ((cm.getQuestStatus(3714) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3714) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3706) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4001094, 1))) { opts += "\r\n#L" + n + "#[接受] " + "#t4032040#? ??? ?? ???? ??? ????, ???? #b#p9010000##k? ??? ????." + "#l"; n++; }
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
        if ((cm.getQuestStatus(3714) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3714) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3706) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4001094, 1))) { qi++; if (selection == qi) { qact = 0; qid = 3714; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3714) qt = "#p9010000#? #b???#k? ?? ?? #b#p9001105##k? #b#t4032040##k? ?? ????? ???. ??? ? ?? ?? ?? ??? #t4032040#? ??? ???? ???.";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
        } else {
            if (qid == 3714) cm.startQuest(3714);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
