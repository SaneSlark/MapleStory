/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9747 情侣黑巧克力！！
   开始NPC: 2012010  结束NPC: 2020006
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#p2020006#的脸色顿时沉了下来。这不是一个被破坏的角色...#p2012010#的请求对#p2020006#不起作用...我认为它只给我带来了快乐。 #p2020006# 以后会更加努力地寻找海拉吗？");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

