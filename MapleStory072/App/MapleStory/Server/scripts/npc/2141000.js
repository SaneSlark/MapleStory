// Use the native arena/Chaos Marble reactor, not the missing PB1 event.
var closed=false;
function context(){var e=cm.getPlayer().getEventInstance();return cm.getMapId()==270050100 && e!=null && String(e.getEventManager().getName())=="PinkBeanBattle"?e:null;}
function start(){if(context()==null){closed=true;cm.dispose();return;}cm.sendYesNo("要使用1个#t4001193#唤醒品克缤吗？");}
function action(mode,type,selection){
    if(closed)return;closed=true;
    var e=context();if(mode!=1 || e==null){cm.dispose();return;}
    if(String(e.getProperty("bossSummoned"))=="true"){cm.sendOk("战斗已经开始。");cm.dispose();return;}
    if(!cm.haveItem(4001193,1)){cm.sendOk("需要1个#t4001193#。也可以将它放在祭坛上。");cm.dispose();return;}
    var power=cm.getPlayer().getMap().getReactorById(2709000);
    if(power==null){cm.dispose();return;}
    var mobs=cm.getPlayer().getMap().getAllMonstersThreadsafe().iterator();
    while(mobs.hasNext()){var id=mobs.next().getId();if(id>=8820000 && id<=8820018){cm.sendOk("战斗已经开始。");cm.dispose();return;}}
    cm.gainItem(4001193,-1);power.forceStartReactor(cm.getPlayer().getClient());
    if(String(e.getProperty("bossSummoned"))!="true")cm.gainItem(4001193,1);
    cm.dispose();
}
