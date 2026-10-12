/*
-- odinms JavaScript --
        NPC脚本
-------------------------
   玛丽亚 - 岔道 任务1037完成 + 任务1038「玛丽亚的信」开始
*/

var status = 0;
var branch = -1; // 0=完成1037后接1038 1=信已丢重写

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
        var q1037 = cm.getQuestStatus(1037);
        var q1038 = cm.getQuestStatus(1038);
        if (q1037 == Status.STARTED) {
            cm.completeQuest(1037);
            if (cm.getQuestStatus(1037) == Status.COMPLETED) {
                branch = 0;
                cm.sendNext("哦, 嗨. 您是个新手吧. 看您打猎打得很辛苦呢. 什么? 是山姆叫您来消灭蜗牛的?");
            } else {
                cm.sendOk("您是新手吧. 很高兴能遇见您. 哦... 是山姆叫您来的吗? 请先去消灭#r10 只蜗牛#k, 再来找我吧.");
                cm.dispose();
            }
        } else if (q1038 == Status.STARTED) {
            if (cm.haveItem(4031800, 1)) {
                cm.sendOk("请把#b信#k交给彩虹村的长老#b路卡斯#k. 沿着岔道向东北方向前进就能到达彩虹村. 如果信弄丢了, 再来找我, 我会再写一封.");
                cm.dispose();
            } else {
                branch = 1;
                cm.sendNext("哦... 您弄丢了那封信吗? 别担心, 我这就在写一封.");
            }
        } else if (q1037 == Status.COMPLETED && q1038 == Status.NOT_STARTED) {
            branch = 0;
            cm.sendNext("哦, 嗨. 您是个新手吧. 附近都没有蜗牛了, 就算采蘑菇采晚了也没关系. 哦... 亲切的冒险家, 真抱歉, 能再帮我一个忙吗?");
        } else {
            cm.sendOk("您好, 旅行者. 这附近的蜗牛总让我害怕得不敢动...");
            cm.dispose();
        }
    } else if (status == 1) {
        if (branch == 1) {
            cm.gainItem(4031800, 1);
            cm.sendOk("信写好了, 请拿好. 拜托您交给彩虹村的长老#b路卡斯#k.");
            cm.dispose();
        } else {
            cm.sendNext("哦, 谢谢. 蘑菇村里有好多好吃的蘑菇, 可我总是因为蜗牛而犹豫不敢来. 太谢谢您了, 我现在就放心去找山姆.\r\n\r\n如果返回晚了, 村子的长老#b路卡斯#k会非常担心的. 请把这封信交给彩虹村的#b路卡斯#k.");
        }
    } else if (status == 2) {
        cm.startQuest(1038);
        cm.sendOk("沿着岔道向东北方前进就能到彩虹村. 按下#bW 键#k可以显示#b世界地图#k查看地点. 地方不远, 应该不会花您太多时间. 如果弄丢了信, 就来找我, 我会再写一封.");
        cm.dispose();
    }
}
