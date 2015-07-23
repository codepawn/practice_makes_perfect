var array = [1, 2, 3];

for (var i = 0; i < array.length; i++) {
  var total;
  total += array[i];
}

console.log(total);

var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for (var i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}


var myArray = [3, true, 'asdf'];

var newArray = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
];

var jagged = [
  [1, 2],
  [1, 2]
];


var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function () {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();


var me = {
  name: 'hyun',
  age: 20,
  say: function () {
    console.log(this.name);
  }
};

var me = {};
me.nam = 'hem';
console.log(me);

me.say();


me.name = 'goo';
me.age = 20;

console.log(me);

var object1 = {};
var object2 = {};
var object3 = {};

object1.name = 'goo';
object2.name = 'foo';

var object = {
  name: 'hyun',
  age: 20
};

var myArray = [3, true, 'gef', object];

console.log(myArray);


var object = {
  name: 'hyun',
  age: 20
};

var myArray = [3, true, 'gef', {
  name: 'hyun',
  age: 20
}, 20, 'goo', {
  name: 'hem'
}];

console.log(myArray);

var newArray = [
  [1, 2, 3],
  [2, 3, {
    source: 'js'
  }, 3]
];


var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  interests: ['Programming', 'Cycling']
};

var myOwnObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  interests: ['Programming', 'Cycling']
};


var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way', 'Redmond', 'WA', '98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop', 'Cupertino', 'CA', '95014']
};

console.log(friends);

var friends = {
  bill: {
    firstName: "Bill",
    lastName: "Gates",
    number: "(206) 555-5555",
    address: ['One Microsoft Way', 'Redmond', 'WA', '98052']
  },
  steve: {
    firstName: "Steve",
    lastName: "Jobs",
    number: "(408) 555-5555",
    address: ['1 Infinite Loop', 'Cupertino', 'CA', '95014']
  }
};

var list = function (obj) {
  for (var prop in obj) {
    console.log(prop);
  }
};

var search = function (name) {
  for (var prop in friends) {
    if (friends[prop].firstName === name) {
      // console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
// search("Bill");
console.log(search("Bill"));


var friends = {
  bill: {
    firstName: 'Bill',
    lastName: 'gate',
    number: 20,
    address: [124, 2134, 2341234, 4]
  },
  steve: {
    firstName: 'Steve',
    lastName: 'jobs',
    number: 20,
    address: [124, 2134, 2341234, 4]
  },
  hem: {
    firstName: 'Hem',
    lastName: 'jung',
    number: 20,
    address: [124, 2134, 2341234, 4]
  }
};

var list = function (obj) {
  for (var prop in obj) {
    console.log(prop);
  }
};

var search = function (name) {
  for (var prop in friends) {
    if (friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

console.log(search('Steve'));
console.log(search('Bill'));

console.log((((3 * 90) === 270) || !(false && (!false)) || "bex".toUpperCase() === "BEX"));
a = (((3 * 90) === 270) || !(false && (!false)) || "bex".toUpperCase() === "BEX");

console.log(true || false);


for (var i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

var review = {
  "Toy Story 2": "Great story. Mean prospector."
};

var review = {
  ToyStory2: "Great story. Mean prospector."
};

console.log(review.ToyStory2);

var getReview = function (movie) {

};

var getReview = function (movie) {
  switch (movie) {
    case 'Toy Story 2':
      return 'Great story Mean prospector.';
    case 'Finding Nemo':
      return 'Cool animation, and funny turtles.';
    case 'The Lion King':
      return 'Great songs.';
    default:
      return "I don't know!";
  }
};

getReview('Toy Story 2');


var getReview = function (movie) {

  switch (movie) {
    case "Toy Story 2":
      return "Great story. Mean prospector.";
    case "Finding Nemo":
      return "Cool animation, and funny turtles.";
    case "The Lion King":
      return "Great songs.";
    default:
      return "I don't know.";
  }
};

getReview("Toy Story 2");

console.log("I'm ready for Objects!");

var bob = {};


var Spencer = {
  age: 22,
  country: "United States"
};

// make your own object here called me
var me = {
  age: 30,
  country: "Ko"
};


var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};
// here we save Bob's information
var name1 = bob.name;
var age1 = bob.age;
// finish this code by saving Susan's information
var name2 = susan.name;
var age2 = susan.age;


// Take a look at our next example object, a dog
var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

bob.name = "Bob Smith";
bob.age = 30;
// Here is susan1, in literal notation
var susan1 = {
  name: "Susan Jordan",
  age: 24
};
susan2.name = 'Susan Jordan';
susan2.age = 24;

// help us make snoopy using literal notation
// Remember snoopy is a "beagle" and is 10 years old.
var snoopy = {
  species: "beagle",
  age: 10
};

// help make buddy using constructor notation
// buddy is a "golden retriever" and is 5 years old
var buddy = {};
buddy.species = "golden retriever";
buddy.age = 5;

var bicycle = {
  speed: 0,
  gear: 1,
  frame_material: "carbon fiber"
};

// Accepts a number x as input and returns its square
var square = function (x) {
  return x * x;
};

// Write the function multiply below
// It should take two parameters and return the product

var multiply = function (x, y) {
  return x * y;
};

result = multiply(10, 10);
console.log(result);


// here is bob again, with his usual properties
var bob = {};
bob.name = "Bob Smith";
bob.age = 30;
console.log(bob);
console.log(bob.age);
// this time we have added a method, setAge
bob.setAge = function (newAge) {
  bob.age = newAge;
};
// here we set bob's age to 40
bob.setAge(20);
// bob's feeling old.  Use our method to set bob's age to 20
console.log(bob.age);
console.log(bob);


var bob = {};
bob.age = 17;
// this time we have added a method, setAge
bob.setAge = function (newAge) {
  bob.age = newAge;
};

bob.getYearOfBirth = function () {
  return 2015 - bob.age;
};
console.log(bob.getYearOfBirth());


// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = {};
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;

// change bob's age to 50 here

// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
  console.log(this.age);
};
// now we make bob
var bob = {};
bob.age = 30;
bob.setAge = setAge;

// make susan here, and first give her an age of 25
var susan = {};
susan.age = 25;
susan.setAge = setAge;

// here, update Susan's age to 35 using the method
susan.setAge(35);

var rectangle = {};
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function (newWidth) {
  this.width = newWidth;
};


// here change the width to 8 and height to 6 using our new methods
rectangle.setHeight(6);
rectangle.setWidth(8);


var square = {};
square.sideLength = 6;
square.calcPerimeter = function () {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function () {
  return this.sideLength * this.sideLength;
};

var p = square.calcPerimeter();
var a = square.calcArea();


// here we make bob using the Object constructor
var bob = {};
bob.name = "Bob Smith";
// add bob's age here and set it equal to 20

bob.age = 20;


function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person('George Washington', 275);

function Cat(age, color) {
  this.age = age;
  this.color = color;
}

// make a Dog constructor here
function Dog(age, color) {
  this.age = age;
  this.color = color;
}


function Person(name, age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person('Sally Bowles', 39);
var holden = new Person('Holden Caulfield', 16);
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);


function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function () {
    return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function () {
    return this.height * 2 + this.width * 2;
  };

}

var rex = new Rectangle(7, 3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();

console.log(area);
console.log(perimeter);


function Rabbit(adjective) {
  this.adjective = adjective;
  this.describeMyself = function () {
    console.log("I am a " + this.adjective + " rabbit");
  };
}

// now we can easily make all of our rabbits

var rabbit1 = new Rabbit('fluffy');
var rabbit2 = new Rabbit('happy');
var rabbit3 = new Rabbit('sleepy');
rabbit1.describeMyself();
rabbit2.describeMyself();
rabbit3.describeMyself();


// Our person constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Now we can make an array of people
var family = [];
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person('timmy', 6);


// Our Person constructor

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Now we can make an array of people
var family = [];
family[0] = new Person('alice', 40);
family[1] = new Person('bob', 42);
family[2] = new Person('michelle', 8);
family[3] = new Person('timmy', 6);

// loop through our new array

for (var prop in family) {
  console.log(family[prop].name);
}


// Our person constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function (person1, person2) {
  return person1.age - person2.age;
};

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice, billy);
console.log(diff);


// Our person constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}
aPerson = new Person('e', 2);
console.log(aPerson);


function Person(name, age) {
  this.name = name;
  this.age = age;
}
// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function (person1, person2) {
  return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function (person1, person2) {
  if (person1.age > person2.age) {
    return person1.age;
  } else {
    return person2.age;
  }
};

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));

var spencer = {
  age: 22,
  country: "United States"
};

// make spencer2 here with constructor notation
var spencer2 = {};
spencer2.age = 22;
spencer2.country = "United States";

var snoopy = a;


var snoopy = {};
snoopy.species = "beagle";
snoopy.age = 10;

// save Snoopy's age and species into variables
// use dot notation for snoopy's species
var species = snoopy.species;

// use bracket notation for snoopy's age
var age = snoopy.age;


// 3 lines required to make harry_potter
var harry_potter = {};
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book(pages, author) {
  this.pages = pages;
  this.author = author;
}

// Use our new constructor to make the_hobbit in one line
var the_hobbit = new Book(320, 'J.R.R. Tolkien');


function Circle(radius) {
  this.radius = radius;
  this.area = function () {
    return Math.PI * this.radius * this.radius;

  };
  // define a perimeter method here
  this.perimeter = function () {
    return 2 * Math.PI * this.radius;
  };
}


var bob = {
  firstName: "Bob",
  lastName: "Jones",
  phoneNumber: "(650) 777-777",
  email: "bob.jones@example.com"
};

console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.email);


var bob = {
  firstName: "Bob",
  lastName: "Jones",
  phoneNumber: "(650) 777-7777",
  email: "bob.jones@example.com"
};

var mary = {
  firstName: 'Mary',
  lastName: 'Johnson',
  phoneNumber: '(650) 888 - 8888',
  email: 'mary.johnson@example.com'
};

contacts = [bob, mary];

console.log(mary.phoneNumber);

var bob = {
  firstName: "Bob",
  lastName: "Jones",
  phoneNumber: "(650) 777-7777",
  email: "bob.jones@example.com"
};

var mary = {
  firstName: "Mary",
  lastName: "Johnson",
  phoneNumber: "(650) 888-8888",
  email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

// printPerson added here


var printPerson = function (person) {
  console.log(person.firstName + ' ' + person.lastName);
};

printPerson(bob);
printPerson(mary);
printPerson(contacts);

console.log(printPerson);

//
var Person = function (a, b, c, d) {
  this.firstName = a;
  this.lastName = b;
  this.phoneNumber = c;
  this.email = d;
  this.printPerson = function () {
    console.log(this.firstName + '' + this.lastName);
  };
};
var mary = new Person("Mary", "Johnson", "(650) 888-8888", "mary.johnson@example.com");

mary.printPerson();
//

function f() {
  for (var i = 0; i < 5; i++);
}
var i = 2;
f();
console.log(i);

//

var bob = {
  firstName: "Bob",
  lastName: "Jones",
  phoneNumber: "(650) 777-7777",
  email: "bob.jones@example.com"
};

var mary = {
  firstName: "Mary",
  lastName: "Johnson",
  phoneNumber: "(650) 888-8888",
  email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
  console.log(person.firstName + " " + person.lastName);
}

var list = function () {
  var contacktsLength = contacts;
  for (i = 0; i < contacktsLength.length; i++) {
    printPerson(contacts[i]);
  }
};

list();


//.DS_Store


var bob = {
  firstName: "Bob",
  lastName: "Jones",
  phoneNumber: "(650) 777-7777",
  email: "bob.jones@example.com"
};

var mary = {
  firstName: "Mary",
  lastName: "Johnson",
  phoneNumber: "(650) 888-8888",
  email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
  console.log(person.firstName + " " + person.lastName);
}

function list() {
  var contactsLength = contacts.length;
  for (var i = 0; i < contactsLength; i++) {
    printPerson(contacts[i]);
  }
}

/*Create a search function
 then call it passing "Jones"*/

var search = function (lastName) {
  var contactsLength = contacts.length;
  for (var prop in contacts) {
    if (contacts[prop].lastName === lastName) {
      printPerson(contacts[prop]);
    }
  }
};

search('Jones');

//.DS_Store


var bob = {
  firstName: "Bob",
  lastName: "Jones",
  phoneNumber: "(650) 777-7777",
  email: "bob.jones@example.com"
};

var mary = {
  firstName: "Mary",
  lastName: "Johnson",
  phoneNumber: "(650) 888-8888",
  email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
  console.log(person.firstName + " " + person.lastName);
}

function list() {
  var contactsLength = contacts.length;
  for (var i = 0; i < contactsLength; i++) {
    printPerson(contacts[i]);
  }
}

/*Create a search function
 then call it passing "Jones"*/

var search = function (lastName) {
  for (var prop in contacts) {
    if (contacts[prop].lastName === lastName) {
      printPerson(contacts[prop]);
    }
  }
};

var add = function (a, b, c, d) {
  this.firstName = a;
  this.lastName = b;
  this.phoneNumber = c;
  this.email = d;
};

contacts[2] = new add('Hyun', 'Ahn', 1234, 'g@gmail.com');

list();


//
//


var james = {
  // add properties to this object!


};

function Person(job, married) {
  this.job = job;
  this.married = married;
}

// create a "gabby" object using the Person constructor!


var a = function () {
  return 'e';
};

var google = function () {
  return 'google';
};
console.log(google());

//.DS_Store


var james = {
  job: 'programmer',
  married: false
};

function Person(job, married) {
  this.job = job;
  this.married = married;
}

// create a "gabby" object using the Person constructor!

var gabby = new Person('student', true);

//


function Person(job, married) {
  this.job = job;
  this.married = married;
  // add a "speak" method to Person!
  this.speak = function () {
    console.log('Hello!');
  };
}

var user = new Person("Codecademy Student", false);
user.speak();


var james = {
  job: "programmer",
  married: false,
  speak: function (argu) {
    switch (argu) {
      case 'great':
        console.log('Hello, I am feeling great');
        break;
      case 'just okay':
        console.log('Hello, I am feeling just okay');
        break;
    }
  }
};

james.speak("great");
james.speak("just okay");

//.DS_Store


var james = {
  job: "programmer",
  married: false,
  sayJob: function () {
    console.log("Hi, I work as a " + this.job);
  }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = 'super programmer';

// james' second job
james.sayJob();

//.DS_Store


var james = {
  job: "programmer",
  married: false
};

// set to the first property name of "james"
var aProperty = "job";

// print the value of the first property of "james"
// using the variable "aProperty"
console.log(james[aProperty]);

//.DS_Store


// complete these definitions so that they will have
// the appropriate types
var anObj = {
  job: "I'm an object!"
};
var aNumber = 42;
var aString = "I'm a string!";

console.log(typeof anObj); // should print "object"
console.log(typeof aNumber); // should print "number"
console.log(typeof aString); // should print "string"

var index = 5;
var result = (typeof index);
console.log(result);
// Output: true

//


var myObj = {
  // finish myObj

};

console.log(myObj.hasOwnProperty('name')); // should print true
console.log(myObj.hasOwnProperty('nickname')); // should print false


var myObj = {
  // finish myObj
  name: 'hyun'

};

console.log(myObj.hasOwnProperty('name')); // should print true
console.log(myObj.hasOwnProperty('nickname')); // should print false


var suitcase = {
  shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty('shirt')) {
  console.log(suitcase.shirt);
} else {
  suitcase.shirt = 'Cool';
}
//.DS_Store


var nyc = {
  fullName: "New York City",
  mayor: "Bill de Blasio",
  population: 8000000,
  boroughs: 5
};

for (var prop in nyc) {
  console.log(nyc[prop]);
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

// make your own class here
var Circle = function (radius) {
  this.radius = radius;
};

//

function Dog(breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function () {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark = function () {
  console.log('Meow');
};
// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark();

//


function Person(name, age) {
  this.name = name;
  this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

// make a person called me with your name and age
// then use printPersonName to print your name
var me = new Person('Hyun', 30);
printPersonName(me);

//


function Dog(breed) {
  this.breed = breed;
  this.google = 'google';
}
Dog.goo = 'google';
Dog.prototype.bark = function () {
  console.log('Woof');
};

var buddy = new Dog("golden Retriever");
var snoopy = new Dog("Beagle");
console.log(buddy);


//.DS_Store


function Cat(name, breed) {
  this.name = name;
  this.breed = breed;
}

// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

// add a method "meow" to the Cat class that will allow
// all cats to print "Meow!" to the console

Cat.prototype.meow = function () {
  console.log('Meow!');
};

// add code here to make the cats meow!

cheshire.meow();
gary.meow();


//.DS_Store


// create your Animal class here

var Animal = function (name, numLegs) {
  this.name = name;
  this.numLegs = numLegs;
};

// create the sayName method for Animal

Animal.prototype.sayName = function () {
  console.log('Hi my name is ' + this.name);
};

// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();

//


function Animal(name, numLegs) {
  this.name = name;
  this.numLegs = numLegs;
}
Animal.prototype.sayName = function () {
  console.log("Hi my name is " + this.name);
};


// create a Penguin constructor here
var Penguin = function (name, numLegs) {
  this.name = name;
  this.numLegs = numLegs;
};

// create a sayName method for Penguins here
Penguin.prototype.sayName = function () {
  console.log("Hi my name is " + this.name);
};

// our test code
var theCaptain = new Penguin("Captain Cook", 2);
theCaptain.sayName();


//


// the original Animal class and sayName method
function Animal(name, numLegs) {
  this.name = name;
  this.numLegs = numLegs;
}
Animal.prototype.sayName = function () {
  console.log("Hi my name is " + this.name);
};

// define a Penguin class

var Penguin = function (name) {
  this.name = name;
  this.numLegs = 2;
};
// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();


//

// the original Animal class and sayName method
function Animal(name, numLegs) {
  this.name = name;
  this.numLegs = numLegs;
}
Animal.prototype.sayName = function () {
  console.log("Hi my name is " + this.name);
};

// define a Penguin class

var Penguin = function (name) {
  this.name = name;
  this.numLegs = 2;
};

Penguin.prototype = new Animal();

var penguin = new Penguin('goo');
penguin.sayName();


//.DS_Store


function Penguin(name) {
  this.name = name;
  this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin
var Emperor = new Penguin();
Emperor.prototype = new Penguin();

// create an "emperor" object and print the number of legs it has
var emperor = new Emperor('foo');
console.log(emperor.numLegs);


function Penguin(name) {
  this.name = name;
  this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin
function Emperor(name) {
  this.name = name;
}
Emperor.prototype = new Penguin();

// create an "emperor" object and print the number of legs it has
var emperor = new Emperor("Linda");

console.log(emperor.name);
console.log(emperor.numLegs);

//.DS_Store


// original classes
function Animal(name, numLegs) {
  this.name = name;
  this.numLegs = numLegs;
  this.isAlive = true;
}

function Penguin(name) {
  this.name = name;
  this.numLegs = 2;
}

function Emperor(name) {
  this.name = name;
  this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log(myEmperor.saying); // should print "Waddle waddle"
console.log(myEmperor.numLegs); // should print 2
console.log(myEmperor.isAlive); // should print true


//.DS_Store


// original classes
function Animal(name) {
  this.name = name;
  this.isAlive = true;
}

function Penguin() {
  this.numLegs = 2;
}

function Emperor() {
  this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal('hem');
Emperor.prototype = new Penguin();

var myEmperor = new Emperor();

console.log(myEmperor.saying); // should print "Waddle waddle"
console.log(myEmperor.numLegs); // should print 2
console.log(myEmperor.isAlive); // should print true
console.log(myEmperor.name); // should print true


//.DS_Store

function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

var john = new Person('John', 'Smith', 30);
var myFirst = john.firstName;
var myLast = john.lastName;

//declare variable myAge set to the age of the john object.

var myAge = john.age;


function Person(first, last, age) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  var bankBalance = 7500;
}

// create your Person

var john = new Person('john', 'kim', 28);

// try to print his bankBalance

console.log(john.backBalance);
//.DS_Store


function Person(first, last, age) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  var bankBalance = 7500;

  this.getBalance = function () {
    // your code should return the bankBalance
    return bankBalance;
  };
}

var john = new Person('John', 'Smith', 30);
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()
console.log(john.getBalance());


//.DS_Store


function bank() {
  var privateAccount = 7500;

  function getPrivate() {
    console.log(privateAccount);
  }

  return getPrivate;
}

var banka = bank();
banka();


//.DS_Store


function init() {
  var name = "Mozilla";
  return displayName;

  function displayName() {
    console.log(name);
  }
}
dis = init();
dis();

//


function makeFunc() {
  var name = "Mozilla";

  function displayName() {
    console.log(name);
  }

  return displayName;
}

makeFunc();


var foo = function () {
  var bar = function () {
    console.log("hey, I'am bar");
  };
};

foo.bar();


function Person(first, last, age) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  var bankBalance = 7500;

  var returnBalance = function () {
    return bankBalance;
  };

  // create the new function here
  this.askTeller = function () {
    return returnBalance;
  };
}

var john = new Person('John', 'Smith', 30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);

//.DS_Store


function Person(first, last, age) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  var bankBalance = 7500;

  this.askTeller = function (pass) {
    if (pass == 1234) return bankBalance;
    else return "Wrong password.";
  };
}

var john = new Person('John', 'Smith', 30);
/* the variable myBalance should access askTeller()
 with a password as an argument  */

var pass = john.askTeller(1234);
console.log(pass);

//


var languages = {
  english: "Hello!",
  french: "Bonjour!",
  notALanguage: 4,
  spanish: "Hola!"
};

// print hello in the 3 different languages
for (var prop in languages) {
  if (typeof languages[prop] === 'string') {
    console.log(languages[prop]);
  }
}

//


function Dog(breed) {
  this.breed = breed;
}

// add the sayHello method to the Dog class
// so all dogs now can say hello
Dog.prototype.sayHello = function () {
  console.log();
};

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();


// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype;
console.log(prototypeType);

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty('hasOwnProperty');
console.log(hasOwn);

//

function StudentReport() {
  this.grade1 = 4;
  this.grade2 = 2;
  this.grade3 = 1;
  this.getGPA = function () {
    return (this.grade1 + this.grade2 + this.grade3) / 3;
  };
}

var myStudentReport = new StudentReport();

for (var x in myStudentReport) {
  if (typeof myStudentReport[x] !== "function") {
    console.log("Muahaha! " + myStudentReport[x]);
  }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());

//

function StudentReport() {
  var grade1 = 4;
  var grade2 = 2;
  var grade3 = 1;
  this.getGPA = function () {
    return (grade1 + grade2 + grade3) / 3;
  };
}

var myStudentReport = new StudentReport();

for (var x in myStudentReport) {
  if (typeof myStudentReport[x] !== "function") {
    console.log("Muahaha! " + myStudentReport[x]);
  }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());


//
var cashRegister = {
  total: 0
};

cashRegister.total = 2.99;
//

var cashRegister = {
  total: 0,
  add: function (itemCost) {
    this.total += itemCost;
  }
};


//call the add method for our items
cashRegister.add(0.98);
cashRegister.add(1.23);
cashRegister.add(4.99);
cashRegister.add(0.45);

//Show the total bill
console.log('Your bill is ' + cashRegister.total);

//


var cashRegister = {
  total: 0,
  //insert the add method here
  add: function (itemCost) {
    this.total += itemCost;
  },
  scan: function (item) {
    switch (item) {
      case "eggs":
        this.add(0.98);
        break;
      case "milk":
        this.add(1.23);
        break;
      case 'magazine':
        this.add(4.99);
        break;
      case 'chocolate':
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
//Scan 2 eggs and 3 magazines

//Show the total bill
console.log('Your bill is ' + cashRegister.total);


//


var cashRegister = {
  total: 0,
  add: function (itemCost) {
    this.total += itemCost;
  },
  scan: function (item, quantity) {
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


var cashRegister = {
  total: 0,
  lastTransactionAmount: 0,
  //Dont forget to add your property
  add: function (itemCost) {
    this.total += itemCost;
    lastTransactionAmount = itemCost;
  },
  scan: function (item, quantity) {
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
  voidLastTransaction: function () {
    this.total -= lastTransactionAmount;
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

//


// create a constructor for the StaffMember class
var StaffMember = function (name, discountPercent) {
  this.name = name;
  this.discountPercent = discountPercent;
};

var sally = new StaffMember("Sally", 5);
var bob = new StaffMember("Bob", 10);
var me = new StaffMember("me", 20);

//Create a StaffMember for yourself called me


//


function StaffMember(name, discountPercent) {
  this.name = name;
  this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally", 5);
var bob = new StaffMember("Bob", 10);
var me = new StaffMember('me', 20);

var cashRegister = {
  total: 0,
  lastTransactionAmount: 0,
  add: function (itemCost) {
    this.total += (itemCost || 0);
    this.lastTransactionAmount = itemCost;
  },
  scan: function (item, quantity) {
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
  voidLastTransaction: function () {
    this.total -= this.lastTransactionAmount;
    this.lastTransactionAmount = 0;
  },
  // Create a new method applyStaffDiscount here
  applyStaffDiscount: function (employee) {
    console.log(employee.discountPercent);
    this.total -= (this.total * (employee.discountPercent / 100));
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


//


function StaffMember(name, discountPercent) {
  this.name = name;
  this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally", 5);
var bob = new StaffMember("Bob", 10);

// Create yourself again as 'me' with a staff discount of 20%

var me = new StaffMember('Me', 20);

var cashRegister = {
  total: 0,
  lastTransactionAmount: 0,

  add: function (itemCost) {
    this.total += (itemCost || 0);
    this.lastTransactionAmount = itemCost;
  },

  scan: function (item, quantity) {
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

  voidLastTransaction: function () {
    this.total -= this.lastTransactionAmount;
    this.lastTransactionAmount = 0;
  },

  // Create a new method applyStaffDiscount here
  applyStaffDiscount: function (employee) {
    console.log(employee.discountPercent);
    this.total -= (this.total * (employee.discountPercent / 100));
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


var app = (function () {
  var privateVar = 'private';
  return privateVar;
}());
console.log(app);

var goo = (function () {
  var privateGoo = 'google';
  return {
    gru: privateGoo
  };
}());
console.log(goo.gru);


var hyun = {
  total: 0,
  goo: 'goo',
  work: function () {
    console.log(this.total);
  },
  add: function () {
    this.total += 1;
  }
};

console.log(hyun.goo);
console.log(hyun.total);
hyun.work();
hyun.add();
console.log(hyun.total);


var clerk = (function () {
  var name = 'Teo';
  var sex = '남자';
  var position = '수석 엔지니어';
  // salary private
  var salary = 2000;
  var taxSalary = 200;
  var totalBonus = 100;
  var taxBonus = 10;

  var payBonus = function () {
    totalBonus = totalBonus - taxBonus;
    return totalBonus;
  };
  var paySalary = function () {
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


var Module5 = (function () {
  var root = this;
  var version = '1.0';
  var Module;
  if (typeof exports !== 'undefined') {
    Module = exports;
  } else {
    Module = root.Module = {};
  }
  Module.getVersion = function () {
    return version;
  };
  return Module;
}());
console.log(Module5.getVersion());
