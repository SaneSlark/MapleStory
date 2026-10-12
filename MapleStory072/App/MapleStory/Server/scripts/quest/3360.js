/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3360 密码认证
   开始NPC: 2111006  结束NPC: 2111006
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#p2111006#告诉了我一串冗长复杂的主密码，说这是可以自由出入秘密通道的密码。哦哦……这么复杂很可能会忘记，最好把它记在什么地方。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

