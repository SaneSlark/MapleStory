/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1032104
   覆盖任务: 2066, 2067, 2068, 2069, 2070, 2152, 8050, 9528
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
    if (cm.getQuestStatus(2066) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "运送化石箱子" + "#l"; n++; }
    if (cm.getQuestStatus(2067) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "植物化石研究" + "#l"; n++; }
    if (cm.getQuestStatus(2069) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "运送龙之头骨" + "#l"; n++; }
    if (cm.getQuestStatus(2152) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "传闻的真相-巴缇" + "#l"; n++; }
    if (cm.getQuestStatus(8050) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "今日日程" + "#l"; n++; }
    if (cm.getQuestStatus(9528) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "???? (12? 17?)" + "#l"; n++; }
    if ((cm.getQuestStatus(2067) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 22) && (cm.getQuestStatus(2066) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "植物化石研究" + "#l"; n++; }
    if ((cm.getQuestStatus(2068) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 22) && (cm.getQuestStatus(2067) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "动物化石研究" + "#l"; n++; }
    if ((cm.getQuestStatus(2070) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 23) && (cm.getQuestStatus(2069) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "化石研究成果" + "#l"; n++; }
    if ((cm.getQuestStatus(2152) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2144) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { opts += "\r\n#L" + n + "#[接受] " + "传闻的真相-巴缇" + "#l"; n++; }
    if ((cm.getQuestStatus(8050) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35)) { opts += "\r\n#L" + n + "#[接受] " + "今日日程" + "#l"; n++; }
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
        if (cm.getQuestStatus(2066) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2066; } }
        if (cm.getQuestStatus(2067) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2067; } }
        if (cm.getQuestStatus(2069) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2069; } }
        if (cm.getQuestStatus(2152) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2152; } }
        if (cm.getQuestStatus(8050) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 8050; } }
        if (cm.getQuestStatus(9528) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9528; } }
        if ((cm.getQuestStatus(2067) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 22) && (cm.getQuestStatus(2066) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2067; } }
        if ((cm.getQuestStatus(2068) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 22) && (cm.getQuestStatus(2067) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2068; } }
        if ((cm.getQuestStatus(2070) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 23) && (cm.getQuestStatus(2069) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2070; } }
        if ((cm.getQuestStatus(2152) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2144) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED)) { qi++; if (selection == qi) { qact = 0; qid = 2152; } }
        if ((cm.getQuestStatus(8050) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 35)) { qi++; if (selection == qi) { qact = 0; qid = 8050; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2066) qt = "是芳博士让你来这里的？他不是在勇士部落研究化石吗？";
        if (qid == 2067) qt = "听说魔法密林的生物学家巴缇博士需要助手。。。";
        if (qid == 2069) qt = "你回来了？我忘了告诉你，桉是性格非常孤僻的孩子。我忘记给你写一封信了。";
        if (qid == 2152) qt = "去找#m101000000#的植物学家#b#p1032104##k问问吧。";
        if (qid == 8050) qt = "好，收集到了吗？";
        if (qid == 9528) qt = "?? ?? ?? ??????? ????? ? ??? ??? ?????? ?? ????? ?? ? ??? ??? ?????? ?????.";
        if (qid == 2067) qt = "你是以前拿芳博士的箱子去的那个人吧？好久不见！你还没忘记再来找我。正好我正在研究化石。你会帮我吗？";
        if (qid == 2068) qt = "这是20个植物样品。品质也不错。辛苦你了。对植物化石研究很有帮助。果然是芳博士推荐的人。我还有一件事情想拜托你。怎么样？你能帮我吗？";
        if (qid == 2070) qt = "好久不见了。很感谢你上次帮我。有了你的帮忙，我的研究进行得很顺利。";
        if (qid == 2152) qt = "快来吧。有什么事吗？\r\n#b 了解鬼树吗？";
        if (qid == 8050) qt = "糟了，这可怎么办。而且我剩下的时间不多了！";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2066) cm.completeQuest(2066);
            if (qid == 2067) cm.completeQuest(2067);
            if (qid == 2069) cm.completeQuest(2069);
            if (qid == 2152) cm.completeQuest(2152);
            if (qid == 8050) cm.completeQuest(8050);
            if (qid == 9528) cm.completeQuest(9528);
        } else {
            if (qid == 2067) cm.startQuest(2067);
            if (qid == 2068) cm.startQuest(2068);
            if (qid == 2070) cm.startQuest(2070);
            if (qid == 2152) cm.startQuest(2152);
            if (qid == 8050) cm.startQuest(8050);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
