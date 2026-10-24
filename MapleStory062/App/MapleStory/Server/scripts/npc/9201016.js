/*mia
	spawn NPC
	- EI Nath
	- by ~?Cherry?[GoblinMS]
*/

var status = 0;
var mob = Array(1210102, 2130103, 2230101, 3000005,3210200,4130100,4230117,4230118,6230602,6300001,8130100,8140702,8150300,8150302);
var mobname = Array("花蘑菇", "青蛇", "僵尸蘑菇", "玩具棕熊","幼红独角狮","土龙","白外星人队长","白外星人长官","骷髅士官","变形白雪人","蝙蝠怪","红飞龙","犀牛龙","黑飞龙"
);
var mobcost = Array(500, 800, 1500, 3000,5000,8000,15000,30000,50000,100000,150000000,300000,1000000,2000000,5000000);


var boss = Array(9200002, 9200001, 9220005, 9220004,9220006,9100013,9100007,9100009,9300021,9400710);
var bossname = Array("黑木妖(PC)", "火野猪(PC)", "圣诞鹿", "圣诞矮人","小胖矮人","阿丁的分身","超级漂漂猪","超级可乐蜗牛","黑暗勇猛石巨人","巨大雪人");
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
                
			cm.sendNext("#b我是 管理员雇佣来的陪刷员！(*^__^*) 嘻嘻……");
                
		} else if (status == 1) {
			cm.sendNextPrev("#b我可以为你召唤出你希望的怪兽，但是您得给点钱我哟，祝你杀怪愉快.")
                 
		} 

 		else if (status == 2) {if(cm.getChar().getVip() >= 0) {
			cm.sendSimple ("#r请选择您要召唤的怪物种类?\r\n#b#L0#练级怪物#l\r\n#L1#娱乐怪物#l");
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
		cm.sendGetNumber(prompt,1,1,50)
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