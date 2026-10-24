
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

var islandSelected={"id": 1044, "name": "\u9ea6\u4f9d\u7684\u6700\u540e\u4fee\u70bc", "startNpc": 12100, "endNpc": 12100, "quiz": [], "startText": "\u54e6\u54c7\uff01\u4f60\u771f\u7684\u4ece\u7eff\u6c34\u7075\u90a3\u91cc\u5e26\u56de\u4e86\u9ecf\u7cca\u7cca\u7684\u6db2\u4f53\u7ed9\u6211\u3002\u4f60\u7684\u8868\u73b0\u6bd4\u6211\u9884\u60f3\u7684\u8fd8\u8981\u597d\u3002\u6211\u60f3\u2026\u2026\u4f60\u73b0\u5728\u51c6\u5907\u597d\u6311\u6218\u771f\u6b63\u6709\u96be\u5ea6\u7684\u602a\u7269\u4e86\u3002", "endText": "\u4f60\u771f\u7684\u6253\u8d25\u4e862\u53ea\u732a\u3002\u592a\u4e0d\u53ef\u601d\u8bae\u4e86\uff01\u8bf4\u771f\u7684\uff0c\u4f60\u7684\u8868\u73b0\u8fdc\u8fdc\u8d85\u51fa\u4e86\u6211\u7684\u60f3\u8c61\uff01\u4f60\u867d\u7136\u8fd8\u53ea\u662f\u4e2a\u65b0\u624b\uff0c\u4f46\u6211\u6709\u79cd\u611f\u89c9\uff0c\u603b\u6709\u4e00\u5929\u4f60\u4f1a\u6210\u4e3a\u5192\u9669\u5c9b\u4e16\u754c\u91cc\u7684\u4f20\u5947\u82f1\u96c4\u3002"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
