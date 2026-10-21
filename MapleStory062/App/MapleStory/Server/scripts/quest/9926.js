/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9926 不给糖的话我就捣蛋！
   开始NPC: 2121012  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("清明踏青舞会的话，应该不可能不遭人捣蛋就过去……忐忑不安。慢慢等着吧。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

