/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10224 星星节
   开始NPC: 9010010  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("枫叶的激动人心的节日，像夜空中的星星一样闪闪发光！都说如果你珍惜大王星，久而久之就会有1颗星星出现在你的怀里……");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

