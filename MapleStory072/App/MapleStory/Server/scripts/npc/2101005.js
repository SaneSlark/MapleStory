// CMS072 culture quest: client dialogue text, native Check/Act own conditions and rewards.
var data=["\u5b66\u4e60\u963f\u91cc\u5b89\u7279\u7684\u6587\u5316", "#p2101005#\u8bf4 #m260000000# \u7684\u4eba\u4eec\u8b66\u89c9\u6027\u5f88\u9ad8\uff0c\u82e5\u80fd\u559d\u6751\u5e84\u7684\u6c34\uff0c\u5927\u5bb6\u5c31\u4f1a\u4fe1\u4efb\u4f60\u3002#b\u5bab\u6bbf\u90a3\u8fb9\u6709\u7eff\u6d32#k\uff0c\u53bb\u90a3\u513f\u770b\u770b\uff1f", [["\u554a\uff0c\u4f60\u4e0d\u662f#m260000000# \u7684\u4eba\u554a\u3002\u597d\u4e45\u6ca1\u89c1\u5230\u5916\u6765\u4eba\u4e86\uff0c\u5f88\u9ad8\u5174\u89c1\u5230\u4f60\uff01\u55ef\uff1f\u600e\u4e48\u77e5\u9053\u7684\uff1f\u663e\u7136\u554a\uff5e \u4e00\u770b\u6253\u626e\u548c\u9762\u76f8\u5c31\u77e5\u9053\u4e0d\u662f\u4f4f\u5728\u6c99\u6f20\u7684\u4eba\uff1f\u5728\u964c\u751f\u7684\u6c99\u6f20\u65c5\u884c\u5f88\u7d2f\u5427\uff1f#m260000000#\u7684\u4eba\u4eec\u4e00\u53e5\u8bdd\u90fd\u4e0d\u8bf4\u2026\u2026 \\r\\n", "\u4e0d\u662f\u4e0d\u662f\uff5e \u5012\u4e0d\u6c89\u9ed8\uff0c\u53ea\u662f\u8b66\u6212\u5fc3\u6bd4\u8f83\u9ad8\u3002\u6c99\u6f20\u6c11\u65cf\u672c\u6765\u5c31\u5bf9\u964c\u751f\u4eba\u5f88\u82db\u523b\u3002\u5c31\u50cf\u8fd9\u6c99\u6f20\uff0c\u4e0d\u8f7b\u6613\u5411\u4eba\u8892\u9732\u5fc3\u6249\u3002\u4f60\u8981\u82b1\u4e9b\u65f6\u95f4\u9002\u5e94\u8fd9\u91cc\u7684\u6587\u5316\u3002\\r\\n", "\u4e0e\u8fd9\u91cc\u7684\u4eba\u4eec\u5bf9\u8bdd\u4e0d\u662f\u4ef6\u96be\u4e8b\u3002\u53ea\u8981\u4f60\u6210\u4e3a#m260000000#\u91cc\u7684\u4eba\u5c31\u53ef\u4ee5\u4e86\u3002\u6211\u544a\u8bc9\u4f60\u4e00\u4e2a\u53ef\u88ab\u8ba4\u53ef\u7684\u65b9\u5f0f\uff0c\u60f3\u5c1d\u8bd5\u4e00\u4e0b\u5417\uff1f"], ["\u54c7\u554a\uff5e \u559d\u5b8c\u6c34\u4e86\u5417\uff1f\u8ba9\u706b\u70ed\u7684\u6c99\u6f20\u70ed\u6c14\u77ac\u95f4\u6d88\u5931\u7684\u7eff\u6d32\u7684\u6c34\uff0c\u5bf9\u4e8e#m260000000#\u4eba\u4eec\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002\u559d\u7eff\u6d32\u7684\u6c34\uff0c\u5c31\u8bf4\u660e\u5df2\u7ecf\u6210\u4e3a\u4e86\u8fd9\u4e2a\u5730\u65b9\u7684\u4eba\u4e86\u3002"]]],closed=false,stage=0,phase=-1,page=0;
function start(){
    var q=Packages.server.quest.MapleQuest.getInstance(3900);
    if(q.canStart(cm.getPlayer(),cm.getNpc()))phase=0;
    else if(cm.getQuestStatus(3900)==1)phase=1;
    if(phase<0){cm.sendOk(data[2][0][0]);closed=true;cm.dispose();return;}
    cm.sendSimple("#L0#"+(phase==0?"[½ÓÊÜ] ":"[¼ÌÐø] ")+data[0]+"#l");
}
function show(){var p=data[2][phase];if(page<p.length-1)cm.sendNext(p[page]);else cm.sendYesNo(p[page]);}
function action(mode,type,selection){
    if(closed)return;
    if(mode!=1){closed=true;cm.dispose();return;}
    var q=Packages.server.quest.MapleQuest.getInstance(3900);
    if(stage==0){
        if(selection!=0||phase<0){closed=true;cm.dispose();return;}
        if(phase==1&&!q.canComplete(cm.getPlayer(),cm.getNpc())){cm.sendOk(data[1]);closed=true;cm.dispose();return;}
        stage=1;show();return;
    }
    if(page<data[2][phase].length-1){page++;show();return;}
    closed=true;
    if(phase==0)cm.startClientNpcQuest(3900);else cm.completeClientNpcQuest(3900);
}
