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

Person = (name) ->
  @name = name
  @introduce = ->
    'Myname is ' + @name
  return
p1 = new Person 'egoing'
console.log p1.introduce()


Template.Lab1.events

Template.Lab1.helpers
  'real': ->

# Lab1: Lifecycle Hooks 
Template.Lab1.created = ->

Template.Lab1.rendered = ->

Template.Lab1.destroyed = ->
