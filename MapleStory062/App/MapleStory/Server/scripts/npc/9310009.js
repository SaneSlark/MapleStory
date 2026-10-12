function start() {

if(cm.getChar().getVip() >= 0 && cm.getChar().getMapId() == 910000018) {
    cm.sendSimple ("#b你好, 我能为你召唤黑轮王BOSS.\r\n请你带来#i4140103#(最后一关赠品.).#l#k\r\n\r\n#L1#我要召唤Boss！#l#b ");
    } else {
    cm.sendOk("我是Boss召唤师.\r\n.")
    }
}
function action(mode, type, selection) {
        cm.dispose();
    
if (cm.getMeso() >= 1000000) {

cm.dispose();
        
    if (selection == 0) {
        cm.gainMeso(-100000);
        //怪物ID, HP, EXP, 数量
        cm.summonMob(9410015, 2000000000, 2000000, 1);//蝙蝠怪
    } else if (selection == 1) {
            if(cm.haveItem(4140103) == true){
	cm.summonMob(9410015, 2000000000, 2000000, 1);
        cm.gainItem(4140103,-1);
        cm.serverNotice("『Boss公告』：玩家: "+ cm.getChar().getName() +" 开始了黑轮Boss的挑战~祝他好运!~"); 
				   cm.dispose();
     }else{
        cm.sendOk("请确认你包裹里有#i4140103#");
        cm.serverNotice("『Boss公告』：玩家: "+ cm.getChar().getName() +" 没有过关物品也能来到黑轮王的老家?!~");  
        cm.dispose();   }     
    } else if (selection == 2) {
        cm.gainMeso(-1000000);
        cm.summonMob(9400572, 20000000, 8230000, 1);//蝙蝠魔(卐解)
    } else if (selection == 3) {
        cm.gainMeso(-1000000);
        cm.summonMob(9400536, 18000000, 8230000, 1);//蝙蝠魔(咒印)
    } else if (selection == 4) {
        cm.gainMeso(-1000000);
        cm.summonMob(9400120, 18000000, 5500, 1);//男老板 
    } else if (selection == 5) {
        cm.gainMeso(-1000000);
        cm.summonMob(9400121, 75000000, 3900000, 1);//女老板 
    } else if (selection == 6) {
        cm.gainMeso(-1000000);
        cm.summonMob(9400112, 400000000, 13800000, 1);//保镖A 
    } else if (selection == 7) {
        cm.gainMeso(-1000000);
        cm.summonMob(9400113, 500000000, 10500000, 1);//保镖B
    } else if (selection == 8) {
        cm.gainMeso(-1000000);
        cm.summonMob(9400300, 150000000, 17500000, 1);//恶僧
    } else if (selection == 9) {
        cm.gainMeso(-1000000);
        cm.summonMob(9400549, 3500000, 300000, 1);//火马
    } else if (selection == 10) {
        cm.gainMeso(-1000000);
        cm.summonMob(8180001, 3700000, 13500, 1);//天鹰
    } else if (selection == 11) {
        cm.gainMeso(-1000000);
        cm.summonMob(8180000, 3700000, 13500, 1);//火焰龙
    } else if (selection == 12) {
        cm.gainMeso(-1000000);
        cm.summonMob(9300012, 18000000, 4800, 1);//阿丽莎乐
    } else if (selection == 13) {
        cm.gainMeso(-1000000);
        cm.summonMob(8220001, 18000000, 4800, 1);//驮狼雪人
    } 
}

if (cm.getMeso() >= 5000000) {

cm.dispose();
        
    if (selection == 41) {
        cm.gainMeso(-1000000);
        cm.summonMob(9500167, 1800000, 1050, 10);//金猪
    } else if (selection == 42) {
        cm.gainMeso(-1000000);
        cm.summonMob(6130207, 1670000, 1200, 20);//猿公
    } else if (selection == 43) {
        cm.gainMeso(-1000000);
        cm.summonMob(4230102, 1850000, 5500, 30);//大幽灵 
    } else if (selection == 44) {
        cm.gainMeso(-5000000);
        cm.summonMob(9001000, 1800000, 450, 5);//教官
        cm.summonMob(9001001, 1800000, 450, 5);
        cm.summonMob(9001002, 1800000, 450, 5);
        cm.summonMob(9001003, 1800000, 450, 5);
    } else if (selection == 45) {
        cm.gainMeso(-5000000);
        cm.summonMob(100100, 4000000, 105000, 8);//绿蜗牛 
    } else if (selection == 46) {
        cm.gainMeso(-5000000);
        cm.summonMob(7130001, 75000000, 11000, 20);//猎犬
    } else if (selection == 47) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140500, 150000000, 17500, 10);//火焰猎犬
    } else if (selection == 48) {
        cm.gainMeso(-5000000);
        cm.summonMob(7130200, 1800000, 30000, 10);//红狼
    } else if (selection == 49) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140000, 5000000, 10000, 8);//白狼
    } else if (selection == 50) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140100, 5000000, 10000, 8);//企鹅王与黑雪人 
    } else if (selection == 51) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140103, 1800000, 10500, 1);//寒冰半人马
    } else if (selection == 52) {
        cm.gainMeso(-5000000);
        cm.summonMob(8140101, 2000000, 12000, 1);//暗黑半人马
    } else if (selection == 53) {
        cm.gainMeso(-5000000);
        cm.summonMob(8810020, 1800000, 10000, 8);//蓝飞龙 
    } else if (selection == 54) {
        cm.gainMeso(-5000000);
        cm.summonMob(8810021, 1800000, 10000, 8);//黑飞龙
    } else if (selection == 55) {
        cm.gainMeso(-5000000);
        cm.summonMob(8810023, 2200000, 15000, 10);//邪恶双刀蜥蜴
    } else if (selection == 56) {
        cm.gainMeso(-5000000);
        cm.summonMob(9300077, 3000000, 20000, 20);//骷髅龙
    } else if (selection == 57) {
        cm.gainMeso(-5000000);
        cm.summonMob(8150101, 1800000, 10000, 20);//尖鼻鲨鱼 
    } else if (selection == 58) {
        cm.gainMeso(-5000000);
        cm.summonMob(8142100, 1800000, 10000, 20);//致命乌贼怪 
    } else if (selection == 59) {
        cm.gainMeso(-5000000);
        cm.summonMob(8160000, 4000000, 11500, 10);//时间门神 
    } else if (selection == 60) {
        cm.gainMeso(-5000000);
        cm.summonMob(8170000, 5000000, 11500, 10);//黑甲凶灵
    } else if (selection == 61) {
        cm.gainMeso(-5000000);
        cm.summonMob(8141100, 6000000, 12500, 10);//大海贼王
    } else if (selection == 62) {
        cm.gainMeso(-5000000);
        cm.summonMob(8143000, 6000000, 12500, 10);//时之鬼王 
    } else if (selection == 100) {
        cm.gainMeso(-5000000);
        cm.gainItem(4000019,200);//绿色蜗牛壳 
    } else if (selection == 101) {
        cm.gainMeso(-5000000);
        cm.gainItem(4000000,200);//蓝色蜗牛壳  
    } else if (selection == 102) {
        cm.gainMeso(-5000000); 
        cm.gainItem(4000016,200);//红色蜗牛壳 
        
    } 
}
    
if (cm.getMeso() >= 10000000) {

cm.dispose();
        
    if (selection == 71) {
        cm.gainMeso(-10000000);
        cm.summonMob(7220000, 1800000, 1050, 1);//肯德熊
    } else if (selection == 72) {
        cm.gainMeso(-10000000);
        cm.summonMob(8220000, 1670000, 1200, 1);//艾里杰
    } else if (selection == 73) {
        cm.gainMeso(-10000000);
        cm.summonMob(3220001, 1850000, 5500, 1);//大宇
    } else if (selection == 74) {
        cm.gainMeso(-10000000);
        cm.summonMob(4220000, 1800000, 450, 1);//歇尔夫
    } else if (selection == 75) {
        cm.gainMeso(-10000000);
        cm.summonMob(5220002, 4000000, 105000, 1);//浮士德
    } else if (selection == 76) {
        cm.gainMeso(-10000000);
        cm.summonMob(6220000, 75000000, 11000, 1);//多尔
    } else if (selection == 77) {
        cm.gainMeso(-10000000);
        cm.summonMob(6220001, 150000000, 17500, 1);//朱诺
    } else if (selection == 78) {
        cm.gainMeso(-10000000);
        cm.summonMob(7220001, 1800000, 30000, 1);//九尾狐
    } else if (selection == 79) {
        cm.gainMeso(-10000000);
        cm.summonMob(7220002, 5000000, 10000, 1);//妖怪绅士
    } else if (selection == 80) {
        cm.gainMeso(-10000000);
        cm.summonMob(8220002, 5000000, 10000, 1);//吉米拉
    } else if (selection == 81) {
        cm.gainMeso(-10000000);
        cm.summonMob(8220003, 1800000, 10500, 1);//大海兽
    } else if (selection == 82) {
        cm.gainMeso(-10000000);
        cm.summonMob(9300151, 2000000, 12000, 1);//人造人
    } else if (selection == 83) {
        cm.gainMeso(-10000000);
        cm.summonMob(9300151, 1800000, 10000, 1);//愤怒人造人
    } else if (selection == 84) {
        cm.gainMeso(-10000000);
        cm.summonMob(9400014, 1800000, 10000, 1);//天狗
    } else if (selection == 85) {
        cm.gainMeso(-10000000);
        cm.summonMob(9400575, 2200000, 15000, 1);//可爱大脚

    } 
    
} else {
cm.sendSimple ("你的钱不够呀.");
cm.dispose();
}
    if (selection == 110) {
        cm.warp(100000000, 0);
		cm.dispose();
    } 
    
}