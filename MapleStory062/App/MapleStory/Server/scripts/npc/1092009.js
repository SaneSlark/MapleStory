/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1092009
   覆盖任务: 2176, 2177, 2178, 10091
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
    if (cm.getQuestStatus(2176) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "清理海王港1" + "#l"; n++; }
    if (cm.getQuestStatus(2177) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "清理海王港2" + "#l"; n++; }
    if (cm.getQuestStatus(10091) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(2176) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 15)) { opts += "\r\n#L" + n + "#[接受] " + "清理海王港1" + "#l"; n++; }
    if ((cm.getQuestStatus(2177) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 25) && (cm.getQuestStatus(2176) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "清理海王港2" + "#l"; n++; }
    if ((cm.getQuestStatus(2178) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2177) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "清理海王港3" + "#l"; n++; }
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
        if (cm.getQuestStatus(2176) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2176; } }
        if (cm.getQuestStatus(2177) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2177; } }
        if (cm.getQuestStatus(10091) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10091; } }
        if ((cm.getQuestStatus(2176) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 15)) { qi++; if (selection == qi) { qact = 0; qid = 2176; } }
        if ((cm.getQuestStatus(2177) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 25) && (cm.getQuestStatus(2176) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2177; } }
        if ((cm.getQuestStatus(2178) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2177) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2178; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2176) qt = "哎哟~！你还真是动作快啊！";
        if (qid == 2177) qt = "哈哈哈哈哈哈~果然像电一样迅速啊。";
        if (qid == 10091) qt = "??? ?????? ???? ?? ???? ??.";
        if (qid == 2176) qt = "啊呼~这家伙身上的泥巴灰尘，洗了又洗也掉个没完。哎哟~我的抹布！！完全烂掉了。这可怎么办才好…… \r\n#b 有什么需要帮忙的吗？#k";
        if (qid == 2177) qt = "吱吱~吱吱~老鼠的叫声……我的天哪！啊？你不就是之前帮我弄来蝴蝶结的孩子吗？哈哈，来得正好。 \r\n#b 又有什么需要我帮忙的吗？#k";
        if (qid == 2178) qt = "呵呵呵~小伙子再拜托你一件事行吗？  \r\n#b 喝！这……这是什么味道？#k";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2176) cm.completeQuest(2176);
            if (qid == 2177) cm.completeQuest(2177);
            if (qid == 10091) cm.completeQuest(10091);
        } else {
            if (qid == 2176) cm.startQuest(2176);
            if (qid == 2177) cm.startQuest(2177);
            if (qid == 2178) cm.startQuest(2178);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
