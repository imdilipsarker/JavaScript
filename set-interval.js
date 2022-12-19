let seconds = 0;
const clockId = setInterval(() => {
  seconds++;
  console.log(seconds);
  if (seconds >= 60) {
    clearInterval(clockId);
  }
}, 1000);
