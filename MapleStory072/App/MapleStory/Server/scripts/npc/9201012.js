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
            cm.sendOk("那好吧,等你有杀完蜈蚣获得宝物再来找我吧！蜈蚣宝物不是这么容易爆的！");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("你如果获得了蜈蚣的宝物，那可是一件令人振奋的事啊！");
        } else if (status == 1) {
            cm.sendNextPrev("你把 #b枫叶口香糖#k 给我，我可以赠送你一套100%卷轴哦.这划得来吧！")
        } if (status == 2) {
                if (cm.haveItem(2022251)) {
                cm.sendYesNo("你确定把 #b枫叶口香糖#k 给我? 领取之前请确定你的消耗栏里面有50个空格子以上！");
            } else {
                cm.sendOk("对不起，我不能给你100%卷轴，你没有 #r枫叶口香糖#k！#r枫叶口香糖#k在你杀死#b蜈蚣#k的时候可以获得！")
                cm.dispose();
            }
        }if (status == 3) {
                        cm.gainItem(2022247,-1);
                        cm.gainItem(2040000,1);
                        cm.gainItem(2040003,1);
                        cm.gainItem(2040006,1);
                        cm.gainItem(2040007,1);
                        cm.gainItem(2040312,1);
                        cm.gainItem(2040400,1);
                        cm.gainItem(2040403,1);
                        cm.gainItem(2040414,1);
                        cm.gainItem(2040500,1);
                        cm.gainItem(2040503,1);
                        cm.gainItem(2040506,1);
                        cm.gainItem(2040507,1);
                        cm.gainItem(2040512,1);
                        cm.gainItem(2040515,1);
                        cm.gainItem(2040600,1);
                        cm.gainItem(2040603,1);
                        cm.gainItem(2040614,1);
                        cm.gainItem(2040700,1);
                        cm.gainItem(2040703,1);
                        cm.gainItem(2040706,1);
                        cm.gainItem(2040709,1);
                        cm.gainItem(2040710,1);
                        cm.gainItem(2040711,1);
                        cm.gainItem(2040800,1);
                        cm.gainItem(2040803,1);
                        cm.gainItem(2040806,1);
                        cm.gainItem(2040807,1);
                        cm.gainItem(2040818,1);
                        cm.gainItem(2040900,1);
                        cm.gainItem(2040903,1);
                        cm.gainItem(2041000,1);
                        cm.gainItem(2041003,1);
                        cm.gainItem(2041006,1);
                        cm.gainItem(2041009,1);
                        cm.gainItem(2041012,1);
                        cm.gainItem(2041015,1);
                        cm.gainItem(2041018,1);
                        cm.gainItem(2041021,1);
                        cm.gainItem(2041024,1);
                        cm.gainItem(2041025,1);
                        cm.gainItem(2043000,1);
                        cm.gainItem(2043003,1);
                        cm.gainItem(2043010,1);
                        cm.gainItem(2043100,1);
                        cm.gainItem(2043103,1);
                        cm.gainItem(2043200,1);
                        cm.gainItem(2043203,1);
                        cm.gainItem(2043300,1);
                        cm.gainItem(2043303,1);
                        cm.gainItem(2043700,1);
                        cm.gainItem(2043703,1);
                        cm.gainItem(2043800,1);
                        cm.gainItem(2043803,1);
                        cm.gainItem(2044000,1);
                        cm.gainItem(2044003,1);
                        cm.gainItem(2044100,1);
                        cm.gainItem(2044103,1);
                        cm.gainItem(2044200,1);
                        cm.gainItem(2044203,1);
                        cm.gainItem(2044300,1);
                        cm.gainItem(2044303,1);
                        cm.gainItem(2044400,1);
                        cm.gainItem(2044403,1);
                        cm.gainItem(2044500,1);
                        cm.gainItem(2044503,1);
                        cm.gainItem(2044600,1);
                        cm.gainItem(2044603,1);
                        cm.gainItem(2044700,1);
                        cm.gainItem(2044703,1);
                        cm.gainItem(2048000,1);
                        cm.gainItem(2048003,1);
                        cm.gainItem(2048003,1);
            cm.dispose();
        }
    }
}