window.onload = function() {
    
    let seconds = 00;
    let tens = 00;
    appendTens = document.getElementById("tens");
    appendSeconds = document.getElementById("seconds");
    let buttonStart = document.getElementById("button-start");
    let buttonStop = document.getElementById("button-stop");
    let buttonReset = document.getElementById("button-reset");
    let interval;

    buttonStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(interval);
    }
    
    buttonReset.onclick = function() {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
    function startTimer() {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if ( tens > 99 ) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + tens;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
}

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener('change', () => {
    // cambia el tema de la pagina
    document.body.classList.toggle("dark");   
})