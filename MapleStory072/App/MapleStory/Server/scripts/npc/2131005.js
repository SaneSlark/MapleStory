var done072=false,origin072=-1;
function close072(){done072=true;cm.dispose();}
function start(){origin072=cm.getMapId();action(1,0,0);}
var status = -1;

var exchangeItem = 4000437;

function action(mode, type, selection) {
    if(done072)return;
    if(mode!=1||cm.getMapId()!=origin072){close072();return;}

    if (mode == 1) {
	status++;
    } else {
	close072();
	return;
    }
    if (status == 0) {
        cm.sendSimple("这么多的伤患，需要一点药吧...#b\r\n#L0#嘿，这一些#t4000437#，帮我做更好的药品。#l");
    } else if (status == 1) {
	if (!cm.haveItem(exchangeItem, 100)) {
	    cm.sendNext("你没有足够的数量我需要100个#t4000437#");
	    close072();
	} else {
	    cm.sendGetNumber("嗯，这是个好主意！ 我可以给你 #i2022457#每100个 #i" + exchangeItem + "##t" + exchangeItem + "# 你想要给我多少 (当前道具: " + cm.getPlayer().itemQuantity(exchangeItem) + ")", Math.min(300, Math.floor(cm.getPlayer().itemQuantity(exchangeItem) / 100)), 1, Math.min(300, Math.floor(cm.getPlayer().itemQuantity(exchangeItem) / 100)));
	}
    } else if (status == 2) {
        done072=true; 
	if (selection==Math.floor(selection) && selection >= 1 && selection <= 300 && selection <= Math.floor(cm.getPlayer().itemQuantity(exchangeItem) / 100)) {
	    if (!cm.canHold(2022457, selection)) {
		cm.sendOk("请空出一些其他栏位。");
	    } else {
		cm.gainItem(2022457, selection);
		cm.gainItem(exchangeItem, -(selection * 100));
		cm.sendOk("谢谢你。");
	    }
	}
        close072();
    }
}