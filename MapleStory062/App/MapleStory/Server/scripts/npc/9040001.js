/*

市场传送NPC.活动版本：


论坛:http://btzc.uu1001.com

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
                
            cm.sendOk("好的,如果你决定要去哪里,我会很乐意传送你的.");
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
            cm.sendSimple("#b请选择你要去的房屋.#r#n\r\n#d#L1#待购房屋1#r#n#l#r#L2##e待购房屋2.#l\r\n#d#L3#待购房屋3#k#n#l#L4##r#e待购房屋4.#l\r\n#d#L5#待购房屋5#l #L6#待购房屋6#l\r\n#d#L7#待购房屋7#l #L8#待购房屋8#l#k#n\r\n#L9##d待购房屋9#k#n#l#L10##d待购房屋10#k#n#l\r\n\r\n#g#L11#待购房屋11#l #L12#待购房屋12#l\r\n#L13##r#e待购房屋13#r#n#l #k#L14#待购房屋14#l#l#k#n\r\n#L15#待购房屋15#l#l");
            } else if (status == 1) {
            if (selection == 1) {
                      if (cm.haveItem(4031869)) { 
                      cm.warp(209000001, 0);
                  cm.sendOk("我已经将你传送到#r待购房屋1#n#k了.欢迎再次光临!"); 
                  cm.dispose();
                        } else {
                  cm.sendOk("你的背包里没有钥匙"); //不满足条件执行这里的语句
                  cm.dispose();
            }
            } else if  (selection == 2) {
                      if (cm.haveItem(4031870)) { 
                      cm.warp(209000002, 0);
                  cm.sendOk("我已经将你传送到#r待购房屋2#n#k了.欢迎再次光临!");
                  cm.dispose();
                        } else {
                  cm.sendOk("你的背包里没有钥匙"); //不满足条件执行这里的语句
                  cm.dispose();
            }  
            } else if  (selection == 3) {
                      if (cm.haveItem(4031409)) { 
                      cm.warp(209000003, 0);
                  cm.sendOk("我已经将你传送到#r待购房屋3#n#k了.欢迎再次光临!"); 
                  cm.dispose();
                        } else {
                  cm.sendOk("你的背包里没有钥匙"); //不满足条件执行这里的语句
                  cm.dispose();
            }
            } else if  (selection == 4) {
                      if (cm.haveItem(4001087)) { 
                      cm.warp(209000004, 0);
                  cm.sendOk("我已经将你传送到#r待购房屋4#n#k了.欢迎再次光临!"); 
                  cm.dispose();
                        } else {
                  cm.sendOk("你的背包里没有钥匙"); //不满足条件执行这里的语句
                  cm.dispose();
            }
            } else  if (selection == 5) {
                      if (cm.haveItem(4001088)) { 
                      cm.warp(209000005, 0);
                  cm.sendOk("我已经将你传送到#r待购房屋5#n#k了.欢迎再次光临!"); 
                  cm.dispose();
                        } else {
                  cm.sendOk("你的背包里没有钥匙"); //不满足条件执行这里的语句
                  cm.dispose();
            }
            } else  if (selection == 6) {
                      if (cm.haveItem(4001089)) { 
                      cm.warp(209000006, 0);
                  cm.sendOk("我已经将你传送到#r待购房屋6#n#k了.欢迎再次光临!"); 
                  cm.dispose();
                        } else {
                  cm.sendOk("你的背包里没有钥匙"); //不满足条件执行这里的语句
                  cm.dispose();
            }
            } else  if (selection == 7) {
                      if (cm.haveItem(4001090)) { 
                      cm.warp(209000007, 0);
                  cm.sendOk("我已经将你传送到#r待购房屋7#n#k了.欢迎再次光临!"); 
                  cm.dispose();
                        } else {
                  cm.sendOk("你的背包里没有钥匙"); //不满足条件执行这里的语句
                  cm.dispose();
            }
            } else  if (selection == 8) {
                      if (cm.haveItem(4001091)) { 
                      cm.warp(209000008, 0);
                  cm.sendOk("我已经将你传送到#r待购房屋8#n#k了.欢迎再次光临!"); 
                  cm.dispose();
                        } else {
                  cm.sendOk("你的背包里没有钥匙"); //不满足条件执行这里的语句
                  cm.dispose();
            }
            } else  if (selection == 9) {
                      if (cm.haveItem(4001092)) { 
                      cm.warp(209000009, 0);
                  cm.sendOk("我已经将你传送到#r待购房屋9#n#k了.欢迎再次光临!"); 
                  cm.dispose();
                        } else {
                  cm.sendOk("你的背包里没有钥匙"); //不满足条件执行这里的语句
                  cm.dispose();
            } 
            } else  if (selection == 10) {
                      if (cm.haveItem(4001093)) { 
                      cm.warp(209000010, 0);
                  cm.sendOk("我已经将你传送到#r待购房屋10#n#k了.欢迎再次光临!"); 
                  cm.dispose();
                        } else {
                  cm.sendOk("你的背包里没有钥匙"); //不满足条件执行这里的语句
                  cm.dispose();
            }
            } else  if (selection == 11) {
                      if (cm.haveItem(4001117)) { 
                      cm.warp(209000011, 0);
                  cm.sendOk("我已经将你传送到#r待购房屋11#n#k了.欢迎再次光临!"); 
                  cm.dispose();
                        } else {
                  cm.sendOk("你的背包里没有钥匙"); //不满足条件执行这里的语句
                  cm.dispose();
            }
            } else  if (selection == 12) {
                      if (cm.haveItem(4031771)) { 
                      cm.warp(209000012, 0);
                  cm.sendOk("我已经将你传送到#r待购房屋12#n#k了.欢迎再次光临!"); 
                  cm.dispose();
                        } else {
                  cm.sendOk("你的背包里没有钥匙"); //不满足条件执行这里的语句
                  cm.dispose();
            }
            } else  if (selection == 13) {
                      if (cm.haveItem(4031772)) { 
                      cm.warp(209000013, 0);
                  cm.sendOk("我已经将你传送到#r待购房屋13#n#k了.欢迎再次光临!"); 
                  cm.dispose();
                        } else {
                  cm.sendOk("你的背包里没有钥匙"); //不满足条件执行这里的语句
                  cm.dispose();
            }
            } else  if (selection == 14) {
                      if (cm.haveItem(4031388)) { 
                      cm.warp(209000014, 0);
                  cm.sendOk("我已经将你传送到#r待购房屋14#n#k了.欢迎再次光临!"); 
                  cm.dispose();
                        } else {
                  cm.sendOk("你的背包里没有钥匙"); //不满足条件执行这里的语句
                  cm.dispose();
            }
            } else  if (selection == 15) {
                      if (cm.haveItem(4001023)) { 
                      cm.warp(209000015, 0);
                  cm.sendOk("我已经将你传送到#r待购房屋15#n#k了.欢迎再次光临!"); 
                  cm.dispose();
                        } else {
                  cm.sendOk("你的背包里没有钥匙"); //不满足条件执行这里的语句
                  cm.dispose();
            }  
            }
        }
    }

}var status = 0; 
var maps = Array(120000000,260000000,102000000, 101000000, 100000000, 103000000, 680000000, 200000000, 110000000, 221000000, 222000000, 230000000, 211000000, 220000000, 105040300, 250000000, 600000000, 682000000, 251000000, 800000000, 801000000, 1010000, 240000000, 0);