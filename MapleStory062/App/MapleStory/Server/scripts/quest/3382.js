/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3382 犹泰的报答
   开始NPC: 2112014  结束NPC: 2112014
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("不被认可的天才炼金术士#b#p2112014##k……他的话，会知道#t4001159#和#t4001160#的用途吗？去见见#p2112014#吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

