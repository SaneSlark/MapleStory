/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 2156 实现愿望的彩虹色蜗牛壳儿!?
   开始NPC: 1012102  结束NPC: 1012102
   ============================================================ */
var status = -1;

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("皮亚说去海边草丛中击退#r蜗牛王#k，把#b#t2210006##k拿给他…… 你什么都不做，还使唤人？是不是太过分了？得到#t2210006#之后我得自己用！ \n\n#t2210006# #b#c2210006##k/1\n\n");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

