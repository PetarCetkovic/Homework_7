(function (){

function timeCountdown(){
    let getTime = document.getElementById("clockCounter").innerText.split(":");
    let min = getTime[0];
    let sec = getTime[1];
    let clockCounter = document.getElementById("clockCounter");
    if(min=="0" && sec=="00"){
        resetTimer();
        getTime = document.getElementById("clockCounter").innerText.split(":");
        min = getTime[0];
        sec = getTime[1];
    }
    intervalTrigger(min,sec,clockCounter);
}
function intervalTrigger(min,sec,clockCounter) {
    return window.setInterval( function() {
        if(sec=="00"){
            sec=59;
            min=min-1;
        }
        else{sec--;}
        if(sec<10){sec = `0${sec}`}
        let time = `${min}:${sec}`;
        clockCounter.innerText = time;
        document.title = `(${time}) Pomodoro Timer`;
        checkCountdown(min,sec);
    }, 1000 );
  };

function checkCountdown(minutes,seconds){
    if(minutes=="0" && seconds=="00"){
        document.getElementById("timerSound").muted="false";
        document.getElementById("timerSound").play();
        clearAllIntervals();
        setTimeout(function(){alert("Timer is off");}, 500); 
    }
}

function clearAllIntervals(){
    for(i=0; i<100; i++)
    {
        window.clearInterval(i);
    }
}

function setPomodoro(){
    document.getElementById("clockCounter").innerText="25:00";
    document.getElementsByClassName("actionButtons")[0].style.display="block";
    clearAllIntervals();
    document.getElementById("selectChecker").innerText="p";
}

function setShortBreak(){
    document.getElementById("clockCounter").innerText="0:05";
    clearAllIntervals();
    document.getElementById("selectChecker").innerText="s";

}
function setLongBreak(){
    document.getElementById("clockCounter").innerText="10:00"
    clearAllIntervals();
    document.getElementById("selectChecker").innerText="l";
}

function resetTimer(){
    const timerChecked = document.getElementById("selectChecker").innerText;
    if(timerChecked==="p"){setPomodoro()}
    else if(timerChecked==="s"){setShortBreak()}
    else{setLongBreak()}
}
const pomodoroBtn = document.getElementsByClassName("pomodoro")[0];
const shortBrBtn  = document.getElementsByClassName("shortBreak")[0];
const longBrBtn   = document.getElementsByClassName("longBreak")[0];
const startBtn    = document.getElementById("startBtn");
const stopBtn     = document.getElementById("stopBtn");
const resetBtn    = document.getElementById("resetBtn");

pomodoroBtn.addEventListener("click", setPomodoro);
shortBrBtn.addEventListener("click", setShortBreak);
longBrBtn.addEventListener("click", setLongBreak);
startBtn.addEventListener("click", timeCountdown);
stopBtn.addEventListener("click",clearAllIntervals);
resetBtn.addEventListener("click", resetTimer);
}());