var status = 0; 
var maps = Array(103000105, 682000403, 251010402, 220060301, 240040600, 250020000, 230040400, 910500000, 910300000); 
var mapsname = Array("40-70(地铁，大幽灵)", "60-80(扯线娃娃)", "100-120(红鼻子海盗团老巢2 )", "120-140(亡灵海盗船)", "140-200(主巢穴山峰)", "50-70(初级修炼场)", "140-200(水下世界)", "异界弓箭手修炼场", "达克鲁的训练场"); 
var selectedMap = -1; 

function recoveredOriginalStart() { 
    status = -1; 
    action(1, 0, 0); 
} 

function recoveredOriginalAction(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else { 
        if (status >= 3 && mode == 0) { 
            cm.sendOk("好的,如果你决定要去哪里,我会很乐意传送你的."); 
            cm.dispose(); 
            return; 
        } 
        if (mode == 1) 
            status++; 
        else { 
            cm.sendOk("好的,如果你决定要去哪里,我会很乐意传送你的."); 
            cm.dispose(); 
            return; 
        } if (status == 0) { 
            cm.sendYesNo("你好，我是会员专用练级场传送！"); 
        } else if (status == 1) { 
            var selStr = "选择你的目的地.#b"; 
                for (var i = 0; i < maps.length; i++) { 
                selStr += "\r\n#L" + i + "#" + mapsname[ i ]+""; 
                } 
            cm.sendSimple(selStr); 
            
        } else if (status == 2) { 
            cm.sendYesNo("你真的要去 " + mapsname[selection] + "吗?"); 
            selectedMap = selection; 
        } 
        
        else if (status == 3) { 
            cm.warp(maps[selectedMap], 0); 
            cm.dispose(); 
        }
    }
}



// 活动菜单共用 legacy.js；本文件保留本NPC的任务和原有服务。
var recoveredDefs = [{"id":4488,"name":"外卖热牛奶","startNpc":9220005,"endNpc":1052106},{"id":4489,"name":"感谢的祝福","startNpc":1052106,"endNpc":9220005}];
var recoveredMenu = null;
function start() {
    var reader = new java.util.Scanner(new java.io.File("scripts/npc/legacy.js"), "GBK");
    try {
        var factory = eval(String(reader.useDelimiter("(?!)").next()));
        recoveredMenu = factory(cm, recoveredDefs, recoveredOriginalStart, recoveredOriginalAction, "暂时没有可以接取或交付的任务。");
    } finally { reader.close(); }
    recoveredMenu.start();
}
function action(mode, type, selection) {
    if (recoveredMenu) recoveredMenu.action(mode, type, selection);
    else cm.dispose();
}
