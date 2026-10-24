
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

var islandSelected={"id": 1017, "name": "\u9ea6\u52a0\u7684\u6700\u540e\u953b\u70bc", "startNpc": 12100, "endNpc": 12100, "quiz": [], "startText": "\u4f60\u6210\u957f\u901f\u5ea6\u53ef\u771f\u5feb\u3002\u597d\u554a\uff01\u90a3\u6211\u6700\u540e\u518d\u5bf9\u4f60\u8fdb\u884c\u4e00\u6b21\u5f3a\u5316\u953b\u70bc\u3002\u4e3a\u4e86\u63d0\u9ad8\u80fd\u529b\u4f60\u5fc5\u987b\u8981\u7ee7\u7eed\u6311\u6218\u66f4\u5f3a\u5927\u7684\u602a\u7269\u3002\u8fd9\u6b21\u6211\u8981\u8ba9\u4f60\u6253\u8d25\u6bd4\u4ee5\u524d\u66f4\u5f3a\u7684\u602a\u7269\u3002\u600e\u4e48\u6837\uff1f\u4f60\u53ef\u4ee5\u5417\uff1f", "endText": "\u4f60\u90fd\u6253\u9000\u4e86\u82b1\u8611\u83c7\u5566\uff1f\u627e\u5b83\u4eec\u662f\u4e0d\u662f\u5f88\u96be\uff1f\u597d\u50cf\u5728\u5f69\u8679\u5c9b\u8fd9\u91cc\u5f88\u96be\u627e\u5b83\u4eec\u3002\u8ba9\u6211\u786e\u8ba4\u4e00\u4e0b\u5427\u3002"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
