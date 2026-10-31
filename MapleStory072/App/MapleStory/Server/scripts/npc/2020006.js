// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3005, 1, "消失的赫拉", ["消失的赫拉"], "按照阿尔卡斯特说的去天空之城访问了赫拉的家。但家里除了保姆#b珥玛#k以外谁也没见到。听说赫拉几个月前突然离家出走后就没有消息… 听说#b冰峰雪域#k德杰是赫拉的老朋友，我要去看他。"], [3006, 0, "赫拉去哪儿？", ["你在找赫拉吗？她是我很好的朋友。但是这次她一句话也没交代就失踪了。 我也正在想她可能去的地方，但还没有头绪。#b几个月前她母亲去世后#k，赫拉就突然离家出走。估计很难找，你也放弃吧。", "你真是坚忍不拔。啊~ 我想起来了一件事儿。我以前听赫拉说过她#b母亲的遗物#k，不知道是谁把它偷走。她有可能为了找那个才出去，关于这件事#b保姆尔玛#k应该知道吧。你再去赫拉的家找保姆问一下吧。"], "杰德说赫拉消失的原因可能与被偷的#b母亲的遗物#k有关系。同时告诉我赫拉的保姆有关于它的信息。"], [3007, 1, "一个钥匙", ["一个钥匙"], "从珥玛那听到了赫拉离家出走前多次说过关于#b老太太#k的内容。但是要获得关于老太太的信息，再要去看杰德。"], [3008, 0, "老太太", ["赫拉说过#b老太太#k吗？嗯~ 在天空之城和冰峰雪域这两个村落里确实没有老太太，她说的是谁呢？啊！她说的人可能是#b斯皮罗纳#k吧。她住在天空之城公园某处的小屋里，那里有怪物出没。你问问她吧，怎么样？"], "杰德说赫拉说过的老太太可能是天空之城公园怪物出没的某个地方的小屋，在那里居住的#b斯皮罗纳#k。让我去看她。"], [3016, 1, "找到的赫拉", ["这不是我给赫拉的#b项链#k么？你见过赫拉吧！她过得怎么样？太好了！赫拉没事，我也可以放心继续研究。她说把这项链送给我吗？知道了，我会好好保管的。这是我送给你的礼物，不要客气。"], "赫拉拜托我把#b项链#k转交给杰德。同时她告诉我几年前在家读过老旧的日记，那时候看到过在雪原幽深的山沟里某个地方《上古魔书》消失的纪录。有关它更仔细的信息从杰德打听得到……我要回去找杰德，告诉她赫拉的消息。"], [3017, 0, "小墓地", ["嗯...赫拉说问我关于#b#t4031056##k吗？她还说有在雪原某个地方弄丢的记录吗？对!几天前我调查村落周围的地质时，在雪原的山沟里看见了#b小墓地#k。那墓地可能是线索。"], "受到赫拉的项链后杰德很高兴了。杰德说小墓地位于雪原的某处。"]], greeting="在神秘岛研究大陆的地理已经好多年了，可是还有好多未知的东西。需要更多的资料。最近正在担心着，生活在天空之城的老朋友，他失踪了，也不知道发生了什么事情。。。", stage=0, choices=[], picked=null, page=0, closed=false;
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
