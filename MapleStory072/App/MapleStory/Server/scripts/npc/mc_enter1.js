var request=null,done=false;
function start(){if(!cm.isLeader()){cm.sendOk("请由队长接受挑战。");cm.dispose();done=true;return;}request=cm.getNextCarnivalRequest();if(request==null){cm.sendOk("正在等待另一支同人数队伍挑战。");cm.dispose();done=true;return;}cm.sendYesNo(request.getChallengeInfo()+"\r\n是否接受挑战？");}
function action(mode,type,selection){
    if(done)return;done=true;if(mode!=1||request==null){cm.dispose();return;}
    var eim=cm.getEventInstance(),challenger=request.getChallenger();
    if(eim==null||eim.getProperty("phase")!="waiting"||challenger==null||challenger.getParty()==null||!cm.isLeader()||challenger.getParty().getLeader().getId()!=challenger.getId()||challenger.getMapId()!=980000000||challenger.getClient().getChannel()!=cm.getClient().getChannel()||challenger.getParty().getId()==cm.getParty().getId()){cm.sendOk("挑战申请已经失效。");cm.dispose();return;}
    var members=challenger.getParty().getMembers(),base=parseInt(eim.getProperty("base")),min=base>=980000500?3:2;
    var valid=members.size()==eim.getPlayerCount()&&members.size()>=min&&members.size()<=4;
    var it=members.iterator();while(it.hasNext()){var m=it.next(),p=challenger.getMap().getCharacterById(m.getId());if(p==null||!m.isOnline()||m.getChannel()!=cm.getClient().getChannel()||p.getLevel()<30||p.getLevel()>50||p.getEventInstance()!=null)valid=false;}
    if(!valid){cm.sendOk("对方队伍人数、等级或所在地图发生变化，请重新申请。");cm.dispose();return;}
    cm.dispose();eim.registerCarnivalParty(challenger,challenger.getMap(),1);
}
