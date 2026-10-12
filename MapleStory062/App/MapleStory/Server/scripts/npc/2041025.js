/* 
	Machine Apparatus
 */
var status = 0;

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
            cm.sendSimple("\r\n#L1#购买#bD片#k! (5000000 金币)#l\r\n\#L2#回到#b玩具城#k!#l\r\n\#L3#出去重新挑战!#l");
        } else if (status == 1) {
            if (selection == 1) {
                if(cm.getMeso() >= 5000000) {
                    cm.gainMeso(-5000000);
                    cm.gainItem(4031179, 1);
                } else {
                    cm.sendOk("没钱你可以去死了,来找我干嘛？");
                 }
                cm.dispose();
            } else if (selection == 2) {
                cm.resetReactors();
                cm.warp(220000000, 0);
                cm.dispose();
            } else if (selection == 3) {
                cm.resetReactors();
                cm.warp(220080000, 0);
                cm.dispose();
            }
        }
    }
}