
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

var islandSelected={"id": 1039, "name": "\u5e2e\u52a9\u5141\u513f", "startNpc": 20100, "endNpc": 20100, "quiz": [], "startText": "\u554a\u554a\u554a~ \u6211\u8be5\u600e\u4e48\u529e\uff1f\uff01\u8c01\u6765\u5e2e\u5e2e\u6211\uff01\u563f\uff0c\u4f60\u662f\u65b0\u6765\u7684\u65c5\u884c\u8005\u5427\uff1f\u4f60\u80fd\u4e0d\u80fd\u2026\u2026\u5e2e\u6211\u730e\u6740#r\u84dd\u8717\u725b#k\u548c#r\u5b62\u5b50#k\uff1f\u53ef\u4ee5\u7684\u8bdd\u8bf7\u5e2e\u5e2e\u6211\uff01", "endText": "\u54c7\uff0c\u4f60\u771f\u7684\u628a\u84dd\u8717\u725b\u548c\u5b62\u5b50\u90fd\u6e05\u5e72\u51c0\u4e86\uff01\u592a\u5389\u5bb3\u4e86\uff01\u592a\u8c22\u8c22\u4f60\u4e86\uff01\u8fd9\u6837\u6211\u5c31\u80fd\u5e73\u5b89\u8d70\u56de\u5bb6\u4e86\u3002"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
