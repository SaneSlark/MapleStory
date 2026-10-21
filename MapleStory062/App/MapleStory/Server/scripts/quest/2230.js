/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 2230 神秘小蛋
   开始NPC: 1032102  结束NPC: 1032102
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("有人在叫我。.迷蒙的眼睛，紫色的头大。. 会是谁呢？");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

