// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3038, 1, "何克的魔法材料收集", ["哦哦。。。你真的收集标本来了。我确实有眼力。。。我为了表示感谢就给你#b#t4001019##k，这只有我就会做的。"], "在位于通天塔中间的秘密之室里遇到了叫何克的老人。他说他在这里研究自己会动的石头已经30年了。他拜托我收集#b45个小石球的石片，20个冰石球的石片，20个火石球的石片#k了。。。那么我去做？\n\n#t4000085# #b#c4000085##k/20\n#t4000083# #b#c4000083##k/45\n#t4000084# #b#c4000084##k/20"], [3038, 0, "何克的魔法材料收集", ["咳咳！。。。哼。。。不好意思。啊。你好。你找到了这个房间。真是了不起的。我在这里已经呆了30年的#p2030012#。我很长时间没见过任何人。如果有时间，可不可以麻烦你一件事情。你不用担心。这件事不困难。"], "在位于通天塔中间的秘密之室里遇到了叫何克的老人。他说他在这里研究自己会动的石头已经30年了。他拜托我收集#b45个小石球的石片，20个冰石球的石片，20个火石球的石片#k了。。。那么我去做？\n\n#t4000085# #b#c4000085##k/20\n#t4000083# #b#c4000083##k/45\n#t4000084# #b#c4000084##k/20"], [3059, 1, "波达的请求", ["对我的研究感兴趣吗？呵呵～至于结果还是秘密。咦？不是吗？那为什么来找我？波达？波达是谁阿… 嗯…", "我的波达？是在说我那小巧可爱的波达吗？我怎么把可爱的波达给忘掉了呢，那个家伙虽然很小，却是非常忠诚的家伙…", "什么？波达已经长大许多了吗？已经过了这么长时间吗… 在我刚离开的时候还能把它放在我的笼子里到处走呢… 波达在等着我吧，那个小家伙…"], "波达苦苦守候着只留下一句一定会回来，就跑去进行研究的主人…，须代替波达寻找主人何克… 要去找在天空之塔安全地区，进行研究的何克…我该往哪里走呢？"], [3060, 0, "为波达猎取食物", ["我竟然把我的波达忘得一乾二净… 居然一直在等着我这样的主人，我怎么能就这样无动于衷呢…", "很想送一些波达喜欢吃的东西给它，可是… 就如你看到的，因为研究工作我不能离开这里。你能替我去弄来一些吃的吗？只要弄来小企鹅王的鱼100只左右就可以了…"], "接受何克的请托去寻找波达喜欢吃的鱼。到天空之塔下方后从小企鹅王身上收集100只鱼吧。收集完成后拿给波达。\n\n#t4000088# #b#c4000088#/100#k"], [3061, 0, "为波达猎取食物Ⅱ", ["怎么样？我的波达有没有喜欢啊？有没有提到是我送给它的啊？… 是吗？波达那么喜欢啊？", "我一直以来都那么疏忽，真惭愧。好的！要为波达准备更多它喜欢的东西。这次就送它200只吧。怎么样？你能办到吗？为了我的研究再出把力吧。"], "忙于研究的何克再次拜托我去为波达弄到喜欢吃的鱼… 这次竟然是200只？赶快收集完后带给波达吧。\n\n#t4000088# #b#c4000088#/200#k"], [3062, 0, "为波达猎取食物Ⅲ", ["你是想要成为我助手的那个人啊！怎么样？我的波达有没有喜欢那些鱼啊？有提到是我送给它的吗？… 哈哈！波达那么喜欢啊？", "好的！要准备更多波达喜欢吃的送给它！这次要送去300只。怎么样？你能办到吗？只要这次的事情办好的话我就会让你做我的助手。"], "忙于研究的何克又再拜托我去为波达弄到喜欢吃的鱼… 这次竟然是300只？赶快收集完后带给波达吧。\n\n#t4000088# #b#c4000088#/300#k"], [6224, 1, "何克的灵魂囊", ["材料已经全了，灵魂囊的准备材料就这样搞定了… 好，已经完成了#b#t4031468##k。"], "#b#p2030012##k说材料都搜集完的话就帮忙制作#b#t4031468##k。 \r\n#t04000144# #b#c04000144#/50#k\n#t04000146# #b#c04000146#/50#k\n#t04000148# #b#c04000148#/30#k\n#t04006001# #b#c04006001#/30"], [6314, 1, "何克的灵魂囊", ["材料已经全了，灵魂囊的准备材料就这样搞定了… 好，已经完成了#b#t4031468##k。"], "#b#p2030012##k说材料都搜集完的话就帮忙制作#b#t4031468##k。 \r\n#t04000144# #b#c04000144#/50#k\n#t04000146# #b#c04000146#/50#k\n#t04000148# #b#c04000148#/30#k\n#t04006001# #b#c04006001#/30"]], greeting="在这样的深处也有人找上门来。正好需要帮助呢。。。", stage=0, choices=[], picked=null, page=0, closed=false;
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
