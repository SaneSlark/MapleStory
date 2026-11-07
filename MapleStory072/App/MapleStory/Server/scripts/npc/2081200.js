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
// Native lava-chain handoffs, using Check/Act rather than forced status or rewards.
var zOldStart=start,zOldAction=action,zQuestChoices=[],zQuestStep=-1,zQuestChoice=null,zQuestOrigin=-1;
var zQuestData=[[6270, 0, "燃烧的火焰书"]];
start=function(){zQuestOrigin=cm.getMapId();zQuestChoices=[];zQuestStep=-1;var menu="";for(var i=0;i<zQuestData.length;i++){var d=zQuestData[i],q=Packages.server.quest.MapleQuest.getInstance(d[0]);if(d[1]==0?q.canStart(cm.getPlayer(),cm.getNpc()):cm.getQuestStatus(d[0])==1){menu+="\r\n#L"+zQuestChoices.length+"#[任务] "+d[2]+"#l";zQuestChoices.push(d);}}if(zQuestChoices.length==0){zOldStart();return;}zQuestStep=0;menu+="\r\n#L"+zQuestChoices.length+"#其他服务#l";cm.sendSimple(menu);};
action=function(mode,type,selection){if(zQuestStep<0){zOldAction(mode,type,selection);return;}if(zQuestStep==2)return;if(mode!=1||cm.getMapId()!=zQuestOrigin){zQuestStep=2;cm.dispose();return;}if(zQuestStep==0){if(selection==zQuestChoices.length){zQuestStep=-1;zOldStart();return;}if(selection!=Math.floor(selection)||selection<0||selection>=zQuestChoices.length){zQuestStep=2;cm.dispose();return;}zQuestChoice=zQuestChoices[selection];zQuestStep=1;cm.sendYesNo("要"+(zQuestChoice[1]==0?"接受":"完成")+"任务【"+zQuestChoice[2]+"】吗？");return;}zQuestStep=2;var q=Packages.server.quest.MapleQuest.getInstance(zQuestChoice[0]);if(zQuestChoice[1]==0&&q.canStart(cm.getPlayer(),cm.getNpc())){cm.startClientNpcQuest(zQuestChoice[0]);return;}if(zQuestChoice[1]==1&&q.canComplete(cm.getPlayer(),null)){cm.completeClientNpcQuest(zQuestChoice[0]);return;}cm.sendOk("请先完成任务栏中列出的条件。");cm.dispose();};
