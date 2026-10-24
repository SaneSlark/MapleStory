// 任务条件、奖励与交接由原生助手处理；通用对话流程见quest/legacy.js。
var activityId = 9251, activityMenu = null;
function activityFlow() {
    if (activityMenu == null) {
        var reader = new java.util.Scanner(new java.io.File("scripts/quest/legacy.js"), "GBK");
        try { activityMenu = eval(String(reader.useDelimiter("(?!)").next()))(qm, activityId); }
        finally { reader.close(); }
    }
    return activityMenu;
}
function start(mode, type, selection) { activityFlow().start(mode, type, selection); }
function end(mode, type, selection) { activityFlow().end(mode, type, selection); }
