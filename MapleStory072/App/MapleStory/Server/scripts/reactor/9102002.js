// Seed pair/chance from bundled v072 SQL/reactordrops.sql, scoped to this PQ.
function act() {
    if (rm.getMap().getId() != 910010000) { rm.dropItems(); return; }
    var eim = rm.getEventInstance();
    if (eim == null || eim.getProperty("phase") != "flowers" || eim.getMapInstance(0) != rm.getMap()) return;
    var seeds = [4001100, 4001095];
    for (var i = 0; i < seeds.length; i++) if (Packages.server.Randomizer.nextInt(3) == 0) rm.dropSingleItem(seeds[i]);
}
