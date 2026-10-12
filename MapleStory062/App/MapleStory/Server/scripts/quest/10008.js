/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10008 有关头目M的情报
   开始NPC: 9000033  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("搜集到了5个碟报文件。但是工作人员C到底在哪里呢？");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

