var done=false;
function start(){done=false;cm.sendYesNo("将当前职业及其前置职业的可学习技能加满。是否确认？");}
function action(mode,type,selection){if(done)return;done=true;if(mode==1){cm.maxSkillsByJob();cm.sendOk("当前职业的可学习技能已加满。");}cm.dispose();}
