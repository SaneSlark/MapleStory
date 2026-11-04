var done=false;
function start(){
    if(cm.getMapId()==980000000){var menu="怪物嘉年华：30～50级，双方同人数组队，比赛10分钟。";for(var i=1;i<=6;i++)menu+="\r\n#L"+i+"#场地"+i+"（每队"+(i>=5?"3":"2")+"～4人）#l";cm.sendSimple(menu+"\r\n#L10#50个嘉年华纪念币兑换项链#l");}
    else cm.sendSimple("欢迎参加怪物嘉年华！\r\n#L0#前往嘉年华大厅（30～50级）#l");
}
function valid(leader,map,min){
    if(leader==null||leader.getParty()==null||leader.getParty().getLeader().getId()!=leader.getId())return false;
    var members=leader.getParty().getMembers();if(members.size()<min||members.size()>4)return false;
    var it=members.iterator();while(it.hasNext()){var m=it.next(),p=map.getCharacterById(m.getId());if(p==null||!m.isOnline()||m.getChannel()!=leader.getClient().getChannel()||p.getLevel()<30||p.getLevel()>50||p.getEventInstance()!=null)return false;}return true;
}
function action(mode,type,selection){
    if(done)return;done=true;if(mode!=1){cm.dispose();return;}
    if(cm.getMapId()!=980000000){if(selection==0&&cm.getPlayer().getLevel()>=30&&cm.getPlayer().getLevel()<=50){cm.saveLocation("MULUNG_TC");cm.dispose();cm.warp(980000000,0);}else{cm.sendOk("参加等级为30～50级。");cm.dispose();}return;}
    if(selection==10){if(!cm.haveItem(4001129,50))cm.sendOk("请带来50个嘉年华纪念币。");else if(!cm.canHold(1122007,1))cm.sendOk("请在装备栏留出一个空位。");else{cm.gainItem(4001129,-50);cm.gainItem(1122007,1);}cm.dispose();return;}
    if(selection<1||selection>6||!valid(cm.getPlayer(),cm.getMap(),selection>=5?3:2)){cm.sendOk("请由队长申请，全员须在同图同频道、30～50级；场地1～4每队2～4人，场地5～6每队3～4人。");cm.dispose();return;}
    var em=cm.getEventManager("cpq"),base=980000000+selection*100;
    if(em==null){cm.sendOk("活动暂时无法开启。");cm.dispose();return;}
    var eim=em.getInstance("cpq"+base);
    if(eim==null){cm.dispose();em.startInstance(""+base,cm.getPlayer());return;}
    if(eim.getProperty("phase")!="waiting"||eim.getPlayerCount()!=cm.getParty().getMembers().size()){cm.sendOk("场地正在比赛，或等待队伍人数与你的队伍不同。");cm.dispose();return;}
    var owner=cm.getChannelServer().getPlayerStorage().getCharacterById(parseInt(eim.getProperty("red")));
    if(owner==null||owner.getParty()==null||owner.getParty().getId()==cm.getParty().getId()){cm.dispose();return;}
    owner.addCarnivalRequest(cm.getCarnivalChallenge(cm.getPlayer()));
    cm.openNpc(owner.getClient(),2042001,"mc_enter1");cm.sendOk("挑战申请已发送，请等待对方队长同意。");cm.dispose();
}
