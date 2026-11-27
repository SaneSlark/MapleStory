// CMS072 ariant_goldN binding + Act 2222 -> Check 3333, one grain per house.
var closed=false;
function start(){action(1,0,0);}
function action(mode,type,selection){
    if(closed)return;closed=true;
    if(mode!=1||cm.getMapId()!=260000202||cm.getQuestStatus(3929)!=1){cm.dispose();return;}
    var info=String(cm.getInfoQuest(3929));
    if(!/^[23]{4}$/.test(info)){cm.sendOk("任务进度异常，请放弃后重新接取。");cm.dispose();return;}
    if(info.charAt(0)=="3"){cm.sendOk("这里已经放过粮食了，请去其他人家。");cm.dispose();return;}
    if(!cm.haveItem(4031580,1)||!cm.removeItem(4031580)){cm.sendOk("你没有可以投放的粮食。");cm.dispose();return;}
    info=info.substring(0,0)+"3"+info.substring(0+1);
    cm.updateInfoQuest(3929,info);
    cm.sendOk(info=="3333"?"四份粮食都已送到。请回去向携詹报告。":"你把一份粮食放在了这里。");
    cm.dispose();
}
