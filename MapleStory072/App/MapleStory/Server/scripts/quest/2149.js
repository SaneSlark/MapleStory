/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 2149 传闻的真相-麦吉
   开始NPC: 1022002  结束NPC: 1022002
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("…什么事儿?\r\n#b听说过鬼树吗？");
    else if (status == 1) qm.sendNext("好像是听到了胆小鬼们的故事了吧。没有什么鬼树。我在勇士部落的石山上修炼了很多年，没见过也没听说过那种树。\r\n#b哦，是吗？...");
    else if (status == 2) qm.sendNext("不过最近东边石山中有一些有疑问的袭击事件，有点让人担心...");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

