/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2012010
   覆盖任务: 3004, 3005, 3006, 3007, 3046, 3048, 3050, 3079, 3089, 3090, 8055, 8056, 9191, 9192, 9193, 9747
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
    if (cm.getQuestStatus(3004) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "《上古魔书》作者的后代" + "#l"; n++; }
    if (cm.getQuestStatus(3006) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "赫拉去哪儿？" + "#l"; n++; }
    if (cm.getQuestStatus(3046) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "奈洛的礼物" + "#l"; n++; }
    if (cm.getQuestStatus(3048) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "珥玛香甜可口的食人花果汁" + "#l"; n++; }
    if (cm.getQuestStatus(3079) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "遗失的食人花果汁" + "#l"; n++; }
    if (cm.getQuestStatus(3089) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "珥玛借走的喷雾器1" + "#l"; n++; }
    if (cm.getQuestStatus(8055) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "环游冒险岛 3" + "#l"; n++; }
    if (cm.getQuestStatus(9191) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(9192) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(3005) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3004) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "消失的赫拉" + "#l"; n++; }
    if ((cm.getQuestStatus(3007) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3006) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "一个钥匙" + "#l"; n++; }
    if ((cm.getQuestStatus(3046) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3045) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "奈洛的礼物" + "#l"; n++; }
    if ((cm.getQuestStatus(3048) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3047) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031200, 1))) { opts += "\r\n#L" + n + "#[接受] " + "珥玛香甜可口的食人花果汁" + "#l"; n++; }
    if ((cm.getQuestStatus(3050) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3048) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031202, 1))) { opts += "\r\n#L" + n + "#[接受] " + "阿尔冯丝的微笑" + "#l"; n++; }
    if ((cm.getQuestStatus(3079) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3079) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3048) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3050) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031202, 1))) { opts += "\r\n#L" + n + "#[接受] " + "遗失的食人花果汁" + "#l"; n++; }
    if ((cm.getQuestStatus(3090) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3089) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "珥玛借走的喷雾器2" + "#l"; n++; }
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
        if (cm.getQuestStatus(3004) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3004; } }
        if (cm.getQuestStatus(3006) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3006; } }
        if (cm.getQuestStatus(3046) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3046; } }
        if (cm.getQuestStatus(3048) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3048; } }
        if (cm.getQuestStatus(3079) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3079; } }
        if (cm.getQuestStatus(3089) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3089; } }
        if (cm.getQuestStatus(8055) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 8055; } }
        if (cm.getQuestStatus(9191) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9191; } }
        if (cm.getQuestStatus(9192) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9192; } }
        if ((cm.getQuestStatus(3005) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3004) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3005; } }
        if ((cm.getQuestStatus(3007) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3006) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3007; } }
        if ((cm.getQuestStatus(3046) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3045) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 3046; } }
        if ((cm.getQuestStatus(3048) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3047) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031200, 1))) { qi++; if (selection == qi) { qact = 0; qid = 3048; } }
        if ((cm.getQuestStatus(3050) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3048) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031202, 1))) { qi++; if (selection == qi) { qact = 0; qid = 3050; } }
        if ((cm.getQuestStatus(3079) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3079) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3048) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3050) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031202, 1))) { qi++; if (selection == qi) { qact = 0; qid = 3079; } }
        if ((cm.getQuestStatus(3090) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3089) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3090; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3004) qt = "要去冰封雪域找阿尔卡斯特";
        if (qid == 3006) qt = "杰德说赫拉消失的原因可能与被偷的#b母亲的遗物#k有关系。同时告诉我赫拉的保姆有关于它的信息。";
        if (qid == 3046) qt = "把所有材料都弄来了啊，辛苦了～ 请稍等会儿，马上就为您做出手镯。";
        if (qid == 3048) qt = "去找保姆珥玛，请他帮忙制作食人花果汁。";
        if (qid == 3079) qt = "给你，千万小心不要再弄丢了。我这里剩下的#b食人花果汁#k也已经没有多少了...";
        if (qid == 3089) qt = "什么事？我现在在打扫，非常忙。灰尘太多，你继续站在那里可能沾到很多灰尘。\r\n#b我来找回50年前借走的#t4031308#。";
        if (qid == 8055) qt = "欢迎光临！斯凯还跟你说了这里什么别的吗？天空之城空气清新，一切都仿佛漂浮在高处。";
        if (qid == 9191) qt = "?? ?? ??? ??? ????? ??.. ? ?? ?? ?? ??? ?? ??? ????. ?? ?? ????? ??? 30? ??? ??? ??... ???..? \n\n#i4000058# #t4000058# #b30#k?";
        if (qid == 9192) qt = "????? ???? ?? ??????? 20 ??? ? ?? ????";
        if (qid == 3005) qt = "几个月前，主人突然离家至今未归。每天都有人来找主人，但他们只好回去。你有什么事吗？等她回来，我转告她吧。\r\n#b没有什么事\r\n#b没有跟赫拉亲近的人吗？\r\n#b你能推测赫拉去哪里吗？";
        if (qid == 3007) qt = "你见过冰峰雪域的杰德先生吗？他也不知道吗？哼...你听说过我主人#b母亲的遗物#k吗？在一个漆黑的夜晚，有人偷走那件遗物。从那时候起，她就变的越来越奇怪了。但我也不知道谁偷去了那件遗物。";
        if (qid == 3046) qt = "您正在寻找食人花汁吗？那个只有艾利逊才会做。";
        if (qid == 3048) qt = "您好啊~ 原来是上次那位啊~ 得到#b食人花汁#k了啊！您看，我说过给奈洛礼物的话艾利逊就会为您做#b食人花汁#k的吧~ 现在要做#b食人花果汁#k了吗？";
        if (qid == 3050) qt = "喏！终于~ 经过一番辛苦把#b食人花果汁#k做出来了~ 快去找正在苦苦等你的#b阿尔冯丝小绿#k吧~";
        if (qid == 3079) qt = "我好不容易做好的#b食人花果汁#k，现在却弄丢了？";
        if (qid == 3090) qt = "啊！在这里。不好意思，这么晚才还...请替我跟斯皮罗纳说声对不起。因为太忙了，所以忘记了。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3004) cm.completeQuest(3004);
            if (qid == 3006) cm.completeQuest(3006);
            if (qid == 3046) cm.completeQuest(3046);
            if (qid == 3048) cm.completeQuest(3048);
            if (qid == 3079) cm.completeQuest(3079);
            if (qid == 3089) cm.completeQuest(3089);
            if (qid == 8055) cm.completeQuest(8055);
            if (qid == 9191) cm.completeQuest(9191);
            if (qid == 9192) cm.completeQuest(9192);
        } else {
            if (qid == 3005) cm.startQuest(3005);
            if (qid == 3007) cm.startQuest(3007);
            if (qid == 3046) cm.startQuest(3046);
            if (qid == 3048) cm.startQuest(3048);
            if (qid == 3050) cm.startQuest(3050);
            if (qid == 3079) cm.startQuest(3079);
            if (qid == 3090) cm.startQuest(3090);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
