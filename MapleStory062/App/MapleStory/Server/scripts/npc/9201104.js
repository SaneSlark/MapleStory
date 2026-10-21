/*   By:稻、香
	20 fame NPC, default price 200mil.
	By V1ral.
	Credits to donkeydan on the setFame and getFame handlers.
	Add those before using this NPC, or it won't work correctly.
*/

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || status == 2) {
		cm.dispose();
	} else {
		if (status == 0 && mode == 0) {
			cm.sendOk("好的,什么时侯有勇气再来找我,随时迎接你的挑战!");
			status = 2;
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendYesNo("#e #b#h ##k 想尝试下失败的滋味么?那就来挑战#r勇士之魂#k,\r\n这里不是一般人能来的~当然,最后一关的奖励将是GM送的#r绝世装备#k!");
		        }else if (status == 1 ) {
		   if(cm.getChar().getLevel() < 50){
                                      cm.sendOk("抱歉,你没有#r50#k级不能进去挑战~~希望你懂得游戏规则~");
                        cm.dispose();
                               }else{ 
                        cm.sendOk("#b准备进去咯#k, 你还可以退出,考虑清楚了么??勇士保重!!"); 
                        } 
                        }else if (status == 2) {                      
                        cm.warp(103000800, 0);
                        cm. sendOk("你已经来到了#r勇士之魂#k战场了~祝你好运~!!"); 
                         cm.serverNotice("『勇士之魂』：哇."+ cm.getChar().getName() +" 玩家 已经顺利进入了勇士之魂挑战现场~大家期待他能出好成绩吧!");
                        cm.dispose(); 
                        }            
           
        } 
} 