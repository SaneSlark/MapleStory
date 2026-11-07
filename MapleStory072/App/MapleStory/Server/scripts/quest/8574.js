// CMS072 8574 scripted start: after the native transformed recipe hand-in.
var closed=false,stage=0;
function start(mode,type,selection){
 if(closed)return;
 if(mode!=1){closed=true;qm.dispose();return;}
 var q=Packages.server.quest.MapleQuest.getInstance(8574);
 if(qm.getNpc()!=2071000 || qm.getQuest()!=8574 || !q.canStart(qm.getPlayer(),qm.getNpc())){closed=true;qm.dispose();return;}
 if(stage==0){stage=1;qm.sendYesNo("#b#p9330015##k\u662f\u4f60\u5417\uff1f\u771f\u53ef\u60dc\u4f60\u7684\u6028\u6c14\u592a\u5927\u65e0\u6cd5\u6295\u80ce\u8f6c\u4e16\u3002\u3002\u3002\u4ec0\u4e48\uff1f\u4f60\u600e\u4e48\u77e5\u9053\u6211\u53ef\u4ee5\u5236\u4f5c#b#t4031952##k\uff1f");return;}
 closed=true;
 if(!qm.haveItem(4031952,1) && !qm.canHold(4031952,1)){qm.sendOk("请先整理其他栏，留出一个空位。");qm.dispose();return;}
 qm.startQuestInScript(8574);
 if(qm.getQuestStatus(8574)==1 && !qm.haveItem(4031952,1))qm.gainItem(4031952,1);
 qm.dispose();
}
