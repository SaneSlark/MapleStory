// 062 three-column auction menu; CMS072 operator NPC 9010000.
var done=false;
var names=["超级传送","世界排名","百货商店","职业转职","会员专区","随身仓库","全满技能","重置属性","清理背包"];
var targets=[9040010,9040004,9100203,1052100,2002000,1032006,1032001,2003,9120003];
var scripts=["9040010","9040004","9100203","auction_job","9310070","1032006","auction_skills","auction_reset","9120003"];
function start(){
    done=false;
    var text="可爱的#r#e「 #h # 」#n#k 我能为你做什么？\r\n#b#e";
    for(var i=0;i<names.length;i++){
        text+="#L"+i+"#"+names[i]+"#l";
        text+=(i%3==2?"\r\n":"   ");
    }
    cm.sendSimple(text,9010000);
}
function action(mode,type,selection){
    if(done)return;done=true;
    if(mode!=1||selection<0||selection>=scripts.length){cm.dispose();return;}
    cm.openNpc(targets[selection],scripts[selection]);
}
