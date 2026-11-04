// Catalog and prices: bundled SQL/shops.sql + SQL/shopitems.sql (v072, 2016-10-28).
// Client resource filtering is required; no database catalog rows are changed.
var opened = false;
var catalog = [[1052107, 60000], [1002622, 30000], [1061046, 40000], [1061045, 40000], [1061044, 40000], [1061043, 40000], [1060046, 40000], [1060045, 40000], [1060044, 40000], [1060043, 40000], [1041050, 45000], [1041049, 45000], [1041048, 45000], [1041047, 45000], [1040060, 45000], [1040059, 45000], [1040058, 45000], [1040057, 45000], [1002175, 30000], [1002174, 30000], [1002173, 30000], [1002172, 30000], [1002171, 30000], [1061051, 44000], [1061050, 44000], [1061052, 44000], [1060057, 44000], [1060056, 44000], [1060058, 44000], [1060059, 44000], [1041055, 50000], [1041054, 50000], [1041056, 50000], [1040068, 50000], [1040067, 50000], [1040070, 50000], [1040069, 50000], [1002165, 30000], [1002164, 30000], [1002163, 30000], [1002162, 30000], [1002161, 30000], [1061036, 40000], [1061035, 40000], [1061034, 40000], [1050028, 40000], [1050027, 40000], [1050026, 40000], [1050003, 40000], [1041043, 42000], [1041042, 42000], [1041041, 42000], [1002064, 20000], [1092006, 30000], [1060019, 38000], [1060018, 38000], [1060017, 38000], [1060016, 38000], [1051013, 60000], [1051012, 60000], [1051011, 60000], [1051010, 60000], [1040026, 40000], [1040021, 40000], [1002023, 60000], [1002004, 80000]];

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (opened) return;
    if (mode != 1) { cm.dispose(); return; }
    opened = true;
    var npc = 2100003;
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
