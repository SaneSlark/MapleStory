// CMS072 map resources: preserve entry/return destination, no activity reward.
function enter(pi) {
    if (pi.getMapId() != 702300000) return false;
    pi.warp(702300001, 0);
    return true;
}
