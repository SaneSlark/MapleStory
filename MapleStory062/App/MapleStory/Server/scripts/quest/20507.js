/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20507 骑士的尊严
   开始NPC: 1101002  结束NPC: 1101002
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("天哪...我已经达到了100级，但我还是在正常的#t1902005#上骑行？我的脸感觉很热。只有这样，才能说高级工程师的尊严得到了妥善维护？");
    else if (status == 1) qm.sendNext("我一次又一次地告诉你，你的行为影响了皇后的荣誉。为了皇后，请好好规矩。  如果你去#b#p1102002##k，他会告诉你#b和更强大的骑行#k。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

