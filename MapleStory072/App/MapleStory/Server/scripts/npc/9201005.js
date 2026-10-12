/**
	Nicole
-- By ---------------------------------------------------------------------------------------------
	Angel (get31720 ragezone)
-- Extra Info -------------------------------------------------------------------------------------
	Fixed by  [happydud3] & [XotiCraze]
---------------------------------------------------------------------------------------------------
**/

var status;
var x;
var hasEngageRing = false;

function start() {  
    status = -1;  
    action(1, 0, 0);  
}  

function action(mode, type, selection) {  
     if (mode == -1 || mode == 0) {
        cm.sendOk("那再见了"); 
            cm.dispose();
			return;
    } else if (mode == 1) {
            status++;
        } else {
            status--;
        }
		
		var item = new Array(4031360, 4031358, 4031362, 4031364);
		for (x = 0; x < item.length && !hasEngageRing; x++) {
			if (cm.haveItem(item[x], 1))
				hasEngageRing = true;
		}
		
    if (status == 0) {
		var text = "我来这里就是为了帮助你的婚礼 !";
		var choice = new Array("我要如何准备婚礼?", "我有一个订婚戒指，需要请为我的客人!", "我的新娘/新郎和我想开始的婚礼!", "我的亲戚朋友们和想去看我的婚礼!");
		for (x = 0; x < choice.length; x++) {
			text += "\r\n#L" + x + "##b" + choice[x] + "#l";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		switch(selection) {
			case 0:
				cm.sendOk("发呆使订婚戒指。订婚戒指的需要，使整个婚礼从未失去它。邀请您的客人到婚礼你需要让我看看你的订婚戒指，然后我给你15枚枫叶。他们需要每个一进入婚礼。享受!");
				cm.dispose();
				break;
			case 1:
				if (cm.haveItem(4000313)) {
					cm.sendOk("您已经拥有一个枫叶金币。去给他们，以你的客人，然后再进入婚礼.");
					cm.dispose();
                } else if (hasEngageRing) {
					cm.sendOk("您已经收到15枚枫叶.");
					cm.gainItem(4000313,15);
					cm.dispose();
				} else {
					cm.sendOk("您还没有订婚戒指!请去商场买吧!.");
					cm.dispose();
				}
				break;
			case 2:
				if (hasEngageRing) {
					cm.warp(680000210, 2);
					cm.sendOk("交谈大祭司约翰当您准备好要结婚");
					cm.dispose();
				} else {
					cm.sendOk("您还没有订婚戒指!请去商场买吧!.");
					cm.dispose();
				}
				break;
			case 3:
				if (cm.haveItem(4000313)) {
					cm.warp(680000210);
					cm.sendOk("享受婚礼。不要放弃你的枫叶金币，或者您将无法完成整个婚礼.");
					cm.dispose();
				} else {
					cm.sendOk("您没有枫叶金币!");
					cm.dispose();
				}
				break;
		}
	}
}