var canvas;
var paper;

function initRaphael(){
	console.log('get in animations js');
	canvas = document.getElementById("canvas");
	paper = Raphael(canvas, 500, 500);
}

function welcome(){
	var welcomeImg = paper.image("/public/images/welcome.png", 0, 100, 500, 179);
}

function weather(){
	var weatherImg = paper.image("/public/images/weather.png", 0, 0, 500, 400);
}

var wheel1;
var wheel2;
var wheel3;
var wheel4;
var wheel5;
var tube1;
var card;


function showStep2(){
	//three clouds crossing
	var cloud1 = paper.image("/public/images/cloud1.png", 0, 30, 195, 102);
	cloud1.animate({x:500, y:30}, 20000);

	var cloud2 = paper.image("/public/images/cloud2.png", 100, 80, 161, 92);
	cloud2.animate({x:500, y:80}, 25000);

	var cloud3 = paper.image("/public/images/cloud1.png", -200, 270, 195, 102);
	cloud3.animate({x:500, y:300}, 18000);
	//show a belt and 5 wheels and a long tube
	belt = paper.image("/public/images/belt.png", 30, 280, 444, 108);
	wheel1 = paper.image("/public/images/wheel.png", 60, 310, 49, 44);
	wheel2 = paper.image("/public/images/wheel.png", 150, 310, 49, 44);
	wheel3 = paper.image("/public/images/wheel.png", 230, 310, 49, 44);
	wheel4 = paper.image("/public/images/wheel.png", 310, 310, 49, 44);
	wheel5 = paper.image("/public/images/wheel.png", 390, 310, 49, 44);
	blue_tubes = paper.image("/public/images/blue_tubes.png", 300, -30, 152, 354);

	//wheel one rolling
 	var wheelOneHelper = {};	
	wheelOneHelper.counter = 0;
	wheelOneHelper.rotateValue = 0;
	wheelOneHelper.transformString = "";

	var animWheelsOne = function(){
		wheelOneHelper.counter++;
		wheelOneHelper.rotateValue = 360 * wheelOneHelper.counter;
		wheelOneHelper.transformString = "r" + wheelOneHelper.rotateValue;
		var animWheelOne = Raphael.animation({transform: wheelOneHelper.transformString}, 2000, animWheelsOne);
		wheel1.animate(animWheelOne);
	}
	animWheelsOne();

	//wheel two rolling
 	var wheelTwoHelper = {};	
	wheelTwoHelper.counter = 0;
	wheelTwoHelper.rotateValue = 0;
	wheelTwoHelper.transformString = "";

	var animWheelsTwo = function(){
		wheelTwoHelper.counter++;
		wheelTwoHelper.rotateValue = 360 * wheelTwoHelper.counter;
		wheelTwoHelper.transformString = "r" + wheelTwoHelper.rotateValue;
	
		var animWheelTwo = Raphael.animation({transform: wheelTwoHelper.transformString}, 2000, animWheelsTwo);
		wheel2.animate(animWheelTwo);
	}

	animWheelsTwo();

	//wheel three rolling
	var wheelThreeHelper = {};	
	wheelThreeHelper.counter = 0;
	wheelThreeHelper.rotateValue = 0;
	wheelThreeHelper.transformString = "";

	var animWheelsThree = function(){
		wheelThreeHelper.counter++;
		wheelThreeHelper.rotateValue = 360 * wheelThreeHelper.counter;
		wheelThreeHelper.transformString = "r" + wheelThreeHelper.rotateValue;
	
		var animWheelThree = Raphael.animation({transform: wheelThreeHelper.transformString}, 2000, animWheelsThree);
		wheel3.animate(animWheelThree);
	}

	animWheelsThree();

	//wheel four rolling
	var wheelFourHelper = {};	
	wheelFourHelper.counter = 0;
	wheelFourHelper.rotateValue = 0;
	wheelFourHelper.transformString = "";

	var animWheelsFour = function(){
		wheelFourHelper.counter++;
		wheelFourHelper.rotateValue = 360 * wheelFourHelper.counter;
		wheelFourHelper.transformString = "r" + wheelFourHelper.rotateValue;
	
		var animWheelFour = Raphael.animation({transform: wheelFourHelper.transformString}, 2000, animWheelsFour);
		wheel4.animate(animWheelFour);
	}

	animWheelsFour();

	//wheel five rolling
	var wheelFiveHelper = {};	
	wheelFiveHelper.counter = 0;
	wheelFiveHelper.rotateValue = 0;
	wheelFiveHelper.transformString = "";

	var animWheelsFive = function(){
		wheelFiveHelper.counter++;
		wheelFiveHelper.rotateValue = 360 * wheelFiveHelper.counter;
		wheelFiveHelper.transformString = "r" + wheelFiveHelper.rotateValue;
	
		var animWheelFive = Raphael.animation({transform: wheelFiveHelper.transformString}, 2000, animWheelsFive);
		wheel5.animate(animWheelFive);
	}
	animWheelsFive();
}

//when submit button is clicked
function animStep2(){

	//card = paper.image("/public/images/card.png", 0, 230, 55, 59);
	card = paper.image("/public/images/card.png", -60, 260, 55, 59);
	card.attr({opacity: 1});

	tube1 = paper.image("/public/images/tube1.png", -161, 240, 161, 108);
	//short tube moves in from left
	tube1.animate({transform: "t100, 0"}, 1000);

	var cardAnim1 = Raphael.animation({transform: "t350, 0"}, 2000);
	card.animate(cardAnim1.delay(1000));


	// //card moves 150 from left to right
	// var cardAnim1 = Raphael.animation({transform: "t150, 0"}, 2000, function(){ this.attr("y") = this.y;);
	// card.animate(cardAnim1.delay(1000));
	// //card moves 10 to the right and 30 down
	// var cardAnim2 = Raphael.animation({transform: "t10, 40"}, 1000, "<", function(){ this.attr("y") = this.y;);
	// card.animate(cardAnim2.delay(3000));
	// //card moves 180 to the right
	// var cardAnim3 = Raphael.animation({transform: "t200, 0"}, 2000);
	// card.animate(cardAnim3.delay(4000));

	var cardFadeOut= Raphael.animation({opacity: 0}, 100);
	card.animate(cardFadeOut.delay(3000));
	//long tube on the right rotates back & forth one time
	var blueTubesAnim1 = Raphael.animation({transform: "r15"}, 500);
	blue_tubes.animate(blueTubesAnim1.delay(3000));
	var blueTubesAnim2 = Raphael.animation({transform: "r-15"}, 500);
	blue_tubes.animate(blueTubesAnim2.delay(3500));

	setTimeout(function(){
		
		$('#step2form')[0].submit();
	}, 4100);
}

var boat;
var elevator;
var light;
var doorWindow;
var card2;

function showStep3(){

	//show long tube
	var red_tubes = paper.image("/public/images/red_tubes.png", 400, 0, 66, 400);
	//show boat
	//boat = paper.image("/public/images/boat.png", 80, -20, 235, 366);
	//show short tube2
	var tube2 = paper.image("/public/images/tube1.png", 50, -50, 161, 108);
	tube2.attr({transform: "r90"});
	//show skyline
	var skyline = paper.image("/public/images/skyline.png", 0, 300, 500, 100);	
	//show elevator
	//elevator = paper.image("/public/images/door.png", 355, 50, 152, 181);
	//show window frame 
	//doorWindow = paper.image("/public/images/window.png", 377, 70, 112, 95);

}

//when submit button is clicked
function animStep3(){
	card2 = paper.image("/public/images/card.png", 100, -59, 55, 59);
	card2.attr({opacity: 1});
	//card2 moves 300 down
	card2.animate({transform: "t0, 300"}, 2000, "<");

	//card2 fades out
	var card2Fade = Raphael.animation({opacity: 0}, 100);
	card2.animate(card2Fade.delay(2000));
	//show short tube
	var tube2 = paper.image("/public/images/tube1.png", 50, -50, 161, 108);
	tube2.attr({transform: "r90"});
	//show boat
	boat = paper.image("/public/images/boat.png", 80, -20, 235, 366);

	//rotate boat -65 degrees
	var boatAnim = Raphael.animation({transform: "r-65t117, 0"}, 2000, "bounce");
	boat.animate(boatAnim.delay(2000));

	//show elevator
	elevator = paper.image("/public/images/door.png", 355, 50, 152, 181);

	//hide window light
	light = paper.image("/public/images/window_light.png", 377, 70, 112, 95)
	light.attr({opacity: 0});

	//window light fades in
	var lightAnim = Raphael.animation({opacity: 0, opacity: 1}, 1000);
	light.animate(lightAnim.delay(3000));

	//show window frame 
	doorWindow = paper.image("/public/images/window.png", 377, 70, 112, 95);

	var set = paper.set();
	set.push(elevator, light, doorWindow);
	set.attr({opacity: 1});
	var animSet = Raphael.animation({transform: "t0, 330"}, 1000);
	set.animate(animSet.delay(4000));
	var fadeSet = Raphael.animation({opacity: 0}, 100);
	set.animate(fadeSet.delay(4800));
	setTimeout(function(){		
		$('#step3form')[0].submit();
	}, 6000);
}

var elevator2;
var whale;
var splash;
var card3;

function showStep4(){

 	var purple_tubes = paper.image("/public/images/purple_tubes.png", 60, 0, 66, 400);
 	//elevator2 = paper.image("/public/images/door_window_light.png", 15, 50, 146, 197);
 	var wave1 = paper.image("/public/images/wave1.png", -100, 250, 661, 150);
 	var wave2 = paper.image("/public/images/wave2.png", -100, 280, 790, 120);
 	var wave3 = paper.image("/public/images/wave3.png", -200, 320, 790, 80);
 	//whale = paper.image("/public/images/whale.png", 170, 230, 282, 207);

 	//wave1
 	var animWave1 = Raphael.animation({transform: "t30, 0"}, 3000, animEndWave1);
 	var animFinishWave1 = Raphael.animation({transform: "t-30, 0"}, 3000, animStartWave1);

 	function animEndWave1(){
		wave1.animate(animFinishWave1);
	}

	function animStartWave1(){
		wave1.animate(animWave1);
	}
	animStartWave1();

	//wave2
	var animWave2 = Raphael.animation({transform: "t-30, 0"}, 3000, animEndWave2);
 	var animFinishWave2 = Raphael.animation({transform: "t30, 0"}, 3000, animStartWave2);

 	function animEndWave2(){
		wave2.animate(animFinishWave2);
	}

	function animStartWave2(){
		wave2.animate(animWave2);
	}
	animStartWave2();


	//wave3
 	var animWave3 = Raphael.animation({transform: "t30, 0"}, 3000, animEndWave3);
 	var animFinishWave3 = Raphael.animation({transform: "t-30, 0"}, 3000, animStartWave3);

 	function animEndWave3(){
		wave3.animate(animFinishWave3);
	}

	function animStartWave3(){
		wave3.animate(animWave3);
	}
	animStartWave3();

}

//when submit button is clicked
function animStep4(){
	elevator2 = paper.image("/public/images/door_window_light.png", 15, -200, 146, 197);
	elevator2.attr({opacity: 1});
	//elevator moves down
	elevator2.animate({transform: "t0, 480"}, 2000, ">");

	var elevator2Fade = Raphael.animation({opacity: 0}, 300);
	elevator2.animate(elevator2Fade.delay(1500));
	//hide whale at beginning
	whale = paper.image("/public/images/whale.png", 130, 220, 282, 207);
	whale.attr({transform: "r5", opacity: 0});

	//wave3
	var wave3 = paper.image("/public/images/wave3.png", -200, 320, 790, 80);
 	var animWave3 = Raphael.animation({transform: "t30, 0"}, 3000, animEndWave3);
 	var animFinishWave3 = Raphael.animation({transform: "t-30, 0"}, 3000, animStartWave3);

 	function animEndWave3(){
		wave3.animate(animFinishWave3);
	}

	function animStartWave3(){
		wave3.animate(animWave3);
	}
	animStartWave3();

	//whale appears
	var animWhale = Raphael.animation({opacity: 1}, 500);
	whale.animate(animWhale.delay(2500));
	//whale moves to the right and up
	var animWhale2 = Raphael.animation({transform: "t80, -40, r-5"}, 1000, "<");
	whale.animate(animWhale2.delay(2000));

	//hide splash at beginning
	splash = paper.image("/public/images/splash.png", 260, 80, 206, 118);
	splash.attr({opacity: 0});
	//splash appears
	var animSplash = Raphael.animation({opacity: 1}, 100);
	splash.animate(animSplash.delay(3000));
	//shrink card3 to 0
	var card3 = paper.image("/public/images/card.png", 335, 90, 55, 59);
	card3.attr({transform: "s0"});
	//enlarge card3 to real size
	var popCard3 = Raphael.animation({transform: "t0, -150, s1.3"}, 1500, "<");
	card3.animate(popCard3.delay(3100));
	//push card3 to the top
	//var animCard3 = Raphael.animation({transform: "t0, -100"}, 2000);
	//card3.animate(animCard3.delay(5100));

	setTimeout(function(){
		
		$('#step4form')[0].submit();
	}, 5000);
}

//step 5 
function showCard(){
	var img = paper.image("window.cardImage", 0, -400, 500, 400);
	img.animate({x:0, y: 400}, 2000, "bounce");
}

