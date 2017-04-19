var heartbeat = 55;

$(function () {

	$(".heart-rate span").css( "border", "3px solid red" );

	// Start the music!
	var music = new Audio('./audio/music-cutted.mp3');
	// music.play();

});

$(document).keydown(function(e) {
    switch(e.which) {
        case 49: // 1
        	console.log("Toets 1 gedrukt");
        	heartbeat = 55;
        	$(".heart-rate span").html(heartbeat);
        break;

        case 50: // 2
        	console.log("Toets 2 gedrukt");
        	heartbeat = 65;
        	$(".heart-rate span").html(heartbeat);
        break;

        case 51: // 3
        	console.log("Toets 3 gedrukt");
        	heartbeat = 70;
        	$(".heart-rate span").html(heartbeat);
        break;

        case 52: // 4
        	console.log("Toets 4 gedrukt");
        	heartbeat = 75;
        	$(".heart-rate span").html(heartbeat);
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});