/* ============================================================
   自动生成NPC任务接线脚本 - 重新生成会被覆盖
   NPC: 1012106
   覆盖任务: 2062, 2063, 2076, 2154, 2184, 2185, 4518, 4519, 4539, 4540, 9330, 9522, 9523, 9527, 9868, 9869, 9873
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
    if (cm.getQuestStatus(2062) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "明明女士的第一个担心" + "#l"; n++; }
    if (cm.getQuestStatus(2076) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "胡小姐的特制酱油" + "#l"; n++; }
    if (cm.getQuestStatus(2184) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "黑巴克的忧虑" + "#l"; n++; }
    if (cm.getQuestStatus(4518) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "药的制造过程" + "#l"; n++; }
    if (cm.getQuestStatus(4539) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "药的制造过程" + "#l"; n++; }
    if (cm.getQuestStatus(9873) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "想吃西瓜的明明女士" + "#l"; n++; }
    if (cm.getQuestStatus(9330) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u660e\u660e\u592b\u4eba\u7684\u796d\u7940\u684c" + "#l"; n++; }
    if (cm.getQuestStatus(9522) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u505a\u9b3c\u88c5!" + "#l"; n++; }
    if (cm.getQuestStatus(9523) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u505a\u9b3c\u88c5!" + "#l"; n++; }
    if (cm.getQuestStatus(9868) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { opts += "\r\n#L" + n + "#[完成] " + "\u660e\u660e\u592a\u592a\u7684\u89e3\u836f" + "#l"; n++; }
    if ((cm.getQuestStatus(2062) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20)) { opts += "\r\n#L" + n + "#[接受] " + "明明女士的第一个担心" + "#l"; n++; }
    if ((cm.getQuestStatus(2063) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 21) && (cm.getQuestStatus(2062) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "明明女士的第二个担心" + "#l"; n++; }
    if ((cm.getQuestStatus(2154) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20) && (cm.getQuestStatus(2153) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "故事的主人公" + "#l"; n++; }
    if ((cm.getQuestStatus(2185) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2184) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { opts += "\r\n#L" + n + "#[接受] " + "为了凯伊琳准备的礼服" + "#l"; n++; }
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
        if (cm.getQuestStatus(2062) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2062; } }
        if (cm.getQuestStatus(2076) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2076; } }
        if (cm.getQuestStatus(2184) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 2184; } }
        if (cm.getQuestStatus(4518) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4518; } }
        if (cm.getQuestStatus(4539) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 4539; } }
        if (cm.getQuestStatus(9873) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9873; } }
        if (cm.getQuestStatus(9330) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9330; } }
        if (cm.getQuestStatus(9522) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9522; } }
        if (cm.getQuestStatus(9523) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9523; } }
        if (cm.getQuestStatus(9868) == net.sf.odinms.client.MapleQuestStatus.Status.STARTED) { qi++; if (selection == qi) { qact = 1; qid = 9868; } }
        if ((cm.getQuestStatus(2062) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20)) { qi++; if (selection == qi) { qact = 0; qid = 2062; } }
        if ((cm.getQuestStatus(2063) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 21) && (cm.getQuestStatus(2062) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2063; } }
        if ((cm.getQuestStatus(2154) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getLevel() >= 20) && (cm.getQuestStatus(2153) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2154; } }
        if ((cm.getQuestStatus(2185) == net.sf.odinms.client.MapleQuestStatus.Status.NOT_STARTED) && (cm.getQuestStatus(2184) == net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED)) { qi++; if (selection == qi) { qact = 0; qid = 2185; } }
        if (qact == -1) { cm.dispose(); return true; }
        if (qid == 2062) qt = "哟。。。很感谢你为我收集了这么多东西。现在我才可以装饰我们村落。但我要做的还没结束。希望你以后有空再来帮我。";
        if (qid == 2076) qt = "你回来了。很辛苦吧？因为要做节日菜，我也很忙啊。看来你确实收集齐了#b20个#t4000017#,60个#t4000006#和一个#t4031154##k啊。我果然还是有眼力啊！";
        if (qid == 2184) qt = "已经从黑巴克那里听说了。呼~我最近都在准备庆典实在是很忙，如果不是老朋友的话就拒绝了……";
        if (qid == 4518) qt = "好了！你带齐了制作这药所需要的一切。等等，我马上完成它。";
        if (qid == 4539) qt = "好。。。您已经拥有所有需要的药品。。　 等等。。。 我马上就去做。";
        if (qid == 9873) qt = "可能是因为天气太热，节日准备工作是在太累了。啊！您说给我送来了礼物？";
        if (qid == 9330) qt = "\u6211\u63a5\u5230\u4e86 \u5192\u9669\u5c9b \u63a5\u7ebf\u5458\u6253\u6765\u7684\u7535\u8bdd\u3002\u4f60\u5e26\u6765\u4e86\u6211\u8981\u7684\u4e1c\u897f\uff0c\u5bf9\u5417\uff1f\u6211\u5f88\u9ad8\u5174\u3002\u56e0\u4e3a\u627e\u4e0d\u5230\u6c34\u679c\uff0c\u6240\u4ee5\u65e0\u6cd5\u51c6\u5907\u796d\u7940\u684c\u3002\u8fd9\u5c06\u4f1a\u6709\u5f88\u5927\u7684\u5e2e\u52a9\u3002";
        if (qid == 9522) qt = "\u6240\u4ee5\u4f60\u8bf4\u4f60\u6b63\u5728\u5bfb\u627e\u6750\u6599\u6765\u5236\u4f5c\u8863\u670d\u5206\u53d1\u7ed9\u5b69\u5b50\u4eec\uff1f\u4f60\u89c9\u5f97\u5b69\u5b50\u4eec\u771f\u7684\u4f1a\u559c\u6b22\u5417\uff1f\u8bf7\u7ed9\u6211\u6750\u6599\uff0c\u4ee5\u4fbf\u6211\u505a\u8863\u670d\u3002";
        if (qid == 9523) qt = (qact == 1 ? "嘿~我要的东西你已经收集到了吗？实在是太奇妙了~" : "你又来了。我还没有足够的衣服给孩子们穿。你能帮助我吗？");
        if (qid == 9868) qt = (qact == 1 ? "天哪，我找到了所有的成分。那么请稍等一下。我马上去配药。" : "你就是#p1022007#所说的那个人吗？我正在等待。  #p1022007# 我提到的药物快准备好了...但是...我突然在准备，所以我的药物用完了...对不起，你能给我一些材料吗？");
        if (qid == 2062) qt = "你好。我是#b#p1012106##k。嗯？你说我为什么这忙？其实我们村的节日快到了。要准备得东西太多，但没有人帮我。你会不会帮我？";
        if (qid == 2063) qt = "哎。。。你又来了。你收集来的装饰品已经被妥善处理。我们村落的节日快到了，但现在又有新的问题。怎么样？想听我说说吗？";
        if (qid == 2154) qt = "正忙着准备庆典所以就简单说吧……什么？阿洛伊爷爷？是不是他又闯什么祸了？哎……虽说健康但经常出海且闯祸……";
        if (qid == 2185) qt = "喏~这个基本的框架事先都做好了，所以很快就能做完了。你能把这件礼服转交给黑巴克嘛？也转告他以后会大方的拿小费的。呵呵呵~";
        if (qact == 1) cm.sendNext(qt);
        else cm.sendYesNo(qt);
        return true;
    }
    if (qstatus >= 1) {
        if (qact == 1) {
            if (qid == 2062) cm.completeQuest(2062);
            if (qid == 2076) cm.completeQuest(2076);
            if (qid == 2184) cm.completeQuest(2184);
            if (qid == 4518) cm.completeQuest(4518);
            if (qid == 4539) cm.completeQuest(4539);
            if (qid == 9873) cm.completeQuest(9873);
            if (qid == 9330) cm.completeQuest(9330);
            if (qid == 9522) cm.completeQuest(9522);
            if (qid == 9523) cm.completeQuest(9523);
            if (qid == 9868) cm.completeQuest(9868);
        } else {
            if (qid == 2062) cm.startQuest(2062);
            if (qid == 2063) cm.startQuest(2063);
            if (qid == 2154) cm.startQuest(2154);
            if (qid == 2185) cm.startQuest(2185);
        }
        cm.dispose();
        return true;
    }
    cm.dispose();
    return true;
}




// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":9330,"name":"明明夫人的祭祀桌","startNpc":9010000,"endNpc":1012106},{"id":9522,"name":"做鬼装!","startNpc":9010000,"endNpc":1012106},{"id":9523,"name":"做鬼装!","startNpc":1012106,"endNpc":1012106},{"id":9527,"name":"万圣节糖果派送！！","startNpc":1012106,"endNpc":1040000}];
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
