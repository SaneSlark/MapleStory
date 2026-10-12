   /* 
*@丶小_路. 
*/ 
var status = 0; 
var otherChar; 
var Char; 

importPackage(net.sf.odinms.client); 
importPackage(net.sf.odinms.server); 

function start(character3) { 
        status = -1; 
        action(1, 0, 0); 
        otherChar = character3; 
} 

function action(mode, type, selection) { 
        if (mode == -1) { 
                otherChar.getClient().getSession().write 
(net.sf.odinms.tools.MaplePacketCreator.serverNotice(1, "您的伴侣拒绝您的请求!")); 
                cm.dispose(); 
        } else { 
                if (mode == 0 && status == 0) { 
                        otherChar.getClient().getSession().write 
(net.sf.odinms.tools.MaplePacketCreator.serverNotice(1, "您的伴侣拒绝您的请求..")); 
                        cm.dispose(); 
                        return; 
                } 
                if (mode == 1) { 
                        status++; 
                } else { 
                        status--; 
                } 
                if (status == 0) { 
                        cm.sendNext("请组队来试试."); 
                } else if (status == 1) { 
                        var t = otherChar.getName(); 
                        cm.sendYesNo("你想不想参与 " + t + "的婚礼?") ; 
                } else if (status == 2) { 
                        otherChar.getClient().getSession().write 
(net.sf.odinms.tools.MaplePacketCreator.serverNotice(1, "您的伴侣接受了您的请求!")); 
                        otherChar.setMarriageQuestLevel(50); 
                        cm.getPlayer().setMarriageQuestLevel(50); 
                        cm.createEngagement(cm.getPlayer().getId(), otherChar.getId()); 
                        if (otherChar.countItem(2240000) > 0) { 
                                MapleInventoryManipulator.removeById(otherChar.getClient(), 
MapleInventoryType.USE, 2240000, 1, false, false); 
                                MapleInventoryManipulator.addById(otherChar.getClient(), 4031358, 1, "死去吧!"); 
                                MapleInventoryManipulator.addById(cm.getPlayer().getClient(), 4031358, 
1, "死去吧!"); 
                                MapleInventoryManipulator.addById(otherChar.getClient(), 4031357, 1, "死去吧!"); 
                        } else if (otherChar.countItem(2240001) > 0) { 
                                MapleInventoryManipulator.removeById(otherChar.getClient(), 
 MapleInventoryType.USE, 2240001, 1, false, false); 
                                MapleInventoryManipulator.addById(otherChar.getClient(), 4031360, 1, "死去吧!"); 
                                MapleInventoryManipulator.addById(cm.getPlayer().getClient(), 4031360, 
 1, "死去吧!"); 
                                MapleInventoryManipulator.addById(otherChar.getClient(), 4031359, 
 1, "死去吧!");                        
                        } else if (otherChar.countItem(2240002) > 0) { 
                                MapleInventoryManipulator.removeById(otherChar.getClient(), MapleInventoryType.USE, 2240002, 1, false, false); 
                                MapleInventoryManipulator.addById(otherChar.getClient(), 4031362, 1, "死去吧!"); 
                                MapleInventoryManipulator.addById(cm.getPlayer(), 4031362, 1, "死去吧!"); 
                                MapleInventoryManipulator.addById(otherChar.getClient(), 4031361, 1, "死去吧!"); 
                        } else if (otherChar.countItem(2240003) > 0) { 
                                MapleInventoryManipulator.removeById(otherChar.getClient(), 
MapleInventoryType.USE, 2240003, 1, false, false); 
                                MapleInventoryManipulator.addById(otherChar.getClient(), 4031364, 1, "死去吧!"); 
                                MapleInventoryManipulator.addById(cm.getPlayer(), 4031364, 1, "死去吧!"); 
                                MapleInventoryManipulator.addById(otherChar.getClient(), 4031363, 
1, "死去吧!");                        
                        } 
                        cm.dispose(); 
                } 
        } 
} 
