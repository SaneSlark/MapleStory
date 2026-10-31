// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3841, 0, "妖怪禅师的召唤", ["冒险家先生～看你拿着这么丑陋的东西，肯定是道功派来的……暂且扔了那个东西，你先听我说如何？我给你解释所有的误会。这边请。呼呼～"], "#m250010503#中，突然#r妖怪禅师#k过来搭话了。妖怪禅师说想解释一下一直以来对他的误会…… 是真的吗？去找找妖怪禅师所说的，#b妖怪森林2#k的#b丢失雕像的石床#k吧。"], [3841, 1, "妖怪禅师的召唤", ["您来了！冒险家先生～！心有灵犀啊！哈哈哈哈～从现在开始我会一一解释您对我的误会和偏见。"], "#m250010503#中，突然#r妖怪禅师#k过来搭话了。妖怪禅师说想解释一下一直以来对他的误会…… 是真的吗？去找找妖怪禅师所说的，#b妖怪森林2#k的#b丢失雕像的石床#k吧。"], [3842, 0, "道功的危机", ["没想对道功发火。善良慈祥的妙仙王不会因为一点点小事而发火。虽然被道功诬陷，但是不想和他斗。真想解除误会好好相处……冒险家先生肯定会帮我的是吧？"], "妖怪禅师自称为妙仙王，说自己是善良的仙人，虽被道功诬陷，但不想与他为敌，希望以和为贵。并把灵药当作礼物送给了#b道功#k…… 我把红色珍珠交给了道功。"]], greeting="我妙仙王是和平主义者。不想和武陵道公相斗。我觉得没什么比爱与和平更重要。呼呼呼！", stage=0, choices=[], picked=null, page=0, closed=false;
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
