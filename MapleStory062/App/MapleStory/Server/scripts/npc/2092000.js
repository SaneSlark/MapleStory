/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2092000
   覆盖任务: 3807, 3808, 3833, 10101
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
    if (cm.getQuestStatus(3807) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "药草地的入侵者1" + "#l"; n++; }
    if (cm.getQuestStatus(3808) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "药草地的入侵者2" + "#l"; n++; }
    if (cm.getQuestStatus(3833) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "找缺少的药材" + "#l"; n++; }
    if (cm.getQuestStatus(10101) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(3807) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50)) { opts += "\r\n#L" + n + "#[接受] " + "药草地的入侵者1" + "#l"; n++; }
    if ((cm.getQuestStatus(3808) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50) && (cm.getQuestStatus(3807) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "药草地的入侵者2" + "#l"; n++; }
    if ((cm.getQuestStatus(3833) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 56)) { opts += "\r\n#L" + n + "#[接受] " + "找缺少的药材" + "#l"; n++; }
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
        if (cm.getQuestStatus(3807) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3807; } }
        if (cm.getQuestStatus(3808) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3808; } }
        if (cm.getQuestStatus(3833) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3833; } }
        if (cm.getQuestStatus(10101) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10101; } }
        if ((cm.getQuestStatus(3807) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50)) { qi++; if (selection == qi) { qact = 0; qid = 3807; } }
        if ((cm.getQuestStatus(3808) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 50) && (cm.getQuestStatus(3807) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3808; } }
        if ((cm.getQuestStatus(3833) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 56)) { qi++; if (selection == qi) { qact = 0; qid = 3833; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3807) qt = "嘿嘿，#o5120501#全部消灭了啊。 非常不错。 辛苦辛苦了。";
        if (qid == 3808) qt = "哦哦! 真的很感谢你消灭了#o6130208#和 #o7130104#。 这次已经给了他们颜色瞧了，下次应该不敢再偷什么了吧! 辛苦了!";
        if (qid == 3833) qt = "据说#b#m251000000##k的#b#p2092000##k需要一些物品……";
        if (qid == 10101) qt = "???? ????? ??? ?? ???? ??.";
        if (qid == 3807) qt = "诶呀诶呀。新收获的山参变得这么歪怎么用啊。嘎嘎。#p2091002#说什么来着。啊? 为什么这样啊?  \n呵… 你是否知道怎么区分山参与 #o5120501#? 不会连这个都不知道吧? 那就帮我做这件事吧。";
        if (qid == 3808) qt = "你是冒险家是吧? 那应该很擅长消灭海盗这种工作吧。不是吗? 一定要帮我解决掉那帮子海盗吧!";
        if (qid == 3833) qt = "什么，什么…… 又是掠夺？已经没有储存的药材了，怎么办…… 还缺参啊，#p2091002#需要参，这可怎么办…… 恩，那边那位！为什么一直看着这边啊？想帮忙吗？";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3807) cm.completeQuest(3807);
            if (qid == 3808) cm.completeQuest(3808);
            if (qid == 3833) cm.completeQuest(3833);
            if (qid == 10101) cm.completeQuest(10101);
        } else {
            if (qid == 3807) cm.startQuest(3807);
            if (qid == 3808) cm.startQuest(3808);
            if (qid == 3833) cm.startQuest(3833);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
