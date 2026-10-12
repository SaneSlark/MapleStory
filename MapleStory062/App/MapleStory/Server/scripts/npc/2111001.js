/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2111001
   覆盖任务: 3304, 3306, 3315, 3316, 3348, 3354, 3355, 3356, 3357, 9879
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
    if (cm.getQuestStatus(3304) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "阿卡德诺披风" + "#l"; n++; }
    if (cm.getQuestStatus(3315) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "麦麦德的考试" + "#l"; n++; }
    if (cm.getQuestStatus(3348) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "为了阿卡德诺" + "#l"; n++; }
    if (cm.getQuestStatus(3354) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "德朗博士的药" + "#l"; n++; }
    if (cm.getQuestStatus(3356) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "德朗博士是谁" + "#l"; n++; }
    if (cm.getQuestStatus(9879) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "??? ??" + "#l"; n++; }
    if (cm.getQuestStatus(3306) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "重新获取阿卡德诺披风" + "#l"; n++; }
    if ((cm.getQuestStatus(3315) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3314) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "麦麦德的考试" + "#l"; n++; }
    if ((cm.getQuestStatus(3316) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3315) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "后街小贩的情报" + "#l"; n++; }
    if ((cm.getQuestStatus(3348) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 75) && (cm.getQuestStatus(3349) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3346) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3347) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "为了阿卡德诺" + "#l"; n++; }
    if ((cm.getQuestStatus(3355) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 75) && (cm.getQuestStatus(3354) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "人造人A的记忆" + "#l"; n++; }
    if ((cm.getQuestStatus(3357) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 75) && (cm.getQuestStatus(3356) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "德朗博士和人造人A" + "#l"; n++; }
    if ((cm.getQuestStatus(3306) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3306) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3349) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3304) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3347) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3348) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1102136, 1))) { opts += "\r\n#L" + n + "#[接受] " + "重新获取阿卡德诺披风" + "#l"; n++; }
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
        if (cm.getQuestStatus(3304) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3304; } }
        if (cm.getQuestStatus(3315) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3315; } }
        if (cm.getQuestStatus(3348) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3348; } }
        if (cm.getQuestStatus(3354) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3354; } }
        if (cm.getQuestStatus(3356) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3356; } }
        if (cm.getQuestStatus(9879) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9879; } }
        if (cm.getQuestStatus(3306) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 3306; } }
        if ((cm.getQuestStatus(3315) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3314) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3315; } }
        if ((cm.getQuestStatus(3316) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 70) && (cm.getQuestStatus(3315) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3316; } }
        if ((cm.getQuestStatus(3348) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 75) && (cm.getQuestStatus(3349) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3346) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3347) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3348; } }
        if ((cm.getQuestStatus(3355) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 75) && (cm.getQuestStatus(3354) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3355; } }
        if ((cm.getQuestStatus(3357) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 75) && (cm.getQuestStatus(3356) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 3357; } }
        if ((cm.getQuestStatus(3306) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED || cm.getQuestStatus(3306) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(3349) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3304) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3347) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.getQuestStatus(3348) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(1102136, 1))) { qi++; if (selection == qi) { qact = 0; qid = 3306; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 3304) qt = "你来是想加入卡帕莱特吗？不知道你来之前是否对卡帕莱特有所了解。卡帕莱特虽然是研究炼金术的学派之一……但是不仅仅研究通过魔法制造新的物质，还进行生命和机械融合的相关研究。你真的想加入卡帕莱特吗？\r\n#b我想加入卡帕莱特。";
        if (qid == 3315) qt = "#o7110301#已经都除掉了啊……我不是对你没有怀疑……不过至少证明了你不是蒙特鸠的人。这就足够了。反正想继续保密已经不可能了……那我就委托你去对#p2111002#进行调查吧。";
        if (qid == 3348) qt = "来，快把#t4161033#给我……";
        if (qid == 3354) qt = "……你为什么会来这里……什么？你见到了#p2111002#的思念？他提到了有关#p2111005#的药的事情……？";
        if (qid == 3356) qt = "快过来。你去见过#p2111003#了吗？他那里有#p2111005#的药吗？……这就是他拿着的药？快给我看看。";
        if (qid == 9879) qt = "?? ???? ??? ?? ?? ??? ????? ??? ??? ????.";
        if (qid == 3306) qt = "既然你把材料都拿来了，我会给你重新发放卡帕莱特披风……但是你要注意。卡帕莱特披风是证明卡帕莱特身份的重要的东西，而且附有特殊的魔法。以后绝对不能弄丢。重新制作只能每3天制作一次。";
        if (qid == 3315) qt = "你是……不久之前刚拿到#t1102136#的年轻炼金术士啊……有什么事吗？是研究的过程中需要帮助吗？嗯？失踪的炼金术士？失踪的炼金术士……的话……是#r#p2111002##k吧。关于他的事情，你知道得越少越好。他曾经做过非常危险的研究……\r\n#b即使知道危险也要追根究底不正是卡帕莱特的炼金术士应有的精神吗？";
        if (qid == 3316) qt = "我并不完全信任你。不过正因为如此，我才能把这件事情托付给你。让你从和蒙特鸠和卡帕莱特任何一方都无关的第三者的视角来审视#p2111002#，对他希望的是什么，他的希望是正当的，还是错误的……作一个判断。";
        if (qid == 3348) qt = "我一直都在等你。等你发现所有的真相……看来你很想知道手上那本#t4161033#的内容……好吧……说不定你真能挖掘出所有关于#p2111002#的、关于#m261000000#的所有真相。";
        if (qid == 3355) qt = "琦尼的药……他是这么说的吧。虽然不知道你见到的那个#p2111002#是不是真的思念……即使是真的，在#p2111002#的实验室里也没有发现什么药。根本没人知道。不过……";
        if (qid == 3357) qt = "……原来如此。果然是这样。呼……这个药确实是为#p2111005#配制的药。吃了这个药，#p2111005#的病应该就能完全好起来。可以想象#p2111002#配制出了药之后会是怎么样的表情。可怜的人……";
        if (qid == 3306) qt = "啊……！表示隶属于阿卡德诺的#t1102136#不见了。这可怎么办呢？去找阿卡德诺的会长#p2111001#看看有什么办法。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 3304) cm.completeQuest(3304);
            if (qid == 3315) cm.completeQuest(3315);
            if (qid == 3348) cm.completeQuest(3348);
            if (qid == 3354) cm.completeQuest(3354);
            if (qid == 3356) cm.completeQuest(3356);
            if (qid == 9879) cm.completeQuest(9879);
            if (qid == 3306) cm.completeQuest(3306);
        } else {
            if (qid == 3315) cm.startQuest(3315);
            if (qid == 3316) cm.startQuest(3316);
            if (qid == 3348) cm.startQuest(3348);
            if (qid == 3355) cm.startQuest(3355);
            if (qid == 3357) cm.startQuest(3357);
            if (qid == 3306) cm.startQuest(3306);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
