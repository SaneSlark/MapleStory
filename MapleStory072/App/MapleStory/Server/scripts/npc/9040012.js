function start() {
    cm.sendOk("ÈËÉúÈçÃÎ......");
    cm.dispose();
}

var pq072OriginalStart=start;start=function(){if(cm.getMapId()==990000400){cm.dispose();cm.openNpc(9040012,"guildquest1_knight");return;}pq072OriginalStart();};
