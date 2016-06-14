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
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one');

  // Next, we apply a new CSS class to it:
  one.classList = 'blue';
}

// CREATE FUNCTION two HERE
function two() {
  // Find the element we want to add event to
  var two = document.getElementById('two');
  // Add the event to that element
  two.classList = 'green';
}

// CREATE FUNCTION three HERE
function three() {
  // Find the element we want to add event to
  var three = document.getElementById('three');
  // Add the event to that element
  three.classList = 'red';
}

// CREATE FUNCTION makeVisible HERE
