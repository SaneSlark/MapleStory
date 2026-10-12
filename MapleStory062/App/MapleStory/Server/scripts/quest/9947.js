/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9947 我会归还那个洋娃娃。
   开始NPC: 2120004  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("洋娃娃的制作实在是太难了。 我还是把这些布制娃娃归还给乔纳斯吧。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

