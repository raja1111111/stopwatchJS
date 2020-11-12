let seconds=0;
let minutes=0;
let hours=0;

//define var to hold display value 
let displays = 0;
let dispminu=0;
let displhours=0;

//var to hold setinterval fn 
let intervl =null;
//define var to hold stopwatch status
let status = "stopped";

//stopwatch fn 

function stopwatch(){
    seconds++

    //logic to determin when to increment next value 

    if(seconds/60===1){
   seconds=0;
        minutes++
        
        if (minutes/60===1){
        minutes=0;
        hours++;
        }
}




if(seconds<10){
    displays ="0" +seconds.toString();

}
else{
    displays =seconds;
}

if(minutes<10){
    dispminu ="0" + minutes.toString();
}else{
    dispminu=minutes;

}
if(hours<10){
    displhours ="0"  + hours.toString();
}else{
    displhours = hours;
}
//display updated time value to client

document.getElementById("display").textContent = displhours + ":" + dispminu +":" +displays;
}

function startstop(){
    if(status==="stopped"){
        //start the stop watch 
        interval = window.setInterval(stopwatch, 1000);
        document.getElementById("startstop").textContent="stop"
        status="started"

    }
    else{
        window.clearInterval(interval);
        document.getElementById("startstop").textContent= "start"
        status="stopped"
    }
}

//function to reset stopwatch
function reset(){
    window.clearInterval(intervl);
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById("display").textContent="00:00:00";
    document.getElementById("startstop").textContent="start"
}