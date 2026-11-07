var done=false;
function start(){cm.sendSimple("七把钥匙放在大宝箱前可以取得火矿石。队长交付火矿石可完成矿洞探索；另带30份文件可领取额外奖励。\r\n#L0#交付火矿石，完成任务#l\r\n#L1#放弃并离开矿洞#l");}
function action(mode,type,selection){if(done)return;done=true;var e=cm.getEventInstance();if(mode!=1||cm.getMapId()!=280010000||e==null||e.getEventManager().getName()!="ZakumPQ"){cm.dispose();return;}if(selection==0){if(!e.getEventManager().getIv().invokeFunction("settle",e,cm))cm.sendOk("请由队长交付火矿石，并确认所有队员的奖励空间。");}else if(selection==1)e.getEventManager().getIv().invokeFunction("playerExit",e,cm.getPlayer());cm.dispose();}
