// CMS072 established LPQ route; require owning event and stage completion.
function enter(pi){
    if(pi.getMapId()!=922010400)return false;
    var eim=pi.getPlayer().getEventInstance();
    if(eim==null || String(eim.getEventManager().getName())!="LudiPQ" || String(eim.getProperty("4stageclear"))!="true")return false;
    var target=eim.getMapInstance(922010700);
    pi.getPlayer().changeMap(target,target.getPortal("st00"));return true;
}
