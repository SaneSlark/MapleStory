// CMS072 client-bound Cliff dialogue and native Christmas quests.
var done=false;
function start(){done=false;cm.sendSimple("圣诞快乐！\r\n#L0#圣诞活动任务#l\r\n#L1#如何装饰圣诞树？#l");}
function action(mode,type,selection){if(done)return;done=true;if(mode!=1){cm.dispose();return;}if(selection==0){cm.openNpc(cm.getNpc(),"christmas_quests");return;}cm.sendOk("找幸福村的雪人进入圣诞树场景，将装饰物丢在树上即可装饰。每个场景最多容纳6人；装饰物由原主人拾取，离开时请确保背包有足够空间。");cm.dispose();}
