var state=0,chosen=-1,done=false;
var names=["装备栏","消耗栏","装饰栏","其它栏","现金栏"];
function start(){state=0;done=false;var text="请选择要清空的背包栏：\r\n";for(var i=0;i<names.length;i++)text+="#L"+i+"#"+names[i]+"#l\r\n";cm.sendSimple(text);}
function action(mode,type,selection){
    if(done)return;
    if(mode!=1){done=true;cm.dispose();return;}
    if(state==0){if(selection<0||selection>=names.length){done=true;cm.dispose();return;}chosen=selection;state=1;cm.sendYesNo("确认删除"+names[chosen]+"中的所有物品？");return;}
    done=true;cm.deleteItem(chosen+1);cm.sendOk("清理完成。");cm.dispose();
}
