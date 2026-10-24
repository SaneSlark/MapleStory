
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

var islandSelected={"id": 1032, "name": "\u59ae\u5a1c\u7684\u5f1f\u5f1f\u68ee", "startNpc": 2102, "endNpc": 2001, "quiz": [], "startText": "\u54e6\uff0c\u4f60\u597d\u554a\uff0c\u65c5\u884c\u8005\uff01\u4f60\u6765\u5f97\u6b63\u597d\uff0c\u6211\u9700\u8981\u4f60\u5e2e\u6211\u4e2a\u5fd9\uff0c\u53ef\u4ee5\u5417\uff1f\u5f80\u53f3\u8fb9\u8d70\u4e00\u70b9\uff0c\u4f60\u4f1a\u770b\u5230\u4e00\u680b#b\u9ec4\u5c4b\u9876\u7684\u623f\u5b50#k\u3002\u90a3\u662f\u6211\u7684\u5bb6\uff0c\u800c\u4e14\u2026\u2026\u73b0\u5728\u5bb6\u91cc\u53ea\u6709\u6211\u5f1f\u5f1f#b\u68ee#k\u4e00\u4e2a\u4eba\u3002", "endText": "\u59ae\u5a1c\u7684\u5f1f\u5f1f\u68ee\uff1a\u8bf7\u5148\u5b8c\u6210\u4efb\u52a1\u8981\u6c42\uff0c\u518d\u6765\u4ea4\u4ed8\u3002"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
