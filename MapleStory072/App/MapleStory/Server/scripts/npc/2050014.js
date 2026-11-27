// CMS072 3421 meteor collection. Six positions use the six Act.info slots.
var closed=false;
function start(){action(1,0,0);}
function action(mode,type,selection){
    if(closed)return;closed=true;
    if(mode!=1||cm.getMapId()!=221040000||cm.getQuestStatus(3421)!=1){cm.dispose();return;}
    var info=String(cm.getInfoQuest(3421));
    if(info==""||info=="null")info="000000";
    if(!/^[01]{6}$/.test(info)){cm.sendOk("任务采集记录异常，请先检查任务进度。");cm.dispose();return;}
    if(info.charAt(0)=="1"||cm.haveItem(4031117,6)){cm.sendOk("这里已经调查过了。收集齐6枚碎片后，请交给#p2041011#。");cm.dispose();return;}
    if(!cm.canHold(4031117,1)){cm.sendOk("请先在其他栏留出存放陨石碎片的空间。");cm.dispose();return;}
    cm.gainItem(4031117,1);
    cm.updateInfoQuest(3421,info.substring(0,0)+"1"+info.substring(0+1));
    cm.sendOk("你从陨石上取下了一枚#t4031117#。请继续调查其他陨石，收集齐6枚后交给#p2041011#。");
    cm.dispose();
}
