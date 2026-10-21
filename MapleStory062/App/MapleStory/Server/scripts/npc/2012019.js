/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2012019
   覆盖任务: 2123, 2124, 2125, 2126, 3053, 3055, 3056, 3058, 3059, 3060, 3061, 3062
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
    if (cm.getQuestStatus(2123) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "特别委托" + "#l"; n++; }
    if (cm.getQuestStatus(2125) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "特别委托！" + "#l"; n++; }
    if (cm.getQuestStatus(3055) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "妖精的号角 Ⅱ" + "#l"; n++; }
    if (cm.getQuestStatus(3058) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "莉萨的特殊治疗剂Ⅲ" + "#l"; n++; }
    if (cm.getQuestStatus(3060) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "为波达猎取食物" + "#l"; n++; }
    if (cm.getQuestStatus(3061) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "为波达猎取食物Ⅱ" + "#l"; n++; }
    if (cm.getQuestStatus(3062) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "为波达猎取食物Ⅲ" + "#l"; n++; }
    if ((cm.getQuestStatus(2124) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2123) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "沙漠小队的补给品" + "#l"; n++; }
    if ((cm.getQuestStatus(2126) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2125) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "沙漠小队的补给品" + "#l"; n++; }
    if ((cm.getQuestStatus(3053) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30)) { opts += "\r\n#L" + n + "#[接受] " + "寂寞的波达" + "#l"; n++; }
    if ((cm.getQuestStatus(3056) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3055) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "莉萨的特殊治疗剂" + "#l"; n++; }
    if ((cm.getQuestStatus(3059) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3058) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "波达的请求" + "#l"; n++; }
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
        if (cm.getQuestStatus(2123) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2123; } }
        if (cm.getQuestStatus(2125) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2125; } }
        if (cm.getQuestStatus(3055) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3055; } }
        if (cm.getQuestStatus(3058) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3058; } }
        if (cm.getQuestStatus(3060) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3060; } }
        if (cm.getQuestStatus(3061) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3061; } }
        if (cm.getQuestStatus(3062) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3062; } }
        if ((cm.getQuestStatus(2124) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2123) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2124; } }
        if ((cm.getQuestStatus(2126) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2125) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2126; } }
        if ((cm.getQuestStatus(3053) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30)) { qi++; if (selection == qi) { qact = 0; qid = 3053; } }
        if ((cm.getQuestStatus(3056) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3055) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3056; } }
        if ((cm.getQuestStatus(3059) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3058) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3059; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2123) qt = "汪汪！！（开心地摇着尾巴。）";
        if (qid == 2125) qt = "汪汪！！（开心地摇着尾巴。）";
        if (qid == 3055) qt = "汪汪...汪汪汪？？";
        if (qid == 3058) qt = "汪汪? 嗯? 难道你是为了治疗我的伤口所以回来的吗？或许，你带来了莉萨的特殊治疗剂？那就请你擦在我的伤口上吧？";
        if (qid == 3060) qt = "我的主人过得平安无事吗？汪~ 那太好了！";
        if (qid == 3061) qt = "汪~ 我的主人又让你送来了啊？汪~ 忙着研究还不忘惦记我呢啊....啊呜~呜~呜~";
        if (qid == 3062) qt = "又是鱼！汪~ 我的主人又让你送来了？真希望他不要那么专注于研究.. 汪~ 虽然能够明白主人想我的心情…";
        if (qid == 2124) qt = "汪！汪汪！（莫皮的脖子上似乎挂着一个小盒子。）\r\n #b查看盒子。";
        if (qid == 2126) qt = "汪！汪汪！(莫皮的脖子上似乎挂着一个小盒子。)\r\n #b观察一下盒子。";
        if (qid == 3053) qt = "汪~汪汪~汪汪汪汪~…呜~~~\r\n#b汪~汪汪~汪汪汪汪~ 呜~~~\r\n 什么？我很想帮助你呀#k";
        if (qid == 3056) qt = "听见我说什么了吗？我说的？汪~ 好像一直听不懂我说的话，真麻烦。汪~我的主人很喜欢研究，因为有重要的研究，所以离开家了。啊呜~呜~呜~ 他说马上就会回来让我乖乖等着.. 汪~ 今天也在这里等我的主人，可是还不回来.. 呜~~\r\n#b不要在这里这样干等着，还是回家去吧。\r\n怎么了？哪里疼吗？受伤了吗？#k";
        if (qid == 3059) qt = "我的主人有没有平安的躲过那些可怕的怪物呢？汪~ 说是要去研究，已经离开很长的一段时间了。那么疼我的主人怎么会这么长时间没有来一点消息呢...";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2123) cm.completeQuest(2123);
            if (qid == 2125) cm.completeQuest(2125);
            if (qid == 3055) cm.completeQuest(3055);
            if (qid == 3058) cm.completeQuest(3058);
            if (qid == 3060) cm.completeQuest(3060);
            if (qid == 3061) cm.completeQuest(3061);
            if (qid == 3062) cm.completeQuest(3062);
        } else {
            if (qid == 2124) cm.startQuest(2124);
            if (qid == 2126) cm.startQuest(2126);
            if (qid == 3053) cm.startQuest(3053);
            if (qid == 3056) cm.startQuest(3056);
            if (qid == 3059) cm.startQuest(3059);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
