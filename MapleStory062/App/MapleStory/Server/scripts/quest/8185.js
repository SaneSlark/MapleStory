/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 8185 宠物的进化2
   开始NPC: 9102001  结束NPC: 
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("证明了对宝贝龙的心意，但若想要让宝贝龙进化，需要一些特殊的材料…");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

