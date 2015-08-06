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



var cashRegister = (function() {
  var total = 0;

  function add(price) {
    this.total += price;
  }
  var scan = function(item) {
    switch (item) {
      case "eggs":
        this.add(0.98);
        break;
      case "milk":
        this.add(1.23);
        break;
        //Add other 2 items here
      case "magazine":
        this.add(4.99);
        break;
      case "chocolate":
        this.add(0.45);
        break;
    }
  };
  return {
    scan: scan,
    total: total,
    add: add
  };
}());

cashRegister.scan('eggs');
console.log(cashRegister.total);

//Scan 2 eggs and 3 magazines

//Show the total bill
console.log('Your bill is ' + cashRegister.total);

//

var cashRegister = {
  total: 0,
  add: function(price) {
    this.total += price;
  },
  scan: function(item) {
    switch (item) {
      case "eggs":
        this.add(0.98);
        break;
      case "milk":
        this.add(1.23);
        break;
      case "magazine":
        this.add(4.99);
        break;
      case "chocolate":
        this.add(0.45);
        break;
    }
    return true;
  }
};
cashRegister.scan('eggs');
cashRegister.scan('eggs');
cashRegister.scan('magazine');
cashRegister.scan('magazine');
cashRegister.scan('magazine');
console.log('Your bill is ' + cashRegister.total);
//



//


var cashRegister = {
  total: 0,
  add: function(itemCost) {
    this.total += itemCost;
  },
  scan: function(item, quantity) {
    switch (item) {
      case "eggs":
        this.add(0.98 * quantity);
        break;
      case "milk":
        this.add(1.23 * quantity);
        break;
      case "magazine":
        this.add(4.99 * quantity);
        break;
      case "chocolate":
        this.add(0.45 * quantity);
        break;
    }
  }
};

// scan each item 4 times
cashRegister.scan('eggs', 4);
cashRegister.scan('milk', 4);
cashRegister.scan('magazine', 4);
cashRegister.scan('chocolate', 4);


//Show the total bill
console.log('Your bill is ' + cashRegister.total);






//
//

var cashRegister = {
  total: 0,
  lastTransactionAmount: 0,
  //Dont forget to add your property
  add: function(itemCost) {
    this.total += itemCost;
    this.lastTransactionAmount = itemCost;
  },
  scan: function(item, quantity) {
    switch (item) {
      case "eggs":
        this.add(0.98 * quantity);
        break;
      case "milk":
        this.add(1.23 * quantity);
        break;
      case "magazine":
        this.add(4.99 * quantity);
        break;
      case "chocolate":
        this.add(0.45 * quantity);
        break;
    }
    return true;
  },
  //Add the voidLastTransaction Method here
  voidLastTransaction: function() {
    this.total -= this.lastTransactionAmount;
  }

};

cashRegister.scan('eggs', 1);
cashRegister.scan('milk', 1);
cashRegister.scan('magazine', 1);
cashRegister.scan('chocolate', 4);

//Void the last transaction and then add 3 instead
cashRegister.voidLastTransaction();
cashRegister.scan('chocolate', 3);


//Show the total bill
console.log('Your bill is ' + cashRegister.total);

//.DS_Store


// create a constructor for the StaffMember class

var StaffMember = function(name, discountPercent) {
  this.name = name;
  this.discountPercent = discountPercent;
};

var me = new StaffMember('me', 20);
var sally = new StaffMember("Sally", 5);
var bob = new StaffMember("Bob", 10);

//Create a StaffMember for yourself called me
console.log(me);




var StaffMember = (function(name, discountPercent) {
  this.name = name;
  this.discountPercent = discountPercent;
  return {
    name: name,
    discountPercent: discountPercent
  };
}());

var sally = new StaffMember("Sally", 5);
var bob = new StaffMember("Bob", 10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember('me', 20);

var cashRegister = {
  total: 0,
  lastTransactionAmount: 0,
  add: function(itemCost) {
    this.total += (itemCost || 0);
    this.lastTransactionAmount = itemCost;
  },
  scan: function(item, quantity) {
    switch (item) {
      case "eggs":
        this.add(0.98 * quantity);
        break;
      case "milk":
        this.add(1.23 * quantity);
        break;
      case "magazine":
        this.add(4.99 * quantity);
        break;
      case "chocolate":
        this.add(0.45 * quantity);
        break;
    }
    return true;
  },
  voidLastTransaction: function() {
    this.total -= this.lastTransactionAmount;
    this.lastTransactionAmount = 0;
  },
  // Create a new method applyStaffDiscount here
  applyStaffDiscount: function(employee) {
    var discountTotal = this.total * (employee.discountPercent / 100);
    this.lastTransactionAmount = discountTotal;
    this.total -= discountTotal;
  }
};


cashRegister.scan('eggs', 1);
cashRegister.scan('milk', 1);
cashRegister.scan('magazine', 3);
// Apply your staff discount by passing the 'me' object
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is ' + cashRegister.total.toFixed(2));


var total = 0;

for (var i = 1; i <= 6; i++) {
  total += i;
}
console.log(total);
