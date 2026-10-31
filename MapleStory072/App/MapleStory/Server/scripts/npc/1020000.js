// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2000, 1, "酋长的家修理", ["真了不起的！收集了这么多…看来你也不是一个等闲之辈呀！嗯...好吧。我按上次的约定给你盾牌。这是我非常喜爱的盾牌，只是现在不用了。你可要珍惜阿。"], "荒凉的高原村勇士部落。。。 在那里我见到了酋长，他穿得真奇怪。他拜托我收集为修理房子所需要的#b30个树枝和50个木块#k来。要是我答应他的请求，我就可以得到他的盾牌。但我不答应的话，难道他真会吃了我？\n\n#t4000018# #b#c4000018##k/50\n#t4000003# #b#c4000003##k/30"], [2000, 0, "酋长的家修理", ["你可不可以把#b#t4000003# #e30#n个#k和 #b#t4000018# #e50#n个#k拿来？这次我打算修理我的房子。如果愿意的话，我就送你一个好#b盾牌#k。这个盾牌对我是没用的。你打退木怪的时候可以获得我需要的东西。"], "荒凉的高原村勇士部落。。。 在那里我见到了酋长，他穿得真奇怪。他拜托我收集为修理房子所需要的#b30个树枝和50个木块#k来。要是我答应他的请求，我就可以得到他的盾牌。但我不答应的话，难道他真会吃了我？\n\n#t4000018# #b#c4000018##k/50\n#t4000003# #b#c4000003##k/30"], [2001, 0, "酋长盖房子", ["哦~是你呀。几天不见你好像出名了嘛。总之上次多亏你，我的房子才得以修缮一新。 但这可怎么办呢？住在#m100000000#的我的亲戚都要办到我这里来呀…真是的。还得盖新房子，不过什么材料都没有…", "喂！对不起，你可不可以帮我收集盖房子所需的材料？这新房子是为我即将搬过来得亲戚准备的，我的亲戚人数很多，所以你上次拿来的那些#t4000018#和#t4000003#对于盖这间房子来说简直太少了。唉...我给你列个清单，拜托你帮我收集收集…", "我需要100个#b#t4000022##k, 30个#b#t4003000##k, 30个#b#t4003001##k。但是只有这个还不够...实话告诉你几天前我丢失了为盖房子买过的#b地契#k...我的儿子说他拿着地契去#m105040300#的时候受到了怪物的攻击地契被怪物抢走了。", "抢走地契的怪物就是住在幽深森林里的叫#r#o3230100##k的四脚蛇。你愿不愿意帮我收集盖房子需要的材料并帮我夺回地契？如果事情办妥了，我就送你一件好东西。那加油阿！"], "我又去找以前帮过他的酋长。他看我这么强的样子，好像很吃惊。但他这次拜托我更难问题。因为住在射手村的亲戚们都要搬来，需要新的房子。他说为了盖新房子，需要#b100个石头人的石头，30个木材，30个螺丝钉，一张地契#k。但是上次他儿子拿着地契，在林中之城附近被风独眼兽抢走了。我只好去沼泽地找它们算帐。\n\n#t4000022# #b#c4000022##k/100\n#t4003000# #b#c4003000##k/30\n#t4003001# #b#c4003001##k/30\n#t4001004# #b#c4001004##k/1"], [2001, 1, "酋长盖房子", ["这...就是我儿子丢失的那张地契呀！而且你给我收集了盖房子需要的材料！ 真是太感谢你呀。这样我可以和我的亲戚一起住在#m102000000#了…!对了，这是我的一点心意…", "好...你选择你需要的卷轴。成功比率都是10%的。"], "我又去找以前帮过他的酋长。他看我这么强的样子，好像很吃惊。但他这次拜托我更难问题。因为住在射手村的亲戚们都要搬来，需要新的房子。他说为了盖新房子，需要#b100个石头人的石头，30个木材，30个螺丝钉，一张地契#k。但是上次他儿子拿着地契，在林中之城附近被风独眼兽抢走了。我只好去沼泽地找它们算帐。\n\n#t4000022# #b#c4000022##k/100\n#t4003000# #b#c4003000##k/30\n#t4003001# #b#c4003001##k/30\n#t4001004# #b#c4001004##k/1"], [2148, 1, "传闻的真相-酋长", ["传闻的真相-酋长"], "去找在#m102000000#生活了很长时间的#b#p1020000##k问问吧。"]], greeting="家里又多了一名成员，要修理房子了。可是缺材料怎么办呢？", stage=0, choices=[], picked=null, page=0, closed=false;
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
