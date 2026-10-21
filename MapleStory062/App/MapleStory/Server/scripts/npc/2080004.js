importPackage(net.sf.odinms.client);


var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        //if (status == 0) { // first interaction with NPC
        //  cm.sendNext("Oh, hello #h #!");
        //} else if (status == 1) {
        //   cm.sendSimple("So, how can I make your day?\r\n#b#L0#I hear you're selling Morphs?!#l#k");
        /*} else */if (status == 0) {
            //      if (selection == 0) {
            cm.sendNext("变身药水是一种特殊的药水，可以把你变成各种各样的东西。");
            //    }
        } else {
            var items = new Array (5300000, 5300001, 5300002, 2210003, 2210005);
            if (status == 1) {
                var selStr = "那么，你要选哪一个？记住，每瓶变身药水要收 #b500,000 金币#k。";
                for (var i = 0; i < items.length; i++){
                    selStr += "\r\n#b#L" + i + "# #v" + items[i] + "# #t" + items[i] + "##l#k";
                }
                cm.sendSimple(selStr);
            }
            if (status == 2) {
                if (cm.getMeso() < 500000) {
                    cm.sendOk("你的金币不够。");
                    cm.dispose();
                } else {
                    cm.gainMeso(-500000);
                    cm.gainItem(items[selection], 1);
                    cm.dispose();
		}
            }
        }
    }
}