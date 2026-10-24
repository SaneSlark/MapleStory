/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20527 骑士的尊严
   开始NPC: 1101002  结束NPC: 1101002
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#p1101002#的等级已经达到100，但他表示仍然骑着普通的#t1902005#不符合高级骑士的尊严，并给出了关于怪物骑乘的新信息。  #b 他们说如果你去找骑行教练#p1102002##k，你可以学到更强大的骑行...");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

