/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20002 培训导师奇库
   开始NPC: 1102000  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("在训练林门口遇到了训练教练#p1102000#。  根据#p1102000#，圣地根本没有怪物，他们与用#p1101001#的力量创造的名为“蒂蒂”的奇幻生物进行训练。同时，#p1102000#给你药剂......");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

