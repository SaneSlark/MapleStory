var terminal072=false,sourceMap072=-1;
/*mia
	spawn NPC
	- EI Nath
	- by 稻、香
*/

var status = 0;
var mob = Array(2220000, 3220000, 5220000, 7220000,8220000,8220001,3220001,4220000,5220002,6220000,6220001,7220001,7220002,8220002,8220003,9300151,9300151);
var mobname = Array("红蜗牛王BOSS", "树妖王BOSS", "寄居蟹", "肯德熊","艾里杰","负狼雪人","大宇","歇尔夫","浮士德","多尔","朱诺","九尾狐","妖怪绅士","吉米拉","大海兽","人造人","愤怒人造人"
);
var mobcost = Array(1000000, 1500000, 2000000, 2500000,3000000,3500000,3000000,3000000,3000000,3000000,3000000,3000000,3000000,3000000,5000000,3000000,3000000);


var boss = Array(6130101, 6300005, 9400205, 8130100,8180000,8180001,9400120,9400121,9400014,9400575);
var bossname = Array("蘑菇王", "僵尸蘑菇王", "蓝蘑菇王", "蝙蝠怪","火焰龙","天鹰","男老板","女老板","天球","可爱大脚");
var bosscost = Array(5000000, 5000000, 5000000, 5000000,15000000,15000000,5000000,5000000,8000000,5000000);
var selectedmob = -1;
var mobkind;
var mobid;
var mobna;
var price;
var qty=1;

importPackage(net.sf.odinms.client);

function start() {
    sourceMap072=cm.getMapId();
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if(terminal072)return;
    if(mode!=1 || cm.getMapId()!=sourceMap072){terminal072=true;cm.dispose();return;}

	if (mode == -1) {
		terminal072=true;cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("#b谢谢下次再光顾.");
			terminal072=true;cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		}
		else {
			status--;
		}
		if (status == 0) {
			cm.sendNext("#bHi, 我是召唤师Mia，我可以为你服务吗.");
		} else if (status == 1) {
			cm.sendNextPrev("#b我可以为你召唤出你希望的怪兽和BOSS，但是您得给点钱我哟，祝你杀怪愉快.")
		} 

 		else if (status == 2) {
			cm.sendSimple ("#r请选择您要召唤的怪物种类?\r\n#b#L0#普通怪物#l\r\n#L1#BOSS怪物#l");
		} 
		else if (status == 3) {

			var selStr = "#r选择你想召唤的怪兽.#b";
		if (selection == 0) {
				mobkind=0;
				for (var i = 0; i < mob.length; i++) {
					selStr += "\r\n#L" + i + "#" + mobname[i] + "(" + mobcost[i] + " 枫币)#l";
				}
			cm.sendSimple(selStr);}
		else if (selection == 1){
				mobkind=1;
				for (var i = 0; i < boss.length; i++) {
					selStr += "\r\n#L" + i + "#" + bossname[i] + "(" + bosscost[i] + " 枫币)#l";
				}
			cm.sendSimple(selStr);
		}else {terminal072=true;cm.dispose();}

}
 else if (status == 4) {
    var ids072=mobkind==0?mob:mobkind==1?boss:null;
    if(ids072==null || selection!=Math.floor(selection) || selection<0 || selection>=ids072.length){terminal072=true;cm.dispose();return;}
    if(Packages.server.life.MapleLifeFactory.getMonsterStats(ids072[selection])==null){cm.sendOk("本客户端没有这项召唤资源，未扣金币。");terminal072=true;cm.dispose();return;}

			if (mobkind==0) {
		var prompt = "#b你想召唤多少只？";
		mobid  =mob[selection];
		mobna =mobname[selection];
		price=mobcost[selection];
		cm.sendGetNumber(prompt,1,1,100)
			}
			else if (mobkind==1){
		mobid  =boss[selection];
		mobna =bossname[selection];
		price=bosscost[selection];
		cm.sendYesNo("#d召唤#r"+mobna+"#d需要#r"+price+"#d枫币，你确定要召唤？");
			}
			else {terminal072=true;cm.dispose();}	
		} 


 else if (status == 5) {
			if (mobkind==0) {
				if(selection!=Math.floor(selection) || selection<1 || selection>100){terminal072=true;cm.dispose();return;}
                qty = selection;
				cm.sendYesNo("#d召唤#r"+qty+"#d只#r"+mobna+"#d需要#r"+price*qty+"#d枫币，你确定要召唤？");
			}
			else if (mobkind==1){
				terminal072=true;
                if (price>0 && price<=2147483647 && cm.getMeso() >= price)
				{ 
				cm.spawnMonster(mobid);
				cm.gainMeso(-price);
				terminal072=true;cm.dispose();
				}
				else
			cm.sendOk("#b对不起，你金币不足.");
			terminal072=true;cm.dispose();
				
			}
			else {terminal072=true;cm.dispose();}	
		} 
else if (status == 6) {				
			terminal072=true;
                if (qty>=1 && qty<=100 && price>0 && price*qty<=2147483647 && cm.getMeso() >= price*qty)
				{ 
				cm.spawnMonster(mobid,qty);
				cm.gainMeso(-price*qty);
				terminal072=true;cm.dispose();
				}
				else
			cm.sendOk("#b对不起，你金币不足.");
			terminal072=true;cm.dispose();
		}
	}
}	