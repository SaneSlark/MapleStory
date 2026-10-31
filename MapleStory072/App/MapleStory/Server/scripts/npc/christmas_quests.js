// CMS Christmas quests: all checks, item actions and rewards remain native.
var quests=[[8596, 9310060, 9310060, "\u5151\u6362\u6c38\u4e45\u6743\u5723\u8bde\u9e7f\u89d2"], [9261, 1012110, 2001000, "\u6849\u7684\u4fe1"], [9262, 2001000, 1012110, "\u514b\u91cc\u592b\u7ed9\u7684\u793c\u7269"], [9263, 2050011, 2001000, "\u514b\u658c\u7684\u51b0\u6c34\u6750\u6599"], [9264, 2001000, 2050011, "\u514b\u91cc\u592b\u7ed9\u7684\u51b0\u6c34\u6750\u6599"], [9265, 1022101, 2001000, "\u5e78\u798f\u6751\u7684\u8fc7\u51ac\u51c6\u5907"], [9266, 2001000, 2001000, "\u5bfb\u627e\u8ff7\u8def\u7684\u5723\u8bde\u9e7f"], [9640, 9201030, 9201030, "\u5723\u8bde\u732b\u54aa\u7684\u793c\u7269\u51c6\u5907"], [9641, 9201030, 9201030, "\u7ed9\u5584\u826f\u7684\u732b\u7684\u793c\u7269"], [9642, 9201030, 9201030, "\u732b\u7684\u5723\u8bde\u8282"], [9650, 9001006, 9001006, "\u5317\u6781\u718a\u84b2\u4f01\u7684\u8d85\u7ea7\u6ed1\u96ea\u677f"], [9651, 9001006, 9001006, "\u5317\u6781\u718a\u84b2\u4f01\u7684\u9ec4\u91d1\u6ed1\u96ea\u677f"], [9652, 9001006, 9001006, "\u65e0\u4e3b\u7684\u6ed1\u96ea\u677f"], [9952, 9310060, 9310060, "\u5de8\u5927\u96ea\u4eba\u7684\u88ad\u51fb"], [9953, 2001001, 2001001, "\u96ea\u4eba\u7684\u6811\u679d"], [28000, 9250052, 1022101, "\u5723\u8bde\u60ca\u8273\u6d3e\u5bf9"], [28001, 2001000, 2001000, "\u6d3e\u5bf9\u51c6\u5907"], [28002, 9105003, 2020005, "\u79d8\u5bc6\u7eb8\u6761"], [28003, 2020005, 9105003, "\u963f\u5c14\u5361\u65af\u7279\u7684\u56de\u4fe1"]];
var options=[],chosen=null,stage=0,done=false;
function start(){
 options=[];stage=0;done=false;
 var text="圣诞活动任务：\r\n";
 for(var i=0;i<quests.length;i++){
  if(!Packages.server.quest.ChristmasEvent072.enabled(quests[i][0]))continue;
  var q=quests[i],nativeQuest=Packages.server.quest.MapleQuest.getInstance(q[0]);
  if(q[2]==cm.getNpc()&&nativeQuest.canComplete(cm.getPlayer(),cm.getNpc()))options.push([q,1]);
  else if(q[1]==cm.getNpc()&&nativeQuest.canStart(cm.getPlayer(),cm.getNpc()))options.push([q,0]);
 }
 for(var j=0;j<options.length;j++)text+="#L"+j+"#"+(options[j][1]?"完成：":"接受：")+options[j][0][3]+"#l\r\n";
 if(cm.getNpc()==1022101)text+="#L100#前往幸福村#l\r\n";
 if(!options.length&&cm.getNpc()!=1022101){cm.sendOk("目前没有符合条件的圣诞任务。请检查等级、前置任务、所需物品及重复任务间隔。");cm.dispose();return;}
 cm.sendSimple(text);
}
function action(mode,type,selection){
 if(done)return;
 if(mode!=1){done=true;cm.dispose();return;}
 if(stage==0&&selection==100&&cm.getNpc()==1022101){done=true;cm.saveLocation("CHRISTMAS");cm.warp(209000000,0);cm.dispose();return;}
 if(stage==0){if(selection<0||selection>=options.length){cm.dispose();return;}chosen=options[selection];stage=1;cm.sendYesNo((chosen[1]?"完成":"接受")+"【"+chosen[0][3]+"】？条件和奖励以任务说明为准。");return;}
 done=true;var q=chosen[0],nativeQuest=Packages.server.quest.MapleQuest.getInstance(q[0]);
 if(chosen[1]){if(q[2]==cm.getNpc()&&nativeQuest.canComplete(cm.getPlayer(),cm.getNpc()))cm.completeQuestInScript(q[0]);}
 else if(q[1]==cm.getNpc()&&nativeQuest.canStart(cm.getPlayer(),cm.getNpc()))cm.startQuestInScript(q[0]);
 cm.dispose();
}
