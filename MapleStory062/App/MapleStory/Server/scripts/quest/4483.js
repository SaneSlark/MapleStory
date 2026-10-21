/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 4483 挂上圣诞袜!
   开始NPC: 9250053  结束NPC: 9250053
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("我好高兴我有圣诞袜了呀!  根据圣诞妈妈, 圣诞老人对温馨小镇所出产的圣诞袜情有独钟~  我现在该做的, 当然是把圣诞袜挂在显眼的地方了! 圣诞老人。.快来哦~~.");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

