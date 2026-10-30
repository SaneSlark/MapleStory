// CMS072 map resources: preserve entry/return destination, no activity reward.
function enter(pi) {
    if (pi.getMapId() != 229030100) return false;
    pi.warp(229030300, 0);
    return true;
}
