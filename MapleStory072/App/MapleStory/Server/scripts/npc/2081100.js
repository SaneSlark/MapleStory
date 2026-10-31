/* [NPC]
	Job Advancer
	Made by Tryst (wasdwasd) of Odinms Forums.
	Please don't release this anywhere else.
*/

importPackage(net.sf.odinms.client);

var status = 0;
var advDone=false,advOrigin=-1,advJob=-1;
var advAllowed=[111, 121, 131];
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
			 if ((cm.getJob() == net.sf.odinms.client.MapleJob.CRUSADER.getId())) {
				status = 126;
				cm.sendYesNo("恭喜你!达到这样一个级别你真不容易啊. 你已经做好第四次转职的准备了吗?");
			} else if ((cm.getJob() == net.sf.odinms.client.MapleJob.WHITEKNIGHT.getId())) {
				status = 129;
				cm.sendYesNo("恭喜你!达到这样一个级别你真不容易啊. 你已经做好第四次转职的准备了吗?");
			} else if ((cm.getJob() == net.sf.odinms.client.MapleJob.DRAGONKNIGHT.getId())) {
				status = 132;
				cm.sendYesNo("恭喜你!达到这样一个级别你真不容易啊. 你已经做好第四次转职的准备了吗?");
			}		
		} else if (status == 127) {
            advDone=true;cm.changeJob(MapleJob.HERO.getId());
            cm.teachSkill(1120004,0,10); //Maple Warrior
            cm.teachSkill(1120005,0,10); //Monster Magnet
            cm.teachSkill(1121008,0,10); //Power Stance
            cm.teachSkill(1121010,0,10); //Achilles
            cm.teachSkill(1121001,0,10); //Brandish
            cm.teachSkill(1121002,0,10); //Enrage	
            cm.sendOk("恩,这些就是我教给你最高境界的技能!希望对你今后的修炼有很大的帮助.我已经把我所有的技能都传授给你了,希望你在今后的道路上能够超越我,日益强大起来.那么祝你好运!");
            cm.dispose();
        } 
        else if (status == 130)
        {
            advDone=true;cm.changeJob(MapleJob.PALADIN.getId());
            cm.teachSkill(1220005,0,10);//Maple Warrior
            cm.teachSkill(1221009,0,10); //Monster Magnet
            cm.teachSkill(1220006,0,10); //Power Stance
            cm.teachSkill(1221004,0,10);//Holy Charge : Sword
            cm.teachSkill(1221003,0,10);//Divine Charge : BW
            cm.teachSkill(1221001,0,10); //
            cm.teachSkill(1221011,0,10); //Blast
            cm.teachSkill(1221002,0,10); //Heaven's Hammer
            cm.sendOk("恩,这些就是我教给你最高境界的技能!希望对你今后的修炼有很大的帮助.我已经把我所有的技能都传授给你了,希望你在今后的道路上能够超越我,日益强大起来.那么祝你好运!");
            cm.dispose();
        } 
        else if (status == 133)
        {
            advDone=true;cm.changeJob(MapleJob.DARKKNIGHT.getId());
            cm.teachSkill(1320005,0,10);//Maple Warrior
            cm.teachSkill(1320006,0,10); //Monster Magnet
            cm.teachSkill(1321001,0,10); //Berserk
            cm.teachSkill(1321002,0,10);//Beholder
            cm.teachSkill(1321007,0,10);//Aura of the Beholder
            cm.sendOk("恩,这些就是我教给你最高境界的技能!希望对你今后的修炼有很大的帮助.我已经把我所有的技能都传授给你了,希望你在今后的道路上能够超越我,日益强大起来.那么祝你好运!");
            cm.dispose();
		}
	}
}