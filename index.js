const [a, b] = [11, 22];

console.log("a:", a);
console.log("b:", b);

let z = "foobar";

const readonly = "mread";

readonly = "assign";

$(".alert").css({
  backgroundColor: "orange",
  fontWeight: "bold",
  backgroundColor: "orange",
});

function controller(msg) {
  switch (msg) {
    case "start":
      start();
      break;
    case "start":
      stop();
      break;
    default:
      throw new Error("Message not understood.");
  }
}

function isOdd(x) {
  return x % 2 === 1;
}

console.log(isOdd(-9)); // prints 'false'
