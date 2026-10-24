
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
                if (status >= 0 && mode == 0) {
                
			cm.sendOk("#e谢谢您的支持！ 祝你游戏愉快#k");
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
			cm.sendSimple("你好如果您是会员,您可享受许多#r特权#k.\r\n\r\n#e#b#L1#进入幸福村#l");
			} else if (status == 1) {
			if (selection == 1) {
				   if(cm.getChar().getVip() >= 0) {
                   cm.warp(209000000, 0);
				   cm.dispose();
				   }else{
                   cm.sendOk("#b你不是贵宾1，请联系管理员给你在线开通！！");
                   cm.dispose();   }  
			} else if  (selection == 2) {
				   if(cm.getChar().getVip() >= 2) {
                   cm.warp(209000009, 0);
				   cm.dispose();
				   }else{
                   cm.sendOk("#b你不是贵宾2，请联系管理员给你在线开通！！");
                   cm.dispose();   }     
            } else if (selection == 3) {
            if(cm.getChar().getVip() >= 3) {
                   cm.warp(920010000, 0);
                   cm.dispose(); 
                   }else{
                   cm.sendOk("#b你不是贵宾3，请联系管理员给你在线开通！！");
                   cm.dispose();   }     
   } else if (selection == 4) {
            if(cm.getChar().getVip() >= 4) {
                   cm.warp(922020300, 0);
                   cm.dispose(); 
                   }else{
                   cm.sendOk("#b你不是贵宾4，请联系管理员给你在线开通！！");
                   cm.dispose();   }    
   } else if (selection == 10) {
            if(cm.getChar().getVip() >= 5) {
                   cm.warp(801040101, 0);
                   cm.dispose(); 
                   }else{
                   cm.sendOk("#b你不是贵宾5，请联系管理员给你在线开通！！");
                   cm.dispose();   }    
            } else if (selection == 5) {
                   if(cm.getChar().getVip() < 1 ) {
                   cm.sendOk("对不起！你不是哀级贵宾会员无法领取工资.");
            } else if (cm.getBossLog('vipgz') >= 1) {
            cm.sendOk("抱歉，尊敬の哀级贵宾玩家你今天己经领取工资，请明天再来找我吧！");
                   cm.dispose(); 
                   }else{
                   cm.gainMeso(10000000); 
                   cm.gainNX(5000);
                   cm.setBossLog('vipgz');
cm.serverNotice("『贵宾办事处』：哀级贵宾: "+ cm.getChar().getName() +"领取了每日的1000W冒险币工资和5000点卷工资");
                   cm.dispose();   } 
} else if (selection == 6) {
                   if(cm.getChar().getVip() < 2 ) {
                   cm.sendOk("对不起！你不是衰级贵宾会员无法领取工资.");
            } else if (cm.getBossLog('vipgz') >= 1) {
            cm.sendOk("抱歉，尊敬の衰级贵宾玩家你今天己经领取工资，请明天再来找我吧！");
                   cm.dispose(); 
                   }else{
                   cm.gainMeso(25000000); 
                   cm.gainNX(10000);
                   cm.setBossLog('vipgz');
cm.serverNotice("『贵宾办事处』：衰级贵宾: "+ cm.getChar().getName() +"领取了每日的2500W冒险币工资和10000点卷工资");
                   cm.dispose();   } 
} else if (selection == 7) {
                   if(cm.getChar().getVip() < 3 ) {
                   cm.sendOk("对不起！你不是囧级贵宾会员无法领取工资.");
            } else if (cm.getBossLog('vipgz') >= 1) {
            cm.sendOk("抱歉，尊敬の囧级贵宾玩家你今天己经领取工资，请明天再来找我吧！");
                   cm.dispose(); 
                   }else{
                   cm.gainMeso(50000000); 
                   cm.gainNX(20000);
                   cm.setBossLog('vipgz');
cm.serverNotice("『贵宾办事处』：囧级贵宾: "+ cm.getChar().getName() +"领取了每日的5000W冒险币工资和20000点卷工资");
                   cm.dispose();   } 
} else if (selection == 9) {
                   if(cm.getChar().getVip() < 5 ) {
                   cm.sendOk("对不起！你不是究囧级贵宾会员无法领取工资.");
            } else if (cm.getBossLog('vipgz') >= 1) {
            cm.sendOk("抱歉，尊敬の究囧级贵宾玩家你今天己经领取工资，请明天再来找我吧！");
                   cm.dispose(); 
                   }else{
                   cm.gainMeso(500000000); 
                   cm.gainNX(100000);
                   cm.setBossLog('vipgz');
cm.serverNotice("『贵宾办事处』：究囧级贵宾: "+ cm.getChar().getName() +"领取了每日的5亿冒险币工资和10W点卷工资");
                   cm.dispose();   } 
} else if (selection == 8) {
                   if(cm.getChar().getVip() < 4 ) {
                   cm.sendOk("对不起！你不是超囧级贵宾会员无法领取工资.");
            } else if (cm.getBossLog('vipgz') >= 1) {
            cm.sendOk("抱歉，尊敬の超囧级贵宾玩家你今天己经领取工资，请明天再来找我吧！");
                   cm.dispose(); 
                   }else{
                   cm.gainMeso(100000000); 
                   cm.gainNX(50000);
                   cm.setBossLog('vipgz');
cm.serverNotice("『贵宾办事处』：超囧级贵宾: "+ cm.getChar().getName() +"领取了每日的1亿冒险币工资和50000点卷工资");  
                   cm.dispose();   } 
		}
		}
	}
}