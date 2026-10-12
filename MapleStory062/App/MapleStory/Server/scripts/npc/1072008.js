/*   By:稻、香
	20 fame NPC, default price 200mil.
	By V1ral.
	Credits to donkeydan on the setFame and getFame handlers.
	Add those before using this NPC, or it won't work correctly.
*/

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || status == 2) {
		cm.dispose();
	} else {
		if (status == 0 && mode == 0) {
			cm.sendOk("好的,希望以后还可以见到你的!");
			status = 2;
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendYesNo("#e欢迎 #h # 来到 #g #k #r勇士之魂挑战场#k,这一关只是入门关,你需要收集50个#v4001007#给我...#k.");
		        }else if (status == 1 ) {
		 if (cm.haveItem(4001007,50) == false){ 
                                      cm.sendOk("抱歉,你没有带来50个#v4001007# ,我不可以帮你进入下一关~~");
                        cm.dispose();
                        }else{ 
                        cm.sendOk("#b很好#k, 比我想象的还要快!!!"); 
                        } 
                        }else if (status == 2) { 
                        cm.gainItem(4001007,-50);  
                        cm.showEffect("quest/party/clear");
                        cm.playSound("Party1/Clear");
                        cm.warp(109010200, 0);
                        cm. sendOk("你已经获得进入下一关的决定权了...你需要#r找到这一关的主考官#k才能进入下一关~!!"); 
                        cm.dispose(); 
                        }            
           
        } 
}  