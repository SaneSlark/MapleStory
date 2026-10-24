/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20710 垃圾桶里藏着什么
   开始NPC: 1103002  结束NPC: 1103002
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 0 && status == 0) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendYesNo("嗯...我不太相信，但我无法控制，因为你是圣殿骑士的成员。好像没有其他人可以调查...我会解释发生了什么。");
    else if (status == 1) qm.sendNext("不久前得到消息，#b#m103000000#地铁里面#k丢着许多奇怪的玩偶。这是阿雄说的，应该不会错。那些玩偶很可疑……请把#b#t4032136##k带给我。");
    else if (status == 2) qm.sendNext("阿雄说，已经把地铁里的玩偶全扔进垃圾桶了。翻找#b垃圾桶#k，应该就能找到。加油吧。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

