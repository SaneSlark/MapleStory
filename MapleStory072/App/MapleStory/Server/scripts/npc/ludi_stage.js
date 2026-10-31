// CMS local path 1 -> 4 -> 7 -> 8 -> 9, matching existing LudiPQ setup.
var closed=false;
var contracts={"922010100":[2040036,1,0,4001022,25],"922010400":[2040039,4,1,4001022,6],
 "922010700":[2040042,7,4,4001156,3],"922010800":[2040043,8,7,0,0],"922010900":[2040044,9,8,4001023,1]};
function context(){
    var row=contracts[String(cm.getMapId())],eim=cm.getPlayer().getEventInstance();
    if(row==null || cm.getNpc()!=row[0] || eim==null || String(eim.getEventManager().getName())!="LudiPQ")return null;
    return {row:row,eim:eim};
}
function start(){
    var c=context();
    if(c==null){closed=true;cm.dispose();return;}
    var r=c.row,e=c.eim;
    if(!cm.isLeader()){cm.sendOk("请让队长与我交谈。");closed=true;cm.dispose();return;}
    if(r[2]>0 && String(e.getProperty(r[2]+"stageclear"))!="true"){cm.sendOk("请先完成前一关。");closed=true;cm.dispose();return;}
    if(String(e.getProperty(r[1]+"stageclear"))=="true"){cm.sendOk("本关已经完成，请前往下一关。");closed=true;cm.dispose();return;}
    var message=r[1]==8?"请让5名队员分别站在5个不同的箱子上，再由队长确认组合。":
        r[1]==9?"请击败阿丽莎乐，并交回1张#t4001023#。":
        "请收集"+r[4]+"张#t"+r[3]+"#，由队长交给我。";
    cm.sendYesNo(message+"\r\n现在检查是否完成吗？");
}
function boxes(eim){
    var map=cm.getPlayer().getMap(),areas=map.getAreas(),players=eim.getPlayers(),bits=[0,0,0,0,0,0,0,0,0],count=0;
    if(areas.size()!=9)return false;
    for(var i=0;i<players.size();i++){
        var chr=players.get(i);
        if(chr.getMapId()!=922010800)continue;
        for(var j=0;j<9;j++)if(map.getArea(j).contains(chr.getPosition())){
            if(bits[j]==1)return false;
            bits[j]=1;count++;break;
        }
    }
    return count==5 && bits.join("")==String(eim.getProperty("8combo"));
}
function action(mode,type,selection){
    if(closed)return;
    closed=true;
    if(mode!=1){cm.dispose();return;}
    var c=context();
    if(c==null || !cm.isLeader()){cm.dispose();return;}
    var r=c.row,e=c.eim;
    if(String(e.getProperty(r[1]+"stageclear"))=="true" || (r[2]>0 && String(e.getProperty(r[2]+"stageclear"))!="true")){cm.dispose();return;}
    if(r[1]==8){
        if(!boxes(e)){cm.sendOk("箱子组合不正确，或站在箱子上的队员数量不是5人，请重新尝试。");cm.dispose();return;}
    }else{
        if(!cm.haveItem(r[3],r[4]) || (r[1]==9 && String(e.getProperty("bossDefeated"))!="true")){
            cm.sendOk("还没有完成本关的要求。");cm.dispose();return;
        }
        cm.gainItem(r[3],-r[4]);
    }
    e.setProperty(r[1]+"stageclear","true");
    if(r[1]==9)e.finishPQ();else cm.sendOk("本关已经完成，请从传送口前往下一关。");
    cm.dispose();
}
