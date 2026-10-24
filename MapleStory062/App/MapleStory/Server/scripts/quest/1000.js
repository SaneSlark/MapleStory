
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

var islandSelected={"id": 1000, "name": "\u501f\u6765\u838e\u4e3d\u7684\u955c\u5b50", "startNpc": 2101, "endNpc": 2100, "quiz": [], "startText": "\u662f\u4f4d\u65b0\u7684\u65c5\u884c\u8005\u5427\uff1f\u8fd8\u5f88\u964c\u751f\u5427\uff1f\u6211\u4f1a\u544a\u8bc9\u4f60\u4e00\u4e9b\uff0c\u597d\u597d\u542c\u7740\uff0c\u8ddf\u6211\u4e00\u8d77\u505a\u3002\u9996\u5148\uff0c\u5982\u679c\u60f3\u8ddf\u6211\u4eec\u8bf4\u8bdd\u7684\u8bdd\u8bf7\u7528\u9f20\u6807#b\u53cc\u51fb#k\u6211\u4eec\u3002\u6309\u4e0b#b\u5de6\u3001\u53f3\u65b9\u5411\u952e#k\u53ef\u4ee5\u79fb\u52a8\uff0c\u6309\u4e0b#bAlt\u952e#k\u5c31\u53ef\u4ee5\u8df3\u8dc3\u3002", "endText": "\u501f\u6765\u838e\u4e3d\u7684\u955c\u5b50\uff1a\u8bf7\u5148\u5b8c\u6210\u4efb\u52a1\u8981\u6c42\uff0c\u518d\u6765\u4ea4\u4ed8\u3002"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
