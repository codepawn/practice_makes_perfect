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

var myArray = {};
