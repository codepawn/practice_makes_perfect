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
bob.setAge = function (newAge){
  bob.age = newAge;
};
// here we set bob's age to 40
bob.setAge(20);
// bob's feeling old.  Use our method to set bob's age to 20
console.log(bob.age);
console.log(bob);
