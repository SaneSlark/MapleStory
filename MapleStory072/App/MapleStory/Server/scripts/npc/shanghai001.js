// User-approved CMS compatibility entry: native quest4103 and native boss map.
// Missing original maze is bypassed explicitly; no fee, permit consumption or new reward.
var done=false,origin=-1;
function eligible(){return cm.getMapId()==701010320&&cm.getPlayer().getLevel()>=45&&cm.getQuestStatus(4103)==1&&cm.haveItem(4031289,1);}
function start(){origin=cm.getMapId();if(!eligible()){done=true;cm.sendOk("请先接取秘密任务，达到45级，并带上任务凭证。");cm.dispose();return;}cm.sendYesNo("是否进入巨型蜈蚣战场？本入口采用兼容规则，直接前往战场，不经过迷宫，不收费，也不消耗凭证。");}
function action(mode,type,selection){
    if(done)return;done=true;
    if(mode!=1||cm.getMapId()!=origin||!eligible()){cm.dispose();return;}
    var map=cm.getChannelServer().getMapFactory().getMap(701010323);
    if(map==null){cm.sendOk("战场暂不可用，请稍后再试。");cm.dispose();return;}
    var admit=new Packages.org.mozilla.javascript.Synchronizer(function(){
        if(!eligible())return;
        if(map.getCharactersSize()!=0){cm.sendOk("战场中还有其他冒险家，请稍后再试。");return;}
        map.resetFully();cm.warp(701010323,0);
    },map);
    try{admit();}finally{cm.dispose();}
}
