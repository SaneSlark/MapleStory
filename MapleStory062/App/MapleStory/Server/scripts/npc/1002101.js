/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1002101
   覆盖任务: 1028, 1046, 2077, 2078, 2079, 2080, 2081, 2212, 8053, 8059, 9801, 9806, 9807, 9808
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
    if (cm.getQuestStatus(1028) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "迈向利斯海港！" + "#l"; n++; }
    if (cm.getQuestStatus(1046) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "比格斯的金银岛见闻" + "#l"; n++; }
    if (cm.getQuestStatus(2081) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "有关转职的指导" + "#l"; n++; }
    if (cm.getQuestStatus(8059) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "环游冒险岛 7" + "#l"; n++; }
    if (cm.getQuestStatus(9806) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "新的主人公" + "#l"; n++; }
    if (cm.getQuestStatus(9807) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "新的主人公" + "#l"; n++; }
    if (cm.getQuestStatus(9808) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "新的主人公" + "#l"; n++; }
    if ((cm.getQuestStatus(2077) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(2079) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2080) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2081) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2212) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2078) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "战士之路" + "#l"; n++; }
    if ((cm.getQuestStatus(2078) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(2079) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2080) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2081) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2212) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2077) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "弓箭手之路" + "#l"; n++; }
    if ((cm.getQuestStatus(2079) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(2080) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2081) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2212) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2077) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2078) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "飞侠之路" + "#l"; n++; }
    if ((cm.getQuestStatus(2080) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(2079) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2081) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2212) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2077) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2078) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "法师之路" + "#l"; n++; }
    if ((cm.getQuestStatus(2081) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0))) { opts += "\r\n#L" + n + "#[接受] " + "有关转职的指导" + "#l"; n++; }
    if ((cm.getQuestStatus(2212) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(2079) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2080) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2081) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2077) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2078) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "成为海盗的途径" + "#l"; n++; }
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
        if (cm.getQuestStatus(1028) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 1028; } }
        if (cm.getQuestStatus(1046) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 1046; } }
        if (cm.getQuestStatus(2081) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2081; } }
        if (cm.getQuestStatus(8059) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 8059; } }
        if (cm.getQuestStatus(9806) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9806; } }
        if (cm.getQuestStatus(9807) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9807; } }
        if (cm.getQuestStatus(9808) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9808; } }
        if ((cm.getQuestStatus(2077) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(2079) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2080) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2081) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2212) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2078) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2077; } }
        if ((cm.getQuestStatus(2078) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(2079) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2080) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2081) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2212) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2077) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2078; } }
        if ((cm.getQuestStatus(2079) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(2080) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2081) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2212) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2077) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2078) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2079; } }
        if ((cm.getQuestStatus(2080) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(2079) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2081) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2212) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2077) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2078) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2080; } }
        if ((cm.getQuestStatus(2081) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0))) { qi++; if (selection == qi) { qact = 0; qid = 2081; } }
        if ((cm.getQuestStatus(2212) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && ((cm.getJob().getId() == 0)) && (cm.getQuestStatus(2079) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2080) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2081) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2077) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(2078) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2212; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 1028) qt = "快来#m104000000#吧。是第一次来维多利亚岛吧？什么？受#p12000#的委托而来的？";
        if (qid == 1046) qt = "哦！你一定是新来的旅行者……你该不会刚从冒险岛来到这里吧？如果是的话，我奥拉夫一定会帮助你的。";
        if (qid == 2081) qt = "第一个问题刚才我也说过，#b战士, 弓箭手, 飞侠要在多少等级#k才能进行#b职业#k的选择？\n\n#b8 等级\n1 等级\n10 等级";
        if (qid == 8059) qt = "哦，回来得真快。怎么样？这下你知道这个世界有多大了吧？好，这是给你的小礼物。";
        if (qid == 9806) qt = "啊，是之前来打听#t4031607#的事情的朋友啊。怎么了？箱子里的枫叶又鲜活了？……什么？#t4031607#消失了只有#t4031610#留了下来？这就是#t4031610#吗？这样……哈哈哈哈哈";
        if (qid == 9807) qt = "啊，是之前来打听#t4031607#的事情的朋友啊。怎么了？箱子里的枫叶又鲜活了？……什么？#t4031607#消失了只有#t4031610#留了下来？这就是#t4031610#吗？这样……哈哈哈哈哈";
        if (qid == 9808) qt = "啊，是之前来打听#t4031607#的事情的朋友啊。怎么了？箱子里的枫叶又鲜活了？……什么？#t4031607#消失了只有#t4031610#留了下来？这就是#t4031610#吗？这样……哈哈哈哈哈";
        if (qid == 2077) qt = "选择战士吗？看到我之后也想成为威风凛凛的战士吧？如果已经下定决心的话，就果断的按下接受吧。";
        if (qid == 2078) qt = "听说过神箭手#b#p1012100##k的名声吗？以弓作为武器的弓箭手职业，在很远距离能以很高的命中率狩猎怪物。怎样？要走上#b弓箭手之路#k吗？";
        if (qid == 2079) qt = "是的。需要相当的敏捷(Dex)与幸运(Luk)的#b飞侠#k这个职业还是有着相当大的魅力。如何？要走上飞侠的路吗？";
        if (qid == 2080) qt = "大法师#p1032001#啊.. 我也只是远远的见过呢.. 那个.. 听说他经常在魔法密林顶端的魔法图书馆里..怎样？想要走上法师之路吗？";
        if (qid == 2081) qt = "啊，这样长篇大论的进行说明可不像我.. 尽量简单的说，对于各个职业，达到#b10级#k之后可以成为#b战士, 弓箭手, 飞侠#k，达到#r8级#k之后可以选择成为#r法师#k。为了得到职业，对应每个不同的职业要去寻找不同村庄的某个人。";
        if (qid == 2212) qt = "哦~你是说想成为海盗？你心里已经下定决心，做好准备了？";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 1028) islandHelper.complete(cm.getC(),1028,cm.getNpc());
            if (qid == 1046) cm.completeQuest(1046);
            if (qid == 2081) cm.completeQuest(2081);
            if (qid == 8059) cm.completeQuest(8059);
            if (qid == 9806) cm.completeQuest(9806);
            if (qid == 9807) cm.completeQuest(9807);
            if (qid == 9808) cm.completeQuest(9808);
        } else {
            if (qid == 2077) cm.startQuest(2077);
            if (qid == 2078) cm.startQuest(2078);
            if (qid == 2079) cm.startQuest(2079);
            if (qid == 2080) cm.startQuest(2080);
            if (qid == 2081) cm.startQuest(2081);
            if (qid == 2212) cm.startQuest(2212);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}


/* MAPLE-ISLAND-QUESTS 2026-10-13 */
var islandDefinitions=[{"id": 1028, "name": "\u8fc8\u5411\u660e\u73e0\u6e2f\uff01", "startNpc": 22000, "endNpc": 1002101, "quiz": [], "startText": "\u8fc8\u5411\u660e\u73e0\u6e2f\uff01\uff1a\u613f\u610f\u63a5\u53d7\u8fd9\u9879\u4efb\u52a1\u5417\uff1f", "endText": "\u5feb\u6765#m104000000#\u5427\u3002\u662f\u7b2c\u4e00\u6b21\u6765\u91d1\u94f6\u5c9b\u5427\uff1f\u4ec0\u4e48\uff1f\u53d7#p12000#\u7684\u59d4\u6258\u800c\u6765\u7684\uff1f"}];
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
