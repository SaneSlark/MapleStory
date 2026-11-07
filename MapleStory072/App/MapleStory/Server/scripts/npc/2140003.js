// CMS client-backed missing NPC entry. Native quest checks/actions own all rewards.
var entries=[[3520, 1, "\u5973\u795e\u7684\u795d\u798f", ["\u6211\u6b63\u5728\u7b49\u4f60\uff0c\u5e74\u8f7b\u7684\u5192\u9669\u5bb6\u3002\\r\\n#L0# #b\u8bf4\u6709\u4e8b\u60c5\u8981\u95ee\u4ed6\u3002", "\u5f88\u4e45\u4e4b\u524d\uff0c\u65f6\u95f4\u5973\u795e\u7ed9\u4eba\u7c7b\u964d\u4e0b\u4e86\u5fd8\u5374\u7684\u795d\u798f\uff0c\u5e76\u548c\u4eba\u7c7b\u505a\u51fa\u4e86\u7ea6\u5b9a\u3002\u7ea6\u5b9a\u8fd9\u4e00\u795d\u798f\u7edd\u5bf9\u4e0d\u4f1a\u6d88\u5931\u548c\u593a\u8d70\uff0c\u4f1a\u6c38\u8fdc\u5730\u7559\u7ed9\u4eba\u7c7b\u3002\\r\\n#L0# #b\u90a3\u3001\u90a3\u4e48\u7ea6\u5b9a\u2026\u2026", "\u5973\u795e\u7684\u7ea6\u5b9a\u5e76\u6ca1\u6709\u88ab\u6253\u7834\u3002\u73b0\u5728\u4ecd\u7136\u6709\u6548\u3002\u4f60\u7684\u8eab\u4e0a\u8fd8\u6709\u5fd8\u5374\u5c31\u662f\u8bc1\u636e\u3002\u963b\u6b62\u4f60\u524d\u5f80\u795e\u6bbf\u6df1\u5904\u7684\uff0c\u4e00\u5b9a\u662f\u522b\u7684\u539f\u56e0\u3002 \\r\\n#L0# #b\u90a3\u539f\u56e0\u662f\u2026\u2026", "\u5177\u4f53\u7684\u539f\u56e0\u6211\u4e0d\u80fd\u8bf4\u3002#p2140000#\u5e94\u8be5\u77e5\u9053\u662f\u600e\u4e48\u56de\u4e8b\u7684\u3002\u4f60\u53ea\u8981\u8fd9\u6837\u8ddf\u4ed6\u8bf4\u5c31\u884c\u4e86\u3002\u90a3\u5c31\u518d\u89c1\u5427\u3002"], "#p2140000#\u6447\u4e86\u6447\u5934\uff0c\u8bf4\u8fd9\u6b21\u4ed6\u4e5f\u4e0d\u77e5\u9053\u4e3a\u4ec0\u4e48\u4f1a\u53d1\u751f\u8fd9\u79cd\u73b0\u8c61\u3002\u65e2\u7136\u5fd8\u5374\u6ca1\u6709\u4e22\u5931\uff0c\u5e94\u8be5\u6ca1\u6709\u7406\u7531\u4e0d\u80fd\u901a\u8fc7\u5fd8\u5374\u4e4b\u8def\u3002\u56e0\u4e3a\u5fd8\u5374\u662f\u4e0d\u53ef\u80fd\u4e22\u5931\u7684\u3002\\n\\n#p2140000#\u8bf4\u4e0d\u77e5\u9053\u662f\u4e0d\u662f\u6253\u7834\u4e86#b\u5973\u795e\u7684\u7ea6\u5b9a#k\uff0c\u8ba9\u6211\u53bb#b#p2140003##k\u90a3\u91cc\u786e\u8ba4\u4e00\u4e0b\u7ea6\u5b9a\u7684\u8bb0\u5f55\u3002"]], greeting="你是为了不遗忘而记录呢？还是为了记录而记忆呢？", stage=0, choices=[], picked=null, page=0, closed=false;
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
