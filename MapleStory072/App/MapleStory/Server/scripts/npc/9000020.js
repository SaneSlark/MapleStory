// Chinese world-tour dialogue adapted from the bundled 079 script.
// Destinations and displayed names verified against bundled CMS resources.
var destinations=[{"id": 500000000, "name": "水上市场"}, {"id": 701000000, "name": "上海外滩"}, {"id": 702000000, "name": "嵩山镇"}, {"id": 702100000, "name": "大雄宝殿"}, {"id": 800000000, "name": "古代神社"}, {"id": 801000000, "name": "昭和村"}], recovery=[{"id": 104020000, "name": "射手村西部树林"}, {"id": 200000000, "name": "天空之城"}, {"id": 211000000, "name": "冰峰雪域"}, {"id": 220000000, "name": "玩具城"}, {"id": 221000000, "name": "地球防御本部"}, {"id": 222000000, "name": "童话村"}, {"id": 230000000, "name": "水下世界"}, {"id": 240000000, "name": "神木村"}, {"id": 250000000, "name": "武陵"}, {"id": 251000000, "name": "百草堂"}, {"id": 260000000, "name": "阿里安特"}, {"id": 261000000, "name": "玛加提亚"}, {"id": 270000000, "name": "三个门"}];
var state=0,done=false,source=0,cost=0,target=-1,isReturn=false,isRecovery=false;
function touring(map){return (map>=500000000&&map<501000000)||(map>=701000000&&map<703000000)||(map>=800000000&&map<802000000);}
function start(){
    state=0;done=false;target=-1;isReturn=false;source=cm.getMapId();isRecovery=source==950000100;
    cost=cm.getJob()==0?300:3000;
    var list=isRecovery?recovery:destinations;
    var text=isRecovery?"我会送你回冒险岛世界，请选择目的地：":"为了从繁忙的日常中解脱，去享受一趟旅游怎么样？不仅可以体验新颖的异国文化，还能学到不少东西！\r\n冒险岛旅游公司为你准备了世界旅游套餐。每次旅游需要#b"+cost+"金币#k，请选择目的地：";
    for(var i=0;i<list.length;i++)if(list[i].id!=source)text+="\r\n#L"+i+"##b"+list[i].name+"#k#l";
    if(!isRecovery&&touring(source))text+="\r\n#L1000##b结束旅游，免费返回出发地点#k#l";
    cm.sendSimple(text);
}
function action(mode,type,selection){
    if(done)return;
    if(mode!=1){done=true;cm.dispose();return;}
    if(state==0){
        var list=isRecovery?recovery:destinations;
        if(selection==1000&&!isRecovery&&touring(source)){
            isReturn=true;target=cm.getSavedLocation("WORLDTOUR");
            if(target<0||touring(target)||cm.getMap(target)==null)target=100000000;
            state=1;cm.sendYesNo("世界旅游怎么样？很有趣吧。是否免费返回出发地点？");return;
        }
        if(selection<0||selection>=list.length||list[selection].id==source){done=true;cm.dispose();return;}
        target=list[selection].id;state=1;
        cm.sendYesNo("确定前往#b"+list[selection].name+"#k吗？"+(isRecovery?"本次返回免费。":"需要支付#b"+cost+"金币#k。"));return;
    }
    if(cm.getMapId()!=source){done=true;cm.dispose();return;}
    if(cm.getMap(target)==null){done=true;cm.sendOk("目的地暂时无法进入，请稍后再试。");cm.dispose();return;}
    done=true;
    if(!isReturn&&!isRecovery){
        if(cm.getMeso()<cost){cm.sendOk("你的金币不足，请准备好"+cost+"金币后再来。");cm.dispose();return;}
        if(cm.getMapId()!=source){cm.dispose();return;}
        if(!touring(source))cm.saveLocation("WORLDTOUR");
        cm.gainMeso(-cost);
    }
    cm.warp(target,0);
    if(isReturn||isRecovery)cm.clearSavedLocation("WORLDTOUR");
    cm.dispose();
}
