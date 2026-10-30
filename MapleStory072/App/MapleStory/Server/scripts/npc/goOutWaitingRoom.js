var transportExitMaps={"101000301":101000300,"200000112":200000111,"200000122":200000121,"220000111":220000110,
 "200000132":200000131,"240000111":240000110,"200000152":200000151,"260000110":260000100,
 "200090000":200000111,"200090001":200000111,"200090010":101000300,"200090011":101000300,
 "200090100":200000121,"200090110":220000110,"200090200":200000131,"200090210":240000110,
 "200090400":200000151,"200090410":260000100};
var exitOrigin=-1,exitDone=false;
function start(){exitOrigin=cm.getMapId();exitDone=false;if(transportExitMaps[String(exitOrigin)]==null){exitDone=true;cm.dispose();return;}cm.sendYesNo("你确定要离开本次候船或航程吗？已使用的船票不会返还。");}
function action(mode,type,selection){
    if(exitDone)return;exitDone=true;
    if(mode!=1||cm.getMapId()!=exitOrigin){cm.dispose();return;}
    var instance=cm.getChar().getEventInstance();if(instance!=null)instance.unregisterPlayer(cm.getChar());
    cm.warp(transportExitMaps[String(exitOrigin)],0);cm.dispose();
}
