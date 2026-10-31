// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2055, 0, "休咪丢失的钱团", ["稍等！ 你有没有在这里看见过一个金币？这怎么办...我把还给朋友的金币放在口袋里。但是在地铁站弄丢了。这非常重要，否则在朋友面前就没有面子了。不好意思，你可以替我找金币吗？"], "在废弃都市遇见了叫休咪的女孩子。她说她弄丢了从朋友那里借来的幸运金币。她拜托我找回她的金币。听说在地铁裹着白布的怪物拿了那金币。也许能在#b地铁工地B1#k上找到那金币吧…...首先我要进地铁站。"], [2055, 1, "休咪丢失的钱团", ["对！是这个！这个金币跟一般的金币不同。因为这个金币的制造日期就是我朋友的生日！就是说，这个金币是跟我的朋友一起诞生的。什么？制造日期在哪里？你眼力不太好呀~ 再看仔细吧！这里有啊！", "而且有人说这个金币能带来幸运，所以我就借来了。真谢谢你！这样我就能还给朋友了。为了表示我的感谢，这是我的一点心意。你收下吧！这是我在这个城市收集的。"], "在废弃都市遇见了叫休咪的女孩子。她说她弄丢了从朋友那里借来的幸运金币。她拜托我找回她的金币。听说在地铁裹着白布的怪物拿了那金币。也许能在#b地铁工地B1#k上找到那金币吧…...首先我要进地铁站。"], [2056, 0, "休咪丢失的钞票", ["哟！你来得正好~ 我等你好久了。又出了点问题，这次我弄丢的不是一个金币，而是钞票。我在做别的事的时候，#o2300100#抢走了我的钞票。怎么样？你可以帮我吗？"], "在废弃都市又见到了休咪。她在担心几天前她弄丢的房费。她说蝙蝠抢走那钞票后逃进地铁站了。怎么又去那里呢？不如我替她付房费吧...不过她拜托我像上次那样进#b工地B2里#k面找回她的钱沓... 我只好进去了…"], [2056, 1, "休咪丢失的钞票", ["啊！那不是我丢的钞票吗？太好了~！有了这些钱，我就可以付这个月的房租呀~！嗯？怎么知道就是我丢的钞票？看这里！有我名字，看不见？你不会真的需要眼镜吧？", "真是太感谢你了！上次也帮了我，我老是麻烦你！我会给你谢礼的。这次你就当作帮别人解决困难吧。怎么样？"], "在废弃都市又见到了休咪。她在担心几天前她弄丢的房费。她说蝙蝠抢走那钞票后逃进地铁站了。怎么又去那里呢？不如我替她付房费吧...不过她拜托我像上次那样进#b工地B2里#k面找回她的钱沓... 我只好进去了…"], [2057, 0, "休咪丢失的钱包", ["我等你多时了~！什么？我又弄丢了钱？对了！而且这次我弄丢的钱挺多的。有人托我买100个#t2000004# 。那么多钱口袋里放不下，所以防在钱包里。但是在某个地方暂时休息的时候，地下突然出现一个洞，钱包掉下去了。你可以帮我找回来吗？"], "在废弃都市又见到了休咪。她几天前答应后胡同的吉姆替他买特殊药水。但是弄丢了吉姆交给他的钱包。她说这次在#b工地B3#k可能找得到那钱包。"], [2057, 1, "休咪丢失的钱包", ["啊！那就是我弄丢的钱包呀！哈～太好了。我就知道你一定能找到，你好厉害。你没拿走钱吧？让我看看。虽然我怀疑你，但是还要数数。一，二，三，四…...可能对吧。", "好！你帮我找回钱包，不用担心报酬！送什么才好呢？...啊！这是我家祖传的卷轴，送给你。可能旧了点，但我也找不到更好的了。"], "在废弃都市又见到了休咪。她几天前答应后胡同的吉姆替他买特殊药水。但是弄丢了吉姆交给他的钱包。她说这次在#b工地B3#k可能找得到那钱包。"]], greeting="糟了。。。我把朋友送给我的贵重的铜钱弄丢了，不知道丢在哪里。。。", stage=0, choices=[], picked=null, page=0, closed=false;
function finish(){closed=true;cm.dispose();}
function start(){
    var menu="";
    for(var i=0;i<entries.length;i++){
        var d=entries[i],q=Packages.server.quest.MapleQuest.getInstance(d[0]);
        if((d[1]==0 && q.canStart(cm.getPlayer(),cm.getNpc())) || (d[1]==1 && cm.getQuestStatus(d[0])==1)){
            menu+="\r\n#L"+choices.length+"#"+(d[1]==0?"[接受] ":"[继续] ")+d[2]+"#l";
            choices.push(d);
        }
    }
    if(choices.length==0){cm.sendOk(greeting);finish();return;}
    cm.sendSimple(greeting+"\r\n"+menu);
}
function showPage(){
    var pages=picked[3];
    if(page<pages.length-1)cm.sendNext(pages[page]);
    else cm.sendYesNo(pages[page]);
}
function action(mode,type,selection){
    if(closed)return;
    if(mode!=1){finish();return;}
    if(stage==0){
        if(selection<0 || selection>=choices.length){finish();return;}
        picked=choices[selection];
        var q=Packages.server.quest.MapleQuest.getInstance(picked[0]);
        if(picked[1]==1 && !q.canComplete(cm.getPlayer(),cm.getNpc())){
            cm.sendOk(picked[4] || "任务条件尚未完成，请查看任务栏中的要求。");finish();return;
        }
        stage=1;page=0;showPage();return;
    }
    if(stage==1){
        if(page<picked[3].length-1){page++;showPage();return;}
        closed=true;
        var q=Packages.server.quest.MapleQuest.getInstance(picked[0]);
        if(picked[1]==0 && q.canStart(cm.getPlayer(),cm.getNpc())){cm.startClientNpcQuest(picked[0]);return;}
        if(picked[1]==1 && q.canComplete(cm.getPlayer(),cm.getNpc())){cm.completeClientNpcQuest(picked[0]);return;}
        cm.dispose();
    }
}
