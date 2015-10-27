var min = 2;
//var time = min * 60;
var time = 70;

$(document).ready(function() {
    $("#time").click(function() {
        timer(time, display); 
    });
    $("#reset").click(function() {
        clearInterval(inter);
        $("#time").text("25:00");
    });
});

var minutes, seconds;
display = $('#time');

function timer(duration, display) {

    var inter = setInterval(function(){ 

        var seconds = Math.floor(duration % 60);
        var minutes = Math.floor( (duration/60) % 60 );
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        duration--;
        if(duration<0){
           clearInterval(inter);
        }
    }
    , 1000);
    
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(timer, 1000);
}
/*
var inter = setInterval(function(){ 
    alert(time);
    time--;
    if(time<0){
       clearInterval(inter);
    }
}
, 1000);*/

