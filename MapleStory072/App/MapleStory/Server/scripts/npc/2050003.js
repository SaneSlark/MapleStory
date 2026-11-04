// Catalog and prices: bundled SQL/shops.sql + SQL/shopitems.sql (v072, 2016-10-28).
// Client resource filtering is required; no database catalog rows are changed.
var opened = false;
var catalog = [[1002625, 50000], [1052113, 100000], [1052110, 75000], [1061069, 82000], [1061070, 82000], [1060072, 82000], [1060071, 82000], [1060052, 72000], [1060050, 72000], [1060051, 72000], [1051009, 74000], [1051008, 74000], [1051007, 74000], [1041074, 90000], [1041075, 90000], [1040083, 90000], [1040082, 90000], [1040061, 76000], [1040062, 76000], [1040063, 76000], [1002180, 50000], [1002179, 50000], [1002178, 50000], [1002177, 50000], [1002176, 50000], [1061080, 82000], [1061081, 82000], [1061062, 72000], [1061060, 72000], [1061064, 72000], [1061061, 72000], [1060069, 82000], [1060070, 82000], [1060063, 72000], [1060061, 72000], [1060065, 72000], [1060062, 72000], [1041081, 90000], [1041082, 90000], [1041067, 76000], [1041065, 76000], [1041069, 76000], [1041066, 76000], [1040079, 90000], [1040081, 90000], [1040076, 76000], [1040074, 76000], [1040073, 76000], [1040072, 76000], [1002137, 50000], [1002135, 50000], [1002139, 50000], [1002138, 50000], [1061047, 80000], [1061048, 80000], [1051027, 100000], [1051024, 100000], [1051025, 100000], [1051023, 100000], [1050037, 100000], [1050036, 100000], [1050038, 100000], [1050035, 100000], [1050002, 70000], [1050031, 70000], [1041051, 80000], [1041052, 80000], [1002144, 48000], [1002143, 48000], [1002142, 48000], [1002141, 48000], [1092002, 100000], [1092001, 50000], [1061084, 85000], [1061083, 85000], [1060074, 85000], [1060075, 85000], [1051014, 75000], [1051001, 75000], [1050021, 75000], [1050000, 75000], [1041085, 100000], [1041084, 100000], [1040085, 100000], [1040000, 100000], [1002004, 80000]];

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (opened) return;
    if (mode != 1) { cm.dispose(); return; }
    opened = true;
    var npc = 2050003;
    var factory = Packages.server.shops.MapleShopFactory.getInstance();
    var existing = factory.getShopForNPC(npc);
    if (existing != null) {
        var items = existing.getItems();
        for (var i = 0; i < items.size(); i++) {
            if (items.get(i).getPrice() > 0 || items.get(i).getReqItem() > 0) {
                cm.dispose();
                existing.sendShop(cm.getClient());
                return;
            }
        }
    }
    var ii = Packages.server.MapleItemInformationProvider.getInstance();
    var shop = new Packages.server.shops.MapleShop(npc, npc);
    var listed = {};
    for (var j = 0; j < catalog.length; j++) {
        var id = catalog[j][0];
        if (!listed[id] && ii.itemExists(id) && ii.itemExistsInClient(id)) {
            shop.addItem(new Packages.server.shops.MapleShopItem(1000, id, catalog[j][1]));
            listed[id] = true;
        }
    }
    if (existing != null) {
        var metadata = existing.getItems();
        for (var k = 0; k < metadata.size(); k++) {
            var item = metadata.get(k);
            if (!listed[item.getItemId()]) shop.addItem(item);
        }
    }
    cm.dispose();
    shop.sendShop(cm.getClient());
}
