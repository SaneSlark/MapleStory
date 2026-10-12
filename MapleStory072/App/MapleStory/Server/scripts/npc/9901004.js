	var status; 

function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) {
    if (mode != 1 || status >= 1) { cm.dispose(); return; } 
    if (mode == 1) { 
        status++; 
    }else{ 
        status--; 
    } 
     
    if (status == 0) { 
      cm.sendSimple("#e可以用1337个#i4000252#兑换10000点券。\r\n#L0#我要兑换#l\r\n#L1#暂不兑换"); 
   } else if (status == 1) { 
        if (selection == 0) { 
            if (cm.haveItem(4000252, 1337) && cm.getPlayer().getCSPoints(1) <= 2147473647) { 
                cm.sendOk("#e物品齐全，兑换完成！");   
			   cm.gainItem(4000252,-1337);
			   cm.modifyNX(10000, 1);
                cm.dispose(); 
            }else{ 
                cm.sendOk("#e请收集好物品后再来。"); 
                cm.dispose(); 
            } 
        } else if (selection == 1) { 
            cm.sendOk("#e下次再来吧。"); 
            cm.dispose(); 
        } 
    }
	}