
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("你想去挑战吗？");
        } else if (status == 1) {
            if(cm.getLevel() >= 0 ){  //判断人物等级 
                if (cm.getParty() == null) { // 没有开队伍 
                    cm.sendOk("#e你好像还没有一个队伍,我是不能送你进去的."); 
                    cm.dispose(); 
                    } 
            if (!cm.isLeader()) { // 不是队长 
                cm.sendSimple("如果你想挑战一下蜈蚣, 那么你只能自己开队伍,一个人去单挑,所以不能和人家组队！"); 
                cm.dispose(); 
                    }else { 
            var party = cm.getParty().getMembers(); 
            var next = true; 
                if (party.size() > 0){ //判断队伍里面是否大于1人，如果大于，则不能开启任务 
                    next = false; 
                    } 
                if (next) { 
            var em = cm.getEventManager("wgquest");  //wgquest为任务的名字 
                if (em == null) { 
                    cm.sendOk("请至少组上2人！谢谢！要不然你完蛋"); 
                } else {  //开始任务 
                em.startInstance(cm.getParty(),cm.getChar().getMap()); 
                party = cm.getChar().getEventInstance().getPlayers(); 
                cm.removeFromParty(4001008, party); 
                cm.removeFromParty(4001007, party);  
                } 
            cm.dispose(); 
                    } 
                } 
            }else{ 
                cm.sendOk("#e#r对不起,你的等级太低,去了也是送死."); 
                cm.dispose(); 
            }
        }
    }
}    
      

				