/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3306 重新获取阿卡德诺披风
   开始NPC: 2111001  结束NPC: 2111001
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("啊……！表示隶属于阿卡德诺的#t1102136#不见了。这可怎么办呢？去找阿卡德诺的会长#p2111001#看看有什么办法。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

