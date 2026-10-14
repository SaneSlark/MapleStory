
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

var islandSelected={"id": 1006, "name": "\u957f\u8001\u7684\u56de\u4fe1", "startNpc": 12000, "endNpc": 2103, "quiz": [], "startText": "\u8fd9\u786e\u5b9e\u662f#p2103#\u7684\u4fe1\u4ef6\uff01\u54e6\u54e6\u3002\u3002\u3002\u8c22\u8c22\u4f60\u5440\u3002\u6211\u6b63\u5728\u4e3a\u6ca1\u6536\u5230\u8fd9\u5c01\u4fe1\u62c5\u5fc3\u5462\uff01\u6765\uff01\u8fd9\u662f\u6211\u7684#b\u56de\u4fe1#k\uff0c\u628a\u8fd9\u5c01#b\u56de\u4fe1#k\u4ea4\u7ed9#p2103#\u5427\u3002", "endText": "\u4f60\u5e26\u6765\u4e86\u6751\u957f\u7684\u56de\u4fe1\uff01\u771f\u611f\u8c22\u4f60\u5440\uff01\uff01\uff01 \u6211\u770b\u4e00\u4e0b\u3002\u3002\u3002\u7b54\u590d\u7684\u5185\u5bb9\u662f\u3002\u3002\u3002 \u554a\uff01\u539f\u6765\u5982\u6b64\uff01\u4e3a\u4e86\u8868\u793a\u611f\u8c22\uff0c\u6211\u60f3\u9001\u4f60\u4e00\u4e2a\u793c\u7269\u3002"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
