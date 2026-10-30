// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2066, 1, "运送化石箱子", ["是芳博士让你来这里的？他不是在勇士部落研究化石吗？"], "芳博士说难得找回来的化石不能放在他的房间保管. 因为很危险… 他拜托我把化石送给魔法密林的#b#p1032104#博士#k."], [2067, 0, "植物化石研究", ["你是以前拿芳博士的箱子去的那个人吧？好久不见！你还没忘记再来找我。正好我正在研究化石。你会帮我吗？"], "巴缇博士要开始植物化石研究，但现在没有植物的样品不能进行研究。所以她拜托我为她收集#b20个#t4031150##k。\n\n#t4031150#  #b#c4031150##k / 20"], [2067, 1, "植物化石研究", ["植物化石研究"], "巴缇博士要开始植物化石研究，但现在没有植物的样品不能进行研究。所以她拜托我为她收集#b20个#t4031150##k。\n\n#t4031150#  #b#c4031150##k / 20"], [2068, 0, "动物化石研究", ["这是20个植物样品。品质也不错。辛苦你了。对植物化石研究很有帮助。果然是芳博士推荐的人。我还有一件事情想拜托你。怎么样？你能帮我吗？"], "巴缇博士说为了研究动物化石需要#b一个#t4031151##k。在射手村附近他的女儿桉保管这个。桉在哪里？"], [2069, 1, "运送龙之头骨", ["你回来了？我忘了告诉你，桉是性格非常孤僻的孩子。我忘记给你写一封信了。"], "从巴缇博士的女儿桉那里拿到了#t4031151#。那么我要把这个物品拿回去给巴缇博士。"], [2070, 0, "化石研究成果", ["好久不见了。很感谢你上次帮我。有了你的帮忙，我的研究进行得很顺利。", "你拿来的化石真是个重要的资料。那个化石就是研究古生物特殊能力的关键。如果能好好利用那个能力，对现在人类会有很大的帮助。", "我要把这个研究报告送到勇士部落的芳博士那里，你这次也会帮我吧？"], "我再去魔法密林见到了巴缇博士。她告诉我化石研究的结果。然后拜托我把研究报告书送给勇士部落的芳博士。但是我要把#b100个#t4000005##k和#b50个#t4000018##k,#b1个#t4031153##k,#b一个#t1032000##k一块儿给他。这样他就会给我好东西？\n\n#t4000005#  #b#c4000005##k / 100\n#t4000018#  #b#c4000018##k / 50\n#t4031153#  #b#c4031153##k / 1\n#t1032000#  #b#c1032000##k / 1"], [2152, 1, "传闻的真相-巴缇", ["传闻的真相-巴缇"], "去找#m101000000#的植物学家#b#p1032104##k问问吧。"]], greeting="我是生物学家巴缇。要研究的东西很多，但时间一直都不够用啊。", stage=0, choices=[], picked=null, page=0, closed=false;
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
