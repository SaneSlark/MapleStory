/* CMS HontalePQ choice cave; use the target party-warp API. */
function enter(pi) {
    var eim=pi.getPlayer().getEventInstance();
    if(eim==null)return false;
    var choice=eim.getProperty("choiceCave");
    if(choice==null)return false;
    pi.warpParty(String(choice)=="0"?240050300:240050310,0);
    return true;
}
