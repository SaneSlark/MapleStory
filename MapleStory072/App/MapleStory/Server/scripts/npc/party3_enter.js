var done=false;
function start(){
    if(cm.getMapId()==920010000)cm.sendSimple("请击打云朵，收集20个云片放在发光处，帮助易克出现。\r\n#L1#离开挑战#l");
    else cm.sendSimple("女神塔组队任务：51～70级，6人组队，限时60分钟。\r\n#L0#进入女神塔#l\r\n#L2#关于女神手镯#l");
}
function action(mode,type,selection){
    if(done)return;done=true;if(mode!=1){cm.dispose();return;}
    if(cm.getMapId()==920010000){cm.dispose();var eim=cm.getEventInstance();if(selection==1){if(eim!=null)eim.removePlayer(cm.getPlayer());else cm.warp(920011200,0);}return;}
    if(selection==2){cm.sendOk("获得我的好感，并带来40个女神的羽毛，才有机会获得女神手镯。目前暂时无法兑换。");cm.dispose();return;}
    if(selection!=0||cm.getMapId()!=200080101||cm.getParty()==null||!cm.isLeader()){cm.sendOk("请在未知之塔，由六人队伍的队长与我交谈。");cm.dispose();return;}
    var members=cm.getParty().getMembers(),valid=members.size()==6,it=members.iterator();
    while(it.hasNext()){var member=it.next(),player=cm.getMap().getCharacterById(member.getId());if(player==null||!member.isOnline()||member.getChannel()!=cm.getClient().getChannel()||player.getLevel()<51||player.getLevel()>70||player.getEventInstance()!=null)valid=false;}
    if(!valid){cm.sendOk("需要六名51～70级队员，全部在线并在同一地图、同一频道，且未参加其他活动。");cm.dispose();return;}
    var em=cm.getEventManager("OrbisPQ");if(em==null||em.getProperty("state")!="0"){cm.sendOk("本频道已有队伍挑战，请稍后再来。");cm.dispose();return;}
    cm.dispose();em.startInstance(cm.getParty(),cm.getMap());
}
