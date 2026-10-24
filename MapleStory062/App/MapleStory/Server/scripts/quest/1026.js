
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

var islandSelected={"id": 1026, "name": "\u7ed9\u6851\u514b\u65af\u9001\u8425\u517b\u996e\u6599", "startNpc": 2103, "endNpc": 22000, "quiz": [], "startText": "\u662f\u4e0a\u6b21\u90a3\u4f4d\u627e\u5230\u8425\u517b\u996e\u6599\u6750\u6599\u7684\u5192\u9669\u5bb6\u554a\u3002\u5f88\u9ad8\u5174\u89c1\u5230\u4f60\u3002\u5e2e\u6211\u627e\u6750\u6599\u8d39\u4e86\u5f88\u591a\u5fc3\uff0c\u518d\u6c42\u60a8\u5e2e\u5fd9\u53ef\u80fd\u6709\u4e9b\u8fc7\u5206\uff0c\u4f46\u80fd\u9047\u5230\u8c61\u60a8\u8fd9\u4e48\u5584\u826f\u7684\u5192\u9669\u5bb6\u4e5f\u4e0d\u5bb9\u6613\uff0c\u5e0c\u671b\u60a8\u518d\u5e2e\u5fd9\u4e00\u4ef6\u4e8b\u3002\u53ef\u4ee5\u5417\uff1f\t", "endText": "\u6069\uff1f\u4ec0\u4e48\u4e8b\uff1f\u554a\u2026\u2026 \u8fd9\u4e0d\u662f#p2103#\u7279\u6548\u8425\u517b\u996e\u6599\u5417\uff1f\u662f\u53d7#p2103#\u7684\u59d4\u6258\u6765\u7684\u5427\uff1f\u771f\u662f\u611f\u8c22\uff01\u6709\u4e00\u4e2a\u5584\u826f\u7684\u604b\u4eba\u771f\u662f\u5e78\u798f\u54e6\u3002"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
