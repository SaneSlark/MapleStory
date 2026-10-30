// CMS072 native training exit; existing timer and destinations retained.
function enter(pi){
    if(pi.getMapId()!=912010100)return false;
    var eim=pi.getPlayer().getEventInstance();
    if(eim==null){pi.warp(120000101,0);return true;}
    if(String(eim.getEventManager().getName())!="KyrinTrainingGroundC")return false;
    if(eim.getTimeLeft()<120000){pi.warp(912010200,0);return true;}
    pi.playerMessage("请再坚持一会儿，抵挡住凯琳的攻击！");return false;
}
