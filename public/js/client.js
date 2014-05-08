var locationInput;

function getWeatherData(curCity){

	var weatherSearchURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + curCity +'&mode=json&units=imperial';

	$.ajax({
		url: weatherSearchURL,
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
		},
		success: function(data){
			console.log("We got weather info!");

			var weatherDescription = data.weather[0].description;
			var weatherTemp = data.main.temp;
			console.log(weatherDescription + ", " + weatherTemp);
			//var r = 62;
			var r = parseInt(Number(3 * weatherTemp));
			var g = parseInt(Number(weatherTemp));
			//var b = 184;
			var b = parseInt(Number(weatherTemp/3));
			var curBG = 'rgb(' + r + ',' + g + ',' + b + ')';
			console.log(curBG);
			$('#location').css({'color':curBG});

			$('#location').append(weatherDescription + ", " + weatherTemp + "F")
			//var text1 = paper.text(100, 100, "a text");
		}
	});
}


$(document).ready(function(){

	if (window.locationInput) {
		getWeatherData(window.locationInput);
	}

	console.log("HERE!!!");

	initRaphael();

	$('#step2form').submit(function(){
		animStep2();
		return false;
	});

	$('#step3form').submit(function(){
		animStep3();
		return false;
	});

	$('#step4form').submit(function(){
		animStep4();
		return false;
	});

	
	$('#step1form').submit(function(){
		locationInput = '';
		locationInput = document.getElementById('location').value;
		getWeatherData(locationInput);
	});
/*
	$('#button1').click(function(){
		
		console.log('do animation');
	
		//execute Raphael animation here
		
		runCircleAnimationOne();

		//creaet data object with the input values

		//make ajax post request to /step3 with data

		return false;
	});
*/
});