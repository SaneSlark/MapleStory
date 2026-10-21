/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 29400 头衔挑战 - 最有经验的猎人
   开始NPC: 9000040  结束NPC: 9000040
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#e 头衔挑战 - 最有经验的猎人#n\n#k 在30天内，猎杀#r100000#k怪物等级高于自己的等级! 德烈,荣誉的祭司 在寻找最有经验与聪明的猎人们. 他将授予做到此举的玩家们#e#b最有经验的猎人#k#n头衔！#e#b 传奇猎神 (特别头衔)#n#k 最优秀的猎人将授予此特别头衔！");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("#b#e 头衔挑战 - 最有经验的猎人#n\n#k 在30天内，猎杀#r100000#k怪物等级高于自己的等级! 德烈,荣誉的祭司 在寻找最有经验与聪明的猎人们. 他将授予做到此举的玩家们#e#b最有经验的猎人#k#n头衔！#e#b 传奇猎神 (特别头衔)#n#k 最优秀的猎人将授予此特别头衔！");
    else {
        qm.completeQuest(qm.getQuest());
        qm.dispose();
    }
}

