//load("nashorn:mozilla_compat.js");
var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1";// 物品ID,数量
var x2;
var x3;
var x4;
var add = "#fEffect/CharacterEff/1112903/0/0#";//红桃心
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";//红色右箭头
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";//蓝色右箭头
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";//选择道具
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
//var 红色箭头 = "#fEffect/CharacterEff/1114000/2/0#";
var 红色箭头 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
//var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

importPackage(Packages.java.util);
importPackage(Packages.client);
importPackage(Packages.server);


var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var item;


var jmsz = Array(
    Array(1052135, 1500, "未定义", "永久") //半人马装
    );


var jmwq = Array(
    Array(1702105, 1280, "未定义", "永久"), //通心钥匙
    Array(1702051, 1280, "未定义", "永久"), //灯笼
    Array(1702104, 1280, "未定义", "永久"), //巨无霸冰淇淋
    Array(1702091, 1280, "未定义", "永久"), //网球拍
    Array(1702115, 1280, "未定义", "永久"), //玫瑰花
    Array(1702217, 1280, "未定义", "永久"), //黄鸭子游泳圈

    Array(1702209, 1280, "未定义", "永久"), //驯鹿拐杖
    Array(1702203, 1280, "未定义", "永久"), //万圣节泰迪熊
    Array(1702150, 1280, "未定义", "永久"), //冰凌刀
    Array(1702149, 1280, "未定义", "永久"), //熔岩刀
    Array(1702120, 1280, "未定义", "永久"), //比耶莫特的剑
    Array(1702118, 1280, "未定义", "永久"), //亚努斯的剑
    Array(1702119, 1280, "未定义", "永久"), //夏奇尔的剑
    Array(1702233, 1280, "未定义", "永久"), //彩虹毛笔
    Array(1702187, 1280, "未定义", "永久"), //蓝色极光
    Array(1702188, 1280, "未定义", "永久"), //粉色极光
    Array(1702248, 1280, "未定义", "永久") //圣诞武器


    );


var jzmp = Array(
	Array(1112100, 1500, "未定义", "永久") //BL聊天戒指
    );

var tjId = Array(
    Array(5520000, 1980, "未定义", "永久"), //暗夜娃娃皇冠
    Array(5570000, 2980, "未定义", "永久"), //魔法裙装
	Array(5590000, 1980, "未定义", "永久"), //魔法裙装
	Array(5190003, 1500, "未定义", "永久"), //范围自动捡起功能
	Array(5190004, 1500, "未定义", "永久"),//捡起无所有权道具&amp;金币技能
	Array(5170000, 1280, "未定义", "永久")
	
	
    );

var syxh = Array(//带攻击力的飞镖
    Array(2070012, 1000, "未定义", 1), //纸飞机
	Array(2070011, 2000, "未定义", 1) //枫叶飞镖
	
    );

var tscl = Array(//特殊材料
    Array(4000151, 1000, 100), //时间门神的轴标
    Array(4001109, 1000, 5)//强化玻璃瓶
    );

var xswp = Array(
    Array(5000024, 4000, "蝙蝠怪", 60000 * 60 * 90 * 1, 1),
    Array(5000020, 4000, "小白雪人", 60000 * 60 * 90 * 1, 1),
    Array(5000035, 5000, "没有特效", 60000 * 60 * 90 * 1, 1),
    Array(5000033, 5000, "没有特效", 60000 * 60 * 90 * 1, 1),
    Array(5000032, 5000, "没有特效", 60000 * 60 * 90 * 1, 1),
    Array(5000030, 5000, "没有特效", 60000 * 60 * 90 * 1, 1),
    Array(5000029, 5000, "没有特效", 60000 * 60 * 90 * 1, 1),
    Array(5000036, 5000, "鬼灵精怪", 60000 * 60 * 90 * 1, 1),
	Array(5000046, 4980, "花蘑菇仔", 60000 * 60 * 90 * 1, 1),
    Array(5000000, 1980, "褐色小猫", 60000 * 60 * 90 * 1, 1),
    Array(5000004, 1980, "黑色小猫", 60000 * 60 * 90 * 1, 1),
    Array(5000010, 2980, "恐龙公主", 60000 * 60 * 90 * 1, 1),
    Array(5000009, 2980, "恐龙王子", 60000 * 60 * 90 * 1, 1),
    Array(5000027, 4980, "猪八戒", 60000 * 60 * 90 * 1, 1),
    Array(5000008, 4980, "熊猫", 60000 * 60 * 90 * 1, 1),
    Array(5000007, 1980, "黑小猪", 60000 * 60 * 90 * 1, 1),
    Array(5000003, 1980, "小怪猫", 60000 * 60 * 90 * 1, 1),
    Array(5000001, 1980, "褐色小狗", 60000 * 60 * 90 * 1, 1),
    Array(5000005, 1980, "白色兔子", 60000 * 60 * 90 * 1, 1),
    Array(5000023, 1980, "小企企", 60000 * 60 * 90 * 1, 1),
    Array(5000006, 1980, "雪犬", 60000 * 60 * 90 * 1, 1),
    Array(5000041, 2980, "雪娃娃", 60000 * 60 * 90 * 1, 1),
    Array(5000014, 4980, "圣诞鹿", 60000 * 60 * 90 * 1, 1),
    Array(5000016, 8888, "云豹", 60000 * 60 * 90 * 1, 1),
    Array(5000012, 2980, "小白虎", 60000 * 60 * 90 * 1, 1),
    Array(5000011, 1980, "猴子", 60000 * 60 * 90 * 1, 1),
    Array(5000002, 2980, "粉红兔子", 60000 * 60 * 90 * 1, 1)

	
   );


var jmpf = Array(
    );


var jmmz = Array(
    Array(1002721, 1500, "未定义", "永久"), //狸毛护耳
    Array(1002704, 1500, "未定义", "永久"), //黄独眼怪婴
    Array(1002691, 1500, "未定义", "永久"), //半人马假发(棕色)
    Array(1002695, 1500, "未定义", "永久") //幽灵帽

 
    

    );



var jmsp = Array(
    Array(1012099, 1500, "未定义", "永久"), //蓝色腮红 
    Array(1012160, 1500, "未定义", "永久"), //烈焰红唇
    Array(1012131, 1500, "未定义", "永久"), //好白的牙
    Array(1012165, 1500, "未定义", "永久"), //小丑鼻子
    Array(1012179, 1500, "未定义", "永久"), //鹿鼻子
    Array(1022057, 1500, "未定义", "永久"), //POP眼镜
    Array(1022064, 1500, "未定义", "永久"), //时尚大太阳镜
    Array(1022063, 1500, "未定义", "永久"), //无框小圆眼镜
    Array(1032029, 1500, "未定义", "永久"), //925银耳环
    Array(1032034, 1500, "未定义", "永久"), //可乐耳环
    Array(1032088, 1500, "未定义", "永久") //体力猎犬耳环
    );


var txwq = Array(
    );

var gfs = Array(
    Array(1112916, 3000, "未定义", "永久"), //寂寞单身戒指
    Array(5010069, 3000, "未定义", "永久"), //死神之翼
    Array(1702155, 3000, "未定义", "永久") //绚丽彩虹

    );



var ns = Array(
    
    Array(1001044, 3000, "未定义", "永久"), //绿色婚纱头纱
    Array(1061148, 3000, "未定义", "永久"), //巨星粉色短裙
    Array(1061001, 3000, "未定义", "永久"), //蓝超短裙
    Array(1061007, 3000, "未定义", "永久"), //红超短裙 
    Array(1061067, 3000, "未定义", "永久") //热裤
    );

var qltz = Array(



    );

var stxz = Array(


    );


var status = 0;
var xx = -1;
var jiage = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendOk("#b好的,下次再见.");
        cm.dispose();
    } else {

        if (mode == 0) {
            cm.sendOk("#b好的,下次再见.");
            cm.dispose();
            return;
        }

        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        //---------------------------------------------------------------------------------

        if (status == 0) {

            var add = "#r吃货冒险岛GM人员#k,粉嘟嘟,\r\n\r\n";

            add += "   您当前位置:#b商城首页#k#r\r\n\r\n\r\n";

            add += "" + sss + "\r\n   ";

            add += "#L0##e#r点卷商城#l ";

            cm.sendSimple(add);

        ///////////////////////////////////////////////////////////////////////////////////////////////////////

        } else if (status == 1) {

            if (selection == 0) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n\r\n#b";
				
				add += "#L99#点装转移(点装转移)#l \r\n";

                add += "#L1#精美时装#l ";

                add += "#L2#戒指名片#l ";
				
				

                //add += "#L4##r稀有飞镖#l ";

                add += "#L3##b本周推荐#l #L5#宠物系列(永久)#l \r\n";

              //  add += "";

                add += "#L6#精美武器#l ";

                add += "#L7#精美披风#l ";

                add += "#L10##r特效武器#l#k#b \r\n";

                add += "#L8#精美帽子#l ";

                add += "#L9#精美饰品#l ";

                add += "#L13#情侣套装#l \r\n";

                add += "#L12#我是女神#l ";

                add += "#L11#我是土豪#l ";

                add += "#L14#手套鞋子#l \r\n";

                cm.sendSimple(add);

            }

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        } else if (status == 2) {
			
			if (selection == 99) {
				
				cm.进入商城2();
				cm.dispose();
       } 

            if (selection == 1) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>精美时装#k\r\n\r\n";

                add += "   当前点券余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n#b";

                for (var i = 0; i < jmsz.length; i++) {

                    add += "\r\n#L" + i + "##v" + jmsz[i][0] + "##z" + jmsz[i][0] + "##l#d\r\n\r\n		";

                    add += "需要点券:#r " + jmsz[i][1] + " #d    使用期限:#r " + jmsz[i][3] + "#k#b";

                }

                cm.sendSimple(add);

                xx = 1

            } else if (selection == 2) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>精美名片#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n#b";

                for (var i = 0; i < jzmp.length; i++) {

                    add += "\r\n#L" + i + "##v" + jzmp[i][0] + "##z" + jzmp[i][0] + "##l#d\r\n\r\n		";

                    add += "需要点卷:#r " + jzmp[i][1] + " #d    使用期限:#r " + jzmp[i][3] + "#k#b";

                }

                cm.sendSimple(add);

                xx = 2


            } else if (selection == 3) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>本周推荐#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "\r\n#b";

                for (var i = 0; i < tjId.length; i++) {

                    add += "\r\n#L" + i + "##v" + tjId[i][0] + "##z" + tjId[i][0] + "##l#d\r\n\r\n		";

                    add += "需要点卷:#r " + tjId[i][1] + " #d    使用期限:#r " + tjId[i][3] + "#k#b";


                }


                cm.sendSimple(add);

                xx = 3;

            } else if (selection == 4) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>使用消耗#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "\r\n#b";

                for (var i = 0; i < syxh.length; i++) {

                    add += "\r\n#L" + i + "##v" + syxh[i][0] + "##z" + syxh[i][0] + "##l#d\r\n\r\n		";

                    add += "需要点卷:#r " + syxh[i][1] + " #d    购买数量:#r " + syxh[i][3] + "#k#b";


                }


                cm.sendSimple(add);

                xx = 4;

            } else if (selection == 5) {
                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>宠物系列#k\r\n\r\n";
                add += "   宠物内容如果有加BUFF.增益效果.加攻击力的一律是无效技能！\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "\r\n#b";

                for (var i = 0; i < xswp.length; i++) {

                    add += "\r\n#L" + i + "##v" + xswp[i][0] + "##z" + xswp[i][0] + "##l#d\r\n\r\n		";

                    add += "需要点卷:#r " + xswp[i][1] + " #d    购买数量:#r " + xswp[i][2] + "#k#b";

                }

                cm.sendSimple(add);

                xx = 5


            } else if (selection == 6) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>精美武器#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n#b";

                for (var i = 0; i < jmwq.length; i++) {

                    add += "\r\n#L" + i + "##v" + jmwq[i][0] + "##z" + jmwq[i][0] + "##l#d\r\n\r\n		";

                    add += "需要点卷:#r " + jmwq[i][1] + " #d    使用期限:#r " + jmwq[i][3] + "#k#b";

                }

                cm.sendSimple(add);

                xx = 6


            } else if (selection == 7) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>精美披风#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n#b";

                for (var i = 0; i < jmpf.length; i++) {

                    add += "\r\n#L" + i + "##v" + jmpf[i][0] + "##z" + jmpf[i][0] + "##l#d\r\n\r\n		";

                    add += "需要点卷:#r " + jmpf[i][1] + " #d    使用期限:#r " + jmpf[i][3] + "#k#b";

                }

                cm.sendSimple(add);

                xx = 7


            } else if (selection == 8) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>精美帽子#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n#b";

                for (var i = 0; i < jmmz.length; i++) {

                    add += "\r\n#L" + i + "##v" + jmmz[i][0] + "##z" + jmmz[i][0] + "##l#d\r\n\r\n		";

                    add += "需要点卷:#r " + jmmz[i][1] + " #d    使用期限:#r " + jmmz[i][3] + "#k#b";

                }

                cm.sendSimple(add);

                xx = 8

            } else if (selection == 9) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>精美饰品#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n#b";

                for (var i = 0; i < jmsp.length; i++) {

                    add += "\r\n#L" + i + "##v" + jmsp[i][0] + "##z" + jmsp[i][0] + "##l#d\r\n\r\n		";

                    add += "需要点卷:#r " + jmsp[i][1] + " #d    使用期限:#r " + jmsp[i][3] + "#k#b";

                }

                cm.sendSimple(add);

                xx = 9


            } else if (selection == 10) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>特效武器#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n#b";

                for (var i = 0; i < txwq.length; i++) {

                    add += "\r\n#L" + i + "##v" + txwq[i][0] + "##z" + txwq[i][0] + "##l#d\r\n\r\n		";

                    add += "需要点卷:#r " + txwq[i][1] + " #d    使用期限:#r " + txwq[i][3] + "#k#b";

                }

                cm.sendSimple(add);

                xx = 10

            } else if (selection == 11) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>我是高富帅#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n#b";

                for (var i = 0; i < gfs.length; i++) {

                    add += "\r\n#L" + i + "##v" + gfs[i][0] + "##z" + gfs[i][0] + "##l#d\r\n\r\n		";

                    add += "需要点卷:#r " + gfs[i][1] + " #d    使用期限:#r " + gfs[i][3] + "#k#b";

                }

                cm.sendSimple(add);

                xx = 11


            } else if (selection == 12) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>我是女神#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n#b";

                for (var i = 0; i < ns.length; i++) {

                    add += "\r\n#L" + i + "##v" + ns[i][0] + "##z" + ns[i][0] + "##l#d\r\n\r\n		";

                    add += "需要点卷:#r " + ns[i][1] + " #d    使用期限:#r " + ns[i][3] + "#k#b";

                }

                cm.sendSimple(add);

                xx = 12


            } else if (selection == 13) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>情侣套装#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n#b";

                for (var i = 0; i < qltz.length; i++) {

                    add += "\r\n#L" + i + "##v" + qltz[i][0] + "##z" + qltz[i][0] + "##l#d\r\n\r\n		";

                    add += "需要点卷:#r " + qltz[i][1] + " #d    使用期限:#r " + qltz[i][3] + "#k#b";

                }

                cm.sendSimple(add);

                xx = 13


            } else if (selection == 14) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>手套鞋子#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n#b";

                for (var i = 0; i < stxz.length; i++) {

                    add += "\r\n#L" + i + "##v" + stxz[i][0] + "##z" + stxz[i][0] + "##l#d\r\n\r\n		";

                    add += "需要点卷:#r " + stxz[i][1] + " #d    使用期限:#r " + stxz[i][3] + "#k#b";

                }

                cm.sendSimple(add);

                xx = 14

            }

        ////////////////////////////////////////////////////////////////////////////////////

        } else if (status == 3) {

            if (xx == 1) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>精美时装#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n\r\n#d";

                add += "   物品:#v" + jmsz[selection][0] + "# #z" + jmsz[selection][0] + "#\r\n\r\n";

                add += "   需要点卷:#r " + jmsz[selection][1] + " #d    使用期限:#r " + jmsz[selection][3] + "\r\n                              ";

                add += "   #L1#立即购买#l";

                cm.sendSimple(add);

                jiage = selection;

            }

            if (xx == 2) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>精美名片#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n\r\n#d";

                add += "   物品:#v" + jzmp[selection][0] + "# #z" + jzmp[selection][0] + "#\r\n\r\n";

                add += "   需要点卷:#r " + jzmp[selection][1] + " #d    使用期限:#r " + jzmp[selection][3] + "\r\n                              ";

                add += "   #L2#立即购买#l";

                cm.sendSimple(add);

                jiage = selection;

            }

            if (xx == 3) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>商城更新#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "\r\n\r\n#d";

                add += "   物品:#v" + tjId[selection][0] + "# #z" + tjId[selection][0] + "#\r\n\r\n";

                add += "   需要点卷:#r" + tjId[selection][1] + " #d    使用期限:#r " + tjId[selection][3] + "\r\n                              ";

                add += "   #L3#立即购买#l";

                cm.sendSimple(add);

                jiage = selection;


            }

            if (xx == 4) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>使用消耗#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "\r\n\r\n#d";

                add += "   物品:#v" + syxh[selection][0] + "# #z" + syxh[selection][0] + "#\r\n\r\n";

                add += "   需要点卷:#r" + syxh[selection][1] + " #d    购买数量:#r " + syxh[selection][3] + "\r\n                              ";

                add += "   #L4#立即购买#l";

                cm.sendSimple(add);

                jiage = selection;


            }

            if (xx == 5) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>限时物品#k\r\n\r\n";

                add += "   物品:#v" + xswp[selection][0] + "# #z" + xswp[selection][0] + "##k\r\n\r\n";

                add += "   需要点卷:#r" + xswp[selection][1] + " #d        使用期限:#r " + xswp[selection][2] + "\r\n";

                add += "   #L5#立即购买#l";

                cm.sendSimple(add);

                jiage = selection;


            }


            if (xx == 6) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>精美武器#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n\r\n#d";

                add += "   物品:#v" + jmwq[selection][0] + "# #z" + jmwq[selection][0] + "#\r\n\r\n";

                add += "   需要点卷:#r " + jmwq[selection][1] + " #d    使用期限:#r " + jmwq[selection][3] + "\r\n                              ";

                add += "   #L6#立即购买#l";

                cm.sendSimple(add);

                jiage = selection;

            }

            if (xx == 7) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>精美披风#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n\r\n#d";

                add += "   物品:#v" + jmpf[selection][0] + "# #z" + jmpf[selection][0] + "#\r\n\r\n";

                add += "   需要点卷:#r " + jmpf[selection][1] + " #d    使用期限:#r " + jmpf[selection][3] + "\r\n                              ";

                add += "   #L7#立即购买#l";

                cm.sendSimple(add);

                jiage = selection;

            }


            if (xx == 8) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>精美帽子#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n\r\n#d";

                add += "   物品:#v" + jmmz[selection][0] + "# #z" + jmmz[selection][0] + "#\r\n\r\n";

                add += "   需要点卷:#r " + jmmz[selection][1] + " #d    使用期限:#r " + jmmz[selection][3] + "\r\n                              ";

                add += "   #L8#立即购买#l";

                cm.sendSimple(add);

                jiage = selection;

            }

            if (xx == 9) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>精美饰品#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n\r\n#d";

                add += "   物品:#v" + jmsp[selection][0] + "# #z" + jmsp[selection][0] + "#\r\n\r\n";

                add += "   需要点卷:#r " + jmsp[selection][1] + " #d    使用期限:#r " + jmsp[selection][3] + "\r\n                              ";

                add += "   #L9#立即购买#l";

                cm.sendSimple(add);

                jiage = selection;

            }

            if (xx == 10) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>特效武器#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n\r\n#d";

                add += "   物品:#v" + txwq[selection][0] + "# #z" + txwq[selection][0] + "#\r\n\r\n";

                add += "   需要点卷:#r " + txwq[selection][1] + " #d    使用期限:#r " + txwq[selection][3] + "\r\n                              ";

                add += "   #L10#立即购买#l";

                cm.sendSimple(add);

                jiage = selection;

            }

            if (xx == 11) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>我要当高富帅#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n\r\n#d";

                add += "   物品:#v" + gfs[selection][0] + "# #z" + gfs[selection][0] + "#\r\n\r\n";

                add += "   需要点卷:#r " + gfs[selection][1] + " #d    使用期限:#r " + gfs[selection][3] + "\r\n                              ";

                add += "   #L11#立即购买#l";

                cm.sendSimple(add);

                jiage = selection;

            }

            if (xx == 12) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>我是女神#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n\r\n#d";

                add += "   物品:#v" + ns[selection][0] + "# #z" + ns[selection][0] + "#\r\n\r\n";

                add += "   需要点卷:#r " + ns[selection][1] + " #d    使用期限:#r " + ns[selection][3] + "\r\n                              ";

                add += "   #L12#立即购买#l";

                cm.sendSimple(add);

                jiage = selection;

            }

            if (xx == 13) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>情侣套装#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n\r\n#d";

                add += "   物品:#v" + qltz[selection][0] + "# #z" + qltz[selection][0] + "#\r\n\r\n";

                add += "   需要点卷:#r " + qltz[selection][1] + " #d    使用期限:#r " + qltz[selection][3] + "\r\n                              ";

                add += "   #L13#立即购买#l";

                cm.sendSimple(add);

                jiage = selection;

            }

            if (xx == 14) {

                var add = "欢迎来到#r#r吃货冒险岛#b下面是本服的游戏商城区.\r\n\r\n";

                add += "   您当前位置:#b商城首页>>点卷商城>>手套鞋子#k\r\n\r\n";

                add += "   当前点卷余额:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n\r\n#d";

                add += "   物品:#v" + stxz[selection][0] + "# #z" + stxz[selection][0] + "#\r\n\r\n";

                add += "   需要点卷:#r " + stxz[selection][1] + " #d    使用期限:#r " + stxz[selection][3] + "\r\n                              ";

                add += "   #L14#立即购买#l";

                cm.sendSimple(add);

                jiage = selection;

            }

        ///////////////////////////////////////////////////////////////////////////////////////////

        } else if (status == 4) {


            if (selection == 1) {
                if (cm.getPlayer().getCSPoints(1) >= jmsz[jiage][1]) {
                    //cm.gainItem(jmsz[jiage][0], 1);
					item = cm.gainGachaponItem(jmsz[jiage][0], 1, "现金商城", 0);
					if (item != -1) {
						cm.sendOk("你获得了 #b#t" + item + "##k " + 1 + "个。");
						cm.getPlayer().modifyCSPoints(1, -jmsz[jiage][1]);
					} else {
						cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
					}
                    cm.dispose();
                } else {
                    cm.sendOk("#b您没有足够的点卷进行购买,请充值.");
                    cm.dispose();
                }


            } else if (selection == 2) {
                if (cm.getPlayer().getCSPoints(1) >= jzmp[jiage][1]) {
					item = cm.gainGachaponItem(jzmp[jiage][0], 1, "现金商城", 0);
					if (item != -1) {
						cm.sendOk("你获得了 #b#t" + item + "##k " + 1 + "个。");
						cm.getPlayer().modifyCSPoints(1, -jzmp[jiage][1]);
					} else {
						cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
					}
                    cm.dispose();
                } else {
                    cm.sendOk("#b您没有足够的点卷进行购买,请充值.");
                    cm.dispose();
                }


            } else if (selection == 3) {
                if (cm.getPlayer().getCSPoints(1) >= tjId[jiage][1]) {
                    //cm.gainItem(tjId[jiage][0], 1);
					item = cm.gainGachaponItem(tjId[jiage][0], 1, "现金商城", 0);
					if (item != -1) {
						cm.sendOk("你获得了 #b#t" + item + "##k " + 1 + "个。");
						cm.getPlayer().modifyCSPoints(1, -tjId[jiage][1]);
					} else {
						cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
					}
                    cm.dispose();
                } else {
                    cm.sendOk("#b您没有足够的点卷进行购买,请充值.");
                    cm.dispose();
                }
            } else if (selection == 4) {
                if (cm.getPlayer().getCSPoints(1) >= syxh[jiage][1]) {
					item = cm.gainGachaponItem(syxh[jiage][0], 1, "现金商城", 0);
					if (item != -1) {
						cm.sendOk("你获得了 #b#t" + item + "##k " + 1 + "个。");
						cm.getPlayer().modifyCSPoints(1, -syxh[jiage][1]);
					} else {
						cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
					}
                    cm.dispose();
                    
                } else {
                    cm.sendOk("#b您没有足够的点卷进行购买,请登陆网站冲值.");
                    cm.dispose();
                }


            } else if (selection == 5) {
                if (cm.getPlayer().getCSPoints(1) >= xswp[jiage][1]) {
                    cm.sendOk("#b购买成功,请查看背包.");
                    cm.getPlayer().modifyCSPoints(1, -xswp[jiage][1]);
					cm.gainPet(xswp[jiage][0],xswp[jiage][2],1,100,100,90*24);
                    cm.dispose();
                    
                } else {
                    cm.sendOk("#b您没有足够的点卷进行购买,请登陆网站冲值.");
                    cm.dispose();
                }

            } else if (selection == 6) {
                if (cm.getPlayer().getCSPoints(1) >= jmwq[jiage][1]) {
					item = cm.gainGachaponItem(jmwq[jiage][0], 1, "现金商城", 0);
					if (item != -1) {
						cm.sendOk("你获得了 #b#t" + item + "##k " + 1 + "个。");
						cm.getPlayer().modifyCSPoints(1, -jmwq[jiage][1]);
					} else {
						cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
					}
                    cm.dispose();
                    
                } else {
                    cm.sendOk("#b您没有足够的点卷进行购买,请充值.");
                    cm.dispose();
                }


            } else if (selection == 7) {
                if (cm.getPlayer().getCSPoints(1) >= jmpf[jiage][1]) {
					item = cm.gainGachaponItem(jmpf[jiage][0], 1, "现金商城", 0);
					if (item != -1) {
						cm.sendOk("你获得了 #b#t" + item + "##k " + 1 + "个。");
						cm.getPlayer().modifyCSPoints(1, -jmpf[jiage][1]);
					} else {
						cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
					}
                    cm.dispose();
                    
                } else {
                    cm.sendOk("#b您没有足够的点卷进行购买,请充值.");
                    cm.dispose();
                }

            } else if (selection == 8) {
                if (cm.getPlayer().getCSPoints(1) >= jmmz[jiage][1]) {
					item = cm.gainGachaponItem(jmmz[jiage][0], 1, "现金商城", 0);
					if (item != -1) {
						cm.sendOk("你获得了 #b#t" + item + "##k " + 1 + "个。");
						cm.getPlayer().modifyCSPoints(1, -jmmz[jiage][1]);
					} else {
						cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
					}
                    cm.dispose();
                    
                } else {
                    cm.sendOk("#b您没有足够的点卷进行购买,请充值.");
                    cm.dispose();
                }

            } else if (selection == 9) {
                if (cm.getPlayer().getCSPoints(1) >= jmsp[jiage][1]) {
					item = cm.gainGachaponItem(jmsp[jiage][0], 1, "现金商城", 0);
					if (item != -1) {
						cm.sendOk("你获得了 #b#t" + item + "##k " + 1 + "个。");
						cm.getPlayer().modifyCSPoints(1, -jmsp[jiage][1]);
					} else {
						cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
					}
                    cm.dispose();
                    
                } else {
                    cm.sendOk("#b您没有足够的点卷进行购买,请充值.");
                    cm.dispose();
                }


            } else if (selection == 10) {
                if (cm.getPlayer().getCSPoints(1) >= txwq[jiage][1]) {
					item = cm.gainGachaponItem(txwq[jiage][0], 1, "现金商城", 0);
					if (item != -1) {
						cm.sendOk("你获得了 #b#t" + item + "##k " + 1 + "个。");
						cm.getPlayer().modifyCSPoints(1, -txwq[jiage][1]);
					} else {
						cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
					}
                    cm.dispose();
                    
                } else {
                    cm.sendOk("#b您没有足够的点卷进行购买,请充值.");
                    cm.dispose();
                }


            } else if (selection == 11) {
                if (cm.getPlayer().getCSPoints(1) >= gfs[jiage][1]) {
					item = cm.gainGachaponItem(gfs[jiage][0], 1, "现金商城", 0);
					if (item != -1) {
						cm.sendOk("你获得了 #b#t" + item + "##k " + 1 + "个。");
						cm.getPlayer().modifyCSPoints(1, -gfs[jiage][1]);
					} else {
						cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
					}
                    cm.dispose();
                    
                } else {
                    cm.sendOk("#b您没有足够的点卷进行购买,请充值.");
                    cm.dispose();
                }


            } else if (selection == 12) {
                if (cm.getPlayer().getCSPoints(1) >= ns[jiage][1]) {
					item = cm.gainGachaponItem(ns[jiage][0], 1, "现金商城", 0);
					if (item != -1) {
						cm.sendOk("你获得了 #b#t" + item + "##k " + 1 + "个。");
						cm.getPlayer().modifyCSPoints(1, -ns[jiage][1]);
					} else {
						cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
					}
                    cm.dispose();
                    
                } else {
                    cm.sendOk("#b您没有足够的点卷进行购买,请充值.");
                    cm.dispose();
                }

            } else if (selection == 13) {
                if (cm.getPlayer().getCSPoints(1) >= qltz[jiage][1]) {
					item = cm.gainGachaponItem(qltz[jiage][0], 1, "现金商城", 0);
					if (item != -1) {
						cm.sendOk("你获得了 #b#t" + item + "##k " + 1 + "个。");
						cm.getPlayer().modifyCSPoints(1, -qltz[jiage][1]);
					} else {
						cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
					}
                    cm.dispose();
                    
                } else {
                    cm.sendOk("#b您没有足够的点卷进行购买,请充值.");
                    cm.dispose();
                }

            } else if (selection == 14) {
                if (cm.getPlayer().getCSPoints(1) >= stxz[jiage][1]) {
					item = cm.gainGachaponItem(stxz[jiage][0], 1, "现金商城", 0);
					if (item != -1) {
						cm.sendOk("你获得了 #b#t" + item + "##k " + 1 + "个。");
						cm.getPlayer().modifyCSPoints(1, -stxz[jiage][1]);
					} else {
						cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
					}
                    cm.dispose();
                    
                } else {
                    cm.sendOk("#b您没有足够的点卷进行购买,请充值.");
                    cm.dispose();
                }
            }
        }
    }

}
//load("nashorn:mozilla_compat.js");



