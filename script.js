let minute = 0;
let second = 5;
let startInterval ;
let stopInterval;
let isBreak = false;
const alarm = document.querySelector('#alarm');

document.querySelector('.start').addEventListener('click', startButton);
document.querySelector('.stop').addEventListener('click', stopButton);
document.querySelector('.reset').addEventListener('click', resetButton);

function start() {
    


    if (second == 0) {
        minute--;
        second = 60;
    }
    second--;
   
    
    if (minute == 0 && second == 0 && !isBreak) {
        alarm.play();
        minute = 0;
        second = 15;
        isBreak = true;
    }
    if(isBreak){
        document.querySelector('.text').innerHTML = `break`;
    } else{
        document.querySelector('.text').innerHTML = `working`;
    }
    if (minute == 0 && second == 0 && isBreak){
        document.querySelector('.clock').innerHTML = `${fixZero(minute)}:${fixZero(second)}`;
        alarm.play();
        reset();
    }
    document.querySelector('.clock').innerHTML = `${fixZero(minute)}:${fixZero(second)}`;
    
}

function startButton() {
    startInterval = setInterval(start, 1000);
}

function stopButton() {
    stop();
}

function resetButton() {
    stop();
    minute = 25;
    second = 00;
    document.querySelector('.clock').innerHTML = `${fixZero(minute)}:${fixZero(second)}`;
    document.querySelector('.text').innerHTML = `press start`;
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

function stop(){
    clearInterval(startInterval);
}

function reset(){
    minute = 25;
    second = 00;
    isBreak = false;
    clearInterval(startInterval);
    startInterval = setInterval(start, 1000);
}