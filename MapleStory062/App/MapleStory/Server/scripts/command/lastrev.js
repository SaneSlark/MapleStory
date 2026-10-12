/*
-- odinms JavaScript --
        NPC脚本 
-------------------------
   odinms MapleStory
----- Version Info ------
     Version - 1.0.0 
-------------------------
*/

importPackage(java.lang);
importPackage(java.io);

importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.client.messages);
importPackage(net.sf.odinms.server);

function getDefinition () {
	var ret = java.lang.reflect.Array.newInstance(CommandDefinition, 1);
	ret[0] = new CommandDefinition("revinfo", "", "显示最新版本信息。", "1"); 
	return ret;
}

function execute (c, mc, splitted) {
	var file = new File("lastrev.txt");
	
	var input =  new BufferedReader(new FileReader(file));
	try {
		var line = null;
		while (( line = input.readLine()) != null) {
			mc.dropMessage(line);
        	}
      	} finally {
		input.close();
	}
}
