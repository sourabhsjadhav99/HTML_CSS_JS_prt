var milliseconds = 0, seconds = 0, minutes = 0, hours = 0
var timer;
let count = 0
var display = document.querySelector(".timer-Display")
var laps = document.querySelector(".laps")


function start() {
    if (!timer) {
        timer = setInterval(run, 10)
    }
}

function run() {
    display.innerHTML = getTimer()
    milliseconds++
    if (milliseconds == 100) {
        milliseconds = 0
        seconds++
    }
    if (seconds == 60) {
        seconds = 0
        m++
    }
    if (minutes == 60) {
        minutes = 0
        h++
    }

    if (hours == 13) {
        hours = 1
    }
}

function getTimer() {
    return (hours < 10 ? "0" + hours : hours) + " : " + (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds < 10 ? "0" + seconds : seconds) + " : " + (milliseconds < 10 ? "0" + milliseconds : milliseconds);
}



function pause() {
    stopTimer()
}

function stopTimer() {
    clearInterval(timer)
    timer = false
}

function reset() {
    stopTimer()
    resetlap()
    milliseconds = 0
    seconds = 0
    minutes = 0
    hours = 0
    display.innerHTML = getTimer()
}

function restart() {
    if (timer) {
        reset()
        start()
    }

}

function lap() {
    if (timer) {
        count = count + 1
        var List = document.createElement("li")
        List.innerHTML = `CAST ${count} -  ` + getTimer()
        laps.appendChild(List)
    }
}

function resetlap() {
    laps.innerHTML = ""
}