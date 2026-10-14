
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

var islandSelected={"id": 1007, "name": "\u6bd4\u683c\u65af\u7684\u7269\u54c1\u6536\u96c6", "startNpc": 20002, "endNpc": 20002, "quiz": [], "startText": "\u5982\u679c\u4f60\u62ff#e1#n\u4e2a#k#b#t4000001##k \u548c#e5#n\u4e2a#k#b#t4000000##k \u6765\u7684\u8bdd\uff0c\u6211\u5c31\u7ed9\u4f60\u4e00\u6837\u597d\u4e1c\u897f\uff01\u90a3\u4e9b\u4e1c\u897f\u5728\u6253\u6b7b\u602a\u7269\u65f6\u4f60\u5c31\u53ef\u4ee5\u83b7\u5f97\uff01\u4e0d\u8fc7\uff0c\u770b\u4e0a\u53bb\u4f60\u592a\u865a\u5f31\uff0c\u597d\u50cf\u4e0d\u80fd\u5b8c\u6210\u8fd9\u4e48\u5371\u9669\u7684\u4efb\u52a1\u3002", "endText": "\u6ca1\u60f3\u5230\u4f60\u80fd\u591f\u6536\u96c6\u5168\uff0c\u6709\u4e24\u4e0b\u5b50\uff01\u597d\uff01\u6211\u5151\u73b0\u627f\u8bfa\uff0c\u73b0\u5728\u7ed9\u4f60\u9053\u5177\u3002\u53cd\u6b63\u6211\u4e5f\u6ca1\u7528\u3002"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
