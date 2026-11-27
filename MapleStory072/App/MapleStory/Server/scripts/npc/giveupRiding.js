var closed=false;
function start(){cm.sendYesNo("要结束当前骑乘吗？");}
function action(mode,type,selection){
    if(closed)return;
    closed=true;
    if(mode==1){
        if(cm.getPlayer().getBuffedValue(Packages.client.MapleBuffStat.MONSTER_RIDING)!=null){
            cm.getPlayer().cancelEffectFromBuffStat(Packages.client.MapleBuffStat.MONSTER_RIDING);
            cm.sendOk("已结束当前骑乘。");
        }else cm.sendOk("当前没有骑乘状态。");
    }
    cm.dispose();
}
