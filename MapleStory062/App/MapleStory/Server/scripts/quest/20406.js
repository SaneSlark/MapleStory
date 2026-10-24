/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20406 失落的骑士
   开始NPC: 1101002  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("我试图向#p1101002#抱怨我的努力白费了，但他说#p1103000#没有回来，肯定有什么奇怪的。再次请大家去洞穴#b#o9001010#和#k看看还有没有其他帖子...");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

