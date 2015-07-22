var foo = function() {
  console.log('goo');
};

foo();

function Person() {}
var hyun = new Person();

p.name = 'egoing';

p.introduce = function() {
  return 'My name is ' + this.name;
};

var Person = function(name) {
  this.name = name;
  this.introduce = function() {
    return 'My name is ' + this.name;
  };
};

function Person(name) {
  this.name = name;
}

Person.prototype.introduce = function() {
  return 'My name is ' + this.name;
};

hyun = new Person('hyun');

console.log(hyun.introduce());
console.log(hyun.name);
