var done=false,origin=-1,choices=null;
function close(){done=true;cm.dispose();}
function showMenu(text){choices=[];var match,pattern=/#L(-?\d+)#/g;while((match=pattern.exec(text))!=null)choices.push(Number(match[1]));cm.sendSimple(text);}
/* Mr. Do
	Mu Lung: Mu Lung (250000000)
	
	"Refining" NPC:
 * makes special medicine including quest item 4031554 - Peach Tree Herb Pouch if player has 4161030 - Book on Herbal Medicine
 * Accepts Mu Lung etc. items for Dr. Do's Marble [4001124]
 * Accepts Dr. Do's Marble + ores for 100% weapon scrolls (alternate code provided to make 50/50 100%/60% or 3-way equal chance of 10%/60%/100% instead)
 */

importPackage(net.sf.odinms.client);

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var qty;

function start() {
    done=false;origin=cm.getMapId();choices=null;
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(done)return;
    if(mode!=1||cm.getMapId()!=origin){close();return;}
    if(choices!=null){var allowed=choices;choices=null;if(!isFinite(selection)||Math.floor(selection)!=selection||allowed.indexOf(selection)<0){close();return;}}

    if (mode == 1)
        status++;
    else
        close();
    if (status == 0 && mode == 1) {
        var selStr = "我真是一位多才多艺的人,你想要做什么?#b"
        var options = new Array("配制药","制作符咒","捐献药材");
        for (var i = 0; i < options.length; i++){
            selStr += "\r\n#L" + i + "# " + options[i] + "#l";
        }
			
        showMenu(selStr);
    }
    else if (status == 1 && mode == 1) {
        selectedType = selection;
        if (selectedType == 0) { 
            if(!cm.haveItem(4161030)){ //does not have the required item
                cm.sendNext("如果想要配制药,你必须清楚合成比例,最危险的就是不懂比例就随意混合的人,我说的就是你.")
                close();
            }
            else { //make a medicine
                var itemSet = new Array(2022145,2022146,2022147,2022148,2022149,2022150,2050004,4031554);
                var selStr = "你想配制哪种药?#b";
                for (var i = 0; i < itemSet.length; i++){
                    selStr += "\r\n#L" + i + "# #i" + itemSet[i] + "##z" + itemSet[i] + "##l";
                }
                showMenu(selStr);
            }
        }
        else if (selectedType == 1){ //make a scroll
            var itemSet = new Array(2043000,2043100,2043200,2043300,2043700,2043800,2044000,2044100,2044200,2044300,2044400,2044500,2044600,2044700);
            var selStr = "你想制造哪种符咒?#b";
            for (var i = 0; i < itemSet.length; i++){
                selStr += "\r\n#L" + i + "# #z" + itemSet[i] + "##l";
            }
            showMenu(selStr);
        }
        else if (selectedType == 2){ //donate etc. item
            var itemSet = new Array(4000276,4000277,4000278,4000279,4000280,4000291,4000292,4000286,4000287,4000293,4000294,4000298,4000284,4000288,4000285,4000282,4000295,4000289,4000296,4000297);
            var selStr = "什么？你想把所有的药材捐献出去？真是好消息啊！捐献道具是以#b100个#k为单位。我会送你捐献者可以制造符咒的魔珠，你想捐献哪种药材？#b";
            for (var i = 0; i < itemSet.length; i++){
                selStr += "\r\n#L" + i + "# #z" + itemSet[i] + "##l";
            }
            showMenu(selStr);
        }
    }
    else if (status == 2 && mode == 1) {
        var prompt;
		
        selectedItem = selection;
        if (selectedType == 0){ //make medicine
            var itemSet = new Array(2022145,2022146,2022147,2022148,2022149,2022150,2050004,4031554);
            var matSet = new Array(2022116,2022116,new Array(4000281,4000293),new Array(4000276,2002005),new Array(4000288,4000292),4000295,new Array(2022131,2022132),new Array(4000286,4000287,4000293));
            var matQtySet = new Array(3,3,new Array(10,10),new Array(20,2),new Array(20,20),10,new Array(1,1),new Array(20,20,20));
            var costSet = new Array(0,0,910,950,1940,600,0,0);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
			
            prompt = "你想制造 #b#t" + item + "##k吗? 那需要..."
        }
        else if (selectedType == 1){ //make scroll
            var itemSet = new Array(2043000,2043100,2043200,2043300,2043700,2043800,2044000,2044100,2044200,2044300,2044400,2044500,2044600,2044700);
            var matSet = new Array(new Array(4001124,4010001),new Array(4001124,4010001),new Array(4001124,4010001),new Array(4001124,4020000),new Array(4001124,4020005),new Array(4001124,4020005),
            new Array(4001124,4010001),new Array(4001124,4010001),new Array(4001124,4010001),new Array(4001124,4010001),new Array(4001124,4010001),new Array(4001124,4010002),new Array(4001124,4010002),new Array(4001124,4020000));
            var matQtySet = new Array(new Array(1,20,25,3,5),new Array(1,20,25,5,3));
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = new Array(100,10); //always 100 marbles and 10 ores
            cost = 0; //always 0 cost
			
            prompt = "你想制造 #b#t" + item + "##k吗? 那需要..."
        }
        else if (selectedType == 2){ //donate item
            var matSet = new Array(4000276,4000277,4000278,4000279,4000280,4000291,4000292,4000286,4000287,4000293,4000294,4000298,4000284,4000288,4000285,4000282,4000295,4000289,4000296,4000297);
            item = 4001124; //always rewards Dr. Do's Marble
            mats = matSet[selectedItem];
            matQty = 100; //always 100 of the item
            cost = 0; //always 0 cost
			
            prompt = "你真的要把 #b100 #t" + mats + "##k捐献出去吗?"
        }

        if (selectedType != 2){
            if (mats instanceof Array){
                for(var i = 0; i < mats.length; i++){
                    prompt += "\r\n#i"+mats[i]+"# " + matQty[i] + " #t" + mats[i] + "#";
                }
            }
            else {
                prompt += "\r\n#i"+mats+"# " + matQty + " #t" + mats + "#";
            }
			
            if (cost > 0)
                prompt += "\r\n#i4031138# " + cost + " 金币";
        }
		
        cm.sendYesNo(prompt);
    }
    else if (status == 3 && mode == 1) {
        var complete = true;
        if (selectedType == 2)
            qty = getNumMarbles(mats);
        else
            qty = 1;
		
        done=true;
        if(typeof item!="number"||!isFinite(item)||Math.floor(item)!=item||typeof cost!="number"||!isFinite(cost)||cost<0||cost>2147483647||!isFinite(qty)||qty<1||Math.floor(qty)!=qty){close();return;}
        if(!Packages.server.MapleItemInformationProvider.getInstance().itemExistsInClient(item)||!cm.canHold(item,qty)){cm.sendOk("请确认当前客户端支持成品，并为成品留出足够的背包空间。");close();return;}
        if (cm.getMeso() < cost)
        {
            cm.sendOk("虽然没有集齐药材,不过还是要谢谢你.")
                complete=false;close();return;
        }
        else
        {
            if (mats instanceof Array) {
                for(var i = 0; complete && i < mats.length; i++)
                {
                    if (!cm.haveItem(mats[i], matQty[i]))
                    {
                        complete = false;
                    }					
                }
            }
            else {
                if (!cm.haveItem(mats, matQty))
                {
                    complete = false;
                }
            }
        }
			
        if (!complete) 
            cm.sendOk("你确定你有想捐献的药材吗?还是其他栏有没有空位子,确认一下...");
        else {
            if (!cm.canHold(item)) {
                cm.sendOk("你确定你有想捐献的药材吗?还是其他栏有没有空位子,确认一下....")
            }
            else {
                if (mats instanceof Array) {
                    for (var i = 0; i < mats.length; i++){
                        cm.gainItem(mats[i], -matQty[i]);
                    }
                }
                else
                    cm.gainItem(mats, -matQty);
		
                if (cost > 0)
                    cm.gainMeso(-cost);
                //Note: Make a Scroll only creates 100% scrolls. The following segments of code will change that result.
                //if (selectedType == 1) {
                /*// 50/50 chance of 100%/60%:
						item += Math.floor(Math.random() * 2);
                 */
                /*// 1/3 chance each of 100%/60%/10%:
						item += Math.floor(Math.random() * 3);
                 */
                //Do not go above +2 or you may end up creating GM scrolls!
                //}
                cm.gainItem(item, qty);
                cm.sendOk("好人有好报,再见我的朋友.");
            }
        }
        close();
    }
}

function getNumMarbles(donateID){
    var offset = donateID - 4000276; //acorn = 4000276 = lowest ID
    var numMarbles; 
	
    switch (offset){
        case 0: //acorn
            numMarbles = 6;
            break;
        case 1: //thimble
            numMarbles = 6;
            break;
        case 2: //needle pouch
            numMarbles = 6;
            break;
        case 3: //necki flower
            numMarbles = 7;
            break;
        case 4: //necki swimming cap
            numMarbles = 7;
            break;
        case 15: //broken piece of pot
            numMarbles = 8;
            break;
        case 16: //ginseng-boiled water
            numMarbles = 8;
            break;
        case 10: //straw doll
            numMarbles = 9;
            break;
        case 11: //wooden doll
            numMarbles = 9;
            break;
        case 17: //bellflower
            numMarbles = 10;
            break;
        case 18: //100-year-old bellflower
            numMarbles = 10;
            break;
        case 22: //old paper
            numMarbles = 11;
            break;
        case 8: //yellow belt
            numMarbles = 11;
            break;
        case 12: //broken deer horn
            numMarbles = 12;
            break;
        case 9: //red belt
            numMarbles = 12;
            break;
        case 6: //peach seed
            numMarbles = 13;
            break;
        case 19: //mr. alli's leather
            numMarbles = 13;
            break;
        case 13: //cat doll
            numMarbles = 14;
            break;
        case 20: //mark of the pirate
            numMarbles = 15;
            break;
        case 21: //captain's hat
            numMarbles = 15;
            break;
    }
	
    return numMarbles;
}