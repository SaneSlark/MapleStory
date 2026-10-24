
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

var islandSelected={"id": 1025, "name": "\u739b\u4e3d\u4e9a\u7684\u8425\u517b\u996e\u6599", "startNpc": 2103, "endNpc": 2103, "quiz": [], "startText": "\u4f60\u597d\uff1f\u662f\u5192\u9669\u5bb6\u5148\u751f\u5417\uff1f\u5f69\u8679\u5c9b\u4e4b\u65c5\u600e\u4e48\u6837\uff1f\u5f69\u8679\u5c9b\u5f88\u5c0f\u800c\u4e14\u5f88\u548c\u5e73\uff0c\u5e94\u8be5\u6ca1\u6709\u4ec0\u4e48\u5a01\u80c1\u3002\u6069\u2026\u2026 \u5982\u679c\u4f60\u6709\u7a7a\u95f2\u7684\u8bdd\uff0c\u53ef\u4ee5\u5e2e\u6211\u4e2a\u5fd9\u5417\uff1f", "endText": "\u554a\uff01\u4f60\u627e\u6765\u4e86\u8425\u517b\u996e\u6599\u7684\u6240\u6709\u6750\u6599\u554a\uff01\u4e86\u4e0d\u8d77\uff01\u53ea\u8981\u6709\u8fd9\u4e9b\uff0c\u996e\u6599\u9a6c\u4e0a\u5c31\u80fd\u505a\u597d\uff01"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
