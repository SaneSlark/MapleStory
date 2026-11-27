// User-authorized custom fishing exchange; not a native CMS072 recipe table.
var fish=[4031627, 4031628, 4031630, 4031631, 4031634, 4031635, 4031636, 4031637, 4031638, 4031640, 4031641, 4031643, 4031644, 4031645, 4031646, 4031647, 4031633, 4031639, 4031642, 4031648],catalog=[[2020007, 5, "foodCost", 3], [2022003, 5, "foodCost", 3], [2022008, 5, "foodCost", 3], [2022010, 5, "foodCost", 3], [2022013, 5, "foodCost", 3], [2022021, 5, "foodCost", 3], [2022022, 5, "foodCost", 3], [2022024, 5, "foodCost", 3], [2000005, 5, "potionCost", 5], [1002319, 1, "equipCost", 10], [1072238, 1, "equipCost", 10], [1072239, 1, "equipCost", 10], [1082192, 1, "equipCost", 10], [1072306, 1, "equipCost", 10], [1112907, 1, "rareCost", 20], [1142071, 1, "rareCost", 20], [3011000, 1, "chairCost", 30], [1432039, 1, "equipCost", 10], [1442018, 1, "equipCost", 10], [1442011, 1, "equipCost", 10], [1442026, 1, "equipCost", 10], [1442027, 1, "equipCost", 10], [1442028, 1, "equipCost", 10], [1442029, 1, "equipCost", 10]],stage=0,closed=false,picked=null,plan=null;
var settings=Packages.server.ServerSettings072.read("settings.ini");
function cost(row){var n=Number(settings.getProperty("fishing.exchange."+row[2],String(row[3])));return isFinite(n)&&n==Math.floor(n)&&n>=1&&n<=10000?n:row[3];}
function count(id){return cm.getPlayer().itemQuantity(id);}
function finish(text){closed=true;if(text)cm.sendOk(text);cm.dispose();}
function makePlan(amount){var result=[];for(var i=0;i<fish.length&&amount>0;i++){var n=Math.min(amount,count(fish[i]));if(n>0){result.push([fish[i],n]);amount-=n;}}return amount==0?result:null;}
function start(){
    var total=0;for(var i=0;i<fish.length;i++)total+=count(fish[i]);
    var text="鱼类兑换。20种鱼均可组合使用，每条计1条，优先使用非大当家任务鱼。\r\n当前共有 "+total+" 条鱼。请在确认页核对消耗的鱼。\r\n兑换物品为永久，数量及比例如下：\r\n";
    for(var i=0;i<catalog.length;i++)text+="#L"+i+"##v"+catalog[i][0]+"##t"+catalog[i][0]+"# ×"+catalog[i][1]+"："+cost(catalog[i])+"条鱼#l\r\n";
    cm.sendSimple(text);
}
function action(mode,type,selection){
    if(closed)return;
    if(mode!=1){finish();return;}
    if(stage==0){
        if(selection!=Math.floor(selection)||selection<0||selection>=catalog.length){finish();return;}
        picked=catalog[selection];plan=makePlan(cost(picked));
        if(plan==null){finish("鱼的数量不足。");return;}
        var text="将消耗以下鱼，兑换#v"+picked[0]+"##t"+picked[0]+"# ×"+picked[1]+"：\r\n";
        for(var i=0;i<plan.length;i++)text+="#v"+plan[i][0]+"##t"+plan[i][0]+"# ×"+plan[i][1]+"\r\n";
        stage=1;cm.sendYesNo(text);return;
    }
    if(stage!=1){finish();return;}closed=true;
    if(!cm.canHold(picked[0],picked[1])){cm.sendOk("请先为兑换物品留出背包空间，未扣鱼。");cm.dispose();return;}
    for(var i=0;i<plan.length;i++)if(count(plan[i][0])<plan[i][1]){cm.sendOk("鱼的数量发生变化，请重新选择，未扣鱼。");cm.dispose();return;}
    var removed=[],outputBefore=null;
    try{
        for(var i=0;i<plan.length;i++){
            var id=plan[i][0],before=count(id);cm.gainItem(id,-plan[i][1]);var n=before-count(id);
            if(n>0)removed.push([id,n]);if(n!=plan[i][1])throw "debit failed";
        }
        var before=count(picked[0]);outputBefore=before;cm.gainItem(picked[0],picked[1]);
        if(count(picked[0])-before!=picked[1])throw "reward failed";
        cm.sendOk("兑换成功。");
    }catch(e){if(outputBefore!=null){var extra=count(picked[0])-outputBefore;if(extra>0)cm.gainItem(picked[0],-extra);}for(var i=0;i<removed.length;i++)cm.gainItem(removed[i][0],removed[i][1]);cm.sendOk("兑换未完成，已退还本次扣除的鱼。");}
    cm.dispose();
}
