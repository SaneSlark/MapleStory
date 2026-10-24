/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1061013
   覆盖任务: 4519, 4540, 9322, 9323, 9862, 9864, 9865, 9869, 10054
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
    if (cm.getQuestStatus(4519) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "葛温的国庆礼物" + "#l"; n++; }
    if (cm.getQuestStatus(4540) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "葛温的国庆礼物" + "#l"; n++; }
    if (cm.getQuestStatus(9322) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "失踪的英雄" + "#l"; n++; }
    if (cm.getQuestStatus(9323) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "枫险之旅1000日庆祝旗" + "#l"; n++; }
    if (cm.getQuestStatus(9862) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u4ed6\u8fd8\u5728\u90a3\u91cc" + "#l"; n++; }
    if (cm.getQuestStatus(9864) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u4ed6\u8fd8\u5728\u90a3\u91cc" + "#l"; n++; }
    if (cm.getQuestStatus(9865) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u670b\u53cb\u9001\u7684\u793c\u7269" + "#l"; n++; }
    if (cm.getQuestStatus(9869) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u683c\u6e29\uff0c\u53cb\u5584\u7684\u5192\u9669\u5bb6" + "#l"; n++; }
    if (cm.getQuestStatus(10054) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u683c\u6e29\u7684\u5192\u9669\u6545\u4e8b" + "#l"; n++; }
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
        if (cm.getQuestStatus(4519) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4519; } }
        if (cm.getQuestStatus(4540) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4540; } }
        if (cm.getQuestStatus(9322) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9322; } }
        if (cm.getQuestStatus(9323) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9323; } }
        if (cm.getQuestStatus(9862) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9862; } }
        if (cm.getQuestStatus(9864) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9864; } }
        if (cm.getQuestStatus(9865) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9865; } }
        if (cm.getQuestStatus(9869) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9869; } }
        if (cm.getQuestStatus(10054) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10054; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 4519) qt = "呃？你是谁？我不认识你呀。什么？我当然认识#p9270029#，他老是感冒，真希望他现在好多了。";
        if (qid == 4540) qt = "这是谁。。。我没见过你。。。　什么？我认识#p9270029#吗? 当然。。他最近好吗？我记得他总是感冒。。。　希望他有好一些。。。";
        if (qid == 9322) qt = "让我看看旅行袋内的日记内容。";
        if (qid == 9323) qt = "速度 +15 没问题吧 ?";
        if (qid == 9862) qt = "\u5443\u2026\u2026\u8c01\u5343\u91cc\u8fe2\u8fe2\u6765\u5230\u8fd9\u4e2a\u5730\u65b9\uff1f\u4e0d\uff0c\u4f60\u2026\u2026\u4f60\u4e0d\u662f\u4ee5\u524d\u6765\u5e2e\u52a9\u6211\u7684\u4eba\uff01\u5df2\u7ecf\u8fc7\u53bb\u8fd9\u4e48\u4e45\u4e86\uff01\u53c8\u5343\u91cc\u8fe2\u8fe2\u800c\u6765\u2026\u2026\u4f60\u662f\u6765\u770b\u6211\u7684\u5417\uff1f";
        if (qid == 9864) qt = "\u5443\u2026\u2026\u8c01\u5343\u91cc\u8fe2\u8fe2\u6765\u5230\u8fd9\u4e2a\u5730\u65b9\uff1f\u4e0d\uff0c\u4f60\u2026\u2026\u4f60\u4e0d\u662f\u4ee5\u524d\u6765\u5e2e\u52a9\u6211\u7684\u4eba\uff01\u5df2\u7ecf\u8fc7\u53bb\u8fd9\u4e48\u4e45\u4e86\uff01\u53c8\u5343\u91cc\u8fe2\u8fe2\u800c\u6765\u2026\u2026\u4f60\u662f\u6765\u770b\u6211\u7684\u5417\uff1f";
        if (qid == 9865) qt = (qact == 1 ? "我带来了#t4000021#和#t4000003#。嗯，之后就很容易了...你很快就能做到，所以再等一会儿吧。" : "我不能让还记得这个#p1061013#的人空手而去。我想再送你一份礼物……但我还缺少一些原料……你能帮我拿一下吗？我再给你一面枫旗。");
        if (qid == 9869) qt = "...\u5443...\u4f60\u662f\u8c01...\u8fd9\u662f\u6211\u7b2c\u4e00\u6b21\u89c1\u5230\u4f60...\u55ef\uff1f  \u4f60\u95ee\u4f60\u77e5\u4e0d\u77e5\u9053#p1022007#\uff1f\u6211\u5f53\u7136\u77e5\u9053#p1022007#\uff0c\u4f46\u662f\u2026\u2026\u5979\u600e\u4e48\u6837\uff1f\u6211\u5bb3\u6015\u6811\u6869\uff0c\u6240\u4ee5#m102000000# \u6211\u4ec0\u81f3\u4e0d\u80fd\u51fa\u53bb......\u597d\u5427\u3002  #p1022002# \u5c31\u5728\u90a3\u91cc\uff0c\u6240\u4ee5\u60a8\u4e0d\u5fc5\u62c5\u5fc3\u3002";
        if (qid == 10054) qt = "\u554a...\u5c31\u8fd9\u6837\u7ed3\u675f\u4e86... #b\\r\\n#L0# \u4f60\u8fd8\u597d\u5417\uff0c\u683c\u6e29\uff1f #l";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 4519) cm.completeQuest(4519);
            if (qid == 4540) cm.completeQuest(4540);
            if (qid == 9322) cm.completeQuest(9322);
            if (qid == 9323) cm.completeQuest(9323);
            if (qid == 9862) cm.completeQuest(9862);
            if (qid == 9864) cm.completeQuest(9864);
            if (qid == 9865) cm.completeQuest(9865);
            if (qid == 9869) cm.completeQuest(9869);
            if (qid == 10054) cm.completeQuest(10054);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
