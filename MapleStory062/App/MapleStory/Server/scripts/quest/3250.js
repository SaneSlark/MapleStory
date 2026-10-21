/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3250 任务阶段#3: 可爱的鸟宝宝
   开始NPC: 2041026  结束NPC: 2041026
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 0 && status == 2) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("我喂了这只, 那只...我有喂那边那只吗? 还没喂编号3. 来!吃吧！ 他们的嘴巴都张开着,我根本不知道还没喂哪一只... 嘿！你来了!");
    else if (status == 1) qm.sendNext("忙死人了! 研究员说 #o5220003# 会改变的原因是因为 帕普拉图斯的控制. 如果把他们饲养好, 他们就会变成温驯的宠物鸟. 我决定在闲暇时饲养他们.");
    else if (status == 2) qm.sendYesNo("同时饲养十只鸟真的是太累人了! 要找他们的饲料也不容易... 但我得承认他们实在太可爱了. 你想要一只吗? 我可以给你一只.");
    else if (status == 3) qm.sendNext("好吧！我就给你一只. 请你把他养好. 你可以在怪兽身上找到 #b#t4031992##k，但做他的饲料.");
    else if (status == 4) qm.sendNext("既然 #o5220003#是外星生命, 他们终究得回到他们的出生地. #b当他完全长大后, 你就的把 #o522003# #k 送回他属于的世界. 这一切全靠你了.");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#p2041026# 看起来好忙。他正在努力抚养鸟儿，因为有个公告表示#o5220003#在帕普拉图斯掌握下将会听懂人话。。。。他也给了我一只鸟宝宝,让我也试试抚养后再交回给他。他也说我需要用#b#t4031992##k喂鸟宝宝。#b#t4031992##k能从时间塔的怪物取得。");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

