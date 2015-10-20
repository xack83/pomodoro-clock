var min = 5;
var time = min * 60;
/*
$(document).ready(function() {
    $("#time").click(function() {
        timer(time); 
    })
});*/

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second 
var minutes, seconds;
function timer(duration, display) {
  
    duration--;
    var seconds = Math.floor( (duration/1000) % 60 );
    var minutes = Math.floor( (duration/1000/60) % 60 );

    display.text(minutes + ":" + seconds);
    if (duration <= 0) {
        clearInterval(counter);
        return;
    }
}
display = $('#time');
timer(time, display);