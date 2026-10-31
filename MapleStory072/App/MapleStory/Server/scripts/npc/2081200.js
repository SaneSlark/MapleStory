/* [NPC]
	Job Advancer
	Made by Tryst (wasdwasd) of Odinms Forums.
	Please don't release this anywhere else.
*/

importPackage(net.sf.odinms.client);

var status = 0;
var advDone=false,advOrigin=-1,advJob=-1;
var advAllowed=[211, 221, 231];
var job;

function start() {
    advDone=false;advOrigin=cm.getMapId();advJob=cm.getJob();
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if(advDone)return;
    if(mode!=1 || cm.getMapId()!=advOrigin || cm.getJob()!=advJob || advAllowed.indexOf(advJob)<0 || cm.getLevel()<120){advDone=true;cm.dispose();return;}
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
			 if ((cm.getJob() == net.sf.odinms.client.MapleJob.FP_MAGE.getId())) {
				status = 117;
				cm.sendYesNo("恭喜你!达到这样一个级别你真不容易啊. 你已经做好第四次转职的准备了吗?");
			} else if ((cm.getJob() == net.sf.odinms.client.MapleJob.IL_MAGE.getId())) {
				status = 120;
				cm.sendYesNo("恭喜你!达到这样一个级别你真不容易啊. 你已经做好第四次转职的准备了吗?");
			} else if ((cm.getJob() == net.sf.odinms.client.MapleJob.PRIEST.getId())) {
				status = 123;
				cm.sendYesNo("恭喜你!达到这样一个级别你真不容易啊. 你已经做好第四次转职的准备了吗?");
			}		
		} else if (status == 118) {
            advDone=true;cm.changeJob(MapleJob.FP_ARCHMAGE.getId());
            cm.teachSkill(2121001,0,10);//Maple Warrior
            cm.teachSkill(2121005,0,10);//Big Bang
            cm.teachSkill(2121002,0,10);//Mana Reflection
            cm.teachSkill(2121007,0,10);//Fire Demon
            cm.teachSkill(2121006,0,10);//Elquines
            cm.sendOk("恩,这些就是我教给你最高境界的技能!希望对你今后的修炼有很大的帮助.我已经把我所有的技能都传授给你了,希望你在今后的道路上能够超越我,日益强大起来.那么祝你好运!");
            cm.dispose();
        }
        else if(status == 121) 
        {
            advDone=true;cm.changeJob(MapleJob.IL_ARCHMAGE.getId());
            cm.teachSkill(2221001,0,10);//Maple Warrior
            cm.teachSkill(2221006,0,10);//Mana Reflection
            cm.teachSkill(2221005,0,10);//Ice Demon
            cm.teachSkill(2221002,0,10);//Ifrit
            cm.teachSkill(2221007,0,10);
            cm.sendOk("恩,这些就是我教给你最高境界的技能!希望对你今后的修炼有很大的帮助.我已经把我所有的技能都传授给你了,希望你在今后的道路上能够超越我,日益强大起来.那么祝你好运!");
            cm.dispose();
        }
        else if (status == 124) 
        {
            advDone=true;cm.changeJob(MapleJob.BISHOP.getId());
            cm.teachSkill(2321001,0,10);//Big Bang
            cm.teachSkill(2321008,0,10);//Mana Reflection
            cm.teachSkill(2321005,0,10);//Bahamut
            cm.teachSkill(2321002,0,10);//Holy Shield
            cm.teachSkill(2321006,0,10);//Ressurection
            cm.sendOk("恩,这些就是我教给你最高境界的技能!希望对你今后的修炼有很大的帮助.我已经把我所有的技能都传授给你了,希望你在今后的道路上能够超越我,日益强大起来.那么祝你好运!");
            cm.dispose();
		}
	}
}