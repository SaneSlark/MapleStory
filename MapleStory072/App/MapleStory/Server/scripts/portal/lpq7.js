// CMS established LPQ route; require owning event and stage completion.
function enter(pi){
    if(pi.getMapId()!=922010700)return false;
    var eim=pi.getPlayer().getEventInstance();
    if(eim==null || String(eim.getEventManager().getName())!="LudiPQ" || String(eim.getProperty("7stageclear"))!="true")return false;
    var target=eim.getMapInstance(922010800);
    pi.getPlayer().changeMap(target,target.getPortal("st00"));return true;
}
