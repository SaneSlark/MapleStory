var done=false,origin=-1;
var exits={"108010101":100000000,"108010201":101000000,"108010301":102000000,"108010401":103000000,"108010501":120000000};
function start(){done=false;origin=cm.getMapId();if(exits[String(origin)]==null){done=true;cm.dispose();return;}cm.sendYesNo("要返回原来的世界吗？");}
function action(mode,type,selection){if(done)return;done=true;if(mode==1&&cm.getMapId()==origin)cm.warp(exits[String(origin)],0);cm.dispose();}