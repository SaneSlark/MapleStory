
function start(){
 var seasonal=[[9650, 9001006, 9001006, "\u5317\u6781\u718a\u84b2\u4f01\u7684\u8d85\u7ea7\u6ed1\u96ea\u677f"], [9651, 9001006, 9001006, "\u5317\u6781\u718a\u84b2\u4f01\u7684\u9ec4\u91d1\u6ed1\u96ea\u677f"], [9652, 9001006, 9001006, "\u65e0\u4e3b\u7684\u6ed1\u96ea\u677f"]];
 for(var i=0;i<seasonal.length;i++){
  var q=seasonal[i],quest=Packages.server.quest.MapleQuest.getInstance(q[0]);
  if(Packages.server.quest.ChristmasEvent072.enabled(q[0])&&((q[1]==cm.getNpc()&&quest.canStart(cm.getPlayer(),cm.getNpc()))||(q[2]==cm.getNpc()&&quest.canComplete(cm.getPlayer(),cm.getNpc())))){cm.openNpc(cm.getNpc(),"christmas_quests");return;}
 }
 cm.dispose();
}
