/*
Make By bLAckMapLE
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
	cm.sendSimple ("#e#b魂#k是个大坏蛋,他只许我把东东卖给#r高级会员#k,不然就拔掉我的插头.我是不会屈服的,我要把好东东偷偷卖给你,不要告诉他噢." +
                 "#k\r\n#L80##r法师装备" +
                 "#k\r\n#L81##r飞侠装备" +
                 "#k\r\n#L82##r战士装备" +
                 "#k\r\n#L83##r弓手装备" +
                 "#k\r\n#L84##r海盗装备" +
                 "#k\r\n#L85##r全职装备" +
                 "#k\r\n#L86##r道具用品");
	  } else if (selection == 80) {
               cm.sendSimple ("你要选哪个? #e#d" +
			"#k\r\n#L0##r鞋 子" +
			"#k\r\n#L1##r套 服." +
			"#k\r\n#L2##r手 套" +
			"#k\r\n#L3##r帽 子" +
			"#k\r\n#L4##r盾 牌");
	  } else if (selection == 81) {
               cm.sendSimple ("你要选哪个? #e#d" +
			"#k\r\n#L7##b鞋 子" +
			"#k\r\n#L8##b裤 子" +
			"#k\r\n#L9##b上 衣" +
			"#k\r\n#L10##b套 服" +
			"#l\r\n#L11##b手 套" +
			"#l\r\n#L12##b帽 子" +
			"#l\r\n#L13##b盾 牌" +
			"#k\r\n#L16##b飞 标");
	  } else if (selection == 82) {
               cm.sendSimple ("你要选哪个? #e#d" +
			"#k\r\n#L17##d鞋 子" +
			"#k\r\n#L18##d裤 子" +
			"#k\r\n#L19##d上 衣" +
			"#k\r\n#L20##d套 服" +
			"#k\r\n#L21##d手 套" +
			"#k\r\n#L22##d帽 子" +
			"#k\r\n#L23##d盾 牌");
	  } else if (selection == 83) {
               cm.sendSimple ("你要选哪个? #e#d" +
			"#k\r\n#L32##g鞋 子" +
			"#k\r\n#L33##g套 服" +
			"#k\r\n#L34##g手 套" +
			"#k\r\n#L35##g帽 子" +
			"#k\r\n#L38##g弓箭，弩箭");
	  } else if (selection == 84) {
               cm.sendSimple ("你要选哪个? #e#d" +
			"#k\r\n#L76##r帽 子" +
			"#k\r\n#L72##r子 弹" +
			"#k\r\n#L73##r套 服" +
			"#k\r\n#L74##r手 套" +
			"#k\r\n#L75##r鞋 子");
	  } else if (selection == 85) {
               cm.sendSimple ("你要选哪个? #e#d" +
			"#k\r\n#L39#枫叶武器" +
			"\r\n#L40#耳 环" +
			"\r\n#L41#项链和面部配饰" +
			"\r\n#L42#披 风" +
			"\r\n#L44#常见的帽子" +
			"\r\n#L45#工地手套" +
			"\r\n#L46#浴 巾" +
			"\r\n#L47#常见的盾牌" +
			"\r\n#L48#0级武器");
	  } else if (selection == 86) {
               cm.sendSimple (" #e#d你要选哪个?" +
			"\r\n#L51#卷 轴" +
			"\r\n#L55#宠 物" +
			"\r\n#L53#坐 骑"+
			"\r\n#L57#椅 子" +
			"\r\n#L52#Boss 召唤物" +
			"\r\n#L50#喇叭,召唤石" );
	  } else if (selection == 87) {
               cm.sendSimple ("你要选哪个? #e#d" +
			"\r\n#L56#所有的宠物装备、宠物食品、卷、书籍" +
			"\r\n#L59#[现金] 披 风" +
			"\r\n#L60#[现金] 手 套" +
			"\r\n#L61#[现金] 盾 牌" +
			"\r\n#L62#[现金] 戒 指" +
			"\r\n#L64#[现金] 表 情" +
			"\r\n#L65#[现金] 耳 环" +
			"\r\n#L66#[现金] 眼 部" +
			"\r\n#L67#[现金] 脸 部" +
			"\r\n#L68#[现金] 场 景" +
			"\r\n#L69#[现金] 投 掷" +
			"\r\n#L70#[现金] 祝 福");
	  } else if (selection == 0) {
		cm.openShop (10000);
		cm.dispose();
	  } else if (selection == 1) {
		cm.openShop (10001);
		cm.dispose();
	  } else if (selection == 2) {
		cm.openShop (10002);
		cm.dispose();
	  } else if (selection == 3) {
		cm.openShop (10003);
		cm.dispose();
	  } else if (selection == 4) {
		cm.openShop (10004);
		cm.dispose();
	  } else if (selection == 5) {
		cm.openShop (10005);
		cm.dispose();
	  } else if (selection == 6) {
		cm.openShop (10006);
		cm.dispose();
	  } else if (selection == 7) {
		cm.openShop (10007);
		cm.dispose();
	  } else if (selection == 8) {
		cm.openShop (10008);
		cm.dispose();
	  } else if (selection == 9) {
		cm.openShop (10009);
		cm.dispose();
	  } else if (selection == 10) {
		cm.openShop (10010);
		cm.dispose();
	  } else if (selection == 11) {
		cm.openShop (10011);
		cm.dispose();
	  } else if (selection == 12) {
		cm.openShop (10012);
		cm.dispose();
	  } else if (selection == 13) {
		cm.openShop (10013);
		cm.dispose();
	  } else if (selection == 14) {
		cm.openShop (10014);
		cm.dispose();
	  } else if (selection == 15) {
		cm.openShop (10015);
		cm.dispose();
	  } else if (selection == 16) {
		cm.openShop (10038);
		cm.dispose();
	  } else if (selection == 17) {
		cm.openShop (10016);
		cm.dispose();
	  } else if (selection == 18) {
		cm.openShop (10017);
		cm.dispose();
	  } else if (selection == 19) {
		cm.openShop (10018);
		cm.dispose();
	  } else if (selection == 20) {
		cm.openShop (10019);
		cm.dispose();
	  } else if (selection == 21) {
		cm.openShop (10020);
		cm.dispose();
	  } else if (selection == 22) {
		cm.openShop (10021);
		cm.dispose();
	  } else if (selection == 23) {
		cm.openShop (10022);
		cm.dispose();
	  } else if (selection == 24) {
		cm.openShop (10023);
		cm.dispose();
	  } else if (selection == 25) {
		cm.openShop (10024);
		cm.dispose();
	  } else if (selection == 26) {
		cm.openShop (10025);
		cm.dispose();
	  } else if (selection == 27) {
		cm.openShop (10026);
		cm.dispose();
	  } else if (selection == 28) {
		cm.openShop (10027);
		cm.dispose();
	  } else if (selection == 29) {
		cm.openShop (10028);
		cm.dispose();
	  } else if (selection == 30) {
		cm.openShop (10029);
		cm.dispose();
	  } else if (selection == 31) {
		cm.openShop (10030);
		cm.dispose();
	  } else if (selection == 32) {
		cm.openShop (10031);
		cm.dispose();
	  } else if (selection == 33) {
		cm.openShop (10032);
		cm.dispose();
	  } else if (selection == 34) {
		cm.openShop (10033);
		cm.dispose();
	  } else if (selection == 35) {
		cm.openShop (10034);
		cm.dispose();
	  } else if (selection == 36) {
		cm.openShop (10035);
		cm.dispose();
	  } else if (selection == 37) {
		cm.openShop (100320);
		cm.dispose();
	  } else if (selection == 38) {
		cm.openShop (10037);
		cm.dispose();
	  } else if (selection == 39) {
		cm.openShop (10051);
		cm.dispose();
	  } else if (selection == 40) {
		cm.openShop (10039);
		cm.dispose();
	  } else if (selection == 41) {
		cm.openShop (10040);
		cm.dispose();
	  } else if (selection == 42) {
		cm.openShop (10041);
		cm.dispose();
	  } else if (selection == 43) {
		cm.openShop (10042);
		cm.dispose();
	  } else if (selection == 44) {
		cm.openShop (10043);
		cm.dispose();
	  } else if (selection == 45) {
		cm.openShop (10044);
		cm.dispose();
	  } else if (selection == 46) {
		cm.openShop (10045);
		cm.dispose();
	  } else if (selection == 47) {
		cm.openShop (10046);
		cm.dispose();
	  } else if (selection == 48) {
		cm.openShop (10047);
		cm.dispose();
	  } else if (selection == 49) {
		cm.openShop (10048);
		cm.dispose();
	  } else if (selection == 50) {
		cm.openShop (10048);
		cm.dispose();
	  } else if (selection == 51) {
		cm.openShop (1334);
		cm.dispose();
	  } else if (selection == 52) {
		cm.openShop (10050);
		cm.dispose();
	  } else if (selection == 53) {
		cm.openShop (10052);
		cm.dispose();
	  } else if (selection == 54) {
		cm.openShop (10053);
		cm.dispose();
	  } else if (selection == 55) {
		cm.openShop (1350);
		cm.dispose();
	  } else if (selection == 56) {
		cm.openShop (10055);
		cm.dispose();
	  } else if (selection == 57) {
		cm.openShop (10056);
		cm.dispose();
	  } else if (selection == 58) {
		cm.openShop (10057);
		cm.dispose();
                } else if (selection == 59) {
		cm.openShop (10058);
		cm.dispose();
                } else if (selection == 60) {
		cm.openShop (10059);
		cm.dispose();
                } else if (selection == 61) {
		cm.openShop (10060);
		cm.dispose();
                } else if (selection == 62) {
		cm.openShop (10061);
		cm.dispose();
                } else if (selection == 63) {
		cm.openShop (10062);
		cm.dispose();
                } else if (selection == 64) {
		cm.openShop (10063);
		cm.dispose();
                } else if (selection == 65) {
		cm.openShop (10064);
		cm.dispose();
                } else if (selection == 66) {
		cm.openShop (10065);
		cm.dispose();
                } else if (selection == 67) {
		cm.openShop (10066);
		cm.dispose();
                } else if (selection == 68) {
		cm.openShop (10067);
		cm.dispose();
                } else if (selection == 69) {
		cm.openShop (10068);
		cm.dispose();
                } else if (selection == 70) {
		cm.openShop (10069);
		cm.dispose();
                } else if (selection == 71) {
		cm.openShop (13000);
		cm.dispose();
                } else if (selection == 72) {
		cm.openShop (13001);
		cm.dispose();
                } else if (selection == 73) {
		cm.openShop (13002);
		cm.dispose();
                } else if (selection == 74) {
		cm.openShop (13003);
		cm.dispose();
                } else if (selection == 75) {
		cm.openShop (13004);
		cm.dispose();
                } else if (selection == 76) {
		cm.openShop (13005);
		cm.dispose();
	  } else if (selection == 88) {
                cm.sendSimple ("你喜欢那种?#e#d" +
                 "#k\r\n#L89##r1亿金币兑换1万点卷" +
                 "#k\r\n#L90##r2亿金币兑换2万点卷" +
                 "#k\r\n#L91##r3亿金币兑换3万点卷" +
                 "#k\r\n#L92##r4亿金币兑换4万点卷" +
                 "#k\r\n#L93##r5亿金币兑换5万点卷");
                } else if (selection == 89) {
		if (cm.getMeso < 100000000) {
                   cm.sendOk ("请检查，看看是否有足够的金币.");
                   cm.dispose();
                     } else {
                   cm.gainMeso (-100000000);
                   cm.gainNX(10000,4);
                   cm.dispose();
                   }
                } else if (selection == 90) {
		if (cm.getMeso < 200000000) {
                   cm.sendOk ("请检查，看看是否有足够的金币.");
                   cm.dispose();
                     } else {
                   cm.gainMeso (-20000000);
                   cm.gainNX(20000,4);
                   cm.dispose();
                   }
                } else if (selection == 91) {
		if (cm.getMeso < 300000000) {
                   cm.sendOk ("请检查，看看是否有足够的金币.");
                   cm.dispose();
                     } else {
                   cm.gainMeso (-300000000);
                   cm.gainNX(30000,4);
                   cm.dispose();
                   }
                } else if (selection == 92) {
		if (cm.getMeso < 40000000) {
                   cm.sendOk ("请检查，看看是否有足够的金币.");
                   cm.dispose();
                     } else {
                   cm.gainMeso (-400000000);
                   cm.gainNX(40000,4);
                   cm.dispose();
                   }
                } else if (selection == 93) {
		if (cm.getMeso < 500000000) {
                   cm.sendOk ("请检查，看看是否有足够的金币.");
                   cm.dispose();
                     } else {
                   cm.gainMeso (-500000000);
                   cm.gainNX(50000,4);
                   cm.dispose();
                   }
      }
}
}