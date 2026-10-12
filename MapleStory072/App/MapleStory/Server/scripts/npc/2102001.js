// CMS072: NPC 2102001 is placed at 260000110; 079 Chinese implementation returns to 260000100.
var status=-1,done=false;
function start(){status=-1;action(1,0,0);}
function action(mode,type,selection){
 if(done)return;
 if(mode!=1){done=true;cm.dispose();return;}
 status++;
 if(status==0)cm.sendYesNo("你确定要离开这里吗？");
 else {done=true;if(cm.getMapId()==260000110)cm.warp(260000100,0);cm.dispose();}
}
