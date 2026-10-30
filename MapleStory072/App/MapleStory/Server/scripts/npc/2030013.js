var closed=false;
/*
 *扎昆传送
 *Final by ZreHy冒险岛
*/
importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if(closed)return;
    if(mode!=1){closed=true;cm.dispose();return;}
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 0 && mode == 0) {
                
			cm.sendOk("好的,如果你想好了要做什么,我会很乐意的为你服务的..");
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
			cm.sendSimple("这里是扎昆祭台, 如果你想挑战请带上#b#t4001017##k, 你是不是要去挑战扎昆 .\r\n\#L3##b我要进去,欺负阿昆!#l");
			} else if (status == 1) {
                closed=true;
			if (selection == 1) {
				   if(cm.getMeso() >= 100000000) {
					cm.gainMeso(-100000000);
					cm.gainItem(4001017, 1);
					cm.sendOk("购买成功!");
				   }else{
                   cm.sendOk("你没有带足够的钱钱!");
                   cm.dispose();   }  
} else if  (selection == 2) {
				   if(cm.getMeso() >= 2000000) {
					cm.gainMeso(-2000000);
					cm.gainItem(2022178, 100);
					cm.sendOk("购买成功!");
				   }else{
                   cm.sendOk("你没有带足够的钱钱!");
                   cm.dispose();   }  
			} else if  (selection == 3) {
				   if(cm.getLevel() >= 120) {
                   var em=cm.getEventManager("ZakumBattle");
                   if(em==null){cm.sendOk("挑战暂时无法启动。");cm.dispose();return;}
                   var eim=em.getInstance("ZakumBattle");
                   if(cm.getPlayer().getEventInstance()!=null){cm.dispose();return;}
                   if(eim==null)em.startInstance(cm.getPlayer(),cm.getPlayer().getName());
                   else if(String(eim.getProperty("canEnter"))=="true")eim.registerPlayer(cm.getPlayer());
                   else cm.sendOk("战斗已经开始，请等待本轮挑战结束。");
				   cm.dispose();
				   }else{
                   cm.sendOk("你等级也太低了吧!这里最少要120级才能进去!");
                   cm.dispose();   }     
            
            
			}
		}
	}
}
