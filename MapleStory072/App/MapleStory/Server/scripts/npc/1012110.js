
function start(){
 var seasonal=[[9261, 1012110, 2001000, "\u6849\u7684\u4fe1"], [9262, 2001000, 1012110, "\u514b\u91cc\u592b\u7ed9\u7684\u793c\u7269"]];
 for(var i=0;i<seasonal.length;i++){
  var q=seasonal[i],quest=Packages.server.quest.MapleQuest.getInstance(q[0]);
  if(Packages.server.quest.ChristmasEvent072.enabled(q[0])&&((q[1]==cm.getNpc()&&quest.canStart(cm.getPlayer(),cm.getNpc()))||(q[2]==cm.getNpc()&&quest.canComplete(cm.getPlayer(),cm.getNpc())))){cm.openNpc(cm.getNpc(),"christmas_quests");return;}
 }
 cm.dispose();
}
