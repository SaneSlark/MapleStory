// CMS072 native two preliminary chambers and composite final boss.
// Existing squad level/channel/cooldown rules and 75-minute event timer retained.
var admissionLock=new java.util.concurrent.locks.ReentrantLock();
var rooms=[240060000,240060100,240060200];
function init(){em.setProperty("state","0");em.setProperty("leader","true");}
function setup(a,b){admissionLock.lock();var e=null;try{if(String(em.getProperty("state"))!="0"||em.getInstance("HorntailBattle")!=null)throw "Horntail occupied";for(var i=0;i<rooms.length;i++)if(em.getMapFactory().getMap(rooms[i]).getCharactersSize()!=0)throw "Horntail chamber occupied";e=em.newInstance("HorntailBattle");em.setProperty("state","1");for(var i=0;i<rooms.length;i++)e.setInstanceMap(rooms[i]).resetFully();e.startEventTimer(4500000);return e;}catch(error){if(e!=null)e.dispose();throw error;}finally{admissionLock.unlock();}}
function playerEntry(e,p){var m=e.getMapInstance(240060000);p.changeMap(m,m.getPortal(0));}
function own(e,p){return e!=null&&p.getEventInstance()==e&&String(e.getEventManager().getName())=="HorntailBattle";}
function beginHead(e,p,n){admissionLock.lock();try{if(!own(e,p)||!p.isAlive()||n<0||n>1||p.getMapId()!=rooms[n]||(n==1&&e.getProperty("head0")!="clear"))return false;if(e.getProperty("head"+n)!=null)return false;var m=e.getMapInstance(rooms[n]),anchor=m.getReactorByName("tremble"+(n+1));if(anchor==null)return false;var mob=em.getMonster(8810000+n);e.setProperty("head"+n,"active");e.registerMonster(mob);m.spawnMonsterOnGroundBelow(mob,anchor.getPosition());return true;}finally{admissionLock.unlock();}}
function advance(e,p){if(!own(e,p)||!p.isAlive())return false;var n=rooms.indexOf(p.getMapId());if(n<0||n>1||e.getProperty("head"+n)!="clear"||p.getMap().getMonsterById(8810000+n)!=null)return false;var m=e.getMapInstance(rooms[n+1]);p.changeMap(m,m.getPortal(n==0?"st00":"sp"));return true;}
function monsterValue(e,id){if(id==8810000)e.setProperty("head0","clear");else if(id==8810001)e.setProperty("head1","clear");return 1;}
function cleanSquad(){var s=em.getChannelServer().getMapleSquad("Horntail");if(s!=null&&s.getStatus()==2){s.clear();s.copy();}}
function release(e){if(e.getPlayerCount()==0){e.dispose();cleanSquad();}}
function changedMap(e,p,id){if(rooms.indexOf(id)>=0)return;e.unregisterPlayer(p);release(e);}
function playerDisconnected(e,p){if(e.getPlayerCount()<=1){e.unregisterPlayer(p);release(e);}return 0;}
function playerExit(e,p){e.unregisterPlayer(p);var m=em.getMapFactory().getMap(240000000);p.changeMap(m,m.getPortal(0));release(e);}
function playerRevive(e,p){return false;}
function scheduledTimeout(e){e.disposeIfPlayerBelow(100,240050400);cleanSquad();}
function cancelSchedule(){var a=new java.util.ArrayList(em.getInstances());for(var i=0;i<a.size();i++)scheduledTimeout(a.get(i));}
function allMonstersDead(e){}
function clearPQ(e){}
function leftParty(e,p){}
function disbandParty(e){}
function playerDead(e,p){}
