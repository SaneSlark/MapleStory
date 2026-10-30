// CMS072 client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[2019, 0, "秘密之书", ["你来得正好，我有一件事想拜托你。要是你答应我得请求的话，我就给你一件很好的衣服，正好是你能用得。即使你不想答应，也听我说说吧。", "其实，我有一个可爱的儿子，可是他拿着我非常重要的一本书离家出走了。那本书….嗯...我不能告诉你太多，但是那本书对我非常非常重要。", "如果你能找回我得书，我就送你一件非常实用的衣服。怎么样？你可以找到我得儿子拿回我的书吗？"], "在林中之城的高级桑拿房里遇见了叫#b泰素夫#k的秃头叔叔。他说他有一个儿子几天前拿着他最喜爱的书离家出走了。然后拜托我找到他的儿子拿回那本书。要是我找到他那本书，他会给我一件很实用的衣服。他又告诉我他的儿子洛尼常常去魔法密林附近的树林通道。所以我去那里找，应该能找到。不过，那本书比儿子还重要吗？到底是什么样的书啊...?!?!"], [2023, 1, "秘密之书回收", ["呀！就是这本书！就是我想找的。哈哈...真感谢你。我知道你能够找到的。好,我送你一件衣服。还有一些金币。"], "把那些菜给罗尼受到了秘密之书，到底有什么内容?"]], greeting=" 欢迎光临#m105040300#大厦高级桑拿浴。正巧我需要帮助呢。。。", stage=0, choices=[], picked=null, page=0, closed=false;
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
