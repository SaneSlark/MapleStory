function enter(pi){
    var eim=pi.getEventInstance();if(eim==null||pi.getMapId()!=920010700)return false;
    var name=String(pi.getPortal().getName()),row=parseInt(name.substring(2,4)),col=parseInt(name.substring(4,5));
    if(row<1||row>16||col<1||col>4)return false;
    var map=eim.getMapInstance(11),right=eim.getEventManager().getProperty("stage6_"+name.substring(2,5))=="1";
    var destination;
    if(right){var linked=map.getPortal("np"+((row-1<10?"0":"")+(row-1)));if(linked==null)return false;destination=map.getPortal(linked.getTarget());}
    else destination=map.getPortal(row<=4?"r6fail":row<=8?"pt00":row<=12?"pt01":"pt02");
    if(destination==null)return false;pi.getPlayer().changeMap(map,destination);return true;
}
