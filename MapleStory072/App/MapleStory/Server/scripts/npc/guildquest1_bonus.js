var done=false;
function start(){cm.sendYesNo("击败恶灵十三并取回鲁碧安后，由本轮领队交付，前往奖励房间。");}
function action(mode,type,selection){if(done)return;done=true;var e=cm.getEventInstance(),p=cm.getPlayer();if(mode!=1||cm.getMapId()!=990000900||e==null||e.getEventManager().getName()!="GuildQuest"||String(e.getProperty("leader"))!=String(p.getName())||e.getProperty("phase")!="stages"||e.getProperty("bossDefeated")!="true"||!cm.haveItem(4001024)){cm.dispose();return;}e.setProperty("bossclear","true");cm.gainItem(4001024,-1);cm.dispose();e.finishPQ();}
