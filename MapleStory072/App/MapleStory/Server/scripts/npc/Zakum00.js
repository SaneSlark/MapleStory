// CMS072 native maps/items; recipe and rewards retained from this package's history.
var step=0,chosen=-1,done=false,partyid=-1;
function finish(){done=true;cm.dispose();}
function base(){var p=cm.getPlayer();return cm.getMapId()==211042300&&p.getLevel()>=50&&p.isAlive()&&p.getEventInstance()==null;}
function mine(){if(!base()||cm.getParty()==null||!cm.isLeader())return false;if(partyid!=-1&&cm.getParty().getId()!=partyid)return false;var ms=cm.getParty().getMembers();if(ms.size()<1||ms.size()>6)return false;var it=ms.iterator();while(it.hasNext()){var m=it.next(),p=cm.getMap().getCharacterById(m.getId());if(p==null||!m.isOnline()||m.getChannel()!=cm.getClient().getChannel()||p.getLevel()<50||!p.isAlive()||p.getEventInstance()!=null)return false;}var em=cm.getEventManager("ZakumPQ");return em!=null&&String(em.getProperty("state"))=="0";}
function bottle(){return base()&&cm.getPlayer().getJob()==212&&cm.getQuestStatus(6273)==2&&cm.haveItem(4001109,1)&&!cm.haveItem(2280000,1);}
function start(){if(cm.getMapId()!=211042300){finish();return;}var menu="我是阿杜比斯。你要进行哪一项试炼？\r\n#L0#第一阶段：探索矿洞#l\r\n#L1#第二阶段：挑战两段跳跃试炼#l\r\n#L2#制作火焰的眼#l\r\n#L3#进入扎昆祭坛#l";if(cm.getQuestStatus(6272)==1)menu+="\r\n#L4#[任务] 废矿的熔岩#l";if(bottle())menu+="\r\n#L5#[任务] 用强化玻璃瓶收集熔岩#l";cm.sendSimple(menu);}
function action(mode,type,selection){
 if(done)return;if(mode!=1||cm.getMapId()!=211042300){finish();return;}
 if(step==0){chosen=selection;if(chosen!=Math.floor(chosen)||chosen<0||chosen>5){finish();return;}step=1;
  var messages=["由队长带领1～6名50级以上队员探索矿洞。收集七把钥匙打开宝箱，取得火石的母矿并交给奥拉；另交30份废矿卷轴可获得额外奖励。限时30分钟。现在出发吗？","携带火石母矿碎片，挑战两段跳跃试炼，抵达利拉所在的终点。现在出发吗？","用1个火石母矿碎片、1个火山的呼吸和30颗僵尸丢失的金齿，制作5个火焰的眼。确定制作吗？","50级以上、携带火焰的眼的冒险家可以进入祭坛。召唤前可以会合，召唤后不能再进入；请在祭坛投放火焰的眼。现在进入吗？","人类是喝不了那里的熔岩的。去找冰封雪域的波特，看看他有没有办法制作可以装熔岩的容器。完成这次交接吗？","进入熔岩洞穴后，将强化玻璃瓶放到熔岩前，取得技能书。限时5分钟。现在进入吗？"];
  if(chosen==0&&cm.getParty()!=null)partyid=cm.getParty().getId();cm.sendYesNo(messages[chosen]);return;
 }
 done=true;
 if(chosen==4){var q=Packages.server.quest.MapleQuest.getInstance(6272);if(q.canComplete(cm.getPlayer(),null)){cm.completeClientNpcQuest(6272);return;}cm.sendOk("请先完成任务栏中的前置条件。");cm.dispose();return;}
 if(!base()){cm.sendOk("需要50级以上、存活且未参加其他活动，并在入口确认。");cm.dispose();return;}
 if(chosen==0){if(!mine()){cm.sendOk("请由队长带领1～6名50级以上队员在本频道、本地图集合，并等待矿洞空闲。");cm.dispose();return;}var em=cm.getEventManager("ZakumPQ");cm.dispose();em.startInstance(cm.getParty(),cm.getMap());return;}
 if(chosen==1){if(!cm.haveItem(4031061,1)){cm.sendOk("请先通过矿洞取得火石母矿碎片。");cm.dispose();return;}var p=cm.getPlayer();setTrip(p,"1");cm.warp(280020000,0);cm.dispose();return;}
 if(chosen==2){if(!cm.haveItem(4031061,1)||!cm.haveItem(4031062,1)||!cm.haveItem(4000082,30)){cm.sendOk("需要1个火石母矿碎片、1个火山的呼吸和30颗金齿。");cm.dispose();return;}if(!cm.canHold(4001017,5)){cm.sendOk("请在其他栏留出放置5个火焰的眼的空间。");cm.dispose();return;}cm.gainItem(4031061,-1);cm.gainItem(4031062,-1);cm.gainItem(4000082,-30);cm.gainItem(4001017,5);cm.sendOk("5个火焰的眼已经制作完成。");cm.dispose();return;}
 if(chosen==3){var battle=cm.getEventManager("ZakumBattle");if(battle==null||String(battle.getIv().invokeFunction("admit",cm.getPlayer()))!="true"){cm.sendOk("需要携带火焰的眼，且祭坛尚未召唤扎昆。已有战斗时请等待结束。");}cm.dispose();return;}
 if(chosen==5){var fire=cm.getEventManager("FireDemon");if(!bottle()||fire==null||fire.getInstance("FireDemon")!=null||cm.getClient().getChannelServer().getMapFactory().getMap(921100000).getCharactersSize()>0){cm.sendOk("需要完成熔岩容器任务并携带强化玻璃瓶；洞穴内不能已有挑战者。");cm.dispose();return;}cm.dispose();fire.startInstance(cm.getPlayer());return;}
 cm.dispose();
}
// Compatibility bookkeeping, not a fabricated client quest. Preserve unrelated keys.
function setTrip(p,value){var s=String(p.getInfoQuest(7000)),a=s.length?s.split(";"):[],out=[];for(var i=0;i<a.length;i++)if(a[i].indexOf("z072trip=")!=0)out.push(a[i]);out.push("z072trip="+value);p.updateInfoQuest(7000,out.join(";"));}
