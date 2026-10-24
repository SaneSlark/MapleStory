/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9893 卡桑德拉的魔法
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("我终于做到了。听说你修炼了新魔法！我真的太棒了不是吗？");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

