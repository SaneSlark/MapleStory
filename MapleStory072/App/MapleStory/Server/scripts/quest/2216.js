/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 2216 权达开的情报
   开始NPC: 9000008  结束NPC: 
   ============================================================ */
var status = -1;
var startClosed = false;

function start(mode, type, selection) {
    if (startClosed) return;
    if (mode == -1) { startClosed = true; qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { startClosed = true; qm.dispose(); return; }
    if (status == 0) qm.sendNext("根据#t4031894#上的情报，#p9000008#好像也是吉姆所说的情报员之一。去见见#b#p9000008##k吧。");
    else {
        startClosed = true;
        qm.startQuestInScript(qm.getQuest());
        qm.dispose();
    }
}

