var done=false;
function start(){cm.sendYesNo("确定要离开吗？离开后本场比赛将结束。");}
function action(mode,type,selection){if(done)return;done=true;cm.dispose();if(mode!=1)return;var eim=cm.getEventInstance();if(eim!=null)eim.removePlayer(cm.getPlayer());else cm.warp(980000000,0);}
