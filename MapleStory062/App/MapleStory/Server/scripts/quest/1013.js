
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

var islandSelected={"id": 1013, "name": "\u745e\u6069\u7684\u5192\u9669\u5c9b\u95ee\u7b545", "startNpc": 12101, "endNpc": 12101, "quiz": [{"text": "\u6218\u58eb\uff0c\u5f13\u7bad\u624b\uff0c\u98de\u4fa0\u4e3a\u4e86\u505a\u4e00\u8f6c\u9700\u8981\u7684\u7b49\u7ea7\u662f10\u3002\u90a3\u9b54\u6cd5\u5e08\u662f\u591a\u5c11\uff1f\r\n\r\n#L0##b10\u7ea7#l#l\r\n#L1#8\u7ea7#k#l", "answer": 1}], "startText": "\u4f60\u5feb\u5230\u4e00\u8f6c\u65f6\u671f\u4e86\u3002\u4e0d\u77e5\u9053\u4f60\u8981\u9009\u4ec0\u4e48\u804c\u4e1a\u3002\r\n\u597d~ \u4f60\u51c6\u5907\u597d\u56de\u7b54\u7b2c\u4e94\u4e2a\u95ee\u9898\u5c31\u8ddf\u6211\u8bf4\u5427\u3002", "endText": "\u6218\u58eb\uff0c\u5f13\u7bad\u624b\uff0c\u98de\u4fa0\u4e3a\u4e86\u505a\u4e00\u8f6c\u9700\u8981\u7684\u7b49\u7ea7\u662f10\u3002\u90a3\u9b54\u6cd5\u5e08\u662f\u591a\u5c11\uff1f\r\n\r\n#L0##b10\u7ea7#l#l\r\n#L1#8\u7ea7#k#l"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
