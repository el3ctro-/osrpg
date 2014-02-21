var http = require('http');

// World data
var world = [];
for (var i=0;i<400;i++) {
	world[i] = { blocked: 0, tile: null };
	if (i <= 20)
	world[i] = { blocked: 1, tile: null };
	if (i > 381)
	world[i] = { blocked: 1, tile: null };
	switch (i) {
	case 20:
	case 40:
	case 60:
	case 80:
	case 100:
	case 120:
	case 140:
	case 160:
	case 180:
	case 200:
	case 220:
	case 240:
	case 260:
	case 280:
	case 300:
	case 320:
	case 340:
	case 360:
	case 21:
	case 41:
	case 61:
	case 81:
	case 101:
	case 121:
	case 141:
	case 161:
	case 181:
	case 201:
	case 221:
	case 241:
	case 261:
	case 281:
	case 301:
	case 321:
	case 341:
	case 361:
	world[i] = { blocked: 1, tile: null };
	break;
	}



}
console.log(world);



// Player data
var players = [];
var playerdata;

// Monster data
var monsters = [];
var newmonsterPosition;
var whichmonster = 0;
var howmanymonsters = 4;
monsterdata = [];
monsterdata[0] = { name: "monster0", position: 173, hitpoints: 10 };
monsterdata[1] = {name: "monster1", position: 124, hitpoints: 10 };
monsterdata[2] = { name: "monster2", position: 87, hitpoints: 10 };
monsterdata[3] = { name: "monster3", position: 245, hitpoints: 10 };
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
			if (world[newposition].blocked == 1)
			null;
			else
			monsterdata[i] = ({name : "monster" + i, position: newposition, hitpoints: 10});
			break;
			
			case 2:
			// East
			var newposition = monsterdata[i].position;
			newposition += 1;
			if (world[newposition].blocked == 1)
			null;
			else
			monsterdata[i] = ({name : "monster" + i, position: newposition, hitpoints: 10});
			break;			case 3:

			// South
			var newposition = monsterdata[i].position;
			newposition += 20;
			if (world[newposition].blocked == 1)
			null;
			else
			monsterdata[i] = ({name : "monster" + i, position: newposition, hitpoints: 10});
			break;
			
			case 4:
			// West
			var newposition = monsterdata[i].position;
			newposition -= 1;
			if (world[newposition].blocked == 1)
			null;
			else
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