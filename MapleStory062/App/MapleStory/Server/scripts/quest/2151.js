/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 2151 传闻的真相-与巴洛共舞
   开始NPC: 1022000  结束NPC: 1022000
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("找我有什么事儿吗？\r\n#b知道鬼树吗？");
    else if (status == 1) qm.sendNext("鬼树... 是说#b#o3220000##k吧。\r\n#b#o3220000#是什么?");
    else if (status == 2) qm.sendNext("当#m102000000#是个森林时，就开始存在非常古老的树。不过经历了很长的岁月后树开始愤怒了。看着破坏森林的人们发怒，看着干枯的森林发怒。\r\n#b之后怎么样了？");
    else if (status == 3) qm.sendNext("结果树的愤怒使得它变成了怪兽，现在更是变成了肆意吸收大地养分的怪兽。不要了解太多。我能理解你的好奇心，但他是所有木妖之王。不要想得太简单。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

