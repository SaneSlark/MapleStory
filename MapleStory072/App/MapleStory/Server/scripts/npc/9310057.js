var rewards=Array(2000005,2100005,2100006,2100007,2100008,2101000,2101001,1142000,1142001);
var expires=Array(-1,30,30,30,30,30,60,-1,-1);
var quantity=Array(5,1,1,1,1,1,1,1,1);
var needed=Array(30,25,30,35,40,45,50,60,60);
var state=-1,closed=false;
function finish(){closed=true;cm.dispose();}
function clearOwnedLetters(){for(var i=3994059;i<3994085;i++)if(cm.haveItem(i))cm.removeAll(i);}
function townMenu(selection){
    if(state==0){
        cm.getSavedLocation("ENGLISH");
        cm.sendSimple("你好，我是英语村的蘑菇博士！\r\n\r\n#L0#我要前往英语村#l\r\n#L1#我要兑换物品#l\r\n#L2#什么是英语村？#l");
    }else if(state==1){
        if(selection==0){cm.saveLocation("ENGLISH");cm.warp(702090400,0);finish();}
        else if(selection==1){
            var text="请选择要兑换的奖励：\r\n\r\n#b";
            for(var i=0;i<rewards.length;i++){var label=rewards[i]==1142000?"英语村初级勋章":rewards[i]==1142001?"英语村进阶勋章":"#t"+rewards[i]+"#";text+="#L"+i+"##v"+rewards[i]+"#"+label+" × "+quantity[i]+" #r（"+needed[i]+" 个优秀印章）#b#l\r\n";}
            cm.sendSimple(text);
        }else if(selection==2){cm.sendOk("英语村是收集字母并提交答案的活动。完成挑战可以获得优秀印章，再用印章兑换奖励。");finish();}
        else finish();
    }else if(state==2){
        if(selection<0||selection>=rewards.length){finish();return;}
        if(!cm.haveItem(4001137,needed[selection]))cm.sendOk("你没有足够的#b#t4001137##k。");
        else if(!cm.canHold(rewards[selection],quantity[selection]))cm.sendOk("请留出足够的背包空间。");
        else{
            cm.gainItem(4001137,-needed[selection]);
            if(expires[selection]>0)cm.gainItemPeriod(rewards[selection],quantity[selection],expires[selection]);
            else cm.gainItem(rewards[selection],quantity[selection]);
            cm.sendOk("兑换成功。");
        }
        finish();
    }
}
function challengeMenu(selection){
    if(state==0){
        cm.sendSimple("你好，我是英语村的蘑菇博士！\r\n\r\n#L0#挑战英语村—初级#l\r\n#L1#挑战英语村—中级#l\r\n#L2#挑战英语村—高级#l\r\n#L3#返回原来的地图#l");
    }else if(state==1){
        if(selection>=0&&selection<=2){
            var em=cm.getEventManager("English");
            if(em==null){cm.sendOk("活动暂时无法开启，请再尝试一次。");finish();return;}
            if(cm.getPlayer().getParty()==null||!cm.isLeader()){cm.sendOk("需要队长在这里操作。");finish();return;}
            var members=cm.getPlayer().getParty().getMembers(),sameMap=true,size=0,it=members.iterator();
            while(it.hasNext()){
                var member=it.next();
                if(cm.getPlayer().getMap().getCharacterById(member.getId())==null){sameMap=false;break;}
                size++;
            }
            if(!sameMap)cm.sendOk("队伍成员必须全部在这里。");
            else if(size<1)cm.sendOk("队伍成员必须全部在这里。");
            else if(em.getInstance("English"+selection)!=null)cm.sendOk("已有另一支队伍正在挑战。");
            else em.startInstance_Party(""+selection,cm.getPlayer());
            finish();
        }else if(selection==3){
            var map=cm.getSavedLocation("ENGLISH");
            if(map<0||cm.getMap(map)==null)map=100000000;
            cm.clearSavedLocation("ENGLISH");cm.warp(map,0);finish();
        }else finish();
    }
}
function action(mode,type,selection){
    if(closed)return;
    if(mode!=1){finish();return;}
    state++;
    if(state==0)clearOwnedLetters();
    var mapId=cm.getPlayer().getMapId();
    if(mapId==702090400){challengeMenu(selection);return;}
    switch(mapId){
        case 100000000:case 101000000:case 102000000:case 103000000:case 104000000:
        case 120000000:case 211000000:case 250000000:case 220000000:case 200000000:
        case 261000000:case 500000000:case 600000000:case 680000000:case 701000000:
        case 702000000:case 740000000:case 741000000:case 742000000:case 800000000:
            townMenu(selection);break;
        default:finish();
    }
}
