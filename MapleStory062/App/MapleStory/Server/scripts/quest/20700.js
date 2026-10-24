/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20700 我们能这样离开吗?
   开始NPC: 1101002  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#p1101002#说自己虽然成为了骑士，但是还不够优秀，不能派出去执行这样的任务，让他多加训练。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

