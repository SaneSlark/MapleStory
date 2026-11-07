var eventName="GuildQuest",quest=0,minPlayers=6,exitMap=990001100,materials=[1032033,4001024,4001025,4001026,4001027,4001028,4001029,4001030,4001031,4001032,4001033,4001034,4001035,4001037],ids=[990000000, 990000100, 990000200, 990000300, 990000301, 990000400, 990000401, 990000410, 990000420, 990000430, 990000431, 990000440, 990000500, 990000501, 990000502, 990000600, 990000610, 990000611, 990000620, 990000630, 990000631, 990000640, 990000641, 990000700, 990000800, 990000900, 990001000, 990001101];
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


function init(){em.setProperty("state","0");em.setProperty("started","false");em.setProperty("guildid","-1");}
function setup(z){pqLock.lock();try{if(em.getInstance("GuildQuest")!=null)return null;var e=em.newInstance("GuildQuest");em.setProperty("state","0");em.setProperty("started","false");e.setProperty("phase","waiting");e.setProperty("canEnter","true");e.setProperty("entryTimestamp",""+java.lang.System.currentTimeMillis());try{for(var n=0;n<ids.length;n++){var m=e.setInstanceMap(ids[n]);m.resetFully();m.setSpawns(false);}for(var id=990000501;id<=990000502;id++)e.getMapInstance(id).shuffleReactors();for(var n=0;n<4;n++)e.getMapInstance([990000611,990000620,990000631,990000641][n]).getReactorByName("").setDelay(-1);e.startEventTimer(180000);return e;}catch(error){end(e);throw error;}}finally{pqLock.unlock();}}
function playerEntry(e,p){clearMaterials(p);var m=e.getMapInstance(990000000);p.changeMap(m,m.getPortal(0));}
function leader(e,p){return p!=null&&String(p.getName())==String(e.getProperty("leader"));}
function scheduledTimeout(e){if(e.getProperty("phase")=="waiting"){var ps=e.getPlayers(),young=false;for(var n=0;n<ps.size();n++)if(ps.get(n).getLevel()<=30)young=true;if(ps.size()<6||!young){e.broadcastPlayerMsg(5,"公会任务需要至少六人，且必须有一名30级以下成员完成专用通道。");end(e);return;}e.setProperty("phase","stages");e.setProperty("canEnter","false");em.setProperty("state","1");em.setProperty("started","true");e.restartEventTimer(3600000);e.schedule("earringcheck",15000);e.broadcastPlayerMsg(5,"公会任务开始，请取得并佩戴保护石后继续前进。");}else end(e);}
function earringcheck(e){if(e.getProperty("phase")!="stages")return;var ps=e.getPlayers();for(var n=0;n<ps.size();n++){var p=ps.get(n);if(p.getMapId()>=990000300&&p.getMapId()<=990000900&&!p.hasEquipped(1032033)&&p.isAlive())p.addHP(-p.getStat().getHp());}e.schedule("earringcheck",15000);}
function monsterValue(e,id){if(id==9300028)e.setProperty("bossDefeated","true");return 0;}
function changedMap(e,p,id){if(e.getProperty("phase")=="ending"||ids.indexOf(id)>=0)return;var lead=leader(e,p);clearMaterials(p);e.unregisterPlayer(p);if((e.getProperty("phase")!="complete"&&(lead||(e.getProperty("phase")=="stages"&&e.getPlayerCount()<6)))||e.getPlayerCount()==0)end(e);}
function playerDisconnected(e,p){var lead=leader(e,p);clearMaterials(p);e.unregisterPlayer(p);if((e.getProperty("phase")!="complete"&&(lead||(e.getProperty("phase")=="stages"&&e.getPlayerCount()<6)))||e.getPlayerCount()==0)end(e);return 0;}
function playerRevive(e,p){var m=e.getMapInstance(e.getProperty("phase")=="waiting"?990000000:990000200);p.getStat().setHp(50,p);p.changeMap(m,m.getPortal(0));return true;}
function leftParty(e,p){}
function disbandParty(e){}
function clearPQ(e){pqLock.lock();try{if(e.getProperty("phase")!="stages"||e.getProperty("bossclear")!="true"||e.getProperty("bossDefeated")!="true")return;e.setProperty("phase","complete");em.setProperty("state","2");warpAll(e,990001000);e.restartEventTimer(120000);}finally{pqLock.unlock();}}
