// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3807, 0, "药草地的入侵者1", ["诶呀诶呀。新收获的山参变得这么歪怎么用啊。嘎嘎。#p2091002#说什么来着。啊? 为什么这样啊?  \n呵… 你是否知道怎么区分山参与 #o5120501#? 不会连这个都不知道吧? 那就帮我做这件事吧。"], "#p2092000#说他的药草地遭到#b#o5120501##k们侵入,并装作是人参后，把草地的养分全吸走.为了让人参好好生长他拜托消除#r#o5120501# 100只#k.\n\n#o5120501# #r#a38071##k"], [3807, 1, "药草地的入侵者1", ["嘿嘿，#o5120501#全部消灭了啊。 非常不错。 辛苦辛苦了。"], "#p2092000#说他的药草地遭到#b#o5120501##k们侵入,并装作是人参后，把草地的养分全吸走.为了让人参好好生长他拜托消除#r#o5120501# 100只#k.\n\n#o5120501# #r#a38071##k"], [3808, 1, "药草地的入侵者2", ["哦哦! 真的很感谢你消灭了#o6130208#和 #o7130104#。 这次已经给了他们颜色瞧了，下次应该不敢再偷什么了吧! 辛苦了!"], "药草长#p2092000#管理的药草地被某人入侵并把药草偷走了. #p2092000#说分明是红鼻子海盗团的恶行,并要求去抓#r#o6130208##k和 #r#o7130104##k.\n\n#o6130208# #r#a38081##k\n#o7130104# #r#a38082##k"], [3808, 0, "药草地的入侵者2", ["你是冒险家是吧? 那应该很擅长消灭海盗这种工作吧。不是吗? 一定要帮我解决掉那帮子海盗吧!"], "药草长#p2092000#管理的药草地被某人入侵并把药草偷走了. #p2092000#说分明是红鼻子海盗团的恶行,并要求去抓#r#o6130208##k和 #r#o7130104##k.\n\n#o6130208# #r#a38081##k\n#o7130104# #r#a38082##k"], [3833, 0, "找缺少的药材", ["什么，什么…… 又是掠夺？已经没有储存的药材了，怎么办…… 还缺参啊，#p2091002#需要参，这可怎么办…… 恩，那边那位！为什么一直看着这边啊？想帮忙吗？"], "因为老海盗的掠夺，缺少给#p2091002#的药材。#p2092000#说要找其他药材来代替参，要找到#b#t04000294##k，越多越好。 \n\n#i4000294# #t4000294# #b#c4000294##k"]], greeting="栽培药草可不是人人都可以，要用心", stage=0, choices=[], picked=null, page=0, closed=false;
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
