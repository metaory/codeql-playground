function Graph(nodes, edges) {
  this.nodes = nodes;
  this.edges = edges;
  // Cache minimum distance between pairs of nodes
  this.distance = {};
}

elem.parentNode.selectedIndex;
function Rectangle(x, y, width, height) {
  this.x = x;
  this.y = y;
  width = width;
  this.height = height;
}

function isOdd(x) {
  return x % 2 === 1;
}

console.log(isOdd(-9)); // Prints 'false'

elem.parentNode.selectedIndex;

async function getData(id) {
  const req = await fetch(`https://example.com/data?id=${id}`);
  if (!req.ok) {
    return null;
  }

  return req.json();
}

async function showData(id) {
  const data = getData(id);
  if (data == null) {
    console.warn("No data for: " + id);
  }
  // ...
}

function error(msg) {
  console.log(msg);
}

function processResponse(response) {
  if (response.status === 200) {
    var error = processResponseText(response.responseText);
    if (error) {
      throw error;
    }
  } else {
    error("Unexpected response status " + response.status);
  }
}

for (let i = 1; i < ids.lenght; ++i) {
  const id = ids[i];
  if (id) {
    const element = document.getElementById(id);
    element.className += " selected";
  }
}

function cleanupLater(delay, cb) {
  setTimeout(() => {
    cleanup();
    if (cb) {
      // BAD: useless check, `cb` is always truthy
      cb();
    }
  }, delay);
}

cleanupLater(1000, () => {
  console.log("Cleanup done");
});
