var http = require('http');

// Roll to see if monster moves north, south, east, or west
var rollDice;
var monsterPosition;
var newmonsterPosition;
monsterPosition = 0;
var another;
setInterval(function(){
	rollDice = Math.floor((Math.random()*4)+1);
  	switch (rollDice) {
	case 1:
	// North
	monsterPosition -= 20;
	break;
	case 2:
	// East
	monsterPosition += 1;
	break;
	case 3:
	// South
	monsterPosition += 20;
	break;
	case 4:
	// West
	monsterPosition -= 1;
	newmonsterPosition = { position: 4 };
	break;
};

},6);

http.createServer(function (req, res) {
var amonsterPosition = 15;
	var newmonsterPosition = { name: "monster0", position: monsterPosition, shit: "fuck" };
  res.writeHead(200, {"Content-Type": "application/json"});
//  var otherArray = ["item1", "item2"];
  var otherObject = { item1: "item1val", item2: "item2val" };

  var json = JSON.stringify({ 

   another: Math.floor((Math.random()*1000)+1),
   payload: newmonsterPosition,
   testobj: otherObject
  }, null, 4);
  res.end(json);

}).listen(3000, "127.0.0.1");
console.log('Server running');
