
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

var islandSelected={"id": 1043, "name": "\u9ea6\u4f9d\u7684\u7b2c\u4e09\u6b21\u4fee\u70bc", "startNpc": 12100, "endNpc": 12100, "quiz": [], "startText": "\u6b22\u8fce\u56de\u6765\u3002\u770b\u6765\u4f60\u628a\u7ea2\u8717\u725b\u5168\u90e8\u6d88\u706d\u4e86\u3002\u6ca1\u53d7\u4ec0\u4e48\u4f24\u5427\uff1f\u603b\u4e4b\uff0c\u4f60\u7684\u4e0b\u4e00\u4e2a\u4efb\u52a1\u662f\u5bf9\u4ed8\u66f4\u5f3a\u5927\u7684\u602a\u7269\u3002\u8fd9\u6b21\uff0c\u4f60\u8981\u6d88\u706d#r3\u53ea\u7eff\u6c34\u7075#k\u3002\u4e0d\u65ad\u653b\u51fb\u90a3\u4e9b\u7eff\u6c34\u7075\uff0c\u7136\u540e\u7ed9\u6211\u5e26\u56de#b1\u4efd\u9ecf\u7cca\u7cca\u7684\u6db2\u4f53#k\u3002\u5c31\u8fd9\u4e9b\u3002", "endText": "\u9ea6\u4f9d\u7684\u7b2c\u4e09\u6b21\u4fee\u70bc\uff1a\u8bf7\u5148\u5b8c\u6210\u4efb\u52a1\u8981\u6c42\uff0c\u518d\u6765\u4ea4\u4ed8\u3002"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
