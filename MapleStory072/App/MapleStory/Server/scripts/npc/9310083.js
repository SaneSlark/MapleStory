// CMS072 Jump_event_out compatibility exit. Native returnMap=209000000.
// Does not start the historical event, change quests or award items.
var closed=false;
function start(){
    if(cm.getMapId()!=709000605||cm.getPlayer().getEventInstance()!=null){closed=true;cm.dispose();return;}
    cm.sendYesNo("\u8981\u79bb\u5f00\u8fd9\u91cc\uff0c\u8fd4\u56de#m209000000#\u5417\uff1f");
}
function action(mode,type,selection){
    if(closed)return;
    closed=true;
    if(mode!=1||cm.getMapId()!=709000605||cm.getPlayer().getEventInstance()!=null){cm.dispose();return;}
    try{cm.warp(209000000,0);}finally{cm.dispose();}
}
