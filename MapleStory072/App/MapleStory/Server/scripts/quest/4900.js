/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 4900 新叶城问答大赛·第1问
   开始NPC: 9201050  结束NPC: 9201050
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("让我们来解答艾斯伯德·斯林的第1问吧。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

