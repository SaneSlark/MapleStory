/* CMS crane binding. Fare/time explicitly set by the user: 1500 / 60s. */
var fare = 1500;
var flightSeconds = 60;
var origin = -1;
var routes = [];
var selected = -1;
var stage = "closed";
var em;

function start() {
    stage = "closed";
    selected = -1;
    routes = [];
    origin = cm.getChar().getMapId();
    em = cm.getEventManager("Hak");
    if (origin == 200000141) {
        routes = [[250000100, "武陵", 200090300]];
    } else if (origin == 250000100) {
        routes = [[200000100, "天空之城", 200090310], [251000000, "百草堂", 200090310]];
    } else if (origin == 251000000) {
        routes = [[250000100, "武陵", 200090300]];
    } else {
        cm.sendOk("这里不是仙鹤的乘坐地点。");
        cm.dispose();
        return;
    }
    if (em == null) {
        cm.sendOk("仙鹤航班暂未开放，请稍后再来。");
        cm.dispose();
        return;
    }
    if (routes.length == 1) {
        selected = 0;
        confirmRoute();
    } else {
        stage = "select";
        var text = "请选择目的地。每次乘坐需要 #b1500 金币#k，飞行时间为 #b60 秒#k。\r\n";
        for (var i = 0; i < routes.length; i++) text += "#L" + i + "#" + routes[i][1] + "#l\r\n";
        cm.sendSimple(text);
    }
}

function confirmRoute() {
    stage = "confirm";
    cm.sendYesNo("前往#b" + routes[selected][1] + "#k需要 #b1500 金币#k，飞行时间为 #b60 秒#k。现在出发吗？");
}

function action(mode, type, selection) {
    if (mode != 1 || stage == "closed") {
        stage = "closed";
        cm.dispose();
        return;
    }
    if (stage == "select") {
        if (selection < 0 || selection >= routes.length || selection != Math.floor(selection)) {
            stage = "closed";
            cm.dispose();
            return;
        }
        selected = selection;
        confirmRoute();
        return;
    }
    if (stage != "confirm") return;
    stage = "closed";
    var character = cm.getChar();
    if (character.getMapId() != origin || character.getEventInstance() != null) {
        cm.sendOk("请先结束当前活动，再从仙鹤乘坐地点出发。");
        cm.dispose();
        return;
    }
    if (cm.getMeso() < fare) {
        cm.sendOk("乘坐仙鹤需要1500金币，你的金币不足。");
        cm.dispose();
        return;
    }
    var eim = null;
    var charged = false;
    try {
        var factory = em.getChannelServer().getMapFactory();
        var destination = factory.getMap(routes[selected][0]);
        var departure = factory.getMap(origin);
        if (destination == null || departure == null || destination.getPortal(0) == null || departure.getPortal(0) == null) throw new Error("Missing crane endpoint");
        var instanceName = "Hak-" + character.getId() + "-" + Packages.java.lang.System.nanoTime();
        eim = em.newInstance(instanceName);
        eim.setProperty("origin", String(origin));
        eim.setProperty("destination", String(routes[selected][0]));
        eim.setProperty("ride", String(routes[selected][2]));
        eim.setProperty("flightMap", String(routes[selected][2])); // native automatic-exit guard
        eim.setProperty("seconds", String(flightSeconds));
        eim.registerPlayer(character);
        if (String(eim.getProperty("entered")) != "true") throw new Error("Crane boarding failed");
        cm.gainMeso(-fare);
        charged = true;
    } catch (error) {
        if (eim != null) {
            eim.unregisterPlayer(character);
            if (character.getMapId() == routes[selected][2]) character.changeMap(departure, departure.getPortal(0));
            eim.dispose();
        }
        if (charged) cm.gainMeso(fare);
        cm.sendOk("仙鹤暂时无法起飞，请稍后再试。本次不会扣除金币。");
    }
    cm.dispose();
}
