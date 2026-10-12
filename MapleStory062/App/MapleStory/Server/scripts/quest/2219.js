/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 2219 冬青的情报
   开始NPC: 1052006  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("根据#t4031894#上的情报，#p1052006#好像也是吉姆所说的情报员之一。去见见#b#p1052006##k吧。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

