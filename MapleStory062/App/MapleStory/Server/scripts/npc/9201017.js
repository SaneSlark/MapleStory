/* Dr. Roberts
	Amoria Random/VIP Eye Color Change.
 */
var status = 0;
var beauty = 0;
var regprice = 1000000;
var vipprice = 1000000;
var colors = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("#e我是罗伯琴, 我这里有出售 #b#t5152025##k 与 #b#t5152026##k, 而且价格公道,你不想动心也不行...\r\n#L0#我要买一张!#l\r\n#L1#使用: #i5152025##t5152025##l\r\n#L2#使用: #i5152026##t5152026##l");						
        } else if (status == 1) {
            if (selection == 0) {
                beauty = 0;
                cm.sendSimple("你想购买哪种会员卡呢？\r\n#L0#使用 " + regprice + " 金币: #i5152025##t5152025##l\r\n#L1#使用 " + vipprice + " 金币: #i5152026##t5152026##l");
            } else if (selection == 1) {
                beauty = 1;
                if (cm.getPlayer().getGender() == 0) {
                    var current = cm.getPlayer().getFace() % 100 + 20000;
                }
                if (cm.getPlayer().getGender() == 1) {
                    var current = cm.getPlayer().getFace() % 100 + 21000;
                }
                colors = Array();
                colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
                cm.sendYesNo("如果使用 #b#t5152025##k 会随机变化,你是否想好要使用?");
            } else if (selection == 2) {
                beauty = 2;
                if (cm.getPlayer().getGender() == 0) {
                    var current = cm.getPlayer().getFace() % 100 + 20000;
                }
                if (cm.getPlayer().getGender() == 1) {
                    var current = cm.getPlayer().getFace() % 100 + 21000;
                }
                colors = Array();
                colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
                cm.sendStyle("选择自己喜欢的");
            }
        }
        else if (status == 2){
            if (beauty == 1){
                if (cm.haveItem(5152025) == true){
                    cm.gainItem(5152025, -1);
                    cm.setFace(colors[Math.floor(Math.random() * colors.length)]);
                    cm.sendOk("希望你能喜欢!");
                } else {
                    cm.sendOk("很抱歉,你没有会员卡..");
                    cm.dispose();
                }
            }
            if (beauty == 2){
                if (cm.haveItem(5152026) == true){
                    cm.gainItem(5152026, -1);
                    cm.setFace(colors[selection]);
                    cm.sendOk("希望你能喜欢!");
                } else {
                    cm.sendOk("很抱歉,你没有会员卡....");
                    cm.dispose();
                }
            }
            if (beauty == 0){
                if (selection == 0 && cm.getMeso() >= regprice) {
                    cm.gainMeso(-regprice);
                    cm.gainItem(5152025, 1);
                    cm.sendOk("希望你能喜欢!");
                    cm.dispose();
                } else if (selection == 1 && cm.getMeso() >= vipprice) {
                    cm.gainMeso(-vipprice);
                    cm.gainItem(5152026, 1);
                    cm.sendOk("希望你能喜欢!");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有足够的钱购买会员卡!");
                }
            }
        }
    }
}