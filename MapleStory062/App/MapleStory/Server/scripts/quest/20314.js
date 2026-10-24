/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20314 神兽之泪
   开始NPC: 1101006  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("他被任命为天鹅骑士团的高级骑士，以表彰他在击败#o9001009#并收回神兽之泪方面做出的贡献。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

