// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3821, 1, "照看韩太守的蟠桃", ["哇！是#p2090004#先生给的药吗？他很少能把药制好哦，真是神奇啊！非常感谢！"], "#p2091003#说想找一个可以让蟠桃树健康成长的药物。虽然药是#p2091002#制得好，但是也不能请求作为果园主人的他，希望从#b#p2090004##k那儿拿些#b#t4031554##k…… \n\n#t4031554#  #b#c4031554##k/1"], [3821, 0, "照看韩太守的蟠桃", ["您是旅行者吧？很高兴见到您。您觉得#m250000000#怎么样？不是个和平漂亮的小村子吗？这里的人都习惯于无忧无虑地做仙人修炼。这个村子里有苦恼的可能只有我一个人了。", "什么苦恼？我是果园守卫。大家可能都觉得果园守卫会很轻松。但事实上不是。很累，因为盯着蟠桃果林的蟠桃的人非常多，所以一点都不轻松。您愿意帮忙吗？"], "#p2091003#说想找一个可以让蟠桃树健康成长的药物。虽然药是#p2091002#制得好，但是也不能请求作为果园主人的他，希望从#b#p2090004##k那儿拿些#b#t4031554##k…… \n\n#t4031554#  #b#c4031554##k/1"], [3835, 0, "韩太守的所见", ["生活在武陵周围的动物与其他地方的动物不一样。那些动物中绝大多数有着知性，是为了成仙人而修炼的。虽然还有动物会本能地攻击人。前不久在通天林就碰到了那种熊。", "在和平的通天林突然受到攻击，我都吓得不敢动弹了。野生熊的熊掌在眼前晃动。就在那时，发生了不可思议的事情。不知是谁的力量，把那只熊打倒拯救了我。可是……", "帮助我的竟然也不是人。比那只野生熊更加杀气腾腾…… #b眼周围有伤疤的大块头的熊#k。我又害怕起来。怕它吃了我……不过它没说什么转过身消失了。还没听我说声谢谢……", "它帮我，却没能说声感谢，我觉得很抱歉。看衣服好像是在通天林为了成仙人而修炼的熊中的一只……会是谁呢？如果方便，您能帮我找到它的真实身份吗？"], "在通天林韩太守被可怕的野生熊袭击了。在千钧一发之际，某人来拯救了无法动弹的韩太守…… 好像是第一次见到的熊。韩太守很想了解熊的情况，希望去问一下#b诺功#k。"], [3839, 1, "韩太守的报答", ["啊……这是？肯德熊写的？哇啊……真没想到能收到感谢信。果然是好人呐！希望早日解开妖怪禅师的魔法……"], "听到关于肯德熊的所有故事后，韩太守希望可以把蟠桃拿给肯德熊来酬谢。怎么把韩太守的蟠桃交给肯德熊呢？#b野生熊的领地#k可能有放桃的地方……"], [3839, 0, "韩太守的报答", ["冒险家！见过诺功了吗？那位是否知道有关熊的事 ？", "啊啊，原来如此。它就是肯德熊啊。听说过。被妖怪禅师施了魔法失去理智的武陵的弟子……", "不过真没想到事实这么让人心痛。既然能帮助处在危险中的人们，那么肯定能战胜妖怪禅师的魔法。", "为了答谢它，我帮忙准备了蟠桃，但不知该怎么送给它。而且再与它见面也不是件容易的事……冒险家，您能在帮我一次吗？"], "听到关于肯德熊的所有故事后，韩太守希望可以把蟠桃拿给肯德熊来酬谢。怎么把韩太守的蟠桃交给肯德熊呢？#b野生熊的领地#k可能有放桃的地方……"]], greeting="啊啊~ 这些猿公们太快无法抓住~再说这些家伙们随便扔蟠桃! 蟠桃怎么能忍受呢? 怎么办才好啊?", stage=0, choices=[], picked=null, page=0, closed=false;
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
