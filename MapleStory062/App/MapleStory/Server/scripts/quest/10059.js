/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10059 佳佳最喜欢的歌曲
   开始NPC: 9000021  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("一卷侥幸得来的偶像卡带… 我该怎么处理呢?");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

