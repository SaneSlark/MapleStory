var done=false;
function start(){
    var map=cm.getMapId();
    if(map==920011200){cm.sendYesNo("要返回未知之塔吗？");return;}
    if(map==920010000)cm.sendSimple("将20个云片放在发光处，等易克出现后由队长交谈。\r\n#L0#进入女神塔#l\r\n#L1#离开挑战#l");
    else if(map==920010100)cm.sendSimple("请完成六个房间，把六块碎片放回对应的女神像裂痕处。\r\n#L0#进入花园挑战精灵爸爸#l\r\n#L1#离开挑战#l");
    else cm.sendSimple("请与队友合作完成这个房间。\r\n#L0#检查房间进度／交付小碎片#l\r\n#L1#离开挑战#l");
}
function action(mode,type,selection){
    if(done)return;done=true;if(mode!=1){cm.dispose();return;}
    if(cm.getMapId()==920011200){cm.dispose();cm.warp(200080101,0);return;}
    var eim=cm.getEventInstance();if(eim==null){cm.dispose();if(selection==1)cm.warp(920011200,0);return;}
    if(selection==1){cm.dispose();eim.removePlayer(cm.getPlayer());return;}
    if(selection!=0||!cm.isLeader()){cm.sendOk("请由队长与我交谈。");cm.dispose();return;}
    var em=eim.getEventManager(),map=cm.getMapId(),fn=null;
    if(map==920010000)fn="enterTower";
    else if(map==920010100){
        if(eim.getProperty("phase")=="garden"){cm.dispose();var garden=eim.getMapInstance(12);var players=eim.getPlayers();for(var i=0;i<players.size();i++)players.get(i).changeMap(garden,garden.getPortal(0));return;}
        fn="enterGarden";
    }
    else if(map==920010500)fn="checkSealed";
    else if(map==920010700)fn="checkLevers";
    if(fn!=null){var result=em.getIv().invokeFunction(fn,eim);if(String(result)!="true")cm.sendOk("条件尚未完成。请继续收集碎片，或让队员调整平台／机关组合。");cm.dispose();return;}
    var trades={920010200:[4001050,30,4001044],920010300:[4001051,15,4001045],920010600:[4001052,10,4001048]},trade=trades[map];
    if(trade==null)cm.sendOk("请查看房间内的机关，把取得的女神像碎片带回中央大厅。");
    else if(eim.getProperty("room"+map)=="1")cm.sendOk("这个房间的碎片已经领取过了。");
    else if(!cm.haveItem(trade[0],trade[1]))cm.sendOk("请由队长带来"+trade[1]+"个#t"+trade[0]+"#。");
    else if(!cm.canHold(trade[2],1))cm.sendOk("请在其他栏留出空位。");
    else{eim.setProperty("room"+map,"1");cm.gainItem(trade[0],-trade[1]);cm.gainItem(trade[2],1);}
    cm.dispose();
}
