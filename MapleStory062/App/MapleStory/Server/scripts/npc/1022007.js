/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1022007
   覆盖任务: 1117, 2082, 2092, 2093, 2094, 2095, 2150, 9181, 9182, 9183, 9382, 9866, 9867
   ============================================================ */
importPackage(net.sf.odinms.client);

var status = -1;

function recoveredOriginalStart() {
    status = -1;
    qfresh = true;
    action(1, 0, 0);
}

function recoveredOriginalAction(mode, type, selection) {
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
    if (cm.getQuestStatus(9181) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u4e2d\u79cb\u95ee\u5019\u4f0a\u6069.." + "#l"; n++; }
    if (cm.getQuestStatus(9182) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5e2e\u52a9\u4f0a\u6069\u5b8c\u6210\u5de5\u4f5c" + "#l"; n++; }
    if (cm.getQuestStatus(9183) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u4f0a\u626c\u7684\u6ee1\u6708" + "#l"; n++; }
    if (cm.getQuestStatus(9382) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u7ed9\u4f0a\u6069\u7684\u793c\u7269" + "#l"; n++; }
    if (cm.getQuestStatus(9866) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u5973\u5b69\u7684\u65e7\u94c1\u5251" + "#l"; n++; }
    if (cm.getQuestStatus(9867) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u66fc\u5409\u548c\u4f0a\u626c" + "#l"; n++; }
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
        if (qid == 9181) qt = "\u4f60\u597d\uff1f\u6211\u53eb\u674e\u5ca9\uff0c\u6765\u81ea\u52c7\u58eb\u90e8\u843d\u3002\u4f60\u6765\u627e\u6211\u505a\u4ec0\u4e48\uff1f \\r\\n#b#L0# \u4e3a\u4ec0\u4e48\u4f60\u548c\u52c7\u58eb\u90e8\u843d\u7684\u4eba\u957f\u5f97\u4e0d\u4e00\u6837\uff1f #l\\r\\n#L1# \u6211\u662f\u6765\u95ee\u95ee\u4f60\u600e\u4e48\u6837\u3002\u795d\u60a8\u4e2d\u79cb\u8282\u5047\u671f\u6109\u5feb\u3002 #l#k";
        if (qid == 9182) qt = (qact == 1 ? "哦？杀死所有野猪之后你回来了吗？" : "中秋节期间，我想去向尤师傅村的长辈们打个招呼，但是... #b 尤师傅周围的野猪#k正在制造麻烦，所以我根本无法离开。你不帮我回来给你拜个中秋节吗？");
        if (qid == 9183) qt = (qact == 1 ? "你在望着满月的时候许愿了吗？" : "中秋假期过得愉快吗？你是不是一边望着月亮一边许愿呢？  \r\n#b#L0# 我许愿了。 #l\r\n#L1# 不行。我无法许愿。 #k#l");
        if (qid == 9382) qt = "\u5929\u54ea\uff0c\u8fd9\u662f\u771f\u7684\u5417\uff1f  #p9000009# \u4f60\u7ed9\u4e86\u6211#t4031286#\uff1f\u54c7\uff01\u597d\u6b66\u5668\u592a\u591a\u4e86\u5417\uff1f\u6709\u4e86\u8fd9\u6837\u7684\u6b66\u5668\uff0c\u6211\u73b0\u5728\u5c31\u53ef\u4ee5\u5b89\u5fc3\u53bb\u6253\u730e\u4e86\u3002\u975e\u5e38\u611f\u8c22~";
        if (qid == 9866) qt = (qact == 1 ? "啊...您在寻找 #t4031662# 吗？啊，这真是一种解脱……我以为我失去了它……非常感谢！" : "哇~~~~啊！！我应该怎么办？！不存在！无处！你到底去哪儿了？啊……没有它我就做不到……我该怎么办？请大家帮帮我~~~~！");
        if (qid == 9867) qt = "\u554a\u3002\u4f60\u662f\u4e4b\u524d\u53d1\u73b0\u94c1\u5251\u7684\u5192\u9669\u5bb6\u3002\u78b0\u5de7...\u4f60\u6253\u8fc7#p1022002#\u5417\uff1f\u662f\u7684\uff1f  \u4f60\u627e\u5230#p1061013#\u5728\u54ea\u91cc\u4e86\u5417\uff1f";
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




// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":9382,"name":"给伊恩的礼物","startNpc":9000009,"endNpc":1022007}];
var recoveredMenu = null;
function start() {
    var reader = new java.util.Scanner(new java.io.File("scripts/npc/legacy.js"), "GBK");
    try {
        var factory = eval(String(reader.useDelimiter("(?!)").next()));
        recoveredMenu = factory(cm, recoveredDefs, recoveredOriginalStart, recoveredOriginalAction, "暂时没有可以接取或交付的任务。");
    } finally { reader.close(); }
    recoveredMenu.start();
}
function action(mode, type, selection) {
    if (recoveredMenu) recoveredMenu.action(mode, type, selection);
    else cm.dispose();
}
