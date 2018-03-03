document.addEventListener("DOMContentLoaded", () => {
    var time = document.getElementById("time");
    var startTime = time.textContent;
    var started = false;
    var decreaseTime = undefined;

    document.getElementById("resetBtn").addEventListener("click", () => {
        time.innerHTML = startTime;
        clearInterval(decreaseTime);
    });

    document.getElementById("startStopBtn").addEventListener("click", () => {
        if (started) {
            started = false;
            document.getElementById("startStopBtn").innerHTML = "Start";

            clearInterval(decreaseTime);
            decreaseTime = undefined;
        } else if (!decreaseTime) {
            started = true;
            document.getElementById("startStopBtn").innerHTML = "Stop";
            decreaseTime = setInterval(() => {
                if (time.textContent != 0 && started) {
                    time.innerHTML = time.textContent - 1;
                }
            }, 1000);
        }

        if (time.textContent == 0 || !started) {
            clearInterval(decreaseTime);
        }
    });
});
