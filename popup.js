document.addEventListener("DOMContentLoaded", () => {
    var time = document.getElementById("time");
    var startStopBtn = document.getElementById("startStopBtn");
    var startTime = time.textContent;

    document.getElementById("resetBtn").addEventListener("click", () => {
        time.innerHTML = startTime;
        clearInterval(decreaseTime);
    });

    startStopBtn.addEventListener("click", () => {
        startStopBtn.innerHTML = "Stop";
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
