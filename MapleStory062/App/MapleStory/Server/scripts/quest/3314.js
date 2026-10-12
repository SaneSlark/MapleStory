/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3314 生命炼金，及失踪的炼金术士
   开始NPC: 2111009  结束NPC: 2111009
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("阿卡德诺的#p2111009#。他突然说这段时间我经常帮他的忙，因此想给我一点报酬……虽然有点怀疑，不过还是要往好的方面想。去见见#b#p2111009##k吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

