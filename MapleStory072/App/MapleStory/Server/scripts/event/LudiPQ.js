var eventName="LudiPQ",quest=1202,minPlayers=6,exitMap=922010000,materials=[4001022,4001156,4001023],ids=[922010100, 922010200, 922010201, 922010300, 922010400, 922010401, 922010402, 922010403, 922010404, 922010405, 922010500, 922010501, 922010502, 922010503, 922010504, 922010505, 922010506, 922010600, 922010700, 922010800, 922010900, 922011000, 922011100];

var pqLock=new java.util.concurrent.locks.ReentrantLock();
function init(){em.setProperty("state","0");em.setProperty("leader","true");}
function clearMaterials(p){for(var n=0;n<materials.length;n++){var id=materials[n],count=p.getItemQuantity(id,false);if(count>0)Packages.server.MapleInventoryManipulator.removeById(p.getClient(),Packages.constants.GameConstants.getInventoryType(id),id,count,false,false);}}
function playerEntry(e,p){clearMaterials(p);var m=e.getMapInstance(ids[0]);p.changeMap(m,m.getPortal(0));recordStart(e,p);}
function own(e,p){return p!=null&&p.getEventInstance()==e&&e.getProperty("phase")!="ending"&&ids.indexOf(p.getMapId())>=0&&p.getMap()==e.getMapInstance(p.getMapId());}
function warpAll(e,id){var m=e.getMapInstance(id),ps=e.getPlayers();for(var n=0;n<ps.size();n++)ps.get(n).changeMap(m,m.getPortal(0));}
function complete(e,id){if(e.getProperty("phase")=="complete"||e.getProperty("phase")=="ending")return;e.setProperty("phase","complete");var ps=e.getPlayers();for(var n=0;n<ps.size();n++){clearMaterials(ps.get(n));recordFinish(e,ps.get(n));}if(id>0)warpAll(e,id);}
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

function setup(level,partyid){pqLock.lock();try{var e=make(level,partyid);if(e==null)return null;for(var stage=1;stage<=8;stage++)e.getMapInstance(922010000+stage*100).getPortal("next00").setScriptName("pq072_ludi_next");var bits=[0,0,0,0,0,0,0,0,0],n=0;while(n<5){var i=Math.floor(Math.random()*9);if(bits[i]==0){bits[i]=1;n++;}}e.setProperty("8combo",bits.join(""));e.startEventTimer(3600000);return e;}finally{pqLock.unlock();}}
function monsterValue(e,id){if(id==9300012)e.setProperty("bossDefeated","true");return 0;}
function clearPQ(e){if(e.getProperty("9stageclear")=="true")complete(e,922011000);}
function next(e,p){if(!own(e,p))return false;var stage=(p.getMapId()-922010000)/100;if(stage<1||stage>8||stage!=Math.floor(stage))return false;if(stage==6){if(e.getProperty("5stageclear")!="true")return false;e.setProperty("6stageclear","true");}else if(e.getProperty(stage+"stageclear")!="true")return false;var m=e.getMapInstance(922010000+(stage+1)*100);p.changeMap(m,m.getPortal("st00"));return true;}

// CMS072 has no PQuest.img/rank table. Preserve existing raw info and only
// supply entry/completion counters when the generic party-quest API is disabled.
function pqField(p,key,value){
 if(Packages.server.quest.MapleQuest.getInstance(quest).isPartyQuest()){if(value==null)return p.getOneInfo(quest,key);p.updateOneInfo(quest,key,""+value);return value;}
 var raw=String(p.getInfoQuest(quest)||""),pairs=raw.length==0?[]:raw.split(";"),found=-1;
 for(var i=0;i<pairs.length;i++)if(pairs[i].split("=")[0]==key){found=i;break;}
 if(value==null)return found<0?null:pairs[found].substring(key.length+1);
 if(found<0)pairs.push(key+"="+value);else pairs[found]=key+"="+value;
 p.updateInfoQuest(quest,pairs.join(";"));return value;
}
function recordStart(e,p){if(quest<=0)return;p.tryPartyQuest(quest);if(Packages.server.quest.MapleQuest.getInstance(quest).isPartyQuest())return;e.setProperty("startedAt"+p.getId(),""+java.lang.System.currentTimeMillis());pqField(p,"try",(parseInt(pqField(p,"try",null)||"0")||0)+1);}
function recordFinish(e,p){if(quest<=0||e.getProperty("recorded"+p.getId())=="1")return;e.setProperty("recorded"+p.getId(),"1");p.endPartyQuest(quest);if(Packages.server.quest.MapleQuest.getInstance(quest).isPartyQuest())return;var count=(parseInt(pqField(p,"cmp",null)||"0")||0)+1;pqField(p,"cmp",count);var tries=parseInt(pqField(p,"try",null)||"0")||count;pqField(p,"CR",Math.ceil(count*100/Math.max(1,tries)));var started=parseInt(e.getProperty("startedAt"+p.getId())||"0");if(started>0){var seconds=Math.floor((java.lang.System.currentTimeMillis()-started)/1000),bestMin=pqField(p,"min",null),bestSec=pqField(p,"sec",null);if(bestMin==null||seconds<(parseInt(bestMin)||0)*60+(parseInt(bestSec)||0)){pqField(p,"min",Math.floor(seconds/60));pqField(p,"sec",seconds%60);}}}
