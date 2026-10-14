/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 20100
   覆盖任务: 1022, 1039, 8020, 8021, 8022, 8023, 8024, 8025
   ============================================================ */
importPackage(net.sf.odinms.client);

var status = -1;

function islandOriginalStart() {
    status = -1;
    qfresh = true;
    action(1, 0, 0);
}

function islandOriginalAction(mode, type, selection) {
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
            if (qid == 1022) islandHelper.complete(cm.getC(),1022,cm.getNpc());
            if (qid == 1039) islandHelper.complete(cm.getC(),1039,cm.getNpc());
            if (qid == 8020) cm.completeQuest(8020);
            if (qid == 8021) cm.completeQuest(8021);
            if (qid == 8022) cm.completeQuest(8022);
            if (qid == 8023) cm.completeQuest(8023);
            if (qid == 8024) cm.completeQuest(8024);
            if (qid == 8025) cm.completeQuest(8025);
        } else {
            if (qid == 1039) islandHelper.start(cm.getC(),1039,cm.getNpc());
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


/* MAPLE-ISLAND-QUESTS 2026-10-13 */
var islandDefinitions=[{"id": 1022, "name": "\u8def\u5361\u65af\u53ef\u7231\u7684\u5973\u513f", "startNpc": 12000, "endNpc": 20100, "quiz": [], "startText": "\u6069\u2026\u2026\u4f60\u770b\u8d77\u6765\u8fd8\u50cf\u4e2a\u83dc\u9e1f\u5192\u9669\u5bb6\uff0c\u4f46\u901b\u5f97\u5f88\u60a0\u95f2\u554a\u3002\u6211\u7684\u5973\u513f\u8fd8\u5c0f\u800c\u4e14\u80c6\u5b50\u5c0f\uff0c\u4e0d\u80fd\u50cf\u4f60\u90a3\u6837\u2026\u2026 \\r\r\n#b#L0# \u6709\u5973\u513f\u5417\uff1f#l", "endText": "\u6709\u4ec0\u4e48\u4e8b\u8981\u62dc\u6258\u6211\u5417\uff1f\u4ec0\u4e48\uff1f\u51fb\u9000 #o0130101#\uff1f\u5929\u54ea~ \u5c31\u56e0\u4e3a\u6015#o0130101#\u6240\u4ee5\u56de\u4e0d\u4e86\u5bb6\uff0c\u4e0d\u592a\u53ef\u80fd\u5427\u3002\u4e0d\u7ba1\u600e\u4e48\u6837\uff0c\u60a8\u8f9b\u82e6\u4e86\u3002\u4e0d\u597d\u610f\u601d\u7ed9\u60a8\u6dfb\u9ebb\u70e6\u4e86\u3002 \t\t"}, {"id": 1039, "name": "\u5e2e\u52a9\u5141\u513f", "startNpc": 20100, "endNpc": 20100, "quiz": [], "startText": "\u554a\u554a\u554a~ \u6211\u8be5\u600e\u4e48\u529e\uff1f\uff01\u8c01\u6765\u5e2e\u5e2e\u6211\uff01\u563f\uff0c\u4f60\u662f\u65b0\u6765\u7684\u65c5\u884c\u8005\u5427\uff1f\u4f60\u80fd\u4e0d\u80fd\u2026\u2026\u5e2e\u6211\u730e\u6740#r\u84dd\u8717\u725b#k\u548c#r\u5b62\u5b50#k\uff1f\u53ef\u4ee5\u7684\u8bdd\u8bf7\u5e2e\u5e2e\u6211\uff01", "endText": "\u54c7\uff0c\u4f60\u771f\u7684\u628a\u84dd\u8717\u725b\u548c\u5b62\u5b50\u90fd\u6e05\u5e72\u51c0\u4e86\uff01\u592a\u5389\u5bb3\u4e86\uff01\u592a\u8c22\u8c22\u4f60\u4e86\uff01\u8fd9\u6837\u6211\u5c31\u80fd\u5e73\u5b89\u8d70\u56de\u5bb6\u4e86\u3002"}];
var islandHasLegacy=true;

var islandHelper = Packages.net.sf.odinms.scripting.npc.MapleIslandQuests;
var islandStage = -1, islandSelected = null, islandChoices = [], islandEnding = false, islandQuiz = -1, islandLegacy = false;
function islandStatus(id) { return islandManager.getQuestStatus(id).getId(); }
function islandFinish() {
    if (!islandHelper.complete(islandManager.getC(), islandSelected.id, islandManager.getNpc())) {
        islandManager.sendOk("任务尚未完成，或奖励所需的背包空间不足。请确认任务物品、消灭数量以及背包空位。罗杰的任务还需要吃完苹果并恢复全部HP。");
    } else islandManager.sendOk("任务完成！奖励已发放，请在任务栏查看后续任务。");
    islandManager.dispose();
}
function islandAccept() {
    if (!islandHelper.start(islandManager.getC(),islandSelected.id,islandManager.getNpc())) {
        islandManager.sendOk("暂时不能接受任务，请确认前置任务、等级、职业和背包空间。");islandManager.dispose();return;
    }
    if (islandSelected.id == 1021) {
        if (!islandManager.haveItem(2010007)) islandManager.gainItem(2010007,1);
        var p=islandManager.getPlayer();
        if (p.getHp()>25) {p.setHp(25);p.updateSingleStat(Packages.net.sf.odinms.client.MapleStat.HP,25);}
        islandManager.sendOk("请打开背包，吃掉罗杰的苹果，并等HP完全恢复后再来找我。");
    } else islandManager.sendOk("任务已接受。请按任务栏的要求完成后，再找指定的NPC交付。");
    islandManager.dispose();
}
function islandDialogue(mode,type,selection) {
    if (mode != 1) {islandManager.dispose();return;}
    if (islandEnding && islandStatus(islandSelected.id) == 2) {islandManager.dispose();return;}
    if (islandQuiz>=0) {
        if (selection != islandSelected.quiz[islandQuiz].answer) {
            islandManager.sendOk("答案不正确，请再想一想。重新与我对话即可再次挑战。");islandManager.dispose();return;
        }
        islandQuiz++;
        if(islandQuiz<islandSelected.quiz.length) islandManager.sendSimple(islandSelected.quiz[islandQuiz].text);
        else islandFinish();
        return;
    }
    islandStage++;
    if(islandStage==0) {
        if(islandEnding && islandSelected.quiz.length>0) {islandQuiz=0;islandManager.sendSimple(islandSelected.quiz[0].text);}
        else islandManager.sendYesNo(islandEnding?islandSelected.endText:islandSelected.startText);
    } else if(islandEnding) islandFinish(); else islandAccept();
}

var islandManager=null;
function islandExtraQuest(id) { return (","+"1000,1001,1003,1004,1005,1006,1007,1016,1017,1018,1019,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1035"+",").indexOf(","+id+",") >= 0; }
function start() {
    islandManager=cm;
    var opts="请选择要办理的任务：",npc=cm.getNpc();islandChoices=[];
    for(var i=0;i<islandDefinitions.length;i++) {
        var d=islandDefinitions[i],state=islandStatus(d.id);
        if(d.startNpc==npc && state==0 && !islandExtraQuest(d.id) && islandHelper.canStart(cm.getC(),d.id,npc)) {
            opts+="\r\n#L"+islandChoices.length+"#[接受] "+d.name+"#l";islandChoices.push({quest:d,end:false});
        } else if(d.endNpc==npc && state==1) {
            opts+="\r\n#L"+islandChoices.length+"#[交付/查看] "+d.name+"#l";islandChoices.push({quest:d,end:true});
        }
    }
    if(islandChoices.length==0 && islandHasLegacy) {islandLegacy=true;islandOriginalStart();return;}
    if(islandHasLegacy) opts+="\r\n#L99999#其他服务或对话#l";
    if(islandChoices.length==0 && !islandHasLegacy) {cm.sendOk("目前没有可以办理的任务。请确认任务前置条件，或继续在彩虹岛探索。");cm.dispose();return;}
    cm.sendSimple(opts);
}
function action(mode,type,selection) {
    if(islandLegacy) {islandOriginalAction(mode,type,selection);return;}
    if(mode!=1){cm.dispose();return;}
    if(islandSelected==null) {
        if(selection==99999 && islandHasLegacy) {islandLegacy=true;islandOriginalStart();return;}
        if(selection<0 || selection>=islandChoices.length){cm.dispose();return;}
        islandSelected=islandChoices[selection].quest;islandEnding=islandChoices[selection].end;
    }
    islandDialogue(mode,type,selection);
}
