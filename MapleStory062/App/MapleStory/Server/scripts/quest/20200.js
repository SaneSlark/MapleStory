/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20200 工程师培训结束
   开始NPC: 1101002  结束NPC: 1101002
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#h0#先生？你的水平已经提升到无法想象的地步了。看起来你已经完成了很多任务……我认为你已经达到了要求。参加#b骑士等级测试#k怎么样？现在你也必须从见习骑士转变为正式的骑士。不是吗？");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

