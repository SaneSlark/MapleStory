function start() {
    cm.sendOk("»À…˙»Á√Œ......");
    cm.dispose();
}

var pq072OriginalStart=start;start=function(){if(cm.getMapId()==101030104||cm.getMapId()==990000000){cm.dispose();cm.openNpc(9040011,"guildquest1_board");return;}pq072OriginalStart();};
