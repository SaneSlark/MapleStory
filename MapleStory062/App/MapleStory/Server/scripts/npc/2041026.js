/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2041026
   覆盖任务: 3248, 3249, 3250, 3444, 3445, 3446
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
    if (cm.getQuestStatus(3444) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "束缚的枷锁" + "#l"; n++; }
    if (cm.getQuestStatus(3445) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "自由的灵魂" + "#l"; n++; }
    if (cm.getQuestStatus(3446) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "灵魂收集器" + "#l"; n++; }
    if (cm.getQuestStatus(3249) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "任务阶段#2: 消灭怪物" + "#l"; n++; }
    if (cm.getQuestStatus(3250) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "任务阶段#3: 可爱的鸟宝宝" + "#l"; n++; }
    if (cm.getQuestStatus(3248) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "任务阶段#1: 聚集怪物蛋" + "#l"; n++; }
    if ((cm.getQuestStatus(3444) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 84)) { opts += "\r\n#L" + n + "#[接受] " + "束缚的枷锁" + "#l"; n++; }
    if ((cm.getQuestStatus(3445) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 62)) { opts += "\r\n#L" + n + "#[接受] " + "自由的灵魂" + "#l"; n++; }
    if ((cm.getQuestStatus(3446) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3446) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 85)) { opts += "\r\n#L" + n + "#[接受] " + "灵魂收集器" + "#l"; n++; }
    if ((cm.getQuestStatus(3249) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3248) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "任务阶段#2: 消灭怪物" + "#l"; n++; }
    if ((cm.getQuestStatus(3250) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3249) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "任务阶段#3: 可爱的鸟宝宝" + "#l"; n++; }
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
        if (cm.getQuestStatus(3444) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3444; } }
        if (cm.getQuestStatus(3445) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3445; } }
        if (cm.getQuestStatus(3446) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3446; } }
        if (cm.getQuestStatus(3249) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3249; } }
        if (cm.getQuestStatus(3250) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3250; } }
        if (cm.getQuestStatus(3248) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3248; } }
        if ((cm.getQuestStatus(3444) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 84)) { qi++; if (selection == qi) { qact = 0; qid = 3444; } }
        if ((cm.getQuestStatus(3445) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 62)) { qi++; if (selection == qi) { qact = 0; qid = 3445; } }
        if ((cm.getQuestStatus(3446) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3446) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 85)) { qi++; if (selection == qi) { qact = 0; qid = 3446; } }
        if ((cm.getQuestStatus(3249) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3248) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3249; } }
        if ((cm.getQuestStatus(3250) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(3249) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3250; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3444) qt = "啊…已经把#t4000148#收集齐了吗？需要至少20个以上才能进行分析，还记得吧？那就让我们看看吧？";
        if (qid == 3445) qt = "呵，确实让它们的灵魂获得自由了吗？完成我说的那些数量了吗？";
        if (qid == 3446) qt = "呃？找回我的灵魂收集器了吗？是那个大海贼偷走的，没错吧？";
        if (qid == 3249) qt = "哇,所有怪兽已消灭? 哇!比我想象中还快. 连我们自己的成员都没有那么快. 太棒了! 非常感谢你! 钟楼现在应该没有怪兽了.";
        if (qid == 3250) qt = "#p2041026# 看起来好忙。他正在努力抚养鸟儿，因为有个公告表示#o5220003#在帕普拉图斯掌握下将会听懂人话。。。。他也给了我一只鸟宝宝,让我也试试抚养后再交回给他。他也说我需要用#b#t4031992##k喂鸟宝宝。#b#t4031992##k能从时间塔的怪物取得。";
        if (qid == 3248) qt = "哇! 你搜集了所有的蛋! 比我想象中还好,太棒了! 你已完成了第一项任务. 继续干点正经事好吗?";
        if (qid == 3444) qt = "啊啊～我正忙着要赶去治疗受伤的灵魂，幽灵的数量越来越多，现在只好求助于我们幽灵猎人了…";
        if (qid == 3445) qt = "问我是谁吗？幽灵猎人 巴柏，就叫我巴柏吧。或许你见过在这里出现的怪物？";
        if (qid == 3446) qt = "又是谁！为什么又趁我不注意的时候偷走我的东西？你能不能帮帮我？";
        if (qid == 3249) qt = "任务 2, 歼灭怪兽! 搜集好了所有的蛋,现在是消灭钟楼内所有怪兽的时间了.怎么样?准备好了吗?";
        if (qid == 3250) qt = "我喂了这只, 那只...我有喂那边那只吗? 还没喂编号3. 来!吃吧！ 他们的嘴巴都张开着,我根本不知道还没喂哪一只... 嘿！你来了!";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3444) cm.completeQuest(3444);
            if (qid == 3445) cm.completeQuest(3445);
            if (qid == 3446) cm.completeQuest(3446);
            if (qid == 3249) cm.completeQuest(3249);
            if (qid == 3250) cm.completeQuest(3250);
            if (qid == 3248) cm.completeQuest(3248);
        } else {
            if (qid == 3444) cm.startQuest(3444);
            if (qid == 3445) cm.startQuest(3445);
            if (qid == 3446) cm.startQuest(3446);
            if (qid == 3249) cm.startQuest(3249);
            if (qid == 3250) cm.startQuest(3250);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
