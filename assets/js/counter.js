
// counter

// student number
let start = 0,
  current = start,
  end = 9825,
  duration = 2000,
  speed = (end - start) / duration;

setInterval(() => {
  if (current <= end) {
    current += speed;
    document.getElementById("number_up").innerHTML = parseInt(current);
  }
});
