var https = require("https");

var params = {
  host: "www.example.com",
  path: "/"
};

// Call back function

function callback() {
  console.log("In response handler callback!");
}

console.log("About to make request...");

https.request(params, callback).end();

console.log("I've made the request");