// CMS returnMap=120000101; leave the skill trial without changing quest state.
function enter(pi) {
    if (pi.getMapId() != 925010300) return false;
    pi.warp(120000101, "sp");
    return true;
}
