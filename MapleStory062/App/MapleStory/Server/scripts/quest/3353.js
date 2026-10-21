/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3353 德朗博士所希望的
   开始NPC: 2111006  结束NPC: 2111002
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("不小心进入了#m261020401#地区……唠唠叨叨的幽灵#b#p2111006##k过来和我说话。不太想听他唠叨……该怎么办呢？");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

