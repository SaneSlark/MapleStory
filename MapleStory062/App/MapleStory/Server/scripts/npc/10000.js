

/* MAPLE-ISLAND-QUESTS 2026-10-13 */
var islandDefinitions=[{"id": 1008, "name": "\u76ae\u5965\u7684\u5783\u573e\u56de\u6536", "startNpc": 10000, "endNpc": 10000, "quiz": [], "startText": "\u554a\u3002\u3002\u3002\u5927\u5bb6\u592a\u5bb9\u6613\u4e22\u5f03\u90a3\u4e9b\u8fd8\u80fd\u7528\u7684\u4e1c\u897f\u561b\u3002\u3002\u3002\u6211\u770b\u6751\u91cc\u5230\u5904\u90fd\u6709\u5f88\u591a\u8fd8\u80fd\u518d\u7528\u7684\u7269\u54c1\u3002\u4f60\u53ef\u4ee5\u6536\u96c6\u90a3\u4e9b\u7269\u54c1\u540e\u7ed9\u6211\u5417\uff1f\r\n\u6211\u7ed9\u4f60\u7684\u62a5\u916c\u5f88\u4e30\u539a\u54e6\u3002", "endText": "\u55ef\uff1f\u4f60\u90fd\u6536\u96c6\u9f50\u4e86\uff1f\u7ed9\u6211\u770b\u4e00\u4e0b\u3002"}, {"id": 1020, "name": "\u76ae\u5967\u7684\u5e9f\u5f03\u7269\u54c1\u56de\u6536", "startNpc": 10000, "endNpc": 10000, "quiz": [], "startText": "\u7528\u6536\u96c6\u6765\u7684\u5e9f\u6c14\u7269\u54c1\u5236\u4f5c\u7684\u65b0\u4e1c\u897f\u2026\u8fd8\u5269\u4e0b\u4e00\u4e9b\u6750\u6599\u5417\uff1f\u90a3\u6211\u5c31\u7528\u8fd9\u4e9b\u5269\u4e0b\u7684\u6750\u6599\u4e3a\u4f60\u505a\u4e2a\u6709\u7528\u7684\u4e1c\u897f\u5427\uff1f", "endText": "\u77e5\u9053\u6211\u5b8c\u6210\u4e86\u4f5c\u54c1\uff0c\u5c31\u8dd1\u6765\u627e\u6211\u4e86\uff1f\u4f60\u7684\u6d88\u606f\u8fd8\u6ee1\u7075\u901a\u7684\u561b~"}];
var islandHasLegacy=false;

var islandHelper = Packages.net.sf.odinms.scripting.npc.MapleIslandQuests;
var islandStage = -1, islandSelected = null, islandChoices = [], islandEnding = false, islandQuiz = -1, islandLegacy = false;
function islandStatus(id) { return islandManager.getQuestStatus(id).getId(); }
function islandFinish() {
    if (!islandHelper.complete(islandManager.getC(), islandSelected.id, islandManager.getNpc())) {
        islandManager.sendOk("任务尚未完成，或奖励所需的背包空间不足。请确认任务物品、消灭数量以及背包空位。罗杰的任务还需要吃完苹果并恢复全部生命值。");
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
        islandManager.sendOk("请打开背包，吃掉罗杰的苹果，并等生命值完全恢复后再来找我。");
    } else { if (islandSelected.id == 1008) islandManager.sendOk("\u4efb\u52a1\u5df2\u63a5\u53d7\uff1a\u8bf7\u6253\u7834\u7bb1\u5b50\uff0c\u6536\u96c6\u65e7\u6728\u677f\u3001\u65e7\u87ba\u4e1d\u5404 5 \u4e2a\uff0c\u518d\u4ea4\u7ed9\u76ae\u5965\u3002\u4ea4\u4ed8\u65f6\u5404\u6263\u9664 5 \u4e2a\u3002"); else if (islandSelected.id == 1018) islandManager.sendOk("\u8bf7\u6d88\u706d 1 \u53ea\u5c0f\u77f3\u7403\uff0c\u6309 Z \u62fe\u53d6 1 \u4e2a#t4000142#\uff0c\u518d\u4ea4\u7ed9 #p2002#\u3002\u7531\u4ed6\u9a8c\u6536\u5e76\u6536\u53d6\u9053\u5177\uff0c\u900f\u5fb7\u8d1f\u8d23\u6559\u4f60\u6253\u730e\u3002"); else if (islandSelected.id == 1035) islandManager.sendOk("\u8bf7\u6d88\u706d 1 \u53ea\u5c0f\u77f3\u7403\uff0c\u6309 Z \u62fe\u53d6 1 \u4e2a#t4031802#\uff0c\u518d\u4ea4\u7ed9 #p2002#\u3002\u7531\u4ed6\u9a8c\u6536\u5e76\u6536\u53d6\u9053\u5177\uff0c\u900f\u5fb7\u8d1f\u8d23\u6559\u4f60\u6253\u730e\u3002"); else islandManager.sendOk("任务已接受。请按任务栏的要求完成后，再找指定的居民交付。"); }
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
