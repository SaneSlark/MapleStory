// Client-bound Scarf Snowman: all CMS Christmas tree rooms.
var done=false;
function tree(){var id=cm.getPlayer().getMapId();return id>=209000001&&id<=209000015;}
function start(){done=false;if(!tree()){cm.dispose();return;}cm.sendYesNo("要离开圣诞树场景，返回幸福村吗？请先确认背包有空间收回装饰物。");}
function action(mode,type,selection){if(done)return;done=true;if(mode==1&&tree())cm.warp(209000000,3);cm.dispose();}
