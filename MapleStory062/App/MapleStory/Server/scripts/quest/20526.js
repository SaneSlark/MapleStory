/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20526 重新生长蒂蒂安娜
   开始NPC: 1102002  结束NPC: 1102002
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#t1902005#是幻想生物，离开主人超过一定时间，就会自然消失。想再次拥有#t1902005#，#b就必须重新从蛋里唤醒它#k。虽然#p1102002#会代为购买营养剂，但费用仍要重新支付……没办法，努力积累经验，再次唤醒#t1902005#吧。&#xD;&#xA;&#xD;&#xA;#b10,000,000金币#k");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#t1902005#又被吵醒了。小心不要再次丢失。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

