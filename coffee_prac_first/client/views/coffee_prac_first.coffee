Session.setDefault 'counter', 0

Template.hello.helpers
  counter: -> Session.get 'counter'

Template.hello.events
  'click button[name=counter]': ->
    Session.set 'counter', Session.get('counter') + 1
  'click button[name=hw]': ->
    alert 'hello coffee script'
  'click button[name=triger]': ->
    console.log Math.floor Math.random() * 5 + 1
  'click button[name=triger2]': ->
    console.log Math.floor Math.random() * 2
  'click button[name=triger3]': ->
    console.log x for x in [1..10]
  'click button[name=triger4]': ->
    y = x for x in [1..10]
    console.log y

Template.hello.rendered = ->
