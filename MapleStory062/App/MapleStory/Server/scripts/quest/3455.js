/* ============================================================
   自动生成任务脚本 - 重新生成会被覆盖, 定制请修改生成器
   任务: 3455 葛雷士兵
   开始NPC: 2050002  结束NPC: 2050002
   ============================================================ */
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) { qm.dispose(); return; }
    if (mode == 0 && status == 5) { qm.dispose(); return; }
    if (mode == 1) status++; else status--;
    if (status < 0) { qm.dispose(); return; }
    if (status == 0) qm.sendNext("您… 您回来了啊. 虽然很高兴再见到您，我没空和您交谈. 对不起? \r\n #b(打开超声波解码器.)#k");
    else if (status == 1) qm.sendNext("我对震诺一无所知，只有领袖才懂得详情. (我担心我渐渐对人肉产生了兴趣. 不, 其实, 我是对人类的任何一举一动产生了兴趣...) \r\n #b(超声波解码器正在解码)#k");
    else if (status == 2) qm.sendNext("人类朋友，您到底怎么了? 您不是和地球防御本部那群伪君子勾结吧? (就连我常识的美学都人类化了… 话说回来, 特务马克应该是人类最英俊的吧.) \r\n #b(超声波解码器正在解码)#k");
    else if (status == 3) qm.sendNext("我们葛雷人没有伤害人类的意图. 您因该知道，我们只想做朋友. (不, 我不因该含有这种念头! 如果葛雷人王子发现了，会非常生气!) \r\n #b(超声波解码器正在解码)#k");
    else if (status == 4) qm.sendNext("不要害怕葛雷人的主权. 葛雷人是站在人类这边. 我们葛雷人将引导人类步入伟大之路. (不, 我应该想像… 例如洗葛雷人的衣服 或… 烘干太空食品... 哇, 我将会得到家庭主妇的湿疹!) \r\n #b(超声波解码器正在解码)#k");
    else if (status == 5) qm.sendYesNo("那... 您现在准备和我们合作了吗?");
    else if (status == 6) qm.sendNext("您已决定跟着我们葛雷人了吧! 太好了, 签这个和约证明您对葛雷人的忠臣吧!");
    else {
        qm.startQuest(qm.getQuest());
        qm.dispose();
    }
}

