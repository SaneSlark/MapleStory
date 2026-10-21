/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9936 新的计划
   开始NPC: 2120000  结束NPC: 2120000
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("本来想帮助#p2120005#的，结果反而让她的心情变的更坏了。呼……是一开始接受她的请求本身就错了吗？去其他地方的话，会不会能得到好消息呢？去和#b假面绅士#k对话吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

