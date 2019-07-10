var oExpress = require('express');
var oApp = oExpress();
var iPort = process.env.PORT || 5000;

oApp.use(oExpress.static(__dirname + '/public'));

oApp.listen(iPort, function(){
    console.log('Port: '+iPort);
});