/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1012102
   覆盖任务: 2009, 2044, 2046, 2153, 2156, 9745, 10084
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
    if (cm.getQuestStatus(2009) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "皮亚和蓝菇菇" + "#l"; n++; }
    if (cm.getQuestStatus(2046) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "为朋友的礼物" + "#l"; n++; }
    if (cm.getQuestStatus(2156) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "实现愿望的彩虹色蜗牛壳儿!?" + "#l"; n++; }
    if (cm.getQuestStatus(10084) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(2009) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20)) { opts += "\r\n#L" + n + "#[接受] " + "皮亚和蓝菇菇" + "#l"; n++; }
    if ((cm.getQuestStatus(2044) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && ((cm.getJob().getId() == 400 || cm.getJob().getId() == 410 || cm.getJob().getId() == 411 || cm.getJob().getId() == 412 || cm.getJob().getId() == 420 || cm.getJob().getId() == 421 || cm.getJob().getId() == 422)) && (cm.getQuestStatus(2009) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "找回红色披风" + "#l"; n++; }
    if ((cm.getQuestStatus(2153) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20)) { opts += "\r\n#L" + n + "#[接受] " + "古老的蜗牛" + "#l"; n++; }
    if ((cm.getQuestStatus(2156) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20) && (cm.getQuestStatus(2155) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "实现愿望的彩虹色蜗牛壳儿!?" + "#l"; n++; }
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
        if (cm.getQuestStatus(2009) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2009; } }
        if (cm.getQuestStatus(2046) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2046; } }
        if (cm.getQuestStatus(2156) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2156; } }
        if (cm.getQuestStatus(10084) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10084; } }
        if ((cm.getQuestStatus(2009) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20)) { qi++; if (selection == qi) { qact = 0; qid = 2009; } }
        if ((cm.getQuestStatus(2044) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && ((cm.getJob().getId() == 400 || cm.getJob().getId() == 410 || cm.getJob().getId() == 411 || cm.getJob().getId() == 412 || cm.getJob().getId() == 420 || cm.getJob().getId() == 421 || cm.getJob().getId() == 422)) && (cm.getQuestStatus(2009) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2044; } }
        if ((cm.getQuestStatus(2153) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20)) { qi++; if (selection == qi) { qact = 0; qid = 2153; } }
        if ((cm.getQuestStatus(2156) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20) && (cm.getQuestStatus(2155) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2156; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2009) qt = "啊!! 那是不是#b#t4000009##k和 #b#t4000012##k呀？ 你收集了这么多...你真棒~！谢谢！！！我的心情比以前好多了。啊哈哈~！真令人欣慰！啊哈哈哈~";
        if (qid == 2046) qt = "哎呀！你真的收集齐了。好！把这些材料给#p1052002#，他就能够为我朋友做拳爪吧。哎哟~！你这么帮忙，我给你一件好东西。我家世世代代做衣服，这个东西对你一定很有帮助的。";
        if (qid == 2156) qt = "皮亚说去海边草丛中击退#r蜗牛王#k，把#b#t2210006##k拿给他…… 你什么都不做，还使唤人？是不是太过分了？得到#t2210006#之后我得自己用！ \n\n#t2210006# #b#c2210006##k/1\n\n";
        if (qid == 10084) qt = "??? ?????? ???? ?? ???? ????.";
        if (qid == 2009) qt = "唉！几天前我去拜访在#m101000000#的朋友，途中遇到了#o2220100#。吃了不少苦头~！真是让我生气！！！ 如果我稍微再强壮一点，一定能一击就能打败他的。";
        if (qid == 2044) qt = "啊！你就是以前替我打退#o2220100# 的那个家伙吧~ 哦哦…...你看来比以前更强大了吧？上次给你的卷轴有用吗? 嘿嘿～不过，你这么强壮的人不会有问题。怎么样？我这里还有件事，不太难，可以帮我吗？";
        if (qid == 2153) qt = "有没有听到有关 #b#t2210006##k的传闻？那是只能从 枫之岛的古老的蜗牛哪儿才能得到的宝物。具有实现愿望的能力！只要有那个宝物什么愿望都可以实现！";
        if (qid == 2156) qt = "怎样？关于蜗牛传说的作者查得怎么样？是吗？追查阿洛伊的时候也得到红蜗牛王的情报？做得好！那立刻去海边草丛击退红蜗牛王, 弄来#t2210006#。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2009) cm.completeQuest(2009);
            if (qid == 2046) cm.completeQuest(2046);
            if (qid == 2156) cm.completeQuest(2156);
            if (qid == 10084) cm.completeQuest(10084);
        } else {
            if (qid == 2009) cm.startQuest(2009);
            if (qid == 2044) cm.startQuest(2044);
            if (qid == 2153) cm.startQuest(2153);
            if (qid == 2156) cm.startQuest(2156);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
