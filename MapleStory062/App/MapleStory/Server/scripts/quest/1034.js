
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

var islandSelected={"id": 1034, "name": "\u7f8e\u5473\u7684\u8611\u83c7\u7cd6", "startNpc": 2102, "endNpc": 2001, "quiz": [], "startText": "\u90a3\u68ee\u60f3\u8981\u4ec0\u4e48\uff1f\u4ec0\u4e48\uff1f\u8611\u83c7\u7cd6\u679c\uff1f\u54c8\u54c8\u2026\u2026\u4ed6\u597d\u50cf\u5230\u5904\u90fd\u6709\u70b9\u86c0\u7259\uff0c\u6240\u4ee5\u6211\u53eb\u4ed6\u522b\u5403\u4e86\u2026\u2026\u770b\u6765\u4ed6\u73b0\u5728\u60f3\u5403\u4e0a\u4e00\u4e24\u4e2a\u4e86\u3002\u597d\u5427\uff0c\u4ed6\u4eca\u5929\u505a\u4e86\u4ef6\u597d\u4e8b\uff0c\u5c31\u7ed9\u4ed6\u5427\u3002", "endText": "\u54c7\uff01\u5979\u771f\u7684\u628a\u8611\u83c7\u7cd6\u679c\u7ed9\u6211\u4e86\uff01\u592a\u597d\u4e86\uff01\u7cd6\u679c\u597d\u751c\uff0c\u6211\u6700\u559c\u6b22\u5403\uff0c\u4f60\u77e5\u9053\u7684\uff01\u8c22\u8c22\uff01"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
