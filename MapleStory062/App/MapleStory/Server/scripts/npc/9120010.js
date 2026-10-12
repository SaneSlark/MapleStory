var status = 0;

function start() {
    cm.sendYesNo("#e我是废弃任务最后人物~~你真的收集到了10个#v4001022#啊？可以~~给你废弃礼包#n");
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("#e没有哈？.嘻嘻嘻#n");
            cm.dispose();
        } else
            status++;
        if (status == 1)
            cm.sendNext("#e很好，请把它交给我，我会给你丰富の废弃大礼包^_^.#n");
        else if (status == 2) {
            if(cm.getChar().getLevel() > 200) {
            cm.sendOk("#e(#‵′)靠高手还来骗东西~牛X？骗我礼包吃吗？- -|||.#n");
            cm.dispose();
            }else if(cm.haveItem(4001022,10)== false) {
            cm.sendOk("#e你还未收集够#v4001022#,骗我？#n");
            cm.dispose();
            }else{
            cm.sendOk("#e勇敢的#r#h ##k，你已经通过训练\r\n相信你以后的冒险之旅将会非常顺利。\r\n 祝您游戏愉快.#n");
 cm.serverNotice("『 任务』： 的."+ cm.getChar().getName() +"已经完成了废弃の任务！奖励100W的经验和500W的金钱和一些物品");
            cm.gainItem(4001022,-10);
            cm.gainExp(1000000);
            cm.gainMeso(5000000);
                cm.gainItem(1050100,+1);
                cm.gainItem(1051098,+1);
                cm.gainItem(1002518,+1);
                cm.gainItem(1302007,+1);
                cm.gainItem(1372043,+1);
                cm.gainItem(1062007,+1);
                cm.gainItem(1042003,+1);
                cm.gainItem(2050004,+100);
            cm.warp(910000000, 0);
            cm.dispose();}
        }
    }
}