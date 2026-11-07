// CMS072 gate: preserve fire eye for the altar's native item reactor.
function enter(pi){var p=pi.getPlayer();if(pi.getMapId()!=211042300)return false;var em=pi.getEventManager("ZakumBattle");if(em==null||String(em.getIv().invokeFunction("admit",p))!="true"){pi.playerMessage(5,"需要50级以上并携带火焰的眼；召唤开始后不能进入祭坛。");return false;}return true;}
