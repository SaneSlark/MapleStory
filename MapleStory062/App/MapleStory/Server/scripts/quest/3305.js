/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3305 重新获取杰努麦斯披风
   开始NPC: 2111000  结束NPC: 2111000
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#t1102135#弄丢了。如果没有了他的话，其他人就无法知道自己是隶属于杰努麦斯了，怎么办呢？去找杰努麦斯的会长#b#p2111000##k看看有什么办法。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

