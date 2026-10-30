// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2083, 1, "伊卡路斯的滑翔翼", ["我等你等得好辛苦哦。在你去弄材料的这段时间，我已经完成了漂亮完美的设计图。只要按照这个做出来，我们就一定能在天上飞翔的。材料都弄齐了吗？"], "在废弃都市某栋建筑顶楼遇到了#b#p1052106##k，他提议说要制作滑翔翼来遨游天空。虽然不太可靠，但拥有梦想并想要飞向天空的#p1052106#，他的毅力还真令人佩服。那我来帮伊卡路斯收集#b#t4000042# 50个、 #t4003001# 10个、#t4003004# 50个#k好了，让他可以制作出梦想中的滑翔翼。\n\n#t4000042#  #b#c4000042##k / 50\n#t4003001#  #b#c4003001##k / 10\n#t4003004#  #b#c4003004##k / 50"], [2084, 1, "伊卡路斯的热气球", ["正在做结实的篮子呢。现在只要做出巨大的气球就可以啦。我拜托你的那些材料都弄来了吗？"], "制作滑翔翼失败的伊卡路斯…这次说要做出热气球来翱翔天空。虽然这次看起来也太冒险，但看来也无法说服伊卡路斯了。这次为了制作热气球，说是希望帮她收集#b#t4000035# 100个#k与#b#t4031164# 10个#k，不知道这次会不会成功啊…\n\n#t4000035#  #b#c4000035##k / 100\n#t4031164#  #b#c4031164##k / 10"], [2087, 1, "传达飞天药水", ["啊，回来了啊！见到维英了吗？药呢？带来了吗？"], "魔法密林的#b妖精维英#k希望将好不容易制作完成的药水转交给伊卡路斯。只要有这个药，伊卡路斯就可以飞上天空了吗？好！那得赶快交给伊卡路斯…"], [2090, 0, "好无聊1", ["啊…今天可真无聊啊…那个，你有空吗？和我一起玩吧~ 实在是很无聊啊~ 好吗？"], "在废弃都市见到了伊卡路斯，真搞不懂他在屋顶上到底想干啥…看来他今天觉得很无聊吧，对路过的我提出了一些问题。"], [2091, 1, "好无聊2", ["哇！真的都弄来了啊~真谢谢你哦，现在我不会觉得无聊了。我该怎么报答你呢…那请收下这个吧~"], "废弃都市的伊卡路斯…我已经将他提出的问题全部答对，可他还是直说无聊。他要我帮他找到可以在屋顶玩的玩具。\n\n#t4000003# #b#c4000003##k/40 \n#t4000004# #b#c4000004##k/40"], [2091, 0, "好无聊2", ["你解题真不赖啊~ 可是我还是觉得无聊…那就再接受我的一个请求吧~我想在这个屋顶上玩，帮我弄来#b树枝 40个#k和#b绿液球 40个#k吧~ 拜托了！"], "废弃都市的伊卡路斯…我已经将他提出的问题全部答对，可他还是直说无聊。他要我帮他找到可以在屋顶玩的玩具。\n\n#t4000003# #b#c4000003##k/40 \n#t4000004# #b#c4000004##k/40"]], greeting="你看那片天空...", stage=0, choices=[], picked=null, page=0, closed=false;
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
