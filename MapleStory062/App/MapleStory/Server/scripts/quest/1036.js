
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

var islandSelected={"id": 1036, "name": "\u80fd\u529b\u503c\u95ee\u7b54", "startNpc": 2003, "endNpc": 2003, "quiz": [{"text": "AP\u80fd\u7528\u6765\u63d0\u9ad8HP\u548cMP\u5417\uff1f\r\n#L0#\u80fd#l\r\n#L1#\u4e0d\u80fd#l", "answer": 0}, {"text": "\u54ea\u4e2a\u804c\u4e1a\u53ef\u4ee5\u57288\u7ea7\u8f6c\u804c\uff1f\r\n#L0#\u6218\u58eb#l\r\n#L1#\u9b54\u6cd5\u5e08#l\r\n#L2#\u5f13\u7bad\u624b#l\r\n#L3#\u98de\u4fa0#l", "answer": 1}, {"text": "\u4e0b\u9762\u54ea\u9879\u8f6c\u804c\u6761\u4ef6\u662f\u9519\u8bef\u7684\uff1f\r\n#L0#\u6218\u58eb\uff1a\u529b\u91cf35#l\r\n#L1#\u9b54\u6cd5\u5e08\uff1a\u667a\u529b20#l\r\n#L2#\u5f13\u7bad\u624b\uff1a\u654f\u637725#l\r\n#L3#\u98de\u4fa0\uff1a\u654f\u637720#l", "answer": 3}], "startText": "\u5594\u2026\u2026\u60a8\u662f\u90a3\u4f4d\u65b0\u5192\u9669\u5bb6\uff01\u5982\u679c\u60a8\u5df2\u7ecf\u5230\u4e86\u7b49\u7ea72\uff0c\u5c31\u5e94\u8be5\u62e5\u6709\u989d\u5916\u7684#bAP#k\u3002\u60a8\u5206\u914d#bAP#k\u4e86\u5417\uff1f\u5982\u679c\u60a8\u4e0d\u719f\u6089AP\uff0c\u6211\u5c31\u7528\u51e0\u4e2a\u95ee\u9898\u5e2e\u60a8\u4e86\u89e3\u80fd\u529b\u503c\u3001\u8f6c\u804c\u548cAP\u3002", "endText": "\u60a8\u51c6\u5907\u597d\u4e86\u5427\uff1f\u90a3\u6211\u5f00\u59cb\u4e86\u3002\u7b2c\u4e00\u9898\uff01\u6bcf\u5347\u4e00\u7ea7\uff0c\u60a8\u5c31\u53ef\u4ee5\u7528#bAP#k\u63d0\u9ad8#b\u529b\u91cf\u3001\u654f\u6377\u3001\u667a\u529b\u548c\u8fd0\u6c14#k\u3002\u8bf7\u95ee\u80fd\u7528AP\u63d0\u9ad8#b\u4f53\u9b44\u548c\u9b54\u6cd5\u529b#k\u5417\uff1f\r\n#b#L0#\u80fd\u3002#l\r\n#L1#\u4e0d\u80fd\u3002#l"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
