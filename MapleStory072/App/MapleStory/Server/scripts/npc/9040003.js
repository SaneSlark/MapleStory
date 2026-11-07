function start() {
	cm.sendOk ("岁月如梭,人生就是梦");
	cm.dispose();
}

var pq072OriginalStart=start;start=function(){if(cm.getMapId()==990000700){cm.dispose();cm.openNpc(9040003,"guildquest1_NPC1");return;}pq072OriginalStart();};
