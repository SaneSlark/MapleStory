// CMS072: LPQ Check 1202 (35-50, six players); user-approved Shaolin compatibility.
var closed=false,partyId=-1;
var rule=null;
function chooseRule(){rule=cm.getNpc()==2040034?{map:221024500,event:"LudiPQ",min:35,max:50,size:6,title:"玩具城组队任务",detail:"需要6名35至50级队员，由队长带领，所有队员须在本地图。挑战限时20分钟。"}:
         cm.getNpc()==9310039?{map:702070400,event:"shaoling",min:150,max:0,size:1,title:"藏经阁密室",detail:"150级起，1至6名队员，由队长带领，所有队员须在本地图，限时10分钟。"}:null;}
function problem(){
    if(rule==null || cm.getMapId()!=rule.map)return "这里不能开始这项挑战。";
    var party=cm.getParty();
    if(party==null)return "请先组成队伍，再由队长与我交谈。";
    if(!cm.isLeader())return "请让队长与我交谈。";
    if(partyId!=-1 && party.getId()!=partyId)return "队伍已变更，请重新与我交谈。";
    var members=party.getMembers();
    if(members.size()<rule.size || members.size()>6)return rule.detail;
    var iterator=members.iterator();
    while(iterator.hasNext()){
        var member=iterator.next(),chr=cm.getPlayer().getMap().getCharacterById(member.getId());
        if(chr==null || !chr.isAlive())return "请让所有队员在本地图集合，并保持存活。";
        if(chr.getLevel()<rule.min || (rule.max>0 && chr.getLevel()>rule.max))return rule.detail;
        if(chr.getEventInstance()!=null || (chr.getId()==cm.getPlayer().getId()?(chr.getTrade()!=null || chr.getPlayerShop()!=null || chr.getDirection()>=0):chr.hasBlockedInventory()))return "有队员正在其他活动或交互中，请结束后再试。";
    }
    var manager=cm.getEventManager(rule.event);
    if(manager==null)return "挑战暂时无法启动，请稍后再试。";
    if(String(manager.getProperty("state"))!="0" || manager.getInstance(rule.event)!=null)return "本频道已有队伍正在挑战，请稍后再来。";
    return null;
}
function start(){
    chooseRule();
    var error=problem();
    if(error!=null){cm.sendOk(error);closed=true;cm.dispose();return;}
    partyId=cm.getParty().getId();cm.sendYesNo(rule.title+"\r\n"+rule.detail+"\r\n要带领队伍开始吗？");
}
function action(mode,type,selection){
    if(closed)return;
    closed=true;
    if(mode!=1){cm.dispose();return;}
    var error=problem();
    if(error!=null){cm.sendOk(error);cm.dispose();return;}
    cm.getEventManager(rule.event).startInstance(cm.getParty(),cm.getPlayer().getMap());
    if(cm.getPlayer().getEventInstance()==null)cm.sendOk("挑战未能启动，队伍没有进入，请稍后重试。");
    cm.dispose();
}
