/*
-- odinms JavaScript --
        NPC脚本
-------------------------
   路卡斯 - 彩虹村长老 任务1038「玛丽亚的信」完成
*/

var status = 0;

var Status = net.sf.odinms.client.MapleQuestStatus.Status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    status++;

    if (status == 0) {
        var q1038 = cm.getQuestStatus(1038);
        if (q1038 == Status.STARTED) {
            if (cm.haveItem(4031800, 1)) {
                cm.completeQuest(1038);
                if (cm.getQuestStatus(1038) == Status.COMPLETED) {
                    cm.sendNext("哦... 您看起来像是个新手. 您来找我有什么事? 是吗? 这是玛丽亚寄来的信吧...?");
                } else {
                    cm.sendOk("这封信... 好像不太对. 请您确认一下是否带来了#b玛丽亚的信#k.");
                    cm.dispose();
                }
            } else {
                cm.sendOk("嗯? 您手里好像没有#b玛丽亚的信#k. 如果弄丢了, 请回去找玛丽亚, 她会再写一封.");
                cm.dispose();
            }
        } else if (q1038 == Status.COMPLETED) {
            cm.sendOk("顺利的把信交给我了吧. 谢谢了... 玛丽亚做帽子的手艺可是一流的哦...");
            cm.dispose();
        } else {
            cm.sendOk("哦... 您是新手吧. 增加力量主要提高攻击力, 是战士的关键属性; 增加敏捷可以提高命中率和手技, 是弓箭手的关键属性; 增加智力是魔法师的关键属性; 增加运气则对所有职业都有益, 特别是飞侠. 战斗中需要的药水和武器在村子里都可以买到.");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.sendOk("哇, 听说您帮助了玛丽亚. 谢谢您, 您真善良. 玛丽亚除了蜗牛之外, 什么都不怕. 现在她能无忧无虑地采蘑菇了.\r\n\r\n我想给您一些回报. 既然您是新手, 想必需要多多锻炼来加强自己. 您有空时再来找我吧, 我会介绍一位能训练您的人.");
        cm.dispose();
    }
}
