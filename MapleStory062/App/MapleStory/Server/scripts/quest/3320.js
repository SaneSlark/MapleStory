/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3320 琶尔文知道的事情
   开始NPC: 2111006  结束NPC: 2111002
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#p2111006#看到的炼金术士是不是就是失踪的炼金术士#r#p2111002##k？去见见#b#p2111006##k吧。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

