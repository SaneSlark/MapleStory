/*
   任务脚本 8044 - 罗宾的洗点服务
   客户端「其他」入口: Check.img/8044/0 startscript -> 本脚本 start()
   只做洗点, 不改动任何任务状态
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
        return;
    }
    if (mode == 0) {
        qm.sendOk("好吧。想洗点的时候再来找我，我随时帮您重置能力值。");
        qm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        qm.sendYesNo("洗点会把#b力量、敏捷、智力、运气#k全部重置为#r4#k，并把您之前分配过的#b能力点全部退回#k，之后可以重新分配。身上的装备和道具不会受影响。\r\n\r\n确定要现在洗点吗？");
    } else {
        qm.resetStats();
        qm.sendOk("洗点完成！#b力量、敏捷、智力、运气#k已重置为 #r4#k，能力点全部退回。请按 #bS键#k 打开能力值窗口重新分配。想好转职方向再动手哦。");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
