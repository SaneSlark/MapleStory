// Happyville snowman: verified historical first-room route; no speculative extra-room assignment.
var done=false;
function start(){done=false;if(cm.getPlayer().getMapId()!=209000000){cm.dispose();return;}cm.sendYesNo("想进入圣诞树场景吗？");}
function action(mode,type,selection){if(done)return;done=true;if(mode==1&&cm.getPlayer().getMapId()==209000000){if(cm.getMap(209000001).playerCount()>=6)cm.sendOk("场景已满员，请稍后再来。");else cm.warp(209000001,0);}cm.dispose();}
