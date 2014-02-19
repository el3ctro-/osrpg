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

/*

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 10;
    var w = $(window).width() - 10;
 //   alert();
	
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateMonster(){
    var newq = makeNewPosition();
    var oldq = $( "#monster0" ).offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $( "#monster0" ).animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateMonster();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

*/
function animateMonster() {
//    $( "#monster0" ).offset();
	
    $( "#monster0" ).delay(5000).animate({ top: '+=25', left: 0}, 2500, function(){
//  $( "#monster0" ).animate({ top: '+=50', left: '-=' + $( "#monster0" ).offset().left }, 2500, function(){
	
//	var oldq = $( "#monster0" ).offset();
      animateMonster();        
    });
}
	
	
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


$(document).ready(function(){

    animateMonster();
    
});



