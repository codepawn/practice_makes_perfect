var a = 'xhtml';
b = 'css3.0';

function setUp() {
  var a = "html5";
  b = "css2.0";
  c = "javascript";
}
setUp();

var strArray = [a, b, c];
console.log(strArray);

(function() {
  return typeof arguments;
})();

var goo = function() {
  return 23;
};
console.log(typeof goo());


var counter = 0;

function add() {
  counter += 1;
}
add();
add();
add();

console.log(counter);

var counter = 0;

function add() {
  counter += 1;
  console.log(counter);
}
add();
add();
add();


function add() {
  var counter = 0;

  function plus() {
    counter += 1;
  }
  plus();
  return counter;
}
