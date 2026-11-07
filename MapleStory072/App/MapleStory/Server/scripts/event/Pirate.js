var eventName="Pirate",quest=1204,minPlayers=3,exitMap=925100700,materials=[4001117,4001120,4001121,4001122,4001123],ids=[925100000, 925100100, 925100200, 925100201, 925100202, 925100300, 925100301, 925100302, 925100400, 925100500, 925100600];

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

function setup(level,partyid){pqLock.lock();try{var e=make(level,partyid);if(e==null)return null;e.setProperty("stage","0");e.setProperty("medals","0");for(var k=0;k<2;k++){var id=k==0?925100200:925100300;for(var n=0;n<5;n++)for(var j=0;j<4;j++)spawn(e,id,j%2==0?9300124:9300125,new java.awt.Point(j%2==0?430:1600,j<2?75:238));}e.getMapInstance(925100100).setSpawns(true);e.getMapInstance(925100400).setSpawns(true);e.startEventTimer(240000);return e;}finally{pqLock.unlock();}}
function monsterValue(e,id){if(id>=9300105&&id<=9300107||id==9300119)e.setProperty("bossDefeated","true");return 0;}
function medals(e,cm){pqLock.lock();try{if(!own(e,cm.getPlayer())||cm.getMapId()!=925100100||!e.isLeader(cm.getPlayer()))return;var step=parseInt(e.getProperty("medals"));if(step>=3){cm.sendOk("三种勋章已收齐，请前往下一关。");return;}var id=4001120+step;if(!cm.haveItem(id,20)){cm.sendOk("请集中收集20个#t"+id+"#，由队长交给我。");return;}cm.gainItem(id,-20);step++;e.setProperty("medals",""+step);if(step<3){var map=e.getMapInstance(925100100);map.resetAllSpawnPoint(9300114+step,0);map.killAllMonsters(false);map.setSpawns(true);map.respawn(true);}else e.getMapInstance(925100100).setSpawns(false);cm.sendOk(step==3?"勋章收齐了！请继续前进。":"请继续收集下一种勋章。");}finally{pqLock.unlock();}}
function next(e,p){pqLock.lock();try{if(!own(e,p)||!e.isLeader(p)||e.getProperty("phase")!="stages")return false;var stage=parseInt(e.getProperty("stage")),route=[925100000,925100100,925100200,925100300,925100400,925100500];if(p.getMapId()!=route[stage])return false;var map=p.getMap();if(stage==1){if(e.getProperty("medals")!="3")return false;}else if(stage==4){for(var n=1;n<=4;n++)if(map.getReactorByName("sMob"+n).getState()<1)return false;map.setSpawns(false);if(map.getAllMonstersThreadsafe().size()!=0)return false;}else if(map.getAllMonstersThreadsafe().size()!=0)return false;if(stage==5){if(e.getProperty("bossDefeated")!="true")return false;complete(e,925100600);return true;}stage++;e.setProperty("stage",""+stage);if(stage==5&&e.getProperty("bossSpawned")!="1"){e.setProperty("bossSpawned","1");spawn(e,925100500,9300119,e.getMapInstance(925100500).getPortal(0).getPosition());}e.restartEventTimer((stage==5?8:6)*60000);warpAll(e,route[stage]);return true;}finally{pqLock.unlock();}}
function clearPQ(e){if(e.getProperty("bossDefeated")=="true"&&e.getProperty("stage")=="5")complete(e,925100600);}

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

function hat(e,cm){pqLock.lock();try{var p=cm.getPlayer();if(!own(e,p)||p.getMapId()!=925100600||e.getProperty("phase")!="complete")return;var count=parseInt(pqField(p,"cmp",null)||"0"),owned=parseInt(pqField(p,"have0",null)||"0");if(count<30||owned>0||cm.haveItem(1002571)){cm.sendOk("完成30次可领取首次海盗帽，已经领取的角色不能重复领取。");return;}if(!cm.canHold(1002571,1)){cm.sendOk("请在装备栏留出一个空位。");return;}pqField(p,"have0","1");cm.gainItem(1002571,1);}finally{pqLock.unlock();}}
