/*
-- odinms JavaScript --
        NPC脚本
-------------------------
   玛丽亚 - 岔道 任务1037完成 + 任务1038「玛丽亚的信」开始
*/

var status = 0;
var branch = -1; // 0=完成1037后接1038 1=信已丢重写

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
        var q1037 = cm.getQuestStatus(1037);
        var q1038 = cm.getQuestStatus(1038);
        if (q1037 == Status.STARTED) {
            islandHelper.complete(cm.getC(),1037,cm.getNpc());
            if (cm.getQuestStatus(1037) == Status.COMPLETED) {
                branch = 0;
                cm.sendNext("哦, 嗨. 您是个新手吧. 看您打猎打得很辛苦呢. 什么? 是山姆叫您来消灭蜗牛的?");
            } else {
                cm.sendOk("您是新手吧. 很高兴能遇见您. 哦... 是山姆叫您来的吗? 请先去消灭#r10 只蜗牛#k, 再来找我吧.");
                cm.dispose();
            }
        } else if (q1038 == Status.STARTED) {
            if (cm.haveItem(4031800, 1)) {
                cm.sendOk("请把#b信#k交给彩虹村的长老#b路卡斯#k. 沿着岔道向东北方向前进就能到达彩虹村. 如果信弄丢了, 再来找我, 我会再写一封.");
                cm.dispose();
            } else {
                branch = 1;
                cm.sendNext("哦... 您弄丢了那封信吗? 别担心, 我这就在写一封.");
            }
        } else if (q1037 == Status.COMPLETED && q1038 == Status.NOT_STARTED) {
            branch = 0;
            cm.sendNext("哦, 嗨. 您是个新手吧. 附近都没有蜗牛了, 就算采蘑菇采晚了也没关系. 哦... 亲切的冒险家, 真抱歉, 能再帮我一个忙吗?");
        } else {
            cm.sendOk("您好, 旅行者. 这附近的蜗牛总让我害怕得不敢动...");
            cm.dispose();
        }
    } else if (status == 1) {
        if (branch == 1) {
            cm.gainItem(4031800, 1);
            cm.sendOk("信写好了, 请拿好. 拜托您交给彩虹村的长老#b路卡斯#k.");
            cm.dispose();
        } else {
            cm.sendNext("哦, 谢谢. 蘑菇村里有好多好吃的蘑菇, 可我总是因为蜗牛而犹豫不敢来. 太谢谢您了, 我现在就放心去找山姆.\r\n\r\n如果返回晚了, 村子的长老#b路卡斯#k会非常担心的. 请把这封信交给彩虹村的#b路卡斯#k.");
        }
    } else if (status == 2) {
        islandHelper.start(cm.getC(),1038,cm.getNpc());
        cm.sendOk("沿着岔道向东北方前进就能到彩虹村. 按下#bW 键#k可以显示#b世界地图#k查看地点. 地方不远, 应该不会花您太多时间. 如果弄丢了信, 就来找我, 我会再写一封.");
        cm.dispose();
    }
}


/* MAPLE-ISLAND-QUESTS 2026-10-13 */
var islandDefinitions=[{"id": 1005, "name": "\u4f20\u9012\u4fe1\u4ef6", "startNpc": 2103, "endNpc": 12000, "quiz": [], "startText": "\u554a\u5440\u3002\u3002\u3002\u600e\u4e48\u529e\u5440\u3002\u3002\u3002\u6211\u8981\u628a\u8fd9\u5c01\u4fe1\u5c3d\u5feb\u4ea4\u7ed9#p12000#\u5148\u751f\u3002\u3002\u3002 \u56e0\u4e3a\u8fd9\u662f\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u4e8b\u60c5\uff0c\u6240\u4ee5\u6211\u5f88\u7740\u6025\u3002\u4f46\u662f\u6211\u8fd8\u6709\u5176\u4ed6\u91cd\u8981\u7684\u4e8b\u60c5\u4e0d\u80fd\u79bb\u5f00\u8fd9\u91cc\u3002\u3002\u3002", "endText": "\u4f20\u9012\u4fe1\u4ef6\uff1a\u8bf7\u5148\u5b8c\u6210\u4efb\u52a1\u8981\u6c42\uff0c\u518d\u6765\u4ea4\u4ed8\u3002"}, {"id": 1006, "name": "\u957f\u8001\u7684\u56de\u4fe1", "startNpc": 12000, "endNpc": 2103, "quiz": [], "startText": "\u8fd9\u786e\u5b9e\u662f#p2103#\u7684\u4fe1\u4ef6\uff01\u54e6\u54e6\u3002\u3002\u3002\u8c22\u8c22\u4f60\u5440\u3002\u6211\u6b63\u5728\u4e3a\u6ca1\u6536\u5230\u8fd9\u5c01\u4fe1\u62c5\u5fc3\u5462\uff01\u6765\uff01\u8fd9\u662f\u6211\u7684#b\u56de\u4fe1#k\uff0c\u628a\u8fd9\u5c01#b\u56de\u4fe1#k\u4ea4\u7ed9#p2103#\u5427\u3002", "endText": "\u4f60\u5e26\u6765\u4e86\u6751\u957f\u7684\u56de\u4fe1\uff01\u771f\u611f\u8c22\u4f60\u5440\uff01\uff01\uff01 \u6211\u770b\u4e00\u4e0b\u3002\u3002\u3002\u7b54\u590d\u7684\u5185\u5bb9\u662f\u3002\u3002\u3002 \u554a\uff01\u539f\u6765\u5982\u6b64\uff01\u4e3a\u4e86\u8868\u793a\u611f\u8c22\uff0c\u6211\u60f3\u9001\u4f60\u4e00\u4e2a\u793c\u7269\u3002"}, {"id": 1025, "name": "\u739b\u4e3d\u4e9a\u7684\u8425\u517b\u996e\u6599", "startNpc": 2103, "endNpc": 2103, "quiz": [], "startText": "\u4f60\u597d\uff1f\u662f\u5192\u9669\u5bb6\u5148\u751f\u5417\uff1f\u5f69\u8679\u5c9b\u4e4b\u65c5\u600e\u4e48\u6837\uff1f\u5f69\u8679\u5c9b\u5f88\u5c0f\u800c\u4e14\u5f88\u548c\u5e73\uff0c\u5e94\u8be5\u6ca1\u6709\u4ec0\u4e48\u5a01\u80c1\u3002\u6069\u2026\u2026 \u5982\u679c\u4f60\u6709\u7a7a\u95f2\u7684\u8bdd\uff0c\u53ef\u4ee5\u5e2e\u6211\u4e2a\u5fd9\u5417\uff1f", "endText": "\u554a\uff01\u4f60\u627e\u6765\u4e86\u8425\u517b\u996e\u6599\u7684\u6240\u6709\u6750\u6599\u554a\uff01\u4e86\u4e0d\u8d77\uff01\u53ea\u8981\u6709\u8fd9\u4e9b\uff0c\u996e\u6599\u9a6c\u4e0a\u5c31\u80fd\u505a\u597d\uff01"}, {"id": 1026, "name": "\u7ed9\u6851\u514b\u65af\u9001\u8425\u517b\u996e\u6599", "startNpc": 2103, "endNpc": 22000, "quiz": [], "startText": "\u662f\u4e0a\u6b21\u90a3\u4f4d\u627e\u5230\u8425\u517b\u996e\u6599\u6750\u6599\u7684\u5192\u9669\u5bb6\u554a\u3002\u5f88\u9ad8\u5174\u89c1\u5230\u4f60\u3002\u5e2e\u6211\u627e\u6750\u6599\u8d39\u4e86\u5f88\u591a\u5fc3\uff0c\u518d\u6c42\u60a8\u5e2e\u5fd9\u53ef\u80fd\u6709\u4e9b\u8fc7\u5206\uff0c\u4f46\u80fd\u9047\u5230\u8c61\u60a8\u8fd9\u4e48\u5584\u826f\u7684\u5192\u9669\u5bb6\u4e5f\u4e0d\u5bb9\u6613\uff0c\u5e0c\u671b\u60a8\u518d\u5e2e\u5fd9\u4e00\u4ef6\u4e8b\u3002\u53ef\u4ee5\u5417\uff1f\t", "endText": "\u6069\uff1f\u4ec0\u4e48\u4e8b\uff1f\u554a\u2026\u2026 \u8fd9\u4e0d\u662f#p2103#\u7279\u6548\u8425\u517b\u996e\u6599\u5417\uff1f\u662f\u53d7#p2103#\u7684\u59d4\u6258\u6765\u7684\u5427\uff1f\u771f\u662f\u611f\u8c22\uff01\u6709\u4e00\u4e2a\u5584\u826f\u7684\u604b\u4eba\u771f\u662f\u5e78\u798f\u54e6\u3002"}, {"id": 1030, "name": "\u739b\u4e3d\u4e9a\u7684\u5730\u56fe\u8bfe", "startNpc": 2103, "endNpc": 2103, "quiz": [], "startText": "\u54e6\uff0c\u4f60\u770b\u8d77\u6765\u8ff7\u8def\u4e86\u3002\u55ef\u2026\u2026\u4e0d\u719f\u6089\u5192\u9669\u5c9b\u4e16\u754c\u7684\u65b0\u624b\u7ecf\u5e38\u4f1a\u8ff7\u8def\u3002\u5927\u6982\u4f60\u8fd8\u4e0d\u4f1a\u770b\u4e16\u754c\u5730\u56fe\u5427\u3002\u60f3\u77e5\u9053\u600e\u4e48\u770b\u5417\uff1f", "endText": "\u739b\u4e3d\u4e9a\u7684\u5730\u56fe\u8bfe\uff1a\u8bf7\u5148\u5b8c\u6210\u4efb\u52a1\u8981\u6c42\uff0c\u518d\u6765\u4ea4\u4ed8\u3002"}, {"id": 1037, "name": "\u53c2\u4e0e\u8717\u725b\u6253\u730e\u884c\u5217", "startNpc": 2005, "endNpc": 2103, "quiz": [], "startText": "\u4e0d\u77e5\u9053\u739b\u4e3d\u4e9a\u662f\u5426\u8fd8\u597d\u2026\u2026\uff1f\u54e6\uff0c\u60a8\u662f\u5192\u9669\u5bb6\u5427\uff01\u55e8\uff0c\u60a8\u597d\uff01\u8bf7\u95ee\u60a8\u4f1a\u7ecf\u8fc7\u8717\u725b\u6253\u730e\u573a\uff0c\u4e00\u8def\u5411\u4e1c\u8d70\u5417\uff1f\u662f\u7684\u8bdd\uff0c\u80fd\u5426\u5e2e\u4e2a\u5fd9\uff1f", "endText": "\u53c2\u4e0e\u8717\u725b\u6253\u730e\u884c\u5217\uff1a\u8bf7\u5148\u5b8c\u6210\u4efb\u52a1\u8981\u6c42\uff0c\u518d\u6765\u4ea4\u4ed8\u3002"}, {"id": 1038, "name": "\u739b\u4e3d\u4e9a\u7684\u4fe1", "startNpc": 2103, "endNpc": 12000, "quiz": [], "startText": "\u54e6\uff0c\u55e8\uff0c\u60a8\u662f\u65b0\u624b\u5427\u3002\u60a8\u770b\u8d77\u6765\u6253\u730e\u6253\u5f97\u5f88\u8f9b\u82e6\u5462\u3002\u4ec0\u4e48\uff1f\u662f\u5c71\u59c6\u53eb\u60a8\u6765\u6d88\u706d\u8717\u725b\u7684\uff1f", "endText": "\u54e6\u2026\u2026\u60a8\u770b\u8d77\u6765\u50cf\u662f\u4e2a\u65b0\u624b\u3002\u60a8\u6765\u627e\u6211\u6709\u4ec0\u4e48\u4e8b\uff1f\u2026\u2026\u662f\u5417\uff1f\u4e0d\u77e5\u9053\u739b\u4e3d\u4e9a\u5bc4\u6765\u7684\u4fe1\u91cc\u5199\u4e86\u4ec0\u4e48\u2026\u2026"}];
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
