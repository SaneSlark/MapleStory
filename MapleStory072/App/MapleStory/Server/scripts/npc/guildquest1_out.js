var done=false;
function start(){cm.sendYesNo("要放弃本轮公会任务吗？领队退出，或正式开始后不足六人，将结束本轮任务。");}
function action(mode,type,selection){if(done)return;done=true;var e=cm.getEventInstance();cm.dispose();if(mode==1&&e!=null&&e.getEventManager().getName()=="GuildQuest")e.getEventManager().getIv().invokeFunction("playerExit",e,cm.getPlayer());}
