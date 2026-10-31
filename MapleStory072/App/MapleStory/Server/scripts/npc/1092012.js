// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[6360, 1, "关于时空变形的研究", ["从帕普拉图斯那里拿到线索了吗？"], "天书爷爷为了时空变形得打开帕普拉图斯的次元空间。但并不只是这么简单。天书爷爷说如果是我的话能够抵挡帕普拉图斯，找到打开次元空间的钥匙。为了天书爷爷，与帕普拉图斯战斗，找找看有没有什么特别的东西或是奇怪之处吧。\n\n#i4031869##t4031869#  #b#c4031869# / 1#k"], [6360, 0, "关于时空变形的研究", ["你好~？好久不见了啊。好像比以前瘦了些啊。呼~最近做的这个研究项目实在是太累人了。我在研究时空的变形，看有没有方法能够想去哪个时间场所就去哪，但这可不是能够轻松办到的事情啊。", "要是研究成功的话就好了吧？要是成功的话就能回到过去就能把握到那些不好之处了。研究已经成功进行了百分之八十左右……突然就没有进展了。想研究时空的变形的话，是不是要利用玩具城的次元空间比较好呢……你也知道这个是帕普拉图斯在控制的。", "#h0#大人能帮助我吗？我会好好报答阁下的。"], "天书爷爷为了时空变形得打开帕普拉图斯的次元空间。但并不只是这么简单。天书爷爷说如果是我的话能够抵挡帕普拉图斯，找到打开次元空间的钥匙。为了天书爷爷，与帕普拉图斯战斗，找找看有没有什么特别的东西或是奇怪之处吧。\n\n#i4031869##t4031869#  #b#c4031869# / 1#k"], [6361, 0, "帕普拉图斯的钥匙", ["帕普拉图斯的钥匙好像现在在这里无法使用啊。也许再去时间塔的本源那里，能找到可以使用这个钥匙的机械之类的。你能再去一次时间塔的本源吗？"], "拿着帕普拉图斯的钥匙再去#b时间塔的本源#k看看吧。"], [6363, 1, "新认识", ["恩……？你说你回到过去见到了帕普拉图斯？原来那钥匙是帕普拉图斯无意中弄丢的啊，啊哈~这个钥匙就是能打开次元空间的龟裂的钥匙吗？", "无论如何，从#h0#大人那里感受到奇怪的感觉。好像是因为用不正常的方法打开了次元空间的龟裂，以至在时空的缝隙里受到了特殊能量的影响……我再观察看看。", "#h0#大人,闭上眼想象一下。难道没有感受到什么吗？在我看来，你似乎得到了新的力量。和那次看到的样子不同，好像感受到了什么……好好观察一下自己吧。"], "帕普拉图斯请求说为了完成研究请让他成为实验对象。并承诺会亲自送我回之前的世界……说什么实验对象这话听起来心里总有点惴惴不安，但是要我就这么待在过去里还真的不行。就相信帕普拉图斯，等回到我来之前的时代再把这个事情转告天书爷爷吧。"]], greeting="学习之路是没有尽头的。", stage=0, choices=[], picked=null, page=0, closed=false;
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
