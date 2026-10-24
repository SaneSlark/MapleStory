
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

var islandSelected={"id": 1010, "name": "\u745e\u6069\u7684\u5192\u9669\u5c9b\u95ee\u7b542", "startNpc": 12101, "endNpc": 12101, "quiz": [{"text": "\u53ea\u8981\u53cc\u51fb\u88c5\u5907\u7c7b\u9053\u5177\uff0c\u5c31\u53ef\u4ee5\u5c06\u9053\u5177\u88c5\u5907\u5728\u8eab\u4e0a\u5417\uff1f\r\n\r\n#L0##b\u662f#l\r\n#L1#\u4e0d\u662f#k#l", "answer": 0}], "startText": "\u597d~ \u90a3\u4f60\u51c6\u5907\u597d\u56de\u7b54\u4e0b\u4e2a\u95ee\u9898\u4e86\uff0c\u5c31\u6765\u8ddf\u6211\u8bf4\u3002", "endText": "\u53ea\u8981\u53cc\u51fb\u88c5\u5907\u7c7b\u9053\u5177\uff0c\u5c31\u53ef\u4ee5\u5c06\u9053\u5177\u88c5\u5907\u5728\u8eab\u4e0a\u5417\uff1f\r\n\r\n#L0##b\u662f#l\r\n#L1#\u4e0d\u662f#k#l"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
