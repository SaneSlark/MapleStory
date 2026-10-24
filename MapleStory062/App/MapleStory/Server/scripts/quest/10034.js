/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 10034 中秋月球之旅
   开始NPC: 9010000  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 0 && status == 2) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("您好，#h0#！你知道“不多不少，就像中秋节一样”这句话吗？已经中秋了！为庆祝国庆，元极湖世界正在举办多项活动。");
    else if (status == 1) qm.sendNext("#b 除了制作美味的节日美食#k、#b和拼字母#k之外，农历新年还为这个中秋准备了#b和月球之旅#k. #h0# 你也来看看我们吗？");
    else if (status == 2) qm.sendYesNo("每年一次，当满月接近地面时，你可以跳得很高，去月球。 月月迈尔斯 向您发送了 #h0# #b 月球旅行票 #k。您想接收吗？");
    else if (status == 3) qm.sendNext("打开消费窗口，双击#b月球旅行券#k即可前往月月妙的游乐场，可以跳跃到达月球。那么，祝大家中秋快乐~");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

