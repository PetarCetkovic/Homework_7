function timeCountdown(minutes, seconds){
    let min = minutes;
    let sec = seconds;
    let time = `${min}:${sec}0`;
    let clockCounter = document.getElementById("clockCounter");
    clockCounter.innerText = time;
    let i = setInterval(() => {
            if(sec=="00"){
                sec=59;
                min=min-1;
            }
            else{sec--;}
            if(sec<10){sec = `0${sec}`}
            // if(min<10){min = `0${min}`}
            time= `${min}:${sec}`
            clockCounter.innerText = time;
            checkCountdown(min,sec);
        }, 1000);
}

function checkCountdown(minutes,seconds){
    if(minutes=="00" && seconds=="00"){
        document.getElementById("timerSound").muted=false;
        alert("Timer is off");
    }
}


timeCountdown(00,15);