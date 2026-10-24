(function (cm, definitions, originalStart, originalAction, greeting) {
    var helper = Packages.net.sf.odinms.scripting.npc.LegacyActivityQuests;
    var npc = Number(cm.getNpc()), choices = [], services = {}, original = false, ready = false;

    function showOriginal() {
        if (originalStart) { original = true; originalStart(); }
        else { cm.sendOk(greeting); cm.dispose(); }
    }

    return {
        start: function () {
            choices = []; services = {}; original = false; ready = true;
            var menu = "请选择任务：";
            for (var i = 0; i < definitions.length; i++) {
                var d = definitions[i], state = cm.getQuestStatus(d.id).getId();
                if (d.endNpc == npc && state == 1) {
                    menu += "\r\n#L" + choices.length + "#[交付] " + d.name + "#l";
                    choices.push({id: d.id, end: true});
                } else if (d.startNpc == npc && helper.canStart(cm.getC(), d.id, npc)) {
                    menu += "\r\n#L" + choices.length + "#[接取] " + d.name + "#l";
                    choices.push({id: d.id, end: false});
                }
            }
            function service(id, label, run) { menu += "\r\n#L" + id + "#" + label + "#l"; services[id] = run; }
            if (npc == 9000021 && cm.getPlayer().getLevel() >= 10)
                service(99998, "前往幸福村（常驻圣诞任务）", function () { if (cm.getPlayer().getLevel() >= 10) cm.warp(209000000, 0); });
            if ((npc == 9250051 || npc == 9250052) && cm.getPlayer().getLevel() >= 10)
                service(99995, "前往雪人村收集圣诞材料", function () { if (cm.getPlayer().getLevel() >= 10) cm.warp(209080000, 0); });
            if (npc == 9220005 && cm.getPlayer().getMapId() == 209080000)
                service(99998, "返回幸福村", function () { if (cm.getPlayer().getMapId() == 209080000) cm.warp(209000000, 0); });
            if (npc == 9250051)
                service(99997, "补领遗失的圣诞袜", function () {
                    var ok = Packages.net.sf.odinms.scripting.npc.ChristmasQuests.recoverSocks(cm.getC());
                    cm.sendOk(ok ? "圣诞袜已在背包中。" : "只有已完成制作、且尚未挂上圣诞袜的冒险家可以补领，请先留出背包空位。");
                });
            if (npc == 9220005)
                service(99996, "补领任务中的热牛奶", function () {
                    var ok = Packages.net.sf.odinms.scripting.npc.ChristmasQuests.recoverMilk(cm.getC());
                    cm.sendOk(ok ? "任务热牛奶已在背包中。" : "请先接取外卖热牛奶任务，并留出背包空位。");
                });
            if (npc == 2001000)
                service(99994, "补领寻找圣诞鹿的魔法拐杖", function () {
                    var ok = Packages.net.sf.odinms.scripting.npc.ChristmasQuests.recoverWand(cm.getC());
                    cm.sendOk(ok ? "魔法拐杖已在背包中。" : "请先接取寻找圣诞鹿任务，并在消耗栏留出空位；已经带回圣诞鹿时无需补领。");
                });
            if (choices.length == 0 && menu == "请选择任务：") { ready = false; showOriginal(); return; }
            if (originalStart) menu += "\r\n#L99999#[原有服务与其他任务]#l";
            cm.sendSimple(menu);
        },
        action: function (mode, type, selection) {
            if (original) { if (originalAction) originalAction(mode, type, selection); else cm.dispose(); return; }
            if (mode != 1 || !ready) { ready = false; cm.dispose(); return; }
            if (services[selection]) { ready = false; services[selection](); cm.dispose(); return; }
            if (selection == 99999 && originalStart) { ready = false; showOriginal(); return; }
            if (selection < 0 || selection >= choices.length || selection != Math.floor(selection)) { ready = false; cm.dispose(); return; }
            var d = choices[selection]; ready = false;
            if (d.end ? cm.getQuestStatus(d.id).getId() != 1 : !helper.canStart(cm.getC(), d.id, npc)) { cm.dispose(); return; }
            var client = cm.getC(); cm.dispose();
            var manager = Packages.net.sf.odinms.scripting.quest.QuestScriptManager.getInstance();
            if (d.end) manager.end(client, npc, d.id);
            else manager.start(client, npc, d.id);
        }
    };
})
