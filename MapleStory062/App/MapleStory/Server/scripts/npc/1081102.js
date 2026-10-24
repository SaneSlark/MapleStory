/* 
Created By Eclipsed
NPC: Sejan of Ariant 
Function: Pirate job advancer (1st - 4th job) ~ Min Dex= 20 ~ Min level= 10 (first job)
 */
importPackage(net.sf.odinms.client);


var status = 0;
var job;

function start() 
{
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if ((mode == 0 && status == 1) || (mode == 0 && status == 4)) {
            cm.sendOk("考虑清楚了再来找我吧.");
            cm.dispose();
            return;
        }
    }
    if (mode == -1) 
    {
        cm.dispose();
    } 
    else 
    {
        if (mode == 1)
        {
            status++;
        }
        else 
        {
            status--;
        }
        if (status == 0) 
        {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
                if (cm.getLevel() >= 10 && cm.getChar().getDex() >= 20)
                    cm.sendNext("所以你决定要成为 #r海盗#k了?");
                else {
                    cm.sendOk("再努力修炼一下吧,等你更强大了,我才能指引你走上 #r海盗#k之路.");
                    cm.dispose();
                }
            }            
            else if (cm.getLevel() >= 10 && cm.getLevel() < 30) 
            {
                if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE))
                {
                    cm.sendOk("对不起,你需要达到 #b30级#k 才能进行下一次转职");
                    cm.dispose();
                }
                else 
                {
                    status = 3;
                    cm.sendNext("你取得的进步真是惊人.");
                }            
            }
        }
        else if (cm.getLevel() >= 30 && cm.getLevel() < 70) 
        {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.INFIGHTER) || cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER))
            {
                cm.sendOk("对不起,你至少要达到 #b70级#k 才能进行下一次转职");
                cm.dispose();
            }
            else 
            {
                status = 6;
                cm.sendNext("你取得的进步真是惊人.");
            }            
        }
        
        else if (cm.getLevel() >= 70 && cm.getLevel() < 120) 
        {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.VALKYRIE) || cm.getJob().equals(net.sf.odinms.client.MapleJob.BUCCANEER)) 
            {
                cm.sendOk("对不起,你至少要达到 #b120级#k 才能进行下一次转职");
                cm.dispose();
            }
              
            else 
            {
                status = 5;
                cm.sendNext("你取得的进步真是惊人.");
            }
                            
        } 
        else if (cm.getLevel() >=120) 
        {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CAPTAIN) || cm.getJob().equals(net.sf.odinms.client.MapleJob.VIPER)) 
            {
                cm.sendOk("嘿 #b#h ##k! \r\n#d你已经是 #r冒险岛#k 中的最高职业了.去试试你的4转技能吧,或者去猎杀一些强大的首领吧.#k");
                cm.dispose();
            }
            else
            {
                status = 12;
                cm.sendNext("你取得的进步真是惊人.");    
            }
        }else if (status == 1) {   
            cm.sendYesNo("你确定要成为 #r海盗#k吗?");
        }else if (status == 2) {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
                cm.changeJob(net.sf.odinms.client.MapleJob.PIRATE);
                cm.sendOk("那就这样吧!现在出发吧,带着荣耀前进.");
                cm.dispose();

                {
                    cm.sendSimple("恭喜你达到了 #b30级#k! 你想成为哪一个? #b\r\n#L0#火枪手#l\r\n#L1#拳手#l#k");
                }
            } 
            else if (status == 4) 
                if (cm.getJob().equals(net.sf.odinms.client.MapleJob.INFIGHTER) || cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER))
            {
                var jobName;
                if (selection == 0) 
                {
                    jobName = "火枪手";
                    job = net.sf.odinms.client.MapleJob.GUNSLINGER;
   
                }else{ 
                    if (selection == 1)
                        jobName = "拳手";
                    job = net.sf.odinms.client.MapleJob.INFIGHTER;
                }
                cm.sendYesNo("你确定要成为 #r" + jobName + "#k吗?");
                {
                    status = 5
                }
                cm.changeJob(job);
                cm.sendOk("你已经成功完成了转职.希望以后还能见到你.");
                cm.dispose();
            }
        }
        else if (status == 7) 
        {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) 
            {
                status = 8;
                cm.sendYesNo("恭喜你达到了70级 #b#h ##k! 你想转职为大副吗?");
            } 
        }
        else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.INFIGHTER)) 
        {
            status = 10;
            cm.sendYesNo("恭喜你达到了70级 #b#h ##k! 你想转职为斗士吗?");
        } 
        else if (status == 9) 
        {
            cm.changeJob(MapleJob.VALKYRIE);
            cm.sendOk("你已经成功完成了第三次转职.");
            cm.dispose();
        } 
        else if (status == 11) 
        {
            cm.changeJob(MapleJob.BUCCANEER);
            cm.sendOk("你已经成功完成了第三次转职.");
            cm.dispose();
        } 
        else if (status == 13) 
        {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.VALKYRIE)) 
            {
                status = 14;
                cm.sendYesNo("恭喜你达到了120级 #b#h ##k. 你现在想转职为船长吗?");
            } 
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BUCCANEER)) 
            {
                status = 16;
                cm.sendYesNo("恭喜你达到了120级 #b#h ##k. 你现在想转职为冲锋队长吗?");
            }
        }
        else if (status == 15) 
        {
            cm.changeJob(MapleJob.CAPTAIN);
            cm.teachSkill(5221000,20,20); //MW
            cm.teachSkill(5220001,30,30); //gun
            cm.teachSkill(5220002,20,20); //octopus
            cm.teachSkill(5221003,30,30); //bird
            cm.teachSkill(5221004,30,30); //bullet
            //	cm.teachSkill(5221005,30,30); //dont have tis o.0
            //	cm.teachSkill(5221006,10,10); //pirate ship  bugs-dc
            cm.teachSkill(5221007,30,30); //pirate ship shoot
            cm.teachSkill(5221008,30,30); //fish
            cm.teachSkill(5221009,20,20); //batman
            cm.teachSkill(5221010,1,1); //Hero's Will
            cm.teachSkill(5220011,20,20); //flag
            cm.sendOk("恭喜你 #b#h ##k,你已经成功完成了第四次转职.");
            cm.dispose();
        } 
        else if (status == 17)
        {
            cm.changeJob(MapleJob.VIPER);
            cm.teachSkill(5121000,30,30);
            cm.teachSkill(5121001,30,30);
            cm.teachSkill(5121002,30,30);
            cm.teachSkill(5121003,30,30);
            cm.teachSkill(5121004,30,30);
            cm.teachSkill(5121005,30,30);
            cm.teachSkill(5121007,30,30);
            cm.teachSkill(5121008,30,30);
            cm.teachSkill(5121009,30,30);
            cm.teachSkill(5121010,30,30);
            cm.sendOk("恭喜你 #b#h ##k,你已经成功完成了第四次转职.");
            cm.dispose();
        }
    }
}
