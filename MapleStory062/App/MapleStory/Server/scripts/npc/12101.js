/*
*   班森奶奶的珠宝公司
*   By: Razoer·瞌睡鱼               如果需要改动，请自行修改，请保留本人创意提名~
*/

var status = 0;

function islandOriginalStart() {
    status = -1;
    action(1, 0, 0);
}

function islandOriginalAction(mode, type, selection) {
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

/* MAPLE-ISLAND-QUESTS 2026-10-13 */
var islandDefinitions=[{"id": 1009, "name": "\u745e\u6069\u7684\u5192\u9669\u5c9b\u95ee\u7b541", "startNpc": 12101, "endNpc": 12101, "quiz": [{"text": "\u6253\u5f00\u80cc\u5305\u7684\u5feb\u6377\u952e\u662f\u4ec0\u4e48\uff1f \r\n\r\n#L0##bI\u952e#l\r\n#L1#K\u952e#l\r\n#L2#S\u952e#l\r\n#L3#E\u952e#k#l", "answer": 0}], "startText": "\u4f60\u597d\uff1f\u5bf9\u8fd9\u91cc\u8fd9\u6837\u7684\u751f\u6d3b\u8fd8\u4e0d\u719f\u6089\u5427\uff1f\r\n\u6211\u8981\u7ed9\u4f60\u51e0\u4e2a\u6709\u5173\u5192\u9669\u5c9b\u7684\u95ee\u9898\u3002\u4f60\u56de\u7b54\u5bf9\u95ee\u9898\uff0c\u6211\u5c31\u7ed9\u4f60\u5956\u52b1\u3002\r\n\u600e\u4e48\u6837\uff1f\u4f60\u60f3\u6311\u6218\u8fd9\u6b21\u5192\u9669\u95ee\u7b54\u5417\uff1f", "endText": "\u6253\u5f00\u80cc\u5305\u7684\u5feb\u6377\u952e\u662f\u4ec0\u4e48\uff1f \r\n\r\n#L0##bI\u952e#l\r\n#L1#K\u952e#l\r\n#L2#S\u952e#l\r\n#L3#E\u952e#k#l"}, {"id": 1010, "name": "\u745e\u6069\u7684\u5192\u9669\u5c9b\u95ee\u7b542", "startNpc": 12101, "endNpc": 12101, "quiz": [{"text": "\u53ea\u8981\u53cc\u51fb\u88c5\u5907\u7c7b\u9053\u5177\uff0c\u5c31\u53ef\u4ee5\u5c06\u9053\u5177\u88c5\u5907\u5728\u8eab\u4e0a\u5417\uff1f\r\n\r\n#L0##b\u662f#l\r\n#L1#\u4e0d\u662f#k#l", "answer": 0}], "startText": "\u597d~ \u90a3\u4f60\u51c6\u5907\u597d\u56de\u7b54\u4e0b\u4e2a\u95ee\u9898\u4e86\uff0c\u5c31\u6765\u8ddf\u6211\u8bf4\u3002", "endText": "\u53ea\u8981\u53cc\u51fb\u88c5\u5907\u7c7b\u9053\u5177\uff0c\u5c31\u53ef\u4ee5\u5c06\u9053\u5177\u88c5\u5907\u5728\u8eab\u4e0a\u5417\uff1f\r\n\r\n#L0##b\u662f#l\r\n#L1#\u4e0d\u662f#k#l"}, {"id": 1011, "name": "\u745e\u6069\u7684\u5192\u9669\u5c9b\u95ee\u7b543", "startNpc": 12101, "endNpc": 12101, "quiz": [{"text": "\u6253\u5f00\u89d2\u8272\u88c5\u5907\u7a97\u4f7f\u7528\u7684\u5feb\u6377\u952e\u662f\u4ec0\u4e48\uff1f\r\n\r\n#L0##bE\u952e#l\r\n#L1#S\u952e#l\r\n#L2#I\u952e#k#l", "answer": 0}], "startText": "\u6211\u7ed9\u4f60\u63d0\u7684\u5192\u9669\u5c9b\u95ee\u7b54\u5e76\u4e0d\u56f0\u96be\u3002\u867d\u7136\u7b54\u9519\u4e86\uff0c\u4f46\u8bf7\u6ce8\u610f\u542c\u6e05\u6211\u8bf4\u7684\uff0c\u8fd8\u662f\u53ef\u4ee5\u901a\u8fc7\u7684\u3002\r\n\u4f60\u51c6\u5907\u597d\u56de\u7b54\u7b2c\u4e09\u4e2a\u95ee\u9898\u5c31\u8ddf\u6211\u8bf4\u5427\u3002", "endText": "\u6253\u5f00\u89d2\u8272\u88c5\u5907\u7a97\u4f7f\u7528\u7684\u5feb\u6377\u952e\u662f\u4ec0\u4e48\uff1f\r\n\r\n#L0##bE\u952e#l\r\n#L1#S\u952e#l\r\n#L2#I\u952e#k#l"}, {"id": 1012, "name": "\u745e\u6069\u7684\u5192\u9669\u5c9b\u95ee\u7b544", "startNpc": 12101, "endNpc": 12101, "quiz": [{"text": "\u8981\u62e3\u53d6\u5730\u4e0a\u7684\u9053\u5177\u8981\u6309\u4ec0\u4e48\u5feb\u6377\u952e\uff1f\r\n\r\n#L0##bX\u952e#l\r\n#L1#S\u952e#l\r\n#L2#I\u952e#l\r\n#L3#Z\u952e#k#l", "answer": 3}], "startText": "\u606d\u559c~ \u5df2\u7ecf\u662f\u7b2c\u56db\u4e2a\u95ee\u9898\u3002 \u6211\u4e00\u5171\u51c6\u5907\u4e867\u4e2a\u95ee\u9898\u3002\u90a3\u4f60\u51c6\u5907\u597d\u5c31\u8ddf\u6211\u8bf4\u3002", "endText": "\u8981\u62e3\u53d6\u5730\u4e0a\u7684\u9053\u5177\u8981\u6309\u4ec0\u4e48\u5feb\u6377\u952e\uff1f\r\n\r\n#L0##bX\u952e#l\r\n#L1#S\u952e#l\r\n#L2#I\u952e#l\r\n#L3#Z\u952e#k#l"}, {"id": 1013, "name": "\u745e\u6069\u7684\u5192\u9669\u5c9b\u95ee\u7b545", "startNpc": 12101, "endNpc": 12101, "quiz": [{"text": "\u6218\u58eb\uff0c\u5f13\u7bad\u624b\uff0c\u98de\u4fa0\u4e3a\u4e86\u505a\u4e00\u8f6c\u9700\u8981\u7684\u7b49\u7ea7\u662f10\u3002\u90a3\u9b54\u6cd5\u5e08\u662f\u591a\u5c11\uff1f\r\n\r\n#L0##b10\u7ea7#l#l\r\n#L1#8\u7ea7#k#l", "answer": 1}], "startText": "\u4f60\u5feb\u5230\u4e00\u8f6c\u65f6\u671f\u4e86\u3002\u4e0d\u77e5\u9053\u4f60\u8981\u9009\u4ec0\u4e48\u804c\u4e1a\u3002\r\n\u597d~ \u4f60\u51c6\u5907\u597d\u56de\u7b54\u7b2c\u4e94\u4e2a\u95ee\u9898\u5c31\u8ddf\u6211\u8bf4\u5427\u3002", "endText": "\u6218\u58eb\uff0c\u5f13\u7bad\u624b\uff0c\u98de\u4fa0\u4e3a\u4e86\u505a\u4e00\u8f6c\u9700\u8981\u7684\u7b49\u7ea7\u662f10\u3002\u90a3\u9b54\u6cd5\u5e08\u662f\u591a\u5c11\uff1f\r\n\r\n#L0##b10\u7ea7#l#l\r\n#L1#8\u7ea7#k#l"}, {"id": 1014, "name": "\u745e\u6069\u7684\u5192\u9669\u5c9b\u95ee\u7b546", "startNpc": 12101, "endNpc": 12101, "quiz": [{"text": "\u6bcf\u6b21\u5347\u7ea7\u7684\u65f6\u5019\u4f1a\u63d0\u9ad8\u89d2\u8272\u7684\u80fd\u529b\u3002\u90a3\u6bcf\u6b21\u5347\u7ea7\u7684\u65f6\u5019\u589e\u52a0\u7684\u80fd\u529b\u503c\u591a\u5c11\uff1f\r\n\r\n#L0##b2\u70b9#l\r\n#L1#10\u70b9#l\r\n#L2#5\u70b9#k#l", "answer": 2}], "startText": "\u4f60\u5192\u9669\u5c9b\u95ee\u7b54\u505a\u5f97\u5f88\u597d\u3002\u4f60\u6bcf\u6b21\u5347\u7ea7\u7684\u65f6\u5019\u6709\u6ca1\u6709\u597d\u597d\u5206\u914d\u80fd\u529b\u503c\uff1f\u4f60\u5e94\u8be5\u597d\u597d\u4f7f\u7528\u4f60\u7684\u80fd\u529b\u5c31\u4f1a\u53d8\u5f97\u66f4\u5f3a\u3002\u4f60\u51c6\u5907\u597d\u56de\u7b54\u7b2c\u516d\u4e2a\u95ee\u9898\uff0c\u5c31\u8ddf\u6211\u8bf4\u5427\u3002", "endText": "\u6bcf\u6b21\u5347\u7ea7\u7684\u65f6\u5019\u4f1a\u63d0\u9ad8\u89d2\u8272\u7684\u80fd\u529b\u3002\u90a3\u6bcf\u6b21\u5347\u7ea7\u7684\u65f6\u5019\u589e\u52a0\u7684\u80fd\u529b\u503c\u591a\u5c11\uff1f\r\n\r\n#L0##b2\u70b9#l\r\n#L1#10\u70b9#l\r\n#L2#5\u70b9#k#l"}, {"id": 1015, "name": "\u745e\u6069\u7684\u5192\u9669\u5c9b\u95ee\u7b547", "startNpc": 12101, "endNpc": 12101, "quiz": [{"text": "\u8fd9\u662f\u6700\u540e\u4e00\u4e2a\u95ee\u9898\u3002\u5982\u679c\u4f60\u8981\u8f6c\u804c\uff0c\u5c31\u8981\u53bb\u91d1\u94f6\u5c9b\u3002\u5728\u5f69\u8679\u5c9b\u53ef\u4ee5\u4e58\u8239\u53bb\u91d1\u94f6\u5c9b\u7684\u5730\u65b9\u662f\u54ea\u91cc\uff1f\r\n\r\n#L0##b\u5357\u6e2f#l\r\n#L1#\u5f69\u8679\u6751#l\r\n#L2#\u65e0\u6cd5\u53bb#k#l", "answer": 0}], "startText": "\u7ec8\u4e8e\u5230\u6700\u540e\u4e00\u4e2a\u95ee\u9898\u4e86\uff01\u4f60\u51c6\u5907\u597d\u8ddf\u6211\u8bf4\u5427\u3002", "endText": "\u8fd9\u662f\u6700\u540e\u4e00\u4e2a\u95ee\u9898\u3002\u5982\u679c\u4f60\u8981\u8f6c\u804c\uff0c\u5c31\u8981\u53bb\u91d1\u94f6\u5c9b\u3002\u5728\u5f69\u8679\u5c9b\u53ef\u4ee5\u4e58\u8239\u53bb\u91d1\u94f6\u5c9b\u7684\u5730\u65b9\u662f\u54ea\u91cc\uff1f\r\n\r\n#L0##b\u5357\u6e2f#l\r\n#L1#\u5f69\u8679\u6751#l\r\n#L2#\u65e0\u6cd5\u53bb#k#l"}];
var islandHasLegacy=true;

var islandHelper = Packages.net.sf.odinms.scripting.npc.MapleIslandQuests;
var islandStage = -1, islandSelected = null, islandChoices = [], islandEnding = false, islandQuiz = -1, islandLegacy = false;
function islandStatus(id) { return islandManager.getQuestStatus(id).getId(); }
function islandFinish() {
    if (!islandHelper.complete(islandManager.getC(), islandSelected.id, islandManager.getNpc())) {
        islandManager.sendOk("任务尚未完成，或奖励所需的背包空间不足。请确认任务物品、消灭数量以及背包空位。罗杰的任务还需要吃完苹果并恢复全部HP。");
    } else islandManager.sendOk("任务完成！奖励已发放，请在任务栏查看后续任务。");
    islandManager.dispose();
}
function islandAccept() {
    if (!islandHelper.start(islandManager.getC(),islandSelected.id,islandManager.getNpc())) {
        islandManager.sendOk("暂时不能接受任务，请确认前置任务、等级、职业和背包空间。");islandManager.dispose();return;
    }
    if (islandSelected.id == 1021) {
        if (!islandManager.haveItem(2010007)) islandManager.gainItem(2010007,1);
        var p=islandManager.getPlayer();
        if (p.getHp()>25) {p.setHp(25);p.updateSingleStat(Packages.net.sf.odinms.client.MapleStat.HP,25);}
        islandManager.sendOk("请打开背包，吃掉罗杰的苹果，并等HP完全恢复后再来找我。");
    } else islandManager.sendOk("任务已接受。请按任务栏的要求完成后，再找指定的NPC交付。");
    islandManager.dispose();
}
function islandDialogue(mode,type,selection) {
    if (mode != 1) {islandManager.dispose();return;}
    if (islandEnding && islandStatus(islandSelected.id) == 2) {islandManager.dispose();return;}
    if (islandQuiz>=0) {
        if (selection != islandSelected.quiz[islandQuiz].answer) {
            islandManager.sendOk("答案不正确，请再想一想。重新与我对话即可再次挑战。");islandManager.dispose();return;
        }
        islandQuiz++;
        if(islandQuiz<islandSelected.quiz.length) islandManager.sendSimple(islandSelected.quiz[islandQuiz].text);
        else islandFinish();
        return;
    }
    islandStage++;
    if(islandStage==0) {
        if(islandEnding && islandSelected.quiz.length>0) {islandQuiz=0;islandManager.sendSimple(islandSelected.quiz[0].text);}
        else islandManager.sendYesNo(islandEnding?islandSelected.endText:islandSelected.startText);
    } else if(islandEnding) islandFinish(); else islandAccept();
}

var islandManager=null;
function islandExtraQuest(id) { return (","+"1000,1001,1003,1004,1005,1006,1007,1016,1017,1018,1019,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1035"+",").indexOf(","+id+",") >= 0; }
function start() {
    islandManager=cm;
    var opts="请选择要办理的任务：",npc=cm.getNpc();islandChoices=[];
    for(var i=0;i<islandDefinitions.length;i++) {
        var d=islandDefinitions[i],state=islandStatus(d.id);
        if(d.startNpc==npc && state==0 && !islandExtraQuest(d.id) && islandHelper.canStart(cm.getC(),d.id,npc)) {
            opts+="\r\n#L"+islandChoices.length+"#[接受] "+d.name+"#l";islandChoices.push({quest:d,end:false});
        } else if(d.endNpc==npc && state==1) {
            opts+="\r\n#L"+islandChoices.length+"#[交付/查看] "+d.name+"#l";islandChoices.push({quest:d,end:true});
        }
    }
    if(islandChoices.length==0 && islandHasLegacy) {islandLegacy=true;islandOriginalStart();return;}
    if(islandHasLegacy) opts+="\r\n#L99999#其他服务或对话#l";
    if(islandChoices.length==0 && !islandHasLegacy) {cm.sendOk("目前没有可以办理的任务。请确认任务前置条件，或继续在彩虹岛探索。");cm.dispose();return;}
    cm.sendSimple(opts);
}
function action(mode,type,selection) {
    if(islandLegacy) {islandOriginalAction(mode,type,selection);return;}
    if(mode!=1){cm.dispose();return;}
    if(islandSelected==null) {
        if(selection==99999 && islandHasLegacy) {islandLegacy=true;islandOriginalStart();return;}
        if(selection<0 || selection>=islandChoices.length){cm.dispose();return;}
        islandSelected=islandChoices[selection].quest;islandEnding=islandChoices[selection].end;
    }
    islandDialogue(mode,type,selection);
}
