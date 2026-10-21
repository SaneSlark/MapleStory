/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 2197 怪物手册营业员特安可
   开始NPC: 2006  结束NPC: 2006
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#m104000000#到达后马上去找啰嗦的营业员#b#p0002006##k吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

