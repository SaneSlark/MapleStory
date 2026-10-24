/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20509 照顾玻璃温室
   开始NPC: 1102002  结束NPC: 1102002
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#p1102001# 提取了 #t1902005#，这是从 #t4220138# 中剥离出来的。但他们说现在骑起来会很困难......");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

