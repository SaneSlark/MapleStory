/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9252 ???? (11? 25?)
   开始NPC: 9010008  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#p9010000##k? ????? ????? ??. ? ?? ?? ?? ?? ??? ??? ????");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

