/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20500 骑士尊严
   开始NPC: 1101002  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("你已经达到50级了。但是你还在这样做吗？你虽然达到了那个层次，但是你还是用自己的两只脚走路。距离骑士的尊严还差得很远。");
    else if (status == 1) qm.sendNext("好吧，你的尊严是好的，但再这样下去，会损害皇后的声誉，所以我告诉你一些新的信息。这是关于#b怪物骑术#k的信息。你当然感兴趣，对吧？");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

