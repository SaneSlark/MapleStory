
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

var islandSelected={"id": 1033, "name": "\u68ee\u7684\u5fc3\u613f", "startNpc": 2001, "endNpc": 2102, "quiz": [], "startText": "\u55ef\u2026\u2026\u4f60\u662f\u8c01\uff1f\u4ec0\u4e48\uff1f\u6211\u59d0\u59d0\u8ba9\u4f60\u6765\u95ee\u6211\u60f3\u5403\u4ec0\u4e48\uff1f\u55ef\u2026\u2026\u771f\u7a81\u7136\u3002\u5bf9\u4e86\uff0c\u524d\u51e0\u5929\u5979\u7ed9\u6211\u505a\u7684#b\u8611\u83c7\u7cd6\u679c#k\uff01\u8bf7\u4f60\u544a\u8bc9\u5979\uff0c\u68ee\u60f3\u5403\u4e00\u4e2a\u7f8e\u5473\u7684\u8611\u83c7\u7cd6\u679c\uff0c\u597d\u5417\uff1f\u8c22\u8c22\uff01", "endText": "\u68ee\u7684\u5fc3\u613f\uff1a\u8bf7\u5148\u5b8c\u6210\u4efb\u52a1\u8981\u6c42\uff0c\u518d\u6765\u4ea4\u4ed8\u3002"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
