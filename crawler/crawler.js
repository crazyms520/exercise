var request = require("request");
request({
    url: "http://parkinglocation.tbkc.gov.tw/getjson.ashx",
    method: "GET"
  }, function(e,r,b) { /* Callback Function */
    /* e: error code */
    /* b: reponse data */
    var reponse = JSON.parse(b)
    console.log(reponse.length);
    console.log(reponse[0]);
});
