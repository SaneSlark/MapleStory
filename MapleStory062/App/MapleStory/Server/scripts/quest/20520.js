/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20520 骑士尊严
   开始NPC: 1101002  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#p1101002#给出了关于怪物骑乘的信息，说即使他已经达到50等级，走路也不符合骑士的尊严。按照他的说法，好像只有骑士才有骑术……");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

