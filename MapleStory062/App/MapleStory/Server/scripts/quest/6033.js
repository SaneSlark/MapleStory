/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 6033 莫力恩的第二次教导
   开始NPC: 2110004  结束NPC: 2110004
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("现在对物品制作好像熟悉一些了。看到我的手艺的话，莫力恩也会吃惊的。刚好收到了莫力恩的联系，说如果去玛嘉提亚的话，就顺便去见见他。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

