var http = require('http');

// Player data
var players = [];
var playerdata;

// Monster data
var monsters = [];
var newmonsterPosition;
var whichmonster = 0;
var howmanymonsters = 4;
monsterdata = [];
monsterdata[0] = { name: "monster0", position: 15, hitpoints: 10 };
monsterdata[1] = {name: "monster1", position: 0, hitpoints: 10 };
monsterdata[2] = { name: "monster2", position: 0, hitpoints: 10 };
monsterdata[3] = { name: "monster3", position: 0, hitpoints: 10 };
var rollDice;
setInterval(function(){
	for (var i=0;i<howmanymonsters;i++) {
//monsterdata.push({name : "monster" + i, position: -= 20, hitpoints: 10});
	// Roll to see if monster moves north, south, east, or west
		rollDice = Math.floor((Math.random()*4)+1);
			switch (rollDice) {
			case 1:
			// North
			var newposition = monsterdata[i].position;
			newposition -= 20;
			monsterdata[i] = ({name : "monster" + i, position: newposition, hitpoints: 10});
			break;
			case 2:
			// East
			var newposition = monsterdata[i].position;
			newposition += 1;
			monsterdata[i] = ({name : "monster" + i, position: newposition, hitpoints: 10});
			break;			case 3:

			// South
			var newposition = monsterdata[i].position;
			newposition += 20;
			monsterdata[i] = ({name : "monster" + i, position: newposition, hitpoints: 10});
			break;
			case 4:
			// West
			var newposition = monsterdata[i].position;
			newposition -= 1;
			monsterdata[i] = ({name : "monster" + i, position: newposition, hitpoints: 10});

			break;
		};
	}	

},5000);


http.createServer(function (req, res) {


//	var monsterdata = { name: "monster0", position: newmonsterPosition };
	res.writeHead(200, {"Content-Type": "application/json"});
	var json = JSON.stringify({
	howmanymonsters: howmanymonsters,
	monsters: monsterdata,
  }, null, 4);
  res.end(json);

}).listen(2000, "127.0.0.1");
console.log('Server running');

//  Math.floor((Math.random()*1000)+1)