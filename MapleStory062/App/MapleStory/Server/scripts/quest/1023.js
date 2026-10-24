
var islandHelper = Packages.net.sf.odinms.scripting.npc.MapleIslandQuests;
var islandStage = -1, islandSelected = null, islandChoices = [], islandEnding = false, islandQuiz = -1, islandLegacy = false;
function islandStatus(id) { return islandManager.getQuestStatus(id).getId(); }
function islandFinish() {
    if (!islandHelper.complete(islandManager.getC(), islandSelected.id, islandManager.getNpc())) {
        islandManager.sendOk("请确认任务要求已完成，并留出奖励所需的背包空位。");
    }
    islandManager.dispose();
}
function islandAccept() {
    if (!islandHelper.start(islandManager.getC(),islandSelected.id,islandManager.getNpc())) {
        islandManager.sendOk("暂时无法接取，请确认任务条件和背包空位。");islandManager.dispose();return;
    }
    if (islandSelected.id == 1021) {
        if (!islandManager.haveItem(2010007)) islandManager.gainItem(2010007,1);
        var p=islandManager.getPlayer();
        if (p.getHp()>25) {p.setHp(25);p.updateSingleStat(Packages.net.sf.odinms.client.MapleStat.HP,25);}
        islandManager.sendOk("请打开背包，吃掉罗杰的苹果，并等生命值完全恢复后再来找我。");
    }
    islandManager.dispose();
}
function islandDialogue(mode,type,selection) {
    if (mode != 1) {islandManager.dispose();return;}
    if (islandEnding && islandStatus(islandSelected.id) == 2) {islandManager.dispose();return;}
    if (islandQuiz>=0) {
        if (selection != islandSelected.quiz[islandQuiz].answer) {
            islandManager.sendOk("再想一想，准备好后再来回答吧。");islandManager.dispose();return;
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

var islandSelected={"id": 1023, "name": "\u51fb\u9000\u732a\u732a", "startNpc": 20002, "endNpc": 20002, "quiz": [], "startText": "\u554a\u554a\uff5e\u771f\u662f\u6c14\u4eba\uff01\u771f\u662f\u65e0\u6cd5\u5bb9\u5fcd\u554a\uff01\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u751f\u6c14\uff1f\u4f60\u542c\u6211\u8bf4\u3002\u6709\u4e00\u4e2a\u5bb6\u4f19\u6563\u5e03\u8c23\u8a00\u8bf4\u8fd9\u4e2a#p20002#\u548c#o1210100#\u957f\u5f97\u5f88\u50cf\uff01\u4e0d\u77e5\u662f\u54ea\u4e2a\u5bb6\u4f19\uff0c\u88ab\u6211\u6293\u4f4f\u7edd\u4e0d\u8f7b\u9976\uff01\u771f\u662f\u4e0d\u6cd5\u5bb9\u5fcd\u554a\u3002\u4f60\u8981\u5e2e\u5e2e\u6211\uff01\uff01", "endText": "\u54c7\uff01\u51fb\u9000\u4e862\u53ea#o1210100#\u4e86\uff01\u5f88\u4e86\u4e0d\u8d77\u554a\uff01\u4f60\u5f88\u6709\u4f18\u79c0\u5192\u9669\u5bb6\u7684\u6f5c\u8d28\uff01\u611f\u8c22\u554a\uff01\u4ee5\u540e\u4e0d\u4f1a\u6709\u90a3\u79cd\u5947\u602a\u7684\u8c23\u8a00\u4e86\u5427\uff1f"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
