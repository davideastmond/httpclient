var https = require("https");

var params = {
  host: "www.example.com",
  path: "/"
};

// Call back function

function callback(response) {
  console.log("In response handler callback!");
  response.on('data', function(chunk) {
    console.log("[-- CHUNK of LENGTH " + chunk.length + " --]");
    console.log(chunk.toString());
  });
}

console.log("About to make request...");

https.request(params, callback).end();

console.log("I've made the request");