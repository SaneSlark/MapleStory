// User-approved compatibility stage: native map000 clear -> native boss map200.
var done072=false,origin072=-1;
function start(){origin072=cm.getMapId();if(origin072!=674030000){done072=true;cm.dispose();return;}cm.sendYesNo("前段怪物全部清除后，可由队长带领本场队员前往盖福克斯战场。现在进入吗？");}
function action(mode,type,selection){
    if(done072)return;done072=true;
    if(mode!=1||cm.getMapId()!=origin072||origin072!=674030000){cm.dispose();return;}
    var eim=cm.getPlayer().getEventInstance();
    if(eim==null||String(eim.getEventManager().getName())!="MV"||!cm.isLeader()){cm.sendOk("请让本场队长与我对话。");cm.dispose();return;}
    var advance=new Packages.org.mozilla.javascript.Synchronizer(function(){
        if(String(eim.getProperty("bossStage072"))=="true")return;
        if(cm.getMap().getAllMonstersThreadsafe().size()!=0){cm.sendOk("请先清除前段的所有怪物。");return;}
        var map=eim.getMapInstance(674030200),party=eim.getPlayers();
        eim.setProperty("bossStage072","true");
        for(var i=0;i<party.size();i++){var chr=party.get(i);if(chr.getMapId()==674030000&&chr.getEventInstance()==eim)chr.changeMap(map,map.getPortal(0));}
    },eim);
    try{advance();}finally{cm.dispose();}
}
