/*mia
	spawn NPC
	- EI Nath
	- by ~?Cherry?[GoblinMS]
*/

var status = 0;
var mob = Array(9300105,9300106,9300119,9300039,7220002,8220001,8180001,9400014,5220003,9300003,9400120,9400121,7220000,7220001,8220002,7130400,6300004,6400004,7130402,7130401,9500130,9300139,9300140,9300151,9300152,6220000,8220003,8220000,9300012,8810026,6130101,9500124,9400205,6300005,8150000,9500140,8130100,9500139,9300085,9300092,9300094,9500200,8500000,8180000,8800002,2220000,4220000,4220001,5220000,5220001,5120100,5220002,9600009,9600010,3220001,3220000,9300089,9300090,9300028,8510000,8520000,9300136,8500001,9500180,8500002);
var mobname = Array("生气的老海盗","愤怒的老海盗","老海盗","远古精灵","妖怪禅师","驮狼雪人","天鹰","天球","提莫","绿水灵王","老板","女老板","肯德熊","九尾狐","吉米拉","黄色鬼怪","帕兹","帕兹王","绿色鬼怪","蓝色鬼怪","蓝色鬼怪2","法兰肯","生气的法兰肯","法兰肯2","生气的法兰肯2","多尔","大海兽","艾利杰","阿丽莎乐","暗黑龙王","蘑菇王","蘑菇王2","蓝蘑菇王","僵尸蘑菇王","蝙蝠魔","蝙蝠魔2","蝙蝠怪","蝙蝠怪2","异界的蝙蝠怪","遗忘的圣殿里蝙蝠怪","绑架犯蝙蝠魔","动物园的蝙蝠怪","时间球","火焰龙","扎昆","红蜗牛王","歇尔夫","歇尔夫2","巨居蟹","巨居蟹2","外星章鱼闪电棒","浮士德","大王蜈蚣","大王蜈蚣2","大宇","树妖王","火凤凰","冰凤凰","艾里葛斯","皮亚奴斯","皮亚奴斯2","战甲吹泡泡鱼王","帕普拉图斯","帕普拉图斯的座钟","帕普拉图斯的座2");
var mobcost = Array(50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000);


var boss = Array(9200002, 9200001, 9220005, 9220004,9220006,9100013,9100007,9100009,9300021,9400710);
var bossname = Array("黑木妖", "火野猪(PC)", "圣诞鹿", "圣诞矮人","小胖矮人","阿丁的分身","超级漂漂猪","超级可乐蜗牛","黑暗勇猛石巨人","巨大雪人");
var bosscost = Array(500000, 1000000, 5000000, 5000000,5000000,15000000,500000,5000000,80000000,500000000);
var selectedmob = -1;
var mobkind;
var mobid;
var mobna;
var price;
var qty=1;

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);

}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("#b谢谢下次再光顾.");
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
                
			cm.sendNext("#b我是 管理员雇佣来的首领陪刷员！(*^__^*) 嘻嘻……");
                
		} else if (status == 1) {
			cm.sendNextPrev("#b我可以为你召唤出你希望的首领，但是您得给点钱我哟，祝你杀怪愉快.")
                 
		} 

 		else if (status == 2) {if(cm.getChar().getVip() >= 0) {
			cm.sendSimple ("#r请选择您要召唤的怪物种类?\r\n#b#L0#首领怪#l");
                }else {
                 cm.sendOk("我是专为贵宾服务的，你不是贵宾，所以什么都看不到...")
                }
		} 
		else if (status == 3) {

			var selStr = "#r选择你想召唤的怪兽.#b";
		if (selection == 0) {
				mobkind=0;
				for (var i = 0; i < mob.length; i++) {
					selStr += "\r\n#L" + i + "#" + mobname[i] + "(" + mobcost[i] + " 金币)#l";
				}
			cm.sendSimple(selStr);}
		else if (selection == 1){
				mobkind=1;
				for (var i = 0; i < boss.length; i++) {
					selStr += "\r\n#L" + i + "#" + bossname[i] + "(" + bosscost[i] + " 金币)#l";
				}
			cm.sendSimple(selStr);
		}else cm.dispose();

}
 else if (status == 4) {
			if (mobkind==0) {
		var prompt = "#b你想召唤多少只？";
		mobid  =mob[selection];
		mobna =mobname[selection];
		price=mobcost[selection];
		cm.sendGetNumber(prompt,1,1,1)
			}
			else if (mobkind==1){
		mobid  =boss[selection];
		mobna =bossname[selection];
		price=bosscost[selection];
		cm.sendYesNo("#d召唤#r"+mobna+"#d需要#r"+price+"#d冒险币，你确定要召唤？");
			}
			else cm.dispose();	
		} 


 else if (status == 5) {
			if (mobkind==0) {
				qty = selection;
				cm.sendYesNo("#d召唤#r"+qty+"#d只#r"+mobna+"#d需要#r"+price*qty+"#d冒险币，你确定要召唤？");
			}
			else if (mobkind==1){
				if (cm.getMeso() >= price)
				{ 
				cm.spawnMonster(mobid);
				cm.gainMeso(-price);
				cm.dispose();
				}
				else
			cm.sendOk("#b对不起，你金币不足.");
			cm.dispose();
				
			}
			else cm.dispose();	
		} 
else if (status == 6) {				
			if (cm.getMeso() >= price*qty)
				{ 
				cm.spawnMonster(mobid,qty);
				cm.gainMeso(-price*qty);
				cm.dispose();
				}
				else
			cm.sendOk("#b对不起，你金币不足.");
			cm.dispose();
		}
	}
}	