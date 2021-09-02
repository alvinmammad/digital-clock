function clock() {
  const fullDate = new Date();
  var hours = fullDate.getHours();
  var minutes = fullDate.getMinutes();
  var seconds = fullDate.getSeconds();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.querySelector("#hour").innerHTML = hours;
  document.querySelector("#minute").innerHTML = ":"+ minutes;
  document.querySelector("#second").innerHTML = ":"+ seconds;
}
let speed = 100;
setInterval(clock, speed);
