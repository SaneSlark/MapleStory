// Catalog and prices: bundled SQL/shops.sql + SQL/shopitems.sql (v072, 2016-10-28).
// Client resource filtering is required; no database catalog rows are changed.
var opened = false;
var catalog = [[1492006, 130000], [1492005, 80000], [1482006, 120000], [1482005, 80000], [1472007, 24000], [1472004, 12000], [1462005, 200000], [1462004, 160000], [1452007, 300000], [1452006, 200000], [1442009, 180000], [1442003, 140000], [1432005, 180000], [1432003, 140000], [1422007, 200000], [1422008, 160000], [1412005, 200000], [1412004, 160000], [1402007, 360000], [1402006, 280000], [1372000, 320000], [1372001, 140000], [1332011, 340000], [1332014, 300000], [1332001, 160000], [1322016, 140000], [1322015, 80000], [1312007, 140000], [1312006, 80000], [1302009, 180000], [1302004, 80000]];

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (opened) return;
    if (mode != 1) { cm.dispose(); return; }
    opened = true;
    var npc = 2020001;
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
