/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3933 阿丁的沙子图团
   开始NPC: 2101003  结束NPC: 2101003
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("通过了#p2101003#的所有考验。现在可以成为沙子图团员了吧？去找#p2101003#问问吧。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

