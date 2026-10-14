
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

var islandSelected={"id": 1031, "name": "\u5e0c\u5a1c\u548c\u745f\u62c9", "startNpc": 2101, "endNpc": 2100, "quiz": [], "startText": "\u4f60\u597d\u5440\uff01\u4f60\u4e00\u5b9a\u662f\u65b0\u6765\u7684\u5427\uff01\u90a3\u4e48\u4f60\u7684\u540d\u5b57\u662f\u2026\u2026#h0#\uff1f\u5f88\u9ad8\u5174\u8ba4\u8bc6\u4f60\uff01\u6211\u60f3\u4f60\u5bf9\u6765\u5230\u5192\u9669\u5c9b\u7684\u4e16\u754c\u8fd8\u6709\u70b9\u4e0d\u4e60\u60ef\u5427\u3002\u4e0d\u8fc7\u4f60\u4ec0\u4e48\u90fd\u4e0d\u7528\u62c5\u5fc3\uff01\u8fd9\u4e2a\u4e16\u754c\u4f1a\u5f20\u5f00\u53cc\u81c2\u6b22\u8fce\u4f60\u7684\u3002", "endText": "\u2026\u2026\u54e6\uff0c\u4f60\u597d\u5440\uff01\u4f60\u4e00\u5b9a\u662f\u65b0\u6765\u7684\u65c5\u884c\u8005\u5427\uff01\u521a\u548c\u5e0c\u5a1c\u804a\u8fc7\u5417\uff1f\u89c1\u5230\u4f60\u771f\u9ad8\u5174\uff01"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
