// CMS072 native mentor visit; parent quest reward stays with the Temple 1012100.
var stage=0,closed=false;
function valid(){return qm.getNpc()==1012100 && qm.getQuest()==3525 && qm.getQuestStatus(3507)==1 && Math.floor(qm.getPlayer().getJob()/100)==3;}
function finish(){closed=true;qm.dispose();}
function visit(mode,accept){
    if(closed)return;
    if(mode!=1 || !valid()){finish();return;}
    var q=Packages.server.quest.MapleQuest.getInstance(3525);
    if(stage==0){
        if(accept ? !q.canStart(qm.getPlayer(),qm.getNpc()) : qm.getQuestStatus(3525)!=1){finish();return;}
        stage=1;qm.sendNext("\u5f88\u4e45\u4e4b\u540e\u518d\u6b21\u89c1\u5230\u4e86#p1012100#\u3002\u5979\u8bf4\u5f88\u9ad8\u5174\u770b\u5230\u66fe\u7ecf\u662f\u9752\u6da9\u7684\u65b0\u624b\u7684\u4f60\u6210\u4e3a\u4e86\u51fa\u8272\u7684\u5f13\u624b\u3002\u770b\u5230\u5f88\u4e45\u4e0d\u89c1\u4f46\u8fd8\u8bb0\u5f97\u6211\u7684\u5979\uff0c\u6211\u7684\u5fc3\u91cc\u5145\u6ee1\u4e86\u6e29\u6696\u3002");return;
    }
    closed=true;
    if(accept)qm.startQuestInScript(3525);
    if(qm.getQuestStatus(3525)==1 && q.canComplete(qm.getPlayer(),qm.getNpc()))qm.completeQuest(3525);
    if(qm.getQuestStatus(3525)==2)qm.getPlayer().updateInfoQuest(7081,"1");
    qm.dispose();
}
function start(mode,type,selection){visit(mode,true);}
function end(mode,type,selection){visit(mode,false);}
