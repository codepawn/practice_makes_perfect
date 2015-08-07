(function(){//Person44 = function (){
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
//
//Object.defineProperty(o, 'fullName', {})
//
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
//
// primitive types
//
//myString = "My String";
//myNumber = 5;
//myBoolean = true;
//myNull = null;
//myUndefined = undefined;
//
//object type
//myObject = {};
//
//array "object" type
//myArray = [1, 2];
//
//function type
//myFunction = function () {
//};
//
//custom constructed objects
//myDate = new Date;
//
//Person = function (name) {
//  this.name = name;
//};
//
//Person.prototype.sayHello = function () {
//  return 'Hello, ' + this.name;
//};
//
//me = new Person('Chris');

Images = new Meteor.Collection('images');

Person = function (name) {
  this.name = name;
};

Person.prototype.sayHello = function () {
  return 'Hello, ' + this.name;
};

me = new Person('Chris');

Template.Object.events({
  'click #upload': function () {
    filepicker.pick(
      {
        mimetypes: ['image/gif', 'image/jpeg', 'image/png'],
        multiple: false
      },
      function (InkBlob) {
        var image = Images.findOne({userId: Meteor.userId()});
        if (image) {
          Images.update({_id: image._id},
            {
              $set: {
                filepickerId: _.last(InkBlob.url.split("/"))
              }
            });
        } else {
          Images.insert({
            userId: Meteor.userId(),
            filepickerId: _.last(InkBlob.url.split("/")),
            createdAt: new Date() //this isnt guarnteed accurate, but its ok for this simple demo
          });
        }
      },
      function (FPError) {
        if (FPError && FPError.code !== 101)
          alert(FPError.toString());
      }
    );
  }
});

})();
