/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2120005
   覆盖任务: 9928, 9935, 9937, 10062, 10063, 10065, 10066, 10076, 10077
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
    if (cm.getQuestStatus(9928) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "奇怪的少女" + "#l"; n++; }
    if (cm.getQuestStatus(9935) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "苏菲莉亚的眼泪" + "#l"; n++; }
    if (cm.getQuestStatus(9937) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "想去其他的地方。" + "#l"; n++; }
    if (cm.getQuestStatus(10062) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u8499\u9762\u7ec5\u58eb\u7684\u5efa\u8bae1" + "#l"; n++; }
    if (cm.getQuestStatus(10065) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u6211\u9700\u8981\u76f8\u518c" + "#l"; n++; }
    if (cm.getQuestStatus(10066) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u8fc7\u53bb\u7684\u8bb0\u5fc6" + "#l"; n++; }
    if (cm.getQuestStatus(10076) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u7d22\u83f2\u8389\u4e9a\u7684\u9057\u61be" + "#l"; n++; }
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
        if (cm.getQuestStatus(9928) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9928; } }
        if (cm.getQuestStatus(9935) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9935; } }
        if (cm.getQuestStatus(9937) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9937; } }
        if (cm.getQuestStatus(10062) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10062; } }
        if (cm.getQuestStatus(10065) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10065; } }
        if (cm.getQuestStatus(10066) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10066; } }
        if (cm.getQuestStatus(10076) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10076; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 9928) qt = "按#p2120000#所说，来到了住宅的#b左侧房间#k，和那里的人们进行对话。";
        if (qid == 9935) qt = "听从#p2120005#的请求，在住宅里四处寻找她认识的人。但是记得#p2120005#的人都不愿意去看望#p2120005#……怎么办呢……去见见#b#p2120005##k吧。";
        if (qid == 9937) qt = "如果觉得好像回答#b苏菲莉亚#k的时候回答错了的话，就去和她说想要#b重新选择#k吧。";
        if (qid == 10062) qt = "\u53d1\u751f\u4e86\u4ec0\u4e48\u4e8b\uff1f \\r\\n#b#L0# \u4f60\u77e5\u9053\u4e00\u4e2a\u53eb\u4e54\u4f0a\u7684\u5a03\u5a03\u5417\uff1f";
        if (qid == 10065) qt = "\u54e6\uff0c\u4f60\u5e26\u6765\u4e86\u76f8\u518c\u3002\u55ef\uff1f\u8fd9\u4e2a\u5a03\u5a03\uff1f\u8fd9\u4e2a\u5a03\u5a03\u662f\u76ae\u8bfa\uff0c\u4e0d\u662f\u4e54\u4f0a\u3002\u8fd9\u662f\u4f69\u6258\u53d4\u53d4\u9001\u7ed9\u6211\u7684\u5a03\u5a03\u2026\u2026\\r\\n#b#L0# \u4f69\u6258\uff1f\u4f69\u6258\u53d4\u53d4\u662f\u8c01\uff1f";
        if (qid == 10066) qt = (qact == 1 ? "皮托是钢琴家吗？你现在怎么不在这座宅子里？" : "你永远不知道，如果你给我#b万圣节糖果#k，我可能会告诉你一个秘密故事~");
        if (qid == 10076) qt = (qact == 1 ? "变身为皮托并解除了索菲莉亚的诅咒。" : "你必须把这个娃娃交给 皮特。这个娃娃是以你的名字制作的。 “皮特，冒险岛最好的娃娃制造商”请把这个娃娃交给#b 索费利亚 #k。然后告诉我。爸爸说他很快就要走了...");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 9928) cm.completeQuest(9928);
            if (qid == 9935) cm.completeQuest(9935);
            if (qid == 9937) cm.completeQuest(9937);
            if (qid == 10062) cm.completeQuest(10062);
            if (qid == 10065) cm.completeQuest(10065);
            if (qid == 10066) cm.completeQuest(10066);
            if (qid == 10076) cm.completeQuest(10076);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
