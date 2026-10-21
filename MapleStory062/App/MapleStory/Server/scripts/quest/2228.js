/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 2228 里弗的感谢
   开始NPC: 1032108  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#p1032100#和#p1032001#，#m101000000#和#o5220002#。还有里弗……所有的误解好像都解开了。虽然深林的毒森林矮人还在森林各处徘徊……不过#b#p1032108##k应该可以暂时放心了吧？去见见#p1032108#吧。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

