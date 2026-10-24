
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

var islandSelected={"id": 1011, "name": "\u745e\u6069\u7684\u5192\u9669\u5c9b\u95ee\u7b543", "startNpc": 12101, "endNpc": 12101, "quiz": [{"text": "\u6253\u5f00\u89d2\u8272\u88c5\u5907\u7a97\u4f7f\u7528\u7684\u5feb\u6377\u952e\u662f\u4ec0\u4e48\uff1f\r\n\r\n#L0##bE\u952e#l\r\n#L1#S\u952e#l\r\n#L2#I\u952e#k#l", "answer": 0}], "startText": "\u6211\u7ed9\u4f60\u63d0\u7684\u5192\u9669\u5c9b\u95ee\u7b54\u5e76\u4e0d\u56f0\u96be\u3002\u867d\u7136\u7b54\u9519\u4e86\uff0c\u4f46\u8bf7\u6ce8\u610f\u542c\u6e05\u6211\u8bf4\u7684\uff0c\u8fd8\u662f\u53ef\u4ee5\u901a\u8fc7\u7684\u3002\r\n\u4f60\u51c6\u5907\u597d\u56de\u7b54\u7b2c\u4e09\u4e2a\u95ee\u9898\u5c31\u8ddf\u6211\u8bf4\u5427\u3002", "endText": "\u6253\u5f00\u89d2\u8272\u88c5\u5907\u7a97\u4f7f\u7528\u7684\u5feb\u6377\u952e\u662f\u4ec0\u4e48\uff1f\r\n\r\n#L0##bE\u952e#l\r\n#L1#S\u952e#l\r\n#L2#I\u952e#k#l"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
