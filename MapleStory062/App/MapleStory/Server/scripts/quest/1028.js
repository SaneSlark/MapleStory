/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 1028 迈向利斯海港！
   开始NPC: 22000  结束NPC: 1002101
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("听#p12000#的吩咐，想给#p1002101#传话的话，得去维多利亚岛。想去维多利亚岛的话只有给 #m60000#的#p22000#钱一种方法…… 幸好#p12000#已经提前和#p22000#打过招呼了。没什么可担心的，先去#b#p22000##k那儿吧。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

