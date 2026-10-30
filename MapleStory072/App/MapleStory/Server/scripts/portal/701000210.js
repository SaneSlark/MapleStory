// CMS072 map resources: preserve entry/return destination, no activity reward.
function enter(pi) {
    if (pi.getMapId() != 701000210) return false;
    pi.warp(701000100, 0);
    return true;
}
