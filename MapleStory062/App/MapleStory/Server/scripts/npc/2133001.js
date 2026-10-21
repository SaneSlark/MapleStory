/*
	Mady By Coffee
	Powered By XXMS
	Warp NPC
*/

var bossmaps = Array(
										Array(910000000,0,"自由市场"), 
										Array(930000100,0,"深入毒雾森林")
										);
var monstermaps = Array(
										Array(910000000,0,"自由市场"), 
										Array(930000100,0,"深入毒雾森林")
										); 
var townmaps = Array(
										Array(910000000,0,"自由市场"), 
										Array(930000100,0,"深入毒雾森林")
							);
var chosenMap = -1;
var monsters = 0;
var towns = 0;
var bosses = 0;

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 3 && mode == 0) {
			cm.sendOk("下次再见!.");
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
                        cm.sendNext("你好,我是毒雾森林传送员!");                  
                }
               if (status == 1) {
                   cm.sendSimple("#fUI/UIWindow.img/QuestIcon/3/0#\r\n#L0#毒雾森林传送#l\r\n#L1#抱歉,我走错了#l");
               }
               else if (status == 2) {
                   if (selection == 0) {
                       cm.sendSimple("#fUI/UIWindow.img/QuestIcon/3/0#\r\n#L0#深入毒雾森林#l\r\n#L1#深入毒雾森林#l\r\n#L2#深入毒雾森林#l");
                   }
                   else if (selection == 1) {
                       cm.dispose();
                   }
               }
               else if (status == 3) {
                   if (selection == 0) {
                        var selStr = "选择你的目的地吧.#b";
			for (var i = 0; i < townmaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + townmaps[i][2] + "";
			}
                        cm.sendSimple(selStr);
                        towns = 1;
                   }
                   if (selection == 1) {
                       var selStr = "选择你的目的地吧.#b";
                       for (var i = 0; i < monstermaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + monstermaps[i][2] + "";
                       }
                       cm.sendSimple(selStr);
                       monsters = 1;
                   }
                   if (selection == 2) {
                       var selStr = "选择你的目的地吧.#b";
                       for (var i = 0; i < bossmaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + bossmaps[i][2] + "";
                       }
                       cm.sendSimple(selStr);
                       bosses = 1;
                   }
               }
            else if (status == 4) {
                if (towns == 1) {
                cm.sendYesNo("你确定要去 " + townmaps[selection][2] + "? 价格:#r"+townmaps[selection][1]+"#k金币");
		chosenMap = selection;
                towns = 2;
                }
                else if (monsters == 1) {
                cm.sendYesNo("你确定要去 " + monstermaps[selection][2] + "? 价格:#r"+monstermaps[selection][1]+"#k金币");
                chosenMap = selection;
                monsters = 2;
                }
                else if (bosses == 1) {
                cm.sendYesNo("你确定要去 " + bossmaps[selection][2] + "? 价格:#r"+bossmaps[selection][1]+"#k金币");
                chosenMap = selection;
                bosses = 2;
                }
            }
            else if (status == 5) {
                if (towns == 2) {
                	if(cm.getMeso()>=townmaps[chosenMap][1]){
                		cm.warp(townmaps[chosenMap][0], 0);
                		cm.gainMeso(-townmaps[chosenMap][1]);
                	}else{
                		cm.sendOk("你没有足够的金币哦!");
                	}
                    cm.dispose();
                }
                else if (monsters == 2) {
                    if(cm.getMeso()>=monstermaps[chosenMap][1]){
                		cm.warp(monstermaps[chosenMap][0], 0);
                		cm.gainMeso(-monstermaps[chosenMap][1]);
                	}else{
                		cm.sendOk("你没有足够的金币哦!");
                	}
                    cm.dispose();
                }
                else if (bosses == 2) {
                    if(cm.getMeso()>=bossmaps[chosenMap][1]){
                		cm.warp(bossmaps[chosenMap][0], 0);
                		cm.gainMeso(-bossmaps[chosenMap][1]);
                	}else{
                		cm.sendOk("你没有足够的金币哦!");
                	}
                    cm.dispose();
                }
            }
              
            }
}
