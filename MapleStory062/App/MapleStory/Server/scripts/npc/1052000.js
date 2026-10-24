/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1052000
   覆盖任务: 2014, 2016, 9851
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
    if (cm.getQuestStatus(2016) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "母亲的金表" + "#l"; n++; }
    if (cm.getQuestStatus(9851) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u6cbc\u6cfd\u4e2d\u7684\u86c7\u6d1e" + "#l"; n++; }
    if ((cm.getQuestStatus(2014) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20)) { opts += "\r\n#L" + n + "#[接受] " + "阿勒斯的拜托" + "#l"; n++; }
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
        if (cm.getQuestStatus(2016) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2016; } }
        if (cm.getQuestStatus(9851) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9851; } }
        if ((cm.getQuestStatus(2014) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20)) { qi++; if (selection == qi) { qact = 0; qid = 2014; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2016) qt = "啊！你真的说服我爸爸了？真是难以相信。我爸爸可是老顽固啊？你真了不起啊！！！ 啊。。。现在我终于可以结束流浪的生活了。太谢谢你了。";
        if (qid == 9851) qt = (qact == 1 ? "嗯...你觉得怎么样？你对《蛇穴》有什么看法？你能相信亚历克斯现在说的话吗？沼泽中有一个蛇洞。明显地。" : "#b#p1052000##k 很惊讶地看到蛇洞并告诉他的朋友，但没有人相信他，他很生气并说他们称他为胆小鬼。 ...唔。事实上，确实有点难以置信。说着，亚历克斯突然把他转移到了沼泽地的一个蛇洞里，让他亲眼所见，抓住少年内基50！ \r\n\r\n#o2130103# #r#a98511##k");
        if (qid == 2014) qt = "嗯…喂!听我说。几天前因为实在受不了我爸爸，我就离家出走了。所以这样彷徨在这#m103000000#里。但是这样的生活也越来越无聊了...在家拿来的钱也都快花完了…现在想起来好像离家出走的错的。";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2016) cm.completeQuest(2016);
            if (qid == 9851) cm.completeQuest(9851);
        } else {
            if (qid == 2014) cm.startQuest(2014);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}
