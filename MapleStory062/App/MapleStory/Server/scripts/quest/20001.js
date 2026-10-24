/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20001 骗子九心
   开始NPC: 1101002  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#p1101002#说你实力太弱，无法争夺元极湖界，还不能被任命为见习骑士，所以他让你先变强。成为见习工程师的培训已经准备好了，所以我想你可以去培训讲师#b和培训讲师#p1102000##k。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

