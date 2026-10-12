/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 4540 葛温的国庆礼物
   开始NPC: 1012106  结束NPC: 1061013
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 0 && status == 1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("这是谁。。。我没见过你。。。　什么？我认识#p9270029#吗? 当然。。他最近好吗？我记得他总是感冒。。。　希望他有好一些。。。");
    else if (status == 1) qm.sendYesNo("你是代表 #p9270029#吗？　你是一个很伟大的枫险玩家…不是吗? 还有药也是。。。 我在冒险时受了一点伤，　不过有了这个药，　我感觉好多了。。。　 嗯, 为了表示我的深切谢意... 请收下。。。这将帮助你庆祝独立日。。。 #b#t1302073# or #t1302074##k...");
    else if (status == 2) qm.sendNext("独立日快乐。。。～！ 希望你喜欢我的礼物！　 我好时候会去拜访 #p9270029#。。。 再次感谢你！");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

