var eventName="ProtectTylus",quest=0,minPlayers=1,exitMap=211000001,materials=[],ids=[921100300,921100301];
var pqLock=new java.util.concurrent.locks.ReentrantLock();
function init(){em.setProperty("state","0");em.setProperty("leader","true");}
function clearMaterials(p){for(var n=0;n<materials.length;n++){var id=materials[n],count=p.getItemQuantity(id,false);if(count>0)Packages.server.MapleInventoryManipulator.removeById(p.getClient(),Packages.constants.GameConstants.getInventoryType(id),id,count,false,false);}}
function playerEntry(e,p){clearMaterials(p);var m=e.getMapInstance(ids[0]);p.changeMap(m,m.getPortal(0));p.tryPartyQuest(quest);}
function own(e,p){return p!=null&&p.getEventInstance()==e&&e.getProperty("phase")!="ending"&&ids.indexOf(p.getMapId())>=0&&p.getMap()==e.getMapInstance(p.getMapId());}
function warpAll(e,id){var m=e.getMapInstance(id),ps=e.getPlayers();for(var n=0;n<ps.size();n++)ps.get(n).changeMap(m,m.getPortal(0));}
function complete(e,id){if(e.getProperty("phase")=="complete"||e.getProperty("phase")=="ending")return;e.setProperty("phase","complete");var ps=e.getPlayers();for(var n=0;n<ps.size();n++){clearMaterials(ps.get(n));ps.get(n).endPartyQuest(quest);}if(id>0)warpAll(e,id);}
function end(e){pqLock.lock();try{if(e.getProperty("phase")=="ending")return;e.setProperty("phase","ending");var ps=e.getPlayers();for(var n=0;n<ps.size();n++)clearMaterials(ps.get(n));if(e.disposeIfPlayerBelow(100,exitMap))init();}finally{pqLock.unlock();}}
function changedMap(e,p,id){if(e.getProperty("phase")=="ending"||ids.indexOf(id)>=0)return;clearMaterials(p);var leader=e.isLeader(p);e.unregisterPlayer(p);if((e.getProperty("phase")!="complete"&&(leader||e.getPlayerCount()<minPlayers))||e.getPlayerCount()==0)end(e);}
function playerDisconnected(e,p){clearMaterials(p);var leader=e.isLeader(p);e.unregisterPlayer(p);if((e.getProperty("phase")!="complete"&&(leader||e.getPlayerCount()<minPlayers))||e.getPlayerCount()==0)end(e);return 0;}
function playerExit(e,p){var m=em.getChannelServer().getMapFactory().getMap(exitMap);p.changeMap(m,m.getPortal(0));}
function playerRevive(e,p){playerExit(e,p);return false;}
function leftParty(e,p){if(e.getProperty("phase")!="complete")end(e);else playerExit(e,p);}
function disbandParty(e){end(e);}
function scheduledTimeout(e){end(e);}
function playerDead(e,p){}
function monsterKilled(e,p,points){}
function allMonstersDead(e){}
function cancelSchedule(){var a=new java.util.ArrayList(em.getInstances());for(var n=0;n<a.size();n++)end(a.get(n));}
function make(level,partyid){if(em.getProperty("state")!="0")return null;em.setProperty("state","1");var e=em.newInstance(eventName+partyid);e.setProperty("phase","stages");try{for(var n=0;n<ids.length;n++){var m=e.setInstanceMap(ids[n]);m.resetFully();m.setSpawns(false);}return e;}catch(error){end(e);throw error;}}
function spawn(e,id,mobid,pos){var mob=em.getMonster(mobid);e.registerMonster(mob);e.getMapInstance(id).spawnMonsterOnGroundBelow(mob,pos);return mob;}


function setup(level,partyid){pqLock.lock();try{var e=make(level,partyid);if(e==null)return null;e.getMapInstance(921100300).setSpawns(true);var target=e.getMapInstance(921100300).getMonsterById(9300093);if(target!=null&&target.getEventInstance()==null)e.registerMonster(target);e.startEventTimer(600000);return e;}finally{pqLock.unlock();}}
function monsterValue(e,id){if(id==9300093&&e.getProperty("phase")=="stages")end(e);return 0;}
function success(e){if(e.getProperty("phase")!="stages")return;var target=e.getMapInstance(921100300).getMonsterById(9300093);if(target==null||!target.isAlive()){end(e);return;}e.setProperty("phase","complete");warpAll(e,921100301);}
function changedMap(e,p,id){if(e.getProperty("phase")=="ending")return;if(id==921100301){if(e.getTimeLeft()<180000&&e.getMapInstance(921100300).getMonsterById(9300093)!=null)e.setProperty("phase","complete");return;}if(id==921100300)return;e.unregisterPlayer(p);if(e.getProperty("phase")!="complete"||e.getPlayerCount()==0)end(e);}
function scheduledTimeout(e){success(e);}
function allMonstersDead(e){}
function clearPQ(e){success(e);}
