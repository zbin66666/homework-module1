function currentTime(){
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;
    var hh = d.getHours();//This is for Time zone//
    var utchr = d.getUTCHours();  
    var timeDiff;
    var adjTimeDiff;
    var timeZone;

if (sec < 10) {
    sec = "0" + sec;

}
if (min < 10) {
    min = "0" + min;
}
if (hr == 12){
    ampm = "pm";
}else if (hr > 12){
    hr -= 12;
    ampm = "PM";
} else {
    ampm="AM";
} 

var timeDiff = utchr - hh;
if (timeDiff > 0){
    adjTimeDiff == timeDiff;
}else {
    adjTimeDiff ==  0 - timeDiff;
}
if (adjTimeDiff = 7){
    timeZone = "PT";
} else if ( adjTimeDiff = 8 ){
    timeZone = "MT";
} else if ( adjTimeDiff = 9){
    timeZone= "CT";
} else {
    timeZone= "ET";
}



var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

document.getElementById("clock").innerHTML = time;

setInterval(currentTime, 1000); 
}

currentTime();