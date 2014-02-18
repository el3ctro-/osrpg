var http = require('http');
var avar;
var another;
function compute() {
another += 25;
}

http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "application/json"});
//  var otherArray = ["item1", "item2"];
  var otherObject = { item1: "item1val", item2: "item2val" };
  var json = JSON.stringify({ 
//    anObject: otherObject, 
//    anArray: otherArray, 
   another: Math.floor((Math.random()*1000)+1)
  });
  var avar = 250;
  compute();
  res.end(json);

}).listen(3000, "127.0.0.1");
console.log('Server running');
