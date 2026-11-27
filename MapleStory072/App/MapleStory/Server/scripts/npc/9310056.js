var state=-1,closed=false;
var letter=Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
function finish(){closed=true;cm.dispose();}
function canRewardParty(){
    var party=cm.getPlayer().getParty();
    if(party==null||party.getMembers().size()==1)return cm.canHold(4001137,1);
    var it=party.getMembers().iterator(),map=cm.getPlayer().getMapId(),event=cm.getPlayer().getEventInstance();
    while(it.hasNext()){
        var member=cm.getChannelServer().getPlayerStorage().getCharacterById(it.next().getId());
        if(member!=null&&(member.getMapId()==map||member.getEventInstance()==event)){
            if(!Packages.server.MapleInventoryManipulator.checkSpace(member.getClient(),4001137,1,""))return false;
        }
    }
    return true;
}
function action(mode,type,selection){
    if(closed)return;
    if(mode!=1){finish();return;}
    state++;
    if(state==0){cm.sendSimple("你好，我是大卫。\r\n请确认已经准备好答案所需的字母。\r\n\r\n#b#L0#提交答案#l\r\n#L1#离开地图#l#k");return;}
    if(state!=1){finish();return;}
    if(selection==1){
        for(var i=3994059;i<3994085;i++)cm.removeAll(i);
        cm.warp(702090400,0);finish();return;
    }
    if(selection!=0){finish();return;}
    if(!cm.isLeader()||cm.getPlayer().getEventInstance()==null){cm.sendOk("需要队长在英语村挑战中提交答案。");finish();return;}
    var answer=cm.getPlayer().getEventInstance().getProperty("answer");
    if(answer==null||answer.length()==0){cm.sendOk("当前没有可提交的答案。");finish();return;}
    var required=Array(answer.length),valid=true;
    for(var i=0;i<answer.length();i++){
        required[i]=-1;
        for(var x=0;x<letter.length;x++){
            if(answer.substring(i,i+1).equals(letter[x])){required[i]=3994059+x;break;}
        }
        if(required[i]<0)valid=false;
    }
    if(!valid){cm.sendOk("当前答案包含无法识别的字母。");finish();return;}
    var complete=0;
    for(var i=0;i<required.length;i++){
        var count=0;
        for(var x=0;x<required.length;x++)if(required[x]==required[i])count++;
        if(cm.haveItem(required[i],count,false,false))complete++;
    }
    var allowed={};
    for(var i=0;i<required.length;i++)allowed[required[i]]=true;
    var extra=0;
    for(var i=3994059;i<3994085;i++)if(allowed[i]!=true&&cm.haveItem(i,1))extra++;
    if(extra>0)cm.sendOk("你带有答案不需要的字母，请核对后再提交。");
    else if(complete!=required.length)cm.sendOk("答案所需的字母数量不足，请核对后再提交。");
    else{
        if(!canRewardParty()){cm.sendOk("请先为领奖队员的其他栏留出优秀印章的空间，再提交答案。字母尚未扣除。");finish();return;}
        for(var i=0;i<required.length;i++){
            var earlier=false;
            for(var x=0;x<i;x++)if(required[x]==required[i]){earlier=true;break;}
            if(!earlier)cm.givePartyItems(required[i],0,true);
        }
        cm.givePartyItems(4001137,1);
        cm.givePartyNX(500);
        cm.warpParty(702090400,0);
        finish();return;
    }
    finish();
}
