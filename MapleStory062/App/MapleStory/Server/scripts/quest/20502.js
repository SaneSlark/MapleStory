/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20502 蒂蒂安娜的蛋
   开始NPC: 1102002  结束NPC: 1102002
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#p1102002#说骑士骑过#t1902005#并给了#t4220137#。#b他们说如果你分享你的经验，你可以唤醒鸡蛋。 #k……只有这样觉醒#t1902005#的人才会真正追随他们的主人。然后，我们增加#t4220137#。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#t4220137# 醒了。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

