/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 2081013
   覆盖任务: 20405
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
    if ((cm.getQuestStatus(20405) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 120) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20404) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "\u9ed1\u5973\u5deb\u7684\u6d1e\u7a74" + "#l"; n++; }
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
        if ((cm.getQuestStatus(20405) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 120) && ((cm.getJob().getId() == 1100 || cm.getJob().getId() == 1110 || cm.getJob().getId() == 1111 || cm.getJob().getId() == 1112 || cm.getJob().getId() == 1200 || cm.getJob().getId() == 1210 || cm.getJob().getId() == 1211 || cm.getJob().getId() == 1212 || cm.getJob().getId() == 1300 || cm.getJob().getId() == 1310 || cm.getJob().getId() == 1311 || cm.getJob().getId() == 1312 || cm.getJob().getId() == 1400 || cm.getJob().getId() == 1410 || cm.getJob().getId() == 1411 || cm.getJob().getId() == 1412 || cm.getJob().getId() == 1500 || cm.getJob().getId() == 1510 || cm.getJob().getId() == 1511 || cm.getJob().getId() == 1512)) && (cm.getQuestStatus(20404) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 20405; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 20405) qt = (qact == 1 ? "洞穴的一面墙上贴着一张便条。看完内容，好像留下了#p1103000#。没有找到诅咒的对象，但是找到了诅咒工具。取回它并将其运送到埃雷布鲁……我想这一步已经太晚了。  #p1103000# 似乎已经完成了它的使命。我们去埃雷布鲁吧。" : "洞穴的一面墙上贴着一张便条。看完内容，好像留下了#p1103000#。没有找到诅咒的对象，但是找到了诅咒工具。取回它并将其运送到埃雷布鲁……我想这一步已经太晚了。  #p1103000# 似乎已经完成了它的使命。  我们去 #b 圣地 #k。");
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
        } else {
            if (qid == 20405) cm.startQuest(20405);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
