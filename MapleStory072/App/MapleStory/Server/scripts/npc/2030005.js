// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3033, 1, "雕像的秘密", ["在雕像下面有个会发光的箱子。你想用#b#t4031053##k打开箱子看看吗？"], "阿尔卡斯特用记忆之粉成功地配合了四张地图片。按照地图说，在#b天空之城塔里某个地方的雕像#k里隐藏了《上古魔书》…"], [3034, 0, "再寻找的上古魔书", ["拿着#b#t4031053##k走近那个发光的箱子，戒指突然发出一道亮光，然后消失了。不过箱子被打开了，里面正是阿尔克斯塔让我找的#r#t4031056##k。"], "终于找到了《上古魔书》。这次回去给阿尔卡斯特这本书，我的任务才结束了吧？"], [6280, 1, "神圣的骑士之剑", ["就像#p2030005#以慈祥的表情俯瞰我们似的。"], "#p2081100#谈起了神圣的力量,并建议去见通天塔的雕塑。搜集 #b#t4031454##k后把 #b#t4031455##k放入再拿到#b#p2030005##k就可以获得那个力量…关于 #t4031454#探险队长坦克很清楚,先去找他后再去金银岛。 \n\n#t4031455# #b#c4031455#/1#k"], [6800, 0, "女神的安排", ["等了你…好久…", "数不清的战斗…还有数不清的相逢…", "遨游冒险岛世界的旅行者…… 这次的旅途愉快吗？"], "一向安静的女神雕像开始有声音了。作为一个人类，已经到达了最高的境界…… 现在需要可以为更多人奉献的神力，如果做好心理准备的话，请向女神宣誓吧。"], [6800, 1, "女神的安排", ["您再次光临这里了，这说明…… 你已经准备好为更多的人努力了吗？", "很高兴您这么说。这样才是真正的冒险岛的英雄…… 你的存在会激励着更多的人。"], "一向安静的女神雕像开始有声音了。作为一个人类，已经到达了最高的境界…… 现在需要可以为更多人奉献的神力，如果做好心理准备的话，请向女神宣誓吧。"]], greeting="你好，有什么事吗？", stage=0, choices=[], picked=null, page=0, closed=false;
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
