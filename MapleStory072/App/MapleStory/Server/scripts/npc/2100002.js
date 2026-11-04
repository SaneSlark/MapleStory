// Catalog and prices: bundled SQL/shops.sql + SQL/shopitems.sql (v072, 2016-10-28).
// Client resource filtering is required; no database catalog rows are changed.
var opened = false;
var catalog = [[1492004, 50000], [1482004, 52000], [1472001, 8000], [1462000, 30000], [1452005, 120000], [1442001, 45000], [1432002, 45000], [1422001, 40000], [1412006, 45000], [1402002, 120000], [1382002, 20000], [1372003, 38000], [1332012, 40000], [1332009, 42000], [1322014, 40000], [1312005, 40000], [1302008, 40000]];

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (opened) return;
    if (mode != 1) { cm.dispose(); return; }
    opened = true;
    var npc = 2100002;
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
