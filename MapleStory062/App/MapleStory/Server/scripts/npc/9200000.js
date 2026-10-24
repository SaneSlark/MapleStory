var status = 0; 
var maps = Array(100000005, 105070002, 800010100, 105090900, 682000001, 105090312, 240020101, 240020401, 230040420); 
var mapsname = Array("铁甲猪公园Ⅲ(蘑菇王)", "蘑菇王之墓(僵尸蘑菇王)", "天皇殿堂(蓝蘑菇王)", "被诅咒的寺院(蝙蝠怪)", "幻影森林(魔马)", "龙族之巢(大冰龙)","格瑞芬多森林(天鹰)", "喷火龙栖息地(肥龙)","皮亚奴斯(鱼王)"); 
var selectedMap = -1; 

function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
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
            cm.sendYesNo("嗨!我是首领怪物传送员,如果要欺负首领就来找我吧.."); 
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