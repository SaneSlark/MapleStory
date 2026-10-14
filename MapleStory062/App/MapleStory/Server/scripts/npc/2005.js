/*
-- odinms JavaScript --
        NPC脚本
-------------------------
   山姆 - 蜗牛打猎场Ⅰ 任务1037「山姆的请求」开始
*/

var status = 0;

var Status = net.sf.odinms.client.MapleQuestStatus.Status;

function islandOriginalStart() {
    status = -1;
    action(1, 0, 0);
}

function islandOriginalAction(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    status++;

    if (status == 0) {
        var p = cm.getPlayer();
        var qStatus = cm.getQuestStatus(1037);
        if (p.getJob().getId() == 0 && p.getLevel() <= 10) {
            if (qStatus == Status.NOT_STARTED) {
                cm.sendNext("不知道玛丽亚是否还好…? 哦, 您是冒险家吧! 嗨, 您好! 请问您会经过蜗牛打猎场并向东方前进吗? 是的话, 能否帮个忙?");
            } else if (qStatus == Status.STARTED) {
                cm.sendOk("请在路上消灭#r10 只蜗牛#k, 然后到东边的岔道通知#b玛丽亚#k. 她应该在岔道附近等消息.");
                cm.dispose();
            } else {
                cm.sendOk("多亏了您, 玛丽亚终于能放心采蘑菇了. 真是太感谢了!");
                cm.dispose();
            }
        } else {
            cm.sendOk("您好, 旅行者. 祝您一路顺风.");
            cm.dispose();
        }
    } else if (status == 1) {
        islandHelper.start(cm.getC(),1037,cm.getNpc());
        cm.sendOk("来自彩虹村的玛丽亚说要来这附近采蘑菇, 可是一直没到. 我想她是因为害怕#r蜗牛#k而动弹不得.\r\n\r\n如果您能在路途中消灭#r10 只蜗牛#k, 并通知玛丽亚蜗牛已经被消灭, 我会非常感谢您.");
        cm.dispose();
    }
}


/* MAPLE-ISLAND-QUESTS 2026-10-13 */
var islandDefinitions=[{"id": 1019, "name": "\u53c1\u7684\u5efa\u8bae", "startNpc": 2005, "endNpc": 12100, "quiz": [], "startText": "\u4f60\u597d\u3002\u6211\u53eb\u53c1\u3002\u6211\u770b\u4f60\u8981\u89c1#p12100#\u3002\u8fd8\u6ca1\u89c1\u8fc7\uff1f", "endText": "#p2005#\u8bf4\u7684\u5c31\u662f\u4f60\u554a\uff1f\u627e\u6211\u6709\u4ec0\u4e48\u4e8b\uff1f"}, {"id": 1024, "name": "\u89e3\u51b3\u7231\u60c5\u7684\u70e6\u607c\uff1f\uff01", "startNpc": 2005, "endNpc": 20001, "quiz": [], "startText": "\u547c\u547c\uff5e\u6211\u6709\u5e2e\u522b\u4eba\u89e3\u51b3\u7231\u60c5\u7684\u70e6\u607c\u7684\u9ad8\u5c1a\u7231\u597d\u3002\u6700\u8fd1\u5728\u7ed9\u4e00\u4f4d\u4e3a\u4e86\u7231\u4eba\u800c\u594b\u6597\u7684\u5e74\u8f7b\u4eba\u63d0\u4f9b\u5e2e\u52a9\u3002\u7231\u60c5\u7684\u70e6\u607c\u89e3\u51b3\u8005\uff01\u662f\u4e0d\u662f\u5f88\u5e05\uff1f\u600e\u4e48\u6837\uff1f\u4f60\u4e5f\u60f3\u52a0\u5165\u5417\uff1f", "endText": "\u6069\u2026\u2026\uff1f\u4ec0\u4e48\u4e8b\u554a\uff1f\u9700\u8981\u5e2e\u5fd9\u5417\uff1f\u6069\uff1f\u53d7#p2005#\u7684\u59d4\u6258\u8fc7\u6765\u7684\uff1f\u597d\u50cf\u6ca1\u6709\u53eb#p2005#\u5e2e\u5fd9\u554a\u2026\u2026 \u4e0d\u7ba1\u600e\u4e48\u6837\u611f\u8c22\u60a8\u4e3a\u6211\u8d39\u5fc3\u4e86\u3002"}, {"id": 1029, "name": "\u5c71\u59c6\u7684\u5fe0\u544a", "startNpc": 2005, "endNpc": 2005, "quiz": [], "startText": "\u54df\u547c~ \u5582\uff1f\u8ba9\u6211\u770b\u770b\u2026\u2026\u4f60\u521a\u5347\u4e862\u7ea7\u3002\u8fd9\u6837\u4f60\u5c31\u6709#bAP#k\u4e86\u3002\u4f60\u51b3\u5b9a\u597d\u8981\u628aAP\u52a0\u5728\u54ea\u91cc\u4e86\u5417\uff1f\u4f60\u8fd8\u4e0d\u77e5\u9053AP\u662f\u4ec0\u4e48\uff1f\u54ce\u5440\u5440\u2026\u2026\u90a3\u6211\u5c31\u597d\u5fc3\u7ed9\u4f60\u8bb2\u8bb2\u5427\u3002 ", "endText": "\u54df\u547c~~ \u4f60\u53c8\u6765\u4e86\u3002\u771f\u662f\u4e00\u4f4d\u4e0d\u653e\u8fc7\u4efb\u4f55\u60c5\u62a5\u7684\u5192\u9669\u5bb6\u554a\uff01\u6211\u4eec\u6765\u804a\u804a\u8f6c\u804c\u7684\u4e8b\u5427\uff1f"}, {"id": 1037, "name": "\u53c2\u4e0e\u8717\u725b\u6253\u730e\u884c\u5217", "startNpc": 2005, "endNpc": 2103, "quiz": [], "startText": "\u4e0d\u77e5\u9053\u739b\u4e3d\u4e9a\u662f\u5426\u8fd8\u597d\u2026\u2026\uff1f\u54e6\uff0c\u60a8\u662f\u5192\u9669\u5bb6\u5427\uff01\u55e8\uff0c\u60a8\u597d\uff01\u8bf7\u95ee\u60a8\u4f1a\u7ecf\u8fc7\u8717\u725b\u6253\u730e\u573a\uff0c\u4e00\u8def\u5411\u4e1c\u8d70\u5417\uff1f\u662f\u7684\u8bdd\uff0c\u80fd\u5426\u5e2e\u4e2a\u5fd9\uff1f", "endText": "\u53c2\u4e0e\u8717\u725b\u6253\u730e\u884c\u5217\uff1a\u8bf7\u5148\u5b8c\u6210\u4efb\u52a1\u8981\u6c42\uff0c\u518d\u6765\u4ea4\u4ed8\u3002"}];
var islandHasLegacy=true;

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
