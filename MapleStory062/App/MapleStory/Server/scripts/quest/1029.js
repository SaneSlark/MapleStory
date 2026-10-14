
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

var islandSelected={"id": 1029, "name": "\u5c71\u59c6\u7684\u5fe0\u544a", "startNpc": 2005, "endNpc": 2005, "quiz": [], "startText": "\u54df\u547c~ \u5582\uff1f\u8ba9\u6211\u770b\u770b\u2026\u2026\u4f60\u521a\u5347\u4e862\u7ea7\u3002\u8fd9\u6837\u4f60\u5c31\u6709#bAP#k\u4e86\u3002\u4f60\u51b3\u5b9a\u597d\u8981\u628aAP\u52a0\u5728\u54ea\u91cc\u4e86\u5417\uff1f\u4f60\u8fd8\u4e0d\u77e5\u9053AP\u662f\u4ec0\u4e48\uff1f\u54ce\u5440\u5440\u2026\u2026\u90a3\u6211\u5c31\u597d\u5fc3\u7ed9\u4f60\u8bb2\u8bb2\u5427\u3002 ", "endText": "\u54df\u547c~~ \u4f60\u53c8\u6765\u4e86\u3002\u771f\u662f\u4e00\u4f4d\u4e0d\u653e\u8fc7\u4efb\u4f55\u60c5\u62a5\u7684\u5192\u9669\u5bb6\u554a\uff01\u6211\u4eec\u6765\u804a\u804a\u8f6c\u804c\u7684\u4e8b\u5427\uff1f"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
