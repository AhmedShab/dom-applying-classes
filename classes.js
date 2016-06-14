// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start);

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one();

  // Your turn! Create a new function called `two`, then call it from here.
  two();

  three();

  makeVisible();
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one');

  // Next, we apply a new CSS class to it:
  one.classList.add('blue');
}

// CREATE FUNCTION two HERE
function two() {
  // Find the element we want to add event to
  var two = document.getElementById('two');
  // Add the event to that element
  two.classList.add('green');
}

// CREATE FUNCTION three HERE
function three() {
  // Find the element we want to add event to
  var three = document.getElementById('three');
  // Add the event to that element
  three.classList.add('red');
}

// CREATE FUNCTION makeVisible HERE
function makeVisible() {
  var invisible = document.getElementsByClassName("invisible")[0];

  // console.log(invisible);

  invisible.classList.add('visible');
}
