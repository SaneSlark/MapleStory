/****
 * @author Diffusion a.k.a Ace
 * @purpose: ChickenMS Exchanger.
****/
var status = 0;
var choices = ["兑换：#v4000252#（#e#r666#n#k）换10亿金币！","兑换：10亿金币换#v4000252#（#e#r300#k#n）"];
var ServerName = "ChickenMS";
function start() {
    var msg = "#e你好，#h #，需要什么帮助？";
    for (var i = 0; i < choices.length; i++) 
        msg += "\r\n\t#L"+i+"#"+choices[i]+"#l";
    cm.sendSimple(msg);
}

function action(m,t,s) {
	if (m < 1) {
		cm.dispose();
		return;
	} else {
		status++;
	}
	if (status == 1) {
		sel = s;
		if (s == 0) {
            if(cm.haveItem(4000252, 666) && cm.getMeso() <= 1000000000) {             
                cm.gainMeso(1000000000);
                cm.gainItem(4000252,-666);
                cm.sendOk("金币兑换完成！\r\n欢迎来到#b"+ServerName+"!#k");
				cm.dispose();
			} else {
                cm.sendOk("你的#v4000252#不足，或金币已超过10亿。");
                cm.dispose(); 
			}	
        } else if (s == 1) {
            if(cm.getMeso() >= 1000000000) {
                cm.gainMeso(-1000000000);
                cm.gainItem(4000252,300);
                cm.sendOk("物品兑换完成！\r\n欢迎来到#b"+ServerName+"!#k");
				cm.dispose();
            } else {
                cm.sendOk("你的金币不足。");
                cm.dispose();
			}
        } else if (s == 2) {
            if(cm.haveItem(4000187, 1)) {
                cm.gainMeso(100000000);
                cm.gainItem(4000187,-1);
                cm.sendOk("物品兑换完成！\r\n欢迎来到#b"+ServerName+"!#k");
                cm.dispose();
            } else {
                cm.sendOk("你没有#v4000187#！");
                cm.dispose();
            }
        } else if (s == 3) {
            if(cm.getMeso() >= 100000000) {
                cm.gainMeso(-100000000);
                cm.gainItem(4000187,1);
                cm.sendOk("金币兑换完成！\r\n欢迎来到#b"+ServerName+"!#k");
				cm.dispose();
            } else {
                cm.sendOk("你的金币不足。\r\n欢迎来到#b"+ServerName+"!#k");
                cm.dispose();
			}
        } else if (s == 4) {
            cm.sendGetText("你想要多少个猴子橡皮擦？");
            status = 999;
			}
        } else if (status == 1000) {
            if (cm.getPlayer().getMeso() >= 200000000 * cm.getText()) {
            cm.gainMeso(-200000000 * cm.getText());
            cm.gainItem(4001040, cm.getText());
            cm.sendOk("完成！欢迎来到#b"+ServerName+"!#k");
            cm.dispose();
            } else {
            var formula = 200000000 * cm.getText();
            cm.sendOk("你没有足够的" + formula + "金币，目前只有" + cm.getPlayer().getMeso() + " meso(s).");
            cm.dispose();
		}
	}
}