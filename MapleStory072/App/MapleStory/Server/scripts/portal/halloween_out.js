function enter(pi) {
	if (pi.getMapId() != 229010000) {
		return false;
	}
	// CMS compatibility exit: the imported 610010000 map is absent.
	pi.warp(100000000, 0);
	return true;
}
