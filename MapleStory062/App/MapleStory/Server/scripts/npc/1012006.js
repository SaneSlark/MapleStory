/*
 *No credits for screwing the mechanics (grammar/punctuation) up so badly
 *Quest Pet NPC
 */

var status = 0;

function start() {
    qfresh = true;
    status = -1;
    action(1, 0, 0);
}

function qOrigAction(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (status >= 2 && mode == 0) {
            cm.sendOk("我看你不需要.");
            cm.dispose();
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.haveItem(4031921,1)) {
                cm.sendOk("我已经给你纸条了!!");
                cm.dispose();
            } else 
                cm.sendNext("我必须把纸条拿给我弟弟!");
        } else if (status == 1)
            cm.sendNextPrev("我想你能帮助我!");
        else if (status == 2)
            cm.sendYesNo("听着.我希望你能尽快把纸条送到我弟弟那边,你会帮我这个忙么? #h #?")
        else if (status == 3) {
            cm.sendOk("非常感谢,我已经在这里等了一整夜,这是我的信,接下来就交给你!");
            cm.gainItem(4031921, 1);
            cm.dispose();
        }
    }
} 
function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
    qOrigAction(mode, type, selection);
}

/* AUTO-QUEST-BEGIN */
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
    if (cm.getQuestStatus(4647) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "训练师的秘方" + "#l"; n++; }
    if ((cm.getQuestStatus(4647) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(4646) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "训练师的秘方" + "#l"; n++; }
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
        if (cm.getQuestStatus(4647) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4647; } }
        if ((cm.getQuestStatus(4647) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(4646) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 4647; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 4647) qt = "终于可以向巴特斯学习带领多只宠物的技能了吗？";
        if (qid == 4647) qt = "若你真的有心想要学习带领多只宠物的技能的话，就去想办法把宠物点心拿给我吧！";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 4647) cm.completeQuest(4647);
        } else {
            if (qid == 4647) cm.startQuest(4647);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
/* AUTO-QUEST-END */
