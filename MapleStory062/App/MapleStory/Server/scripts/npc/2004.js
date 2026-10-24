

/* MAPLE-ISLAND-QUESTS 2026-10-13 */
var islandDefinitions=[{"id": 1018, "name": "\u900f\u5fb7\u7684\u6253\u730e\u65b9\u6cd5", "startNpc": 2004, "endNpc": 2002, "quiz": [], "startText": "\u5594~\u4f60\u662f\u65b0\u7684\u5192\u9669\u5bb6\u5417\uff1f\u5982\u4f55\uff1f\u4f60\u662f\u4e0d\u662f\u60f3\u77e5\u9053\u8fd9\u4e16\u754c\u7684\u6253\u602a\u65b9\u5f0f\u554a\uff1f\u90a3\u91cc\u6709\u4e9b\u5c0f\u77f3\u7403\uff0c\u539f\u672c\u662f\u4e0d\u4f1a\u51fa\u73b0\u5728\u8fd9\u4e2a\u533a\u57df\u7684\u9ad8\u5f3a\u602a\u7269\uff0c\u4f46\u4e3a\u4e86\u65b9\u4fbf\u65b0\u624b\u5192\u9669\u5bb6\u4eec\u8fdb\u884c\u8bad\u7ec3\uff0c\u56e0\u6b64\u7531\u5927\u9b54\u6cd5\u5e08\u6c49\u65af\u5c01\u5370\u4e86\u8fd9\u5bb6\u4f19\u7684\u80fd\u529b\u3002\u82e5\u4f60\u8fd8\u4e0d\u719f\u6089\u6253\u602a\u7684\u65b9\u6cd5\uff0c\u4f60\u8981\u4e0d\u8981\u8bd5\u7740\u53bb\u51fb\u8d25\u90a3\u5bb6\u4f19\uff1f", "endText": "\u4f60\u5c31\u662f#p2004#\u8bf4\u7684\u6b63\u5728\u5b66\u4e60\u6253\u602a\u65b9\u6cd5\u7684\u5192\u9669\u5bb6\u554a\uff1f\u542c\u8bf4\u4f60\u6709\u76f8\u5f53\u6f5c\u529b\u53ef\u4ee5\u6210\u4e3a\u975e\u5e38\u4f1f\u5927\u7684\u5192\u9669\u5bb6\u8036\uff01\u8ba9\u6211\u6765\u770b\u770b\u6253\u602a\u8bad\u7ec3\u7684\u6210\u6548\u5427\uff01"}, {"id": 1035, "name": "\u900f\u5fb7\u7684\u6253\u730e\u5165\u95e8", "startNpc": 2004, "endNpc": 2002, "quiz": [], "startText": "\u54c7\uff0c\u60a8\u662f\u65b0\u7684\u5192\u9669\u5bb6\u5427\u3002\u6211\u662f\u900f\u5fb7\u3002\u6211\u8d1f\u8d23\u6559\u5bfc\u65b0\u5192\u9669\u5bb6#b\u5982\u4f55\u730e\u6355\u602a\u7269#k\u3002\u867d\u7136\u8611\u83c7\u6751\u91cc\u6ca1\u6709\u602a\u7269\uff0c\u4f46\u5bf9\u65b0\u5192\u9669\u5bb6\u6765\u8bf4\uff0c\u6751\u5916\u662f\u5f88\u5371\u9669\u7684\u3002\u4e00\u65e6\u8e0f\u51fa\u6751\u5b50\u5c31\u4f1a\u88ab\u602a\u7269\u5305\u56f4\u3002", "endText": "\u770b\u5230\u60a8\u5e26\u7740#t4031802#\uff0c\u5c31\u77e5\u9053\u900f\u5fb7\u6559\u8fc7\u60a8\u6253\u730e\u4e86\u3002\u8fd9\u8bf4\u660e\u60a8\u5df2\u7ecf\u638c\u63e1\u4e86\u57fa\u672c\u653b\u51fb\u3002\u90a3\u4e48\u63a5\u4e0b\u6765\u6211\u6559\u60a8#b\u5982\u4f55\u4f7f\u7528\u6280\u80fd#k\u3002"}];
var islandHasLegacy=false;

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

var islandManager=null;
function islandExtraQuest(id) { return (","+"1000,1001,1003,1004,1005,1006,1007,1016,1017,1018,1019,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1035"+",").indexOf(","+id+",") >= 0; }
function start() {
    islandManager=cm;
    var opts="请选择要办理的任务：",npc=cm.getNpc();islandChoices=[];
    for(var i=0;i<islandDefinitions.length;i++) {
        var d=islandDefinitions[i],state=islandStatus(d.id);
        if(d.startNpc==npc && state==0 && !islandExtraQuest(d.id) && islandHelper.canStart(cm.getC(),d.id,npc)) {
            opts+="\r\n#L"+islandChoices.length+"#[接受] "+d.name+"#l";islandChoices.push({quest:d,end:false});
        } else if(d.endNpc==npc && state==1) {
            opts+="\r\n#L"+islandChoices.length+"#[交付/查看] "+d.name+"#l";islandChoices.push({quest:d,end:true});
        }
    }
    if(islandChoices.length==0 && islandHasLegacy) {islandLegacy=true;islandOriginalStart();return;}
    if(islandHasLegacy) opts+="\r\n#L99999#其他服务或对话#l";
    if(islandChoices.length==0 && (islandStatus(1018)==1 || islandStatus(1035)==1)) { cm.sendOk("\u4f60\u5df2\u7ecf\u63a5\u53d7\u4e86\u6253\u730e\u8bad\u7ec3\u3002\u8bf7\u6d88\u706d\u5c0f\u77f3\u7403\u5e76\u6309 Z \u62fe\u53d6\u4efb\u52a1\u680f\u8981\u6c42\u7684\u9053\u5177\uff0c\u518d\u53bb\u627e #p2002# \u9a8c\u6536\uff1a1018 \u9700\u8981 #t4000142#\uff0c1035 \u9700\u8981 #t4031802#\uff0c\u5404 1 \u4e2a\u3002\u9053\u5177\u5728\u4ea4\u4ed8\u6210\u529f\u65f6\u6536\u53d6\u3002");cm.dispose();return; }
    if(islandChoices.length==0 && !islandHasLegacy) {cm.sendOk("目前没有可以办理的任务。请确认任务前置条件，或继续在彩虹岛探索。");cm.dispose();return;}
    cm.sendSimple(opts);
}
function action(mode,type,selection) {
    if(islandLegacy) {islandOriginalAction(mode,type,selection);return;}
    if(mode!=1){cm.dispose();return;}
    if(islandSelected==null) {
        if(selection==99999 && islandHasLegacy) {islandLegacy=true;islandOriginalStart();return;}
        if(selection<0 || selection>=islandChoices.length){cm.dispose();return;}
        islandSelected=islandChoices[selection].quest;islandEnding=islandChoices[selection].end;
    }
    islandDialogue(mode,type,selection);
}
