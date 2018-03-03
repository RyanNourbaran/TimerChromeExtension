document.addEventListener("DOMContentLoaded", () => {
    var time = document.getElementById("time");
    var startStopBtn = document.getElementById("resetBtn");
    var startTime = time.textContent;

    startStopBtn.addEventListener("click", () => {
        time.innerHTML = startTime;
        clearInterval(decreaseTime);
    });

    startStopBtn.addEventListener("click", () => {
        document.getElementById("startStopBtn").innerHTML = "Stop";
        var decreaseTime = setInterval(() => {
            if (time.textContent != 0 && started) {
                time.innerHTML = time.textContent - 1;
            }
        }, 1000);

        if (time.textContent == 0) {
            clearInterval(decreaseTime);
        }
        startStopBtn.addEventListener("click", () => {
            document.getElementById("startStopBtn").innerHTML = "Start";
            clearInterval(decreaseTime);
        });
    });
});
