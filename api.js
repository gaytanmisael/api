var request = require('request');

var requestData = {
    "name": "",
    "email": "",
    "phoneNumber": "",
    "resume": ""
};

var url = "https://asm-resumator.azurewebsites.net/resumes";

request({
  url: url,
  method: "POST",
  json: requestData
}, function(error, response, body){
  if (!error && response.statusCode === 200) {
    console.log(body)
  }
  else {
    console.log("error: " + error)
    console.log("response.statusCode: " + response.statusCode)
    console.log("response.statusText: " + response.statusText)
  }
});
