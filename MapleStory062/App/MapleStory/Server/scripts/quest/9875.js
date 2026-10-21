/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9875 养圣诞树
   开始NPC: 9010000  结束NPC: 2001000
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("据说#b圣诞老人#k正在发放美丽的圣诞树．快去找找看 #b圣诞老人#k噢.");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("据说#b圣诞老人#k正在发放美丽的圣诞树．快去找找看 #b圣诞老人#k噢.");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

