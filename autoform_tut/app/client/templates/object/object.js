//Person44 = function (){
//  this.name = 'Chris';
//  this.year = 2014;
//  this.toString = function(){
//    return this.name + ' ' + this.year;
//  }
//};
//
//person = new Person44();
//
//o = {
//  firstName: 'Evented',
//  lastName: 'Mind'
//};
//
//Object.defineProperty(o, 'fullName', {
//  value: 'Default Value',
//  writable: true,
//  enumerable: true,
//  configurable: true,
//  get: function () {
//    console.log('getting the fullName');
//    return this.firstName
//  }
//})
//;

//Object.defineProperty(o, 'fullName', {})

//SuperParent = {
//  goo: 'goo'
//  toString: function () {
//    return 'SuperParent';
//  }
//};
//
//Parent = {
//  toString: function () {
//    return this.firstName + ' ' + this.lastName
//  }
//};
//
//Parent.__proto__ = SuperParent;
//
//Child = {
//  firstName: 'Evented',
//  lastName: 'Mind'
//};
//
//Child.__proto__ = Parent;

//
//Parent = {
//  toString: function () {
//    return this.firstName + ' ' + this.lastName;
//  }
//};
//
//Child = {
//  firstName: 'Evented',
//  lastName: 'Mind'
//};
//
//Child.__proto__ = Parent;

//
//Person = function (firstName, lastName) {
//  this.firstName = firstName;
//  this.lastName = lastName;
//};
//
//Person.prototype.toString = function () {
//  return this.firstName + ' ' + this.lastName;
//};
//
//Person.prototype.getName = function () {
//  return this.firstName;
//};
//
//person = new Person('Evented', 'Mind');

















