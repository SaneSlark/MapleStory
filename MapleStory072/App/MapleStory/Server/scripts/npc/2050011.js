
function start(){
 var seasonal=[[9263, 2050011, 2001000, "\u514b\u658c\u7684\u51b0\u6c34\u6750\u6599"], [9264, 2001000, 2050011, "\u514b\u91cc\u592b\u7ed9\u7684\u51b0\u6c34\u6750\u6599"]];
 for(var i=0;i<seasonal.length;i++){
  var q=seasonal[i],quest=Packages.server.quest.MapleQuest.getInstance(q[0]);
  if(Packages.server.quest.ChristmasEvent072.enabled(q[0])&&((q[1]==cm.getNpc()&&quest.canStart(cm.getPlayer(),cm.getNpc()))||(q[2]==cm.getNpc()&&quest.canComplete(cm.getPlayer(),cm.getNpc())))){cm.openNpc(cm.getNpc(),"christmas_quests");return;}
 }
 cm.dispose();
}
