/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1032105
   覆盖任务: 2063, 2064, 2076, 3049, 9671, 9744, 9841, 10085
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
    if (cm.getQuestStatus(2063) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "明明女士的第二个担心" + "#l"; n++; }
    if (cm.getQuestStatus(2064) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "胡小姐的拜托" + "#l"; n++; }
    if (cm.getQuestStatus(3049) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "胡小姐的甜蜜果浆" + "#l"; n++; }
    if (cm.getQuestStatus(9671) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "寂寞的胡小姐" + "#l"; n++; }
    if (cm.getQuestStatus(9744) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "胡小姐的礼物" + "#l"; n++; }
    if (cm.getQuestStatus(9841) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???" + "#l"; n++; }
    if (cm.getQuestStatus(10085) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(2064) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 21) && (cm.getQuestStatus(2063) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "胡小姐的拜托" + "#l"; n++; }
    if ((cm.getQuestStatus(2076) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 21) && (cm.getQuestStatus(2064) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "胡小姐的特制酱油" + "#l"; n++; }
    if ((cm.getQuestStatus(3049) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3049) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3048) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.haveItem(4031201, 1))) { opts += "\r\n#L" + n + "#[接受] " + "胡小姐的甜蜜果浆" + "#l"; n++; }
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
        if (cm.getQuestStatus(2063) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2063; } }
        if (cm.getQuestStatus(2064) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2064; } }
        if (cm.getQuestStatus(3049) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3049; } }
        if (cm.getQuestStatus(9671) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9671; } }
        if (cm.getQuestStatus(9744) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9744; } }
        if (cm.getQuestStatus(9841) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9841; } }
        if (cm.getQuestStatus(10085) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 10085; } }
        if ((cm.getQuestStatus(2064) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 21) && (cm.getQuestStatus(2063) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2064; } }
        if ((cm.getQuestStatus(2076) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 21) && (cm.getQuestStatus(2064) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2076; } }
        if ((cm.getQuestStatus(3049) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3049) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3048) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) && (cm.haveItem(4031201, 1))) { qi++; if (selection == qi) { qact = 0; qid = 3049; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2063) qt = "听说射手村的明明女士有了心事…";
        if (qid == 2064) qt = "在魔法密林附近见到了胡小姐。她要为母亲的生日准备项链。她说要是我给她一个石榴石，就会给我特制酱油。";
        if (qid == 3049) qt = "把材料都找来了啊～辛苦了，稍等会儿就能做给你了。";
        if (qid == 9671) qt = "一个朋友都没有……好寂寞啊！呜呜……哎？这是什么？难道是给我的糖果？真是太谢谢啦！";
        if (qid == 9744) qt = "正巧我做好的时候你就跟我说话了。这是我做的炸酱面。名字嘛，有点……奇怪啦，不过味道绝对没得说。";
        if (qid == 9841) qt = "#b#p9010010##k? ?? ?? ??? ????… ?? ?? ??? ?????.";
        if (qid == 10085) qt = "???? ?????? ???? ?? ???? ??.";
        if (qid == 2064) qt = "嗯。。。你到这里有什么事？啊。。。是我的特制酱油吗？是要做节日菜的时候用吗？但这是我母亲给我的，非常贵重的，我不会给别人。。。或者你接受我的委托，我就给你这个。怎么样？";
        if (qid == 2076) qt = "哎。。。这是冶炼好的#b#t4021000##k。有了这个我就把我母亲非常漂亮的项链给你吧。那我把我的特制酱油给你。请请你替我转告她我希望他们庆典圆满成功。";
        if (qid == 3049) qt = "需要#b甜蜜果浆#k吗？是珥玛叫您来这里的吧？\n奇怪我是怎么知道的吗？因为那种果浆我只有做给她而以啊。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2063) cm.completeQuest(2063);
            if (qid == 2064) cm.completeQuest(2064);
            if (qid == 3049) cm.completeQuest(3049);
            if (qid == 9671) cm.completeQuest(9671);
            if (qid == 9744) cm.completeQuest(9744);
            if (qid == 9841) cm.completeQuest(9841);
            if (qid == 10085) cm.completeQuest(10085);
        } else {
            if (qid == 2064) cm.startQuest(2064);
            if (qid == 2076) cm.startQuest(2076);
            if (qid == 3049) cm.startQuest(3049);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
