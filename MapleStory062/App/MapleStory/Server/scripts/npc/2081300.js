/* [NPC]
	Job Advancer
	Made by Tryst (wasdwasd) of Odinms Forums.
	Please don't release this anywhere else.
*/

importPackage(net.sf.odinms.client);

var status = 0;
var job;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getLevel() < 120) {
				cm.sendNext("很抱歉,你的等级目前没有达到120级,请您到达转职所要求的等级再来找我吧,到那个时候我一定会很乐意帮助你的.");
				status = 98;
			} else if (cm.getLevel() >=120) {
				status = 101;
				cm.sendNext("你好啊,你是来找我学习最高境界技能的吧?");
			}
		} else if (status == 102) {
			 if (cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER)) {
				status = 111;
				cm.sendYesNo("恭喜你!达到这样一个级别你真不容易啊. 你已经做好第四次转职的准备了吗?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER)) {
				status = 114;
				cm.sendYesNo("恭喜你!达到这样一个级别你真不容易啊. 你已经做好第四次转职的准备了吗?");
			}		
		} else if (status == 112) {
            cm.changeJob(MapleJob.BOWMASTER);
            cm.teachSkill(3120005,0,10);//Maple Warrior
            cm.teachSkill(3121008,0,10);//Sharp Eyes
            cm.teachSkill(3121007,0,10);//Dragon's Breath
            cm.teachSkill(3121006,0,10);//Hurricane
            cm.teachSkill(3121002,0,10);//Bow Expert
            cm.teachSkill(3121004,0,10);//Pheonix
            cm.sendOk("恩,这些就是我教给你最高境界的技能!希望对你今后的修炼有很大的帮助.我已经把我所有的技能都传授给你了,希望你在今后的道路上能够超越我,日益强大起来.那么祝你好运!");
            cm.dispose();
        } 
        else if (status == 115) 
        {
            cm.changeJob(MapleJob.CROSSBOWMASTER);
            cm.teachSkill(3221006,0,10);//Maple Warrior
            cm.teachSkill(3220004,0,10);//Piercing Arrow
            cm.teachSkill(3221005,0,10);       
            cm.teachSkill(3221001,0,10);//Frostprey
            cm.teachSkill(3221002,0,10);//Blind
            cm.teachSkill(3221007,0,10);  //Hero's Will
            cm.sendOk("恩,这些就是我教给你最高境界的技能!希望对你今后的修炼有很大的帮助.我已经把我所有的技能都传授给你了,希望你在今后的道路上能够超越我,日益强大起来.那么祝你好运!");
            cm.dispose();
		}
	}
}