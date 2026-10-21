/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 4659 机器人升级！
   开始NPC: 9102001  结束NPC: 
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("悉心照顾小机器人，当宠物的等级达到15级以上时，去找照顾进化宠物的加尔诺斯看看吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

