function start() {
	cm.sendOk ("岁月如梭,人生就是梦");
	cm.dispose();
}

var pq072OriginalStart=start;start=function(){if(cm.getMapId()==990000300){cm.dispose();cm.openNpc(9040009,"guildquest1_statue");return;}pq072OriginalStart();};
