var closed=false;
function start(){cm.sendNext("不速之客真让人讨厌……");}
function action(mode,type,selection){if(closed)return;closed=true;if(mode==1)cm.sendOk("在幽灵们把舞会搞砸之前，必须想想办法……");cm.dispose();}
