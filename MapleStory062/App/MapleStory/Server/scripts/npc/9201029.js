/*
*   班森奶奶的珠宝公司
*   By: Razoer·瞌睡鱼               如果需要改动，请自行修改，请保留本人创意提名~
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple ("你好， #b#h ##k, 欢迎你来看望我。\r\n#k#n如果你有#e#r贵金属#k#n.#e#r珠宝#k#n.#e#r水晶#k#n.#e#r陨石#k#n，我可以让它们变成世界上最华丽而名贵的珠宝首饰，当然你会获得丰厚的报酬，这点班森奶奶我可以向你保证。\r\n你目前有： #e#r" + cm.getMeso() + "金币~#k#n 想变成世界上最有钱的人，就快点行动吧.\r\n#r#L0##e#v4011000#青铜     报酬:金币500000  经验1000000#n#l\r\n#k#L1##e#v4011001#钢铁     报酬:金币600000  经验1200000#n#l#k\r\n#b#L2##e#v4011002#锂矿石 报酬:金币700000 经验1500000#n#l#k\r\n#g#L3##e#v4011003#朱矿石 报酬:金币800000  经验1800000#n#l#k\r\n#d#L4##e#v4011004#   银       报酬:金币1000000  经验2000000#n#l#k\r\n#k#L5##e#v4011005#紫矿石 报酬:金币1200000  经验2200000#n#l#k\r\n#r#L6##e#v4011006#黄金     报酬:金币2000000  经验3000000#n#l#k\r\n#b#L7##e#v4021000#石榴石  报酬:金币2500000  经验5000000#n#l#k\r\n#g#L8##e#v4021001#紫水晶   报酬:金币3000000  经验5200000#n#l#k\r\n#d#L9##e#v4021002#海蓝宝石 报酬:金币3500000  经验5500000#n#l#k\r\n#r#L10##e#v4021004#蛋白石  报酬:金币4000000  经验5800000#n#l#k\r\n#d#L11##e#v4021006#黄晶      报酬:金币4500000  经验6000000#n#l#k\r\n#k#L12##e#v4021003#祖母绿  报酬:金币5000000  经验6500000#n#l#k\r\n#b#L13##e#v4021005#蓝宝石  报酬:金币6000000  经验7000000#n#l#k\r\n#g#L14##e#v4021007#钻石     报酬:金币7000000  经验8000000#n#l\r\n#k#L15##e#v4021008#黑水晶   报酬:金币8000000  经验10000000\r\n#r#L16##e#v4005000#力量水晶   报酬:金币10000000  经验12000000#n#l\r\n#d#L17##e#v4005001#智慧水晶   报酬:金币10000000  经验12000000#n#l\r\n#g#L18##e#v4005002#敏捷水晶   报酬:金币10000000  经验12000000#n#l\r\n#d#L19##e#v4005003#幸运水晶   报酬:金币10000000  经验12000000#n#l\r\n#k#L20##e#v4005004#暗黑水晶   报酬:金币15000000  经验20000000#n#l\r\n#b#L21##e#v4011007#月石   报酬:金币20000000  经验40000000#n#l\r\n#r#L22##e#v4021009#星石   报酬:金币50000000  经验100000000#n#l");
        } else if (status == 1) {
            switch(selection) {
        case 0:
            if (cm.haveItem(4011000,1)){
                cm.sendOk("非常的高兴能和你合作，在珠宝业界你已经小有名气大家都称你为#v4011000#青铜大王，并且通过努力获得了50万金币和100万点经验值哦! 继续加油！.");
                cm.gainItem(4011000,-1);
                cm.gainMeso(500000);
                cm.gainExp(1000000);
                cm.dispose();
            }else{
                cm.sendOk("最近你的#v4011000#青铜产量很少哦！加油！~.");
                cm.dispose();
            }
            break;
        case 1: 
            if (cm.haveItem(4011001,1)){
                cm.sendOk("非常的高兴能和你合作，在珠宝业界你已经小有名气大家都称你为#v4011001#钢铁大王，并且通过努力获得了60万金币和120万点经验值哦! 继续加油！.");
                cm.gainItem(4011001,-1);
                cm.gainMeso(600000);
                cm.gainExp(1200000);
                cm.dispose();
            }else{
                cm.sendOk("最近你的#v4011001#钢铁产量很少哦！加油！~.");
                cm.dispose();
            }
            break;
         case 2: 
            if (cm.haveItem(4011002,1)){
                cm.sendOk("非常的高兴能和你合作，在珠宝业界你已经小有名气大家都称你为#v4011002#锂矿大王，并且通过努力获得了70万金币和150万点经验值哦! 继续加油！.");
                cm.gainItem(4011002,-1);
                cm.gainMeso(700000);
                cm.gainExp(1500000);
                cm.dispose();
            }else{
                cm.sendOk("最近你的#v4011002#锂矿产量很少哦！加油！~.");
                cm.dispose();
            }
            break;
         case 3: 
            if (cm.haveItem(4011003,1)){
                cm.sendOk("非常的高兴能和你合作，在珠宝业界你已经小有名气大家都称你为#v4011003#朱矿石大王，并且通过努力获得了80万金币和180万点经验值哦! 继续加油！.");
                cm.gainItem(4011003,-1);
                cm.gainMeso(800000);
                cm.gainExp(1800000);
                cm.dispose();
            }else{
                cm.sendOk("最近你的#v4011003#朱矿产量很少哦！加油！~.");
                cm.dispose();
            }
            break;
         case 4: 
            if (cm.haveItem(4011004,1)){
                cm.sendOk("非常的高兴能和你合作，在珠宝业界你已经小有名气大家都称你为#v4011004#白银石大王，并且通过努力获得了100万金币和200万点经验值哦! 继续加油！.");
                cm.gainItem(4011004,-1);
                cm.gainMeso(1000000);
                cm.gainExp(2000000);
                cm.dispose();
            }else{
                cm.sendOk("最近你的#v4011004#白银产量很少哦！加油！~.");
                cm.dispose();
            }
            break;
         case 5: 
            if (cm.haveItem(4011005,1)){
                cm.sendOk("非常的高兴能和你合作，在珠宝业界你已经小有名气大家都称你为#v4011005#紫矿石大王，并且通过努力获得了120万金币和220W点经验值哦! 继续加油！.");
                cm.gainItem(4011005,-1);
                cm.gainMeso(1200000);
                cm.gainExp(2200000);
                cm.dispose();
            }else{
                cm.sendOk("最近你的#v4011005#紫矿石产量很少哦！加油！~.");
                cm.dispose();
            }
            break;
         case 6: 
            if (cm.haveItem(4011006,1)){
                cm.sendOk("非常的高兴能和你合作，在珠宝业界你已经久负盛名大家都称你为#v4011006#黄金大亨，并且通过努力获得了200万金币和300万点经验值哦! 继续加油！.");
                cm.gainItem(4011006,-1);
                cm.gainMeso(2000000);
                cm.gainExp(3000000);
                cm.dispose();
            }else{
                cm.sendOk("#v4011006#黄金可是很贵重的！丝毫都不能缺少,继续加油哦小朋友！~.");
                cm.dispose();
            }
            break;
         case 7: 
            if (cm.haveItem(4021000,1)){
                cm.sendOk("非常的高兴能和你合作，在珠宝业界你已经久负盛名大家都称你为#v4021000#珠宝大亨，并且通过努力获得了250万金币和500万点经验值哦! 继续加油！.");
                cm.gainItem(4021000,-1);
                cm.gainMeso(2500000);
                cm.gainExp(5000000);
                cm.dispose();
            }else{
                cm.sendOk("#v4021000#石榴石可是很贵重的！丝毫都不能缺少,继续加油哦小朋友！~.");
                cm.dispose();
            }
            break;
         case 8: 
            if (cm.haveItem(4021001,1)){
                cm.sendOk("非常的高兴能和你合作，在珠宝业界你已经久负盛名大家都称你为#v4021001#珠宝大亨，并且通过努力获得了300万金币和520万点经验值哦! 继续加油！.");
                cm.gainItem(4021001,-1);
                cm.gainMeso(3000000);
                cm.gainExp(5200000);
                cm.dispose();
            }else{
                cm.sendOk("#v4021001#紫水晶可是很贵重的！丝毫都不能缺少,继续加油哦小朋友！~.");
                cm.dispose();
            }
            break;
         case 9: 
            if (cm.haveItem(4021002,1)){
                cm.sendOk("非常的高兴能和你合作，在珠宝业界你已经久负盛名大家都称你为#v4021002#珠宝大亨，并且通过努力获得了350万金币和550万点经验值哦! 继续加油！.");
                cm.gainItem(4021002,-1);
                cm.gainMeso(3500000);
                cm.gainExp(5500000);
                cm.dispose();
            }else{
                cm.sendOk("#v4021002#海蓝宝石可是很贵重的！丝毫都不能缺少,继续加油哦小朋友！~.");
                cm.dispose();
            }
            break;
         case 10: 
            if (cm.haveItem(4021004,1)){
                cm.sendOk("非常的高兴能和你合作，在珠宝业界你已经久负盛名大家都称你为#v4021004#珠宝大亨，并且通过努力获得了400万金币和580万点经验值哦! 继续加油！.");
                cm.gainItem(4021004,-1);
                cm.gainMeso(4000000);
                cm.gainExp(5800000);
                cm.dispose();
            }else{
                cm.sendOk("#v4021004#蛋白石可是很贵重的！丝毫都不能缺少,继续加油哦小朋友！~.");
                cm.dispose();
            }
            break;
         case 11: 
            if (cm.haveItem(4021006,1)){
                cm.sendOk("非常的高兴能和你合作，在珠宝业界你已经久负盛名大家都称你为#v4021006#珠宝大亨，并且通过努力获得了450万金币和600万点经验值哦! 继续加油！.");
                cm.gainItem(4021006,-1);
                cm.gainMeso(45000000);
                cm.gainExp(6000000);
                cm.dispose();
            }else{
                cm.sendOk("#v4021006#黄晶可是很贵重的！丝毫都不能缺少,继续加油哦小朋友！~.");
                cm.dispose();
            }
            break;
         case 12: 
            if (cm.haveItem(4021003,1)){
                cm.sendOk("非常的高兴能和你合作，在珠宝业界你已经久负盛名大家都称你为#v4021003#珠宝大亨，并且通过努力获得了500万金币和650万点经验值哦! 继续加油！.");
                cm.gainItem(4021003,-1);
                cm.gainMeso(5000000);
                cm.gainExp(6500000);
                cm.dispose();
            }else{
                cm.sendOk("#v4021003#祖母绿可是很贵重的！丝毫都不能缺少,继续加油哦小朋友！~.");
                cm.dispose();
            }
            break;
         case 13: 
            if (cm.haveItem(4021005,1)){
                cm.sendOk("非常的高兴能和你合作，在珠宝业界你已经久负盛名大家都称你为#v4021005#珠宝大亨，并且通过努力获得了600万金币和700万点经验值哦! 继续加油！.");
                cm.gainItem(4021005,-1);
                cm.gainMeso(6000000);
                cm.gainExp(7000000);
                cm.dispose();
            }else{
                cm.sendOk("#v4021005#蓝宝石可是很贵重的！丝毫都不能缺少,继续加油哦小朋友！~.");
                cm.dispose();
            }
            break;
         case 14: 
            if (cm.haveItem(4021007,1)){
                cm.sendOk("非常的高兴能和你合作，在珠宝业界你已经久负盛名大家都称你为#v4021007#珠宝大亨，并且通过努力获得了700万金币和800万点经验值哦! 继续加油！.");
                cm.gainItem(4021007,-1);
                cm.gainMeso(7000000);
                cm.gainExp(8000000);
                cm.dispose();
            }else{
                cm.sendOk("#v4021007#钻石非常贵重的！一点瑕疵都不能有,继续加油哦小朋友！~.");
                cm.dispose();
            }
            break;
         case 15: 
            if (cm.haveItem(4021008,1)){
                cm.sendOk("非常的高兴能和你合作，在珠宝业界你已经久负盛名大家都称你为#v4021008#珠宝大亨，并且通过努力获得了800万金币和1000万点经验值哦! 继续加油！.");
                cm.gainItem(4021008,-1);
                cm.gainMeso(8000000);
                cm.gainExp(10000000);
                cm.dispose();
            }else{
                cm.sendOk("#v4021008#黑水晶非常贵重的！一点重量都不能少,继续加油哦小朋友！~.");
                cm.dispose();
            }
            break;
         case 16: 
            if (cm.haveItem(4005000,1)){
                cm.sendOk("非常的高兴能和你合作，在水晶业界你已经久负盛名大家都称你为#v4005000#水晶大亨，并且通过努力获得了1000万金币和1200万点经验值哦! 继续加油！.");
                cm.gainItem(4005000,-1);
                cm.gainMeso(10000000);
                cm.gainExp(12000000);
                cm.dispose();
            }else{
                cm.sendOk("#v4005000#力量水晶非常贵重的！一点重量都不能少,继续加油哦小朋友！~.");
                cm.dispose();
            }
            break;
         case 17: 
            if (cm.haveItem(4005001,1)){
                cm.sendOk("非常的高兴能和你合作，在水晶业界你已经久负盛名大家都称你为#v4005001#水晶大亨，并且通过努力获得了1000万金币和1200万点经验值哦! 继续加油！.");
                cm.gainItem(4005001,-1);
                cm.gainMeso(10000000);
                cm.gainExp(12000000);
                cm.dispose();
            }else{
                cm.sendOk("#v4005001#智慧水晶非常贵重的！一点重量都不能少,继续加油哦小朋友！~.");
                cm.dispose();
            }
            break;
         case 18: 
            if (cm.haveItem(4005002,1)){
                cm.sendOk("非常的高兴能和你合作，在水晶业界你已经久负盛名大家都称你为#v4005002#水晶大亨，并且通过努力获得了1000万金币和1200万点经验值哦! 继续加油！.");
                cm.gainItem(4005002,-1);
                cm.gainMeso(10000000);
                cm.gainExp(12000000);
                cm.dispose();
            }else{
                cm.sendOk("#v4005002#敏捷水晶非常贵重的！一点重量都不能少,继续加油哦小朋友！~.");
                cm.dispose();
            }
            break;
         case 19: 
            if (cm.haveItem(4005003,1)){
                cm.sendOk("非常的高兴能和你合作，在水晶业界你已经久负盛名大家都称你为#v4005003#水晶大亨，并且通过努力获得了1000万金币和1200万点经验值哦! 继续加油！.");
                cm.gainItem(4005003,-1);
                cm.gainMeso(10000000);
                cm.gainExp(12000000);
                cm.dispose();
            }else{
                cm.sendOk("#v4005003#幸运水晶非常贵重的！一点重量都不能少,继续加油哦小朋友！~.");
                cm.dispose();
            }
            break;
         case 20: 
            if (cm.haveItem(4005004,1)){
                cm.sendOk("非常的高兴能和你合作，在水晶业界你已经久负盛名大家都称你为#v4005004#水晶大亨，并且通过努力获得了1500万金币和2000万点经验值哦! 继续加油！.");
                cm.gainItem(4005004,-1);
                cm.gainMeso(15000000);
                cm.gainExp(20000000);
                cm.dispose();
            }else{
                cm.sendOk("#v4005004#黑暗水晶非常贵重的！一点重量都不能少,继续加油哦小朋友！~.");
                cm.dispose();
            }
            break;
         case 21: 
            if (cm.haveItem(4011007,1)){
                cm.sendOk("非常的高兴能和你合作，在月石业界你已经久负盛名大家都称你为#v4011007#月石大亨，并且通过努力获得了2000万金币和4000万点经验值哦! 继续加油！.");
                cm.gainItem(4011007,-1);
                cm.gainMeso(20000000);
                cm.gainExp(40000000);
                cm.dispose();
            }else{
                cm.sendOk("#v4011007#月石非常贵重的！一点重量都不能少,继续加油哦小朋友！~.");
                cm.dispose();
            }
            break;
         case 22: 
            if (cm.haveItem(4021009,1)){
                cm.sendOk("非常的高兴能和你合作，在星石业界你已经久负盛名大家都称你为#v4021009#星石大亨，并且通过努力获得了5000万金币和1亿点经验值哦! 继续加油！.");
                cm.gainItem(4021009,-1);
                cm.gainMeso(50000000);
                cm.gainExp(100000000);
                cm.dispose();
            }else{
                cm.sendOk("#v4021009#星石极其珍贵！一点重量都不能少,继续加油哦小朋友！~.");
                cm.dispose();
            }
            break;
            }
        }
    }
}