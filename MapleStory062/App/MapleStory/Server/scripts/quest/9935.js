/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9935 苏菲莉亚的眼泪
   开始NPC: 2120005  结束NPC: 2120005
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("听从#p2120005#的请求，在住宅里四处寻找她认识的人。但是记得#p2120005#的人都不愿意去看望#p2120005#……怎么办呢……去见见#b#p2120005##k吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

