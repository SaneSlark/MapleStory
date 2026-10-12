/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 4490 比休的雪人
   开始NPC: 9250054  结束NPC: 9250054
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("在温馨小镇的比休在制造雪人的途中显得有些疲累... 他好像正在寻找他人帮助...");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("在温馨小镇的比休在制造雪人的途中显得有些疲累... 他好像正在寻找他人帮助...");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

