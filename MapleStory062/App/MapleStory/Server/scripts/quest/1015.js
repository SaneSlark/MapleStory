
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

var islandSelected={"id": 1015, "name": "\u745e\u6069\u7684\u5192\u9669\u5c9b\u95ee\u7b547", "startNpc": 12101, "endNpc": 12101, "quiz": [{"text": "\u8fd9\u662f\u6700\u540e\u4e00\u4e2a\u95ee\u9898\u3002\u5982\u679c\u4f60\u8981\u8f6c\u804c\uff0c\u5c31\u8981\u53bb\u91d1\u94f6\u5c9b\u3002\u5728\u5f69\u8679\u5c9b\u53ef\u4ee5\u4e58\u8239\u53bb\u91d1\u94f6\u5c9b\u7684\u5730\u65b9\u662f\u54ea\u91cc\uff1f\r\n\r\n#L0##b\u5357\u6e2f#l\r\n#L1#\u5f69\u8679\u6751#l\r\n#L2#\u65e0\u6cd5\u53bb#k#l", "answer": 0}], "startText": "\u7ec8\u4e8e\u5230\u6700\u540e\u4e00\u4e2a\u95ee\u9898\u4e86\uff01\u4f60\u51c6\u5907\u597d\u8ddf\u6211\u8bf4\u5427\u3002", "endText": "\u8fd9\u662f\u6700\u540e\u4e00\u4e2a\u95ee\u9898\u3002\u5982\u679c\u4f60\u8981\u8f6c\u804c\uff0c\u5c31\u8981\u53bb\u91d1\u94f6\u5c9b\u3002\u5728\u5f69\u8679\u5c9b\u53ef\u4ee5\u4e58\u8239\u53bb\u91d1\u94f6\u5c9b\u7684\u5730\u65b9\u662f\u54ea\u91cc\uff1f\r\n\r\n#L0##b\u5357\u6e2f#l\r\n#L1#\u5f69\u8679\u6751#l\r\n#L2#\u65e0\u6cd5\u53bb#k#l"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
