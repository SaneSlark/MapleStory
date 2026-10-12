/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1052102
   覆盖任务: 2055, 2056, 2057, 2217
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
    if (cm.getQuestStatus(2055) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "休咪丢失的钱团" + "#l"; n++; }
    if (cm.getQuestStatus(2056) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "休咪丢失的钞票" + "#l"; n++; }
    if (cm.getQuestStatus(2057) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "休咪丢失的钱包" + "#l"; n++; }
    if ((cm.getQuestStatus(2055) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20)) { opts += "\r\n#L" + n + "#[接受] " + "休咪丢失的钱团" + "#l"; n++; }
    if ((cm.getQuestStatus(2056) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(2055) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "休咪丢失的钞票" + "#l"; n++; }
    if ((cm.getQuestStatus(2057) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 40) && (cm.getQuestStatus(2056) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "休咪丢失的钱包" + "#l"; n++; }
    if ((cm.getQuestStatus(2217) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2214) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031894, 1))) { opts += "\r\n#L" + n + "#[接受] " + "休咪的情报" + "#l"; n++; }
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
        if (cm.getQuestStatus(2055) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2055; } }
        if (cm.getQuestStatus(2056) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2056; } }
        if (cm.getQuestStatus(2057) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2057; } }
        if ((cm.getQuestStatus(2055) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20)) { qi++; if (selection == qi) { qact = 0; qid = 2055; } }
        if ((cm.getQuestStatus(2056) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 30) && (cm.getQuestStatus(2055) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2056; } }
        if ((cm.getQuestStatus(2057) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 40) && (cm.getQuestStatus(2056) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2057; } }
        if ((cm.getQuestStatus(2217) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2214) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) && (cm.haveItem(4031894, 1))) { qi++; if (selection == qi) { qact = 0; qid = 2217; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2055) qt = "对！是这个！这个枫币跟一般的枫币不同。因为这个枫币的制造日期就是我朋友的生日！就是说，这个枫币是跟我的朋友一起诞生的。什么？制造日期在哪里？你眼力不太好呀~ 再看仔细吧！这里有啊！";
        if (qid == 2056) qt = "啊！那不是我丢的钞票吗？太好了~！有了这些钱，我就可以付这个月的房租呀~！嗯？怎么知道就是我丢的钞票？看这里！有我名字，看不见？你不会真的需要眼镜吧？";
        if (qid == 2057) qt = "啊！那就是我弄丢的钱包呀！哈～太好了。我就知道你一定能找到，你好厉害。你没拿走钱吧？让我看看。虽然我怀疑你，但是还要数数。一，二，三，四…...可能对吧。";
        if (qid == 2055) qt = "稍等！ 你有没有在这里看见过一个枫币？这怎么办...我把还给朋友的枫币放在口袋里。但是在地铁站弄丢了。这非常重要，否则在朋友面前就没有面子了。不好意思，你可以替我找枫币吗？";
        if (qid == 2056) qt = "哟！你来得正好~ 我等你好久了。又出了点问题，这次我弄丢的不是一个枫币，而是钞票。我在做别的事的时候，#o2300100#抢走了我的钞票。怎么样？你可以帮我吗？";
        if (qid == 2057) qt = "我等你多时了~！什么？我又弄丢了钱？对了！而且这次我弄丢的钱挺多的。有人托我买100个#t2000004# 。那么多钱口袋里放不下，所以防在钱包里。但是在某个地方暂时休息的时候，地下突然出现一个洞，钱包掉下去了。你可以帮我找回来吗？";
        if (qid == 2217) qt = "根据#t4031894#上的情报，#p1052102#好像也是吉姆所说的情报员之一。去见见#b#p1052102##k吧。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2055) cm.completeQuest(2055);
            if (qid == 2056) cm.completeQuest(2056);
            if (qid == 2057) cm.completeQuest(2057);
        } else {
            if (qid == 2055) cm.startQuest(2055);
            if (qid == 2056) cm.startQuest(2056);
            if (qid == 2057) cm.startQuest(2057);
            if (qid == 2217) cm.startQuest(2217);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
