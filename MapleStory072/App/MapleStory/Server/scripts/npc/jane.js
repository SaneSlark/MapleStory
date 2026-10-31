/* CMS quests use existing Check/Act data without custom rewards.
 * Post-2013 shop adapted from HeavenMS 1002100.js; historical compatibility. */
var stage=0, done=false, choices=[], chosen=null, item=-1, amount=0;
var questIds=[2010,2011,2012,2013];
var questNames=["简和野猪","简的第一次挑战","简的第二次挑战","简的最后挑战"];
var goods=[[2000002,310],[2022003,1060],[2022000,1600],[2001000,3120]];
function validIndex(value,length) {return isFinite(value) && Math.floor(value)==value && value>=0 && value<length;}
function janeQuest(id) {return Packages.server.quest.MapleQuest.getInstance(id);}
function start() {
    stage=0;done=false;choices=[];chosen=null;item=-1;amount=0;
    if(cm.getMapId()!=104000000) {done=true;cm.dispose();return;}
    var text="我的梦想是成为一名优秀的炼金术士。你愿意听听我的故事吗？";
    for(var i=0;i<questIds.length;i++) {
        var id=questIds[i],state=cm.getQuestStatus(id);
        if(state==1 || janeQuest(id).canStart(cm.getPlayer(),cm.getNpc())) {
            text+="\r\n#L"+choices.length+"#"+(state==1?"[提交任务] ":"[接受任务] ")+questNames[i]+"#l";
            choices.push({quest:id,complete:state==1,title:questNames[i]});
        }
    }
    if(cm.getQuestStatus(2013)==2) {text+="\r\n#L"+choices.length+"#购买药水#l";choices.push({shop:true});}
    if(choices.length==0) {done=true;cm.sendOk("我也想去冒险，可是爸爸很担心我。等你变得更强一些，再来找我聊聊吧。");cm.dispose();return;}
    cm.sendSimple(text);
}
function action(mode,type,selection) {
    if(done)return;
    if(mode!=1 || cm.getMapId()!=104000000) {done=true;cm.dispose();return;}
    if(stage==0) {
        if(!validIndex(selection,choices.length)) {done=true;cm.dispose();return;}
        chosen=choices[selection];
        if(chosen.shop) {
            if(cm.getQuestStatus(2013)!=2) {done=true;cm.dispose();return;}
            stage=2;var text="谢谢你之前的帮助。你需要哪种药水？";
            for(var i=0;i<goods.length;i++)text+="\r\n#L"+i+"##v"+goods[i][0]+"# #t"+goods[i][0]+"#（"+goods[i][1]+" 金币）#l";
            cm.sendSimple(text);return;
        }
        stage=1;cm.sendYesNo("要"+(chosen.complete?"提交":"接受")+" #b"+chosen.title+"#k 吗？任务条件和奖励以任务栏为准。");return;
    }
    if(stage==1) {
        done=true;var q=janeQuest(chosen.quest);
        if(chosen.complete) {
            if(q.canComplete(cm.getPlayer(),cm.getNpc())) {cm.completeClientNpcQuest(chosen.quest);return;}
            cm.sendOk("材料还没有收集齐，请查看任务栏中的要求。提交前也请留出消耗栏空间。");
        } else if(q.canStart(cm.getPlayer(),cm.getNpc())) {cm.startClientNpcQuest(chosen.quest);return;}
        cm.dispose();return;
    }
    if(cm.getQuestStatus(2013)!=2) {done=true;cm.dispose();return;}
    if(stage==2) {
        if(!validIndex(selection,goods.length)) {done=true;cm.dispose();return;}
        item=selection;stage=3;cm.sendGetNumber("需要多少个 #t"+goods[item][0]+"#？",1,1,100);return;
    }
    if(stage==3) {
        if(!isFinite(selection) || Math.floor(selection)!=selection || selection<1 || selection>100) {done=true;cm.dispose();return;}
        amount=selection;stage=4;cm.sendYesNo("购买 "+amount+" 个 #t"+goods[item][0]+"#，共需 "+(goods[item][1]*amount)+" 金币。确认购买吗？");return;
    }
    done=true;
    if(stage==4 && validIndex(item,goods.length) && amount>=1 && amount<=100) {
        var total=goods[item][1]*amount;
        if(cm.getMeso()<total)cm.sendOk("金币不足，请准备好金币后再来。");
        else if(!cm.canHold(goods[item][0],amount))cm.sendOk("消耗栏空间不足，请整理背包后再来。");
        else {cm.gainMeso(-total);cm.gainItem(goods[item][0],amount);cm.sendOk("谢谢惠顾，需要药水时欢迎再来。");}
    }
    cm.dispose();
}
