/*
-- odinms JavaScript --
        NPC脚本
-------------------------
   山姆 - 蜗牛打猎场Ⅰ 任务1037「山姆的请求」开始
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
        var p = cm.getPlayer();
        var qStatus = cm.getQuestStatus(1037);
        if (p.getJob().getId() == 0 && p.getLevel() <= 10) {
            if (qStatus == Status.NOT_STARTED) {
                cm.sendNext("不知道玛丽亚是否还好…? 哦, 您是冒险家吧! 嗨, 您好! 请问您会经过蜗牛打猎场并向东方前进吗? 是的话, 能否帮个忙?");
            } else if (qStatus == Status.STARTED) {
                cm.sendOk("请在路上消灭#r10 只蜗牛#k, 然后到东边的岔道通知#b玛丽亚#k. 她应该在岔道附近等消息.");
                cm.dispose();
            } else {
                cm.sendOk("多亏了您, 玛丽亚终于能放心采蘑菇了. 真是太感谢了!");
                cm.dispose();
            }
        } else {
            cm.sendOk("您好, 旅行者. 祝您一路顺风.");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.startQuest(1037);
        cm.sendOk("来自彩虹村的玛丽亚说要来这附近采蘑菇, 可是一直没到. 我想她是因为害怕#r蜗牛#k而动弹不得.\r\n\r\n如果您能在路途中消灭#r10 只蜗牛#k, 并通知玛丽亚蜗牛已经被消灭, 我会非常感谢您.");
        cm.dispose();
    }
}
