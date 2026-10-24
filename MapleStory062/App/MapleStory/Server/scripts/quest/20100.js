/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20100 选择的十字路口
   开始NPC: 1101002  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("有五种路径可供选择。光之剑士、火之法师、风之弓手、黑暗盗贼、雷电海贼。你的选择是什么？");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

