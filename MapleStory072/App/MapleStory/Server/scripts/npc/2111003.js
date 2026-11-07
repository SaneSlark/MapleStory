/* Author: aaroncsn(MapleSea Like)(Incomplete)
	NPC Name: 		Humanoid A
	Map(s): 		Sunset Road: Magatia(2610000000)
	Description: 		Unknown
*/

function start(){
	cm.sendNext("我想是一个人，一个人有着温暖的心脏......这样也许我可以牵她的手。不幸的是，现在这是不可能的.");
	cm.dispose();
	}
// Ordinary native quests coexist with the original service; Check/Act own conditions and rewards.
var linkOriginalStart=start,linkOriginalAction=typeof action=="function"?action:null;
var linkData=[[3332, 1, "琦尼的朋友人造人A"], [3332, 0, "琦尼的朋友人造人A"], [3333, 0, "给琦尼的礼物"], [3334, 0, "人造人A"], [3334, 1, "人造人A"], [3335, 0, "雪原玫瑰"], [3355, 1, "人造人A的记忆"], [3356, 0, "德朗博士是谁"]],linkMaps=[261000000],linkChoices=[],linkPicked=null,linkStage=-1,linkOrigin=-1;
function linkPlace(){return linkMaps.indexOf(cm.getMapId())>=0&&cm.getMapId()==linkOrigin&&cm.getPlayer().getEventInstance()==null;}
start=function(){linkOrigin=cm.getMapId();linkChoices=[];linkStage=-1;if(!linkPlace()){linkOriginalStart();return;}var menu="";for(var i=0;i<linkData.length;i++){var d=linkData[i],q=Packages.server.quest.MapleQuest.getInstance(d[0]);if(q.hasStartScript()||q.hasEndScript())continue;if(d[1]==0?q.canStart(cm.getPlayer(),cm.getNpc()):cm.getQuestStatus(d[0])==1){menu+="\r\n#L"+linkChoices.length+"#"+(d[1]==0?"[接受] ":"[继续] ")+d[2]+"#l";linkChoices.push(d);}}if(linkChoices.length==0){linkOriginalStart();return;}linkStage=0;cm.sendSimple("有什么需要帮助的吗？"+menu+"\r\n#L"+linkChoices.length+"#其他服务与对话#l");};
action=function(mode,type,selection){if(linkStage<0){if(linkOriginalAction!=null)linkOriginalAction(mode,type,selection);else cm.dispose();return;}if(linkStage==2)return;if(mode!=1||!linkPlace()){linkStage=2;cm.dispose();return;}if(linkStage==0){if(selection==linkChoices.length){linkStage=-1;linkOriginalStart();return;}if(selection!=Math.floor(selection)||selection<0||selection>=linkChoices.length){linkStage=2;cm.dispose();return;}linkPicked=linkChoices[selection];linkStage=1;cm.sendYesNo("要"+(linkPicked[1]==0?"接受":"完成")+"任务【"+linkPicked[2]+"】吗？");return;}linkStage=2;var q=Packages.server.quest.MapleQuest.getInstance(linkPicked[0]);if(q.hasStartScript()||q.hasEndScript()){cm.dispose();return;}if(linkPicked[1]==0&&q.canStart(cm.getPlayer(),cm.getNpc())){cm.startClientNpcQuest(linkPicked[0]);return;}if(linkPicked[1]==1&&q.canComplete(cm.getPlayer(),cm.getNpc())){cm.completeClientNpcQuest(linkPicked[0]);return;}cm.sendOk("请先完成任务栏中的条件，物品和进度会保留。");cm.dispose();};
