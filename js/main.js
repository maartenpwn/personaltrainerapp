var heartbeat = 55;

var login 	 = new Audio('./audio/login.aac');
var overview = new Audio('./audio/overview.aac');
var compare  = new Audio('./audio/compare.aac');
var results  = new Audio('./audio/results.aac');
var workout1 = new Audio('./audio/workout1.aac');
var workout2 = new Audio('./audio/workout2.aac');
var workout3 = new Audio('./audio/workout3.aac');
var workout4 = new Audio('./audio/workout4.aac');

$(function () {

	

	// Login page
	if(location.pathname=="/personaltrainerapp/index.php") login.play();

	// Overview page
	if(location.pathname=="/personaltrainerapp/overview.php") overview.play();

	// Results
	if(location.pathname=="/personaltrainerapp/results.php") results.play();

	// Compare
	if(location.pathname=="/personaltrainerapp/compare.php") compare.play();

	if(location.pathname=="/personaltrainerapp/bench-press.php") workout1.play();
	

	// login.onended = function() {
 //    	// music.play();
	// };

	// var vid = document.getElementById("myVideo");
	// vid.volume = 0.2;

});

$(document).keydown(function(e) {
    switch(e.which) {
        case 49: // 1
        	console.log("Toets 1 gedrukt");
        	heartbeat = 55;
        	$(".heart-rate span").html(heartbeat);
        	workout1.play();
        break;

        case 50: // 2
        	console.log("Toets 2 gedrukt");
        	heartbeat = 60;
        	$(".heart-rate span").html(heartbeat);
        	workout2.play();
        break;

        case 51: // 3
        	console.log("Toets 3 gedrukt");
        	heartbeat = 70;
        	$(".heart-rate span").html(heartbeat);
        	workout3.play();
        break;

        case 52: // 4
        	console.log("Toets 4 gedrukt");
        	heartbeat = 80;
        	$(".heart-rate span").html(heartbeat);
        	workout4.play();
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});


// Function to let music play troughout the application
function setCookie(c_name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name)
        {
        return unescape(y);
        }
      }
}

var song = document.getElementsByTagName('audio')[0];
var played = false;
var tillPlayed = getCookie('timePlayed');
function update()
{
    if(!played){
        if(tillPlayed){
        song.currentTime = tillPlayed;
        song.play();
        song.volume = 0;
        played = true;
        }
        else {
                song.play();
                played = true;
        }
    }

    else {
    setCookie('timePlayed', song.currentTime);
    }
}
setInterval(update, 0);