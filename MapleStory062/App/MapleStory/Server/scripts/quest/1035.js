
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
    } else if (islandSelected.id == 1008) {
        islandManager.sendOk("打破木箱，收集#t4031161#、#t4031162#各 5 个交给我吧。");
    } else if (islandSelected.id == 1018 || islandSelected.id == 1035) {
        islandManager.sendOk("消灭 1 只小石球，捡起 1 个#t" + (islandSelected.id == 1018 ? 4000142 : 4031802) + "#，交给#p2002#。");
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

var islandSelected={"id": 1035, "name": "\u900f\u5fb7\u7684\u6253\u730e\u5165\u95e8", "startNpc": 2004, "endNpc": 2002, "quiz": [], "startText": "\u54c7\uff0c\u60a8\u662f\u65b0\u7684\u5192\u9669\u5bb6\u5427\u3002\u6211\u662f\u900f\u5fb7\u3002\u6211\u8d1f\u8d23\u6559\u5bfc\u65b0\u5192\u9669\u5bb6#b\u5982\u4f55\u730e\u6355\u602a\u7269#k\u3002\u867d\u7136\u8611\u83c7\u6751\u91cc\u6ca1\u6709\u602a\u7269\uff0c\u4f46\u5bf9\u65b0\u5192\u9669\u5bb6\u6765\u8bf4\uff0c\u6751\u5916\u662f\u5f88\u5371\u9669\u7684\u3002\u4e00\u65e6\u8e0f\u51fa\u6751\u5b50\u5c31\u4f1a\u88ab\u602a\u7269\u5305\u56f4\u3002", "endText": "\u770b\u5230\u60a8\u5e26\u7740#t4031802#\uff0c\u5c31\u77e5\u9053\u900f\u5fb7\u6559\u8fc7\u60a8\u6253\u730e\u4e86\u3002\u8fd9\u8bf4\u660e\u60a8\u5df2\u7ecf\u638c\u63e1\u4e86\u57fa\u672c\u653b\u51fb\u3002\u90a3\u4e48\u63a5\u4e0b\u6765\u6211\u6559\u60a8#b\u5982\u4f55\u4f7f\u7528\u6280\u80fd#k\u3002"};
var islandManager=null;
function start(mode,type,selection) {islandManager=qm;islandEnding=false;islandDialogue(mode,type,selection);}
function end(mode,type,selection) {islandManager=qm;islandEnding=true;islandDialogue(mode,type,selection);}
