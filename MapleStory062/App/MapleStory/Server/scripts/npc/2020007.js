/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2020007
   覆盖任务: 3019, 3020, 3021, 3036, 3037, 3051, 3052, 3105, 3106, 3107, 3109, 8041, 8057, 8058, 10095
   ============================================================ */
importPackage(net.sf.odinms.client);

var status = -1;

function start() {
    status = -1;
    qfresh = true;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (qQuestAction(mode, type, selection)) return;
    cm.sendOk("……");
    cm.dispose();
}

var qstatus = -1;
var qact = -1;
var qid = -1;
var qactive = false;
var qfresh = false;
function qQuestAction(mode, type, selection) {
    if (!qactive) {
        if (!qfresh || mode != 1) return false;
        qfresh = false;
    var opts = '';
    var n = 0;
    if (cm.getQuestStatus(3019) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "戒指的秘密" + "#l"; n++; }
    if (cm.getQuestStatus(3020) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "收集狼皮" + "#l"; n++; }
    if (cm.getQuestStatus(3037) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "尼克的戒指" + "#l"; n++; }
    if (cm.getQuestStatus(3051) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "莉萨的介绍" + "#l"; n++; }
    if (cm.getQuestStatus(3052) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "收集毛皮的材料" + "#l"; n++; }
    if (cm.getQuestStatus(3105) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "雪原的巨大生物" + "#l"; n++; }
    if (cm.getQuestStatus(3107) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "雪人的愤怒" + "#l"; n++; }
    if (cm.getQuestStatus(3109) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "阻击雪人" + "#l"; n++; }
    if (cm.getQuestStatus(8057) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "环游冒险岛 5" + "#l"; n++; }
    if (cm.getQuestStatus(10095) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "????? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(3020) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3019) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "收集狼皮" + "#l"; n++; }
    if ((cm.getQuestStatus(3021) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3020) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "勇士部落的贤者" + "#l"; n++; }
    if ((cm.getQuestStatus(3036) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 65) && (cm.getQuestStatus(3020) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "寻找尼克的痕迹" + "#l"; n++; }
    if ((cm.getQuestStatus(3052) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3051) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "收集毛皮的材料" + "#l"; n++; }
    if ((cm.getQuestStatus(3106) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "传说中的雪人" + "#l"; n++; }
    if ((cm.getQuestStatus(3107) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3106) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "雪人的愤怒" + "#l"; n++; }
    if ((cm.getQuestStatus(3109) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3107) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "阻击雪人" + "#l"; n++; }
    if ((cm.getQuestStatus(8041) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 80) && (cm.getQuestStatus(8040) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "怪物传言四起" + "#l"; n++; }
    if (n == 0) return false;
    qact = -1;
    cm.sendSimple("有什么我能帮你的吗?\r\n" + opts);
    qactive = true;
    return true;
    }
    if (mode != 1) { cm.dispose(); return true; }
    qstatus++;
    if (qstatus == 0) {
        var qt = "";
        var qi = -1;
        qact = -1;
        qid = -1;
        if (cm.getQuestStatus(3019) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3019; } }
        if (cm.getQuestStatus(3020) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3020; } }
        if (cm.getQuestStatus(3037) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3037; } }
        if (cm.getQuestStatus(3051) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3051; } }
        if (cm.getQuestStatus(3052) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3052; } }
        if (cm.getQuestStatus(3105) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3105; } }
        if (cm.getQuestStatus(3107) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3107; } }
        if (cm.getQuestStatus(3109) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3109; } }
        if (cm.getQuestStatus(8057) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 8057; } }
        if (cm.getQuestStatus(10095) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10095; } }
        if ((cm.getQuestStatus(3020) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3019) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3020; } }
        if ((cm.getQuestStatus(3021) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3020) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3021; } }
        if ((cm.getQuestStatus(3036) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 65) && (cm.getQuestStatus(3020) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3036; } }
        if ((cm.getQuestStatus(3052) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3051) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3052; } }
        if ((cm.getQuestStatus(3106) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3105) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3106; } }
        if ((cm.getQuestStatus(3107) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3106) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3107; } }
        if ((cm.getQuestStatus(3109) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3107) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3109; } }
        if ((cm.getQuestStatus(8041) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 80) && (cm.getQuestStatus(8040) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 8041; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3019) qt = "哦哦~ 真是个很漂亮的戒指。虽然看起来是很旧，难道你没有感觉到戒指发出的能量吗？你让我看一下，我要仔细地研究研究。";
        if (qid == 3020) qt = "呵呵~ 你真的收集到#b100个#t4000051#和100个#t4000052##k。好！我还给你戒指。而且我要谢谢你，送你一个对我没用东西。在我送你东西之前，你最好看看你背包的消耗品窗口是否有空间！";
        if (qid == 3037) qt = "这就是我儿子尼克的戒指！这样的戒指在世界上只有两个，只有我和我儿子有，因为上面有我们的名字。我真没想到能再见到这枚戒指。真是太谢谢你了！";
        if (qid == 3051) qt = "要去见天空之城的莉萨";
        if (qid == 3052) qt = "真的都弄来了啊～辛苦了！我也可以穿上不错的毛皮大衣过上暖和的日子啦。";
        if (qid == 3105) qt = "嗯？找我有什么事啊？\r\n#b有事要问您#。";
        if (qid == 3107) qt = "查到什么了吗？\r\n#b（给斯卡德讲了雪之精灵雕像的故事。）";
        if (qid == 3109) qt = "到现在也没有发生雪崩，看来你已经阻止了驮狼雪人……很厉害啊？！据说作为雪之精灵的孩子驮狼雪人非常强大……";
        if (qid == 8057) qt = "欢迎光临！马塞尔已经跟我说了你要来。唉，这里除了雪也没什么好看的，你就随便看看吧！走路小心点——很滑的！";
        if (qid == 10095) qt = "????? ?????? ???? ?? ???? ??.";
        if (qid == 3020) qt = "哈哈~ 我会暂时保管这个戒指。你不可能拿回去的，因为你打不赢我。如果你想要戒指，就必须答应我的条件。怎么样？你答应吗？";
        if (qid == 3021) qt = "我年轻的时候，还没到这片大陆之前，我见过#b4位贤者#k。这戒指应该就是那时候听他们听过的戒指。你拿着这枚戒指去#b维多利亚岛找那4位贤者#k吧，你应该先找#b勇士部落#k的贤者。还有，以后有机会再来这里，你一定要来找我。";
        if (qid == 3036) qt = "哦哦。。。你是上次带着那奇怪的戒指的家伙吧~ 你过得怎么样？你来得正好。我一直想请你帮我完成我的心愿。怎么样？这是不容易的事，想不想挑战？";
        if (qid == 3052) qt = "你是莉萨介绍来到我这里的吧！嗯... 看起来还算蛮强的，莉萨看人还是有一套的～好了！你…想不想帮助我做点事情啊？";
        if (qid == 3106) qt = "#p2020006#好像已经见过 #b#o8220001##k了。\r\n#b#o8220001#是什么？";
        if (qid == 3107) qt = "嗯？你为杰德的事来找过我吧？\r\n#b因为那事，他好像在怀疑什么。杰德说是驮狼雪人先攻击他的。";
        if (qid == 3109) qt = "如果是精灵的雕像碎了，就能理解驮狼雪人为什么发火了。因为驮狼雪人是雪之精灵的孩子……母亲的雕像碎了，作为其子女发火也是应该的。到底是谁惹的事？";
        if (qid == 8041) qt = "我注意到最近怪物异常凶猛，可那样的怪物……实在不是我应付得来的。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3019) cm.completeQuest(3019);
            if (qid == 3020) cm.completeQuest(3020);
            if (qid == 3037) cm.completeQuest(3037);
            if (qid == 3051) cm.completeQuest(3051);
            if (qid == 3052) cm.completeQuest(3052);
            if (qid == 3105) cm.completeQuest(3105);
            if (qid == 3107) cm.completeQuest(3107);
            if (qid == 3109) cm.completeQuest(3109);
            if (qid == 8057) cm.completeQuest(8057);
            if (qid == 10095) cm.completeQuest(10095);
        } else {
            if (qid == 3020) cm.startQuest(3020);
            if (qid == 3021) cm.startQuest(3021);
            if (qid == 3036) cm.startQuest(3036);
            if (qid == 3052) cm.startQuest(3052);
            if (qid == 3106) cm.startQuest(3106);
            if (qid == 3107) cm.startQuest(3107);
            if (qid == 3109) cm.startQuest(3109);
            if (qid == 8041) cm.startQuest(8041);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
