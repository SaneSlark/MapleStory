/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 4482 制造自己的圣诞袜
   开始NPC: 9250051  结束NPC: 9250051
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("圣诞妈妈终于找到圣诞袜子框啦!~  我再去问问她!");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("圣诞妈妈终于找到圣诞袜子框啦!~  我再去问问她!");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

