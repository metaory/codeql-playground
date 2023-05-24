const [a, b] = [11, 22];

console.log("a:", a);
console.log("b:", b);
function avg(x, y) {
	return (x + y)/2;
}
function selectElements(ids) {
    for (var i=0, length=ids.length; i<lenght; ++i) {
        var id = ids[i];
        if (id) {
            var element = document.getElementById(id);
            element.className += " selected";
        }
    }
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
if (f())
	f();
