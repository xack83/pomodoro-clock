//Get user's location

$(document).ready(function() {
    var sessionLgth = 1;
    var breakLgth = 1;
    var sessionSec = 60 * sessionLgth;
    var breakSec = 60 * breakLgth;
    display = $('#time');
    $("#time").click(function() {
        startTimer(sessionSec, breakSec, display); 
    })
});

function startTimer(duration, next, display) {
    var cycle = "session";
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0 && cycle === "session") {
            cycle = "break";
            timer = next;
            startTimer(next, duration, display);
        }
        if (--timer < 0 && cycle === "break") {
            cycle = "session";
            timer = duration;
            startTimer(duration, next, display);   
        }
    }, 1000);
}

