
function start(){
 var seasonal=[[8596, 9310060, 9310060, "\u5151\u6362\u6c38\u4e45\u6743\u5723\u8bde\u9e7f\u89d2"], [9952, 9310060, 9310060, "\u5de8\u5927\u96ea\u4eba\u7684\u88ad\u51fb"]];
 for(var i=0;i<seasonal.length;i++){
  var q=seasonal[i],quest=Packages.server.quest.MapleQuest.getInstance(q[0]);
  if(Packages.server.quest.ChristmasEvent072.enabled(q[0])&&((q[1]==cm.getNpc()&&quest.canStart(cm.getPlayer(),cm.getNpc()))||(q[2]==cm.getNpc()&&quest.canComplete(cm.getPlayer(),cm.getNpc())))){cm.openNpc(cm.getNpc(),"christmas_quests");return;}
 }
 cm.dispose();
}
