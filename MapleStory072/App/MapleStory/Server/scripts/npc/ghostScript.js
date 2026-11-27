var closed=false;
function start(){cm.sendNext("……哇啊～这里太黑了～");}
function action(mode,type,selection){if(closed)return;closed=true;if(mode==1)cm.sendOk("啊啊，我迷路了。这到底是哪儿？宅子里面怎么还有这种地方啊。");cm.dispose();}
