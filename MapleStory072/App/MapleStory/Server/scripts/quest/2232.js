/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 2232 抢先登录为同学吧！
   开始NPC: 1002103  结束NPC: 
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b阿尔领袖#k说如果对冒险学院的活动感兴趣的话，可以去找他。去#b利斯海港#k和#b天空之城公园#k见见阿尔领袖吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

