/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1022007
   覆盖任务: 1117, 2082, 2092, 2093, 2094, 2095, 2150, 9181, 9182, 9183, 9382, 9866, 9867
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
    if (cm.getQuestStatus(1117) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "伊安的爱情证书" + "#l"; n++; }
    if (cm.getQuestStatus(2082) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "木妖好可怕" + "#l"; n++; }
    if (cm.getQuestStatus(2092) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "寻找女儿1" + "#l"; n++; }
    if (cm.getQuestStatus(2094) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "消灭鳄鱼1" + "#l"; n++; }
    if (cm.getQuestStatus(2095) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "消灭鳄鱼2" + "#l"; n++; }
    if (cm.getQuestStatus(2150) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "传闻的真相-伊安" + "#l"; n++; }
    if (cm.getQuestStatus(9181) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? ?? ???。" + "#l"; n++; }
    if (cm.getQuestStatus(9182) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ? ??" + "#l"; n++; }
    if (cm.getQuestStatus(9183) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ???" + "#l"; n++; }
    if (cm.getQuestStatus(9382) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? (11? 29?)" + "#l"; n++; }
    if (cm.getQuestStatus(9866) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ?? ??" + "#l"; n++; }
    if (cm.getQuestStatus(9867) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
    if ((cm.getQuestStatus(1117) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(1117) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031685, 1))) { opts += "\r\n#L" + n + "#[接受] " + "伊安的爱情证书" + "#l"; n++; }
    if ((cm.getQuestStatus(2082) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10)) { opts += "\r\n#L" + n + "#[接受] " + "木妖好可怕" + "#l"; n++; }
    if ((cm.getQuestStatus(2093) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2092) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "寻找女儿2" + "#l"; n++; }
    if ((cm.getQuestStatus(2094) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 52) && (cm.getQuestStatus(2093) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "消灭鳄鱼1" + "#l"; n++; }
    if ((cm.getQuestStatus(2095) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 52) && (cm.getQuestStatus(2094) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "消灭鳄鱼2" + "#l"; n++; }
    if ((cm.getQuestStatus(2150) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2144) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "传闻的真相-伊安" + "#l"; n++; }
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
        if (cm.getQuestStatus(1117) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 1117; } }
        if (cm.getQuestStatus(2082) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2082; } }
        if (cm.getQuestStatus(2092) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2092; } }
        if (cm.getQuestStatus(2094) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2094; } }
        if (cm.getQuestStatus(2095) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2095; } }
        if (cm.getQuestStatus(2150) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2150; } }
        if (cm.getQuestStatus(9181) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9181; } }
        if (cm.getQuestStatus(9182) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9182; } }
        if (cm.getQuestStatus(9183) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9183; } }
        if (cm.getQuestStatus(9382) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9382; } }
        if (cm.getQuestStatus(9866) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9866; } }
        if (cm.getQuestStatus(9867) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9867; } }
        if ((cm.getQuestStatus(1117) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(1117) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031685, 1))) { qi++; if (selection == qi) { qact = 0; qid = 1117; } }
        if ((cm.getQuestStatus(2082) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 10)) { qi++; if (selection == qi) { qact = 0; qid = 2082; } }
        if ((cm.getQuestStatus(2093) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2092) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2093; } }
        if ((cm.getQuestStatus(2094) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 52) && (cm.getQuestStatus(2093) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2094; } }
        if ((cm.getQuestStatus(2095) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 52) && (cm.getQuestStatus(2094) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2095; } }
        if ((cm.getQuestStatus(2150) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2144) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 2150; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 1117) qt = "您把 40 #t4000018#s带回来了. 我终于感受到您的诚恳. 我把爱的见证献给您，证明您的爱.";
        if (qid == 2082) qt = "啊！辛苦了。多亏您，村庄周围的木妖数量少了很多，我也有勇气到村外去了，非常感谢。";
        if (qid == 2092) qt = "您好！您说爸爸正在找我吗？真的吗？可是我不知道谁是我爸爸呀。小时候的记忆几乎都消失了。";
        if (qid == 2094) qt = "啊！回来了啊，居然这么快就回来了，看来我的猜测没错呢。您的确很强。现在，沼泽地带的鳄鱼也减少了许多吧，真是多亏您了。";
        if (qid == 2095) qt = "啊！真了不起啊。居然消灭了那些可怕的#b#o5130103##k平安归来！！现在可以真正放心地来往于沼泽地带了，这都是多亏了您啊。";
        if (qid == 2150) qt = "向亲切的#b#p1022007##k询问最近的传闻吧。";
        if (qid == 9181) qt = "?????? ? ???? ????? ??? ?? ?? ? ???????\r\n#b ??? ??? ???? ???? ???? ?????\r\n ??? ???? ???. ??? ?? ?? ????.#k";
        if (qid == 9182) qt = "?? ??? ??? ?? ???? ?? ????";
        if (qid == 9183) qt = "???? ???? ??? ?????";
        if (qid == 9382) qt = "?? ?? ?????? #p900000009# ???? ??? #t4031286#? ?????? ??! ?? ???? ?? ????? ??? ?????? ?? ?? ??? ??? ?? ? ????. ?? ????~";
        if (qid == 9866) qt = "?... #t4031662#? ???? ???? ??, ????... ????? ? ???... ?? ?????!";
        if (qid == 9867) qt = "?. ?? ??? ???? ???????. ??... #p1022002#?? ?????? ?? #p1061013#? ?? ?? ????????";
        if (qid == 1117) qt = "嗨! 您想要爱的见证...? 我听说爱的力量是很强的. 好希望能用它让我的病情好转... 您觉得你拥有真爱吗? 怎么样？您应该可以通过我的测试吧。";
        if (qid == 2082) qt = "喂~您可以帮我一下吗？我因为害怕木妖而不敢到村外啊，碰到村外的木妖实在太让人害怕了。如果有空的话可以帮助我吗？";
        if (qid == 2093) qt = "请一定要将信件转交给我爸爸啊！拜托了~ 好想快点去见爸爸啊~";
        if (qid == 2094) qt = "好久不见啊，这段时间过得好吗？最近勇士部落发生了一件不太好的事情，所以有些乱。不久前勇士部落的印地安剑士们为了求得鳄鱼皮，前往堕落都市附近的沼泽地带狩猎，结果遭到了鳄鱼群的袭击受了重伤。";
        if (qid == 2095) qt = "啊，你来得正好，我正在等着你呢。上次真感谢您消灭了居住在沼泽地带的鳄鱼啊！从那之后村里的人们也能够安心前往沼泽地带了。";
        if (qid == 2150) qt = "你好，旅行者你今天过来有什么事儿吗？\r\n#b听说过鬼树吗?";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 1117) cm.completeQuest(1117);
            if (qid == 2082) cm.completeQuest(2082);
            if (qid == 2092) cm.completeQuest(2092);
            if (qid == 2094) cm.completeQuest(2094);
            if (qid == 2095) cm.completeQuest(2095);
            if (qid == 2150) cm.completeQuest(2150);
            if (qid == 9181) cm.completeQuest(9181);
            if (qid == 9182) cm.completeQuest(9182);
            if (qid == 9183) cm.completeQuest(9183);
            if (qid == 9382) cm.completeQuest(9382);
            if (qid == 9866) cm.completeQuest(9866);
            if (qid == 9867) cm.completeQuest(9867);
        } else {
            if (qid == 1117) cm.startQuest(1117);
            if (qid == 2082) cm.startQuest(2082);
            if (qid == 2093) cm.startQuest(2093);
            if (qid == 2094) cm.startQuest(2094);
            if (qid == 2095) cm.startQuest(2095);
            if (qid == 2150) cm.startQuest(2150);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
