// CMS: original catalog and prices; category -> item type as in v062.
var groups = [["法师装备", 720022, 720025], ["飞侠装备", 720030, 720036], ["战士装备", 720012, 720021], ["弓手装备", 720026, 720029], ["海盗装备", 720037, 720037], ["通用装备", 720000, 720011], ["消耗用品", 720038, 720051], ["椅子装饰", 720052, 720052], ["其它用品", 720053, 720053], ["现金与宠物", 720054, 720057]];
var typeNames = {"100": "帽子", "101": "脸部配饰", "102": "眼部配饰", "103": "耳环", "104": "上衣", "105": "套服", "106": "裤子", "107": "鞋子", "108": "手套", "109": "盾牌", "110": "披风", "111": "戒指", "112": "项链", "130": "单手剑", "131": "单手斧", "132": "单手钝器", "133": "短刀", "137": "短杖", "138": "长杖", "140": "双手剑", "141": "双手斧", "142": "双手钝器", "143": "枪", "144": "矛", "145": "弓", "146": "弩", "147": "拳套", "148": "指虎", "149": "短枪", "180": "宠物装备", "181": "宠物饰品", "190": "坐骑", "191": "鞍具", "200": "药水", "201": "食品", "202": "料理", "203": "回城卷轴", "204": "卷轴", "205": "状态恢复药", "206": "弓箭、弩箭", "207": "飞镖", "210": "召唤道具", "212": "宠物食品", "221": "变身道具", "226": "疲劳恢复药", "233": "子弹", "234": "祝福卷轴", "301": "椅子", "400": "材料", "403": "任务物品", "416": "宠物指令书", "500": "宠物", "501": "特效道具", "502": "投掷道具", "507": "喇叭", "512": "天气效果", "516": "表情", "517": "宠物命名", "522": "奖券、门票", "524": "宠物食品", "539": "情景喇叭"};
var opened=false,category=-1,itemTypes=[];
function start(){
    opened=false;category=-1;itemTypes=[];
    var text="#e百货商店#n：全部使用金币购买。\r\n请选择分类：\r\n";
    for(var i=0;i<groups.length;i++)text+="#L"+(1000+i)+"##b"+groups[i][0]+"#l#k\r\n";
    cm.sendSimple(text);
}
function action(mode,type,selection){
    if(opened)return;
    if(mode!=1){opened=true;cm.dispose();return;}
    if(category<0){
        if(selection<1000||selection>=1000+groups.length){opened=true;cm.dispose();return;}
        category=selection-1000;
        var types=cm.getDepartmentItemTypes(groups[category][1],groups[category][2]);
        var text="#e"+groups[category][0]+"#n：请选择道具类型。\r\n";
        for(var i=0;i<types.size();i++){
            var itemType=Number(types.get(i));itemTypes.push(itemType);
            text+="#L"+i+"##b"+(typeNames[itemType]||"其他道具")+"#l#k\r\n";
        }
        if(itemTypes.length==0){opened=true;cm.sendOk("该分类暂时没有可购买的商品。");cm.dispose();return;}
        cm.sendSimple(text);return;
    }
    opened=true;
    if(selection>=0&&selection<itemTypes.length)cm.openDepartmentShop(groups[category][1],groups[category][2],itemTypes[selection]);
    cm.dispose();
}
