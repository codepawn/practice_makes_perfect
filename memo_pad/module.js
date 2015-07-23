//``

var cashRegister = (function() {
  var privateValue = 'goo';
  var total = 0;
  testCall();
  var add = function(itemCost) {
    this.total += itemCost;
  };
  var getPrivate = function() {
    return privateValue;
  };

  function testCall() {
    console.log('Call!');
  }
  var testCall2 = function() {
    console.log('Call!');
  };

  return {
    total: total,
    add: add,
    getPrivate: getPrivate
  };
}());



cashRegister.add(0.98);
cashRegister.add(1.23);
cashRegister.add(4.99);
cashRegister.add(0.45);
console.log(cashRegister.getPrivate());
console.log('Your bill is ' + cashRegister.total);

//


(function() {
  'use strict';
  var root = this;
  var version = '1.0';
  var Module1;
  if (typeof exports !== 'undefined') {
    Module1 = exports;
  } else {
    Module1 = root.Module1 = {};
  }
  Module1.getVersion = function() {
    return version;
  };
}).call(this);
console.log(Module1.getVersion());


//



function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0)
    throw RangeError('Cannot create product "' + name + '" with a negative price');
  // return this;
}

function Food(name, price) {
  Product.call(name, price);
  this.category = 'food';
}
Food.prototype = new Product();

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}
Toy.prototype = new Product();

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);

console.log(cheese);
console.log(fun);


var animals = [{
  species: 'Lion',
  name: 'King'
}, {
  species: 'Whale',
  name: 'Fail'
}];

console.log(i);

var i = 10;
var total = 0;
for (var i = 0; i < 10; i++) {
  total += i;
}
console.log(i);
console.log(total);

(function() {
  var root = this;
  var version = '1.0';
  var Module3;
  if (typeof exports !== 'undefined') {
    Module3 = exports;
  } else {
    Module3 = root.Module3 = {};
  }
  Module3.getVersion = function() {
    return version;
  };
}());
console.log(Module3.getVersion());

(function() {
  var root = this;
  var version = '1.0';
  var Module4;
  if (typeof exports !== 'undefined') {
    Module4 = exports;
  } else {
    Module4 = root.Module4 = {};
  }
  Module4.getVersion = function() {
    return version;
  };
}).apply(this);
console.log(Module4.getVersion());

var Module5 = (function() {
  var root = this;
  var version = '1.0';
  var Module;
  if (typeof exports !== 'undefined') {
    Module = exports;
  } else {
    Module = root.Module = {};
  }
  Module.getVersion = function() {
    return version;
  };
  return Module;
}());
console.log(Module5.getVersion());
