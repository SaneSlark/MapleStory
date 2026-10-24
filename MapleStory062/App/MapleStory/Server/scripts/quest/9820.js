/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9820 卡桑德拉的儿童节礼物
   开始NPC: 9010010  结束NPC: 9010010
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 0 && status == 1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("哦，我太疯狂了。为了庆祝今年再次到来的儿童节，健太邀请孩子们去水族馆动物园。");
    else if (status == 1) qm.sendYesNo("所以，我正忙着给孩子们发送请柬，但有一个孩子把请柬弄丢了……这可是一件大事。到时候可以请您找回我孩子丢失的邀请函吗？");
    else if (status == 2) qm.sendNext("丢失邀请函的孩子是#b#p1052106##k，家住广州市。停止 #r 我去了现金商店 #k 并丢失了我的邀请。 #p1052106#，正在心灰意冷的你，可以去现金店找#b#t4031625##k吗？");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

