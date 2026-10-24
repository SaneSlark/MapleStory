/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 9851 沼泽中的蛇洞
   开始NPC: 1052000  结束NPC: 1052000
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#p1052000##k 很惊讶地看到蛇洞并告诉他的朋友，但没有人相信他，他很生气并说他们称他为胆小鬼。 ...唔。事实上，确实有点难以置信。说着，亚历克斯突然把他转移到了沼泽地的一个蛇洞里，让他亲眼所见，抓住少年内基50！ \r\n\r\n#o2130103# #r#a98511##k");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

