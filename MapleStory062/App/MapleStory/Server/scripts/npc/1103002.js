/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1103002
   覆盖任务: 20709, 20710, 20711, 20712, 20714
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
    if (cm.getQuestStatus(20709) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u6d3e\u9063\u56e2\u8d74\u5e7f\u90fd\u5e02" + "#l"; n++; }
    if (cm.getQuestStatus(20710) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5783\u573e\u6876\u91cc\u85cf\u7740\u4ec0\u4e48" + "#l"; n++; }
    if (cm.getQuestStatus(20711) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "假娃娃" + "#l"; n++; }
    if (cm.getQuestStatus(20712) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u6211\u4f1a\u63a5\u53d7\u8fd9\u4e00\u5207\uff01" + "#l"; n++; }
    if ((cm.getQuestStatus(20710) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 16) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20709) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u5783\u573e\u6876\u91cc\u85cf\u7740\u4ec0\u4e48" + "#l"; n++; }
    if ((cm.getQuestStatus(20711) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 16) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20710) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "假娃娃" + "#l"; n++; }
    if ((cm.getQuestStatus(20712) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 17) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20711) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u6211\u4f1a\u63a5\u53d7\u8fd9\u4e00\u5207\uff01" + "#l"; n++; }
    if ((cm.getQuestStatus(20714) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 17) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20712) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u666f\u798f\u5bab\u6d3e\u9063\u4efb\u52a1\u7ed3\u675f" + "#l"; n++; }
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
        if (cm.getQuestStatus(20709) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20709; } }
        if (cm.getQuestStatus(20710) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20710; } }
        if (cm.getQuestStatus(20711) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20711; } }
        if (cm.getQuestStatus(20712) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 20712; } }
        if ((cm.getQuestStatus(20710) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 16) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20709) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20710; } }
        if ((cm.getQuestStatus(20711) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 16) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20710) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20711; } }
        if ((cm.getQuestStatus(20712) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 17) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20711) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20712; } }
        if ((cm.getQuestStatus(20714) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 17) && ((cm.getJob().getId() == 1000 || cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20712) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20714; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 20709) qt = "...\u8fd9\u662f\u4ec0\u4e48\uff1f\u4f60\u5c31\u662f\u8fd9\u6b21\u8d1f\u8d23#m103000000#\u4efb\u52a1\u7684\u9a91\u58eb\u5417\uff1f\u770b\u8d77\u6765\u5f88\u53ef\u601c\uff0c\u4f60\u80fd\u505a\u4ec0\u4e48\uff1f\u8fd9\u9644\u8fd1\u7684\u6c14\u6c1b\u5f88\u4e0d\u597d\u2026\u2026";
        if (qid == 20710) qt = (qact == 1 ? "你有 #t4032136#，对吗？哦，你比我想象的还要好？你真的是在翻垃圾桶……我告诉你这很酷。" : "嗯...我不太相信，但我无法控制，因为你是圣殿骑士的成员。好像没有其他人可以调查...我会解释发生了什么。");
        if (qid == 20711) qt = (qact == 1 ? "你打败了#o1210103#并带回了娃娃......很好。那么，我们要调查一下吗……？" : "经调查，发现垃圾桶里的娃娃是假的！看来真正的娃娃已经被#o1210103#人吸收了！我需要你打败#o1210103#并找回#t4032137#。当然可以，对吧？");
        if (qid == 20712) qt = (qact == 1 ? "您找到了 #t4032138#。什么？  #p9000008# 正在抱怨请求费未支付... 嗯！使命很重要，但这并不重要，对吗？我所要做的就是找到娃娃。不是吗？" : "娃娃太多了，我分不清是什么。谢什。这就是为什么信息战光靠数量攻势是很难的……我想可能不行，所以我让#b#p9000008##k找一个真正的娃娃，你去拿吧。");
        if (qid == 20710) qt = (qact == 1 ? "你有 #t4032136#，对吗？哦，你比我想象的还要好？你真的是在翻垃圾桶……我告诉你这很酷。" : "嗯...我不太相信，但我无法控制，因为你是圣殿骑士的成员。好像没有其他人可以调查...我会解释发生了什么。");
        if (qid == 20711) qt = (qact == 1 ? "你打败了#o1210103#并带回了娃娃......很好。那么，我们要调查一下吗……？" : "经调查，发现垃圾桶里的娃娃是假的！看来真正的娃娃已经被#o1210103#人吸收了！我需要你打败#o1210103#并找回#t4032137#。当然可以，对吧？");
        if (qid == 20712) qt = (qact == 1 ? "您找到了 #t4032138#。什么？  #p9000008# 正在抱怨请求费未支付... 嗯！使命很重要，但这并不重要，对吗？我所要做的就是找到娃娃。不是吗？" : "娃娃太多了，我分不清是什么。谢什。这就是为什么信息战光靠数量攻势是很难的……我想可能不行，所以我让#b#p9000008##k找一个真正的娃娃，你去拿吧。");
        if (qid == 20714) qt = "\u6211\u4f1a\u7ee7\u7eed\u8c03\u67e5\uff0c\u4f46\u770b\u8d77\u6765#m103000000#\u5f53\u524d\u7684\u4efb\u52a1\u5df2\u7ecf\u5927\u81f4\u7ed3\u675f\u4e86\u3002\u6211\u5728\u8fd9\u91cc\u5199\u4e86\u62a5\u544a\uff0c\u6240\u4ee5\u8bf7\u628a\u5b83\u4ea4\u7ed9#b#p1101002##k\uff0c\u6bd4\u5982#t4032140#\u3002";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 20709) cm.completeQuest(20709);
            if (qid == 20710) cm.completeQuest(20710);
            if (qid == 20711) cm.completeQuest(20711);
            if (qid == 20712) cm.completeQuest(20712);
        } else {
            if (qid == 20710) cm.startQuest(20710);
            if (qid == 20711) cm.startQuest(20711);
            if (qid == 20712) cm.startQuest(20712);
            if (qid == 20714) cm.startQuest(20714);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
