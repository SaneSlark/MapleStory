/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2120002
   覆盖任务: 10067, 10068, 10070, 10071, 10078
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
    if (cm.getQuestStatus(10067) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u8499\u9762\u7ec5\u58eb\u7684\u5efa\u8bae2" + "#l"; n++; }
    if (cm.getQuestStatus(10070) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5b85\u90b8\u7684\u79d8\u5bc6 - \u4f69\u6258\u7684\u8fc7\u53bb" + "#l"; n++; }
    if (cm.getQuestStatus(10078) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u8fea\u80af\u7684\u9057\u61be" + "#l"; n++; }
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
        if (cm.getQuestStatus(10067) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10067; } }
        if (cm.getQuestStatus(10070) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10070; } }
        if (cm.getQuestStatus(10078) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10078; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 10067) qt = "\u76ae\u6258\uff1f\u4f60\u662f\u8bf4\u4f69\u6258\u5417\uff1f\u55ef...\u6211\u4e0d\u77e5\u9053\u90a3\u4e2a\u540d\u5b57\u3002\u6211\u2026\u2026\u6211\u4e0d\u77e5\u9053\u90a3\u4e2a\u4eba\u662f\u8c01\u3002";
        if (qid == 10070) qt = "\u55ef\uff1f\u90a3\u4e2a\u9b3c\u662f\u4f69\u6258\uff1f\u5443\u2026\u2026\u8fd9\u4e0d\u53ef\u80fd\uff0c\u8fd9\u4e0d\u53ef\u80fd\uff01\uff01\u8fd9\u592a\u8352\u8c2c\u4e86\u3002 \u4f69\u6258... \u4f69\u7279\u54e6\u2026\u2026\u662f\u5929\u7f5a\u3002\u4e3b\u4eba\u548c\u5973\u4e3b\u4eba\u90fd\u53d7\u5230\u4e86\u5929\u7f5a\u3002\u4e5f\u8bb8\u6709\u4e00\u5929\u6211\u4f1a\u5f97\u5230\u5b83\uff0c\u6216\u8005\u4e5f\u8bb8\u6211\u73b0\u5728\u5c31\u4f1a\u5f97\u5230\u5b83\uff0c\u5bf9\u5417\uff1f \\r\\n#b#L0# \u53d1\u751f\u4ec0\u4e48\u4e8b\u4e86\uff1f";
        if (qid == 10078) qt = (qact == 1 ? "变身为佩托并解除了管家的诅咒。" : "你想解除诅咒吗？");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 10067) cm.completeQuest(10067);
            if (qid == 10070) cm.completeQuest(10070);
            if (qid == 10078) cm.completeQuest(10078);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
