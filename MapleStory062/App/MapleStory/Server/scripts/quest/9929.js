/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9929 玩偶匠人乔纳斯
   开始NPC: 2120004  结束NPC: 2120004
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 0 && status == 2) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("……谁啊？……有什么事吗……？找我有什么事情吗……？\r\n #b听说正在举行清明踏青舞会，您不去参加吗？");
    else if (status == 1) qm.sendNext("……我得制作娃娃……所以不能去。因为还没能制作出完美的娃娃……还……还没……\r\n #b要是您很忙的话，需要我帮忙吗？");
    else if (status == 2) qm.sendYesNo("……试一试也没什么坏处……我已经把娃娃的骨架做好了……那你现在就开始#b制作娃娃#k吧。");
    else if (status == 3) qm.sendNext("给你……这是做好了骨架的娃娃。只要在上面贴上#b#t4031838##k，做成人的模样就行了。不停地往上贴#t4031838#的话，就可以逐渐把形状做出来。请你去旁边坏了的#r??#k身上找到#t4031838#，然后把娃娃完成。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("既然和#p2120005#说要去烟囱那边，就进入熄灭的#b壁炉#k，去#m229000300#另一头看看吧。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

