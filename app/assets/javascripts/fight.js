
function attack () {
//document.getElementById('attack').style.display = 'none';
// Roll a number, 1-4 will hit enemy, 5-6 will hit you
var willHit = Math.floor((Math.random()*6)+1);
switch(willHit) {
case 1:
case 2:
case 3:
case 4:
	// convert 10th character and on to an integer, get ready to do math
	var hitPoints = parseInt(document.getElementById('theirhp').innerHTML.substr(10), 10)
if (hitPoints <= 0) {
alert('dead!');
} else {
	// Yes, it hits, subtract HP from the enemy
	var damageDone = Math.floor((Math.random()*5)+1);
	var theirHp = hitPoints - damageDone;
	document.getElementById('theirhp').innerHTML = "Their HP: " + theirHp;

}
	break;
case 5:
case 6:
	//Enemy hits instead, roll to see if it does 1 or 2 damage
	var damageDone = Math.floor((Math.random()*2)+1);
	// read characters starting at 9th position and convert to integer to subtract from health
	var myHp = parseInt(document.getElementById('yourhp').innerHTML.substr(9), 10) - damageDone;
	// write out the new value that has been subtracted
	document.getElementById('yourhp').innerHTML = "Your HP: " + myHp;
	break;

}

//var output = a.substr(0, position) + " " + b + a.substr(position);
//var myHp = myHp + 25
//alert(myHp);
//var myNewHp = 

//document.getElementById('yourhp').style.display = 'none';
}
