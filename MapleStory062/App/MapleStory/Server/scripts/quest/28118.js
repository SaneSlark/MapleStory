/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 28118 4周年纪念蛋糕
   开始NPC: 9000021  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#r枫险之旅4周年纪念#k庆祝蛋糕已全完成！快把蛋糕拿给\n#b#p9000021##k！");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

