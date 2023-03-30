setTimeout(function () {
    const button = document.getElementById('dose-btn');
    console.log((button));
    const current_sec_div = document.querySelector('.timer-text-lg');
    const current_mili_div = document.querySelector('.timer-text-sm');
    const total_sec_div = document.querySelector('.session-timer-text-lg');
    const total_mili_div = document.querySelector('.session-timer-text-sm');

    let totalSessionTime = 0;

    let buttonPressed = false;
    let InitialTimerValue = 0;

    navigator.vibrate(25);

    button.addEventListener("touchstart", function () {
        InitialTimerValue = performance.now();
        console.log(InitialTimerValue)
        buttonPressed = true;
        navigator.vibrate(25);
    }
    )
    
    button.addEventListener('touchend', function () {
        if(buttonPressed){
            let delta = performance.now() - InitialTimerValue;
            console.log(`Caluclated delta: ${delta.toFixed()}`)

            buttonPressed = false;
            current_sec_div.innerHTML = Math.floor(delta / 1000).toFixed();
            current_mili_div.innerHTML = Math.floor(((delta / 1000) - Math.floor(delta / 1000))*100).toString().padStart(2, '0');

            totalSessionTime += delta;
            total_sec_div.innerHTML = Math.floor(totalSessionTime / 1000).toFixed();
            total_mili_div.innerHTML = Math.floor(((totalSessionTime / 1000) - Math.floor(totalSessionTime / 1000))*100).toString().padStart(2, '0');
        }
    }
    )
    

}, 1000)




