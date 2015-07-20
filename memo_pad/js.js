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
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();




var me = {
  name: 'hyun',
  age: 20,
  say: function() {
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

var list = function(obj) {
  for (var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
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

var list = function(obj) {
  for (var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
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

var getReview = function(movie) {

};

var getReview = function(movie) {
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


var getReview = function(movie) {

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
var square = function(x) {
  return x * x;
};

// Write the function multiply below
// It should take two parameters and return the product

var multiply = function(x, y) {
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
bob.setAge = function(newAge) {
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
bob.setAge = function(newAge) {
  bob.age = newAge;
};

bob.getYearOfBirth = function() {
  return 2015 - bob.age;
};
console.log(bob.getYearOfBirth());



// here we define our method using "this", before we even introduce bob
var setAge = function(newAge) {
  this.age = newAge;
};
// now we make bob
var bob = {};
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;

// change bob's age to 50 here

// here we define our method using "this", before we even introduce bob
var setAge = function(newAge) {
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
rectangle.setHeight = function(newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function(newWidth) {
  this.width = newWidth;
};


// here change the width to 8 and height to 6 using our new methods
rectangle.setHeight(6);
rectangle.setWidth(8);


var square = {};
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function() {
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
  this.calcArea = function() {
    return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function() {
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
  this.describeMyself = function() {
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
var ageDifference = function(person1, person2) {
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
var ageDifference = function(person1, person2) {
  return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function(person1, person2) {
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
  this.area = function() {
    return Math.PI * this.radius * this.radius;

  };
  // define a perimeter method here
  this.perimeter = function() {
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


var printPerson = function(person) {
  console.log(person.firstName + ' ' + person.lastName);
};

printPerson(bob);
printPerson(mary);
printPerson(contacts);

console.log(printPerson);

//
var Person = function(a, b, c, d) {
  this.firstName = a;
  this.lastName = b;
  this.phoneNumber = c;
  this.email = d;
  this.printPerson = function() {
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

var list = function() {
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

var search = function(lastName) {
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

var search = function(lastName) {
  for (var prop in contacts) {
    if (contacts[prop].lastName === lastName) {
      printPerson(contacts[prop]);
    }
  }
};

var add = function(a, b, c, d) {
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
