
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

var islandSelected={"id": 1016, "name": "\u9ea6\u52a0\u7684\u953b\u70bc", "startNpc": 12100, "endNpc": 12100, "quiz": [], "startText": "\u54df\u3002\u3002\u3002\u770b\u6765\u4f60\u9700\u8981\u6211\u7684\u6307\u5bfc\u3002\u54c8\u54c8~ \u4f60\u4e0d\u7528\u62c5\u5fc3\u3002\u53ea\u662f\u6211\u770b\u4f60\u8fd8\u6ca1\u719f\u6089\u8fd9\u91cc\u3002\u4f60\u521d\u6b21\u6765\u8fd9\u91cc\u5427\uff1f\u600e\u4e48\u6837\uff1f\u60f3\u4e0d\u60f3\u53d7\u6211\u7684\u6307\u5bfc\uff1f", "endText": "\u600e\u4e48\u6837\uff1f\u4f60\u953b\u70bc\u4e86\u81ea\u5df1\uff1f\u6211\u53ef\u4e0d\u53ef\u4ee5\u786e\u8ba4\uff1f"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
