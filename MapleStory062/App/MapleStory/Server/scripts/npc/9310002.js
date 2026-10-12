var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 2 && mode == 0) {
            cm.sendOk("对不起，我不能给你GM装备，你没有 #r红色口香糖#k！#r红色口香糖#k在杀死#bPB#k之后可以获得！但是几率小的可怜！");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("你如果获得了PB的宝物，那可是一件令人振奋的事啊！");
        } else if (status == 1) {
            cm.sendNextPrev("你把 #b红色口香糖#k 给我，我可以赠送你一套GM装备还有一个神秘东西哦.这划得来吧！")
        } if (status == 2) {
                if (cm.haveItem(2022247)) {
                cm.sendYesNo("你确定把 #b红色口香糖#k 给我? ");
            } else {
                cm.sendOk("你真的获得了！你是最强的！我给你GM装备！")
                cm.dispose();
            }
        }if (status == 3) {
                        cm.gainItem(2022247,-1);
                        cm.gainItem(1042003,1);
                        cm.gainItem(1062007,1);
                        cm.gainItem(1322013,1);
                        cm.gainItem(1002140,1);
                        cm.gainItem(1122012,1);
            cm.dispose();
        }
    }
}