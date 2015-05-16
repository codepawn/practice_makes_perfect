var Person, Programmer;

Person = function(name) {
  this.name = name;
  this.introduce = function() {
    return 'Myname is ' + this.name;
  };
};

Programmer = function(name) {
  return this.name = name;
};

Programmer.prototype = new Person();

var p1 = new Programmer('Lafull');
console.log(p1.introduce());
