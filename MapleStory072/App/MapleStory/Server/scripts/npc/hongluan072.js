// Hong Luan native NPC bindings; marriage compatibility, no invented gifts.
var service=Packages.server.quest.HongLuan072,closed=false,stage=0,chosen=-1,origin=-1,npc=-1;
function finish(){closed=true;cm.dispose();}
function valid(){return cm.getNpc()==npc && cm.getMapId()==origin && cm.getMap().containsNPC(npc);}
function start(){origin=cm.getMapId();npc=cm.getNpc();if(!valid()){finish();return;}
 if(npc==9300005 && origin==700000000){closed=true;cm.dispose();cm.openShop(9300005);return;}
 if(npc==9300007 && origin==700000000){cm.sendSimple("红鸾宫入口\r\n\r\n#b#L0#两人组队进入红鸾殿#l\r\n#L1#结婚条件说明#l\r\n#L2#凭请柬进入宴客堂#l\r\n#L3#进入孤星殿办理离婚#l\r\n#L4#离开红鸾宫，前往#m211000000##l#k");return;}
 if(npc==9300003 && origin==700000100){cm.sendSimple("月下老人\r\n\r\n#b#L10#本人确认结婚，开始／继续仪式#l\r\n#L11#婚礼已完成，前往宴客堂#l\r\n#L12#返回入口#l#k");return;}
 if(npc==9300004 && origin==700000101){cm.sendSimple("法海师傅\r\n\r\n解除婚姻需支付100万冒险币。为避免误改离线记录，伴侣须在线且不在其他交互中；只移除双方配对的结婚戒指，其他戒指保留。\r\n#b#L20#确认申请解除婚姻#l\r\n#L12#返回入口#l#k");return;}
 if((npc==9300008&&origin==700000100)||(npc==9300010&&origin==700000101)||(npc==9300009&&origin==700000200)){stage=1;chosen=12;cm.sendYesNo("要返回红鸾宫入口吗？");return;}
 if(npc==9300006&&origin==700000200){cm.sendOk("欢迎来到宴客堂！今天不提供蛋糕购买。离开请找六欲法师。");finish();return;}
 cm.sendOk("请在对应的红鸾宫地图与我对话。");finish();}
function action(mode,type,selection){if(closed)return;if(mode!=1||!valid()){finish();return;}
 if(stage==0){chosen=selection;
  if(selection==1&&npc==9300007){cm.sendOk("请两位未完成婚礼的恋人组队，由队长申请。双方需戴好彼此配对的恋人戒指，并穿婚服。男士1050121／1050122／1050113，女士1051129／1051130／1051114。\r\n\r\n进入后双方分别向月下老人确认，约20秒完成仪式，成功时由队长支付10万登记费。红鸾殿最多使用5分钟；失败或取消不扣登记费。红线女出售两款原有婚服。");finish();return;}
  if(!((npc==9300007&&selection>=0&&selection<=4)||(npc==9300003&&selection>=10&&selection<=12)||(npc==9300004&&(selection==20||selection==12)))){finish();return;}
  stage=1;cm.sendYesNo(selection==20?"确定解除婚姻并支付100万冒险币吗？双方配对的结婚戒指会移除，请慎重选择。":selection==10?"我确认与当前配对的伴侣结婚。双方确认并完成仪式后，才扣队长10万登记费。确定吗？":"确定继续吗？");return;
 }
 closed=true;
 if(chosen==0&&npc==9300007){var error=service.enter(cm.getPlayer());if(error!=null)cm.sendOk(String(error));cm.dispose();return;}
 if(chosen==10&&npc==9300003){cm.sendOk(String(service.consent(cm.getPlayer())));cm.dispose();return;}
 if(chosen==11&&npc==9300003){if(!service.banquet(cm.getPlayer()))cm.sendOk("请先完成婚礼，并确保伴侣和你仍在本图组队。");cm.dispose();return;}
 if(chosen==20&&npc==9300004){cm.sendOk(service.divorce(cm.getPlayer())?"婚姻关系已解除。":"办理失败：请检查婚姻关系、100万金币及伴侣在线状态。本次未扣款。");cm.dispose();return;}
 if(chosen==2&&npc==9300007){if(cm.getMap(700000100).getCharactersSize()+cm.getMap(700000200).getCharactersSize()==0||!cm.haveItem(4000463,1)){cm.sendOk("需要1张请柬，且婚礼场地正在使用，才能进入宴客堂。");cm.dispose();return;}cm.gainItem(4000463,-1);cm.warp(700000200,0);cm.dispose();return;}
 if(chosen==3&&npc==9300007){if(cm.getPlayer().getMarriageId()<=0){cm.sendOk("你目前没有可解除的婚姻关系。");cm.dispose();return;}cm.warp(700000101,0);cm.dispose();return;}
 if(chosen==4&&npc==9300007){cm.warp(211000000,0);cm.dispose();return;}
 if(chosen==12){cm.warp(700000000,0);cm.dispose();return;}
 cm.dispose();}
