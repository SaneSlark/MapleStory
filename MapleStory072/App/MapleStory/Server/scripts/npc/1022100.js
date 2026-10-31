// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2003, 1, "找素菲亚", ["找素菲亚"], "在明珠港的金银号附近见了特奥。他是胡子很多的人。他说有是有#b那种药#k，但不能白给我。要是我给他会#b发光的石头#k，他就可以交给我那药。看起来他已经很熟悉玛亚，而且他已经知道玛亚的病，但怎么能提要求呢？真是奇怪的人... 我为了拿到发光的石头要去见勇士部落杂货店的#r索非亚#k。"], [2004, 0, "闪耀石头的材料", ["你想得到#b#t4031004##k吗？ 哼...那个石头很稀有，一般是无法得到的...好！！！如果你能收集到现在我说的一些魔法材料的话，我就给你做。注意，记好了。", "需要#b#e50#n个#t4000004##k, #b#e50#n个#t4000005# #e#k, #b#e20#n个#t4000006##k, #b#e1#n个#t4031005##k。大部分材料比较容易找到... 但关键是#t4031005#。这个问题到村落里找#r#p1022002##k先生问问。"], "在杂货店里见到了索非亚。她是想成为炼金术士的小姐。她告诉我为制作发光的石头需要#b50个软软的液体，50个叶子，20个三眼章鱼的足，一瓶变异蘑菇的血#k。别的东西不难得到…但是变异蘑菇的血是什么呢？幸亏索非亚告诉我在勇士部落某个地方住着一个叫麦吉的男人肯定知道。叫麦吉... 他在哪里？"], [2006, 1, "变异蘑菇的血2", ["天啊！你是怎么得到这些材料的呢？你真有两下子呀！特别是#t4031005#，普通能力的人是决不可能得到的... 太辛苦你了！用这些材料就能够做#b#t4031004##k了呀。"], "在地下洞穴收集#b40个道符#k后回勇士部落给麦吉。那家伙……还是那么傲慢，但他说他一言为定，给我#b变异蘑菇的血#k。虽然他说话那么骄傲，但说不定他是个好人。我要快点收集#b50个软软的液体，50个叶子，20个三眼章鱼的足，一瓶变异蘑菇的血#k去找索非亚。"], [2007, 0, "制作闪耀的石头", ["这就是#b#t4031004##k，给你...但是你要把这块石头用在哪儿呢？它的确是个很特别的东西... 但是，除了一些收藏家对它感兴趣以外对其他人是没用的呀！？"], "看我收集万所有的材料，索非亚好像挺吃惊的。因为那不太容易。她用我收集来的材料做了#b发光的石头#k。看着它发光着闪耀的样子… 我才理解人们为什么想获得这个石头。我得到了石头，要赶快去利斯港见特奥和他交换奇怪的药。"]], greeting="啊~我也想去冒险。。。每天都呆在这里干活儿真受不了！！我妈妈开了家杂货店，我每天都在这里做药水。。。呜呜。。。可怜我在这里虚度年华。", stage=0, choices=[], picked=null, page=0, closed=false;
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
