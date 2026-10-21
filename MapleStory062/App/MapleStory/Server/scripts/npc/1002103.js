/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1002103
   覆盖任务: 2231, 2232, 2233, 2234
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
    if (cm.getQuestStatus(2231) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "阿尔领袖是谁？" + "#l"; n++; }
    if ((cm.getQuestStatus(2231) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "阿尔领袖是谁？" + "#l"; n++; }
    if ((cm.getQuestStatus(2232) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2231) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "抢先登录为同学吧！" + "#l"; n++; }
    if ((cm.getQuestStatus(2233) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2232) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "大家一起提高名声吧！" + "#l"; n++; }
    if ((cm.getQuestStatus(2234) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2233) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "享受名人冒险家的特权" + "#l"; n++; }
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
        if (cm.getQuestStatus(2231) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2231; } }
        if ((cm.getQuestStatus(2231) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 2231; } }
        if ((cm.getQuestStatus(2232) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2231) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2232; } }
        if ((cm.getQuestStatus(2233) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2232) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2233; } }
        if ((cm.getQuestStatus(2234) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2233) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2234; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2231) qt = "哼……不好意思，让你久等了。终于有人可以听我说话了，真让人高兴。好了，那我就开始说了。";
        if (qid == 2231) qt = "你好，#b#h0##k！我是担任冒险学院院长30多年的#b阿尔院长#k。你来找我是想看看我是什么样的人吗？";
        if (qid == 2232) qt = "呵呵，动作也很快嘛。这让我觉得很欣慰。看样子你已经开始冒险学院活动了……怎么样？你想学习我在冒险学院活动中积累的经验吗？如果你接受的话，我就给你出可以学到这种知识的题目。";
        if (qid == 2233) qt = "你的这种积极的行动，对冒险学院活动会很有帮助！如果你能保持这种姿态，用心照顾同学，相信你的名声振动枫之岛世界日子会很快到来。你要执行下一个题目吗？";
        if (qid == 2234) qt = "你真是位出色的冒险家。没想到这么快就适应了。让我们进入最后一个题目吧。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2231) cm.completeQuest(2231);
        } else {
            if (qid == 2231) cm.startQuest(2231);
            if (qid == 2232) cm.startQuest(2232);
            if (qid == 2233) cm.startQuest(2233);
            if (qid == 2234) cm.startQuest(2234);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
