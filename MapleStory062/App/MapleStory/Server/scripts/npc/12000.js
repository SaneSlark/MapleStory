/*
-- odinms JavaScript --
        NPC脚本
-------------------------
   路卡斯 - 彩虹村长老 任务1038「玛丽亚的信」完成
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
        var q1038 = cm.getQuestStatus(1038);
        if (q1038 == Status.STARTED) {
            if (cm.haveItem(4031800, 1)) {
                islandHelper.complete(cm.getC(),1038,cm.getNpc());
                if (cm.getQuestStatus(1038) == Status.COMPLETED) {
                    cm.sendNext("哦... 您看起来像是个新手. 您来找我有什么事? 是吗? 这是玛丽亚寄来的信吧...?");
                } else {
                    cm.sendOk("这封信... 好像不太对. 请您确认一下是否带来了#b玛丽亚的信#k.");
                    cm.dispose();
                }
            } else {
                cm.sendOk("嗯? 您手里好像没有#b玛丽亚的信#k. 如果弄丢了, 请回去找玛丽亚, 她会再写一封.");
                cm.dispose();
            }
        } else if (q1038 == Status.COMPLETED) {
            cm.sendOk("顺利的把信交给我了吧. 谢谢了... 玛丽亚做帽子的手艺可是一流的哦...");
            cm.dispose();
        } else {
            cm.sendOk("哦... 您是新手吧. 增加力量主要提高攻击力, 是战士的关键属性; 增加敏捷可以提高命中率和手技, 是弓箭手的关键属性; 增加智力是魔法师的关键属性; 增加运气则对所有职业都有益, 特别是飞侠. 战斗中需要的药水和武器在村子里都可以买到.");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.sendOk("哇, 听说您帮助了玛丽亚. 谢谢您, 您真善良. 玛丽亚除了蜗牛之外, 什么都不怕. 现在她能无忧无虑地采蘑菇了.\r\n\r\n我想给您一些回报. 既然您是新手, 想必需要多多锻炼来加强自己. 您有空时再来找我吧, 我会介绍一位能训练您的人.");
        cm.dispose();
    }
}


/* MAPLE-ISLAND-QUESTS 2026-10-13 */
var islandDefinitions=[{"id": 1005, "name": "\u4f20\u9012\u4fe1\u4ef6", "startNpc": 2103, "endNpc": 12000, "quiz": [], "startText": "\u554a\u5440\u3002\u3002\u3002\u600e\u4e48\u529e\u5440\u3002\u3002\u3002\u6211\u8981\u628a\u8fd9\u5c01\u4fe1\u5c3d\u5feb\u4ea4\u7ed9#p12000#\u5148\u751f\u3002\u3002\u3002 \u56e0\u4e3a\u8fd9\u662f\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u4e8b\u60c5\uff0c\u6240\u4ee5\u6211\u5f88\u7740\u6025\u3002\u4f46\u662f\u6211\u8fd8\u6709\u5176\u4ed6\u91cd\u8981\u7684\u4e8b\u60c5\u4e0d\u80fd\u79bb\u5f00\u8fd9\u91cc\u3002\u3002\u3002", "endText": "\u4f20\u9012\u4fe1\u4ef6\uff1a\u8bf7\u5148\u5b8c\u6210\u4efb\u52a1\u8981\u6c42\uff0c\u518d\u6765\u4ea4\u4ed8\u3002"}, {"id": 1006, "name": "\u957f\u8001\u7684\u56de\u4fe1", "startNpc": 12000, "endNpc": 2103, "quiz": [], "startText": "\u8fd9\u786e\u5b9e\u662f#p2103#\u7684\u4fe1\u4ef6\uff01\u54e6\u54e6\u3002\u3002\u3002\u8c22\u8c22\u4f60\u5440\u3002\u6211\u6b63\u5728\u4e3a\u6ca1\u6536\u5230\u8fd9\u5c01\u4fe1\u62c5\u5fc3\u5462\uff01\u6765\uff01\u8fd9\u662f\u6211\u7684#b\u56de\u4fe1#k\uff0c\u628a\u8fd9\u5c01#b\u56de\u4fe1#k\u4ea4\u7ed9#p2103#\u5427\u3002", "endText": "\u4f60\u5e26\u6765\u4e86\u6751\u957f\u7684\u56de\u4fe1\uff01\u771f\u611f\u8c22\u4f60\u5440\uff01\uff01\uff01 \u6211\u770b\u4e00\u4e0b\u3002\u3002\u3002\u7b54\u590d\u7684\u5185\u5bb9\u662f\u3002\u3002\u3002 \u554a\uff01\u539f\u6765\u5982\u6b64\uff01\u4e3a\u4e86\u8868\u793a\u611f\u8c22\uff0c\u6211\u60f3\u9001\u4f60\u4e00\u4e2a\u793c\u7269\u3002"}, {"id": 1022, "name": "\u8def\u5361\u65af\u53ef\u7231\u7684\u5973\u513f", "startNpc": 12000, "endNpc": 20100, "quiz": [], "startText": "\u6069\u2026\u2026\u4f60\u770b\u8d77\u6765\u8fd8\u50cf\u4e2a\u83dc\u9e1f\u5192\u9669\u5bb6\uff0c\u4f46\u901b\u5f97\u5f88\u60a0\u95f2\u554a\u3002\u6211\u7684\u5973\u513f\u8fd8\u5c0f\u800c\u4e14\u80c6\u5b50\u5c0f\uff0c\u4e0d\u80fd\u50cf\u4f60\u90a3\u6837\u2026\u2026 \\r\r\n#b#L0# \u6709\u5973\u513f\u5417\uff1f#l", "endText": "\u6709\u4ec0\u4e48\u4e8b\u8981\u62dc\u6258\u6211\u5417\uff1f\u4ec0\u4e48\uff1f\u51fb\u9000 #o0130101#\uff1f\u5929\u54ea~ \u5c31\u56e0\u4e3a\u6015#o0130101#\u6240\u4ee5\u56de\u4e0d\u4e86\u5bb6\uff0c\u4e0d\u592a\u53ef\u80fd\u5427\u3002\u4e0d\u7ba1\u600e\u4e48\u6837\uff0c\u60a8\u8f9b\u82e6\u4e86\u3002\u4e0d\u597d\u610f\u601d\u7ed9\u60a8\u6dfb\u9ebb\u70e6\u4e86\u3002 \t\t"}, {"id": 1027, "name": "\u9ea6\u52a0\u7684\u8bf7\u6c42", "startNpc": 12100, "endNpc": 12000, "quiz": [], "startText": "\u5f69\u8679\u5c9b\u662f\u83dc\u9e1f\u5192\u9669\u8005\u7684\u4e50\u56ed\u3002\u602a\u517d\u4e5f\u6ca1\u90a3\u4e48\u5f3a\u3002\u4f46\u522b\u60f3\u8499\u6df7\u8fc7\u5173\u3002\u8981\u6253\u597d\u57fa\u7840\uff0c\u624d\u80fd\u4e0d\u65ad\u63d0\u9ad8\u5b9e\u529b\u3002\u8d8a\u662f\u521d\u7ea7\u8d8a\u8981\u8ba4\u771f\u3002\\r\r\n#b#L0# \u4f60\u770b\u8d77\u6765\u5f88\u5f3a\u5927\u554a\u3002\u4e3a\u4ec0\u4e48\u5446\u5728\u5f69\u8679\u5c9b\u4e0a\u5462\uff1f#l", "endText": "\u6069\u2026\u2026 \u4f60\u662f\u8c01\uff1f\u662f#p12100#\u6d3e\u6765\u7684\uff1f#p12100#\u4e3a\u4ec0\u4e48\u6d3e\u4f60\u6765\uff1f\\r\r\n#b#L0# #p12100#\u60f3\u52a0\u5de5\u8d44\uff1f#l\\r\r\n#L1# \u56e0\u4e3a\u901b\u5f69\u8679\u5c9b\u7684\u83dc\u9e1f\u5192\u9669\u5bb6\u589e\u591a\uff0c#p12100#\u4e00\u4e2a\u4eba\u505a\u6709\u4e9b\u56f0\u96be\u3002#l\\r\r\n#L2# #p12100#\u8bf4\u60f3\u548c#p12000#\u5bf9\u7ec3\uff0c\u8ba9\u6211\u4f20\u8bdd\u3002#l"}, {"id": 1038, "name": "\u739b\u4e3d\u4e9a\u7684\u4fe1", "startNpc": 2103, "endNpc": 12000, "quiz": [], "startText": "\u54e6\uff0c\u55e8\uff0c\u60a8\u662f\u65b0\u624b\u5427\u3002\u60a8\u770b\u8d77\u6765\u6253\u730e\u6253\u5f97\u5f88\u8f9b\u82e6\u5462\u3002\u4ec0\u4e48\uff1f\u662f\u5c71\u59c6\u53eb\u60a8\u6765\u6d88\u706d\u8717\u725b\u7684\uff1f", "endText": "\u54e6\u2026\u2026\u60a8\u770b\u8d77\u6765\u50cf\u662f\u4e2a\u65b0\u624b\u3002\u60a8\u6765\u627e\u6211\u6709\u4ec0\u4e48\u4e8b\uff1f\u2026\u2026\u662f\u5417\uff1f\u4e0d\u77e5\u9053\u739b\u4e3d\u4e9a\u5bc4\u6765\u7684\u4fe1\u91cc\u5199\u4e86\u4ec0\u4e48\u2026\u2026"}, {"id": 1040, "name": "\u914b\u957f\u7684\u4ecb\u7ecd", "startNpc": 12000, "endNpc": 12000, "quiz": [], "startText": "\u54e6\uff0c\u4f60\u6765\u4e86\u3002\u6211\u5c31\u77e5\u9053\u4f60\u5f88\u5feb\u5c31\u4f1a\u56de\u6765\u7684\u3002\u6211\u518d\u95ee\u4f60\u4e00\u6b21\uff0c\u4f60\u51c6\u5907\u597d\u63a5\u53d7\u8bad\u7ec3\u4e86\u5417\uff1f", "endText": "\u54e6\u54e6\uff0c\u4f60\u5b8c\u6210\u4e86\u9ea6\u7684\u5168\u90e8\u8bad\u7ec3\u554a\u3002\u4f60\u770b\u8d77\u6765\u6bd4\u6211\u7b2c\u4e00\u6b21\u89c1\u5230\u4f60\u65f6\u5f3a\u58ee\u591a\u4e86\u3002\u518d\u7a0d\u52a0\u8bad\u7ec3\uff0c\u4f60\u5c31\u53ef\u4ee5\u524d\u5f80\u91d1\u94f6\u5c9b\u4e86\u3002\u60f3\u77e5\u9053\u600e\u4e48\u53bb\u5417\uff1f"}];
var islandHasLegacy=true;

var islandHelper = Packages.net.sf.odinms.scripting.npc.MapleIslandQuests;
var islandStage = -1, islandSelected = null, islandChoices = [], islandEnding = false, islandQuiz = -1, islandLegacy = false;
function islandStatus(id) { return islandManager.getQuestStatus(id).getId(); }
function islandFinish() {
    if (!islandHelper.complete(islandManager.getC(), islandSelected.id, islandManager.getNpc())) {
        islandManager.sendOk("任务尚未完成，或奖励所需的背包空间不足。请确认任务物品、消灭数量以及背包空位。罗杰的任务还需要吃完苹果并恢复全部生命值。");
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
        islandManager.sendOk("请打开背包，吃掉罗杰的苹果，并等生命值完全恢复后再来找我。");
    } else islandManager.sendOk("任务已接受。请按任务栏的要求完成后，再找指定的居民交付。");
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
