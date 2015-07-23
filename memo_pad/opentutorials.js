var foo = function() {
  console.log('goo');
  var b = b;
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


var foo = {
  total: 0,
  add: function(num) {
    this.total += num;
  }
};

foo.add(900);
console.log(foo.total);




var goo = function goof() {
  console.log('work');
};

goof();

goo();

function goo() {
  console.log('work');
}

(function() {

}());

console.log(ee());

var buyCar = function(carName) {
  console.log("내가 구입한차는 바로 " + carName + " 입니다.");
};
buyCar("소나타");

(function(carName) {
  console.log("내가 구입한차는 바로 " + carName + " 입니다.");
}("소나타"));


var clerk = (function() {
  var name = 'Teo';
  var sex = '남자';
  var position = '수석 엔지니어';
  // salary private
  var salary = 2000;
  var taxSalary = 200;
  var totalBonus = 100;
  var taxBonus = 10;

  var payBonus = function() {
    totalBonus = totalBonus - taxBonus;
    return totalBonus;
  };
  var paySalary = function() {
    return salary - taxSalary;
  };

  // Public 속성, 메소드
  return {
    name: name,
    sex: sex,
    position: position,
    paySalary: paySalary,
    payBonus: payBonus
  };
}());

// name 속성은 public
console.log(clerk.name); // 'Teo' 출력
// salary 변수는 즉시실행함수 내부 변수이므로 private
console.log(clerk.salary); // undefined 출력

// paySalary 메소드는 public
console.log(clerk.paySalary()); // 1800 출력

// payBonus 메소드는 public
console.log(clerk.payBonus()); // 90 출력
console.log(clerk.payBonus()); // 80 출력

//


// SPA 모듈 작성 순서 예시
var calculator = (function() {

  // 1. 모듈 스코프 내에서 사용할 변수 작성
  var scopeVar = {};
  var utilMethod;
  var manipulateDom;
  var eventHandle;
  var initModule;

  // 2. 유틸리티 메소드 작성
  utilMethod = function() {
    // 실행코드
  };

  // 3. DOM 조작 메소드 작성
  manipulateDom = function() {
    // 실행코드
  };

  // 4. 이벤트 핸들러 작성
  eventHandle = function() {
    // 실행코드
  };

  // Public 메소드 작성
  initModule = function() {
    // 실행코드
  };

  return {
    init: initModule
  };
}());



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



function Dog(breed) {
  this.breed = breed;
}

// add the sayHello method to the Dog class
// so all dogs now can say hello
Dog.prototype.sayHello = function() {
  console.log('Hello this is a ' + this.breed + 'dog');
};

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();

// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype;
console.log(prototypeType);

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
console.log(hasOwn);



//


var StudentReport = function() {
  var grade1 = 4;
  var grade2 = 2;
  var grade3 = 1;
  this.getGPA = function() {
    return (grade1 + grade2 + grade3) / 3;
  };
};



var myStudentReport = new StudentReport();

for (var x in myStudentReport) {
  if (typeof myStudentReport[x] !== "function") {
    console.log("Muahaha! " + myStudentReport[x]);
  }
}
console.log(myStudentReport.grade1);
console.log("Your overall GPA is " + myStudentReport.getGPA());




var StudentReport = (function() {
  var grade1 = 4;
  var grade2 = 2;
  var grade3 = 1;
  this.getGPA = function() {
    return (grade1 + grade2 + grade3) / 3;
  };
  return {
    getGPA: getGPA
  };
}());

console.log(StudentReport.grade1);
console.log("Your overall GPA is " + StudentReport.getGPA());


var cashRegister = {
  total: 0
};

cashRegister.total = 2.99;
console.log(cashRegister.total);


var cashRegister = function() {
  var total = 3;
  var totalf = function() {
    return total;
  };
  totalf();
};

console.log(cashRegister());

function init() {
  var name = "Mozilla";

  function displayName() {
    console.log(name);
  }
  displayName();
}
init();

var a = 5;

var goo = function() {
  console.log(a);
};
goo();

function makeFunc() {
  var name = "Mozilla";

  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();


//Create the object called cashRegister
//and initialize its total property

var cashRegister = {
  total: 0
};

//Using dot notation change the total property
cashRegister.total = 2.99;


var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};


//call the add method for our items


//Show the total bill
console.log('Your bill is '+cashRegister.total);
