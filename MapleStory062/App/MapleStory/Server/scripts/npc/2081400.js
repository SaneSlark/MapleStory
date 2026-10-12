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
			 if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT)) {
        	        	status = 105;
       	         		cm.sendYesNo("恭喜你达到120级! 那么现在你已经做好了转职成为隐士的准备了吗?");
       	     		} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT)) {
       	         		status = 108;
       	         		cm.sendYesNo("恭喜你达到120级! 那么现在你已经做好了转职成为侠盗的准备了吗??");
       	     		}		
        } else if (status == 106) {
            cm.changeJob(MapleJob.NIGHTLORD);
            cm.teachSkill(4120002,0,10);//Maple Warrior
            cm.teachSkill(4121004,0,10);//Ninja Ambush
            cm.teachSkill(4121008,0,10);//Venomous Star
            cm.teachSkill(4121006,0,10);//Shadow Claw
            cm.teachSkill(4120005,0,10);//Ninja Storm
            cm.sendOk("恩,这些就是我教给你最高境界的技能!希望对你今后的修炼有很大的帮助.我已经把我所有的技能都传授给你了,希望你在今后的道路上能够超越我,日益强大起来.那么祝你好运!");
	    cm.dispose();
        }
        else if (status == 109)
	{
            cm.changeJob(MapleJob.SHADOWER);
            cm.teachSkill(4221001,0,10);
            cm.teachSkill(4220002,0,10);//Assassinate
            cm.teachSkill(4221004,0,10);//Ninja Ambush
            cm.teachSkill(4221007,0,10);//Venomous Stab
            cm.teachSkill(4220005,0,10);//SmokeScreen
            cm.sendOk("恩,这些就是我教给你最高境界的技能!希望对你今后的修炼有很大的帮助.我已经把我所有的技能都传授给你了,希望你在今后的道路上能够超越我,日益强大起来.那么祝你好运!");
	    cm.dispose();
		}
	}
}