/*
-- odinms JavaScript --
        NPC脚本
-------------------------
   罗宾 - 彩虹岛 任务1036「能力值问答」问答
*/

importPackage(net.sf.odinms.client);

var status = 0;
var branch = -1; // 0=任务介绍 1=问答测试
var q = 0;
var restart = false;

var Status = net.sf.odinms.client.MapleQuestStatus.Status;

var answers = [0, 1, 3];

var stopTexts = [
    "答错。AP可以用来提高体魄和魔法力。请从第一题重新开始。",
    "答错。大多数职业在等级10转职，只有魔法师可以在等级8转职。为了当魔法师而把AP分到智力上的新手，前期升级会比较吃力。请从第一题重新开始。",
    "答错，答错！战士力量35、魔法师智力20、弓箭手敏捷25都是对的。飞侠的敏捷必须达到25才行！请从第一题重新开始。"
];

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
        var qStatus = cm.getQuestStatus(1036);
        if (p.getJob().getId() == 0 && p.getLevel() <= 10 && qStatus == Status.NOT_STARTED) {
            branch = 0;
            cm.sendNext("喔……您是那位新冒险家！如果您已经到了等级2，就应该拥有额外的#bAP#k。您分配#bAP#k了吗？如果您不熟悉AP，我就用几个问题帮您了解能力值、转职和AP。");
        } else if (qStatus == Status.STARTED) {
            branch = 1;
            q = 0;
            askQuestion();
        } else if (p.getJob().getId() == 0 && p.getLevel() <= 10) {
            cm.sendOk("看来您对AP、能力值和转职相当了解。我想您不会再为转职而困扰了。希望您的选择是明智的，并如您所愿地成长。");
            cm.dispose();
        } else {
            cm.sendOk("我只帮助新来的冒险家了解能力值和转职。祝您旅途愉快！");
            cm.dispose();
        }
    } else {
        if (branch == 0) {
            islandHelper.start(cm.getC(),1036,cm.getNpc());
            cm.sendOk("如果还有疑问就再来找我吧，我会一步一步解释给您听。想开始问答测试的话，就点击#b活字典罗宾#k吧。");
            cm.dispose();
        } else if (branch == 1) {
            doQuiz(selection);
        }
    }
}

function askQuestion() {
    if (q == 0) {
        cm.sendSimple("您准备好了吧？那我开始了。第一题！每升一级，您就可以用#bAP#k提高#b力量、敏捷、智力和运气#k。请问能用AP提高#b体魄和魔法力#k吗？\r\n#b#L0#能。#l\r\n#L1#不能。#l");
    } else if (q == 1) {
        cm.sendSimple("答对！除了能力值之外，AP还能用来提高体魄和魔法力。试试第二题吧！到了一定等级，您就能从新手转职。通常新手必须达到等级10才能转职，但有一个职业在等级8就能转职。是哪个职业？\r\n#b#L0#战士#l\r\n#L1#魔法师#l\r\n#b#L2#弓箭手#l\r\n#b#L3#飞侠#l");
    } else if (q == 2) {
        cm.sendSimple("答对！魔法师可以在等级8转职。第三题！即使达到了转职等级，不满足条件也无法转职。另一个条件就是能力值要求。下面哪个职业的能力值要求是错的？\r\n#b#L0#战士 - 力量35#l\r\n#L1#魔法师 - 智力20#l\r\n#b#L2#弓箭手 - 敏捷25#l\r\n#b#L3#飞侠 - 敏捷20#l");
    }
}

function doQuiz(selection) {
    if (restart) {
        restart = false;
        q = 0;
        askQuestion();
        return;
    }
    if (q >= 0 && q < 3) {
        if (selection == answers[q]) {
            q++;
            if (q < 3) {
                askQuestion();
            } else {
                islandHelper.complete(cm.getC(),1036,cm.getNpc());
                cm.sendOk("完全正确！新手必须把敏捷提高到25才能转职为飞侠！啪，啪，啪！三题您全答对了。恭喜！看来您对AP、能力值和转职相当了解。我想您不会再为转职而困扰了。\r\n\r\n您应该在创建角色之前就想好要转职成哪个职业。一旦分配了AP，除非通过特殊手段就无法收回。请明智地分配，让角色如您所愿地成长。");
                cm.dispose();
            }
        } else {
            restart = true;
            cm.sendNext(stopTexts[q]);
        }
    }
}


/* MAPLE-ISLAND-QUESTS 2026-10-13 */
var islandDefinitions=[{"id": 1036, "name": "\u80fd\u529b\u503c\u95ee\u7b54", "startNpc": 2003, "endNpc": 2003, "quiz": [{"text": "AP\u80fd\u7528\u6765\u63d0\u9ad8HP\u548cMP\u5417\uff1f\r\n#L0#\u80fd#l\r\n#L1#\u4e0d\u80fd#l", "answer": 0}, {"text": "\u54ea\u4e2a\u804c\u4e1a\u53ef\u4ee5\u57288\u7ea7\u8f6c\u804c\uff1f\r\n#L0#\u6218\u58eb#l\r\n#L1#\u9b54\u6cd5\u5e08#l\r\n#L2#\u5f13\u7bad\u624b#l\r\n#L3#\u98de\u4fa0#l", "answer": 1}, {"text": "\u4e0b\u9762\u54ea\u9879\u8f6c\u804c\u6761\u4ef6\u662f\u9519\u8bef\u7684\uff1f\r\n#L0#\u6218\u58eb\uff1a\u529b\u91cf35#l\r\n#L1#\u9b54\u6cd5\u5e08\uff1a\u667a\u529b20#l\r\n#L2#\u5f13\u7bad\u624b\uff1a\u654f\u637725#l\r\n#L3#\u98de\u4fa0\uff1a\u654f\u637720#l", "answer": 3}], "startText": "\u5594\u2026\u2026\u60a8\u662f\u90a3\u4f4d\u65b0\u5192\u9669\u5bb6\uff01\u5982\u679c\u60a8\u5df2\u7ecf\u5230\u4e86\u7b49\u7ea72\uff0c\u5c31\u5e94\u8be5\u62e5\u6709\u989d\u5916\u7684#bAP#k\u3002\u60a8\u5206\u914d#bAP#k\u4e86\u5417\uff1f\u5982\u679c\u60a8\u4e0d\u719f\u6089AP\uff0c\u6211\u5c31\u7528\u51e0\u4e2a\u95ee\u9898\u5e2e\u60a8\u4e86\u89e3\u80fd\u529b\u503c\u3001\u8f6c\u804c\u548cAP\u3002", "endText": "\u60a8\u51c6\u5907\u597d\u4e86\u5427\uff1f\u90a3\u6211\u5f00\u59cb\u4e86\u3002\u7b2c\u4e00\u9898\uff01\u6bcf\u5347\u4e00\u7ea7\uff0c\u60a8\u5c31\u53ef\u4ee5\u7528#bAP#k\u63d0\u9ad8#b\u529b\u91cf\u3001\u654f\u6377\u3001\u667a\u529b\u548c\u8fd0\u6c14#k\u3002\u8bf7\u95ee\u80fd\u7528AP\u63d0\u9ad8#b\u4f53\u9b44\u548c\u9b54\u6cd5\u529b#k\u5417\uff1f\r\n#b#L0#\u80fd\u3002#l\r\n#L1#\u4e0d\u80fd\u3002#l"}];
var islandHasLegacy=false;

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
