importPackage(net.sf.odinms.world);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server.maps);

importPackage(java.lang);
importPackage(net.sf.odinms.server);
importPackage(net.sf.odinms.tools);

/* 
    Adobis
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
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
             var chanel = cm.getChar().getClient().getChannel();
                var map = net.sf.odinms.net.channel.ChannelServer.getInstance(chanel).getMapFactory().getMap(280030000); 
                var playercount = map.playerCount(); 
                var mobcount = map.mobCount(); 
            if (cm.getSquadState(MapleSquadType.ZAKUM) == 2 & playercount == 0) {
                    cm.removeMapleSquad(MapleSquadType.ZAKUM);
                }else if (cm.getSquadState(MapleSquadType.ZAKUM) == 0) {
                cm.sendSimple("你想组建一个时间远征队吗？\r\n#b#L1#我想组建时间远征队#l\r\n\#L2#我还没准备好#l");
            } else if (cm.getSquadState(MapleSquadType.ZAKUM) == 1) {
                if (cm.checkSquadLeader(MapleSquadType.ZAKUM)) {
                    cm.sendSimple("你想要做什么呢?\r\n#b#L1#查看目前成员#l\r\n#L2#关闭申请#l\r\n#L3#开始战斗!#l\r\n#L4#解散远征队\r\n");
                                        status = 19;
                } else if (cm.isSquadMember(MapleSquadType.ZAKUM)) {

                var noOfChars = cm.numSquadMembers(MapleSquadType.ZAKUM);

                var toSend1 = "";

                for (var w = 1; w <= 1; w++) {
                    toSend1 += "总申请人数为:";
                    toSend1 += "#b";
                    toSend1 += noOfChars;
                    toSend1 += "名#k"
                    toSend1 += ",申请者列表如下:\r\n";
                }

                var toSend = "";
                for (var i = 1; i <= 1; i++) {
                    toSend += i;
                    toSend += "号 :#b ";
                    toSend += cm.getSquadMember(MapleSquadType.ZAKUM, i - 1).getName();
                    toSend += "#k (远征队长)";
                    toSend += "\r\n";
                }
        var toSend2 = "";
                for (var e = 2; e <= noOfChars; e++) {
                    toSend2 += e;
                    toSend2 += "号 : ";
                    toSend2 += cm.getSquadMember(MapleSquadType.ZAKUM, e - 1).getName();
                    toSend2 += "\r\n";
                }
                cm.sendSimple(toSend1+toSend+toSend2);
                    cm.dispose();
                } else {
                    cm.sendSimple("你想加入时间远征队吗？\r\n#b#L1#是的，我已经准备好#l\r\n\#L2#不，我想在等等...#l");
                    status = 9;
                }
            } else {
                if (cm.checkSquadLeader(MapleSquadType.ZAKUM)) {
                    cm.sendSimple("你想要做什么呢？\r\n\r\n#L1#查看目前成员#l\r\n#L2#打开申请#l\r\n#L3#开始战斗!#l\r\n#L4#解散远征队\r\n");
                    
                    status = 19;
                } else if (cm.isSquadMember(MapleSquadType.ZAKUM)) {


                if (cm.getSquadState(MapleSquadType.ZAKUM) == 2) {
                    if (mobcount == 0) {
                    cm.warp(280030000,0);
                    cm.dispose(); 
                    } else {
                    cm.sendOk("战斗已经开始了，您不能在进入！！");
                    cm.dispose(); 
                    }
                } else {
                var noOfChars = cm.numSquadMembers(MapleSquadType.ZAKUM);

                var toSend1 = "";

                for (var w = 1; w <= 1; w++) {
                    toSend1 += "总申请人数为:";
                    toSend1 += "#b";
                    toSend1 += noOfChars;
                    toSend1 += "名#k"
                    toSend1 += ",申请者列表如下:\r\n";
                }

                var toSend = "";

                for (var i = 1; i <= 1; i++) {
                    toSend += i;
                    toSend += "号 :#b ";
                    toSend += cm.getSquadMember(MapleSquadType.ZAKUM, i - 1).getName();
                    toSend += "#k (远征队长)";
                    toSend += "\r\n";
                }
        var toSend2 = "";
                for (var e = 2; e <= noOfChars; e++) {
                    toSend2 += e;
                    toSend2 += "号 : ";
                    toSend2 += cm.getSquadMember(MapleSquadType.ZAKUM, e - 1).getName();
                    toSend2 += "\r\n";
                }
                cm.sendOk(toSend1+toSend+toSend2);
                    cm.dispose();
                }
                } else {
                    cm.sendOk("很抱歉，远征队可能已经开始战斗或者队长已关闭申请。再试下一次。");
                    cm.dispose();
                }
            }
        } else if (status == 1) {
            if (selection == 1) {
                if (cm.createMapleSquad(MapleSquadType.ZAKUM) != null) {
                    cm.getPlayer().getMap().broadcastMessage(MaplePacketCreator.serverNotice(6, "" + cm.getPlayer().getName() + "创建了时间远征队. 愿意参加远征队的，请立即申请！"));
                    cm.sendOk("时间远征队已经创建成功, 告诉你的组员马上申请加入！\r\n\r\n点我查看组员名单，关闭申请或者开始战斗！");
                    cm.dispose(); 
                } else {
                    cm.sendOk("这里是个错误，有人可能已经建立了一个时间远征队.如果并非如此，请GM报告错误！");
                    cm.dispose();
                }
            } else if (selection == 2) {
                cm.sendOk("好吧，不是人人都有勇气挑战扎昆的。");
                cm.dispose();
            }
          } else if (status == 10) {
            if (selection == 1) {
                if (cm.numSquadMembers(MapleSquadType.ZAKUM) > 29) {
                    cm.sendOk("对不起，时间远征队人数已满。");
                    cm.dispose();
                } else {
                    if (cm.canAddSquadMember(MapleSquadType.ZAKUM)) {
                        cm.addSquadMember(MapleSquadType.ZAKUM);
                        cm.sendOk("您已经申请了，请等待队长的进一步指示！");
                        cm.dispose();
                    } else {
                        cm.sendOk("对不起，远征队长不允许你加入！");
                        cm.dispose();
                    }
                }
            } else if (selection == 2) {
                cm.sendOk("好吧，不是人人都有勇气挑战扎昆的。");
                cm.dispose();
            }
        } else if (status == 20) {
            if (selection == 1) {
                var noOfChars = cm.numSquadMembers(MapleSquadType.ZAKUM);

                var toSend1 = "";

                for (var w = 1; w <= 1; w++) {
                    toSend1 += "总申请人数为:";
                    toSend1 += "#b";
                    toSend1 += noOfChars;
                    toSend1 += "名#k"
                    toSend1 += ",申请者列表如下:\r\n";
                }

                var toSend = "";

                for (var i = 1; i <= 1; i++) {
                    toSend += "#L";
                    toSend += i;
                    toSend += "#";
                    toSend += i;
                    toSend += "号 : #b";
                    toSend += cm.getSquadMember(MapleSquadType.ZAKUM, i - 1).getName();
                    toSend += " #k(远征队长)#l";
                    toSend += "\r\n";
                }
        var toSend2 = "";
                for (var e = 2; e <= noOfChars; e++) {
                    toSend2 += "#L";
                    toSend2 += e;
                    toSend2 += "#";
                    toSend2 += e;
                    toSend2 += "号 : ";
                    toSend2 += cm.getSquadMember(MapleSquadType.ZAKUM, e - 1).getName();
                    toSend2 += "#l";
                    toSend2 += "\r\n";
                }
                
                cm.sendSimple(toSend1+toSend+toSend2);
            } else if (selection == 2) {
                if (cm.getSquadState(MapleSquadType.ZAKUM) == 1) {
                    cm.setSquadState(MapleSquadType.ZAKUM, 2);
                    cm.sendOk("申请已经关闭，请点我开始战斗或打开它们。");
                } else {
                    cm.setSquadState(MapleSquadType.ZAKUM, 1);
                    cm.sendOk("申请已经打开，请点我开始战斗或关闭它们。");
                }
                                cm.dispose();
            } else if (selection == 3) {
                if (cm.numSquadMembers(MapleSquadType.ZAKUM) < 1) {
                    cm.sendOk("您至少需要5名组员，以便能够启动任务！");
                    cm.dispose();
                } else {
                    
                    cm.sendOk("现在我将带你和你的队员到#r神的黄昏#k");

                    status = 29;
                }
            } else if (selection == 4) {
                if (cm.checkSquadLeader(MapleSquadType.ZAKUM)) {
                    cm.removeMapleSquad(MapleSquadType.ZAKUM);
                } else { 
                    cm.dispose();
                }
            }
        } else if (status == 21) {
            if (selection > 1) {
                    cm.mapMessage(6,"[注意]：队员"+ cm.getSquadMember(MapleSquadType.ZAKUM, selection - 1).getName() + "已经被远征队长踢除!");
                    cm.removeSquadMember(MapleSquadType.ZAKUM, selection - 1, false);
                    cm.sendOk("已经把该玩家踢出！.");
                    cm.dispose();
            } else {
                if (cm.getSquadState(MapleSquadType.ZAKUM) == 1) {
                    //cm.sendSimple("你想做什么呢?\r\n\r\n#L1#查看目前成员#l\r\n#L2#关闭申请#l\r\n#L3#开始战斗!#l");
                    cm.sendSimple("你想要做什么呢?\r\n#b#L1#查看目前成员#l\r\n#L2#关闭申请#l\r\n#L3#开始战斗!#l\r\n#L4#解散远征队\r\n");
                } else {
                    cm.sendSimple("你想做什么呢?\r\n\r\n#L1#查看目前成员#l\r\n#L2#打开申请#l\r\n#L3#开始战斗!#l\r\n#L4#解散远征队\r\n");
                }
                status = 19;
            }
        } else if (status == 30) {
            cm.setSquadState(MapleSquadType.ZAKUM, 2);
            cm.getPlayer().getMap().broadcastMessage(MaplePacketCreator.serverNotice(6, "" + cm.getPlayer().getName() + "（远征队长）已经进入了神的黄昏. 现在你可以点击<时间管理员>进入神的黄昏！！"));
            cm.warp(270050101,0);
            cm.dispose();
            
        }
    }
}

