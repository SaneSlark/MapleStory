// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2171, 0, "请帮助贝音。", ["你也听见了？在诺特勒斯号上有奇怪的声响。用这个听诊器确认一下吧。我干这一行有10年多了，还是第一次听到这种声音。能不能帮忙打听一下是否发生了什么事？"], "听见奇怪音波的贝音拜托我向#b诺特勒斯号码头瞭望塔#k上的#b巴特#k询问是否有什么奇怪的动静。瞭望塔在诺特勒斯号码头的东边，所以就去那边看看吧。"], [2172, 1, "巴特看见的是？", ["啊！！那是真的吗？巴特也说看见了什么异状？那事情就严重了。万一那些可疑的东西是黑魔法师的话，事情就大条了。我得仔细看看报告的内容。"], "把巴特的报告带给#b贝音#k吧。"], [2173, 1, "发现黑色影子的停滞", ["啊~已经来了啊。还真是动作快啊。找到黑魔法师的见证了吗？"], "看了巴特报告的贝音似乎发现了什么。自己感觉到的奇怪的苗头好像就是黑魔法师的手下……贝音说他们可能还停留在金银岛上，因此拜托我在诺特勒斯号码头各抓一些猪和红蜗牛，找到黑魔法师的证明。\n\n#i4031846##t4031846# #b#c4031846##k / 1 \n#o130101# #r#a21731##k\n#o1210100# #r#a21732##k"], [2173, 0, "发现黑色影子的停滞", ["我已经仔细看过报告了。果然和我想的一样，黑魔法师的手下们在暗中刺探我们。看起来事情比想象的棘手。", "这件事情应该报告给凯琳大人和木拉特大人吧。我们还需要证据来见证我和巴特看见这些……可以一起找找看吗？"], "看了巴特报告的贝音似乎发现了什么。自己感觉到的奇怪的苗头好像就是黑魔法师的手下……贝音说他们可能还停留在金银岛上，因此拜托我在诺特勒斯号码头各抓一些猪和红蜗牛，找到黑魔法师的证明。\n\n#i4031846##t4031846# #b#c4031846##k / 1 \n#o130101# #r#a21731##k\n#o1210100# #r#a21732##k"], [2174, 0, "向木拉特报告。", ["上次找到黑魔法师的见证后，报告完成的比想象得快啊。应该把这个报告给木拉特大人的，不过你能亲自代为报告吗？这会很有帮助的。"], "报告书上整理记载了我找到的黑魔法师的证明还有贝音感觉到的船的音波，巴特看见的可疑的痕迹，我把这些都转交给了木拉特。"]], greeting="嘘~我要听船的声音，稍微安静一下好不好。", stage=0, choices=[], picked=null, page=0, closed=false;
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
