x = 5;
setTimeout(function () {
  x = x * 2;
  console.log("cc je viens du timeout", x);
}, 2000);
console.log("ici je viens après le timeout", x);

var intervalId = setInterval(() => {
  x = x + 2;
  console.log("in setIntervale x = ", x);
  if (x == 20) {
    clearInterval(intervalId);
    console.log("L interval est terminé");
  }
}, 1000);
