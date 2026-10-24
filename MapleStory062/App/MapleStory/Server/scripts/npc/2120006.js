/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2120006
   覆盖任务: 9932, 9933, 9934, 9939, 10063, 10064, 10065, 10077
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
    if (cm.getQuestStatus(9932) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "露迪米拉的耳环" + "#l"; n++; }
    if (cm.getQuestStatus(9933) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "好的音乐" + "#l"; n++; }
    if (cm.getQuestStatus(9934) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "香甜的食物" + "#l"; n++; }
    if (cm.getQuestStatus(10063) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u6211\u9700\u8981\u76f8\u518c1" + "#l"; n++; }
    if (cm.getQuestStatus(10064) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5362\u5fb7\u7c73\u62c9\u7684\u76f8\u518c" + "#l"; n++; }
    if (cm.getQuestStatus(10077) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u67f3\u5fb7\u7c73\u62c9\u7684\u9057\u61be" + "#l"; n++; }
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
        if (cm.getQuestStatus(9932) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9932; } }
        if (cm.getQuestStatus(9933) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9933; } }
        if (cm.getQuestStatus(9934) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9934; } }
        if (cm.getQuestStatus(10063) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10063; } }
        if (cm.getQuestStatus(10064) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10064; } }
        if (cm.getQuestStatus(10077) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10077; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 9932) qt = "既然和#p2120005#说要去#b#m229000210##k那边，就去乔纳斯的房间看看吧。";
        if (qid == 9933) qt = "觉得舞会上最重要的东西是挑起气氛的#b好的音乐#k。和#b#p2120006##k说了之后，她冷冷地笑了笑。";
        if (qid == 9934) qt = "觉得在舞会上最重要的东西是可以为舞会添香的#b香甜的食物#k。和#b#p2120006##k说了之后，她好像同意地优雅地点了点头。";
        if (qid == 10063) qt = "\u4ec0\u4e48\uff1f\u76f8\u518c\uff1f\u770b\u8d77\u6765\u4f60\u6709\u5f88\u591a\u7a7a\u95f2\u65f6\u95f4\u6765\u4e3a\u88ab\u56f0\u5728\u623f\u95f4\u91cc\u7684\u7d22\u83f2\u8389\u4e9a\u8dd1\u817f\u3002";
        if (qid == 10064) qt = (qact == 1 ? "一二三……。 20 赞。请稍等，我给你相册。" : "#b 索费利亚 #k 你是说你甚至不想看到我的脸吗？你要求别人做这件事...嘿~你自由了！  #b 我会给你相册#k，你能帮我一个忙吗？");
        if (qid == 10077) qt = (qact == 1 ? "变身为佩托并解除了卢德米拉的诅咒。" : "前些天寻找皮诺的身影时，我翻开了相册。照片里爸爸和妈妈都笑得很开心……能不能把这本#b相册#k也给妈妈看看，请她到这里来？");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 9932) cm.completeQuest(9932);
            if (qid == 9933) cm.completeQuest(9933);
            if (qid == 9934) cm.completeQuest(9934);
            if (qid == 10063) cm.completeQuest(10063);
            if (qid == 10064) cm.completeQuest(10064);
            if (qid == 10077) cm.completeQuest(10077);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
