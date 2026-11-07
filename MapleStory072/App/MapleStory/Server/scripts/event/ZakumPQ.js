var eventName="ZakumPQ",quest=0,minPlayers=1,exitMap=280090000,materials=[4001015,4001016,4001018],ids=[280010000, 280010010, 280010011, 280010020, 280010030, 280010031, 280010040, 280010041, 280010050, 280010060, 280010070, 280010071, 280010080, 280010081, 280010090, 280010091, 280010100, 280010101, 280010110, 280010120, 280010130, 280010140, 280010150, 280011000, 280011001, 280011002, 280011003, 280011004, 280011005, 280011006];
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


// Thirty-minute compatibility timer retained from this package's historical event.
function setup(level,partyid){pqLock.lock();try{var e=make(level,partyid);if(e==null)return null;e.startEventTimer(1800000);return e;}finally{pqLock.unlock();}}
function monsterValue(e,id){return 0;}
function clearPQ(e){if(e.getProperty("settled")=="1")end(e);}
function settle(e,cm){pqLock.lock();try{var p=cm.getPlayer();if(!own(e,p)||p.getMapId()!=280010000||!e.isLeader(p)||e.getProperty("settled")=="1")return false;if(!cm.haveItem(4001018,1))return false;var scrolls=cm.haveItem(4001015,30),ps=e.getPlayers();for(var i=0;i<ps.size();i++){var m=ps.get(i);if(!Packages.server.MapleInventoryManipulator.checkSpace(m.getClient(),4031061,1,"")||(scrolls&&!Packages.server.MapleInventoryManipulator.checkSpace(m.getClient(),2030007,5,""))){cm.sendOk("请所有仍在本轮的队员在其他栏和消耗栏留出空间。");return false;}}e.setProperty("settled","1");cm.gainItem(4001018,-1);if(scrolls)cm.gainItem(4001015,-30);for(var i=0;i<ps.size();i++){var m=ps.get(i);Packages.server.MapleInventoryManipulator.addById(m.getClient(),4031061,1);if(scrolls)Packages.server.MapleInventoryManipulator.addById(m.getClient(),2030007,5);m.gainExp(scrolls?20000:12000,true,true,true);}end(e);return true;}finally{pqLock.unlock();}}
