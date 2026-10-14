

/* MAPLE-ISLAND-QUESTS 2026-10-13 */
var islandDefinitions=[{"id": 1007, "name": "\u6bd4\u683c\u65af\u7684\u7269\u54c1\u6536\u96c6", "startNpc": 20002, "endNpc": 20002, "quiz": [], "startText": "\u5982\u679c\u4f60\u62ff#e1#n\u4e2a#k#b#t4000001##k \u548c#e5#n\u4e2a#k#b#t4000000##k \u6765\u7684\u8bdd\uff0c\u6211\u5c31\u7ed9\u4f60\u4e00\u6837\u597d\u4e1c\u897f\uff01\u90a3\u4e9b\u4e1c\u897f\u5728\u6253\u6b7b\u602a\u7269\u65f6\u4f60\u5c31\u53ef\u4ee5\u83b7\u5f97\uff01\u4e0d\u8fc7\uff0c\u770b\u4e0a\u53bb\u4f60\u592a\u865a\u5f31\uff0c\u597d\u50cf\u4e0d\u80fd\u5b8c\u6210\u8fd9\u4e48\u5371\u9669\u7684\u4efb\u52a1\u3002", "endText": "\u6ca1\u60f3\u5230\u4f60\u80fd\u591f\u6536\u96c6\u5168\uff0c\u6709\u4e24\u4e0b\u5b50\uff01\u597d\uff01\u6211\u5151\u73b0\u627f\u8bfa\uff0c\u73b0\u5728\u7ed9\u4f60\u9053\u5177\u3002\u53cd\u6b63\u6211\u4e5f\u6ca1\u7528\u3002"}, {"id": 1023, "name": "\u51fb\u9000\u732a\u732a", "startNpc": 20002, "endNpc": 20002, "quiz": [], "startText": "\u554a\u554a\uff5e\u771f\u662f\u6c14\u4eba\uff01\u771f\u662f\u65e0\u6cd5\u5bb9\u5fcd\u554a\uff01\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u751f\u6c14\uff1f\u4f60\u542c\u6211\u8bf4\u3002\u6709\u4e00\u4e2a\u5bb6\u4f19\u6563\u5e03\u8c23\u8a00\u8bf4\u8fd9\u4e2a#p20002#\u548c#o1210100#\u957f\u5f97\u5f88\u50cf\uff01\u4e0d\u77e5\u662f\u54ea\u4e2a\u5bb6\u4f19\uff0c\u88ab\u6211\u6293\u4f4f\u7edd\u4e0d\u8f7b\u9976\uff01\u771f\u662f\u4e0d\u6cd5\u5bb9\u5fcd\u554a\u3002\u4f60\u8981\u5e2e\u5e2e\u6211\uff01\uff01", "endText": "\u54c7\uff01\u51fb\u9000\u4e862\u53ea#o1210100#\u4e86\uff01\u5f88\u4e86\u4e0d\u8d77\u554a\uff01\u4f60\u5f88\u6709\u4f18\u79c0\u5192\u9669\u5bb6\u7684\u6f5c\u8d28\uff01\u611f\u8c22\u554a\uff01\u4ee5\u540e\u4e0d\u4f1a\u6709\u90a3\u79cd\u5947\u602a\u7684\u8c23\u8a00\u4e86\u5427\uff1f"}];
var islandHasLegacy=false;

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
