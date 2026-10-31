/* CMS: correct class-specific elder routing; existing two-necklace trial. */
var thirdRoutes={
    "2020008":{jobs:[110,120,130],leader:102000003},
    "2020009":{jobs:[210,220,230],leader:101000003},
    "2020010":{jobs:[310,320],leader:100000201},
    "2020011":{jobs:[410,420],leader:103000003},
    "2020013":{jobs:[510,520],leader:120000101}
};
var route=null,originalJob=-1,origin=-1,stage=0,done=false;
function eligibleThird() {
    if(route==null || cm.getJob()!=originalJob || cm.getLevel()<70)return false;
    for(var i=0;i<route.jobs.length;i++)if(originalJob==route.jobs[i])return true;
    return false;
}
function start() {
    done=false;stage=0;route=thirdRoutes[String(cm.getNpc())];originalJob=cm.getJob();origin=cm.getMapId();
    if(!eligibleThird()) {done=true;cm.sendOk("三转需要达到70级，并由所属职业的二转职业前来接受考验。四转请前往神木村的四转教官处。");cm.dispose();return;}
    if(cm.getPlayer().getRemainingSp()>(cm.getLevel()-70)*3) {done=true;cm.sendOk("请先分配完三转以前获得的技能点，再来接受转职考验。");cm.dispose();return;}
    if(!cm.haveItem(4031057,1)) {
        stage=1;cm.sendYesNo("请先接受一转教官的力量考验，取得 #b#t4031057##k。现在前往教官所在的地方吗？");
    } else if(!cm.haveItem(4031058,1)) {
        stage=2;cm.sendYesNo("你已经通过力量考验。接下来请到雪原圣地接受神圣的石头的智慧考验。现在出发吗？");
    } else {
        stage=3;cm.sendYesNo("你已经取得力量和智慧的证明。提交两条项链，完成第三次转职吗？");
    }
}
function action(mode,type,selection) {
    if(done)return;done=true;
    if(mode!=1 || cm.getMapId()!=origin || !eligibleThird()) {cm.dispose();return;}
    if(cm.getPlayer().getRemainingSp()>(cm.getLevel()-70)*3) {cm.sendOk("请先分配完三转以前的技能点。");cm.dispose();return;}
    if(stage==1)cm.warp(route.leader,0);
    else if(stage==2 && cm.haveItem(4031057,1))cm.warp(211040401,0);
    else if(stage==3 && cm.haveItem(4031057,1) && cm.haveItem(4031058,1)) {
        cm.gainItem(4031057,-1);cm.gainItem(4031058,-1);cm.changeJob(originalJob+1);
        cm.sendOk("第三次转职完成。继续你的冒险吧！");
    }
    cm.dispose();
}
