// Compatibility exit: the original sb_out binding exists, but its server script was missing.
function enter(pi) {
    if (pi.getMapId() != 709000100) return false;
    pi.playPortalSE();
    pi.warp(701000000, 0);
    return true;
}
