var status = -1;
var items = Array(5062000, 5062001, 5062002, 5750000, 5750001, 5050000, 2049100, 2022179, 2340000, 4020009, 2040804, 2040029, 2040532, 2040516, 2040513, 2040501, 2040025, 2040321, 2040301, 2043401, 2045301, 2045201, 2040317, 2040817, 5610000, 5610001, 3011000, 5640000, 1122121, 2531000, 2530000, 5030000, 5030001, 5030006, 5534000, 5220084, 5220092, 5510000, 1812008);
var itemsa = Array(2550, 20000, 30000, 5000, 4100, 2550, 4100, 5000, 50000, 2000, 5000, 6000, 7500, 7500, 8000, 8000, 9000, 9000, 9000, 9000, 9000, 9000, 9000, 9000, 6000, 9000, 4500, 80000, 150000, 100000, 35000, 3400, 11800, 19800, 20000, 20000, 40000, 1000, 7000);
var itemse = Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 14, -1, 30, -1, -1, 1, 7, 14, -1, -1, -1, -1);


function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        cm.sendSimple("你好，我可以用点券兑换物品，你目前有#r#e" + cm.getPlayer().getCSPoints(1) + "#n#k点券，可以选择：\r\n\r\n#b#L0#用点券兑换物品#l#k");
    } else if (status == 1) {
        var selStr = "你愿意用#r点券#k兑换物品吗？以下是可选项目：#b\r\n\r\n";
        for (var i = 0; i < items.length; i++) {
            selStr += "#L" + i + "##v" + items[i] + "##t" + items[i] + "# #r(" + (cm.isGMS() ? (itemsa[i] / 2) : itemsa[i]) + " Cash)#b#l\r\n";
        }
        cm.sendSimple(selStr + "#k");
    } else if (status == 2) {
        if ((items[selection] == 2340000 || items[selection] == 5610000 || items[selection] == 5610001 || items[selection] == 5062001 || items[selection] == 5640000) && cm.getPlayer().getLevel() < 70) {
            cm.sendOk("需要达到70级才能兑换此物品。");
        } else if (items[selection] == 2022179 && cm.getPlayer().getLevel() < 50) {
            cm.sendOk("需要达到50级才能兑换此物品。");
        } else if (cm.getPlayer().getCSPoints(1) < (cm.isGMS() ? itemsa[selection] / 2 : itemsa[selection])) {
            cm.sendOk("你的#r点券#k不足。");
        } else if (!cm.canHold(items[selection], 1)) {
            cm.sendOk("背包没有足够位置，请空出位置后再来兑换。");
        } else {
            cm.getPlayer().modifyCSPoints(1, -(cm.isGMS() ? (itemsa[selection] / 2) : (itemsa[selection])), true);
            if (itemse[selection] > 0) {
                cm.gainItemPeriod(items[selection], 1, itemse[selection]);
            } else {
                cm.gainItem(items[selection], 1);
            }
            cm.sendOk("下次再见！");
        }
        cm.dispose();
    }
}