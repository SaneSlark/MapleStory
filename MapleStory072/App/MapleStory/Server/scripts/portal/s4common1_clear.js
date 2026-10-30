// Preserve the existing Tylus rescue and three-minute threshold.
function enter(pi){
    if(pi.getMapId()!=921100300)return false;
    var eim=pi.getPlayer().getEventInstance();
    if(eim==null){pi.warp(211000001,0);return true;}
    if(String(eim.getEventManager().getName())!="ProtectTylus")return false;
    if(!pi.haveMonster(9300093)){pi.warp(211000001,0);pi.playerMessage("糟糕！泰勒斯被绑架了！");return true;}
    if(eim.getTimeLeft()<180000){pi.warp(921100301,0);return true;}
    pi.playerMessage("请保护泰勒斯，不要让他被绑架！");return false;
}
