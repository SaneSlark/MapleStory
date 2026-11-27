// Existing custom rebirth rules; validate the selected menu and grant only a new equip.
var closed=false,stage=0,category=-1,entryMap=-1;
var offers={1:[30,1000,1032036,3000,1032034],2:[75,5000,1032036,5000,1032034],4:[15,500,1032038,500,1032038]};
function finish(){closed=true;cm.dispose();}
function start(){
    entryMap=cm.getMapId();
    cm.sendSimple("#e#h #，请选择：#n#d#k\r\n#L81##r低转生商店#l#k\r\n#L80##r高转生商店#l#k\r\n#L82##r角色资料#k");
}
function grantEquip(item,stat){
    if(!cm.canHold(item,1))return false;
    var equip=Packages.server.MapleItemInformationProvider.getInstance().getEquipById(item);
    if(equip==null)return false;
    equip.setStr(stat);equip.setDex(stat);equip.setInt(stat);equip.setLuk(stat);
    return Packages.server.MapleInventoryManipulator.addFromDrop(cm.getClient(),equip,true);
}
function action(mode,type,selection){
    if(closed)return;
    if(mode!=1||cm.getMapId()!=entryMap||selection!=Math.floor(selection)){finish();return;}
    if(stage==0){
        if([80,81,82].indexOf(selection)<0){finish();return;}
        if(selection==82){cm.sendOk("#e角色资料#n\r\n角色名称：#e#r#h ##k#n\r\n转生次数：#e#r"+cm.getPlayer().getReborns()+"#n#k\r\n等级：#e#r"+cm.getPlayer().getLevel()+"#n#k");finish();return;}
        category=selection;stage=1;
        if(category==80)cm.sendSimple("请选择购买项目。\r\n（#r#e请确认背包有足够空位！#k#e）#d#k\r\n#L0##b特殊职业#k——（#r250次转生和13337只鸡#k）#l#k\r\n#L1##b3K属性耳环#k——（#r30次转生和1000只鸡#k）#l#k\r\n#L2##b5K属性耳环#k——（#r75次转生和5000只鸡#k）#l#k\r\n\r\n#L3##r成为新手#l");
        else cm.sendSimple("请选择购买项目。\r\n（#r#e请确认背包有足够空位！#e#k）#d#k\r\n#L4##b500属性戒指#k——（#r15次转生和500只鸡#k）#l");
        return;
    }
    if(stage!=1||(category==80?[0,1,2,3].indexOf(selection)<0:selection!=4)){finish();return;}
    closed=true;
    if(selection==0){
        if(cm.getPlayer().getReborns()>249&&cm.haveItem(4000252,13337)){
            cm.gainItem(4000252,-13337);cm.changeJobById(900);cm.reloadChar();cm.sendOk("特殊管理员职业购买成功！");
        }else cm.sendOk("#r#e你的#v4000252#或转生次数不足！");
    }else if(selection==3){
        if(cm.getJobId()==900){cm.changeJobById(0);cm.sendOk("职业：新手（#r已获得#k）。");}
        else cm.sendOk("职业：普通管理员（#r尚未获得#k）。");
    }else{
        var offer=offers[selection];
        if(cm.getPlayer().getReborns()<offer[0]||cm.haveItem(offer[4])||!cm.haveItem(4000252,offer[1]))cm.sendOk("你的转生次数不足、已拥有受限物品，或兑换材料不足。");
        else if(!grantEquip(offer[2],offer[3]))cm.sendOk("装备栏空间不足或发放失败，未扣兑换材料。");
        else{cm.gainItem(4000252,-offer[1]);cm.reloadChar();cm.sendOk("购买完成，谢谢！");}
    }
    cm.dispose();
}
