
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

var islandSelected={"id": 1022, "name": "\u8def\u5361\u65af\u53ef\u7231\u7684\u5973\u513f", "startNpc": 12000, "endNpc": 20100, "quiz": [], "startText": "\u6069\u2026\u2026\u4f60\u770b\u8d77\u6765\u8fd8\u50cf\u4e2a\u83dc\u9e1f\u5192\u9669\u5bb6\uff0c\u4f46\u901b\u5f97\u5f88\u60a0\u95f2\u554a\u3002\u6211\u7684\u5973\u513f\u8fd8\u5c0f\u800c\u4e14\u80c6\u5b50\u5c0f\uff0c\u4e0d\u80fd\u50cf\u4f60\u90a3\u6837\u2026\u2026 \\r\r\n#b#L0# \u6709\u5973\u513f\u5417\uff1f#l", "endText": "\u6709\u4ec0\u4e48\u4e8b\u8981\u62dc\u6258\u6211\u5417\uff1f\u4ec0\u4e48\uff1f\u51fb\u9000 #o0130101#\uff1f\u5929\u54ea~ \u5c31\u56e0\u4e3a\u6015#o0130101#\u6240\u4ee5\u56de\u4e0d\u4e86\u5bb6\uff0c\u4e0d\u592a\u53ef\u80fd\u5427\u3002\u4e0d\u7ba1\u600e\u4e48\u6837\uff0c\u60a8\u8f9b\u82e6\u4e86\u3002\u4e0d\u597d\u610f\u601d\u7ed9\u60a8\u6dfb\u9ebb\u70e6\u4e86\u3002 \t\t"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
