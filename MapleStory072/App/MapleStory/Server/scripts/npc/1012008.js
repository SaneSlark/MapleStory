//Robo Pet Hatcher
//By : Vietno from Ragezone+ OdinTeh Forums
importPackage(net.sf.odinms.client);
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (status >= 2 && mode == 0) {
            cm.sendOk("嘻嘻嘻。:)");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0)
            cm.sendNext("如果你有  \r\n#v5000047#  罗伯蛋,我会给你一只猫宝宝.");
        else if (status == 1) {
            if (cm.haveItem(5000047, 1) && cm.haveItem(5000047, 1) && cm.haveItem(5000047, 1))
                cm.sendYesNo("很高兴你有一只罗伯蛋! 这只 \r\n#v5000048# #b猫宝宝#k 送给你.");
            else {
                cm.sendOk("#h #, 你没有罗伯蛋. \r\n#v5000047#");
                cm.dispose();
            }
        }
        else if (status == 2) {
            cm.gainItem(5000047, -1);
            cm.gainItem(5000048, 1);
        }
    }
}