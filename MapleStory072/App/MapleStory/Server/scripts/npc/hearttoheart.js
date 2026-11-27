// CMS072 binding restored; missing shield rules completed with user approval.
var closed=false,stage=0,choice=-1,origin=-1;
var rewards=[1090000,1091000,1032013,1041127,1042018,1082162,1061138,1112903];
function finish(){closed=true;cm.dispose();}
function valid(){return cm.getNpc()==9310084 && cm.getMapId()==origin && cm.getMap().containsNPC(9310084) && cm.getPlayer().getLevel()>=10;}
function start(){
    origin=cm.getMapId();
    if(!valid()){cm.sendOk("情人节兑换需要角色达到10级，并在红线女身边办理。");finish();return;}
    var text="#e情人节红线女#n\r\n\r\n收集爱心，兑换你的情人节礼物。\r\n#b";
    text+="#L0#100个爱心 → 爱心盾牌（男）#l\r\n#L1#100个爱心 → 爱心盾牌（女）#l\r\n";
    text+="#L2#100个爱心 → 爱心耳环#l\r\n#L3#100个爱心 → 爱心背心#l\r\n";
    text+="#L4#100个爱心 → 爱心T恤#l\r\n#L5#100个爱心 → 爱心手套#l\r\n";
    text+="#L6#100个爱心 → 爱心俏皮短裙#l\r\n#L7#100个爱心 → 爱心环绕戒指#l\r\n";
    text+="#L8#10个爱心盾牌 → 爱心椅子#l\r\n#L9#材料及兑换说明#l\r\n#k";
    cm.sendSimple(text);
}
function action(mode,type,selection){
    if(closed)return;
    if(mode!=1 || !valid()){finish();return;}
    if(stage==0){
        if(selection==9){cm.sendOk("10级起，普通野外怪物会掉落爱心；村庄、副本、Boss及无经验怪物不参与。\r\n\r\n盾牌和新增爱心装备各需100个爱心，爱心盾牌合计10个可兑换椅子，只计装备背包内未过期的盾牌，不计已穿戴的盾牌。\r\n\r\n兑换物品有效期为7天。");finish();return;}
        if(selection<0 || selection>8 || selection!=Math.floor(selection)){finish();return;}
        choice=selection;stage=1;
        cm.sendYesNo(selection==8?"消耗背包内10个未过期爱心盾牌（已有两款编号可混合），兑换1把爱心椅子，确定吗？":"消耗100个爱心，兑换1件爱心礼物，确定吗？");return;
    }
    closed=true;
    var id=Packages.server.quest.HeartToHeart072.exchange(cm.getPlayer(),cm.getNpc(),origin,choice);
    cm.sendOk(id>0?"兑换成功：#i"+id+"# #t"+id+"#。":"暂时无法兑换，请检查材料、等级、背包空间和角色状态；本次未扣材料。");
    cm.dispose();
}
