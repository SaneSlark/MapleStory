/*
* BY : 稻、香
*/
var status = 0;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0) {
		cm.sendYesNo("#e 哇，想不到你竟然来到了这里，恩，继续去训练吧！帮我带回： \r\n #b#v4000004##kx30 \r\n#b#v4000000##kx30");
		status++;
	} else {
		if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) {
			cm.dispose();
		} else {
			if (status == 1) {
				if(cm.haveItem(4000004)) {
					cm.gainItem(4000004, -30);
                                        cm.gainItem(4000000, -30);

                                        cm.showEffect("quest/party/clear");
                                        cm.playSound("Party1/Clear");
                                        cm.getGuild().gainGP(10);
                                        cm.gainItem(2000006, 100)
                                        cm.gainItem(2022179, 5)						
                                        cm.dispose();
				} else {
					cm.sendOk("#e#r 可恶，你没有带足够我想要的东西！.");
					cm.dispose();
				}
			}
		}
	}
}
