/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 2148 传闻的真相-酋长
   开始NPC: 1020000  结束NPC: 1020000
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("什么事？\r\n#b听说过鬼树吗？");
    else if (status == 1) qm.sendNext("鬼树？啊，是说那个很久以前消失的木妖吗？父亲的父亲小时候听说过这种树。据传闻说是每个枝头都有红布，据说是魂的血染成的。不过我也没有亲眼见过。所以也无法辨别真伪。\r\n#b没听到其他传闻吗？");
    else if (status == 2) qm.sendNext("很可惜，我不是对传闻很有兴趣的人。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

