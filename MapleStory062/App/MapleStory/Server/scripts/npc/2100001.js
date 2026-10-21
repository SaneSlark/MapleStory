/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2100001
   覆盖任务: 3910, 3911, 3912, 3953
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
    if (cm.getQuestStatus(3910) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "舞姬的剑舞" + "#l"; n++; }
    if (cm.getQuestStatus(3911) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "铸华丽的剑" + "#l"; n++; }
    if (cm.getQuestStatus(3953) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "说服莫哈莫德" + "#l"; n++; }
    if ((cm.getQuestStatus(3911) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 32) && (cm.getQuestStatus(3900) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3910) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "铸华丽的剑" + "#l"; n++; }
    if ((cm.getQuestStatus(3912) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 32) && (cm.getQuestStatus(3900) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3911) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "传递华丽的剑" + "#l"; n++; }
    if ((cm.getQuestStatus(3953) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3952) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "说服莫哈莫德" + "#l"; n++; }
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
        if (cm.getQuestStatus(3910) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3910; } }
        if (cm.getQuestStatus(3911) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3911; } }
        if (cm.getQuestStatus(3953) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3953; } }
        if ((cm.getQuestStatus(3911) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 32) && (cm.getQuestStatus(3900) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3910) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3911; } }
        if ((cm.getQuestStatus(3912) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 32) && (cm.getQuestStatus(3900) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3911) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3912; } }
        if ((cm.getQuestStatus(3953) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3952) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3953; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3910) qt = "把铃铛挂在衣服上练舞的 #b#m260000000##k的舞姬#p2101000#。据说她还需要另一件东西…… 去#b#p2101000##k看看吧。";
        if (qid == 3911) qt = "嗯。看来是找到了装饰手把的材料了？来，给我看看。确实是找齐了。这样就可以铸#m260000000#中最华丽的剑了。";
        if (qid == 3953) qt = "当我跟#p2100001#谈话时，他说别当#o3220001#是个怪物或说他是怪物之类的话。。。。比我想象中还严重。。。。看来我需要得到他的欢心才能够说服他。我想到一个好注意！我应该给他一个#b#t4011008#。听说是#p2100001#的最爱。然后我再从那好好跟他谈谈。 \n\n#i4011008##t4011008# #b#c4011008#/1";
        if (qid == 3911) qt = "你希望我铸什么呢？嗯？舞姬之剑？看来是#p2101000#托付你来的。不能铸舞姬使用的装饰用剑。因为税率太高，我只做必要的剑。但是……";
        if (qid == 3912) qt = "嗯…… 终于来了。#p2101000#的剑刚好铸出来了。想看一眼吗？与其说是剑，更像是装饰品…… 对舞姬来说没有什么比这更好的了。现在拿过去吗？";
        if (qid == 3953) qt = "...你是什么东西... 你是否想找我帮你链造什么东西…什么? #o3220001#? 你是不是… 想要说#o3220001# 是一个怪兽?";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3910) cm.completeQuest(3910);
            if (qid == 3911) cm.completeQuest(3911);
            if (qid == 3953) cm.completeQuest(3953);
        } else {
            if (qid == 3911) cm.startQuest(3911);
            if (qid == 3912) cm.startQuest(3912);
            if (qid == 3953) cm.startQuest(3953);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
