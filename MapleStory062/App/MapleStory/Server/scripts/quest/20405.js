/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 20405 黑女巫的洞穴
   开始NPC: 2081013  结束NPC: 
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("洞穴的一面墙上贴着一张便条。看完内容，好像留下了#p1103000#。没有找到诅咒的对象，但是找到了诅咒工具。取回它并将其运送到埃雷布鲁……我想这一步已经太晚了。  #p1103000# 似乎已经完成了它的使命。  我们去 #b 圣地 #k。");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

