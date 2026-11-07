// CMS072 native potion quest: normal Check/Act own consumption and EXP.
var stage=0,closed=false;
function end(mode,type,selection){
    if(closed)return;
    if(mode!=1){closed=true;qm.dispose();return;}
    var q=Packages.server.quest.MapleQuest.getInstance(3514);
    if(qm.getQuest()!=3514 || qm.getNpc()!=2140002 || !q.canComplete(qm.getPlayer(),qm.getNpc())){closed=true;qm.dispose();return;}
    if(stage==0){stage=1;qm.sendNext("\u559d\u4e0b\u4e86#p2140002#\u7684\u836f\u3002\u56e0\u4e3a\u836f\u7684\u526f\u4f5c\u7528\uff0c\u6240\u6709\u7684\u4f53\u529b\u548c\u9b54\u529b\u5168\u90e8\u88ab\u6d88\u8017\u5149\u4e86\uff0c\u6682\u65f6\u9677\u5165\u4e86\u65e0\u6cd5\u6218\u6597\u7684\u72b6\u6001\u3002\u4f46\u662f\u611f\u60c5\u597d\u50cf\u6062\u590d\u4e86\u3002\u73b0\u5728\u5e94\u8be5\u53ef\u4ee5\u901a\u8fc7\u540e\u6094\u4e4b\u8def\u4e86\u3002");return;}
    closed=true;qm.completeQuestInScript(3514);
}
