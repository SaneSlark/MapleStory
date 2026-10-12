/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 20100
   覆盖任务: 1022, 1039, 8020, 8021, 8022, 8023, 8024, 8025
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
    if (cm.getQuestStatus(1022) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "路卡斯可爱的女儿" + "#l"; n++; }
    if (cm.getQuestStatus(1039) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "帮助允儿" + "#l"; n++; }
    if (cm.getQuestStatus(8020) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "允儿的购物问答：开始" + "#l"; n++; }
    if (cm.getQuestStatus(8021) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "允儿的购物问答 1" + "#l"; n++; }
    if (cm.getQuestStatus(8022) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "允儿的购物问答 2" + "#l"; n++; }
        if (cm.getQuestStatus(8023) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "允儿的购物问答 3" + "#l"; n++; }
    if (cm.getQuestStatus(8024) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "允儿的购物问答 4" + "#l"; n++; }
    if (cm.getQuestStatus(8025) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "允儿的购物问答 5" + "#l"; n++; }
    if ((cm.getQuestStatus(1039) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() <= 10) && ((cm.getJob().getId() == 0))) { opts += "\r\n#L" + n + "#[接受] " + "帮助允儿" + "#l"; n++; }
    if ((cm.getQuestStatus(8020) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0))) { opts += "\r\n#L" + n + "#[接受] " + "允儿的购物问答：开始" + "#l"; n++; }
    if ((cm.getQuestStatus(8021) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(8020) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "允儿的购物问答 1" + "#l"; n++; }
    if ((cm.getQuestStatus(8022) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(8021) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "允儿的购物问答 2" + "#l"; n++; }
    if ((cm.getQuestStatus(8023) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(8022) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "允儿的购物问答 3" + "#l"; n++; }
    if ((cm.getQuestStatus(8024) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(8023) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "允儿的购物问答 4" + "#l"; n++; }
    if ((cm.getQuestStatus(8025) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(8024) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "允儿的购物问答 5" + "#l"; n++; }
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
        if (cm.getQuestStatus(1022) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 1022; } }
        if (cm.getQuestStatus(1039) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 1039; } }
        if (cm.getQuestStatus(8020) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 8020; } }
        if (cm.getQuestStatus(8021) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 8021; } }
        if (cm.getQuestStatus(8022) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 8022; } }
        if (cm.getQuestStatus(8023) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 8023; } }
        if (cm.getQuestStatus(8024) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 8024; } }
        if (cm.getQuestStatus(8025) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 8025; } }
        if ((cm.getQuestStatus(1039) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() <= 10) && ((cm.getJob().getId() == 0))) { qi++; if (selection == qi) { qact = 0; qid = 1039; } }
        if ((cm.getQuestStatus(8020) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0))) { qi++; if (selection == qi) { qact = 0; qid = 8020; } }
        if ((cm.getQuestStatus(8021) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(8020) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 8021; } }
        if ((cm.getQuestStatus(8022) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(8021) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 8022; } }
        if ((cm.getQuestStatus(8023) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(8022) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 8023; } }
        if ((cm.getQuestStatus(8024) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(8023) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 8024; } }
        if ((cm.getQuestStatus(8025) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(8024) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 8025; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 1022) qt = "有什么事要拜托我吗？什么？击退 #o0130101#？天哪~ 就因为怕#o0130101#所以回不了家，不太可能吧。不管怎么样，您辛苦了。不好意思给您添麻烦了。";
        if (qid == 1039) qt = qact == 1 ? "哇，你真的把蓝蜗牛和孢子都清干净了！太厉害了！太谢谢你了！这样我就能平安走回家了。" : "啊啊啊~ 我该怎么办？！谁来帮帮我！嘿，你是新来的旅行者吧？你能不能……帮我猎杀#r蓝蜗牛#k和#r孢子#k？可以的话请帮帮我！";
        if (qid == 8020) qt = qact == 1 ? "哇，好快啊。看来你已经摸透了购物的门道。我觉得你完全有资格挑战购物问答了！" : "参加购物问答之前，需要先有一本#b《商城购物新手指南》#k。给我 #r1金币#k，我就把指南给你，并帮你办好登记，怎么样？";
        if (qid == 8021) qt = qact == 1 ? "你能在商城扩充道具栏吗？\n\n#b当然能\n嗯，不能！#k" : "好，我们马上开始第 1 题。准备好了吗？";
        if (qid == 8022) qt = qact == 1 ? "在商城购买的帽子和衣服，能和游戏中获得的道具同时装备吗？\n\n#b能！ \n绝对不能！ #k" : "下面是第 2 题。准备好！";
        if (qid == 8023) qt = qact == 1 ? "在商城购买的转蛋券能使用多久？\n\n#b10 天\n20 天\n30 天#k" : "好，你已经完成一半了。下面是第 3 题！";
        if (qid == 8024) qt = qact == 1 ? "便签 #v05090000# 可以按使用次数出售，下列哪个不是商城中出售的捆绑次数？\n\n#b1 次\n11 次\n35 次#k" : "好，你已经过半了！能答出第 4 题吗？";
        if (qid == 8025) qt = qact == 1 ? "这里有各式各样的武器。下列哪种武器不能和舒适枕头 #v01702019# 同时装备？\n\n#b单手剑\n单手斧\n单手钝器\n短刀#k" : "最后一题！我知道你一定答得出来！";

        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 1022) cm.completeQuest(1022);
            if (qid == 1039) cm.completeQuest(1039);
            if (qid == 8020) cm.completeQuest(8020);
            if (qid == 8021) cm.completeQuest(8021);
            if (qid == 8022) cm.completeQuest(8022);
            if (qid == 8023) cm.completeQuest(8023);
            if (qid == 8024) cm.completeQuest(8024);
            if (qid == 8025) cm.completeQuest(8025);
        } else {
            if (qid == 1039) cm.startQuest(1039);
            if (qid == 8020) {
                if (cm.getMeso() < 1) {
                    cm.sendOk("咦，你身上连 #r1金币#k 都没有吗？没有金币的话，我可没办法把《商城购物新手指南》给你哦。");
                } else {
                    cm.startQuest(8020);
                    cm.completeQuest(8020);
                }
            }
            if (qid == 8021) cm.startQuest(8021);
            if (qid == 8022) cm.startQuest(8022);
            if (qid == 8023) cm.startQuest(8023);
            if (qid == 8024) cm.startQuest(8024);
            if (qid == 8025) cm.startQuest(8025);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
