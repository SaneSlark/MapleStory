/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20600 永无止境的培训
   开始NPC: 1101002  结束NPC: 1101002
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#h0# 。你不是因为等级超过100就疏于训练了吗？你确实很强，但你的训练还没有结束。以骑士指挥官为榜样。这些人不断接受训练，为成为黑巫师做准备。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

