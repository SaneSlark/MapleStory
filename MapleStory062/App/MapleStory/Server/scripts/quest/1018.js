
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

var islandSelected={"id": 1018, "name": "\u900f\u5fb7\u7684\u6253\u730e\u65b9\u6cd5", "startNpc": 2004, "endNpc": 2002, "quiz": [], "startText": "\u5594~\u4f60\u662f\u65b0\u7684\u5192\u9669\u5bb6\u5417\uff1f\u5982\u4f55\uff1f\u4f60\u662f\u4e0d\u662f\u60f3\u77e5\u9053\u8fd9\u4e16\u754c\u7684\u6253\u602a\u65b9\u5f0f\u554a\uff1f\u90a3\u91cc\u6709\u4e9b\u5c0f\u77f3\u7403\uff0c\u539f\u672c\u662f\u4e0d\u4f1a\u51fa\u73b0\u5728\u8fd9\u4e2a\u533a\u57df\u7684\u9ad8\u5f3a\u602a\u7269\uff0c\u4f46\u4e3a\u4e86\u65b9\u4fbf\u65b0\u624b\u5192\u9669\u5bb6\u4eec\u8fdb\u884c\u8bad\u7ec3\uff0c\u56e0\u6b64\u7531\u5927\u9b54\u6cd5\u5e08\u6c49\u65af\u5c01\u5370\u4e86\u8fd9\u5bb6\u4f19\u7684\u80fd\u529b\u3002\u82e5\u4f60\u8fd8\u4e0d\u719f\u6089\u6253\u602a\u7684\u65b9\u6cd5\uff0c\u4f60\u8981\u4e0d\u8981\u8bd5\u7740\u53bb\u51fb\u8d25\u90a3\u5bb6\u4f19\uff1f", "endText": "\u4f60\u5c31\u662f#p2004#\u8bf4\u7684\u6b63\u5728\u5b66\u4e60\u6253\u602a\u65b9\u6cd5\u7684\u5192\u9669\u5bb6\u554a\uff1f\u542c\u8bf4\u4f60\u6709\u76f8\u5f53\u6f5c\u529b\u53ef\u4ee5\u6210\u4e3a\u975e\u5e38\u4f1f\u5927\u7684\u5192\u9669\u5bb6\u8036\uff01\u8ba9\u6211\u6765\u770b\u770b\u6253\u602a\u8bad\u7ec3\u7684\u6210\u6548\u5427\uff01"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
