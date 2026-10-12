function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 1; i++) {
                text += "";
            }
			//显示物品ID图片用的代码是  #v这里写入ID#
			text += "#e#d欢迎来到本服装备制作中心.#l\r\n\r\n"
			text += "#L0##r制作#v1122000##z1122000# 需要：#v1122000#X1 #v4251202#X1 #v4001094#X10#l\r\n"
			text += "#L1##r制作#v1002574##z1002574# 需要：#v1002572#X1 #v1002573#X1 #v4251202#X20#l\r\n"
			text += "#L2##r制作#v1022073##z1022073# 需要：#v1022089#X3 #v4000463#X10#l\r\n"
			text += "#L3##r制作#v1132004##z1132004# 需要：#v1132000#X1 #v1132001#X1 #v1132002#X1#l\r\n"
			text += "#L4##r制作#v1112421##z1112421# 需要：#v1112404#X1 #v1112422#X1 #v1112423#X1#l\r\n"
			text += "#L5##r制作#v1122012##z1122012# 需要：#v1122029#X1 #v1122030#X1 #v1122032#X1#l\r\n"
			text += "#L6##r制作#v1112403##z1112403# 需要：#v1112402#X1 #v1112424#X1#l\r\n"
			text += "#L7##r制作#v1112312##z1112312# 需要：#v1112804#X4 #v1112916#X1 500万游戏币#l\r\n"
			text += "#L8##r制作#v1112804##z1112804# 需要：#v1112425#X1 #v1112426#X1#l\r\n"
			text += "#L9##r制作#v1112405##z1112405# 需要：#v1112312#X1 #v1112804#X1 #v1112403#X1 #v1112402#X1#l\r\n"
			text += "#L10##r制作#v1032030##z1032030# 需要：#v1032014#X1 #v1032015#X1 #v1032016#X1 #v1032017#X1#l\r\n"
			text += "#L11##r制作#v1032061##z1032061# 需要：#v1032060#X1 #v4000464#X1 500万游戏币 5W点券#l\r\n"
			text += "#L12##r制作#v1012070##z1012070# 需要：#v1012071#X1 #v1012072#X1 #v1012073#X1#l\r\n"
			text += "#L13##r制作#v1132013##z1132013# 需要：#v1132012#X1 #v4251202#X20#l\r\n"
            cm.sendSimple(text);
			} else if (selection == 0) {
				if (cm.itemQuantity(1122000) < 1) {
					cm.sendOk("#b装备合成需要#v1122000#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(4251202) < 1) {
					cm.sendOk("#b装备合成需要#v4251202#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(4001094) < 10) {
					cm.sendOk("#b装备合成需要#v4001094#X10，您的物品不足#k");
					cm.dispose();
				} else {
					cm.gainItem(1122000, -1);
					cm.gainItem(4251202, -1);
					cm.gainItem(4001094, -10);
					cm.gainItem(1122000, 40,40,40,40,0,0,40,40,200,200,0,0,0,0);
					cm.sendOk("制作成功！");
					cm.喇叭(3,"【合成中心】["+cm.getName()+"]合成黑龙项环升级版成功！");
					cm.dispose();
				}
			} else if (selection == 1) {
				if (cm.itemQuantity(1002572) < 1) {
					cm.sendOk("#b装备合成需要#v1002572#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1002573) < 1) {
					cm.sendOk("#b装备合成需要#v1002573#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(4251202) < 20) {
					cm.sendOk("#b装备合成需要#v4251202#X20，您的物品不足#k");
					cm.dispose();
				} else {
					cm.gainItem(1002572, -1);
					cm.gainItem(1002573, -1);
					cm.gainItem(4251202, -20);
					cm.gainItem(1002574, 1);
					cm.sendOk("制作成功！");
					cm.喇叭(3,"【合成中心】["+cm.getName()+"]合成海盗船长帽成功！");
					cm.dispose();
				}
			} else if (selection == 2) {
				if (cm.itemQuantity(1022089) < 3) {
					cm.sendOk("#b装备合成需要#v1022089#X3，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(4000463) < 10) {
					cm.sendOk("#b装备合成需要#v4000463#X10，您的物品不足#k");
					cm.dispose();
				} else {
					cm.gainItem(1022089, -3);
					cm.gainItem(4000463, -10);
					cm.gainItem(1022073, 1);
					cm.sendOk("制作成功！");
					cm.喇叭(3,"【合成中心】["+cm.getName()+"]合成划痕眼镜成功！");
					cm.dispose();
				}
			} else if (selection == 3) {
				if (cm.itemQuantity(1132000) < 1) {
					cm.sendOk("#b装备合成需要#v1132000#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1132001) < 1) {
					cm.sendOk("#b装备合成需要#v1132001#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1132002) < 1) {
					cm.sendOk("#b装备合成需要#v1132002#X1，您的物品不足#k");
					cm.dispose();
				} else {
					cm.gainItem(1132000, -1);
					cm.gainItem(1132001, -1);
					cm.gainItem(1132002, -1);
					cm.gainItem(1132004, 1);
					cm.sendOk("制作成功！");
					cm.喇叭(3,"【合成中心】["+cm.getName()+"]合成黑贺腰带成功！");
					cm.dispose();
				}
			} else if (selection == 4) {
				if (cm.itemQuantity(1112404) < 1) {
					cm.sendOk("#b装备合成需要#v1112404#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1112422) < 1) {
					cm.sendOk("#b装备合成需要#v1112422#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1112423) < 1) {
					cm.sendOk("#b装备合成需要#v1112423#X1，您的物品不足#k");
					cm.dispose();
				} else {
					cm.gainItem(1112404, -1);
					cm.gainItem(1112422, -1);
					cm.gainItem(1112423, -1);
					cm.gainItem(1112421, 1);
					cm.sendOk("制作成功！");
					cm.喇叭(3,"【合成中心】["+cm.getName()+"]合成灵感灯戒指成功！");
					cm.dispose();
				}
			} else if (selection == 5) {
				if (cm.itemQuantity(1122029) < 1) {
					cm.sendOk("#b装备合成需要#v1122029#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1122030) < 1) {
					cm.sendOk("#b装备合成需要#v1122030#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1122032) < 1) {
					cm.sendOk("#b装备合成需要#v1122032#X1，您的物品不足#k");
					cm.dispose();
				} else {
					cm.gainItem(1122029, -1);
					cm.gainItem(1122030, -1);
					cm.gainItem(1122032, -1);
					cm.gainItem(1122012, 1);
					cm.sendOk("制作成功！");
					cm.喇叭(3,"【合成中心】["+cm.getName()+"]合成永恒玉佩成功！");
					cm.dispose();
				}
			} else if (selection == 6) {
				if (cm.itemQuantity(1112402) < 1) {
					cm.sendOk("#b装备合成需要#v1112402#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1112424) < 1) {
					cm.sendOk("#b装备合成需要#v1112424#X1，您的物品不足#k");
					cm.dispose();
				} else {
					cm.gainItem(1112402, -1);
					cm.gainItem(1112424, -1);
					cm.gainItem(1112403, 1);
					cm.sendOk("制作成功！");
					cm.喇叭(3,"【合成中心】["+cm.getName()+"]合成力量飞天猪的戒指成功！");
					cm.dispose();
				}
			} else if (selection == 7) {
				if (cm.getMeso() < 5000000) {
					cm.sendOk("#b装备合成需要500万游戏币，您的金币不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1112804) < 4) {
					cm.sendOk("#b装备合成需要#v1112804#X4，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1112916) < 1) {
					cm.sendOk("#b装备合成需要#v1112916#X1，您的物品不足#k");
					cm.dispose();
				} else {
					cm.gainItem(1112804, -4);
					cm.gainItem(1112916, -1);
					cm.gainMeso(-5000000);
					cm.gainItem(1112312, 1);
					cm.sendOk("制作成功！");
					cm.喇叭(3,"【合成中心】["+cm.getName()+"]合成永恒真爱戒指成功！");
					cm.dispose();
				}
			} else if (selection == 8) {
				if (cm.itemQuantity(1112425) < 1) {
					cm.sendOk("#b装备合成需要#v1112425#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1112426) < 1) {
					cm.sendOk("#b装备合成需要#v1112426#X1，您的物品不足#k");
					cm.dispose();
				} else {
					cm.gainItem(1112425, -1);
					cm.gainItem(1112426, -1);
					cm.gainItem(1112804, 1);
					cm.sendOk("制作成功！");
					cm.喇叭(3,"【合成中心】["+cm.getName()+"]合成结婚戒指成功！");
					cm.dispose();
				}
			} else if (selection == 9) {
				if (cm.itemQuantity(1112312) < 1) {
					cm.sendOk("#b装备合成需要#v1112312#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1112804) < 1) {
					cm.sendOk("#b装备合成需要#v1112804#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1112403) < 1) {
					cm.sendOk("#b装备合成需要#v1112403#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1112402) < 1) {
					cm.sendOk("#b装备合成需要#v1112402#X1，您的物品不足#k");
					cm.dispose();
				} else {
					cm.gainItem(1112312, -1);
					cm.gainItem(1112804, -1);
					cm.gainItem(1112403, -1);
					cm.gainItem(1112402, -1);
					cm.gainItem(1112405, 1);
					cm.sendOk("制作成功！");
					cm.喇叭(3,"【合成中心】["+cm.getName()+"]合成利琳的戒指成功！");
					cm.dispose();
				}
			} else if (selection == 10) {
				if (cm.itemQuantity(1032014) < 1) {
					cm.sendOk("#b装备合成需要#v1032014#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1032015) < 1) {
					cm.sendOk("#b装备合成需要#v1032015#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1032016) < 1) {
					cm.sendOk("#b装备合成需要#v1032016#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1032017) < 1) {
					cm.sendOk("#b装备合成需要#v1032017#X1，您的物品不足#k");
					cm.dispose();
				} else {
					cm.gainItem(1032014, -1);
					cm.gainItem(1032015, -1);
					cm.gainItem(1032016, -1);
					cm.gainItem(1032017, -1);
					cm.gainItem(1032030, 1);
					cm.sendOk("制作成功！");
					cm.喇叭(3,"【合成中心】["+cm.getName()+"]合成勇气耳环成功！");
					cm.dispose();
				}
			} else if (selection == 11) {
				if (cm.getMeso() < 5000000) {
					cm.sendOk("#b装备合成需要500万游戏币，您的金币不足#k");
					cm.dispose();
				} else if (cm.getPlayer().getCSPoints(1) < 50000) {
					cm.sendOk("你的点卷不足!");
					cm.dispose();
				} else if (cm.itemQuantity(1032060) < 1) {
					cm.sendOk("#b装备合成需要#v1032060#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(4000464) < 1) {
					cm.sendOk("#b装备合成需要#v4000464#X1，您的物品不足#k");
					cm.dispose();
				} else {
					cm.gainItem(1032060, -1);
					cm.gainItem(4000464, -1);
					cm.gainMeso(-5000000);
					cm.gainNX(-50000);
					cm.gainItem(1032061, 1);
					cm.sendOk("制作成功！");
					cm.喇叭(3,"【合成中心】["+cm.getName()+"]合成发光的阿尔泰耳环成功！");
					cm.dispose();
				}
			} else if (selection == 12) {
				if (cm.itemQuantity(1012071) < 1) {
					cm.sendOk("#b装备合成需要#v1012071#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1012072) < 1) {
					cm.sendOk("#b装备合成需要#v1012072#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(1012073) < 1) {
					cm.sendOk("#b装备合成需要#v1012073#X1，您的物品不足#k");
					cm.dispose();
				} else {
					cm.gainItem(1012071, -1);
					cm.gainItem(1012072, -1);
					cm.gainItem(1012073, -1);
					cm.gainItem(1012070, 1);
					cm.sendOk("制作成功！");
					cm.喇叭(3,"【合成中心】["+cm.getName()+"]合成草莓雪糕成功！");
					cm.dispose();
				}
			} else if (selection == 13) {
				if (cm.itemQuantity(1132012) < 1) {
					cm.sendOk("#b装备合成需要#v1132012#X1，您的物品不足#k");
					cm.dispose();
				} else if (cm.itemQuantity(4251202) < 20) {
					cm.sendOk("#b装备合成需要#v4251202#X20，您的物品不足#k");
					cm.dispose();
				} else {
					cm.gainItem(1132012, -1);
					cm.gainItem(4251202, -20);
					cm.gainItem(1132013, 1);
					cm.sendOk("制作成功！");
					cm.喇叭(3,"【合成中心】["+cm.getName()+"]合成不灭的法老腰带成功！");
					cm.dispose();
				}
			}
		}
    }
