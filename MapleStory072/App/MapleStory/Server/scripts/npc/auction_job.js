// 062 first-to-fourth job service, constrained to CMS072 adventurer jobs.
var done=false,choices=[],originalJob=0;
var jobs={"0": [100, 200, 300, 400, 500], "100": [110, 120, 130], "200": [210, 220, 230], "300": [310, 320], "400": [410, 420], "500": [510, 520], "110": [111], "111": [112], "120": [121], "121": [122], "130": [131], "131": [132], "210": [211], "211": [212], "220": [221], "221": [222], "230": [231], "231": [232], "310": [311], "311": [312], "320": [321], "321": [322], "410": [411], "411": [412], "420": [421], "421": [422], "510": [511], "511": [512], "520": [521], "521": [522]},names={"100": "战士", "200": "魔法师", "300": "弓箭手", "400": "飞侠", "500": "海盗", "110": "剑客", "120": "准骑士", "130": "枪战士", "210": "火毒法师", "220": "冰雷法师", "230": "牧师", "310": "猎人", "320": "弩弓手", "410": "刺客", "420": "侠客", "510": "拳手", "520": "火枪手", "111": "勇士", "121": "骑士", "131": "龙骑士", "211": "火毒巫师", "221": "冰雷巫师", "231": "祭司", "311": "游侠", "321": "狙击手", "411": "无影人", "421": "独行客", "511": "斗士", "521": "大副", "112": "英雄", "122": "圣骑士", "132": "黑骑士", "212": "火毒魔导师", "222": "冰雷魔导师", "232": "主教", "312": "神射手", "322": "箭神", "412": "隐士", "422": "侠盗", "512": "冲锋队长", "522": "船长"};
function start(){
    done=false;originalJob=cm.getJob();choices=jobs[originalJob]||[];
    var text="请选择转职职业：\r\n";
    for(var i=0;i<choices.length;i++)text+="#L"+i+"#"+names[choices[i]]+"#l\r\n";
    if(choices.length==0){done=true;cm.sendOk("当前职业没有下一次转职。");cm.dispose();return;}
    cm.sendSimple(text);
}
function action(mode,type,selection){
    if(done)return;done=true;
    if(mode!=1||selection<0||selection>=choices.length){cm.dispose();return;}
    var job=choices[selection],level=cm.getLevel();
    var minimum=originalJob==0?(job==200?8:10):(originalJob%10==0?(originalJob%100==0?30:70):120);
    if(cm.getJob()!=originalJob||level<minimum){cm.sendOk("需要等级"+minimum+"才能转职。");cm.dispose();return;}
    cm.changeJob(job);cm.sendOk("已经转职为"+names[job]+"。");cm.dispose();
}
