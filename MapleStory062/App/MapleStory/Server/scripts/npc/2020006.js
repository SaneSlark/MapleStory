/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2020006
   覆盖任务: 3005, 3006, 3007, 3008, 3016, 3017, 3105, 3106, 9240, 9747, 20401
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
    if (cm.getQuestStatus(3005) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "消失的赫拉" + "#l"; n++; }
    if (cm.getQuestStatus(3007) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "一个钥匙" + "#l"; n++; }
    if (cm.getQuestStatus(3016) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "找到的赫拉" + "#l"; n++; }
    if (cm.getQuestStatus(3106) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "传说中的雪人" + "#l"; n++; }
    if (cm.getQuestStatus(9240) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "?? ?! ?? ??!!!" + "#l"; n++; }
    if (cm.getQuestStatus(9747) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ?? ?? ???!!" + "#l"; n++; }
    if ((cm.getQuestStatus(3006) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3005) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "赫拉去哪儿？" + "#l"; n++; }
    if ((cm.getQuestStatus(3008) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3007) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "老太太" + "#l"; n++; }
    if ((cm.getQuestStatus(3017) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3016) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "小墓地" + "#l"; n++; }
    if ((cm.getQuestStatus(3105) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 90)) { opts += "\r\n#L" + n + "#[接受] " + "雪原的巨大生物" + "#l"; n++; }
    if ((cm.getQuestStatus(20401) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 120) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20400) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "?? ??" + "#l"; n++; }
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
        if (cm.getQuestStatus(3005) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3005; } }
        if (cm.getQuestStatus(3007) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3007; } }
        if (cm.getQuestStatus(3016) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3016; } }
        if (cm.getQuestStatus(3106) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3106; } }
        if (cm.getQuestStatus(9240) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9240; } }
        if (cm.getQuestStatus(9747) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9747; } }
        if ((cm.getQuestStatus(3006) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3005) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3006; } }
        if ((cm.getQuestStatus(3008) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3007) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3008; } }
        if ((cm.getQuestStatus(3017) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 55) && (cm.getQuestStatus(3016) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3017; } }
        if ((cm.getQuestStatus(3105) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 90)) { qi++; if (selection == qi) { qact = 0; qid = 3105; } }
        if ((cm.getQuestStatus(20401) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 120) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20400) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20401; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3005) qt = "按照阿尔卡斯特说的去天空之城访问了赫拉的家。但家里除了保姆#b珥玛#k以外谁也没见到。听说赫拉几个月前突然离家出走后就没有消息… 听说#b冰峰雪域#k德杰是赫拉的老朋友，我要去看他。";
        if (qid == 3007) qt = "从珥玛那听到了赫拉离家出走前多次说过关于#b老太太#k的内容。但是要获得关于老太太的信息，再要去看杰德。";
        if (qid == 3016) qt = "这不是我给赫拉的#b项链#k么？你见过赫拉吧！她过得怎么样？太好了！赫拉没事，我也可以放心继续研究。她说把这项链送给我吗？知道了，我会好好保管的。这是我送给你的礼物，不要客气。";
        if (qid == 3106) qt = "听说过斯卡德的故事吗？他说什么呢？ \r\n#b(给斯卡德讲听到的故事。)";
        if (qid == 9240) qt = "??~ ??? ???? ??????? ?? ???? ??? ?. ?? ?????? ??? ?? ?? ??? ? ???? ????";
        if (qid == 9747) qt = "#b#m200000200##k? #b#p2012010##k? ?? ?? ???? ?? ???? ??? ?? ??? ??? ? ??.";
        if (qid == 3006) qt = "你在找赫拉吗？她是我很好的朋友。但是这次她一句话也没交代就失踪了。 我也正在想她可能去的地方，但还没有头绪。#b几个月前她母亲去世后#k，赫拉就突然离家出走。估计很难找，你也放弃吧。";
        if (qid == 3008) qt = "赫拉说过#b老太太#k吗？嗯~ 在天空之城和冰峰雪域这两个村落里确实没有老太太，她说的是谁呢？啊！她说的人可能是#b斯皮罗纳#k吧。她住在天空之城公园某处的小屋里，那里有怪物出没。你问问她吧，怎么样？";
        if (qid == 3017) qt = "嗯...赫拉说问我关于#b#t4031056##k吗？她还说有在雪原某个地方弄丢的记录吗？对!几天前我调查村落周围的地质时，在雪原的山沟里看见了#b小墓地#k。那墓地可能是线索。";
        if (qid == 3105) qt = "现在还心有余悸。\r\n#b听说经历了一件惊人的事？";
        if (qid == 20401) qt = "#b#m211000000##k? #b#p2020006##k? #p1103000#? ?? ?? ?? ????...";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3005) cm.completeQuest(3005);
            if (qid == 3007) cm.completeQuest(3007);
            if (qid == 3016) cm.completeQuest(3016);
            if (qid == 3106) cm.completeQuest(3106);
            if (qid == 9240) cm.completeQuest(9240);
            if (qid == 9747) cm.completeQuest(9747);
        } else {
            if (qid == 3006) cm.startQuest(3006);
            if (qid == 3008) cm.startQuest(3008);
            if (qid == 3017) cm.startQuest(3017);
            if (qid == 3105) cm.startQuest(3105);
            if (qid == 20401) cm.startQuest(20401);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
