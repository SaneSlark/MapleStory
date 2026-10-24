function enter(pi){
    var player=pi.getPlayer();if(player.getMapId()!=200090300)return false;
    var instance=player.getEventInstance();
    if(instance!=null&&instance.getProperty("flightMap")!=null)return false;
    pi.warp(200000141,"h001");return true;
}
