//Gachaphon

importPackage(net.sf.odinms.client);



var status = 0;
var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*100);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*10+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var itemamount = Math.floor(Math.random()*5+2);


function start() {
	status = -1;
	action(1, 0, 0);
}


function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("哇.在活动中你的运气很好.祝你下次好运~!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext("我是高级快乐百宝箱.\r\n如果你有#e #b#v5220010##k#r一张高级快乐百宝券\r\n可以在我这里随机换取物品哦~!\r\n你可以挑战勇士之魂获得高级百宝券\r\n如果抽到独一无二的东东，可不要偷着乐哦！");
			}
		else if (status == 1) {
                        if (cm.haveItem(5220010)) {
			cm.sendYesNo("我看见你有换取道具了,你要使用它?");
			}
			else if (!cm.haveItem(5220010)) {
			cm.sendOk("你身上没有兑换道具，#b魂#k交代我不能帮你!.");
			cm.dispose();
			}
		}
		else if (status == 2) {
			cm.gainItem(5220010, -1);

			
			
			if ((itemchance >= 1) && (itemchance <= 71)) {
 cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得传说中的  豆豆票N张!!!");
			cm.gainItem(4110010, itemamount);
			}
			else if (itemchance == 72) {
 cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  天籁之音!");
			cm.gainItem(1702207 , 1);
			}
			else if (itemchance == 73) {
 cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得暗夜极光!");
			cm.gainItem(1702180 , 1);
			}
			else if (itemchance == 74) {
 cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得橡皮鸭子!");
			cm.gainItem(1702181 , 1);
			}
			else if (itemchance == 75) {
 cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  玄冰杖!");
			cm.gainItem(1702211 , 1);
			}
			else if (itemchance == 76) {
 cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得夕阳极光!");
			cm.gainItem(1702183  , 1);
			}
			else if (itemchance == 77) {
 cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  魔女的飞扫把!");
			cm.gainItem(3010043, 1);
			}
			else if (itemchance == 78) {
 cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  海豚相伴!");
			cm.gainItem(1702226 , 1);
			}
			else if (itemchance == 79) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得黑水灵附体!");
			cm.gainItem(1702186 , 1);
			}	
			else if (itemchance == 80) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得粉色极光!");
			cm.gainItem(1702188 , 1);
			}	
			else if (itemchance == 81) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  银狐!");
			cm.gainItem(1702237, 1);
			}
			else if (itemchance == 82) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得透明拳甲!");
			cm.gainItem(1702190 , 1);
			}
			else if (itemchance == 83) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得蓝色激光!");
			cm.gainItem(1702191 , 1);
			}	
			else if (itemchance == 84) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得毛巾鞭!");
			cm.gainItem(1702193 , 1);
			}
			else if (itemchance == 85) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得龙珠杖!");
			cm.gainItem(1702195 , 1);
			}
			else if (itemchance == 86) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得小鸟依人!");
			cm.gainItem(1702196 , 1);
			}
			else if (itemchance == 87) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得彩虹雨伞!");
			cm.gainItem(1702199, 1);
			}	
			else if (itemchance == 88) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得透明雨伞!");
			cm.gainItem(1702200 , 1);
			}
			else if (itemchance == 89) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得骷髅棒!");
			cm.gainItem(1702201 , 1);
			}
			else if (itemchance == 90) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得粉嘟嘟大象!");
			cm.gainItem(1702202 , 1);
			}
			else if (itemchance == 91) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得纸扇!");
			cm.gainItem(1702204 , 1);
			}
			else if (itemchance == 92) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得蜥蜴!");
			cm.gainItem(1702208, 1);
			}
			else if (itemchance == 93) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得驯鹿拐杖!");
			cm.gainItem(1702209 , 1);
			}
			else if (itemchance == 94) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得圣诞老爷爷");
			cm.gainItem(1702210, 1);
			}
			else if (itemchance == 95) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得龙杖!");
			cm.gainItem(1702212, 1);
			}
			else if (itemchance == 96) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得碎心枪!");
			cm.gainItem(1702213 , 1);
			}
			else if (itemchance == 97) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 求爱人!");
			cm.gainItem(5010005, 1);
			}
			else if (itemchance == 98) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 平衡器!");
			cm.gainItem(5010012, 1);
			}
			else if (itemchance == 99) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 烟火!");
			cm.gainItem(5010013, 1);
			}
			else if (itemchance == 100) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 韩国力量!");
                        cm.gainItem(5010020, 1);
			}
			else if (itemchance == 101) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 闪亮小星星!");
			cm.gainItem(5010022, 1);
			}
			else if (itemchance == 102) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 怦怦小红心!");
			cm.gainItem(5010023, 1);
			}
			else if (itemchance == 103) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 寒冰斗魂!");
			cm.gainItem(5010028, 1);
			}
			else if (itemchance == 104) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 红焰斗魂!");
			cm.gainItem(5010029, 1);
			}
			else if (itemchance == 105) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 雷电斗魂!");
			cm.gainItem(5010030, 1);
			}
			else if (itemchance == 106) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 我的男友!");
			cm.gainItem(5010031, 1);
			}
			else if (itemchance == 107) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 我的女友!");
			cm.gainItem(5010032, 1);
			}
			else if (itemchance == 108) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 枫之冠!");
			cm.gainItem(5010046, 1);
			}
			else if (itemchance == 109) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 枫之冠!");
			cm.gainItem(5010048, 1);
			}
			else if (itemchance == 110) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 枫之冠!");
			cm.gainItem(5010049, 1);
			}
			else if (itemchance == 111) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 迪斯科!");
			cm.gainItem(5010066, 1);
			}
			else if (itemchance == 112) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 五周年纪念章!");
			cm.gainItem(5010086, 1);
			}
			else if (itemchance == 113) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 夜光!");
			cm.gainItem(5010999, 1);
			}
			else if (itemchance == 114) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得牛牛贺岁长袍!");
			cm.gainItem(1052179 , 1);
			}
			else if (itemchance == 115) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得一枝梅夜行服!");
			cm.gainItem(1052183 , 1);
			}
			else if (itemchance == 116) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得炫酷装!");
			cm.gainItem(1052185 , 1);
			}
			else if (itemchance == 117) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得学生服!");
			cm.gainItem(1052201 , 1);
			}
			else if (itemchance == 118) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得蓝色学生服!");
			cm.gainItem(1052204 , 1);
			}
			else if (itemchance == 119) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 金鸡效果!");
			cm.gainItem(4290000, 1);
			}
			else if (itemchance == 120) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 过冬桌!");
			cm.gainItem(3010021, 1);
			}
			else if (itemchance == 121) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 骷髅椅!");
			cm.gainItem(3010027, 1);
			}
			else if (itemchance == 122) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 犯人专用!");
			cm.gainItem(3010028, 1);
			}
			else if (itemchance == 123) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 奥运蓝环!");
			cm.gainItem(3010029, 1);
			}
			else if (itemchance == 124) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 奥运黑环!");
			cm.gainItem(3010030, 1);
			}
			else if (itemchance == 125) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 奥运红环!");
			cm.gainItem(3010031, 1);
			}
			else if (itemchance == 126) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 奥运黄环!");
			cm.gainItem(3010032, 1);
			}
			else if (itemchance == 127) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 奥运绿环!");
			cm.gainItem(3010033, 1);
			}
			else if (itemchance == 128) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 飘香猪!");
			cm.gainItem(3010037, 1);
			}
			else if (itemchance == 129) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 透明座椅!");
			cm.gainItem(3010038, 1);
			}
			else if (itemchance == 130) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 寒冰椅!");
			cm.gainItem(3010045, 1);
			}
			else if (itemchance == 131) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 红龙的守护!");
			cm.gainItem(3010046, 1);
			}
			else if (itemchance == 132) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 蓝龙的守护!");
			cm.gainItem(3010047, 1);
			}
			else if (itemchance == 133) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 冰屋!");
			cm.gainItem(3010049, 1);
			}
			else if (itemchance == 134) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 公主椅!");
			cm.gainItem(3010050, 1);
			}
			else if (itemchance == 135) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 熊熊床!");
			cm.gainItem(3010054, 1);
			}
			else if (itemchance == 136) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 巧克力靠椅!");
			cm.gainItem(3010059, 1);
			}
			else if (itemchance == 137) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 高达的守护!");
			cm.gainItem(3010069, 1);
			}
			else if (itemchance == 138) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 爱心椅!");
			cm.gainItem(3012003, 1);
			}
			else if (itemchance == 139) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 爱心标!");
			cm.gainItem(1012137, 1);
			}
			else if (itemchance == 140) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 星之印!");
			cm.gainItem(1012137, 1);
			}
			else if (itemchance == 141) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 狐面!");
			cm.gainItem(1012159, 1);
			}
			else if (itemchance == 142) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 金属眼睛!");
			cm.gainItem(1022020, 1);
			}
			else if (itemchance == 143) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 糖果眼睛!");
			cm.gainItem(1022075, 1);
			}
			else if (itemchance == 144) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 迷糊眼睛!");
			cm.gainItem(1022077, 1);
			}
			else if (itemchance == 145) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 舞会假面!");
			cm.gainItem(1022078, 1);
			}
			else if (itemchance == 146) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 墨镜!");
			cm.gainItem(1022083, 1);
			}
			else if (itemchance == 147) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 无神面具!");
			cm.gainItem(1022084, 1);
			}
			else if (itemchance == 148) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 幻灭面具!");
			cm.gainItem(1022085, 1);
			}
			else if (itemchance == 149) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 虚无面具!");
			cm.gainItem(1022086, 1);
			}
			else if (itemchance == 150) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 青蛙面具!");
			cm.gainItem(1022087, 1);
			}
			else if (itemchance == 151) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 老花镜!");
			cm.gainItem(1022090, 1);
			}
			else if (itemchance == 152) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 雪花耳钉!");
			cm.gainItem(1032038, 1);
			}
			else if (itemchance == 153) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 蓝牙耳机!");
			cm.gainItem(1032063, 1);
			}
			else if (itemchance == 154) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 风铃耳环!");
			cm.gainItem(1032073, 1);
			}
			else if (itemchance == 155) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 新年面纱!"); 
			cm.gainItem(1000029, 1);
			}
			else if (itemchance == 156) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 牡丹发夹!");
			cm.gainItem(1000034, 1);
			}
			else if (itemchance == 157) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 幻境!");
			cm.gainItem(1702214 , 1);
			}
			else if (itemchance == 158) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 透心凉冰糕!");
			cm.gainItem(1702230, 1);
			}
			else if (itemchance == 159) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 新娘婚纱!");
			cm.gainItem(1001043, 1);
			}
			else if (itemchance == 160) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 肥嘟嘟大象!");
			cm.gainItem(1702231, 1);
			}
			else if (itemchance == 161) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 熊帽子!");
			cm.gainItem(1001010, 1);
			}
			else if (itemchance == 162) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 星纹打猎帽!");
			cm.gainItem(1002266, 1);
			}
			else if (itemchance == 163) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 摇滚帽!");
			cm.gainItem(1002299, 1);
			}
			else if (itemchance == 164) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 天使之环!");
			cm.gainItem(1002333, 1);
			}
                        else if (itemchance == 165) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 三节鞭!");
			cm.gainItem(1702215, 1);
			}
			else if (itemchance == 166) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 海星帽!");
			cm.gainItem(1002451, 1);
			}
			else if (itemchance == 167) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 绿水灵发夹!");
			cm.gainItem(1002477, 1);
			}
			else if (itemchance == 168) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 花蘑菇发夹!");
			cm.gainItem(1002478, 1);
			}
			else if (itemchance == 169) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 熊仔帽!");
			cm.gainItem(1002493, 1);
			}
			else if (itemchance == 170) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 安格拉毛线帽!");
			cm.gainItem(1002495, 1);
			}
			else if (itemchance == 171) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 光头佬!");
			cm.gainItem(1002498, 1);
			}
			else if (itemchance == 172) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 酷炫耳机!");
			cm.gainItem(1002542, 1);
			}
			else if (itemchance == 173) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 神笔!");
			cm.gainItem(1702233, 1);
			}
			else if (itemchance == 174) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 大蒜头!");
			cm.gainItem(1002543, 1);
			}
			else if (itemchance == 175) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 南瓜面具!");
			cm.gainItem(1002544, 1);
			}
			else if (itemchance == 176) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 金水灵帽!");
			cm.gainItem(1002545, 1);
			}
			else if (itemchance == 177) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 银水灵帽!");
			cm.gainItem(1002546, 1);
			}
			else if (itemchance == 178) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 蓝海豚!");
			cm.gainItem(1702238, 1);
			}
			else if (itemchance == 179) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 黑猫面具!");
			cm.gainItem(1002549, 1);
			}
			else if (itemchance == 180) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 豺狼帽!"); 
			cm.gainItem(1002558, 1);
			}
			else if (itemchance == 181) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 青苹果帽!");
			cm.gainItem(1002562, 1);
			}
			else if (itemchance == 182) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 骷髅黑色小圆帽!");
			cm.gainItem(1002566, 1);
			}
			else if (itemchance == 183) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 邪神像!");
			cm.gainItem(1002581, 1);
			}
			else if (itemchance == 184) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 心之杖!");
			cm.gainItem(1702216, 1);
			}
			else if (itemchance == 185) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 小狗帽!");
			cm.gainItem(1002596, 1);
			}
			else if (itemchance == 186) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 雪犬帽!");
			cm.gainItem(1002597, 1);
			}
			else if (itemchance == 187) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 丫丫救生圈!");
			cm.gainItem(1702217, 1);
			}
			else if (itemchance == 188) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 八戒帽!");
			cm.gainItem(1002607, 1);
			}
			else if (itemchance == 189) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 课本帽!");
			cm.gainItem(1002653, 1);
			}
			else if (itemchance == 190) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 二周年菇菇面具!");
			cm.gainItem(1002654, 1);
			}
			else if (itemchance == 191) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 小熊帽!");
			cm.gainItem(1002684, 1);
			}
			else if (itemchance == 192) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 草莓帽!");
			cm.gainItem(1002685, 1);
			}
			else if (itemchance == 193) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 哑铃!");
			cm.gainItem(1702218, 1);
			}
			else if (itemchance == 194) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 飞行伞!");
			cm.gainItem(1002726, 1);
			}
			else if (itemchance == 195) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 小星星发夹!");
			cm.gainItem(1002699, 1);
			}
			else if (itemchance == 196) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 万圣节南瓜帽子!");
			cm.gainItem(1472028, 1);
			}
			else if (itemchance == 197) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 小熊护耳!");
			cm.gainItem(1002722, 1);
			}
			else if (itemchance == 198) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 心帽!");
			cm.gainItem(1002729, 1);
			}
			else if (itemchance == 199) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 小象!");
			cm.gainItem(1702178, 1);
			}
			else if (itemchance == 200) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 心帽!");
			cm.gainItem(1002731, 1);
			}
			else if (itemchance == 201) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 微笑帽!");
			cm.gainItem(1002735, 1);
			}
			else if (itemchance == 202) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 蓝格帽!");
			cm.gainItem(1002736, 1);
			}
			else if (itemchance == 203) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 兔兔护耳!");
			cm.gainItem(1002738, 1);
			}
			else if (itemchance == 204) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 火鸡帽!");
			cm.gainItem(1002742, 1);
			}
			else if (itemchance == 205) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 星星耳机!");
			cm.gainItem(1002747, 1);
			}
			else if (itemchance == 206) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 打猎帽!");
			cm.gainItem(1002759, 1);
			}
			else if (itemchance == 207) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 地球帽!");
			cm.gainItem(1002760, 1);
			}
			else if (itemchance == 208) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 欧耶胜利发夹!");
			cm.gainItem(1002774, 1);
			}
			else if (itemchance == 209) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  可爱小绵羊帽子!");
			cm.gainItem(1002796, 1);
			}
			else if (itemchance == 210) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  小恶魔角!");
			cm.gainItem(1002820, 1);
			}
			else if (itemchance == 211) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  鸟窝!");
			cm.gainItem(1002822, 1);
			}
			else if (itemchance == 212) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  巫毒头套!");
			cm.gainItem(1002823, 1);
			}
			else if (itemchance == 213) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002825, 1);
			}
			else if (itemchance == 214) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002826, 1);
			}
			else if (itemchance == 215) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002827, 1);
			}
			else if (itemchance == 216) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002828, 1);
			}
			else if (itemchance == 217) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002829, 1);
			}
			else if (itemchance == 218) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002830, 1);
			}
			else if (itemchance == 219) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002831, 1);
			}
			else if (itemchance == 220) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002832, 1);
			}
			else if (itemchance == 221) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002833, 1);
			}
			else if (itemchance == 222) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002834, 1);
			}
			else if (itemchance == 223) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002835, 1);
			}
			else if (itemchance == 224) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002836, 1);
			}
			else if (itemchance == 225) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  赤鬼面具!");
			cm.gainItem(1002837, 1);
			}
			else if (itemchance == 226) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  小鸡快跑!");
			cm.gainItem(1002840, 1);
			}
			else if (itemchance == 227) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  猫耳!");
			cm.gainItem(1002842, 1);
			}
			else if (itemchance == 228) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  猫耳!");
			cm.gainItem(1002843, 1);
			}
			else if (itemchance == 229) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  猫耳!");
			cm.gainItem(1002844, 1);
			}
			else if (itemchance == 230) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  小兔兔遮阳帽!");
			cm.gainItem(1002845, 1);
			}
			else if (itemchance == 231) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  蓝天贝雷帽!");
			cm.gainItem(1002846, 1);
			}
			else if (itemchance == 232) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  青蛙头罩!");
			cm.gainItem(1002847, 1);
			}
			else if (itemchance == 233) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  章鱼烧!");
			cm.gainItem(1002848, 1);
			}
			else if (itemchance == 234) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  熊猫宝贝猫!");
			cm.gainItem(1002849, 1);
			}
			else if (itemchance == 235) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  圣诞红发夹!");
			cm.gainItem(1002876, 1);
			}
			else if (itemchance == 236) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  牛牛贺岁帽!");
			cm.gainItem(1002877, 1);
			}
			else if (itemchance == 237) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  乖娃娃绒线帽!");
			cm.gainItem(1002878, 1);
			}
			else if (itemchance == 238) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  遮风镜!");
			cm.gainItem(1002882, 1);
			}
			else if (itemchance == 239) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  拳击手套!");
			cm.gainItem(1702219, 1);
			}
			else if (itemchance == 240) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  丝带发箍!");
			cm.gainItem(1002888, 1);
			}
			else if (itemchance == 241) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  透明杖!");
			cm.gainItem(1702220, 1);
			}
			else if (itemchance == 242) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  丝带发箍!");
			cm.gainItem(1002890, 1);
			}
			else if (itemchance == 243) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  粉红缤缤!");
			cm.gainItem(1702220, 1);
			}
			else if (itemchance == 244) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  丝带发箍!");
			cm.gainItem(1002892, 1);
			}
			else if (itemchance == 245) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  礼炮罐!");
			cm.gainItem(1702222, 1);
			}
			else if (itemchance == 246) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  时尚粉色头巾!");
			cm.gainItem(1002903, 1);
			}
			else if (itemchance == 247) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  旅行格子帽!");
			cm.gainItem(1002907, 1);
			}
			else if (itemchance == 248) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  忍者帽!");
			cm.gainItem(1002912, 1);
			}
			else if (itemchance == 249) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  蝴蝶结!");
			cm.gainItem(1002913, 1);
			}
			else if (itemchance == 250) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  烟花棒!");
			cm.gainItem(1702223, 1);
			}
			else if (itemchance == 251) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  蓝色绅士帽!");
			cm.gainItem(1002921, 1);
			}
			else if (itemchance == 252) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  蓝格套头帽!");
			cm.gainItem(1002923, 1);
			}
			else if (itemchance == 253) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  红星帽!");
			cm.gainItem(1002928, 1);
			}
			else if (itemchance == 254) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  炫彩百搭帽!");
			cm.gainItem(1002929, 1);
			}
			else if (itemchance == 255) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  周年纪念帽!");
			cm.gainItem(1002930, 1);
			}
			else if (itemchance == 256) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  黑羊帽!");
			cm.gainItem(1002936, 1);
			}
			else if (itemchance == 257) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  透明武器!");
			cm.gainItem(1702224, 1);
			}
			else if (itemchance == 258) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  蜜蜂头盔!");
			cm.gainItem(1002944, 1);
			}
			else if (itemchance == 259) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  心电感应帽!");
			cm.gainItem(1002945, 1);
			}
			else if (itemchance == 260) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  巧克力香蕉!");
			cm.gainItem(1702228, 1);
			}
			else if (itemchance == 261) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  花发圈!");
			cm.gainItem(1002951, 1);
			}
			else if (itemchance == 262) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  花发圈!");
			cm.gainItem(1002952, 1);
			}
			else if (itemchance == 263) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  大花帽!");
			cm.gainItem(1002953, 1);
			}
			else if (itemchance == 264) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  品克缤帽子!");
			cm.gainItem(1002957, 1);
			}
			else if (itemchance == 265) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  暗黑皇冠!");
			cm.gainItem(1002960, 1);
			}
			else if (itemchance == 266) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  外星人发夹!");
			cm.gainItem(1002961, 1);
			}
			else if (itemchance == 267) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  牡丹发夹!");
			cm.gainItem(1002962, 1);
			}
			else if (itemchance == 268) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  糕饼帽子!");
			cm.gainItem(1002968, 1);
			}
			else if (itemchance == 269) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  小黄狗发圈!");
			cm.gainItem(1002969, 1);
			}
			else if (itemchance == 270) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  狐面!");
			cm.gainItem(1002973, 1);
			}
			else if (itemchance == 271) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  黑色飞狮帽!");
			cm.gainItem(1002974, 1);
			}
			else if (itemchance == 272) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  保姆发带!");
			cm.gainItem(1002976, 1);
			}
			else if (itemchance == 273) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  熊猫耳!");
			cm.gainItem(1002978, 1);
			}
			else if (itemchance == 274) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  冲锋者头盔!");
			cm.gainItem(1002979, 1);
			}
			else if (itemchance == 275) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  天使之环!");
			cm.gainItem(1002983, 1);
			}
			else if (itemchance == 276) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  嘉年华帽!");
			cm.gainItem(1002984, 1);
			}
			else if (itemchance == 277) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  蝴蝶夫人结!");
			cm.gainItem(1102060, 1);
			}
			else if (itemchance == 278) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  红旗披风!");
			cm.gainItem(1102062, 1);
			}
			else if (itemchance == 279) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  圣诞披风!");
			cm.gainItem(1102065, 1);
			}
			else if (itemchance == 280) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  邪魔披风!");
			cm.gainItem(1102066, 1);
			}
			else if (itemchance == 281) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  蓝色报童包!");
			cm.gainItem(1102070, 1);
			}
			else if (itemchance == 282) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  鸭绒被!");
			cm.gainItem(1102077, 1);
			}
			else if (itemchance == 283) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  红色报童包!");
			cm.gainItem(1102088, 1);
			}
			else if (itemchance == 284) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  黑色报童包!");
			cm.gainItem(1102089, 1);
			}
			else if (itemchance == 285) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  黄色报童包!");
			cm.gainItem(1102090, 1);
			}
			else if (itemchance == 289) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  心心气球!");
			cm.gainItem(1102093, 1);
			}
			else if (itemchance == 290) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  猴子尾巴!");
			cm.gainItem(1102094, 1);
			}
			else if (itemchance == 291) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  火箭炮!");
			cm.gainItem(1102107, 1);
			}
			else if (itemchance == 292) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  扁担水桶扁肩!");
			cm.gainItem(1102143, 1);
			}
			else if (itemchance == 293) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  黑骷髅海盗旗!");
			cm.gainItem(1102152, 1);
			}
			else if (itemchance == 294) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  死神镰刀!");
			cm.gainItem(1702229, 1);
			}
			else if (itemchance == 295) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  蓝色天使背囊!");
			cm.gainItem(1102169, 1);
			}
			else if (itemchance == 296) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  3周年披风!");
			cm.gainItem(1102171, 1);
			}
			else if (itemchance == 297) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  可爱小绵羊披风!");
			cm.gainItem(1102175, 1);
			}
			else if (itemchance == 298) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  天使之翼!");
			cm.gainItem(1102184, 1);
			}
			else if (itemchance == 299) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  乖猫猫双肩包!");
			cm.gainItem(1102186, 1);
			}
			else if (itemchance == 300) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  狐狸尾巴!");
			cm.gainItem(1102187, 1);
			}
			else if (itemchance == 301) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  狐狸尾巴!");
			cm.gainItem(1102188, 1);
			}
			else if (itemchance == 302) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  玲珑彩灯!");
			cm.gainItem(1102199, 1);
			}
			else if (itemchance == 303) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  异界披风!");
			cm.gainItem(1102202, 1);
			}
			else if (itemchance == 304) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  火箭炮!");
			cm.gainItem(1102203, 1);
			}
			else if (itemchance == 305) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  玫瑰角!");
			cm.gainItem(1102204, 1);
			}
			else if (itemchance == 306) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  蜜蜂屁股!");
			cm.gainItem(1102210, 1);
			}
			else if (itemchance == 307) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  残翼!");
			cm.gainItem(1102211, 1);
			}
			else if (itemchance == 308) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  小强披风!");
			cm.gainItem(1102212, 1);
			}
			else if (itemchance == 309) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  品克缤的小尾巴!");
			cm.gainItem(1102213, 1);
			}
			else if (itemchance == 310) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  品克缤气球!");
			cm.gainItem(1102214, 1);
			}
			else if (itemchance == 311) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  气球串!");
			cm.gainItem(1102215, 1);
			}
			else if (itemchance == 312) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  狼尾巴!");
			cm.gainItem(1102216, 1);
			}
			else if (itemchance == 313) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  妖狐尾!");
			cm.gainItem(1102217, 1);
			}
			else if (itemchance == 314) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版   仙女飘飘!");
			cm.gainItem(1102218, 1);
			}
			else if (itemchance == 315) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  4周年气球串!");
			cm.gainItem(1102219, 1);
			}
			else if (itemchance == 316) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  灰巾!");
			cm.gainItem(1102222, 1);
			}
			else if (itemchance == 317) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星之尾!");
			cm.gainItem(1102223, 1);
			}
			else if (itemchance == 318) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  水洗个性牛仔裤!");
			cm.gainItem(1062076, 1);
			}
			else if (itemchance == 319) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  海滩聊天戒指!");
			cm.gainItem(1112803, 1);
			}
			else if (itemchance == 320) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  巧克力聊天戒指!");
			cm.gainItem(1112806, 1);
			}
			else if (itemchance == 321) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  粉红糖果聊天戒指!");
			cm.gainItem(1112807, 1);
			}
			else if (itemchance == 322) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  超大红心环绕戒指!");
			cm.gainItem(1112905, 1);
			}
			else if (itemchance == 323) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  心心祝福戒指!");
			cm.gainItem(1112906, 1);
			}
			else if (itemchance == 324) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  小鱼戒指!");
			cm.gainItem(1112907, 1);
			}
			else if (itemchance == 325) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  饼干!");
			cm.gainItem(1092032, 1);
			}
			else if (itemchance == 326) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  邪神蚩尤战盾!");
			cm.gainItem(1092034, 1);
			}
			else if (itemchance == 327) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  可乐战盾!");
			cm.gainItem(1092035, 1);
			}
			else if (itemchance == 328) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  鱼盾!");
			cm.gainItem(1092043, 1);
			}
			else if (itemchance == 329) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  无敌石板盾牌!");
			cm.gainItem(1092053, 1);
			}
			else if (itemchance == 330) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  透明盾!");
			cm.gainItem(1092064, 1);
			}
			else if (itemchance == 331) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  禁止吸烟盾!");
			cm.gainItem(1092063, 1);
			}
			else if (itemchance == 332) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  日式木屐!");
			cm.gainItem(1070002, 1);
			}
			else if (itemchance == 333) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  狗狗拖!");
			cm.gainItem(1072257 , 1);
			}
			else if (itemchance == 334) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  小鸡拖!");
			cm.gainItem(1072259 , 1);
			}
			else if (itemchance == 335) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  企鹅拖!");
			cm.gainItem(1072260 , 1);
			}
			else if (itemchance == 336) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  红色喷气鞋!");
			cm.gainItem(1072276, 1);
			}
			else if (itemchance == 337) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  圣诞鹿拖鞋!");
			cm.gainItem(1072278 , 1);
			}
			else if (itemchance == 338) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  夏其尔的鞋!");
			cm.gainItem(1072281 , 1);
			}
			else if (itemchance == 339) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  比耶莫特的鞋!");
			cm.gainItem(1072282 , 1);
			}
			else if (itemchance == 340) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  亚努斯的鞋!");
			cm.gainItem(1072283, 1);
			}
			else if (itemchance == 341) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  溜冰鞋!");
			cm.gainItem(1072322 , 1);
			}
			else if (itemchance == 342) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星星拖鞋!");
			cm.gainItem(1072323 , 1);
			}
			else if (itemchance == 343) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  猪猪拖!");
			cm.gainItem(1072324 , 1);
			}
			else if (itemchance == 344) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  黄水灵拖鞋!");
			cm.gainItem(1072326 , 1);
			}
			else if (itemchance == 345) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  足球钉鞋!");
			cm.gainItem(1072336 , 1);
			}
			else if (itemchance == 346) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  喜洋洋拖鞋!");
			cm.gainItem(1072337 , 1);
			}
			else if (itemchance == 347) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  粉嘟嘟大象拖!");
			cm.gainItem(1072348, 1);
			}
			else if (itemchance == 348) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  闪光鞋!");
			cm.gainItem(1072384, 1);
			}
			else if (itemchance == 349) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  白凉鞋!");
			cm.gainItem(1072385, 1);
			}
			else if (itemchance == 350) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  黑色木托!");
			cm.gainItem(1072386 , 1);
			}
			else if (itemchance == 351) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  凯蒂鞋!");
			cm.gainItem(1072407, 1);
			}
			else if (itemchance == 352) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  闪光大剑!");
			cm.gainItem(1702072, 1);
			}
			else if (itemchance == 353) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  红色铅笔!");
			cm.gainItem(1702087, 1);
			}
			else if (itemchance == 354) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其绝版  同在红伞下!");
			cm.gainItem(3010044, 1);
			}
			else if (itemchance == 355) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  绿蛙!");
			cm.gainItem(1702095, 1);
			}
			else if (itemchance == 356) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  玉兔手套!");
			cm.gainItem(1082169, 1);
			}
			else if (itemchance == 357) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  电子表!");
			cm.gainItem(1082170, 1);
			}
			else if (itemchance == 358) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  电子表!");
			cm.gainItem(1082171, 1);
			}
			else if (itemchance == 359) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  点点手套!");
			cm.gainItem(1082172, 1);
			}
			else if (itemchance == 360) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  绝缘手套!");
			cm.gainItem(1082173, 1);
			}
			else if (itemchance == 361) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  熔岩掌套!");
			cm.gainItem(1082224, 1);
			}
			else if (itemchance == 362) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  冰凌掌套!");
			cm.gainItem(1082225, 1);
			}
			else if (itemchance == 363) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  黑骷髅手套!");
			cm.gainItem(1082227, 1);
			}
			else if (itemchance == 364) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  飘飘蝴蝶结!");
			cm.gainItem(1082229, 1);
			}
			else if (itemchance == 365) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  经典名品手套!");
			cm.gainItem(1082231, 1);
			}
			else if (itemchance == 366) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  牛牛猪手套!");
			cm.gainItem(1082233, 1);
			}
			else if (itemchance == 367) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  可爱小绵羊手套!");
			cm.gainItem(1082247, 1);
			}
			else if (itemchance == 368) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  荧光亮丽手镯!");
			cm.gainItem(1082249, 1);
			}
			else if (itemchance == 369) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  喵喵手套!");
			cm.gainItem(1082250, 1);
			}
			else if (itemchance == 370) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  朋克手套!");
			cm.gainItem(1082251, 1);
			}
			else if (itemchance == 371) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  水洗个性牛仔裤!");
			cm.gainItem(1050065, 1);
			}
			else if (itemchance == 372) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  圣诞树!");
			cm.gainItem(3010048 , 1);
			}
			else if (itemchance == 373) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  月亮花朵发夹 !");
			cm.gainItem(1002812 , 1);
			}
			else if (itemchance == 374) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  圣诞钟!");
			cm.gainItem(1702100 , 1);
			}
			else if (itemchance == 375) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  雪片围脖!");
			cm.gainItem(1102196 , 1);
			}
			else if (itemchance == 376) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  中国结（红）!");
			cm.gainItem(1702116, 1);
			}
			else if (itemchance == 377) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  中国结（蓝）!");
			cm.gainItem(1702117, 1);
			}
			else if (itemchance == 378) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  亚努斯之剑 !");
			cm.gainItem(1702118, 1);
			}
			else if (itemchance == 379) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  夏其尔之剑!");
			cm.gainItem(1702119, 1);
			}
			else if (itemchance == 380) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  比耶莫特之剑!");
			cm.gainItem(1702120 , 1);
			}
			else if (itemchance == 381) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  倒霉效果!");
			cm.gainItem(4290001 , 1);
			}
			else if (itemchance == 382) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  礼物心心棒!");
			cm.gainItem(1702125 , 1);
			}
			else if (itemchance == 383) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  报喜鸟披风!");
			cm.gainItem(1702133 , 1);
			}
			else if (itemchance == 384) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  复仇拳!");
			cm.gainItem(1102197 , 1);
			}
			else if (itemchance == 385) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  雪之花!");
			cm.gainItem(1702136 , 1);
			}
			else if (itemchance == 386) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  丫丫救生圈!");
			cm.gainItem(1702137 , 1);
			}
			else if (itemchance == 387) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  金华火腿!");
			cm.gainItem(1702138 , 1);
			}
			else if (itemchance == 388) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  钩子拳套!");
			cm.gainItem(1702139 , 1);
			}
			else if (itemchance == 389) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  童年的秋千!");
			cm.gainItem(3010036 , 1);
			}
			else if (itemchance == 390) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  枫之光盾!");
			cm.gainItem(1092062 , 1);
			}
			else if (itemchance == 391) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  囧水灵!");
			cm.gainItem(1102208 , 1);
			}
			else if (itemchance == 392) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  闪光手指!");
			cm.gainItem(1702167 , 1);
			}
			else if (itemchance == 393) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  闪亮圣诞树!");
			cm.gainItem(1702168 , 1);
			}
			else if (itemchance == 394) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的 蓝心环绕戒指!");
			cm.gainItem(1112902 , 1);
			}
			else if (itemchance == 395) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  电击拳甲!");
			cm.gainItem(1702170 , 1);
			}
			else if (itemchance == 396) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  限量版沙滩拖鞋!");
			cm.gainItem(1072360 , 1);
			}
			else if (itemchance == 397) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  炎冰极光!");
			cm.gainItem(1702187 , 1);
			}
			else if (itemchance == 398) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  星之小熊!");
			cm.gainItem(1702203 , 1);
			}
			else if (itemchance == 399) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  杀虫剂!");
			cm.gainItem(1702177, 1);
			}
			else if (itemchance >= 400) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得传说中的  豆豆票N张!!!");
			cm.gainItem(4110010, itemamount);
			}





                        cm.dispose();
		}
	}
}
