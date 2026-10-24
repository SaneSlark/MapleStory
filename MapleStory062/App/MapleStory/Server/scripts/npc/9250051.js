/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 9250051
   覆盖任务: 4479, 4480, 4481, 4482
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
    if (cm.getQuestStatus(4479) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "圣诞妈妈的下落" + "#l"; n++; }
    if (cm.getQuestStatus(4480) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "圣诞老人的历史" + "#l"; n++; }
    if (cm.getQuestStatus(4481) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "圣诞袜的秘方" + "#l"; n++; }
    if (cm.getQuestStatus(4482) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "制造自己的圣诞袜" + "#l"; n++; }
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
        if (cm.getQuestStatus(4479) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4479; } }
        if (cm.getQuestStatus(4480) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4480; } }
        if (cm.getQuestStatus(4481) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4481; } }
        if (cm.getQuestStatus(4482) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4482; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 4479) qt = "嗨... 您是刚才问我关于圣诞老人的冒险家... 哼... 你还真不死心... 是吗....?  好吧!";
        if (qid == 4480) qt = "当我和圣诞妈妈提到圣诞老人的详情时, 她居然什么都不想透露! 我看,我干脆去找找看#b圣诞百科全书1#k吧! 带我好好研究后在请教圣诞妈妈吧!";
        if (qid == 4481) qt = "有找到#b锻造介绍书 三#k, 和制作袜子的秘方?  太好了...  您能帮我阅读吗?  我的视力不好..";
        if (qid == 4482) qt = "圣诞妈妈终于找到圣诞袜子框啦!~  我再去问问她!";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 4479) cm.completeQuest(4479);
            if (qid == 4480) cm.completeQuest(4480);
            if (qid == 4481) cm.completeQuest(4481);
            if (qid == 4482) cm.completeQuest(4482);
        } else {
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}




// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":4479,"name":"圣诞妈妈的下落","startNpc":9250051,"endNpc":9250051},{"id":4480,"name":"圣诞老人的历史","startNpc":9250051,"endNpc":9250051},{"id":4481,"name":"圣诞袜的秘方","startNpc":9250051,"endNpc":9250051},{"id":4482,"name":"制作自己的圣诞袜","startNpc":9250051,"endNpc":9250051}];
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
