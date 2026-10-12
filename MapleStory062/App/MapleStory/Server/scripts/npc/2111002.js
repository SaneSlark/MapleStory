/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2111002
   覆盖任务: 3320, 3321, 3353, 3354
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
    if (cm.getQuestStatus(3320) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "琶尔文知道的事情" + "#l"; n++; }
    if (cm.getQuestStatus(3353) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "德朗博士所希望的" + "#l"; n++; }
    if ((cm.getQuestStatus(3321) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3320) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "失踪的炼金术士——德朗博士" + "#l"; n++; }
    if ((cm.getQuestStatus(3354) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 75) && (cm.getQuestStatus(3353) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "德朗博士的药" + "#l"; n++; }
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
        if (cm.getQuestStatus(3320) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3320; } }
        if (cm.getQuestStatus(3353) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3353; } }
        if ((cm.getQuestStatus(3321) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3320) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3321; } }
        if ((cm.getQuestStatus(3354) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 75) && (cm.getQuestStatus(3353) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3354; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3320) qt = "……您是谁啊？这里是个人研究室……您怎么能随便进来呢……";
        if (qid == 3353) qt = "啊……您是谁啊？好像是第一次见面……您不能随便到研究室里来……不过我现在心情很好，应该没什么关系。呵呵。";
        if (qid == 3321) qt = "#p2111002#的表情似乎有些忧郁……但是却看起来很平静。看上去不像是进行了令人震惊的可怕实验的人。无意中听到了他的话，令人吃惊的是，他的妻子好像就是#b#p2111004##k！他说想把#b银坠饰#k送给琵丽雅做礼物……\n\n……银做的坠饰？想起来之前#p2040050#不是说过打开存放#p2111002#的秘密研究记事本的钥匙是银做的东西吗？那个银坠饰原来是在#p2111002#的家里……";
        if (qid == 3354) qt = "#p2111002#满脸忧郁地说，他的研究再也没能取得任何进展。但是他的表情马上舒展了开来，说他最近完成了为了#p2111005#的研究，觉得很满足……说是什么为#b#p2111005#而配制的药。但是#p2111002#的家里好像没有其他可以隐藏的地方了？\n\n如果不是有意藏起来的话，之前阿卡德诺协会的#b#p2111001##k曾经搜索#p2111002#的家，他应该知道研究的结果。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3320) cm.completeQuest(3320);
            if (qid == 3353) cm.completeQuest(3353);
        } else {
            if (qid == 3321) cm.startQuest(3321);
            if (qid == 3354) cm.startQuest(3354);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
