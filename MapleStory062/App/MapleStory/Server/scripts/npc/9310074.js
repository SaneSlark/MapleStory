/* [NPC]
    Job NPC ID 9010009
    Final  by aexr
    @RageZone
*/

importPackage(net.sf.odinms.client);


var status = 0;
var jobName;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendOk("好的,如果你改变想法随时可以告诉我!\r\n#r祝你好运!");
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("你好,我是全职业1-4转Npc.");
        } else if (status == 1) {
            if (cm.getLevel() < 255 && cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
                if (cm.getLevel() < 8) {
                    cm.sendNext("对不起,你至少要达到 #r[8级]#k 我才能为你服务!");
                    status = 98;
                } else if (cm.getLevel() < 10) {
                    cm.sendYesNo("我们需要集结魔法师的精神力去封印魔王的力量,#r管理员#k 正在与魔王对抗,我们应该尽快赶过去支援他,因此你必须比其他职业提前进行修炼并领悟魔法的精髓,这是一条艰苦的道路,那么你想成为 #r魔法师#k 么?");
                    status = 150;
                    
                } else {
                    cm.sendNext("祝贺你达到了 #r[10级]#k . 那么你想选择的 #r[第一职业]#k 是?");
                    status = 153;
                }
            } else if (cm.getLevel() < 30) {
                cm.sendNext("对不起,你必须达到 #r[30级]#k 才能进行 #r[第二次转职]#k !");
                status = 98;
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF)) {
                cm.sendSimple("祝贺你达到了 #r[30级]#k ,你想转职为:\r\n#L0##r刺客#l\r\n#L1##r侠客#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
                cm.sendSimple("祝贺你达到了 #r[30级]#k ,你想转职为:\r\n#L2##r剑客#l\r\n#L3##r准骑士#l\r\n#L4##r枪战士#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN)) {
                cm.sendSimple("祝贺你达到了 #r[30级]#k ,你想转职为:\r\n#L5##r冰雷法师#l\r\n#L6##r火毒法师#l\r\n#L7##r牧师#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN)) {
                cm.sendSimple("祝贺你达到了 #r[30级]#k ,你想转职为:\r\n#L8##r猎人#l\r\n#L9##r弩手#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE)) {
                cm.sendSimple("祝贺你达到了 #r[30级]#k ,你想转职为:\r\n#L10##r拳手#l\r\n#L11##r火枪手#l");

            } else if (cm.getLevel() < 70) {
                cm.sendNext("对不起,你必须达到 #r[70级]#k 才能进行 #r[第三次转职]#k !");
                status = 98;
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) {
                status = 63;
                cm.sendYesNo("祝贺你达到了 #r[70级]#k ,你现在就要完成 #r[第三次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
                status = 66;
                cm.sendYesNo("祝贺你达到了 #r[70级]#k ,你现在就要完成 #r[第三次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
                status = 69;
                cm.sendYesNo("祝贺你达到了 #r[70级]#k ,你现在就要完成 #r[第三次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
                status = 72;
                cm.sendYesNo("祝贺你达到了 #r[70级]#k ,你现在就要完成 #r[第三次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
                status = 75;
                cm.sendYesNo("祝贺你达到了 #r[70级]#k ,你现在就要完成 #r[第三次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
                status = 78;
                cm.sendYesNo("祝贺你达到了 #r[70级]#k ,你现在就要完成 #r[第三次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
                status = 81;
                cm.sendYesNo("祝贺你达到了 #r[70级]#k ,你现在就要完成 #r[第三次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
                status = 84;
                cm.sendYesNo("祝贺你达到了 #r[70级]#k ,你现在就要完成 #r[第三次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
                status = 87;
                cm.sendYesNo("祝贺你达到了 #r[70级]#k ,你现在就要完成 #r[第三次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
                status = 90;
                cm.sendYesNo("祝贺你达到了 #r[70级]#k ,你现在就要完成 #r[第三次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER)) {
                status = 93;
                cm.sendYesNo("祝贺你达到了 #r[70级]#k ,你现在就要完成 #r[第三次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) {
                status = 96;
                cm.sendYesNo("祝贺你达到了 #r[70级]#k ,你现在就要完成 #r[第三次转职]#k 么?");
            } else if (cm.getLevel() < 120) {
                cm.sendNext("对不起,你必须达到 #r[120级]#k 才能进行 #r[第四次转职]#k !");
                status = 98;
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT)) {
                status = 105;
                cm.sendYesNo("祝贺你达到了 #r[120级]#k ,你现在就要完成 #r[第四次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT)) {
                status = 108;
                cm.sendYesNo("祝贺你达到了 #r[120级]#k ,你现在就要完成 #r[第四次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER)) {
                status = 111;
                cm.sendYesNo("祝贺你达到了 #r[120级]#k ,你现在就要完成 #r[第四次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER)) {
                status = 114;
                cm.sendYesNo("祝贺你达到了 #r[120级]#k ,你现在就要完成 #r[第四次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_MAGE)) {
                status = 117;
                cm.sendYesNo("祝贺你达到了 #r[120级]#k ,你现在就要完成 #r[第四次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_MAGE)) {
                status = 120;
                cm.sendYesNo("祝贺你达到了 #r[120级]#k ,你现在就要完成 #r[第四次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST)) {
                status = 123;
                cm.sendYesNo("祝贺你达到了 #r[120级]#k ,你现在就要完成 #r[第四次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER)) {
                status = 126;
                cm.sendYesNo("祝贺你达到了 #r[120级]#k ,你现在就要完成 #r[第四次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT)) {
                status = 129;
                cm.sendYesNo("祝贺你达到了 #r[120级]#k ,你现在就要完成 #r[第四次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT)) {
                status = 132;
                cm.sendYesNo("祝贺你达到了 #r[120级]#k ,你现在就要完成 #r[第四次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MARAUDER)) {
                status = 135;
                cm.sendYesNo("祝贺你达到了 #r[120级]#k ,你现在就要完成 #r[第四次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.OUTLAW)) {
                status = 138;
                cm.sendYesNo("祝贺你达到了 #r[120级]#k ,你现在就要完成 #r[第四次转职]#k 么?");
            } else if (cm.getLevel() < 255) {
                cm.sendNext("勇士,你已经完成了所有的转职!\r\n我已经没有什么可以教你,\r\n要想变得更强你可以到勇士NANA#r转生#k!");
                status = 98;
            } else if (cm.getLevel() >= 255) {
                cm.sendOk("啊哈... 伟大的 #r[#h #]#k ,你已经通过一个漫长而充满挑战的道路,终于成为了风起云涌的人物.但这个世界阴暗的深处,被 #r[管理员]#k 封印的魔王正蠢蠢欲动,它的残忍无人能及,你需要修炼的更加强大才能拯救所有的居民!"); 
                cm.dispose();
            } else {
                cm.dispose();
            }

        } else if (status == 2) {
            if (selection == 0) {
                jobName = "刺客";
                job = net.sf.odinms.client.MapleJob.ASSASSIN;
            }
            if (selection == 1) {
                jobName = "侠客";
                job = net.sf.odinms.client.MapleJob.BANDIT;
            }
            if (selection == 2) {
                jobName = "剑客";
                job = net.sf.odinms.client.MapleJob.FIGHTER;
            }
            if (selection == 3) {
                jobName = "准骑士";
                job = net.sf.odinms.client.MapleJob.PAGE;
            }
            if (selection == 4) {
                jobName = "枪战士";
                job = net.sf.odinms.client.MapleJob.SPEARMAN;
            }
            if (selection == 5) {
                jobName = "冰雷法师";
                job = net.sf.odinms.client.MapleJob.IL_WIZARD;
            }
            if (selection == 6) {
                jobName = "火毒法师";
                job = net.sf.odinms.client.MapleJob.FP_WIZARD;
            }
            if (selection == 7) {
                jobName = "牧师";
                job = net.sf.odinms.client.MapleJob.CLERIC;
            }
            if (selection == 8) {
                jobName = "猎人";
                job = net.sf.odinms.client.MapleJob.HUNTER;
            }
            if (selection == 9) {
                jobName = "弩手";
                job = net.sf.odinms.client.MapleJob.CROSSBOWMAN;
            }
            if (selection == 10) {
                jobName = "拳手";
                job = net.sf.odinms.client.MapleJob.BRAWLER;
            }
            if (selection == 11) {
                jobName = "火枪手";
                job = net.sf.odinms.client.MapleJob.GUNSLINGER;
            }
            cm.sendYesNo("你想成为 #r[" + jobName + "] #k吗?");
                        
                        
        } else if (status == 3) {
            cm.changeJob(job);
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) { 
                // cm.teachSkill(4100000,20,20); //Claw Mastery
                // cm.teachSkill(4100001,30,30); //Critical Throw
                // cm.teachSkill(4100002,20,20); //Endure
                // cm.teachSkill(4101003,20,20); //Claw Booster
                // cm.teachSkill(4101004,20,20); //Haste
                // cm.teachSkill(4101005,30,30); //Drain
                   cm.gainMeso(500000);
                   cm.gainItem(2070005,10000); 
                   cm.gainItem(1472077,1); 
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
                // cm.teachSkill(4200000,20,20); //Dagger Mastery
                // cm.teachSkill(4200001,20,20); //Endure
                // cm.teachSkill(4201002,20,20); //Dagger Booster
                // cm.teachSkill(4201003,20,20); //Haste
                // cm.teachSkill(4201004,30,30); //Steal
                // cm.teachSkill(4201005,30,30); //Savage Blow
                   cm.gainMeso(500000);
                   cm.gainItem(1332060,1); 
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
                // cm.teachSkill(1100000,20,20); //Sword Mastery
                // cm.teachSkill(1100001,20,20); //Axe Mastery
                // cm.teachSkill(1100002,30,30); //Final Attack: Sword
                // cm.teachSkill(1100003,30,30); //Final Attack: Axe
                // cm.teachSkill(1101004,20,20); //Sword Booster
                // cm.teachSkill(1101005,20,20); //Axe Booster
                // cm.teachSkill(1101006,20,20); //Rage
                // cm.teachSkill(1101007,30,30); //Power Guard
                   cm.gainMeso(500000);
                   cm.gainItem(1402044,1); 
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
                // cm.teachSkill(1200000,20,20); //Sword Mastery
                // cm.teachSkill(1200001,20,20); //BW Mastery
                // cm.teachSkill(1200002,30,30); //Final Attack: Sword
                // cm.teachSkill(1200003,30,30); //Final Attack: BW
                // cm.teachSkill(1201004,20,20); //Sword Booster
                // cm.teachSkill(1201005,20,20); //BW Booster
                // cm.teachSkill(1201006,20,20); //Threaten
                // cm.teachSkill(1201007,30,30); //Power Guard
                   cm.gainMeso(500000);
                   cm.gainItem(1402044,1); 
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
                // cm.teachSkill(1300000,20,20); //Spear Mastery
                // cm.teachSkill(1300001,20,20); //Polearm Mastery
                // cm.teachSkill(1300002,30,30); //Final Attack: Spear
                // cm.teachSkill(1300003,30,30); //Final Attack: Polearm
                // cm.teachSkill(1301004,20,20); //Spear Booster
                // cm.teachSkill(1301005,20,20); //Polearm Booster
                // cm.teachSkill(1301006,20,20); //Iron Will
                // cm.teachSkill(1301007,30,30); //Hyper Body
                   cm.gainMeso(500000);
                   cm.gainItem(1432046,1); 
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
                // cm.teachSkill(2200000,20,20); //MP Eater
                // cm.teachSkill(2201001,20,20); //Meditation
                // cm.teachSkill(2201002,20,20); //Teleport
                // cm.teachSkill(2201003,20,20); //Slow
                // cm.teachSkill(2201004,30,30); //Cold Bean
                // cm.teachSkill(2201005,30,30); //Thunderbolt
                   cm.gainMeso(500000);
                   cm.gainItem(1382015,1); 
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
                // cm.teachSkill(2100000,20,20); //MP Eater
                // cm.teachSkill(2101001,20,20); //Meditation
                // cm.teachSkill(2101002,20,20); //Teleport
                // cm.teachSkill(2101003,20,20); //Slow
                // cm.teachSkill(2101004,30,30); //Fire Arrow
                // cm.teachSkill(2101005,30,30); //Poison Brace
                   cm.gainMeso(500000);
                   cm.gainItem(1382015,1); 
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
                // cm.teachSkill(2300000,20,20); //MP Eater
                // cm.teachSkill(2301001,20,20); //Teleport
                // cm.teachSkill(2301002,30,30); //Heal
                // cm.teachSkill(2301003,20,20); //Invincible
                // cm.teachSkill(2301004,20,20); //Bless
                // cm.teachSkill(2301005,30,30); //Holy Arrow!item
                   cm.gainMeso(500000);
                   cm.gainItem(1382015,1); 
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
                // cm.teachSkill(3100000,20,20); //Bow Mastery
                // cm.teachSkill(3100001,30,30); //Final Attack: Bow
                // cm.teachSkill(3101002,20,20); //Bow Booster
                // cm.teachSkill(3101003,20,20); //Power Knock-Back
                // cm.teachSkill(3101004,20,20); //Soul Arrow: Bow
                // cm.teachSkill(3101005,30,30); //Arrow Bomb
                   cm.gainMeso(500000);
                   cm.gainItem(2060004,10000); 
                   cm.gainItem(1452005,1); 
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
                // cm.teachSkill(3200000,20,20); //Crossbow Mastery
                // cm.teachSkill(3200001,30,30); //Final Attack: Crossbow
                // cm.teachSkill(3201002,20,20); //Crossbow Booster
                // cm.teachSkill(3201003,20,20); //Power Knock-Back
                // cm.teachSkill(3201004,20,20); //Soul Arrow: Crossbow
                // cm.teachSkill(3201005,30,30); //Iron Arrow
                   cm.gainMeso(500000);
                   cm.gainItem(2061004,10000); 
                   cm.gainItem(1462045,1); 
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER)) {
                   cm.gainMeso(500000);
                   cm.gainItem(1482029,1); 
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) {
                   cm.gainMeso(500000);
                   cm.gainItem(2330001,10000); 
                   cm.gainItem(1492004,1); 
            }

            cm.sendOk("戴上#b武器#k开始战斗吧,相信我们还会见面!");
            cm.dispose();

        } else if (status == 61) {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) {
                status = 63;
                cm.sendYesNo("祝贺你达到了 #r[XXX级]#k ,你现在就要完成 #r[第XXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
                status = 66;
                cm.sendYesNo("祝贺你达到了 #r[XXX级]#k ,你现在就要完成 #r[第XXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
                status = 69;
                cm.sendYesNo("祝贺你达到了 #r[XXX级]#k ,你现在就要完成 #r[第XXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
                status = 72;
                cm.sendYesNo("祝贺你达到了 #r[XXX级]#k ,你现在就要完成 #r[第XXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
                status = 75;
                cm.sendYesNo("祝贺你达到了 #r[XXX级]#k ,你现在就要完成 #r[第XXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
                status = 78;
                cm.sendYesNo("祝贺你达到了 #r[XXX级]#k ,你现在就要完成 #r[第XXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
                status = 81;
                cm.sendYesNo("祝贺你达到了 #r[XXX级]#k ,你现在就要完成 #r[第XXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
                status = 84;
                cm.sendYesNo("祝贺你达到了 #r[XXX级]#k ,你现在就要完成 #r[第XXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
                status = 87;
                cm.sendYesNo("祝贺你达到了 #r[XXX级]#k ,你现在就要完成 #r[第XXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
                status = 90;
                cm.sendYesNo("祝贺你达到了 #r[XXX级]#k ,你现在就要完成 #r[第XXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER)) {
                status = 93;
                cm.sendYesNo("祝贺你达到了 #r[XXX级]#k ,你现在就要完成 #r[第XXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) {
                status = 960;
                cm.sendYesNo("祝贺你达到了 #r[XXX级]#k ,你现在就要完成 #r[第XXX次转职]#k 么?");
            } else { 
                cm.dispose();
            }

        } else if (status == 64) {
            // cm.teachSkill(4110000,20,20); //Alchemist
            // cm.teachSkill(4111001,20,20); //Meso Up
            // cm.teachSkill(4111002,30,30); //Shadow Partner
            // cm.teachSkill(4111003,20,20); //Shadow Web
            // cm.teachSkill(4111004,30,30); //Shadow Meso
            // cm.teachSkill(4111005,30,30); //Avenger
            // cm.teachSkill(4111006,20,20); //Flash Jump
            cm.changeJob(MapleJob.HERMIT);
               cm.gainMeso(2000000);
               cm.gainItem(1472062,1); 
            cm.sendOk("希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 67) {
            // cm.teachSkill(4210000,20,20); //Shield Mastery
            // cm.teachSkill(4211001,30,30); //Chakra
            // cm.teachSkill(4211002,30,30); //Assaulter
            // cm.teachSkill(4211003,20,20); //Pickpocket
            // cm.teachSkill(4211004,30,30); //Band of Thieves
            // cm.teachSkill(4211005,20,20); //Meso Guard
            // cm.teachSkill(4211006,30,30); //Meso Explosion
            cm.changeJob(MapleJob.CHIEFBANDIT);
               cm.gainMeso(2000000);
               cm.gainItem(1332064,1); 
            cm.sendOk("希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 70) {
            // cm.teachSkill(3110000,20,20); //Thrust
            // cm.teachSkill(3110001,20,20); //Mortal Blow
            // cm.teachSkill(3111002,20,20); //Puppet
            // cm.teachSkill(3111003,30,30); //Inferno
            // cm.teachSkill(3111004,30,30); //Arrow Rain
            // cm.teachSkill(3111005,30,30); //Silver Hawk
            // cm.teachSkill(3111006,30,30); //Strafe
            cm.changeJob(MapleJob.RANGER);
               cm.gainMeso(2000000);
               cm.gainItem(2060004,10000);
               cm.gainItem(1452052,1); 
            cm.sendOk("希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 73) {
            // cm.teachSkill(3210000,20,20); //Thrust
            // cm.teachSkill(3210001,20,20); //Mortal Blow
            // cm.teachSkill(3211002,20,20); //Puppet
            // cm.teachSkill(3211003,30,30); //Blizzard
            // cm.teachSkill(3211004,30,30); //Arrow Eruption
            // cm.teachSkill(3211005,30,30); //Golden Eagle
            // cm.teachSkill(3211006,30,30); //Strafe
            cm.changeJob(MapleJob.SNIPER);
               cm.gainMeso(2000000);
               cm.gainItem(2061004,10000);
               cm.gainItem(1462046,1); 
            cm.sendOk("希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 76) {
            // cm.teachSkill(2110000,20,20); //Partial Resistance
            // cm.teachSkill(2110001,30,30); //Element Amplification
            // cm.teachSkill(2111002,30,30); //Explosion
            // cm.teachSkill(2111003,30,30); //Poison Mist
            // cm.teachSkill(2111004,20,20); //Seal
            // cm.teachSkill(2111005,20,20); //Spell Booster
            // cm.teachSkill(2111006,30,30); //Element Composition
            cm.changeJob(MapleJob.FP_MAGE);
               cm.gainMeso(2000000);
               cm.gainItem(1382053,1); 
            cm.sendOk("希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 79) {
            // cm.teachSkill(2210000,20,20); //Partial Resistance
            // cm.teachSkill(2210001,30,30); //Element Amplification
            // cm.teachSkill(2211002,30,30); //Ice Strike
            // cm.teachSkill(2211003,30,30); //Thunder Spear
            // cm.teachSkill(2211004,20,20); //Seal
            // cm.teachSkill(2211005,20,20); //Spell Booster
            // cm.teachSkill(2211006,30,30); //Element Composition
            cm.changeJob(MapleJob.IL_MAGE);
               cm.gainMeso(2000000);
               cm.gainItem(1382053,1); 
            cm.sendOk("希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 82) {
            // cm.teachSkill(2310000,20,20); //Elemental Resistance
            // cm.teachSkill(2311001,20,20); //Dispel
            // cm.teachSkill(2311002,20,20); //Mystic Door
            // cm.teachSkill(2311003,30,30); //Holy Symbol
            // cm.teachSkill(2311004,30,30); //Shining Ray
            // cm.teachSkill(2311005,30,30); //Doom
            // cm.teachSkill(2311006,30,30); //Summon Dragon
            cm.changeJob(MapleJob.PRIEST);
               cm.gainMeso(2000000);
               cm.gainItem(1382053,1); 
            cm.sendOk("希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 85) {
            // cm.teachSkill(1110000,20,20); //Improving MP Recovery
            // cm.teachSkill(1110001,20,20); //Shield Mastery
            // cm.teachSkill(1111002,30,30); //Combo Attack
            // cm.teachSkill(1111003,30,30); //Panic: Sword
            // cm.teachSkill(1111004,30,30); //Panic: Axe
            // cm.teachSkill(1111005,30,30); //Coma: Sword
            // cm.teachSkill(1111006,30,30); //Coma: Axe
            // cm.teachSkill(1111007,20,20); //Armor Crash
            // cm.teachSkill(1111008,30,30); //Shout
            cm.changeJob(MapleJob.CRUSADER);
               cm.gainMeso(2000000);
               cm.gainItem(1402012,1); 
            cm.sendOk("希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 88) {
            // cm.teachSkill(1210000,20,20); //Improving MP Recovery
            // cm.teachSkill(1210001,20,20); //Shield Mastery
            // cm.teachSkill(1211002,30,30); //Charged Blow
            // cm.teachSkill(1211003,30,30); //Fire Charge: Sword
            // cm.teachSkill(1211004,30,30); //Flame Charge: BW
            // cm.teachSkill(1211005,30,30); //Ice Charge: Sword
            // cm.teachSkill(1211006,30,30); //Blizzard Charge: BW
            // cm.teachSkill(1211007,30,30); //Thunder Charge: Sword
            // cm.teachSkill(1211008,30,30); //Lightning Charge: BW
            // cm.teachSkill(1211009,20,20); //Magic Crash
            cm.changeJob(MapleJob.WHITEKNIGHT);
               cm.gainMeso(2000000);
               cm.gainItem(1402012,1); 
            cm.sendOk("希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 91) {
            // cm.teachSkill(1310000,20,20); //Elemental Resistance
            // cm.teachSkill(1311001,30,30); //Dragon Crusher: Spear
            // cm.teachSkill(1311002,30,30); //Dragon Crusher: Polearm
            // cm.teachSkill(1311003,30,30); //Dragon Fury: Spear
            // cm.teachSkill(1311004,30,30); //Dragon Fury: Polearm
            // cm.teachSkill(1311005,30,30); //Sacrifice
            // cm.teachSkill(1311006,30,30); //Dragon Roar
            // cm.teachSkill(1311007,20,20); //Power Crash
            // cm.teachSkill(1311008,20,20); //Dragon Blood
            cm.changeJob(MapleJob.DRAGONKNIGHT);
               cm.gainMeso(2000000);
               cm.gainItem(1432045,1); 
            cm.sendOk("希望你能好好运用,也许不久的未来还能见到你!");
        } else if (status == 94) {

            cm.changeJob(MapleJob.MARAUDER);
               cm.gainMeso(2000000);
               cm.gainItem(1482019,1); 
            cm.sendOk("希望你能好好运用,也许不久的未来还能见到你!");
        } else if (status == 97) {

            cm.changeJob(MapleJob.OUTLAW);
               cm.gainMeso(2000000);
               cm.gainItem(2330003,10000);
               cm.gainItem(1492009,1); 
            cm.sendOk("希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 99) {
            cm.sendOk("我们还会见面的!");
            cm.dispose();

        } else if (status == 102) {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT)) {
                status = 105;
                cm.sendYesNo("祝贺你达到了 #r[XXXX级]#k ,你现在就要完成 #r[第XXXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT)) {
                status = 108;
                cm.sendYesNo("祝贺你达到了 #r[XXXX级]#k ,你现在就要完成 #r[第XXXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER)) {
                status = 111;
                cm.sendYesNo("祝贺你达到了 #r[XXXX级]#k ,你现在就要完成 #r[第XXXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER)) {
                status = 114;
                cm.sendYesNo("祝贺你达到了 #r[XXXX级]#k ,你现在就要完成 #r[第XXXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_MAGE)) {
                status = 117;
                cm.sendYesNo("祝贺你达到了 #r[XXXX级]#k ,你现在就要完成 #r[第XXXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_MAGE)) {
                status = 120;
                cm.sendYesNo("祝贺你达到了 #r[XXXX级]#k ,你现在就要完成 #r[第XXXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST)) {
                status = 123;
                cm.sendYesNo("祝贺你达到了 #r[XXXX级]#k ,你现在就要完成 #r[第XXXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER)) {
                status = 126;
                cm.sendYesNo("祝贺你达到了 #r[XXXX级]#k ,你现在就要完成 #r[第XXXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT)) {
                status = 129;
                cm.sendYesNo("祝贺你达到了 #r[XXXX级]#k ,你现在就要完成 #r[第XXXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT)) {
                status = 132;
                cm.sendYesNo("祝贺你达到了 #r[XXXX级]#k ,你现在就要完成 #r[第XXXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MARAUDER)) {
                status = 135;
                cm.sendYesNo("祝贺你达到了 #r[XXXX级]#k ,你现在就要完成 #r[第XXXX次转职]#k 么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.OUTLAW)) {
                status = 137;
                cm.sendYesNo("祝贺你达到了 #r[XXXX级]#k ,你现在就要完成 #r[第XXXX次转职]#k 么?");
            } else { 
                cm.dispose();
            }


        } else if (status == 106) {
            cm.changeJob(MapleJob.NIGHTLORD);
            cm.sendOk("你成长的好快,远远超过我的想象,送你一张#r高级百宝券#k,如果运气好,抽到#b传说中的装备#k也说不定,好运!");
			cm.teachSkill(5220001,0,30);
			cm.teachSkill(5220011,0,30);
			cm.teachSkill(5220002,0,30);
			cm.teachSkill(5221000,0,30);
			cm.teachSkill(5221003,0,30);
                        cm.teachSkill(5221004,0,30); 
                        cm.teachSkill(5221009,0,30);
                        cm.teachSkill(5221006,0,30);
                        cm.teachSkill(5221007,0,30);
                        cm.teachSkill(5221008,0,30);
                        cm.teachSkill(5221010,0,30);
                        cm.gainMeso(3000000);
                        cm.gainItem(5220010,1); 
                        // cm.setLevel(121);
                        cm.dispose();
        } else if (status == 109) {
            cm.changeJob(MapleJob.SHADOWER);
            cm.sendOk("你成长的好快,远远超过我的想象,送你一张#r高级百宝券#k,如果运气好,抽到#b传说中的装备#k也说不定,好运!");
			cm.teachSkill(5220001,0,30);
			cm.teachSkill(5220011,0,30);
			cm.teachSkill(5220002,0,30);
			cm.teachSkill(5221000,0,30);
			cm.teachSkill(5221003,0,30);
                        cm.teachSkill(5221004,0,30); 
                        cm.teachSkill(5221009,0,30);
                        cm.teachSkill(5221006,0,30);
                        cm.teachSkill(5221007,0,30);
                        cm.teachSkill(5221008,0,30);
                        cm.teachSkill(5221010,0,30);
                        cm.gainMeso(3000000);
                        cm.gainItem(5220010,1); 
                        // cm.setLevel(121);
                        cm.dispose();
        } else if (status == 112) {
            cm.changeJob(MapleJob.BOWMASTER);
            cm.sendOk("你成长的好快,远远超过我的想象,送你一张#r高级百宝券#k,如果运气好,抽到#b传说中的装备#k也说不定,好运!");
			cm.teachSkill(5220001,0,30);
			cm.teachSkill(5220011,0,30);
			cm.teachSkill(5220002,0,30);
			cm.teachSkill(5221000,0,30);
			cm.teachSkill(5221003,0,30);
                        cm.teachSkill(5221004,0,30); 
                        cm.teachSkill(5221009,0,30);
                        cm.teachSkill(5221006,0,30);
                        cm.teachSkill(5221007,0,30);
                        cm.teachSkill(5221008,0,30);
                        cm.teachSkill(5221010,0,30);
                        cm.gainMeso(3000000);
                        cm.gainItem(5220010,1); 
                        // cm.setLevel(121);
                        cm.dispose();
        } else if (status == 115) {
            cm.changeJob(MapleJob.MARKSMAN);
            cm.sendOk("你成长的好快,远远超过我的想象,送你一张#r高级百宝券#k,如果运气好,抽到#b传说中的装备#k也说不定,好运!");
			cm.teachSkill(5220001,0,30);
			cm.teachSkill(5220011,0,30);
			cm.teachSkill(5220002,0,30);
			cm.teachSkill(5221000,0,30);
			cm.teachSkill(5221003,0,30);
                        cm.teachSkill(5221004,0,30); 
                        cm.teachSkill(5221009,0,30);
                        cm.teachSkill(5221006,0,30);
                        cm.teachSkill(5221007,0,30);
                        cm.teachSkill(5221008,0,30);
                        cm.teachSkill(5221010,0,30);
                        cm.gainMeso(3000000);
                        cm.gainItem(5220010,1); 
                        // cm.setLevel(121);
                        cm.dispose();
        } else if (status == 118) {
            cm.changeJob(MapleJob.FP_ARCHMAGE);
            cm.sendOk("你成长的好快,远远超过我的想象,送你一张#r高级百宝券#k,如果运气好,抽到#b传说中的装备#k也说不定,好运!");
			cm.teachSkill(5220001,0,30);
			cm.teachSkill(5220011,0,30);
			cm.teachSkill(5220002,0,30);
			cm.teachSkill(5221000,0,30);
			cm.teachSkill(5221003,0,30);
                        cm.teachSkill(5221004,0,30); 
                        cm.teachSkill(5221009,0,30);
                        cm.teachSkill(5221006,0,30);
                        cm.teachSkill(5221007,0,30);
                        cm.teachSkill(5221008,0,30);
                        cm.teachSkill(5221010,0,30);
                        cm.gainMeso(3000000);
                        cm.gainItem(5220010,1); 
                        // cm.setLevel(121);
                        cm.dispose();
        } else if (status == 121) {
            cm.changeJob(MapleJob.IL_ARCHMAGE);
            cm.sendOk("你成长的好快,远远超过我的想象,送你一张#r高级百宝券#k,如果运气好,抽到#b传说中的装备#k也说不定,好运!");
			cm.teachSkill(5220001,0,30);
			cm.teachSkill(5220011,0,30);
			cm.teachSkill(5220002,0,30);
			cm.teachSkill(5221000,0,30);
			cm.teachSkill(5221003,0,30);
                        cm.teachSkill(5221004,0,30); 
                        cm.teachSkill(5221009,0,30);
                        cm.teachSkill(5221006,0,30);
                        cm.teachSkill(5221007,0,30);
                        cm.teachSkill(5221008,0,30);
                        cm.teachSkill(5221010,0,30);
                        cm.gainMeso(3000000);
                        cm.gainItem(5220010,1); 
                        // cm.setLevel(121);
                        cm.dispose();
        } else if (status == 124) {
            cm.changeJob(MapleJob.BISHOP);
            cm.sendOk("你成长的好快,远远超过我的想象,送你一张#r高级百宝券#k,如果运气好,抽到#b传说中的装备#k也说不定,好运!");
			cm.teachSkill(5220001,0,30);
			cm.teachSkill(5220011,0,30);
			cm.teachSkill(5220002,0,30);
			cm.teachSkill(5221000,0,30);
			cm.teachSkill(5221003,0,30);
                        cm.teachSkill(5221004,0,30); 
                        cm.teachSkill(5221009,0,30);
                        cm.teachSkill(5221006,0,30);
                        cm.teachSkill(5221007,0,30);
                        cm.teachSkill(5221008,0,30);
                        cm.teachSkill(5221010,0,30);
                        cm.gainMeso(3000000);
                        cm.gainItem(5220010,1); 
                        // cm.setLevel(121);
                        cm.dispose();
        } else if (status == 127) {
            cm.changeJob(MapleJob.HERO);
            cm.sendOk("你成长的好快,远远超过我的想象,送你一张#r高级百宝券#k,如果运气好,抽到#b传说中的装备#k也说不定,好运!");
			cm.teachSkill(5220001,0,30);
			cm.teachSkill(5220011,0,30);
			cm.teachSkill(5220002,0,30);
			cm.teachSkill(5221000,0,30);
			cm.teachSkill(5221003,0,30);
                        cm.teachSkill(5221004,0,30); 
                        cm.teachSkill(5221009,0,30);
                        cm.teachSkill(5221006,0,30);
                        cm.teachSkill(5221007,0,30);
                        cm.teachSkill(5221008,0,30);
                        cm.teachSkill(5221010,0,30);
                        cm.gainMeso(3000000);
                        cm.gainItem(5220010,1); 
                        // cm.setLevel(121);
                        cm.dispose();
        } else if (status == 130) {
            cm.changeJob(MapleJob.PALADIN);
            cm.sendOk("你成长的好快,远远超过我的想象,送你一张#r高级百宝券#k,如果运气好,抽到#b传说中的装备#k也说不定,好运!");
			cm.teachSkill(5220001,0,30);
			cm.teachSkill(5220011,0,30);
			cm.teachSkill(5220002,0,30);
			cm.teachSkill(5221000,0,30);
			cm.teachSkill(5221003,0,30);
                        cm.teachSkill(5221004,0,30); 
                        cm.teachSkill(5221009,0,30);
                        cm.teachSkill(5221006,0,30);
                        cm.teachSkill(5221007,0,30);
                        cm.teachSkill(5221008,0,30);
                        cm.teachSkill(5221010,0,30);
                        cm.gainMeso(3000000);
                        cm.gainItem(5220010,1); 
                        // cm.setLevel(121);
                        cm.dispose();
        } else if (status == 133) {
            cm.changeJob(MapleJob.DARKKNIGHT);
            cm.sendOk("你成长的好快,远远超过我的想象,送你一张#r高级百宝券#k,如果运气好,抽到#b传说中的装备#k也说不定,好运!");
			cm.teachSkill(5220001,0,30);
			cm.teachSkill(5220011,0,30);
			cm.teachSkill(5220002,0,30);
			cm.teachSkill(5221000,0,30);
			cm.teachSkill(5221003,0,30);
                        cm.teachSkill(5221004,0,30); 
                        cm.teachSkill(5221009,0,30);
                        cm.teachSkill(5221006,0,30);
                        cm.teachSkill(5221007,0,30);
                        cm.teachSkill(5221008,0,30);
                        cm.teachSkill(5221010,0,30);
                        cm.gainMeso(3000000);
                        cm.gainItem(5220010,1); 
                        // cm.setLevel(121);
                        cm.dispose();
        } else if (status == 136) {
            cm.changeJob(MapleJob.BUCCANEER);
            cm.sendOk("你成长的好快,远远超过我的想象,送你一张#r高级百宝券#k,如果运气好,抽到#b传说中的装备#k也说不定,好运!");
			cm.teachSkill(5121001,0,30);
			cm.teachSkill(5121002,0,30);
			cm.teachSkill(5121003,0,30);
			cm.teachSkill(5121004,0,30);
			cm.teachSkill(5121005,0,30);
			cm.teachSkill(5121006,0,30);
			cm.teachSkill(5121007,0,30);
			cm.teachSkill(5121008,0,30);
			cm.teachSkill(5121009,0,30);
			cm.teachSkill(5121010,0,30);
                        cm.gainMeso(3000000);
                        cm.gainItem(5220010,1); 
                        // cm.setLevel(121);
                        cm.dispose();
        } else if (status == 139) {
            cm.changeJob(MapleJob.CORSAIR);
            cm.sendOk("你成长的好快,远远超过我的想象,送你一张#r高级百宝券#k,如果运气好,抽到#b传说中的装备#k也说不定,好运!");
			cm.teachSkill(5220001,0,30);
			cm.teachSkill(5220011,0,30);
			cm.teachSkill(5220002,0,30);
			cm.teachSkill(5221000,0,30);
			cm.teachSkill(5221003,0,30);
                        cm.teachSkill(5221004,0,30); 
                        cm.teachSkill(5221009,0,30);
                        cm.teachSkill(5221006,0,30);
                        cm.teachSkill(5221007,0,30);
                        cm.teachSkill(5221008,0,30);
                        cm.teachSkill(5221010,0,30);
                        cm.gainMeso(3000000);
                        cm.gainItem(5220010,1); 
                        // cm.setLevel(121);
                        cm.dispose();
        } else if (status == 151) {
            if (cm.c.getPlayer().getInt() >= 20) {
                cm.teachSkill(2000000,16,16); //Improving MP Recovery
                cm.teachSkill(2000001,10,10); //Improving Max MP Increase
                cm.teachSkill(2001002,20,20); //Magic Guard
                cm.teachSkill(2001003,20,20); //Magic Armor
                cm.teachSkill(2001004,20,20); //Energy Bolt
                cm.teachSkill(2001005,20,20); //Magic Claw
                cm.changeJob(net.sf.odinms.client.MapleJob.MAGICIAN);
                cm.sendOk("你去吧,希望你成为出色的 #r[魔法师]#k ,也许不久的未来还能见到你!");
                cm.dispose();
            } else {
                cm.sendOk("你没有符合最小需求: #r[20 智力]#k !");
                cm.dispose();
            }
            
        } else if (status == 154) {
            cm.sendSimple("你想成为:#r\r\n#L0#战士#l\r\n#L1#魔法师#l\r\n#L2#弓箭手#l\r\n#L3#飞侠#l\r\n#L4#海盗#l#k");


        } else if (status == 155) {
            if (selection == 0) {
                jobName = "战士";
                job = net.sf.odinms.client.MapleJob.WARRIOR;
            }
            if (selection == 1) {
                jobName = "魔法师";
                job = net.sf.odinms.client.MapleJob.MAGICIAN;
            }
            if (selection == 2) {
                jobName = "弓箭手";
                job = net.sf.odinms.client.MapleJob.BOWMAN;
            }
            if (selection == 3) {
                jobName = "飞侠";
                job = net.sf.odinms.client.MapleJob.THIEF;
            }
            if (selection == 4) {
                jobName = "海盗";
                job = net.sf.odinms.client.MapleJob.PIRATE;
            }
            cm.sendYesNo("你想成为: #r[" + jobName + "]#k 吗?");
                        
                        
        } else if (status == 156) {
            if (job == net.sf.odinms.client.MapleJob.WARRIOR && cm.c.getPlayer().getStr() < 4) {
                cm.sendOk("你没有符合最小需求: #r[35 力量]#k !");
                cm.dispose();
            } else if (job == net.sf.odinms.client.MapleJob.MAGICIAN && cm.c.getPlayer().getInt() < 4) {
                cm.sendOk("你没有符合最小需求: #r[20 智力]#k !");
                cm.dispose();
            } else if (job == net.sf.odinms.client.MapleJob.BOWMAN && cm.c.getPlayer().getDex() < 4) {
                cm.sendOk("你没有符合最小需求: #r[25 敏捷]#k !");
                cm.dispose();
            } else if (job == net.sf.odinms.client.MapleJob.THIEF && cm.c.getPlayer().getDex() < 4) {
                cm.sendOk("你没有符合最小需求: #r[25 敏捷]#k !");
                cm.dispose();
            } else if (job == net.sf.odinms.client.MapleJob.PIRATE && cm.c.getPlayer().getDex() < 4) {
                cm.sendOk("你没有符合最小需求: #r[25 敏捷]#k !");
                cm.dispose();
            } else {
                cm.changeJob(job);
                if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
                    // cm.teachSkill(1000000,16,16); //Improving HP Recovery
                    // cm.teachSkill(1000001,10,10); //Improving Max HP Increase
                    // cm.teachSkill(1000002,8,8);   //Endure
                    // cm.teachSkill(1001003,20,20); //Iron Body
                    // cm.teachSkill(1001004,20,20); //Power Strike
                    // cm.teachSkill(1001005,20,20); //Slash Blast
                    cm.gainMeso(100000);
                    cm.gainItem(1402014,1); 
                } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN)) {
                    // cm.teachSkill(2000000,16,16); //Improving MP Recovery
                    // cm.teachSkill(2000001,10,10); //Improving Max MP Increase
                    // cm.teachSkill(2001002,20,20); //Magic Guard
                    // cm.teachSkill(2001003,20,20); //Magic Armor
                    // cm.teachSkill(2001004,20,20); //Energy Bolt
                    // cm.teachSkill(2001005,20,20); //Magic Claw
                    cm.gainMeso(100000);
                    cm.gainItem(1382054,1); 
                } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN)) {
                    // cm.teachSkill(3000000,16,16); //The Blessing of Amazon
                    // cm.teachSkill(3000001,20,20); //Critical Shot
                    // cm.teachSkill(3000002,8,8);   //The Eye of Amazon
                    // cm.teachSkill(3001003,20,20); //Focus
                    // cm.teachSkill(3001004,20,20); //Arrow Blow
                    // cm.teachSkill(3001005,20,20); //Double Shot
                    cm.gainMeso(100000);
                    cm.gainItem(2060004,10000); 
                    cm.gainItem(1452054,1); 
                } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF)) {
                    // cm.teachSkill(4000000,20,20); //Nimble Body
                    // cm.teachSkill(4000001,8,8);   //Keen Eyes
                    // cm.teachSkill(4001002,20,20); //Disorder
                    // cm.teachSkill(4001003,20,20); //Dark Sight
                    // cm.teachSkill(4001334,20,20); //Double Stab
                    // cm.teachSkill(4001344,20,20); //Lucky Seven
                    cm.gainMeso(100000);
                    cm.gainItem(1332070,1); 
                } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE)) {
                    // cm.teachSkill(5000000,20,20); //Nimble Body
                    // cm.teachSkill(5001001,20,20);   //Keen Eyes
                    // cm.teachSkill(5001002,20,20); //Disorder
                    // cm.teachSkill(5001003,20,20); //Dark Sight
                    // cm.teachSkill(5001005,10,10); //Double Stab
                    cm.gainMeso(100000);
                    cm.gainItem(1482000,1); 
                }
                cm.sendOk("你已经变的更强,戴上我送你的#b武器#k,希望你能好好运用,\r\n也许不久的未来还能见到你!");
                cm.dispose();
            }
            
          } else {
            cm.dispose();
        }  

    }
}
