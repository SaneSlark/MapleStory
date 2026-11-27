var closed=false;
function start(){cm.sendNext("埃德蒙！埃德蒙！你到底去哪儿啦？！");}
function action(mode,type,selection){if(closed)return;closed=true;if(mode==1)cm.sendOk("华丽的灯光、耀眼的宝石、一杯甜美的葡萄酒。舞会总是那么美好。");cm.dispose();}
