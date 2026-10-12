/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10216 佳佳的分析
   开始NPC: 9010010  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("搜集 #t4001239# 送给琦仙灵");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

