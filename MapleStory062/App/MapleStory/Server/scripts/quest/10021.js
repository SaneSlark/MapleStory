/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10021 你是真正的特殊工作人员！
   开始NPC: 9000021  结束NPC: 9000021
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("啊！#b#h0# 工作人员！#k看你身上的衣服，你好像在很认真地执行特殊工作人员的任务。但是你不觉得现在有什么部分有些不足吗？");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

