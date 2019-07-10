const iPort = process.env.PORT || 5000;

var oExpress = require('express');
var oApp = oExpress();

oApp.use(oExpress.static(__dirname + '/public'));

oApp.listen(iPort, function(){
	console.log("Port in environment variables (Node.js): "+process.env.PORT);
	console.log("Example: Accessing the Java environment variable: "+process.env.JAVA_HOME);
    console.log('Port: '+iPort);
});