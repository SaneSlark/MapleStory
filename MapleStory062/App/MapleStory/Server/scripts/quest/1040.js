
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

var islandSelected={"id": 1040, "name": "\u914b\u957f\u7684\u4ecb\u7ecd", "startNpc": 12000, "endNpc": 12000, "quiz": [], "startText": "\u54e6\uff0c\u4f60\u6765\u4e86\u3002\u6211\u5c31\u77e5\u9053\u4f60\u5f88\u5feb\u5c31\u4f1a\u56de\u6765\u7684\u3002\u6211\u518d\u95ee\u4f60\u4e00\u6b21\uff0c\u4f60\u51c6\u5907\u597d\u63a5\u53d7\u8bad\u7ec3\u4e86\u5417\uff1f", "endText": "\u54e6\u54e6\uff0c\u4f60\u5b8c\u6210\u4e86\u9ea6\u7684\u5168\u90e8\u8bad\u7ec3\u554a\u3002\u4f60\u770b\u8d77\u6765\u6bd4\u6211\u7b2c\u4e00\u6b21\u89c1\u5230\u4f60\u65f6\u5f3a\u58ee\u591a\u4e86\u3002\u518d\u7a0d\u52a0\u8bad\u7ec3\uff0c\u4f60\u5c31\u53ef\u4ee5\u524d\u5f80\u91d1\u94f6\u5c9b\u4e86\u3002\u60f3\u77e5\u9053\u600e\u4e48\u53bb\u5417\uff1f"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
