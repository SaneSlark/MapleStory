
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

var islandSelected={"id": 1027, "name": "\u9ea6\u52a0\u7684\u8bf7\u6c42", "startNpc": 12100, "endNpc": 12000, "quiz": [], "startText": "\u5f69\u8679\u5c9b\u662f\u83dc\u9e1f\u5192\u9669\u8005\u7684\u4e50\u56ed\u3002\u602a\u517d\u4e5f\u6ca1\u90a3\u4e48\u5f3a\u3002\u4f46\u522b\u60f3\u8499\u6df7\u8fc7\u5173\u3002\u8981\u6253\u597d\u57fa\u7840\uff0c\u624d\u80fd\u4e0d\u65ad\u63d0\u9ad8\u5b9e\u529b\u3002\u8d8a\u662f\u521d\u7ea7\u8d8a\u8981\u8ba4\u771f\u3002\\r\r\n#b#L0# \u4f60\u770b\u8d77\u6765\u5f88\u5f3a\u5927\u554a\u3002\u4e3a\u4ec0\u4e48\u5446\u5728\u5f69\u8679\u5c9b\u4e0a\u5462\uff1f#l", "endText": "\u6069\u2026\u2026 \u4f60\u662f\u8c01\uff1f\u662f#p12100#\u6d3e\u6765\u7684\uff1f#p12100#\u4e3a\u4ec0\u4e48\u6d3e\u4f60\u6765\uff1f\\r\r\n#b#L0# #p12100#\u60f3\u52a0\u5de5\u8d44\uff1f#l\\r\r\n#L1# \u56e0\u4e3a\u901b\u5f69\u8679\u5c9b\u7684\u83dc\u9e1f\u5192\u9669\u5bb6\u589e\u591a\uff0c#p12100#\u4e00\u4e2a\u4eba\u505a\u6709\u4e9b\u56f0\u96be\u3002#l\\r\r\n#L2# #p12100#\u8bf4\u60f3\u548c#p12000#\u5bf9\u7ec3\uff0c\u8ba9\u6211\u4f20\u8bdd\u3002#l"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
