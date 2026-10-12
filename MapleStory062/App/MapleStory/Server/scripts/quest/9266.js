/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9266 寻找迷路的圣诞鹿
   开始NPC: 2001000  结束NPC: 2001000
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#p2001000#爷爷正在为一件事烦恼……会是什么事情呢？到#b#m209000000##k去见见#b#p2001000##k爷爷吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

