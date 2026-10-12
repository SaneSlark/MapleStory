/*
*
* 排行榜系统 NPC    By: ZreHy_MapleStory    网站：www.zrehymxd.cn
*
*/

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	
	action(1, 0, 0);
}

function action(mode, type, selection) {
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 0 && mode == 0) {
                
			cm.dispose();
			return;                    
                }
                if (mode == 1) {
			status++;
		}
		else {
			status--;
		}
		        if (status == 0) {
			cm.sendSimple("#d                                     最新的世界排名#k\r\n                                  #r#e#L13#等级排行榜#l \r\n\r\n                     #e#b#L16#财富排行榜#k\#b #L15#人气排行榜#k#l \r\n\r\n        #n#e#L10#家族排行榜#l#e#L12#杀手排行榜#l #e#L6#被杀排行榜#k#l  #b");
			} else if (status == 1) {
			if (selection == 1) {
				   if(cm.getChar().getVip() >= 1) {
                   cm.warp(209000000, 0);
                   cm.sendOk("尊敬的VIP1会员，我已经将你传送至#r会员等级1地图-幸福村#n#k了.欢迎再次光临!"); 
				   cm.dispose();
				   }else{
                   cm.sendOk("#b你不是会员1级，请联系GM给你在线开通!");
                   cm.dispose();   }  
			} else if  (selection == 2) {
				   if(cm.getChar().getVip() >= 2) {
                   cm.warp(922020300, 0);
cm.sendOk("尊敬的VIP2会员，我已经将你传送至#r会员等级2地图-闹钟之家#n#k了.欢迎再次光临!"); 
				   cm.dispose();
				   }else{
                   cm.sendOk("#b你不是会员2级，请联系GM给你在线开通!");
                   cm.dispose();   }     
            } else if (selection == 3) {
            if(cm.getChar().getVip() >= 3) {
                   cm.warp(920010000, 0);
cm.sendOk("尊敬的VIP3会员，我已经将你传送至#r会员等级3地图-天空之蓝色的天空#n#k了.欢迎再次光临!"); 
                   cm.dispose(); 
                   }else{
                   cm.sendOk("#b你不是会员3级，请联系GM给你在线开通!");
                   cm.dispose();   }         
          } else if (selection == 6) {
                   cm.ZreHypvpdeaths();
                   cm.dispose();    
            } else if (selection == 9) {
                   cm.ZreHyzs();
                   cm.dispose();  
            } else if (selection == 10) {
                   cm.displayGuildRanks();
	               cm.dispose();  
            } else if (selection == 11) {
                   cm.sendOk("#b(01)聊天栏里输入@help可以打开玩家帮助 \r\n(02)点TRADE可以直接传送到自由市场。#l \r\n(03)各城市的NaNa说不定会有好东西卖哦!  \r\n(04)海底世界海豚学习骑宠和砸卷技能，海底防具店买骑宠。 \r\n(05)射手村的宠物管理员Cloy能告诉你关于宠物的一切 #b\n");
                        cm.dispose();   
            } else if (selection == 13) {
                   cm.ZreHylvl(); 
                   cm.dispose();  
            } else if (selection == 14) {
                   cm.sendOk("请不要使用任何外挂程序,否则封号不给予任何解释!请GM做好本份工作,见挂即封!一起发扬ZreHy精神! ");

				 cm.dispose();   
      } else if (selection == 15) {
                   cm.ZreHyfame(); 
                   cm.dispose(); 
     } else if (selection == 16) {
                   cm.ZreHymeso(); 
                   cm.dispose(); 
            } else if (selection == 12) {
                   cm.ZreHypvpkills();
                   cm.dispose();   
				
			}
		}
	}
}