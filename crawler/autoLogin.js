
var request = require("request");
request({
    url: "https://cloud.nueip.com/login",
    method: "GET"
  }, function(e,r,b) { /* Callback Function */
    /* e: error code */
    /* b: reponse data */
    !e?console.log(b):console.log(e);
    
});
