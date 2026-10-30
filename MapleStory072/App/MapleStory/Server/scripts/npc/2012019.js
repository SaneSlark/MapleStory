// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2123, 1, "特别指令", ["汪！汪！(开心地摇着尾巴。)"], "#p1022002#说那些奇怪的人让他传话给我。#b“你去见见#m200000000#的#p2012019#吧。”#k说完之后，#p1022002#说其他的情况他也不太清楚。"], [2125, 1, "特别指令！", ["汪！汪！(开心地摇着尾巴。)"], "#p1022002#说那些奇怪的人让他传话给我。#b“你去见见#m200000000#的#p2012019#吧。”#k说完之后，#p1022002#说其他的情况他也不太清楚。"], [3055, 1, "妖精的号角 Ⅱ", ["汪汪...汪汪汪？？"], "试着对波达使用妖精的号角吧！"], [3058, 1, "莉萨的特殊治疗剂Ⅲ", ["汪汪? 嗯? 难道你是为了治疗我的伤口所以回来的吗？或许，你带来了莉萨的特殊治疗剂？那就请你擦在我的伤口上吧？"], "只要有莉萨的特殊治疗剂，就可以治好波达的伤口了…那我得快点去见波达！"], [3059, 0, "波达的请求", ["我的主人有没有平安的躲过那些可怕的怪物呢？汪~ 说是要去研究，已经离开很长的一段时间了。那么疼我的主人怎么会这么长时间没有来一点消息呢...", "汪~ 虽然很想去找我的主人，可我还不是那些怪物的对手。汪～如果是你的话应该能对付得了那些怪物吧… 怎么样？可以帮我去找找我的主人吗？汪~ 很想知道他现在到底怎么样了啊！汪～"], "波达苦苦守候着只留下一句一定会回来，就跑去进行研究的主人…，须代替波达寻找主人何克… 要去找在天空之塔安全地区，进行研究的何克…我该往哪里走呢？"], [3060, 1, "为波达猎取食物", ["我的主人过得平安无事吗？汪~ 那太好了！"], "接受何克的请托去寻找波达喜欢吃的鱼。到天空之塔下方后从小企鹅王身上收集100只鱼吧。收集完成后拿给波达。\n\n#t4000088# #b#c4000088#/100#k"], [3061, 1, "为波达猎取食物Ⅱ", ["汪~ 我的主人又让你送来了啊？汪~ 忙着研究还不忘惦记我呢啊....啊呜~呜~呜~"], "忙于研究的何克再次拜托我去为波达弄到喜欢吃的鱼… 这次竟然是200只？赶快收集完后带给波达吧。\n\n#t4000088# #b#c4000088#/200#k"], [3062, 1, "为波达猎取食物Ⅲ", ["又是鱼！汪~ 我的主人又让你送来了？真希望他不要那么专注于研究.. 汪~ 虽然能够明白主人想我的心情…"], "忙于研究的何克又再拜托我去为波达弄到喜欢吃的鱼… 这次竟然是300只？赶快收集完后带给波达吧。\n\n#t4000088# #b#c4000088#/300#k"]], greeting="呜呜~", stage=0, choices=[], picked=null, page=0, closed=false;
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
