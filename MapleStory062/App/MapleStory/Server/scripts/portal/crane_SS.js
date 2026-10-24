function enter(pi){
    var player=pi.getPlayer();if(player.getMapId()!=200090310)return false;
    var instance=player.getEventInstance();
    if(instance!=null&&instance.getProperty("flightMap")!=null)return false;
    pi.warp(250000100,"h002");return true;
}
