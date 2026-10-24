function enter(pi){
 var ok=Packages.net.sf.odinms.scripting.npc.ChristmasQuests.photo(pi.getPlayer().getClient());
 pi.getPlayer().dropMessage(5,ok?"已经拍下照片，请将照片交给托尔。":"这里可以拍摄圣诞树照片，请先接取托尔的拍照任务，并留出背包空位。");
 return false;
}
