/* CMS binding; town/fare behavior adapted from HeavenMS 1002000.js.
 * Historical compatibility implementation, not a recovered official CMS script. */
var stage = 0, selected = -1, fare = 0, done = false;
var towns = [104000000,102000000,100000000,101000000,103000000,120000000,105040300];
var routes = [102000000,100000000,101000000,103000000,120000000];
var prices = [1000,1000,800,1000,800];
var descriptions = [
    "这里是明珠港，许多从彩虹岛来的冒险者都从这里开始金银岛的旅行。附近适合刚开始冒险的人练习。",
    "勇士部落位于金银岛北部的高原。想成为战士，可以去找武术教练。",
    "射手村位于金银岛南部，周围是草原和森林。想成为弓箭手，可以去找赫丽娜。",
    "魔法密林位于金银岛东部的森林中。想成为魔法师，可以去找汉斯。",
    "废弃都市位于金银岛西北部。想成为飞侠，可以去找达克鲁。",
    "诺特勒斯号停泊在射手村与魔法密林之间。想成为海盗，可以去找凯琳。",
    "林中之城位于森林深处，可以通往蚂蚁洞。里面的怪物比较危险，出发前请做好准备。"
];
function validIndex(value, length) { return isFinite(value) && Math.floor(value)==value && value>=0 && value<length; }
function currentFare(index) { return prices[index]/(cm.getJob()==0?10:1); }
function start() {
    stage=0;selected=-1;fare=0;done=false;
    if(cm.getMapId()!=104000000) {done=true;cm.dispose();return;}
    cm.sendSimple("欢迎来到明珠港。你想了解金银岛，还是去其他城镇？\r\n#L0#了解各个城镇#l\r\n#L1#前往其他城镇#l");
}
function action(mode,type,selection) {
    if(done)return;
    if(mode!=1 || cm.getMapId()!=104000000) {done=true;cm.dispose();return;}
    if(stage==0) {
        if(selection!=0 && selection!=1) {done=true;cm.dispose();return;}
        stage=selection==0?1:2;
        var list=stage==1?towns:routes, text=stage==1?"你想了解哪个城镇？":"请选择目的地。新手职业可享一折优惠。";
        for(var i=0;i<list.length;i++)text+="\r\n#L"+i+"##m"+list[i]+"#"+(stage==2?"（"+currentFare(i)+" 金币）":"")+"#l";
        cm.sendSimple(text);return;
    }
    if(stage==1) {
        done=true;
        if(validIndex(selection,towns.length))cm.sendOk(descriptions[selection]);
        cm.dispose();return;
    }
    if(stage==2) {
        if(!validIndex(selection,routes.length)) {done=true;cm.dispose();return;}
        selected=selection;fare=currentFare(selected);stage=3;
        cm.sendYesNo("前往 #b#m"+routes[selected]+"##k 需要 #b"+fare+" 金币#k。现在出发吗？");return;
    }
    done=true;
    if(stage==3 && validIndex(selected,routes.length) && fare==currentFare(selected)) {
        if(cm.getMeso()<fare)cm.sendOk("金币不足，请准备好费用后再来。");
        else {cm.gainMeso(-fare);cm.warp(routes[selected],0);}
    }
    cm.dispose();
}
