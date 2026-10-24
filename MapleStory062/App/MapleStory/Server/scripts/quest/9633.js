/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9633 提奥旧日回忆II
   开始NPC: 1002001  结束NPC: 1002001
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 0 && status == 0) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendYesNo("已经有一段时间了。你的冒险经历如何？看到你成长了这么多，我感到非常自豪。我想测试一下你的实力到底有多强。你想尝试一下吗？");
    else if (status == 1) qm.sendNext("好的。然后，集齐#b#t04000024# 80 #k和#b#t04000020# 100 #k，那我就承认你真的变强了。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

