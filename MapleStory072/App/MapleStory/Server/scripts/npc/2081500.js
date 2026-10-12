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
				cm.sendNext("lonlyAngle告诉我，你还没到120级，不能够四转.");
				status = 98;
			} else if (cm.getLevel() >=120) {
				status = 101;
				cm.sendNext("你想要四转吗?我是海盗转职官.");
			}
				else{cm.dispose();}
			} else if (status == 102) {
			 if ((cm.getJob() == net.sf.odinms.client.MapleJob.MARAUDER.getId())) {
        	        	status = 105;
       	         		cm.sendYesNo("恭喜你到达这个荣耀的等级，你要成为冲锋队长吗?");
       	     		} else if ((cm.getJob() == net.sf.odinms.client.MapleJob.OUTLAW.getId())) {
       	         		status = 108;
       	         		cm.sendYesNo("恭喜你到达这个荣耀的等级，你要成为船长吗？");
       	     		}
        } else if (status == 106) {
            cm.changeJob(MapleJob.BUCCANEER.getId());
cm.teachSkill(5121000,0,10);
cm.teachSkill(5121001,0,10);
cm.teachSkill(5121002,0,10);
cm.teachSkill(5121003,0,10);
cm.teachSkill(5121004,0,10);
cm.teachSkill(5121005,0,10);
cm.teachSkill(5121007,0,10);
cm.teachSkill(5121008,0,10);
cm.teachSkill(5121009,0,10);
cm.teachSkill(5121010,0,10);
            cm.sendOk("祝你开心. 技能已经学会，技能等级上限还需要自己去提升喔, 祝你幸运!");
	    cm.dispose();
        }
        else if (status == 109)
	{
            cm.changeJob(MapleJob.CORSAIR.getId());
cm.teachSkill(5221000,0,10);
cm.teachSkill(5221001,0,10);
cm.teachSkill(5221002,0,10);
cm.teachSkill(5221003,0,10);
cm.teachSkill(5221004,0,10);
cm.teachSkill(5221005,0,10);
cm.teachSkill(5221007,0,10);
cm.teachSkill(5221008,0,10);
cm.teachSkill(5221009,0,10);
cm.teachSkill(5221010,0,10);
cm.teachSkill(5221011,0,10);
            cm.sendOk("祝你开心. 部分技能已经学会，技能等级上限还需要自己去提升喔, 祝你幸运!");
	    cm.dispose();
		}else
		{
			cm.dispose();
}
	}
}