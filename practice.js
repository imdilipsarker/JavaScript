function footBall() {
  for (let i = 1; i <= 12; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
      console.log("football");
    } else if (i % 2 === 0) {
      console.log("foot");
    } else if (i % 3 === 0) {
      console.log("ball");
    } else {
      console.log(i);
    }
  }
}
footBall();
