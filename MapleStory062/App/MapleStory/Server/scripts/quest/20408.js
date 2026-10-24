/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20408 女皇的骑士指挥官
   开始NPC: 1101000  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("我收到了年轻皇后对您所做工作的感谢。她告诉我，为了表彰你在这件事上的努力、成就和贡献，她将任命你为新的骑士长……骑士长？");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

