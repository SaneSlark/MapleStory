// Two native three-choice rows; keep the existing one-in-three path model.
function enter(pi){
    var eim=pi.getEventInstance();if(eim==null||pi.getMapId()!=920010600)return false;
    var name=String(pi.getPortal().getName()),row=parseInt(name.substring(4,5)),col=parseInt(name.substring(5,6));
    if((row!=1&&row!=2)||col<1||col>3)return false;
    var map=eim.getMapInstance(6),right=col==parseInt(eim.getEventManager().getProperty("loungeRow"+row));
    var destination=map.getPortal(right?(row==1?"r4rp21":"success"):"fail");
    if(destination==null)return false;pi.getPlayer().changeMap(map,destination);return true;
}
