var done=false;
function start(){cm.sendYesNo(cm.getMapId()==920011300?"谢谢你们救出了女神！要返回未知之塔吗？":"谢谢你们救了我！要和队友一起进入奖励房间吗？");}
function action(mode,type,selection){if(done)return;done=true;cm.dispose();if(mode!=1)return;if(cm.getMapId()==920011300){cm.warp(200080101,0);return;}var eim=cm.getEventInstance();if(eim!=null&&cm.getMapId()==920010100&&eim.getProperty("phase")=="saved")eim.finishPQ();}
