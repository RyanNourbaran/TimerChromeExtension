document.addEventListener("DOMContentLoaded", () => {
  var time = document.getElementById("time");
  document.getElementById("startBtn").addEventListener("click", function() {
    var decreaseTime = setInterval(function() {
      if (time.textContent != 0) {
        time.innerHTML = time.textContent - 1;
      }
    }, 1000);
    if (time.textContent == 0) {
      clearInterval(decreaseTime);
    }
  });
});
