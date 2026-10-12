var done=false;
function start(){done=false;cm.sendYesNo("将力量、敏捷、智力、运气重置为4，并将多出的点数返还为AP。是否确认？");}
function action(mode,type,selection){if(done)return;done=true;if(mode==1){cm.resetStats(4,4,4,4);cm.sendOk("属性已经重置，返还点数可重新分配。");}cm.dispose();}
