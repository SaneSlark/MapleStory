/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9943 忘却的名字
   开始NPC: 2120000  结束NPC: 2120007
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("拿到#p2120005#的#t4031837#之后，#r#p2120000##k静静地看着娃娃……眼神看上去有点阴沉。他用娃娃来做什么呢？");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

