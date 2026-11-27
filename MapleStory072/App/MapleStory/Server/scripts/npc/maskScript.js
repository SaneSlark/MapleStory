var closed=false;
function start(){cm.sendNext("祝你清明踏青之夜快乐……");}
function action(mode,type,selection){if(closed)return;closed=true;if(mode==1)cm.sendOk("呼呼……你很好奇假面下面的真面孔？");cm.dispose();}
