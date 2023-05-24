const [a, b] = [11, 22];
function Graph(nodes, edges) {
  this.nodes = nodes;
  this.edges = edges;
  // cache minimum distance between pairs of nodes
  this.distance = {};
}

console.log("a:", a);
console.log("b:", b);
function avg(x, y) {
	return (x + y)/2;
}

function Rectangle(x, y, width, height) {
	this.x = x;
	this.y = y;
	width = width;
	this.height = height;
}

let z = "foobar";
function error(msg) {
  console.log(msg);
}
var x = 1<<40;
function processResponse(response) {
  if (response.status === 200) {
    var error = processResponseText(response.responseText);
    if (error)
       throw error;
  } else {
    error("Unexpected response status " + response.status);
  }
}

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

