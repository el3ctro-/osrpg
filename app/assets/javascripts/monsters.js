/*
$( document ).ready(function() {
  for (var i=0;i<15;i++) {
  var moveMonster0 = Math.floor((Math.random()*10)+1);
  switch (moveMonster0) {
case 1:
case 2:
	properties = {marginTop:'+=50px'};
	var imageMonster = "assets/monsters/ghoul/1.png";
	break;
case 3:
case 4:
	properties = {marginLeft:'+=50px'};
	var imageMonster = "assets/monsters/ghoul/2.png";
	break;
case 5:
case 6:
	properties = {marginTop:'+=25px'};
	var imageMonster = "assets/monsters/ghoul/3.png";
	break;
case 7:
case 8:
case 9:
	properties = {marginLeft:'+=25px'};
	var imageMonster = "assets/monsters/ghoul/4.png";
	break;
case 10:
	properties = {marginRight:'+=25px'};
	break;
}
  $( "#monster0" ).attr("src",imageMonster).animate(properties, 1500 ).delay(3000);
  }
});
*/


var howmanymonsters;
var monsterpositon = [];
var oldposition = [];
var whichmonster = [];

// Get old positions statically

	$.ajax({
		type: "GET",
		url: "/nodeserver/show",
		dataType: "json",
		success: function(data){
			for (var i=0;i<data.howmanymonsters;i++) {
			oldposition[i] = data.monsters[i].position;
			console.log("Got old position " + oldposition[i]);
			}

}
});

setInterval(function() { 
//alert('running');
	$.ajax({
		type: "GET",
		url: "/nodeserver/show",
		dataType: "json",
		success: function(data){
		howmanymonsters = data.howmanymonsters;

			for (var i=0;i<howmanymonsters;i++) {
//			console.log(oldposition);
			if (data.monsters[i].position !== oldposition[i]) { 

				console.log("Old position: " + oldposition[i] + "..New Position: " + data.monsters[i].position);
//				animateMonster(data.monsters[i].position, i);
				console.log("Moving monster " + i);
				if ((data.monsters[i].position) == (oldposition[i] + 20))
				console.log('Detected north movement');
				if ((data.monsters[i].position) == (oldposition[i] - 20)) {
				console.log('Detected south movement');
				$( "#monster" + i ).delay(10).animate({ top: '+=25', left: 0}, 2500);
				}
				oldposition[i] = data.monsters[i].position;
				} else {

//				console.log(oldposition[i]);
				}
//				console.log(data.monsters[i].position);

		}

		}
		
//		error: function(xhr,err){
//    alert("readyState: "+xhr.readyState+"\nstatus: "+xhr.status);
//    alert("responseText: "+xhr.responseText);
//}
	});
}
, 1000);
			//oldposition[i] = data.monsters[i].position;
//function animateMonster(newposition, monster) {
//    $( "#monster0" ).offset();

//	alert(howmanymonsters);
//  var monster0offset=$("#monster0").offset();
//  	console.log(monster0offset.top);
// console.log(monster0offset.top);

//	if (newposition)
//console.log(monster);

 //   $( "#monster" + monster ).delay(5000).animate({ top: '+=25', left: 0}, 2500, function(){
//  $( "#monster0" ).animate({ top: '+=50', left: '-=' + $( "#monster0" ).offset().left }, 2500, function(){
	
//	var oldq = $( "#monster0" ).offset();
//      animateMonster();        
 //   });
//}
	
	
function scrollToElement(pageElement) {    
    var positionX = 0,         
        positionY = 0;    

    while(pageElement != null){        
        positionX += pageElement.offsetLeft;        
        positionY += pageElement.offsetTop;        
        pageElement = pageElement.offsetParent;        
        window.scrollTo(positionX, positionY);    
    }
}

var pageElement = $( "#monster0" );
scrollToElement(pageElement);


//$(document).ready(function(){

//    animateMonster();
    
//});



