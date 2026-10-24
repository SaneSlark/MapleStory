
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

var islandSelected={"id": 1030, "name": "\u739b\u4e3d\u4e9a\u7684\u5730\u56fe\u8bfe", "startNpc": 2103, "endNpc": 2103, "quiz": [], "startText": "\u54e6\uff0c\u4f60\u770b\u8d77\u6765\u8ff7\u8def\u4e86\u3002\u55ef\u2026\u2026\u4e0d\u719f\u6089\u5192\u9669\u5c9b\u4e16\u754c\u7684\u65b0\u624b\u7ecf\u5e38\u4f1a\u8ff7\u8def\u3002\u5927\u6982\u4f60\u8fd8\u4e0d\u4f1a\u770b\u4e16\u754c\u5730\u56fe\u5427\u3002\u60f3\u77e5\u9053\u600e\u4e48\u770b\u5417\uff1f", "endText": "\u739b\u4e3d\u4e9a\u7684\u5730\u56fe\u8bfe\uff1a\u8bf7\u5148\u5b8c\u6210\u4efb\u52a1\u8981\u6c42\uff0c\u518d\u6765\u4ea4\u4ed8\u3002"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
