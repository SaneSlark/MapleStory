// CMS072 Ariant lobby exit; its return slot is independent of the free market.
function enter(pi){
 if(pi.getMapId()!=980010000)return false;
 var player=pi.getPlayer(),type=Packages.server.maps.SavedLocationType.ARIANT_PQ;
 var saved=player.getSavedLocation(type),factory=player.getClient().getChannelServer().getMapFactory();
 var valid=saved>0 && saved!=999999999 && (saved<980010000 || saved>=980011000);
 var target=valid?factory.getMap(saved):null;
 if(target==null)target=factory.getMap(100000000);
 if(target==null)return false;
 var portal=target.getId()==100000000?target.getPortal(4):target.getPortal(0);
 if(portal==null)portal=target.getPortal(0);
 if(portal==null)return false;
 player.changeMap(target,portal);
 if(player.getMapId()!=target.getId())return false;
 player.clearSavedLocation(type);
 return true;
}
