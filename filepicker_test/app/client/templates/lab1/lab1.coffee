#`
#  var func, o, p;
#
#  o = {};
#
#  p = {};
#
#  func = function() {
#    switch (this) {
#      case o:
#        return console.log('o');
#      case p:
#        return console.log('p');
#      case window:
#        return console.log('window');
#    }
#  };
#
#  func();
#
#  func(o);
#
#  func(p);
#
#  func.apply(o);
#
#  func.apply(p);
#
#`
#
#Person = (name) ->
#  @name = name
#  @introduce = ->
#    'My nickname is ' + @name
#  return
#
#Programmer = (name) ->
#  @name = name
#
#Programmer.prototype = new Person()
#Programmer.prototype.coding = ->
#  'Hello coder'
#
#Designer = (name) ->
#  @name = name
#
#Designer.prototype = new Person()
#Designer.prototype.design = ->
#  'Hello designer'
#
#p1 = new Person 'goo'
#pro = new Programmer 'foo'
#design1 = new Designer 'bar'
#
#console.log p1.introduce()
#console.log pro.name
#console.log pro.introduce()
#console.log pro.coding()
#console.log design1.design()
#
#Ultra = ->
#Ultra.prototype.ultraProp = true
#
#Super = ->
#Super.prototype = new Ultra()
#
#Sub = ->
#Sub.prototype = new Super()
#
#o = new Sub()
#console.log o.ultraProp

#`
#  var Sub, Super, Ultra, o;
#
#  Ultra = function () {
#  };
#  Ultra.prototype.ultraProp = true;
#
#  Super = function () {
#  };
#  Super.prototype = new Ultra();
#
#  Sub = function () {
#  };
#  Sub.prototype = new Super();
#
#  o = new Sub();
#  console.log(o.ultraProp);
#  o.ultraProp = 1
#  console.log(o.ultraProp);
#`

#outter = ->
#  title = 'coding everybody'
#  inner2 = ->
#    alert(title)
#inner = outter()
#inner()

a =
  'val':10
b = a
console.log a
console.log b

b.val = 1

console.log a
console.log b



Template.Lab1.events

Template.Lab1.helpers
  helperTo: ->
    counterArray = []
    count = ->
      for i in [1..10]
        counterArray.push i
    count()
    counterArray
  goo: ->

Template.Lab1.created = ->

Template.Lab1.rendered = ->

Template.Lab1.destroyed = ->
